import type { Card } from './CardGrid'

// Business page content (Website Content Master, revised agency version). Rendered by BusinessSection in order:
// overview → Technology & Capabilities (+ splits) → Products & Solutions → blocks → Locations → closing.
// ponytail: Drivetrain's opening sections weren't in the supplied master, so it keeps the earlier copy and steps.

export type Split = { title: string; text: string; image: string; alt: string; bullets?: string[] }
export type Block =
  | { kind: 'cards'; title: string; text?: string; cards: Card[] }
  | ({ kind: 'split' } & Split)
  | { kind: 'process'; title: string; steps: string[]; text: string }
export type BusinessPage = {
  overview?: { title: string; text: string }
  capabilities: Card[]
  splits?: Split[]
  products?: { text: string; categories: Card[] }
  blocks: Block[]
  locations: { text: string; states: string[] }
  closing?: { title: string; text: string }
}

export const BUSINESS_PAGES: Record<string, BusinessPage> = {
  drivetrain: {
    capabilities: [
      { tag: 'ENGINEERING', title: 'Design and simulate', text: '3D modelling, forging and casting simulation, gear analysis, CAD/CAM and FEA.' },
      { tag: 'TOOLING', title: 'Prepare production', text: 'In-house die design and manufacturing, die sinking, VMC, CNC lathe, EDM and wire-cut.' },
      { tag: 'FORMING', title: 'Create the component', text: 'Hot, warm and cold forging, billet preparation, temperature-controlled presses and reduce rolling.' },
      { tag: 'MACHINING', title: 'Achieve precision', text: 'CNC turning, turn-mill, VMC, honing, grinding, broaching, spline rolling and gear hobbing.' },
      { tag: 'TREATMENT', title: 'Develop performance', text: 'GCN+O, mesh belt furnaces, normalising, induction hardening, sealed quench and surface coating.' },
      { tag: 'VALIDATION', title: 'Verify requirements', text: 'CMM, gear, form, roughness, material, torque and endurance testing.' },
    ],
    splits: [
      { title: 'Forming and machining at industrial scale.', image: 'driveline-forming-machining', alt: 'Engineer inspecting a machined component beside a CNC machine',
        text: 'Hot and warm presses range from 600T to 2500T; cold forging presses range from 100T to 1000T. The presentation also lists 800+ CNC turning and turn-mill machines, 90+ VMCs, 40+ broaching machines, 25+ honing machines and 20 CNC grinding machines.' },
      { title: 'Quality is part of the process.', image: 'driveline-quality', alt: 'Engineer running a Zeiss CMM inspection on a machined housing',
        text: 'Capabilities include advanced metrology, CMMs, gear testing, roundness and roughness measurement, material testing, functional testing and in-house calibration.' },
    ],
    blocks: [],
    locations: {
      text: 'Drivetrain’s manufacturing footprint supports customer programmes across key automotive manufacturing regions in India, complemented by international warehousing and customer proximity.',
      states: ['Haryana', 'Punjab', 'Maharashtra'],
    },
    closing: {
      title: 'Built for demanding applications',
      text: 'Drivetrain combines engineering expertise, manufacturing depth and quality systems to support customers from product development through production.',
    },
  },

  'steering-suspension': {
    overview: {
      title: 'Components where performance matters',
      text: 'Steering and suspension systems demand consistency across dimensions, materials, manufacturing processes and operating conditions. Steering & Suspension combines precision manufacturing and testing capabilities to support applications where control, durability and functional performance are critical.',
    },
    capabilities: [
      { title: 'Forging', text: 'Precision forging capabilities support the production of high-strength components for demanding steering and suspension applications.' },
      { title: 'Precision Machining', text: 'Machining capabilities enable dimensional accuracy and consistent production across critical components.' },
      { title: 'Heat Treatment', text: 'Controlled heat-treatment processes support required material properties and component performance.' },
      { title: 'Assembly', text: 'Assembly capabilities bring individual components together into functional systems and assemblies.' },
      { title: 'Testing & Validation', text: 'Application-focused testing supports functional performance, durability and production consistency.' },
    ],
    products: {
      text: 'Steering & Suspension serves critical vehicle systems through a portfolio of precision components and assemblies.',
      categories: [
        { title: 'Steering Components', text: 'Precision-engineered components designed for demanding steering applications.' },
        { title: 'Steering System Assemblies', text: 'Components and assemblies manufactured to support consistent system performance.' },
        { title: 'Suspension Applications', text: 'Precision components supporting vehicle suspension systems and their demanding operating conditions.' },
      ],
    },
    blocks: [
      { kind: 'cards', title: 'Engineering for functional performance',
        text: 'The business combines manufacturing expertise with application-focused engineering to address the dimensional, material and functional requirements of safety-critical vehicle systems.',
        cards: [
          { title: 'Dimensional Accuracy', text: 'Controlled manufacturing processes support consistent component geometry.' },
          { title: 'Material Performance', text: 'Process and heat-treatment capabilities support required material characteristics.' },
          { title: 'Functional Validation', text: 'Testing capabilities evaluate components against application requirements.' },
          { title: 'Production Consistency', text: 'Integrated manufacturing and quality processes support repeatable production at scale.' },
        ] },
      { kind: 'split', title: 'Testing beyond measurement', image: 'quality-lab', alt: 'Engineer inspecting a machined component on a coordinate measuring machine',
        text: 'Testing capabilities extend beyond dimensional inspection to evaluate functional performance under demanding conditions.',
        bullets: ['Lash testing', 'Flex-torque testing', 'Online steering-link testing', 'Seven-step endurance testing', 'Metrology and dimensional inspection', 'Material testing'] },
      { kind: 'process', title: 'Manufacturing', steps: ['Forging', 'Machining', 'Heat Treatment', 'Assembly', 'Testing'],
        text: 'Steering & Suspension brings together complementary manufacturing processes across the component lifecycle. Our integrated approach supports control over critical manufacturing parameters while maintaining consistency through production.' },
    ],
    locations: {
      text: 'Steering & Suspension serves automotive programmes through its manufacturing footprint in India, supported by international warehousing and customer proximity.',
      states: ['Haryana', 'Tamil Nadu'],
    },
    closing: {
      title: 'Built around vehicle performance',
      text: 'From precision components to functional assemblies, Steering & Suspension combines manufacturing capability, testing expertise and application understanding for demanding vehicle systems.',
    },
  },

  lightweighting: {
    overview: {
      title: 'Complex forms. Efficient structures.',
      text: 'Aluminium die casting enables complex geometries and integrated component designs while supporting weight-conscious vehicle architectures. Lightweighting brings together casting, tooling, machining, finishing and assembly capabilities through an integrated manufacturing route.',
    },
    capabilities: [
      { title: 'Aluminium Die Casting', text: 'High-pressure and gravity die casting capabilities support the production of complex aluminium components across demanding automotive applications.',
        notes: ['HPDC: 100-tonne to 1,650-tonne presses', 'GDC: Tilting gravity die casting'] },
      { title: 'Tool Design & Development', text: 'In-house tooling capabilities support die design and development for complex casting applications.' },
      { title: 'Precision Machining', text: 'Machining capabilities support dimensional accuracy and finishing requirements for cast components.' },
      { title: 'Surface Finishing', text: 'In-house powder coating and other secondary processes provide additional finishing capabilities within the manufacturing ecosystem.' },
      { title: 'Assembly', text: 'Integrated assembly capabilities enable finished components and assemblies to be delivered through a connected production route.' },
    ],
    products: {
      text: 'Lightweighting supports complex aluminium component applications across evolving vehicle architectures.',
      categories: [
        { title: 'Aluminium Die-Cast Components', text: 'Complex cast components manufactured for demanding automotive applications.' },
        { title: 'Machined Components', text: 'Precision-machined aluminium components produced to application-specific dimensional requirements.' },
        { title: 'Integrated Components & Assemblies', text: 'Cast, machined, finished and assembled solutions delivered through an integrated manufacturing route.' },
      ],
    },
    blocks: [
      { kind: 'process', title: 'Engineering the complete casting route',
        steps: ['Design', 'Simulation', 'Tooling', 'Casting', 'Machining', 'Finishing', 'Assembly'],
        text: 'From initial design through finished assembly, the manufacturing process brings together engineering, simulation, tooling and production capabilities. Casting simulation and process engineering support the development and optimisation of complex components before production.' },
      { kind: 'cards', title: 'Manufacturing for casting complexity',
        cards: [
          { title: 'Secondary Processes', text: 'Shot blasting, ultrasonic washing, vibro finishing, impregnation and casting stress relieving support component quality and finishing requirements.' },
          { title: 'Surface Finishing', text: 'In-house powder coating capability provides an integrated route for selected component applications.' },
          { title: 'Process Technology', text: 'Vacuum systems, in-mould temperature control and jet cooling support controlled die-casting processes.' },
        ] },
      { kind: 'split', title: 'Built for evolving vehicle architectures', image: 'lightweighting-ev', alt: 'Aluminium die-cast housings and structural parts for electric vehicles',
        text: 'Lightweighting capabilities support complex aluminium applications across established ICE platforms and emerging EV architectures, where component integration, geometry and weight efficiency are increasingly important.' },
    ],
    locations: {
      text: 'Lightweighting capabilities support customers through manufacturing operations in India, complemented by international customer proximity and warehousing.',
      states: ['Karnataka', 'Tamil Nadu'],
    },
  },
}
