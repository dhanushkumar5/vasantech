export const BUSINESS_INFO = {
  name: "VASAN TECH",
  motto: "Trusted Service Always With You",
  phone: "+91 90030 41200",
  phoneLink: "tel:+919003041200",
  whatsappBaseUrl: "https://wa.me/919003041200",
  address: "No. 1378, Manargudi Main Road, Sakkottai, Kumbakonam – 612 401, Tamil Nadu",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("No. 1378, Manargudi Main Road, Sakkottai, Kumbakonam – 612 401, Tamil Nadu"),
  description: "Computer, laptop and printer sales and service in Kumbakonam, Tamil Nadu.",
};

export const getWhatsAppUrl = (message?: string) => {
  if (!message) return BUSINESS_INFO.whatsappBaseUrl;
  return `${BUSINESS_INFO.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
};

export const PRIMARY_SERVICES = [
  {
    id: "laptop-repair",
    title: "Laptop Repair & Service",
    description: "Laptop repair and servicing for various brands and models.",
    icon: "laptop_mac",
    points: [
      "Laptop troubleshooting",
      "Hardware and software service",
      "OS installation and setup",
      "General laptop maintenance",
    ],
    whatsappText: "Hello VASAN TECH, I need service/repair support for my Laptop. Please assist.",
  },
  {
    id: "desktop-repair",
    title: "Desktop Repair & Service",
    description: "Desktop computer troubleshooting, servicing, upgrades, and assembled PC support.",
    icon: "desktop_windows",
    points: [
      "Desktop troubleshooting",
      "Hardware upgrades",
      "Custom assembled PCs",
      "OS installation and setup",
    ],
    whatsappText: "Hello VASAN TECH, I need service/repair support for my Desktop computer. Please assist.",
  },
  {
    id: "printer-repair",
    title: "Printer Repair & Service",
    description: "Printer servicing and support for different printer types and brands.",
    icon: "print",
    points: [
      "Printer troubleshooting",
      "Printer servicing",
      "Printer setup and connectivity",
      "General printer maintenance",
    ],
    whatsappText: "Hello VASAN TECH, I need service/repair support for my Printer. Please assist.",
  },
];

export const ADDITIONAL_SERVICES = [
  {
    id: "networking",
    title: "Networking, WiFi & Biometrics",
    description: "Networking, WiFi and biometric device setup and support.",
    icon: "lan",
    whatsappText: "Hello VASAN TECH, I am looking for Networking, WiFi or Biometrics setup and support.",
  },
  {
    id: "cctv",
    title: "CCTV",
    description: "CCTV solutions and support for homes, shops and offices.",
    icon: "videocam",
    whatsappText: "Hello VASAN TECH, I am looking for CCTV solutions and installation support.",
  },
  {
    id: "projectors",
    title: "Projectors",
    description: "Projector solutions and support for offices, classrooms and other spaces.",
    icon: "videocam_off",
    whatsappText: "Hello VASAN TECH, I am looking for Projector solutions and support.",
  },
  {
    id: "interactive-panels",
    title: "Interactive Panels",
    description: "Interactive panel solutions for classrooms, offices and meeting spaces.",
    icon: "co_present",
    whatsappText: "Hello VASAN TECH, I am looking for Interactive Panel solutions and support.",
  },
];

export const LAPTOP_PRODUCTS = [
  {
    id: "gaming-laptops",
    title: "Gaming Laptops",
    description: "Performance laptops for gaming and high-performance requirements.",
    icon: "sports_esports",
    accent: "from-blue-600 to-indigo-700",
  },
  {
    id: "business-laptops",
    title: "Business Laptops",
    description: "Reliable laptops for office, business and professional requirements.",
    icon: "business_center",
    accent: "from-slate-700 to-slate-900",
  },
  {
    id: "student-laptops",
    title: "Student & Everyday Laptops",
    description: "Laptops suitable for study, home and everyday computing.",
    icon: "school",
    accent: "from-emerald-600 to-teal-700",
  },
  {
    id: "thin-laptops",
    title: "Thin & Lightweight Laptops",
    description: "Portable laptops designed for everyday productivity and mobility.",
    icon: "laptop",
    accent: "from-sky-600 to-blue-700",
  },
];

export const PC_PRODUCTS = [
  {
    id: "gaming-pcs",
    title: "Gaming PCs",
    description: "Custom assembled systems for gaming and performance requirements.",
    icon: "stadia_controller",
    accent: "from-purple-600 to-indigo-800",
  },
  {
    id: "office-pcs",
    title: "Office & Business PCs",
    description: "Desktop systems for office, business and professional requirements.",
    icon: "desktop_windows",
    accent: "from-slate-600 to-slate-800",
  },
  {
    id: "home-pcs",
    title: "Home & Student PCs",
    description: "Practical desktop systems for home, study and everyday computing.",
    icon: "computer",
    accent: "from-teal-600 to-cyan-700",
  },
  {
    id: "custom-pcs",
    title: "Custom Assembled PCs",
    description: "PC systems assembled according to individual requirements.",
    icon: "build",
    accent: "from-blue-700 to-indigo-900",
  },
];

export const PRINTER_PRODUCTS = [
  {
    id: "ink-tank-printers",
    title: "Ink Tank Printers",
    description: "Ink tank printers for home, study and everyday printing needs.",
    icon: "water_drop",
    visualStyle: "ink-tank",
  },
  {
    id: "laser-printers",
    title: "Laser Printers",
    description: "Laser printers for everyday document and office printing.",
    icon: "speed",
    visualStyle: "laser",
  },
  {
    id: "all-in-one-printers",
    title: "All-in-One Printers",
    description: "Printers combining printing, scanning and copying in one device.",
    icon: "auto_stories",
    visualStyle: "all-in-one",
  },
  {
    id: "color-printers",
    title: "Color Printers",
    description: "Printers suitable for color documents, reports and everyday printing.",
    icon: "palette",
    visualStyle: "color",
  },
  {
    id: "monochrome-printers",
    title: "Monochrome Printers",
    description: "Printers designed for black-and-white document printing.",
    icon: "contrast",
    visualStyle: "monochrome",
  },
  {
    id: "multifunction-printers",
    title: "Multifunction Printers",
    description: "Printers combining multiple document functions for office use.",
    icon: "inventory_2",
    visualStyle: "multifunction",
  },
];

export const COMPUTER_BRANDS = [
  "Dell",
  "HP",
  "Lenovo",
  "Acer",
  "ASUS",
  "Apple MacBook",
  "MSI",
  "Samsung",
  "Microsoft Surface",
  "Toshiba",
  "and other brands",
];

export const PRINTER_BRANDS = [
  "HP",
  "Canon",
  "Epson",
  "Brother",
  "TVSE",
];

export const DOORSTEP_STEPS = [
  {
    step: "01",
    title: "Contact Us",
    description: "Call or WhatsApp us with your device issue or requirement.",
  },
  {
    step: "02",
    title: "Share Requirement",
    description: "Describe the specific system or printer issue with model details.",
  },
  {
    step: "03",
    title: "Availability & Assist",
    description: "We will confirm doorstep service availability for your location and requirement.",
  },
  {
    step: "04",
    title: "Service / Support",
    description: "Based on the requirement, doorstep support or pickup service can be arranged.",
  },
];

export const WHY_CHOOSE_US_ITEMS = [
  {
    title: "Clear Communication",
    description: "Discuss your device issue or requirement directly with our team.",
    icon: "chat",
    iconColor: "text-primary",
  },
  {
    title: "Computer & Laptop Support",
    description: "Support for laptops, desktops, operating systems, and related hardware.",
    icon: "laptop_mac",
    iconColor: "text-secondary",
  },
  {
    title: "Printer Support",
    description: "Printer sales and service support for different brands and types.",
    icon: "print",
    iconColor: "text-primary",
  },
  {
    title: "New & Refurbished Systems",
    description: "Options for new and refurbished laptops and desktop systems.",
    icon: "devices_other",
    iconColor: "text-primary",
  },
  {
    title: "Phone & WhatsApp Support",
    description: "Contact us directly by phone or WhatsApp for enquiries and service requests.",
    icon: "support_agent",
    iconColor: "text-secondary",
  },
  {
    title: "Local Support in Kumbakonam",
    description: "Serving customers in Kumbakonam and nearby areas.",
    icon: "location_city",
    iconColor: "text-primary",
  },
];
