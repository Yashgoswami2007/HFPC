/**
 * Single source of content for the HFPC website.
 *
 * All company-specific facts here are taken from the HFPC Company Profile
 * (Hospitality Facilities Planning Consultancy). Where the profile does not
 * provide a fact (projects, clients, statistics, certifications, article
 * content), the data below is intentionally empty or clearly marked as a
 * placeholder to be supplied by HFPC.
 */

import heroBoh from "@/assets/hero-boh.jpg";
import svcKitchen from "@/assets/svc-kitchen.jpg";
import svcFnb from "@/assets/svc-fnb.jpg";
import svcBoh from "@/assets/svc-boh.jpg";
import svcLaundry from "@/assets/svc-laundry.jpg";
import svcWaste from "@/assets/svc-waste.jpg";
import svcMep from "@/assets/svc-mep.jpg";
import svcDocs from "@/assets/svc-docs.jpg";
import svcSite from "@/assets/svc-site.jpg";
import sectorHotel from "@/assets/sector-hotel.jpg";
import sectorBanquet from "@/assets/sector-banquet.jpg";
import sectorCafeteria from "@/assets/sector-cafeteria.jpg";
import sectorHospital from "@/assets/sector-hospital.jpg";
import sectorCpu from "@/assets/sector-cpu.jpg";
import sectorQsr from "@/assets/sector-qsr.jpg";
import sectorInstitutional from "@/assets/sector-institutional.jpg";

export const images = {
  heroBoh,
  svcKitchen,
  svcFnb,
  svcBoh,
  svcLaundry,
  svcWaste,
  svcMep,
  svcDocs,
  svcSite,
  sectorHotel,
  sectorBanquet,
  sectorCafeteria,
  sectorHospital,
  sectorCpu,
  sectorQsr,
  sectorInstitutional,
};

export const company = {
  short: "HFPC",
  name: "HFPC — Hospitality Facilities Planning Consultancy",
  legalName: "Hospitality Facilities Planning Consultancy",
  disciplines: "Commercial Kitchens | Back-of-House | Facility Planning",
  positioning: "Commercial Kitchen & Hospitality Facilities Planning",
  motto: "Plan better. Operate smarter. Build with precision.",
  fourVerbs: ["Plan", "Design", "Co-ordinate", "Deliver"],
  statement:
    "HFPC — Hospitality Facilities Planning Consultancy — provides specialist planning and consultancy services for hospitality and food-service back-of-house environments.",
  approachStatement:
    "We approach every project from the operational side of hospitality, translating requirements into practical spaces, efficient workflows and coordinated technical solutions.",
  focusStatement:
    "Our focus is simple: create BOH environments that work efficiently behind the scenes and support the operation in front of the guest.",
  quote:
    "Good design is not only what fits on the plan. It is what works after the project opens.",
  kitchenQuote:
    "A well-planned kitchen is not simply a collection of equipment. It is an operational system where people, food, equipment, utilities and information move efficiently.",
};

export const contact = {
  phone: "+91 9548839087",
  phoneHref: "tel:+919548839087",
  email: "piyush.hfpc@gmail.com",
  emailHref: "mailto:piyush.hfpc@gmail.com",
  location: "New Delhi, India",
  /**
   * The company profile shows the email address in two forms on different
   * pages (piyush.hfpc@gmail.com and piyush.hacs@gmail.com). The first is used
   * across the site; HFPC to confirm the correct address.
   */
  emailNote: "[EMAIL ADDRESS TO BE CONFIRMED BY HFPC]",
};

/** Page 2 of the profile — the four ideas HFPC plans around. */
export const principles = [
  {
    title: "Function",
    body: "Every space must serve a clear operational purpose.",
  },
  {
    title: "Flow",
    body: "People, food, equipment, materials and waste must move efficiently.",
  },
  {
    title: "Coordination",
    body: "BOH planning must integrate with architecture, MEP and project requirements.",
  },
  {
    title: "Value",
    body: "Good planning reduces operational inefficiencies, unnecessary capex and avoidable project costs.",
  },
];

export type Service = {
  slug: string;
  index: string;
  name: string;
  short: string;
  image: string;
  imageAlt: string;
  intro: string;
  addresses: string[];
  matters: string;
  provides: string[];
  deliverables: string[];
  technical: string[];
  sectors: string[];
  faq: { q: string; a: string }[];
};

/** Page 3 of the profile — the eight service areas, with profile wording kept. */
export const services: Service[] = [
  {
    slug: "commercial-kitchen-planning",
    index: "01",
    name: "Commercial Kitchen Planning",
    short: "Complete planning from concept to operation of commercial kitchen facilities.",
    image: svcKitchen,
    imageAlt: "Stainless steel commercial kitchen production line with extraction hoods",
    intro:
      "Commercial kitchen planning is based on operational requirements, menu, capacity, workflow, equipment, hygiene, safety, utilities, maintenance and future adaptability.",
    addresses: [
      "Operational brief and mode of service",
      "Menu and production method",
      "Covers, capacity and peak-load planning",
      "Space planning and kitchen zoning",
      "Workflow between receiving, storage, preparation, production, service and washing",
      "Equipment selection, sizing and layout",
      "Utility loads and technical requirements",
      "Documentation for procurement and construction",
    ],
    matters:
      "A well-planned kitchen is not simply a collection of equipment. It is an operational system where people, food, equipment, utilities and information move efficiently. Planning that starts from the operation reduces unnecessary movement, avoids equipment bought for the wrong purpose and prevents late technical changes on site.",
    provides: [
      "Operational analysis of the brief, menu and capacity",
      "Space and flow planning across all kitchen zones",
      "Layout development and equipment planning",
      "Equipment schedules, specifications and BOQs",
      "Utility requirement schedules and MEP coordination inputs",
      "Site coordination and review during execution",
    ],
    deliverables: [
      "Concept layouts",
      "Detailed BOH plans",
      "Equipment layouts",
      "Equipment schedules",
      "BOQs",
      "Technical specifications",
      "Sections and elevations",
      "Utility requirement schedules",
    ],
    technical: [
      "Ventilation and extraction requirements",
      "Water, drainage and grease management",
      "Electrical and gas load requirements",
      "Hygiene, cleaning and finish requirements",
      "Maintenance and service access",
      "Future adaptability of the layout",
    ],
    sectors: ["hotels-resorts", "restaurants-cafes", "central-production-kitchens", "hospitals-institutions"],
    faq: [
      {
        q: "At what stage should kitchen planning begin?",
        a: "As early as the concept brief. Space, flow, utility loads and equipment decisions influence architecture and MEP, so planning them early avoids rework later in the project.",
      },
      {
        q: "What does HFPC need to start?",
        a: "The operational brief, intended menu and mode of service, expected capacity, and the available architectural drawings or shell area.",
      },
      {
        q: "Does HFPC supply equipment?",
        a: "HFPC is a planning and consultancy practice. We prepare equipment schedules, specifications, BOQs and procurement documentation, and support coordination during execution.",
      },
    ],
  },
  {
    slug: "food-beverage-facilities",
    index: "02",
    name: "Food & Beverage Facilities",
    short:
      "Operational and spatial planning for restaurants, cafés, bars, banquets and food-service facilities.",
    image: svcFnb,
    imageAlt: "Restaurant service pass and bar back area in a hotel restaurant",
    intro:
      "Operational and spatial planning for restaurants, cafés, bars, banquets and food-service facilities, planned from the way the outlet will actually run.",
    addresses: [
      "Outlet concept and service style",
      "Relationship between outlet, service areas and production kitchen",
      "Bar and beverage production requirements",
      "Banquet plating, holding and dispatch",
      "Service and clearing routes",
      "Support areas for the outlet",
    ],
    matters:
      "Front-of-house experience depends on service areas that are sized and positioned correctly. When the pass, bar, still room, and clearing routes are planned with the operation in mind, service is faster and quieter and staff movement stops crossing guest space.",
    provides: [
      "Spatial planning of outlets and their support areas",
      "Bar and beverage facility planning",
      "Banquet and event production planning",
      "Equipment planning and schedules for F&B facilities",
      "Coordination with architecture, interiors and MEP",
    ],
    deliverables: [
      "Concept layouts",
      "Detailed facility plans",
      "Equipment layouts and schedules",
      "Technical specifications",
      "Utility requirement schedules",
      "MEP coordination inputs",
    ],
    technical: [
      "Service and clearing circulation",
      "Ventilation for open kitchens and bars",
      "Water and drainage at bars and dish areas",
      "Noise and heat separation from guest areas",
      "Hygiene and finish requirements",
    ],
    sectors: ["restaurants-cafes", "bars-banquets", "hotels-resorts", "clubs-crew-kitchens"],
    faq: [
      {
        q: "Can HFPC plan a single outlet within an existing property?",
        a: "Yes. Planning can be scoped to one outlet, a group of outlets, or the full food-and-beverage operation of a property.",
      },
      {
        q: "How are banquet operations handled?",
        a: "Banquet planning covers production, plating, holding, dispatch routes and return, sized against the event capacity the property intends to serve.",
      },
    ],
  },
  {
    slug: "back-of-house-planning",
    index: "03",
    name: "Back-of-House Planning",
    short: "Integrated planning of supporting hospitality functions and service areas.",
    image: svcBoh,
    imageAlt: "Hotel back-of-house service corridor with trolleys along a stainless steel wall guard",
    intro:
      "Integrated planning of supporting hospitality functions and service areas, so that the whole back-of-house works as one system rather than a set of separate rooms.",
    addresses: [
      "Receiving and goods-in control",
      "Stores, cold rooms and issuing",
      "Staff entry, changing and welfare areas",
      "Service corridors, lifts and vertical movement",
      "Housekeeping and linen support areas",
      "Waste holding and removal routes",
    ],
    matters:
      "Back-of-house area is often the first thing compressed in a project and the first thing to fail in operation. Planned together, the supporting functions protect the operation: goods arrive without crossing guest routes, stores are reachable from production, and staff, materials and waste each have a route that makes sense.",
    provides: [
      "Space programming for BOH functions",
      "Flow planning for people, food, materials and waste",
      "Adjacency and zoning planning across levels",
      "Equipment planning for support areas",
      "Coordination with architecture, structure and MEP",
    ],
    deliverables: [
      "Concept layouts",
      "Detailed BOH plans",
      "Equipment layouts and schedules",
      "Sections and elevations",
      "Utility requirement schedules",
      "MEP coordination inputs",
    ],
    technical: [
      "Circulation widths and trolley movement",
      "Separation of clean and soiled routes",
      "Ventilation and temperature control in stores",
      "Drainage and washable finishes",
      "Access for maintenance and equipment replacement",
    ],
    sectors: ["hotels-resorts", "bars-banquets", "hospitals-institutions", "institutional-food-facilities"],
    faq: [
      {
        q: "Is back-of-house planning only relevant to large hotels?",
        a: "No. Any facility with receiving, storage, production, service and waste has a back-of-house. The scale changes; the need for a workable flow does not.",
      },
      {
        q: "Can BOH planning be reviewed for an existing property?",
        a: "Yes. Existing facilities can be reviewed against how they operate today, and planned changes documented for implementation.",
      },
    ],
  },
  {
    slug: "laundry-planning",
    index: "04",
    name: "Laundry Planning",
    short:
      "Planning of hotel and institutional laundry operations, equipment and space requirements.",
    image: svcLaundry,
    imageAlt: "Industrial hotel laundry with a row of washer extractors and linen trolleys",
    intro:
      "Efficient laundry planning ensures smooth linen flow, operational efficiency and long-term reliability.",
    addresses: [
      "Equipment planning",
      "Workflow separation",
      "Linen movement",
      "Trolley movement",
      "Storage",
      "Utilities",
      "Ventilation",
      "Drainage",
      "Heat management",
      "Operational efficiency",
    ],
    matters:
      "Laundry is a production process inside a hospitality building. Soiled and clean linen must never share the same path, equipment must be sized to the linen load, and heat, humidity and drainage must be handled — otherwise the operation, and the equipment, degrade quickly.",
    provides: [
      "Linen load assessment and equipment sizing",
      "Space planning with separated soiled and clean zones",
      "Trolley and linen movement planning",
      "Utility and ventilation requirements for the laundry",
      "Equipment schedules, specifications and BOQs",
    ],
    deliverables: [
      "Concept and detailed laundry layouts",
      "Equipment layouts and schedules",
      "Technical specifications",
      "Utility requirement schedules",
      "MEP coordination inputs",
    ],
    technical: [
      "Ventilation and heat extraction",
      "Drainage and water requirements",
      "Steam, gas or electrical requirements as applicable",
      "Separation of soiled and clean flows",
      "Clean linen storage and distribution",
    ],
    sectors: ["hotels-resorts", "hospitals-institutions", "institutional-food-facilities", "clubs-crew-kitchens"],
    faq: [
      {
        q: "Should a property operate its own laundry?",
        a: "That is an operational decision. HFPC plans the facility, space and equipment required for the option the property chooses, including the linen storage and distribution that supports it.",
      },
      {
        q: "What drives laundry equipment sizing?",
        a: "The linen load the operation generates, the working hours available, and the separation and storage the facility needs.",
      },
    ],
  },
  {
    slug: "waste-management",
    index: "05",
    name: "Waste Management",
    short:
      "Segregation, storage, movement and disposal planning for hospitality waste streams.",
    image: svcWaste,
    imageAlt: "Segregated colour-coded waste bins in a clean commercial waste holding room",
    intro:
      "Practical and hygienic waste management planning for cleaner and more efficient operations.",
    addresses: [
      "Waste segregation",
      "Waste holding",
      "Movement routes",
      "Collection points",
      "Hygiene",
      "Operational practicality",
      "Reduction of unnecessary waste movement",
    ],
    matters:
      "Waste is planned last and then has nowhere to go. Segregation at source, a holding area sized for collection cycles, and a route that avoids guest and clean-food areas keep the facility hygienic and the operation orderly.",
    provides: [
      "Segregation planning at the point of generation",
      "Sizing and planning of waste holding areas",
      "Movement route and collection point planning",
      "Equipment and utility requirements for waste areas",
      "Coordination with architecture and MEP",
    ],
    deliverables: [
      "Waste area layouts",
      "Equipment schedules",
      "Technical specifications",
      "Utility requirement schedules",
      "MEP coordination inputs",
    ],
    technical: [
      "Washable finishes and drainage",
      "Ventilation and odour control",
      "Temperature control where required",
      "Vehicle access at collection points",
      "Separation from clean-food routes",
    ],
    sectors: ["hotels-resorts", "central-production-kitchens", "hospitals-institutions", "corporate-cafeterias"],
    faq: [
      {
        q: "Where does waste planning start?",
        a: "At the point where waste is generated — in preparation, production, service and washing areas — then through holding, movement and collection.",
      },
      {
        q: "Does this cover statutory compliance?",
        a: "Waste planning is coordinated with the project's applicable requirements and the client's appointed consultants. [LOCAL COMPLIANCE SCOPE TO BE CONFIRMED BY HFPC]",
      },
    ],
  },
  {
    slug: "mep-technical-coordination",
    index: "06",
    name: "MEP & Technical Coordination",
    short:
      "Coordination of BOH requirements with architectural, structural and MEP disciplines.",
    image: svcMep,
    imageAlt: "Overhead ducts, pipework and cable trays in a building services plant area",
    intro:
      "Coordination of BOH requirements with architectural, structural and MEP disciplines, so that the planned facility can actually be built and serviced.",
    addresses: [
      "Utility requirements for planned equipment",
      "Ventilation and extraction coordination",
      "Water, drainage and grease management",
      "Electrical and gas requirements",
      "Structural and ceiling coordination",
      "Service routes and access",
    ],
    matters:
      "BOH planning must integrate with architecture, MEP and project requirements. Requirements issued clearly and early let the design team build them into their systems, instead of discovering them when equipment arrives on site.",
    provides: [
      "Utility requirement schedules for all planned equipment",
      "MEP coordination inputs and mark-ups",
      "Review of design-team drawings against BOH requirements",
      "Resolution of coordination issues during design and execution",
    ],
    deliverables: [
      "Utility requirement schedules",
      "MEP coordination inputs",
      "Equipment layouts with service points",
      "Sections and elevations",
      "Technical specifications",
    ],
    technical: [
      "Extract and make-up air volumes",
      "Hot and cold water demand",
      "Drainage points and grease interception",
      "Electrical loads and points",
      "Gas requirements where applicable",
      "Access for maintenance and replacement",
    ],
    sectors: ["hotels-resorts", "central-production-kitchens", "hospitals-institutions", "base-kitchens"],
    faq: [
      {
        q: "Does HFPC replace the MEP consultant?",
        a: "No. HFPC defines the back-of-house requirements and coordinates them with the appointed MEP and design consultants.",
      },
      {
        q: "When are utility requirements issued?",
        a: "Once equipment planning is developed, so that loads and service points can be built into the MEP design rather than added later.",
      },
    ],
  },
  {
    slug: "procurement-documentation",
    index: "07",
    name: "Procurement & Documentation",
    short: "Equipment schedules, specifications, BOQs and technical documentation.",
    image: svcDocs,
    imageAlt: "Kitchen equipment layout drawings, scale ruler and rolled blueprints on a desk",
    intro:
      "Equipment schedules, specifications, BOQs and technical documentation prepared so that procurement decisions can be compared on the same basis.",
    addresses: [
      "Equipment schedules with technical parameters",
      "Specifications for each item",
      "BOQs for tender",
      "Tender and procurement documentation",
      "Technical review of offers",
    ],
    matters:
      "Clear equipment schedules, BOQs and specification support better decisions. Without them, quotations are not comparable, substitutions go unnoticed and the operation inherits equipment it did not plan for.",
    provides: [
      "Equipment schedules and technical specifications",
      "BOQs and tender documentation",
      "Procurement documentation packages",
      "Technical support during evaluation of offers",
    ],
    deliverables: [
      "Equipment schedules",
      "BOQs",
      "Technical specifications",
      "Tender / procurement documentation",
      "Equipment layouts",
    ],
    technical: [
      "Capacity and performance parameters",
      "Utility requirements per item",
      "Material and construction standards",
      "Service and warranty considerations",
      "Interface with adjacent equipment and finishes",
    ],
    sectors: ["hotels-resorts", "restaurants-cafes", "corporate-cafeterias", "central-production-kitchens"],
    faq: [
      {
        q: "Does HFPC recommend specific brands?",
        a: "Documentation is prepared around performance and technical requirements so that suitable options can be compared. [BRAND POLICY TO BE CONFIRMED BY HFPC]",
      },
      {
        q: "Can documentation be issued for tender directly?",
        a: "Yes. Schedules, BOQs and specifications are prepared as a tender-ready package.",
      },
    ],
  },
  {
    slug: "site-implementation-support",
    index: "08",
    name: "Site & Implementation Support",
    short: "Coordination and review during project execution.",
    image: svcSite,
    imageAlt: "Unfinished commercial kitchen under construction with drawings and a hard hat on the floor",
    intro:
      "Coordination and review during project execution, so that what was planned is what gets installed.",
    addresses: [
      "Site coordination with contractors and vendors",
      "Review of installation against the approved plans",
      "Resolution of on-site coordination issues",
      "Support through to handover",
    ],
    matters:
      "Documentation alone does not guarantee a working facility. Review during execution catches deviations early, keeps utility points and equipment positions aligned with the plan, and protects the operational intent of the design.",
    provides: [
      "Site coordination support",
      "Review visits and observation reports",
      "Coordination with contractors, vendors and the design team",
      "Support at commissioning and handover",
    ],
    deliverables: [
      "Site coordination support",
      "Review and observation inputs",
      "Updated coordination drawings as required",
      "Handover support",
    ],
    technical: [
      "Setting-out and equipment positions",
      "Utility point verification",
      "Ventilation and drainage installation review",
      "Finish and hygiene detail review",
      "Operational readiness of the facility",
    ],
    sectors: ["hotels-resorts", "restaurants-cafes", "hospitals-institutions", "qsr-micro-kitchens"],
    faq: [
      {
        q: "How is site support structured?",
        a: "Scope and frequency of coordination are agreed per project, based on its size, programme and location. [SITE VISIT SCOPE AGREED PER PROJECT]",
      },
      {
        q: "Does HFPC supervise the contractor?",
        a: "HFPC coordinates and reviews against the planning intent. Construction supervision remains with the parties appointed for it.",
      },
    ],
  },
];

export type Sector = {
  slug: string;
  name: string;
  image: string;
  imageAlt: string;
  short: string;
  body: string;
  considerations: string[];
  services: string[];
};

/** Page 8 of the profile — sectors we serve. */
export const sectors: Sector[] = [
  {
    slug: "hotels-resorts",
    name: "Hotels & Resorts",
    image: sectorHotel,
    imageAlt: "Understated hotel entrance courtyard in warm stone at dusk",
    short: "Multi-outlet operations with shared production, storage and support areas.",
    body: "Hotels and resorts run several outlets, banquet operations, housekeeping and staff facilities from a shared back-of-house. Planning has to hold all of them together — production, stores, laundry, waste and staff movement — without any one function blocking another.",
    considerations: [
      "Shared main kitchen serving multiple outlets",
      "Banquet production, plating and dispatch",
      "Receiving, stores and cold-room planning",
      "Laundry and housekeeping support",
      "Separation of staff, service and guest routes",
    ],
    services: [
      "back-of-house-planning",
      "commercial-kitchen-planning",
      "laundry-planning",
      "food-beverage-facilities",
    ],
  },
  {
    slug: "restaurants-cafes",
    name: "Restaurants & Cafés",
    image: svcFnb,
    imageAlt: "Restaurant dining room with a bar counter in warm neutral tones",
    short: "Compact kitchens where every square metre has to earn its place.",
    body: "Standalone restaurants and cafés work with tight areas and fixed shells. Planning concentrates on the smallest workable kitchen for the menu, storage that matches delivery cycles, and a service relationship to the dining area that keeps staff out of the guest's way.",
    considerations: [
      "Menu-driven equipment selection",
      "Compact zoning for preparation, production and washing",
      "Storage sized to delivery frequency",
      "Ventilation within an existing shell",
      "Service and clearing routes",
    ],
    services: [
      "commercial-kitchen-planning",
      "food-beverage-facilities",
      "procurement-documentation",
      "site-implementation-support",
    ],
  },
  {
    slug: "bars-banquets",
    name: "Bars & Banquets",
    image: sectorBanquet,
    imageAlt: "Empty banquet hall set with long tables in restrained neutral decor",
    short: "Peak-load facilities planned around dispatch, holding and return.",
    body: "Banquet and bar operations are defined by peaks. The planning question is how many covers leave the kitchen at once, where they are held and plated, and how the return of soiled ware and linen is handled without crossing the service route.",
    considerations: [
      "Plating and holding areas sized to event capacity",
      "Dispatch and return routes",
      "Beverage production and bar support",
      "Ware-washing capacity at peak",
      "Storage for banquet equipment",
    ],
    services: [
      "food-beverage-facilities",
      "back-of-house-planning",
      "commercial-kitchen-planning",
      "mep-technical-coordination",
    ],
  },
  {
    slug: "corporate-cafeterias",
    name: "Corporate Cafeterias",
    image: sectorCafeteria,
    imageAlt: "Corporate cafeteria servery counter with hot food wells and tray line",
    short: "High-volume service within a fixed time window.",
    body: "Corporate food service concentrates a day's service into short peaks. Planning works back from the number of diners served per sitting: servery length, queueing, production capacity, tray return and washing all follow from it.",
    considerations: [
      "Throughput per sitting and servery planning",
      "Production capacity for peak service",
      "Queueing and circulation",
      "Tray return and ware-washing",
      "Waste segregation at return points",
    ],
    services: [
      "commercial-kitchen-planning",
      "procurement-documentation",
      "waste-management",
      "mep-technical-coordination",
    ],
  },
  {
    slug: "hospitals-institutions",
    name: "Hospitals & Institutions",
    image: sectorHospital,
    imageAlt: "Hospital kitchen plating and tray assembly area with stainless trolleys",
    short: "Hygiene-critical operations with controlled routes and timed distribution.",
    body: "Institutional catering carries stricter hygiene and distribution requirements. Planning focuses on controlled separation of clean and soiled flows, tray assembly and holding, and distribution routes that reach their destination within the time the operation allows.",
    considerations: [
      "Clean and soiled route separation",
      "Tray assembly, holding and distribution",
      "Diet-specific preparation areas",
      "Washing and sanitation capacity",
      "Waste handling and hygiene control",
    ],
    services: [
      "commercial-kitchen-planning",
      "back-of-house-planning",
      "laundry-planning",
      "waste-management",
    ],
  },
  {
    slug: "central-production-kitchens",
    name: "Central Production Kitchens",
    image: sectorCpu,
    imageAlt: "Central production kitchen with bulk cooking equipment in a wide industrial hall",
    short: "Production-scale facilities planned as a process line.",
    body: "A central production kitchen behaves like a light production plant. Planning follows the process: bulk receiving and storage, batch production, cooling, packing, cold storage and dispatch, each sized to the daily output the operation has to deliver.",
    considerations: [
      "Batch production capacity and equipment sizing",
      "Cooling, packing and cold-chain planning",
      "Bulk storage and dispatch",
      "Utility loads for heavy equipment",
      "Hygiene zoning across the process",
    ],
    services: [
      "commercial-kitchen-planning",
      "mep-technical-coordination",
      "procurement-documentation",
      "waste-management",
    ],
  },
  {
    slug: "clubs-crew-kitchens",
    name: "Clubs / Crew Kitchens",
    image: svcKitchen,
    imageAlt: "Commercial kitchen equipment line in a club catering facility",
    short: "Mixed service patterns from a single production area.",
    body: "Clubs and crew catering serve several service patterns — à la carte, buffet, staff and event catering — from limited production space. Planning looks for flexible zoning and equipment that supports more than one style of service.",
    considerations: [
      "Flexible zoning for mixed service",
      "Staff and crew dining requirements",
      "Storage across varied menus",
      "Ware-washing capacity",
      "Support and welfare areas",
    ],
    services: [
      "commercial-kitchen-planning",
      "food-beverage-facilities",
      "back-of-house-planning",
      "laundry-planning",
    ],
  },
  {
    slug: "qsr-micro-kitchens",
    name: "QSRs & Micro-Kitchen Facilities",
    image: sectorQsr,
    imageAlt: "Compact quick service micro-kitchen counter with an efficient equipment layout",
    short: "Repeatable, minimal-footprint layouts built for speed.",
    body: "Quick-service and micro-kitchen formats need the shortest possible workflow in the smallest workable area, in a layout that can be repeated across locations with predictable equipment and utility requirements.",
    considerations: [
      "Minimum viable footprint for the menu",
      "Assembly-line workflow and speed of service",
      "Repeatable layout across outlets",
      "Delivery and takeaway dispatch",
      "Standardised equipment and utility sets",
    ],
    services: [
      "commercial-kitchen-planning",
      "procurement-documentation",
      "site-implementation-support",
      "food-beverage-facilities",
    ],
  },
  {
    slug: "base-kitchens",
    name: "Base Kitchens",
    image: sectorCpu,
    imageAlt: "Base kitchen equipment line prepared for bulk preparation and dispatch",
    short: "Preparation and supply hubs feeding multiple outlets.",
    body: "A base kitchen carries the preparation load for a group of outlets. Planning addresses bulk preparation, semi-processed storage, packing and the dispatch cycle that keeps the outlets supplied.",
    considerations: [
      "Bulk preparation capacity",
      "Semi-processed and cold storage",
      "Packing and labelling areas",
      "Dispatch scheduling and loading",
      "Hygiene control across the chain",
    ],
    services: [
      "commercial-kitchen-planning",
      "back-of-house-planning",
      "mep-technical-coordination",
      "procurement-documentation",
    ],
  },
  {
    slug: "institutional-food-facilities",
    name: "Institutional Food-Facilities",
    image: sectorInstitutional,
    imageAlt: "Institutional canteen dining hall with long tables and natural light",
    short: "Large resident populations served on a fixed daily cycle.",
    body: "Institutional food facilities serve large, predictable populations every day. Planning is driven by daily covers, repeated service cycles, bulk storage, and equipment chosen for durability and simple maintenance.",
    considerations: [
      "Daily covers and repeated service cycles",
      "Bulk storage and issuing",
      "Durable, maintainable equipment selection",
      "Washing and waste capacity",
      "Staff facilities and support areas",
    ],
    services: [
      "commercial-kitchen-planning",
      "back-of-house-planning",
      "waste-management",
      "laundry-planning",
    ],
  },
];

/** Page 4 of the profile — from operational brief to working kitchen. */
export const briefToKitchen = [
  { index: "01", label: "Brief" },
  { index: "02", label: "Menu & Operation" },
  { index: "03", label: "Capacity" },
  { index: "04", label: "Space Planning" },
  { index: "05", label: "Workflow" },
  { index: "06", label: "Equipment" },
  { index: "07", label: "Technical Coordination" },
  { index: "08", label: "Documentation" },
];

/** Page 5 of the profile — integrated flows. */
export const flows = [
  {
    title: "Food Flow",
    steps: ["Receiving", "Storage", "Preparation", "Production", "Service", "Return"],
  },
  {
    title: "People Flow",
    steps: ["Staff Entry", "Changing", "Work Areas", "Service", "Support Areas"],
  },
  {
    title: "Material Flow",
    steps: ["Receiving", "Stores", "Production", "Service", "Return / Disposal"],
  },
  {
    title: "Waste Flow",
    steps: ["Segregation", "Temporary Holding", "Movement", "Collection"],
  },
];

export const laundryFlow = [
  "Soiled Linen",
  "Sorting",
  "Washing",
  "Drying",
  "Finishing",
  "Clean Storage",
  "Distribution",
];

export const wasteFlow = ["Segregate", "Hold", "Move", "Collect"];

/** Page 7 of the profile — from brief to site-ready documentation. */
export const process = [
  { index: "01", name: "Concept Brief", body: "Understanding the operation, intent and constraints of the project." },
  { index: "02", name: "Operational Analysis", body: "Menu, capacity, service mode and working patterns are analysed." },
  { index: "03", name: "Space & Flow Planning", body: "Areas, adjacencies and movement of people, food, materials and waste." },
  { index: "04", name: "Layout Development", body: "Zoning developed into workable, buildable layouts." },
  { index: "05", name: "Equipment Planning", body: "Selection, sizing and positioning of equipment against the operation." },
  { index: "06", name: "Technical Coordination", body: "BOH requirements coordinated with architecture, structure and MEP." },
  { index: "07", name: "BOQ & Specifications", body: "Schedules, quantities and technical specifications prepared." },
  { index: "08", name: "Tender / Procurement Documentation", body: "Documentation issued so offers can be compared on one basis." },
  { index: "09", name: "Site Coordination", body: "Execution reviewed and coordinated against the approved plans." },
  { index: "10", name: "Handover", body: "Support through completion and operational readiness." },
];

/** Page 7 of the profile — key deliverables. */
export const deliverables = [
  "Concept layouts",
  "Detailed BOH plans",
  "Equipment layouts",
  "Equipment schedules",
  "BOQs",
  "Technical specifications",
  "Sections & elevations",
  "Utility requirement schedules",
  "MEP coordination inputs",
  "Procurement documentation",
  "Site coordination support",
];

/** Page 9 of the profile — precision where the project can't afford assumptions. */
export const values = [
  { title: "Operational Thinking", body: "Planning begins with how the facility will actually operate." },
  { title: "Space Efficiency", body: "Every square metre should contribute to the operation." },
  { title: "Workflow Optimisation", body: "Reduce unnecessary movement and operational friction." },
  { title: "Technical Coordination", body: "BOH requirements that work with the wider project." },
  { title: "Procurement Clarity", body: "Clear equipment schedules, BOQs and specification support better decisions." },
  { title: "Future Readiness", body: "Planning should allow for practical adaptation and operational growth." },
];

/** Page 11 of the profile — what HFPC works towards. */
export const commitments = [
  "Long-term partnerships",
  "Practical solutions",
  "Efficient operations",
  "A stronger hospitality industry",
];

/**
 * The company profile contains no project records, client names or images.
 * Projects are therefore intentionally empty; the case-study template is in
 * place and reads from this list once HFPC supplies the details.
 */
export type Project = {
  slug: string;
  name: string;
  sector: string;
  location: string;
  scope: string;
  year?: string;
  image?: string;
  overview: string;
  challenge: string;
  approach: string;
  planningScope: string[];
  deliverables: string[];
  outcome?: string;
  gallery: { caption: string; image?: string }[];
};

export const projects: Project[] = [];

/** Gallery filter categories, aligned to HFPC's own service and sector language. */
export const galleryCategories = [
  "All",
  "Commercial Kitchen",
  "Back-of-House",
  "F&B Facilities",
  "Laundry",
  "Institutional",
  "Drawings & Documentation",
];

export const galleryItems = [
  { id: "g1", category: "Commercial Kitchen", image: svcKitchen, caption: "Commercial kitchen production area", placeholder: true },
  { id: "g2", category: "Back-of-House", image: svcBoh, caption: "Back-of-house service corridor", placeholder: true },
  { id: "g3", category: "F&B Facilities", image: svcFnb, caption: "Outlet service and bar area", placeholder: true },
  { id: "g4", category: "Laundry", image: svcLaundry, caption: "Laundry equipment line", placeholder: true },
  { id: "g5", category: "Institutional", image: sectorHospital, caption: "Institutional plating and distribution area", placeholder: true },
  { id: "g6", category: "Drawings & Documentation", image: svcDocs, caption: "Equipment layouts and schedules", placeholder: true },
  { id: "g7", category: "Commercial Kitchen", image: sectorCpu, caption: "Central production kitchen", placeholder: true },
  { id: "g8", category: "Back-of-House", image: svcWaste, caption: "Waste holding area", placeholder: true },
  { id: "g9", category: "Commercial Kitchen", image: svcSite, caption: "Kitchen installation under execution", placeholder: true },
  { id: "g10", category: "Drawings & Documentation", image: svcMep, caption: "Services coordination", placeholder: true },
  { id: "g11", category: "F&B Facilities", image: sectorQsr, caption: "Micro-kitchen format", placeholder: true },
  { id: "g12", category: "Institutional", image: sectorInstitutional, caption: "Institutional dining facility", placeholder: true },
];

/**
 * Knowledge hub. The company profile contains no articles, so no article
 * bodies, dates or authors are invented here. Each topic is a planned entry
 * that HFPC can complete; the template renders whatever is supplied.
 */
export type Insight = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readingTime: string;
  date?: string;
  body?: string[];
  status: "planned" | "published";
};

export const insights: Insight[] = [
  {
    slug: "kitchen-zoning-basics",
    category: "Commercial Kitchen Planning",
    title: "Kitchen zoning: why the plan starts with the operation",
    excerpt:
      "How receiving, storage, preparation, production, service and washing zones are established from the operational brief rather than from the available shell.",
    readingTime: "[READING TIME]",
    status: "planned",
  },
  {
    slug: "boh-area-planning",
    category: "Back-of-House Planning",
    title: "What gets lost when back-of-house area is compressed",
    excerpt:
      "Stores, staff facilities, circulation and waste are usually the first areas reduced in a project — and the first to constrain the operation.",
    readingTime: "[READING TIME]",
    status: "planned",
  },
  {
    slug: "linen-flow-planning",
    category: "Laundry Planning",
    title: "Linen flow: separating soiled and clean",
    excerpt:
      "Sorting, washing, drying, finishing, storage and distribution planned as one continuous flow with no crossing of soiled and clean routes.",
    readingTime: "[READING TIME]",
    status: "planned",
  },
  {
    slug: "waste-planning-at-source",
    category: "Waste Management",
    title: "Waste planning begins at the point of generation",
    excerpt:
      "Segregation, holding, movement and collection sized to the operation, so that waste never travels through clean-food or guest areas.",
    readingTime: "[READING TIME]",
    status: "planned",
  },
  {
    slug: "utility-schedules-early",
    category: "MEP & Technical Coordination",
    title: "Why utility requirements belong in the design phase",
    excerpt:
      "Equipment loads and service points issued early can be built into the MEP design instead of being resolved on site.",
    readingTime: "[READING TIME]",
    status: "planned",
  },
  {
    slug: "comparable-boqs",
    category: "Procurement & Documentation",
    title: "Making equipment offers comparable",
    excerpt:
      "Schedules, specifications and BOQs written around performance requirements let procurement compare offers on the same basis.",
    readingTime: "[READING TIME]",
    status: "planned",
  },
];

/**
 * Careers. The company profile does not list vacancies, so no specific roles,
 * salaries or team sizes are stated. The page invites applications against
 * HFPC's actual disciplines.
 */
export const careerDisciplines = [
  {
    title: "Kitchen & BOH Planning",
    body: "Planning and layout development for commercial kitchens and supporting back-of-house areas.",
  },
  {
    title: "Equipment & Documentation",
    body: "Equipment schedules, specifications, BOQs and procurement documentation.",
  },
  {
    title: "Technical Coordination",
    body: "Coordination of BOH requirements with architectural, structural and MEP disciplines.",
  },
  {
    title: "Site & Implementation",
    body: "Site coordination and review of installation against approved plans.",
  },
];

export const careerNotes = [
  "Open positions are not listed at present. Applications are reviewed as projects require.",
  "Applications are welcome from candidates with hospitality operations, food-service facility planning, architectural or MEP backgrounds.",
  "[RECRUITMENT PROCESS DETAILS TO BE PROVIDED BY HFPC]",
];

export const serviceOptions = [
  "Kitchen Planning",
  "BOH Planning",
  "F&B Facilities",
  "Laundry",
  "Waste Management",
  "MEP / Technical Coordination",
  "Procurement",
  "Other",
];

export const projectTypes = [
  "New facility",
  "Expansion of an existing facility",
  "Upgrade / refurbishment",
  "Feasibility / exploratory",
  "Review of an existing design",
];

export const facilityTypes = [
  "Hotel / Resort",
  "Restaurant / Café",
  "Bar / Banquet",
  "Corporate Cafeteria",
  "Hospital / Institution",
  "Central Production Kitchen",
  "Club / Crew Kitchen",
  "QSR / Micro-Kitchen",
  "Base Kitchen",
  "Institutional Food-Facility",
  "Other",
];

export const projectStages = [
  "Concept / idea stage",
  "Design stage",
  "Drawings issued / pre-tender",
  "Under construction",
  "Operating facility",
];

export const timelines = [
  "Immediate",
  "Within 3 months",
  "3–6 months",
  "6–12 months",
  "Not yet decided",
];

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Expertise", to: "/expertise" },
  { label: "Sectors", to: "/sectors" },
  { label: "Projects", to: "/projects" },
  { label: "Approach", to: "/approach" },
  { label: "Insights", to: "/insights" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
] as const;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getSector(slug: string) {
  return sectors.find((s) => s.slug === slug);
}
