export const industries = [
  {
    id: 'construction',
    name: 'Construction & Infrastructure',
    heroTag: 'Construction Industry',
    heroTitle: 'Modular housing for construction projects',
    heroDesc:
      'Worker camps, site offices, dining halls, and storage units for infrastructure projects of any scale. Deploy in days, not months.',
    overview:
      'We supply complete modular camp solutions for construction projects worldwide. From a single site office to a 500-worker camp, every unit is fabricated in our factory, shipped flat-packed, and assembled on site with minimal labor.',
    bestAt: ['Fast deployment', 'Reusable units', 'Scalable capacity', 'Low site labor'],
    alsoGood: ['Bunk beds, bedding, lockers', 'Canteen & kitchen units', 'Shower & toilet containers'],
    bestFor: 'Road, bridge, dam, and building projects',
    specs: [
      { label: 'Typical Project Size', value: '50 – 500 workers' },
      { label: 'Deployment Time', value: '1–2 weeks', status: 'excellent' },
      { label: 'Unit Loading', value: '8–10 units / 40HQ' },
      { label: 'Reusability', value: 'Multiple relocations' },
      { label: 'Electrical', value: 'Pre-wired, CE certified' },
    ],
    products: ['Foldable Container', 'Flat Pack Container', 'Container Office'],
  },
  {
    id: 'mining-energy',
    name: 'Mining & Energy',
    heroTag: 'Mining & Energy',
    heroTitle: 'Remote camps built for harsh environments',
    heroDesc:
      'Worker accommodations, field offices, and bore camp facilities built to withstand desert heat, dust, and extreme conditions.',
    overview:
      'Mining and energy sites demand shelter that performs in remote, harsh environments. Our containers are engineered for extreme temperatures, dust storms, and rough handling — fully insulated, fully electrified, and ready for off-grid operation.',
    bestAt: ['Extreme climate resistance', 'Off-grid ready', 'Dust & sand protection', 'Heavy-duty build'],
    alsoGood: ['Solar power packages', 'Water storage & treatment', 'Communication rooms'],
    bestFor: 'Mining camps, oil & gas fields, power plants',
    specs: [
      { label: 'Temperature Range', value: '-40°C to +55°C', status: 'excellent' },
      { label: 'Insulation', value: '50–100mm Rockwool / PU' },
      { label: 'Wind Rating', value: 'Up to 180 km/h' },
      { label: 'Solar Ready', value: 'Roof mounting pre-installed' },
      { label: 'Life Expectancy', value: '20+ years' },
    ],
    products: ['Foldable Container', 'Expandable Container', 'Flat Pack Container'],
  },
  {
    id: 'residential-hospitality',
    name: 'Residential & Hospitality',
    heroTag: 'Residential & Hospitality',
    heroTitle: 'Homes and stays built for comfort',
    heroDesc:
      'Luxury villas, holiday homes, Airbnb units, and glamping pods designed for comfort, aesthetics, and long-term living.',
    overview:
      'Modular living doesn\'t mean compromising on comfort or style. Our villas and expandable homes are custom-designed to your aesthetic — premium finishes, large glass windows, and fully fitted kitchens and bathrooms.',
    bestAt: ['Custom design', 'Premium finishes', 'Energy efficient', 'Quick move-in'],
    alsoGood: ['Loft bedrooms', 'Deck & outdoor spaces', 'Smart home wiring'],
    bestFor: 'Permanent homes, holiday rentals, boutique hotels',
    specs: [
      { label: 'Custom Sizes', value: '80 m² – 500 m²' },
      { label: 'Stories', value: '1–2 floors' },
      { label: 'Build Time', value: '35–60 days', status: 'good' },
      { label: 'Insulation', value: 'PU / Rockwool' },
      { label: 'Foundation', value: 'Simple concrete slab' },
    ],
    products: ['Light Steel Villa', 'Expandable Container', 'Luxury Tiny House'],
  },
  {
    id: 'emergency-relief',
    name: 'Emergency & Relief',
    heroTag: 'Emergency Relief',
    heroTitle: 'Shelter deployed when it matters most',
    heroDesc:
      'Rapid-response housing for disaster relief, refugee camps, and emergency medical facilities. Fold, ship, deploy in minutes.',
    overview:
      'When disaster strikes, speed and reliability matter. Our foldable shelters deploy in 4 minutes per unit, require no tools, and can be stacked, connected, and fitted out as hospitals, clinics, or family housing.',
    bestAt: ['4-minute deployment', 'Tool-free setup', 'Stackable & connectable', 'Flat-packed shipping'],
    alsoGood: ['Clinic & hospital layout', 'Toilet & shower blocks', 'Storage & logistics units'],
    bestFor: 'Earthquakes, floods, refugee crises, emergency response',
    specs: [
      { label: 'Setup Time', value: '4 minutes / unit', status: 'excellent' },
      { label: 'Loading (40HQ)', value: '18–20 units' },
      { label: 'Occupancy', value: '4–8 people / unit' },
      { label: 'Life Span', value: '10+ years' },
      { label: 'Connectivity', value: 'Side-by-side linking' },
    ],
    products: ['Foldable Container', 'Flat Pack Container'],
  },
  {
    id: 'education-healthcare',
    name: 'Education & Healthcare',
    heroTag: 'Education & Healthcare',
    heroTitle: 'Schools and clinics, built fast',
    heroDesc:
      'Classrooms, clinics, field hospitals, and laboratories for remote and underserved communities. Comfortable, hygienic, and code-compliant.',
    overview:
      'We build modular education and healthcare facilities that meet building codes and hygiene standards. Fully fitted classrooms, examination rooms, and operating theaters delivered as complete packages.',
    bestAt: ['Hygienic interiors', 'HVAC ready', 'Acoustic separation', 'Code-compliant design'],
    alsoGood: ['Library & admin blocks', 'Pharmacy & labs', 'Nurse housing'],
    bestFor: 'Rural schools, mobile clinics, field hospitals',
    specs: [
      { label: 'Room Sizes', value: 'Custom to your plan' },
      { label: 'HVAC', value: 'Split system ready' },
      { label: 'Floor', value: 'Anti-static vinyl available' },
      { label: 'Warranty', value: '2 years' },
      { label: 'Compliance', value: 'CE / ISO certified' },
    ],
    products: ['Flat Pack Container', 'Container Office', 'Light Steel Villa'],
  },
  {
    id: 'military-government',
    name: 'Military & Government',
    heroTag: 'Military & Government',
    heroTitle: 'Rapid-deployment facilities for mission readiness',
    heroDesc:
      'Barracks, command centers, guard posts, and secure facilities designed for rapid deployment and long-term durability.',
    overview:
      'Our military and government-grade shelters are built for rapid mobilization and sustained operation. Secure, weather-resistant, and configurable for command, accommodation, or logistics.',
    bestAt: ['Rapid deployment', 'Secure build', 'Weather resistance', 'Discreet finish'],
    alsoGood: ['Guard booths & checkpoints', 'Equipment storage', 'Kitchen & mess halls'],
    bestFor: 'Forward operating bases, training camps, checkpoints',
    specs: [
      { label: 'Setup Time', value: 'Hours, not days', status: 'excellent' },
      { label: 'Discreet Colors', value: 'OD green / sand / gray' },
      { label: 'Security', value: 'Reinforced doors & windows' },
      { label: 'Communications', value: 'Shielded rooms available' },
      { label: 'Lifespan', value: '15+ years' },
    ],
    products: ['Foldable Container', 'Flat Pack Container', 'Container Office'],
  },
];
