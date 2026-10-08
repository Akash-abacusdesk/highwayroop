import { createSelector, createSlice } from '@reduxjs/toolkit'

// Single source of truth for every business's product portfolio. Images live in public/assets/<image>.webp.
export type Product = { business: string; group: string; image: string; name: string }
type ProductsState = { groups: Record<string, Record<string, string>>; items: Product[] }

const pad = (n: number) => String(n).padStart(2, '0')
const drivetrain = (group: string, n: number, name: string): Product =>
  ({ business: 'drivetrain', group, image: `driveline-product-${pad(n)}`, name })
const steering = (group: string, n: number, name: string): Product =>
  ({ business: 'steering-suspension', group, image: `steering-product-${pad(n)}`, name })
const lightweighting = (group: string, n: number, name: string): Product =>
  ({ business: 'lightweighting', group, image: `lightweighting-product-${pad(n)}`, name })

const initialState: ProductsState = {
  groups: {
    drivetrain: {
      shafts: 'Shafts & pinions',
      differential: 'Differential components',
      joints: 'Yokes & joints',
      housings: 'Housings & flanges',
    },
    'steering-suspension': {
      yokes: 'Steering yokes',
      joints: 'Universal joints',
      shafts: 'Steering shafts',
    },
    lightweighting: {
      cooling: 'Cooling & fan drive',
      ev: 'EV housings',
      structural: 'Brackets & covers',
    },
  },
  items: [
    drivetrain('shafts', 3, 'Forged drivetrain shaft'), drivetrain('shafts', 4, 'Splined transmission shaft'),
    drivetrain('shafts', 6, 'Precision shaft component'), drivetrain('shafts', 14, 'Machined pinion shaft'),
    drivetrain('differential', 10, 'Differential assembly'), drivetrain('differential', 8, 'Differential gear'),
    drivetrain('differential', 9, 'Differential side gear'), drivetrain('differential', 11, 'Differential housing'),
    drivetrain('joints', 13, 'Precision yokes'), drivetrain('joints', 31, 'Machined yoke family'),
    drivetrain('joints', 32, 'Forged yoke'), drivetrain('joints', 33, 'Tubular drivetrain component'),
    drivetrain('housings', 27, 'Machined housing'), drivetrain('housings', 35, 'Differential carrier'),
    drivetrain('housings', 36, 'Splined flange'), drivetrain('housings', 37, 'Machined flange plate'),

    // Names identified from the photos; confirm against the approved catalogue.
    steering('yokes', 1, 'Forged steering yoke'), steering('yokes', 2, 'Machined double-ear yoke'),
    steering('yokes', 3, 'Forged tube yokes'), steering('yokes', 15, 'Forged double-eye yoke'),
    steering('joints', 4, 'Steering universal joint'), steering('joints', 5, 'Clamp-type steering joint'),
    steering('joints', 6, 'Pinch bolt yoke joint'), steering('joints', 7, 'Splined shaft with universal joint'),
    steering('joints', 12, 'Steering shaft joint assembly'),
    steering('shafts', 8, 'Steering pinion shaft'), steering('shafts', 13, 'Splined pinion shaft'),
    steering('shafts', 9, 'Intermediate shaft with joint'), steering('shafts', 10, 'Articulated intermediate shaft'),
    steering('shafts', 14, 'Splined steering shafts'), steering('shafts', 11, 'Steering column flange assembly'),

    lightweighting('cooling', 1, 'Die-cast viscous fan clutch housings'), lightweighting('cooling', 10, 'Cooling fan with viscous clutch'),
    lightweighting('cooling', 2, 'Fan drive pulley assembly'), lightweighting('cooling', 9, 'Water pump housing and impeller'),
    lightweighting('ev', 7, 'EV motor housing'), lightweighting('ev', 8, 'Electric motor housing with end cover'),
    lightweighting('ev', 5, 'EV power electronics housing'),
    lightweighting('structural', 3, 'Die-cast mounting brackets'), lightweighting('structural', 4, 'Die-cast covers and housings'),
    lightweighting('structural', 6, 'Aluminium mounting flange'),
  ],
}

const productsSlice = createSlice({ name: 'products', initialState, reducers: {} })
export default productsSlice.reducer

type RootLike = { products: ProductsState }

export const selectGroups = (s: RootLike, business: string) => s.products.groups[business] ?? {}
export const selectProducts = createSelector(
  [(s: RootLike) => s.products.items, (_: RootLike, business: string) => business],
  (items, business) => items.filter(p => p.business === business),
)
