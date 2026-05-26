import { SolarPackage, ServiceItem, PortfolioProject, IndustryItem } from "./types";

export const BRAND_COLORS = {
  primary: "#0c5132", // Forest Green of Logo
  primaryHover: "#0a4027",
  secondary: "#fbbf24", // Sun Yellow
  secondaryHover: "#f59e0b",
  lightBg: "#f4f7f5",
  darkBg: "#062316",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "solar-energy-solutions",
    title: "Solar Energy Solutions",
    category: "energy",
    description: "Tailored solar installations designed to provide reliable, stable, and cost-effective electricity.",
    iconName: "Sun",
    features: [
      "Solar inverter installation",
      "Solar panel installation",
      "Hybrid and off-grid solar systems",
      "On-grid solar systems",
      "Battery backup systems (Lithium & Tubular)",
      "Solar street lights installation",
      "Solar water pumping systems"
    ]
  },
  {
    id: "engineering-technical",
    title: "Engineering & Technical Services",
    category: "engineering",
    description: "Expert building wiring, thorough safety planning, energy conservation, audit, and diagnostic troubleshooting.",
    iconName: "Wrench",
    features: [
      "Residential & commercial electrical wiring",
      "Comprehensive energy audit & diagnostic consultancy",
      "Preventive system maintenance services",
      "System upgrades & custom battery integration",
      "Inverter repair and troubleshooting"
    ]
  },
  {
    id: "sales-supply",
    title: "Sales & Supply",
    category: "sales",
    description: "Top-tier supply of authorized durable components directly sourced from leading manufacturers.",
    iconName: "ShoppingCart",
    features: [
      "Highly efficient Monocrystalline solar panels",
      "Pure sine wave smart inverters",
      "Premium Long-life Lithium (LiFePO4) batteries",
      "Heavy-duty Tubular deep-cycle batteries",
      "MPPT Charge controllers & automatic transfer switches",
      "Solar cables, brackets, accessories & safety rails"
    ]
  },
  {
    id: "training-consultancy",
    title: "Training & Technical Consultancy",
    category: "training",
    description: "Empowering the next generation of renewable energy professionals through Teemo-Sun Solar Institute.",
    iconName: "Users",
    features: [
      "Practical hands-on solar installation training",
      "Renewable energy design workshops",
      "Technical advisory & load profiling consultancy",
      "Youth and community capacity development programs",
      "Certifications and career pathways support"
    ]
  },
  {
    id: "motorized-transport",
    title: "Motorized Transport Division",
    category: "transport",
    description: "Promoting green transport with energy-efficient two-wheeled and three-wheeled solar mobility initiatives.",
    iconName: "Bike",
    features: [
      "Electric scooters and cargo e-bikes",
      "Three-wheeler solar mobility solutions",
      "Energy-efficient transportation consultation",
      "Commercial logistics support for urban delivery players"
    ]
  }
];

export const LITHIUM_PACKAGES: SolarPackage[] = [
  {
    id: "lithium-2.5kw",
    name: "2.5KW - 3KWH Lithium System",
    capacity: "2.5KW / 3KWH",
    batteries: "1pcs 3KWH Lithium Ion Battery",
    price: "₦1,900,000",
    features: [
      "1pcs 2.5KW Hybrid Pure Sine Inverter",
      "1pcs 3KWH LiFePO4 Lithium Battery",
      "4pcs 400W Mono Solar Panels",
      "High-grade outdoor cables & brackets",
      "Professional expert installation",
      "Logistics & transport within region"
    ],
    loads: [
      "LED Television",
      "Energy-efficient Lighting",
      "Electric Fans (3-4)",
      "Laptops & Phone Chargers",
      "Decoder/WiFi Router"
    ],
    warranty: {
      battery: "5 Years",
      inverter: "2 Years"
    },
    recommendedFor: "Small apartments, student houses, and minor retail shops."
  },
  {
    id: "lithium-3.8kva",
    name: "3.8KVA - 5KWH Lithium System",
    capacity: "3.8KVA / 5KWH",
    batteries: "1pcs 5KWH Lithium Ion Battery",
    price: "₦2,500,000",
    features: [
      "1pcs 3.8KVA Smart Hybrid Inverter",
      "1pcs 5KWH Deep-cycle Lithium Battery",
      "4pcs 600W Premium Solar Panels",
      "Overvoltage and lighting protectors",
      "Expert site integration",
      "Warrantied backup commissioning"
    ],
    loads: [
      "Energy-efficient Freezer/Fridge",
      "LED TV & Soundbars",
      "Fans & LED Lights (12)",
      "Blending Machine",
      "Washing Machine (Day use)"
    ],
    warranty: {
      battery: "5 Years",
      inverter: "2 Years"
    },
    recommendedFor: "Standard 2-bedroom flats, home offices, and general residential use."
  },
  {
    id: "lithium-5kw",
    name: "5KW - 5KWH Lithium System",
    capacity: "5KW / 5KWH",
    batteries: "1pcs 5KWH Lithium Ion Battery",
    price: "₦3,200,000",
    features: [
      "1pcs 5KW Heavy-duty Hybrid Inverter",
      "1pcs 5KWH High-efficiency Lithium Battery",
      "8pcs 600W Mono-crystalline Solar Panels",
      "Automatic Transfer Switch (ATS) kit",
      "Upgradable solar battery rack",
      "Full system testing & wiring cleanup"
    ],
    loads: [
      "Deep Freezer & Double-door Refrigerator",
      "Water Pumping Machine (1HP)",
      "Washing Machine",
      "Laptops, TVs, sound systems",
      "Sustained light loads & heavy chargers"
    ],
    warranty: {
      battery: "5 Years",
      inverter: "2 Years"
    },
    recommendedFor: "3-4 Bedroom flats, modern houses requiring water pumping, and clinics.",
    isPopular: true
  },
  {
    id: "lithium-6.2kw",
    name: "6.2KW - 10KWH Advance Lithium",
    capacity: "6.2KW / 10KWH",
    batteries: "1pcs 10KWH High-capacity Lithium Battery",
    price: "₦3,500,000",
    features: [
      "1pcs 6.2KW Smart Dual-output Inverter",
      "1pcs 10KWH LiFePO4 Solid-state Battery",
      "8pcs 600W Monocrystalline solar panels",
      "Custom installation, logistics, and brackets",
      "Integrated smart solar monitoring app feed",
      "Full engineering diagnostic checklist"
    ],
    loads: [
      "Inverter Air Conditioner (1.5HP - daytime)",
      "Pumping Machine (1.5HP)",
      "Freezers & Refrigerators",
      "Washing Machine",
      "Blender & kitchen electronics",
      "All normal lights and fans"
    ],
    warranty: {
      battery: "5 Years",
      inverter: "2 Years"
    },
    recommendedFor: "Modern family homes, high-performance executive offices, and remote facilities."
  },
  {
    id: "lithium-10kw",
    name: "10KW - 15.56KWH Premium System",
    capacity: "10KW / 15.56KWH",
    batteries: "1pcs 15.56KWH Custom Lithium Pack",
    price: "₦5,500,000",
    features: [
      "1pcs 10KW Enterprise-series Hybrid Inverter",
      "1pcs 15.56KWH High-density Lithium Battery",
      "8pcs 600W Tier-1 Monocrystalline Panel Grid",
      "Industrial grade distribution boxes / breakers",
      "Full thermal isolation battery bay",
      "Lifetime post-install backup hotline access"
    ],
    loads: [
      "Multiple Air Conditioners (2 x 1.5HP)",
      "Microwave & Toaster/Blender",
      "Washing Machine & Electric Iron",
      "Pumping Machine & security lighting",
      "All household appliances during day and night"
    ],
    warranty: {
      battery: "5 Years",
      inverter: "2 Years"
    },
    recommendedFor: "Luxury duplexes, medium corporate offices, medical operating wards, and farms."
  },
  {
    id: "lithium-20kw",
    name: "20KW - 30KWH Micro-Grid",
    capacity: "20KW / 30KWH",
    batteries: "2pcs 15.56KWH High-density Lithium Batteries",
    price: "₦11,000,000",
    features: [
      "2pcs 10KW Parallel Smart Power Inverters",
      "2pcs 15.56KWH Heavy-duty Lithium Blocks (31.12KWH)",
      "20pcs 600W Industrial Solar panels",
      "Full surge and lightning terminal protection",
      "Custom metal structured solar mounting racks",
      "Dedicated automation panels"
    ],
    loads: [
      "4-5 Air Conditioners simultaneously",
      "Industrial Pumping Machine & Treatment structures",
      "Servers, network centers, complex workspaces",
      "Complete laundry setup",
      "All household kitchen appliances & ovens"
    ],
    warranty: {
      battery: "5 Years",
      inverter: "2 Years"
    },
    recommendedFor: "Corporate blocks, server hubs, large hotels, factories, and agricultural storage complexes."
  }
];

export const HEAVY_DUTY_PACKAGES: SolarPackage[] = [
  {
    id: "heavy-20kw-45kwh",
    name: "20KW - 45KWH Mega-Power System",
    capacity: "20KW / 45KWH",
    batteries: "3pcs 15.56KWH Lithium Batteries",
    price: "₦15,000,000",
    features: [
      "3pcs 10KW Parallel Hybrid Smart Inverters",
      "3pcs 15.56KWH Advanced Lithium Battery blocks",
      "30pcs 600W Grade-A solar panels",
      "Precision industrial engineering & routing",
      "Full protection breakers & cooling array",
      "On-site project warranty monitoring"
    ],
    loads: [
      "Multiple industrial AC units",
      "High-tonnage cold room storage refrigeration",
      "Electric cooker, microwaves, heavy pumps",
      "Complete office facility with 30+ workspaces"
    ],
    warranty: {
      battery: "5 Years",
      inverter: "2 Years"
    },
    recommendedFor: "Large commercial spaces, multi-office buildings, and processing factories."
  },
  {
    id: "heavy-30kw-60kwh",
    name: "30KW - 60KWH Industrial Grid",
    capacity: "30KW / 60KWH",
    batteries: "4pcs 15.56KWH Lithium Batteries",
    price: "₦21,250,000",
    features: [
      "4pcs 10KW Enterprise-tier Inverters",
      "4pcs 15.56KWH Grade-A Lithium Battery storage",
      "45pcs 600W High-efficiency Mono solar panel field",
      "Prepaid remote monitoring & automatic power grid selector",
      "Professional structural certification",
      "2-Year monthly scheduled health audits"
    ],
    loads: [
      "Entire estate mini-grid support",
      "Industrial machining & heavy processing motors",
      "Large-scale school campus, classrooms, lights, and ACs",
      "Server centers operating 24/7/365 with high climate control"
    ],
    warranty: {
      battery: "5 Years",
      inverter: "2 Years"
    },
    recommendedFor: "Educational institutions, warehouses, agricultural centers, and hospitals."
  },
  {
    id: "heavy-50kw-105kwh",
    name: "50KW - 105KWH Grid-Grade Powerhouse",
    capacity: "50KW / 105KWH",
    batteries: "7pcs 15.56KWH Lithium Batteries",
    price: "₦36,250,000",
    features: [
      "5pcs 10KW Parallel Grid-grade Smart Inverters",
      "7pcs 15.56KWH High-rate Discharge Lithium Blocks",
      "70pcs 600W Heavy-duty Solar Panels array",
      "Comprehensive active cooling systems integration",
      "Multi-layered ATS and industrial safety isolators",
      "5-Year full engineering support guarantee"
    ],
    loads: [
      "Entire village or agricultural processing plant",
      "Multi-story steel or clothing factory equipment",
      "Corporate head office block with 100+ working computers and 10+ central ACs",
      "Full industrial farm water pumping and crop storage cooling arrays"
    ],
    warranty: {
      battery: "5 Years",
      inverter: "2 Years"
    },
    recommendedFor: "Large-scale industries, mini-grid operators, processing factories, and luxury estates."
  }
];

export const HOUSING_BUDGET_PACKAGES = [
  {
    id: "budget-1kva",
    name: "1KVA Basic Solar Option",
    range: "₦650,000 - ₦850,000",
    specs: "1KVA Hybrid Inverter + 12V 200AH Deep Cycle Battery + 2pcs 200W Solar Panels",
    loads: ["LED Lighting (5-8)", "Efficient Fans (2)", "Led TV (1)", "Decoder/WiFi Router"],
    idealFor: "Students, singular security post lighting, or small kiosks."
  },
  {
    id: "budget-2.5kva",
    name: "2.5KVA Standard Option",
    range: "₦900,000 - ₦1,300,000",
    specs: "2.5KVA Smart Inverter + 2pcs 12V 200AH Batteries + 4pcs 300W Solar Panels",
    loads: ["Small Fridge/Freezer (Inverter grade)", "Laptops & Chargers", "Electric Fans (3)", "TV & Multi-room lights"],
    idealFor: "Self-contained apartments and entry energy seekers."
  },
  {
    id: "budget-5kva",
    name: "5KVA Family Solar Option",
    range: "₦1,700,000 - ₦2,500,000",
    specs: "5KVA Smart Inverter + 4pcs 12V 200AH Solar Batteries + 6pcs 400W Solar Panels",
    loads: ["Full Home power (Fridge, TV, Fans, Lights)", "Deep Freezer", "Washing Machine (Daytimes)", "Micro Home Appliances"],
    idealFor: "Middle-income apartments and flats targeting absolute power freedom."
  },
  {
    id: "budget-7.5kva",
    name: "7.5KVA Duplex Option",
    range: "₦2,800,000 - ₦3,800,000",
    specs: "7.5KVA Inverter + 8pcs 12V 200AH High-Rate Batteries + 10pcs 400W Solar Panels",
    loads: ["Large side-by-side Refrigerator", "1HP Inverter AC (During sunny days)", "Water Pump (1HP)", "Extensive safety lighting setup"],
    idealFor: "4-5 Bedroom Duplexes, larger family complexes, and offices."
  },
  {
    id: "budget-10kva",
    name: "10KVA Luxury Option",
    range: "₦4,000,000 - ₦6,000,000+",
    specs: "10KVA Pure Sine Smart Inverter + 12-16pcs 200AH Tubular Batteries or equivalent storage + Heavy-Duty Solar panel layout",
    loads: ["Multiple Inverter ACs (3x 1.5HP)", "Deep Freezer & Refrigerator", "Water pump & automated gates", "All office machines in workspace"],
    idealFor: "Luxury palaces, estates, boutique hotels, and tech startup hubs."
  }
];

export const PORTFOLIO: PortfolioProject[] = [
  {
    id: "project-nnepie-2026-expo",
    title: "National Energy & Power Exhibition Hub (NNEPIE)",
    capacity: "Major Strategic Industry Exhibitor",
    location: "Landmark Centre, Victoria Island, Lagos",
    systemType: "Industrial Tech Showcase & Corporate Hub",
    completionDate: "September 2026",
    highlights: [
      "Unveiled modular heavy-duty smart inverter towers and solid-state storage shelves",
      "Consulted 500+ commercial builders and real estate developer groups",
      "Showcased off-grid transport division initiatives for green delivery systems",
      "Recognized as a leading future-focused solar powerhouse in West Africa"
    ],
    imageUrl: "/portfolio_nnepie_expo.png",
    description: "Teemo-Sun was crowned as a leading key exhibitor at NNEPIE 2026, showcasing high-capacity smart inverters, enterprise lithium battery banks, and robust off-grid micro-grids directly to premium developers."
  },
  {
    id: "project-tvc-news-coverage",
    title: "TVC News Corporate Exclusive & Prime-time Feature",
    capacity: "National Media Credibility Feature",
    location: "Landmark Exhibition Plaza, Victoria Island, Lagos",
    systemType: "Broadcasting, Public Policy & Thought Leadership",
    completionDate: "2026",
    highlights: [
      "Live broadcast interview covering commercial clean energy grid transitions",
      "Demonstrated cost-saving ROI profiles for high-capacity corporate solar grids",
      "Highlight of Teemo-Sun's hands-on training institute certifications",
      "Established brand position as a premier national engineering advisory"
    ],
    imageUrl: "/portfolio_tvc_interview.png",
    description: "Featured prime-time on live TVC News. Teemo-Sun's engineering lead provided strategic insights into replacing industrial diesel generators with modular hybrid solar systems across Nigeria's manufacturing belts."
  },
  {
    id: "project-businessday-summit",
    title: "BusinessDay National Energy Conference Delegate Hub",
    capacity: "Strategic Council Advisory Partner",
    location: "The Anthonia by Civic Centre, Ikoyi, Lagos",
    systemType: "Elite Roundtable, Energy Policy & Estate Micro-Grids",
    completionDate: "2026",
    highlights: [
      "Coordinated transition models for off-grid modular smart housing grids",
      "Advanced load-sharing battery architectures to state commissioners and energy policy planners",
      "Pioneered discussion panels regarding solar utility safety rules & standards in West Africa",
      "Formulated micro-utility agreements with leading residential real estate groups"
    ],
    imageUrl: "/portfolio_businessday.png",
    description: "Participated as official key delegation members at the landmark BusinessDay Energy Conference 2026, themed 'Beyond the Grid'. Collaborated on state-level decentralized clean power solutions for residential zones."
  },
  {
    id: "project-on-site-consultations",
    title: "Enterprise Custom Load Profiling & Active Design Lab",
    capacity: "Commercial Site Design & Calculations",
    location: "Teemo-Sun National Exhibition Office, Lagos",
    systemType: "Interactive Client Diagnostics & Smart Schematics",
    completionDate: "2026",
    highlights: [
      "Active load design using software simulators on dual high-spec enterprise laptops",
      "Interactive breakdown of smart automatic transfer switches & preventive maintenance",
      "Step-by-step calculations for industrial cold room and centralized office cooling needs",
      "Guarantees 100% accurate load tracking before procurement to ensure zero system overload"
    ],
    imageUrl: "/portfolio_consultation.png",
    description: "Our certified site engineers deployed full multi-room visual diagnostics and precise active simulations at the exhibition desk, designing custom-tailored pure sine configurations for massive buildings."
  },
  {
    id: "project-abuja-5mwp",
    title: "Mega Solar Power Plant Installation",
    capacity: "5MWp Grid-Tied Solar Power Plant",
    location: "Abuja, FCT, Nigeria",
    systemType: "Grid-Tied Solar Power Plant",
    completionDate: "2024",
    highlights: [
      "Generates clean, reliable, and affordable electricity",
      "Reduces dependence on fossil fuel generators",
      "Supports local businesses, institutions, and community growth",
      "Contributes to a greener, more sustainable Federal Capital Territory",
      "Built to rigorous international standards for safety and efficiency"
    ],
    imageUrl: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop",
    description: "A landmark renewable energy project in Abuja, delivering clean, reliable, and sustainable power to surrounding communities, public grids, and key corporate infrastructures."
  },
  {
    id: "project-lagos-30kw",
    title: "Corporate Solar Power Upgrade",
    capacity: "30KW Industrial Hybrid Solar System",
    location: "Ikeja, Lagos State, Nigeria",
    systemType: "Hybrid Solar Installation with Lithium Storage",
    completionDate: "2025",
    highlights: [
      "Stable operations 24/7 with zero generator noise pollution",
      "Powering central ACs, extensive server racks, and meeting complexes",
      "Advanced 40KWH battery storage grid integrated",
      "Estimated 75% monthly reduction in grid/fuel bills"
    ],
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    description: "A bespoke 30KW solar system powering the corporate headquarters of an export organization in Lagos. Outfitted with high-efficiency inverters and safe automated lithium energy racks."
  },
  {
    id: "project-ogun-roof",
    title: "Residential Estate Green Energy Project",
    capacity: "15KW Residential Roof-mount Solar System",
    location: "Abeokuta, Ogun State, Nigeria",
    systemType: "Off-Grid Solar panel roof setup",
    completionDate: "2025",
    highlights: [
      "Elegant solar tile integration matching building aesthetics",
      "Guarantees 100% uninterrupted power supply for the luxury villa",
      "Dual state protection and advanced MPPT tracking arrays",
      "Safe after-sales diagnostic check service implemented"
    ],
    imageUrl: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=1200&auto=format&fit=crop",
    description: "Multi-panel modern rooftop installation in Abeokuta supplying completely silent, clean, and grid-free power to a residential home."
  },
  {
    id: "project-solar-institute",
    title: "Teemo-Sun Solar Institute Program",
    capacity: "State-of-the-Art Solar Academy",
    location: "Abeokuta, Ogun State, Nigeria",
    systemType: "Training, Certification & Workshops",
    completionDate: "Ongoing Hands-on Academy",
    highlights: [
      "Solar inverter and panel system architecture design courses",
      "Practical in-the-field electrical wiring & troubleshooting",
      "Battery backup setup & energy audit training",
      "NCCC standard compliant renewable certificate on completion"
    ],
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1200&auto=format&fit=crop",
    description: "A professional solar training program shaping the next leaders of green technology in Ogun State and greater Nigeria with deep practical instruction."
  }
];

export const INDUSTRIES: IndustryItem[] = [
  { name: "Residential Homes", iconName: "Home", description: "Powering family homes with silent, affordable, and constant green electricity." },
  { name: "Corporate Organizations", iconName: "Building2", description: "Providing commercial arrays to keep offices, computer nodes, and cooling systems running without noisy, expensive diesel generators." },
  { name: "Schools & Institutions", iconName: "School", description: "Sustaining teaching classrooms, research labs, and dormitories with cost-effective solar setups." },
  { name: "Hospitals & Wards", iconName: "HeartPulse", description: "Ensuring life-saving equipment, operating units, and refrigeration never suffer from grid power failures." },
  { name: "Religious Centers", iconName: "Sparkles", description: "Supplying solar street lighting and community spaces with clean power solutions for gathering." },
  { name: "Hotels & Stays", iconName: "Hotel", description: "Enabling round-the-clock silent air conditioning and lighting for maximum guest comfort." },
  { name: "Factories & Warehouses", iconName: "Factory", description: "Powering supply chain operations, security sensors, machinery, and inventory cooling arrays." },
  { name: "Farms & Agricultural Businesses", iconName: "Sprout", description: "Delivering solar water pumping and solar crop treatment systems directly to Nigerian farms." }
];

export const VIDEO_TRANSCRIPTION = [
  { time: "0:01", text: "Still struggling with unstable electricity and expensive fuel?" },
  { time: "0:04", text: "Welcome to Teemo-Sun Solar Nigeria, your trusted solar energy partner." },
  { time: "0:08", text: "From small homes to luxury residences, we provide complete solar solutions." },
  { time: "0:12", text: "Enjoy premium panels, expert installation, and uninterrupted power." },
  { time: "0:16", text: "Want to become a solar professional? Join Teemo-Sun Solar Institute." },
  { time: "0:19", text: "Engage in practical, hands-on training and build a profitable future." },
  { time: "0:24", text: "Premium solar equipment, fast delivery, and excellent customer support." },
  { time: "0:30", text: "Teemo-Sun gives you dependable power you can trust every single day." },
  { time: "0:36", text: "Reach out to us today and let's power your world!" }
];
