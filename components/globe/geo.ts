import type { Feature, FeatureCollection, MultiLineString, MultiPolygon as GeoMultiPolygon } from "geojson";
import type { MultiPolygon, Polygon } from "topojson-specification";
import { feature, merge, mesh } from "topojson-client";
import type { GeometryCollection, Topology } from "topojson-specification";

export type Store = { id: string; name: string; city: string; latitude: number; longitude: number; office?: boolean; address?: string };

export type Country = {
  id: string;
  name: string;
  /** ISO 3166-1 numerics of the countries to outline and highlight when opened. */
  isoNumerics?: string[];
  latitude: number;
  longitude: number;
  /** Globe scale when opened; 1 = whole globe. */
  zoom: number;
  stores: Store[];
};

export type GlobeProps = {
  countries: Country[];
  activeCountryId: string | null;
  activeStoreId: string | null;
  hoveredId: string | null;
  inView: boolean;
  reducedMotion: boolean;
};

export type World = {
  land: Feature | FeatureCollection;
  coast: MultiLineString;
  borders: MultiLineString;
  countries: Map<string, Feature>;
  /** One outline for a set of countries, internal borders dissolved. */
  region: (ids: string[]) => Feature;
};

// Shared by both renderers so they look identical.
export const GLOBE_COLORS = {
  ocean: "#15324b",
  grid: "#1d4060",
  land: "#6d8b61",
  landActive: "#b9c99a",
  coast: "#4f6b47",
  marker: "#e4e7df",
  markerHover: "#ffffff",
  signal: "#d6392b",
};

// cubic-bezier(0.22, 1, 0.36, 1) from the spec.
export const EASE = [0.22, 1, 0.36, 1] as const;
export const TRANSITION_S = 1.4;
export const STORE_ZOOM_FACTOR = 1.8;
export const MAX_ZOOM = 12;

type Atlas = Topology<{ countries: GeometryCollection; land: GeometryCollection }>;
const cache = new Map<string, Promise<World>>();

// world-atlas (Natural Earth) draws India's de facto borders. India is replaced with its official outline
// (india-official.json), and the atlas border lines that run through that outline are left out.
const INDIA = "356";
const OFF_INDIA = new Set(["586", "156"]); // Pakistan-China line runs through the official India outline
const id = (g: { id?: string | number }) => String(g.id);

function toWorld(topo: Atlas, india: Feature): World {
  const countries = new Map<string, Feature>();
  for (const f of (feature(topo, topo.objects.countries) as FeatureCollection).features) {
    // First wins: "036" is both Australia and Ashmore Is. in the atlas.
    if (!countries.has(String(f.id))) countries.set(String(f.id), f);
  }
  countries.set(INDIA, india);
  const atlasBorders = mesh(topo, topo.objects.countries, (a, b) =>
    a !== b && id(a) !== INDIA && id(b) !== INDIA && !(OFF_INDIA.has(id(a)) && OFF_INDIA.has(id(b))),
  );
  const indiaRings = (india.geometry as GeoMultiPolygon).coordinates.flat() as unknown as MultiLineString["coordinates"];
  return {
    land: feature(topo, topo.objects.land),
    coast: mesh(topo, topo.objects.land),
    borders: { type: "MultiLineString", coordinates: [...atlasBorders.coordinates, ...indiaRings] },
    countries,
    region: (ids) => {
      const rest = ids.filter((i) => i !== INDIA);
      if (rest.length === ids.length) {
        return { type: "Feature", properties: {}, geometry: merge(topo, topo.objects.countries.geometries.filter((g) => ids.includes(id(g))) as (Polygon | MultiPolygon)[]) };
      }
      if (!rest.length) return india;
      const others = merge(topo, topo.objects.countries.geometries.filter((g) => rest.includes(id(g))) as (Polygon | MultiPolygon)[]);
      return { type: "Feature", properties: {}, geometry: { type: "MultiPolygon", coordinates: [...others.coordinates, ...(india.geometry as GeoMultiPolygon).coordinates] } } as Feature;
    },
  };
}

// Lazy so the atlas stays out of the initial bundle. 110m (~100KB) for the whole globe,
// 50m (~750KB) for close-ups where 110m coastlines turn blocky.
export function loadWorld(detail: "110m" | "50m") {
  let world = cache.get(detail);
  if (!world) {
    const json = detail === "50m" ? import("world-atlas/countries-50m.json") : import("world-atlas/countries-110m.json");
    world = Promise.all([json, import("./india-official.json")]).then(([m, i]) => toWorld(m.default as unknown as Atlas, i.default as unknown as Feature));
    cache.set(detail, world);
  }
  return world;
}

export type Focus = { latitude: number; longitude: number; zoom: number };

/** Where the globe should look: the open store, else the open country, else null (whole globe). */
export function focusFor(countries: Country[], countryId: string | null, storeId: string | null): Focus | null {
  const country = countries.find((c) => c.id === countryId);
  if (!country) return null;
  const store = country.stores.find((s) => s.id === storeId);
  if (store) return { ...store, zoom: store.office ? MAX_ZOOM : Math.min(country.zoom * STORE_ZOOM_FACTOR, MAX_ZOOM) };
  return country;
}

/** `to` shifted by whole periods so the move from `from` is the short way round. */
export function shortestAngle(from: number, to: number, period: number) {
  return from + ((((to - from) % period) + period * 1.5) % period) - period / 2;
}

/** Zoom interpolated in log space so 1x to 9x feels even, not front-loaded. */
export function lerpZoom(from: number, to: number, t: number) {
  return from * (to / from) ** t;
}
