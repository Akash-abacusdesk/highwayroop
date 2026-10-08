import { createSelector, createSlice } from '@reduxjs/toolkit'

// Single source of truth for every business's product portfolio. Images live in public/assets/<image>.webp.
export type Product = { business: string; group: string; image: string; name: string }
export type ProductCategory = { title: string; text: string }
type ProductsState = {
  intro: Record<string, { text: string; categories: ProductCategory[] }>
  groups: Record<string, Record<string, string>>
  items: Product[]
}

const pad = (n: number) => String(n).padStart(2, '0')
const drivetrain = (group: string, n: number, name: string): Product =>
  ({ business: 'drivetrain', group, image: `drivetrain-product-${pad(n)}`, name })
const steering = (group: string, n: number, name: string): Product =>
  ({ business: 'steering-suspension', group, image: `steering-product-${pad(n)}`, name })
const lightweighting = (group: string, n: number, name: string): Product =>
  ({ business: 'lightweighting', group, image: `lightweighting-product-${pad(n)}`, name })

const initialState: ProductsState = {
  // Products & Solutions intro and category cards (Website Content Master); Drivetrain has none in the master.
  intro: {
    'steering-suspension': {
      text: 'Steering & Suspension serves critical vehicle systems through a portfolio of precision components and assemblies.',
      categories: [
        { title: 'Steering Components', text: 'Precision-engineered components designed for demanding steering applications.' },
        { title: 'Steering System Assemblies', text: 'Components and assemblies manufactured to support consistent system performance.' },
        { title: 'Suspension Applications', text: 'Precision components supporting vehicle suspension systems and their demanding operating conditions.' },
      ],
    },
    lightweighting: {
      text: 'Lightweighting supports complex aluminium component applications across evolving vehicle architectures.',
      categories: [
        { title: 'Aluminium Die-Cast Components', text: 'Complex cast components manufactured for demanding automotive applications.' },
        { title: 'Machined Components', text: 'Precision-machined aluminium components produced to application-specific dimensional requirements.' },
        { title: 'Integrated Components & Assemblies', text: 'Cast, machined, finished and assembled solutions delivered through an integrated manufacturing route.' },
      ],
    },
  },
  groups: {
    drivetrain: {
      shafts: 'Shafts & pinions',
      differential: 'Differential components',
      joints: 'Yokes & joints',
      housings: 'Housings & flanges',
      engine: 'Engine components',
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
    // Names identified from the photos; confirm against the approved catalogue.
    drivetrain('shafts', 1, 'Transmission mainshaft with gears'), drivetrain('shafts', 2, 'Splined output shaft'),
    drivetrain('shafts', 4, 'Splined input shaft'), drivetrain('shafts', 6, 'Flanged pinion shaft'),
    drivetrain('shafts', 7, 'Spur gear shaft'), drivetrain('shafts', 3, 'Flanged axle shaft'),
    drivetrain('shafts', 24, 'Flanged drive shaft'), drivetrain('shafts', 20, 'Flanged output shaft'),
    drivetrain('differential', 14, 'Differential assembly with crown wheel'), drivetrain('differential', 13, 'Differential case assembly'),
    drivetrain('differential', 5, 'Differential housing'), drivetrain('differential', 11, 'Spiral bevel crown wheel'),
    drivetrain('differential', 12, 'Bevel gear'),
    drivetrain('joints', 17, 'CV joint assembly'), drivetrain('joints', 15, 'CV joint outer race'),
    drivetrain('joints', 16, 'Tripod spider'), drivetrain('joints', 22, 'Forged yoke'),
    drivetrain('joints', 23, 'Link rod'),
    drivetrain('housings', 8, 'Flanged hub assembly'), drivetrain('housings', 9, 'Companion flanges'),
    drivetrain('housings', 10, 'Machined drive plate'), drivetrain('housings', 18, 'Differential cover'),
    drivetrain('engine', 19, 'Forged crankshaft'), drivetrain('engine', 21, 'Connecting rod'),

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

export const selectIntro = (s: RootLike, business: string) => s.products.intro[business]
export const selectGroups = (s: RootLike, business: string) => s.products.groups[business] ?? {}
export const selectProducts = createSelector(
  [(s: RootLike) => s.products.items, (_: RootLike, business: string) => business],
  (items, business) => items.filter(p => p.business === business),
)
