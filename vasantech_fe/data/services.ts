export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  points?: string[];
}

export const PRIMARY_SERVICES: ServiceItem[] = [
  {
    id: "laptop-repair",
    title: "Laptop Repair & Service",
    description: "Multi-brand laptop servicing including hardware diagnosis, screen and keyboard replacement, OS installation, and general maintenance.",
    image: "/images/services/laptop-repair.jpg",
    icon: "laptop_mac",
    points: [
      "Hardware and software troubleshooting",
      "Screen, hinge, and keyboard servicing",
      "OS installation, driver setup, and data backup",
      "Thermal cleaning and routine maintenance",
    ],
  },
  {
    id: "desktop-repair",
    title: "Desktop Repair & Service",
    description: "Desktop computer troubleshooting, hardware upgrades, power supply repair, and custom assembled PC builds for office or personal use.",
    image: "/images/services/desktop-repair.jpg",
    icon: "desktop_windows",
    points: [
      "Diagnostic and power issue troubleshooting",
      "Motherboard, RAM, and SSD upgrades",
      "Custom assembled PCs tailored to requirement",
      "System optimization and OS configuration",
    ],
  },
  {
    id: "printer-repair",
    title: "Printer Repair & Service",
    description: "Servicing for ink tank, laser, and all-in-one printers. Paper jam resolution, cartridge refilling, and printhead maintenance.",
    image: "/images/services/printer-repair.jpg",
    icon: "print",
    points: [
      "Ink tank and laser printer servicing",
      "Paper feed, roller, and cartridge troubleshooting",
      "Printhead maintenance and alignment",
      "Printer network setup and driver installation",
    ],
  },
];

export const ADDITIONAL_SERVICES: ServiceItem[] = [
  {
    id: "networking",
    title: "Networking, WiFi & Biometrics",
    description: "Structured cabling, router and switch configuration, Wi-Fi coverage enhancement, and biometric attendance machine setup.",
    image: "/images/services/networking.jpg",
    icon: "lan",
  },
  {
    id: "cctv",
    title: "CCTV Solutions",
    description: "Supply, installation, cabling, and DVR/NVR configuration for surveillance setups in retail, commercial, and residential spaces.",
    image: "/images/services/cctv.jpg",
    icon: "videocam",
  },
  {
    id: "projectors",
    title: "Projector Solutions & Support",
    description: "Supply, ceiling mounting, screen setup, lamp servicing, and connectivity for educational and conference environments.",
    image: "/images/services/projectors.jpg",
    icon: "videocam_off",
  },
  {
    id: "interactive-panels",
    title: "Interactive Flat Panels",
    description: "Modern touch smart display boards and digital teaching panels for schools, training institutes, and meeting rooms.",
    image: "/images/services/interactive-panels.jpg",
    icon: "co_present",
  },
];
