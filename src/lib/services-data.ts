export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  whatsappMessage: string;
  features: string[];
  whenToCall: string;
}

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "ac-installation",
    title: "AC Installation",
    shortDescription: "Professional installation for residential and commercial AC systems.",
    fullDescription: "Proper mounting, precise piping, leak-proof insulation, and optimal placement to maximize cooling efficiency and equipment lifespan.",
    iconName: "Wrench",
    whatsappMessage: "Hi Samarth Cool, I found you through your website and need AC Installation service.",
    features: [
      "Residential Split & Window AC Installation",
      "Cassette & Tower AC Mounting",
      "Copper Piping & Insulation Work",
      "Post-Installation Performance Testing",
    ],
    whenToCall: "When installing a new AC or relocating an existing cooling unit to a new room or building.",
  },
  {
    id: "ac-repair",
    title: "AC Repair",
    shortDescription: "Diagnosis and repair for AC cooling, electrical and performance issues.",
    fullDescription: "Fast, accurate troubleshooting for compressor failures, PCB circuit faults, sensor errors, bad capacitors, and cooling issues.",
    iconName: "Settings",
    whatsappMessage: "Hi Samarth Cool, I found you through your website and need AC Repair service.",
    features: [
      "Compressor & Fan Motor Repair",
      "PCB Circuit & Electrical Troubleshooting",
      "Sensor & Capacitor Replacement",
      "Tripping & Power Issue Resolution",
    ],
    whenToCall: "When your AC trips the breaker, doesn't start, blows warm air, or makes loud abnormal noises.",
  },
  {
    id: "ac-servicing",
    title: "AC Servicing",
    shortDescription: "Regular cleaning and maintenance to keep your AC performing efficiently.",
    fullDescription: "Deep foam jet cleaning of indoor cooling coils, outdoor condenser unit washing, filter restoration, and drain line flushing.",
    iconName: "Wind",
    whatsappMessage: "Hi Samarth Cool, I found you through your website and need AC Servicing.",
    features: [
      "High-Pressure Jet Spray Cleaning",
      "Filter, Evaporator & Condenser Coil Wash",
      "Drain Pipe Cleaning & De-clogging",
      "Cooling Efficiency & Current Load Check",
    ],
    whenToCall: "Every 3 to 6 months to maintain indoor air quality, prevent water leaks, and keep power bills low.",
  },
  {
    id: "gas-charging",
    title: "Gas Charging",
    shortDescription: "Refrigerant-related service when required after proper diagnosis.",
    fullDescription: "We identify and seal refrigerant leak points first before gas top-up or full charging (R32, R410A, R22). Note: Gas charging is only recommended after verifying a leak.",
    iconName: "Gauge",
    whatsappMessage: "Hi Samarth Cool, I found you through your website and need Gas Charging service.",
    features: [
      "Nitrogen Pressure Leak Detection",
      "Copper Joint Brazing & Repair",
      "System Evacuation & Vacuum Test",
      "Precision Gas Charging (R32, R410A, R22)",
    ],
    whenToCall: "When cooling drops significantly and physical leak testing confirms low gas pressure.",
  },
  {
    id: "ac-amc",
    title: "AC Maintenance / AMC",
    shortDescription: "Preventive maintenance for homes and commercial spaces.",
    fullDescription: "Scheduled routine checkups, priority emergency response, and proactive coil cleaning to ensure continuous uninterrupted cooling.",
    iconName: "ShieldCheck",
    whatsappMessage: "Hi Samarth Cool, I found you through your website and need AC AMC / Maintenance info.",
    features: [
      "Quarterly Preventive Servicing",
      "Priority Breakdown Support",
      "Pre-Summer System Checkup",
      "Custom Packages for Offices & Commercial Spaces",
    ],
    whenToCall: "If you own multiple AC units in a home, office, hotel, or studio and want hassle-free year-round operation.",
  },
  {
    id: "refrigerator-repair",
    title: "Refrigerator Repair",
    shortDescription: "Repair and troubleshooting for refrigerator cooling and operating problems.",
    fullDescription: "Expert repair for single door, double door, side-by-side, and commercial frost-free refrigerators.",
    iconName: "Snowflake",
    whatsappMessage: "Hi Samarth Cool, I found you through your website and need Refrigerator Repair service.",
    features: [
      "Thermostat & Defrost Timer Repair",
      "Compressor & Relay Troubleshooting",
      "Gas Leakage & Refrigerant Refilling",
      "Door Seal Gasket & Fan Replacement",
    ],
    whenToCall: "When the freezer cools but food section stays warm, or the compressor hums without cooling.",
  },
  {
    id: "commercial-refrigeration",
    title: "Commercial Refrigeration",
    shortDescription: "Refrigeration support for businesses and commercial environments.",
    fullDescription: "Heavy-duty cooling repair for deep freezers, display chillers, bottle coolers, and walk-in cold rooms for commercial businesses.",
    iconName: "Building2",
    whatsappMessage: "Hi Samarth Cool, I found you through your website and need Commercial Refrigeration service.",
    features: [
      "Deep Freezer & Visi-Chiller Maintenance",
      "Commercial Cold Room & Display Fridge Repair",
      "Heavy Compressor & Fan Servicing",
      "Rapid Service Response for Food Preservation",
    ],
    whenToCall: "Immediately when commercial chillers or storage freezers fluctuate in temperature.",
  },
  {
    id: "hotel-studio-service",
    title: "Hotel & Studio Service",
    shortDescription: "Professional AC and refrigeration support for hotels, studios and production spaces.",
    fullDescription: "Customized HVAC maintenance for high-demand guest rooms, shooting studios, sound stages, and hotel dining setups.",
    iconName: "Clapboard",
    whatsappMessage: "Hi Samarth Cool, I found you through your website and need Hotel / Studio Service.",
    features: [
      "Quiet AC Operation & Duct Checking",
      "24/7 Priority Emergency Attendance",
      "Multi-Unit Package Maintenance",
      "Discreet & Professional On-Site Technicians",
    ],
    whenToCall: "Before major shoots, events, or peak guest booking seasons.",
  },
];

export interface SignCardItem {
  number: string;
  title: string;
  description: string;
  whatToCheck: string;
  whenToCall: string;
  iconName: string;
}

export const SIGNS_LIST: SignCardItem[] = [
  {
    number: "01",
    title: "AC Isn't Cooling Properly",
    description: "The fan runs, but room temperature doesn't drop even after setting the thermostat lower.",
    whatToCheck: "Check if the remote mode is set to 'Cool' and airflow mode is unobstructed.",
    whenToCall: "If dirty filters are cleaned but air stays warm, a compressor or gas issue needs professional inspection.",
    iconName: "ThermometerSnowflake",
  },
  {
    number: "02",
    title: "Weak Airflow",
    description: "Low volume of air coming out of the louvers, forcing the AC to run longer.",
    whatToCheck: "Check whether the front mesh air filters have visible dust buildup.",
    whenToCall: "If cleaning mesh filters does not restore normal airflow, indoor blower fan or deep coil clogging requires jet servicing.",
    iconName: "Wind",
  },
  {
    number: "03",
    title: "Unusual Noise",
    description: "Rattling, grinding, buzzing, or metallic clicking coming from indoor unit or outdoor compressor.",
    whatToCheck: "Ensure no loose object or curtain is touching the unit casing.",
    whenToCall: "Switch off the unit if noise is severe. Motor bearing, fan blade misalignment, or compressor stress needs immediate repair.",
    iconName: "VolumeX",
  },
  {
    number: "04",
    title: "Water Leaking",
    description: "Water droplets or steady stream leaking down the wall from under the indoor unit casing.",
    whatToCheck: "Switch off AC if water is dripping near electrical outlets or wire connections.",
    whenToCall: "Persistent leakage indicates a blocked condensate drain pipe or frozen evaporator coil needing technician flushing.",
    iconName: "Droplets",
  },
  {
    number: "05",
    title: "Higher Electricity Consumption",
    description: "Unexpected spike in monthly power bills without changes in usage hours.",
    whatToCheck: "Check if the outdoor unit is choked with dust or enclosed without ventilation space.",
    whenToCall: "Choked coils force the compressor to draw double current; a professional jet wash restores optimal efficiency.",
    iconName: "Zap",
  },
];

export const WHY_SAMARTH_COOL = [
  {
    title: "Experienced Technicians",
    description: "Hands-on experience across residential and commercial cooling systems, guided by Pravin Chavan's 23+ years in the field.",
    iconName: "Award",
  },
  {
    title: "Proper Diagnosis",
    description: "We focus on identifying the actual root cause before recommending service or parts replacement—no unnecessary upselling.",
    iconName: "SearchCheck",
  },
  {
    title: "Residential + Commercial",
    description: "Versatile capability servicing apartments, bungalows, hotels, production studios, offices, and retail shops.",
    iconName: "Home",
  },
  {
    title: "Direct Support",
    description: "Direct line of contact by phone or WhatsApp to Pravin Chavan for honest guidance and quick turnaround.",
    iconName: "MessageSquare",
  },
  {
    title: "Mumbai & Pune Coverage",
    description: "Serving residential and commercial clients across Mumbai metropolitan area and Pune city.",
    iconName: "MapPin",
  },
  {
    title: "Reliable Service",
    description: "High quality workmanship, genuine replacement parts, and clean execution focused on long-term performance.",
    iconName: "CheckCircle2",
  },
];

export const COMMERCIAL_SECTORS = [
  {
    title: "Hotels & Restaurants",
    description: "Cooling and refrigeration support for hotel guest rooms, commercial kitchens, walk-in chillers, and dining areas.",
    iconName: "Hotel",
    whatsappMessage: "Hi Samarth Cool, I need AC/refrigeration service for a hotel/restaurant space.",
  },
  {
    title: "Studios & Production",
    description: "AC and refrigeration service for indoor shooting stages, editing suites, green rooms, and equipment spaces.",
    iconName: "Film",
    whatsappMessage: "Hi Samarth Cool, I need AC/refrigeration service for a studio/production space.",
  },
  {
    title: "Offices & Corporate",
    description: "Installation, maintenance, AMC, and repair for multi-floor office spaces, conference rooms, and server rooms.",
    iconName: "Building",
    whatsappMessage: "Hi Samarth Cool, I need AC service for an office space.",
  },
  {
    title: "Shops & Businesses",
    description: "Cooling support for retail outlets, showrooms, bakeries, pharmacies, and commercial establishments.",
    iconName: "Store",
    whatsappMessage: "Hi Samarth Cool, I need AC/refrigeration service for my retail shop or business.",
  },
];

export const WORK_SAMPLES = [
  {
    id: "1",
    title: "Split AC Deep Jet Servicing",
    category: "AC Servicing",
    location: "Kandivali, Mumbai",
    tag: "Residential",
    image: "/images/ac-hero.png",
  },
  {
    id: "2",
    title: "Hotel Suite HVAC System Inspection",
    category: "Hotel & Studio",
    location: "Bandra, Mumbai",
    tag: "Commercial",
    image: "/images/commercial-cooling.png",
  },
  {
    id: "3",
    title: "Commercial Refrigerator & Chiller Repair",
    category: "Refrigerator",
    location: "Pune Central",
    tag: "Commercial",
    image: "/images/refrigerator-service.png",
  },
  {
    id: "4",
    title: "Master Technician On-Site Inspection",
    category: "Diagnosis & AMC",
    location: "Andheri West, Mumbai",
    tag: "Commercial",
    image: "/images/pravin-chavan.png",
  },
];
