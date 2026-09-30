"use client";

import dynamic from "next/dynamic";
import { Component, useState, type ReactNode } from "react";
import type { GlobeProps } from "./geo";

// three.js only downloads once this renders, which GlobalSection delays until the section is near.
const WebGLGlobe = dynamic(() => import("./WebGLGlobe"), { ssr: false });

function hasWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}

class HideOnError extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export default function WebGLGlobeLoader(props: GlobeProps) {
  const [supported] = useState(hasWebGL);
  const [ready, setReady] = useState(false);
  if (!supported) return null;

  return (
    <HideOnError>
      <div className={`globe-fade${ready ? " ready" : ""}`}>
        <WebGLGlobe {...props} onReady={() => setReady(true)} />
      </div>
    </HideOnError>
  );
}
