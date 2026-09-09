export interface ProductItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tag?: string;
  specs?: string[];
  link?: string;
}

export interface ProductCategorySection {
  id: string;
  title: string;
  subtitle: string;
  brandText?: string;
  items: ProductItem[];
}

// 4 intro cards shown on the Home page
export const HOME_PRODUCTS_SHOWCASE: ProductItem[] = [
  {
    id: "computers-laptops",
    title: "Computers & Laptops",
    description: "New and refurbished laptops, business laptops, and custom assembled desktop systems from major brands.",
    image: "/images/products/laptops/gaming.jpg",
    link: "/products#laptops",
    specs: ["Gaming Laptops", "Business Laptops", "Everyday Systems", "Assembled PCs"],
  },
  {
    id: "printers-all-in-one",
    title: "Printers",
    description: "Reliable ink tank, laser, and all-in-one multifunction printers for homes, institutions, and business setups.",
    image: "/images/products/printers/ink-tank.jpg",
    link: "/products#printers",
    specs: ["Ink Tank Printers", "Laser Printers", "Multifunction", "Color & Mono"],
  },
  {
    id: "accessories-peripherals",
    title: "Computer Accessories",
    description: "Keyboards, mice, monitors, audio headsets, premium cables, USB hubs, and networking adapters.",
    image: "/images/products/accessories/keyboard.jpg",
    link: "/products#accessories",
    specs: ["Keyboards & Mice", "Monitors", "Headsets & Speakers", "Networking Cables"],
  },
  {
    id: "hardware-spares",
    title: "Computer Hardware & Spares",
    description: "Motherboards, RAM, high-speed NVMe SSDs, power supplies, laptop replacement screens, batteries, and printer spares.",
    image: "/images/products/spares/desktop-components.jpg",
    link: "/products#hardware-spares",
    specs: ["SSDs & RAM", "Power Supplies", "Laptop Chargers", "Cooling & Fans"],
  },
];

// Full catalog sections for /products page
export const PRODUCT_SECTIONS: ProductCategorySection[] = [
  {
    id: "laptops",
    title: "Laptops",
    subtitle: "Contact us to check current availability and configurations.",
    brandText: "Brands: Dell • HP • Lenovo • Acer • ASUS",
    items: [
      {
        id: "gaming-laptops",
        title: "Gaming Laptops",
        description: "High-performance laptops equipped with dedicated graphics and advanced cooling systems for gaming and heavy computing tasks.",
        image: "/images/products/laptops/gaming.jpg",
        specs: ["Dedicated Graphics", "High Refresh Rate Displays", "Enhanced Thermal Cooling"],
      },
      {
        id: "business-laptops",
        title: "Business Laptops",
        description: "Durable, secure, and reliable systems engineered for professionals, corporate use, and multi-tasking productivity.",
        image: "/images/products/laptops/business.jpg",
        specs: ["Robust Build Quality", "Extended Battery Life", "Hardware Security Features"],
      },
      {
        id: "student-everyday-laptops",
        title: "Student & Everyday Laptops",
        description: "Value-focused, dependable laptops designed for schooling, university assignments, home study, and standard daily browsing.",
        image: "/images/products/laptops/student.jpg",
        specs: ["Practical Everyday Specs", "Cost-effective Value", "Reliable Performance"],
      },
      {
        id: "thin-light-laptops",
        title: "Thin & Lightweight Laptops",
        description: "Slim ultrabooks offering effortless portability, responsive SSD performance, and long battery endurance on the move.",
        image: "/images/products/laptops/thin-light.jpg",
        specs: ["Slim Ultralight Chassis", "Fast NVMe SSD", "All-day Battery Backup"],
      },
    ],
  },
  {
    id: "desktops",
    title: "Desktop PCs",
    subtitle: "Contact us to check current availability and configurations.",
    brandText: "Brands: HP • Dell • Lenovo • Custom Assembled",
    items: [
      {
        id: "gaming-pcs",
        title: "Gaming PCs",
        description: "Custom-configured gaming rigs with high-performance processors, dedicated GPU graphics, RGB chassis, and high-efficiency airflow.",
        image: "/images/products/pcs/gaming.jpg",
        specs: ["Dedicated High-End GPUs", "Liquid/Air Cooling", "High-FPS Gaming Ready"],
      },
      {
        id: "office-business-pcs",
        title: "Office & Business PCs",
        description: "Reliable, energy-efficient desktop workstations tailored for offices, accounts departments, and continuous commercial workflows.",
        image: "/images/products/pcs/office.jpg",
        specs: ["Stable Multi-core CPUs", "Quiet Energy-efficient Operation", "Compact Desktop Form Factors"],
      },
      {
        id: "home-student-pcs",
        title: "Home & Student PCs",
        description: "Practical desktop packages complete with monitor, keyboard, and mouse for learning, e-learning, and family multimedia use.",
        image: "/images/products/pcs/home.jpg",
        specs: ["Complete Setup Bundles", "Ideal for Online Learning", "Easy Future Upgrades"],
      },
      {
        id: "custom-assembled-pcs",
        title: "Custom Assembled PCs",
        description: "Custom computers built to your exact budget and component specifications for video editing, 3D rendering, or specialized workloads.",
        image: "/images/products/pcs/custom.jpg",
        specs: ["Tailored Component Matching", "Quality Brand Selection", "Full Assembly & Cable Management"],
      },
    ],
  },
  {
    id: "printers",
    title: "Printers",
    subtitle: "Contact us to check current availability and configurations.",
    brandText: "Brands: HP • Canon • Epson • Brother • TVSE",
    items: [
      {
        id: "ink-tank-printers",
        title: "Ink Tank Printers",
        description: "Ultra low-cost per page continuous ink refill systems ideal for high-volume color document and photo printing.",
        image: "/images/products/printers/ink-tank.jpg",
        specs: ["High Page Yield Bottles", "Low Cost Per Print", "Spill-free Refill Design"],
      },
      {
        id: "laser-printers",
        title: "Laser Printers",
        description: "Fast, crisp monochrome and color laser printing designed for high speed text document outputs in busy office environments.",
        image: "/images/products/printers/laser.jpg",
        specs: ["Crisp Sharp Laser Text", "High-speed Output", "Heavy Duty Cycles"],
      },
      {
        id: "all-in-one-printers",
        title: "All-in-One Printers",
        description: "Complete multifunction units offering print, flatbed scan, and copy features in a compact, space-saving desktop footprint.",
        image: "/images/products/printers/all-in-one.jpg",
        specs: ["Print, Scan & Copy", "Wi-Fi & USB Connectivity", "Compact Space Saver"],
      },
      {
        id: "color-printers",
        title: "Color Printers",
        description: "Vibrant color photo and presentation printing solutions for educational institutes, creative studios, and small enterprises.",
        image: "/images/products/printers/color.jpg",
        specs: ["Vibrant Color Accuracy", "Borderless Photo Support", "Multiple Media Handling"],
      },
      {
        id: "monochrome-printers",
        title: "Monochrome Printers",
        description: "Dedicated black & white printers built for invoicing, billing, student material, and general administrative document printing.",
        image: "/images/products/printers/monochrome.jpg",
        specs: ["Fast First Page Out", "Economical Toner Use", "Simple Reliable Maintenance"],
      },
      {
        id: "multifunction-printers",
        title: "Multifunction Printers",
        description: "Commercial multi-feature printers featuring automatic document feeders (ADF), duplex printing, and network sharing.",
        image: "/images/products/printers/multifunction.jpg",
        specs: ["Auto Document Feeder (ADF)", "Duplex Two-sided Printing", "Network Ethernet & Wi-Fi"],
      },
    ],
  },
  {
    id: "accessories",
    title: "Computer Accessories",
    subtitle: "Contact us to check current availability and configurations.",
    items: [
      {
        id: "keyboards",
        title: "Keyboard",
        description: "Wired and wireless membrane and mechanical keyboards for typing comfort and durability.",
        image: "/images/products/accessories/keyboard.jpg",
      },
      {
        id: "mouse",
        title: "Mouse",
        description: "Ergonomic wired, wireless, and high-precision optical mice for smooth navigation.",
        image: "/images/products/accessories/mouse.jpg",
      },
      {
        id: "monitor",
        title: "Monitor",
        description: "Full HD, IPS, and gaming monitors with eye-care technology for workspace and entertainment.",
        image: "/images/products/accessories/monitor.jpg",
      },
      {
        id: "speakers",
        title: "Speakers",
        description: "Desktop stereo speakers and multimedia audio systems with clean sound output.",
        image: "/images/products/accessories/speakers.jpg",
      },
      {
        id: "headsets",
        title: "Headsets",
        description: "Over-ear headsets with noise-reducing microphones for meetings, calls, and listening.",
        image: "/images/products/accessories/headsets.jpg",
      },
      {
        id: "cables",
        title: "Cables",
        description: "HDMI, DisplayPort, VGA, USB-C, printer USB, and power cables in various lengths.",
        image: "/images/products/accessories/cables.jpg",
      },
      {
        id: "usb-accessories",
        title: "USB Accessories",
        description: "Multi-port USB hubs, card readers, Bluetooth receivers, and flash storage drives.",
        image: "/images/products/accessories/usb-accessories.jpg",
      },
      {
        id: "networking-accessories",
        title: "Networking Accessories",
        description: "Wi-Fi routers, network switches, Cat6 patch cables, connectors, and USB Wi-Fi dongles.",
        image: "/images/products/accessories/networking-accessories.jpg",
      },
    ],
  },
  {
    id: "hardware-spares",
    title: "Computer Hardware & Spares",
    subtitle: "Contact us to check current availability and configurations.",
    items: [
      {
        id: "desktop-components",
        title: "Desktop Components",
        description: "Motherboards, CPUs, discrete graphic cards, PC cabinets, and system fans.",
        image: "/images/products/spares/desktop-components.jpg",
      },
      {
        id: "laptop-spares",
        title: "Laptop Spares",
        description: "Replacement laptop displays, keyboards, hinges, touchpad units, and body panels.",
        image: "/images/products/spares/laptop-spares.jpg",
      },
      {
        id: "printer-spares",
        title: "Printer Spares",
        description: "Printer toner cartridges, pickup rollers, maintenance boxes, and printhead parts.",
        image: "/images/products/spares/printer-spares.jpg",
      },
      {
        id: "ssd-storage",
        title: "SSD / Storage",
        description: "High-speed M.2 NVMe and 2.5-inch SATA SSDs, external hard drives, and storage upgrades.",
        image: "/images/products/spares/ssd-storage.jpg",
      },
      {
        id: "ram",
        title: "RAM",
        description: "DDR3, DDR4, and DDR5 memory modules for desktop and laptop performance boosting.",
        image: "/images/products/spares/ram.jpg",
      },
      {
        id: "power-supplies",
        title: "Power Supplies",
        description: "Certified ATX power supply units (SMPS) with surge protection for desktop computers.",
        image: "/images/products/spares/power-supplies.jpg",
      },
      {
        id: "cooling-components",
        title: "Cooling Components",
        description: "CPU air coolers, case fans, thermal paste, and replacement laptop cooling fans.",
        image: "/images/products/spares/cooling-components.jpg",
      },
      {
        id: "chargers-batteries",
        title: "Laptop Chargers & Batteries",
        description: "Original specification power adapters, USB-C chargers, and replacement laptop batteries.",
        image: "/images/products/spares/chargers-batteries.jpg",
      },
    ],
  },
];
