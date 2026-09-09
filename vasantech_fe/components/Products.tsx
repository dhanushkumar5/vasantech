import Link from "next/link";
import Image from "next/image";
import { createWhatsAppUrl } from "@/lib/whatsapp";

interface IntroCard {
  id: string;
  badge: string;
  badgeColor: string;
  title: string;
  description: string;
  image: string;
  href: string;
  whatsappMessage: string;
}

const INTRO_CARDS: IntroCard[] = [
  {
    id: "computers-laptops",
    badge: "Laptops & PCs",
    badgeColor: "text-secondary",
    title: "Computers & Laptops",
    description: "Business, gaming, everyday laptops and custom desktops.",
    image: "/images/products/laptops/gaming.jpg",
    href: "/products#laptops",
    whatsappMessage: "Hello VASAN TECH, I enquire about Computers and Laptops",
  },
  {
    id: "printers",
    badge: "Sales & Setup",
    badgeColor: "text-primary",
    title: "Printers",
    description: "Ink tank, laser, all-in-one and multifunction printers.",
    image: "/images/products/printers/ink-tank.jpg",
    href: "/products#printers",
    whatsappMessage: "Hello VASAN TECH, I enquire about Printers",
  },
  {
    id: "accessories",
    badge: "Peripherals",
    badgeColor: "text-secondary",
    title: "Computer Accessories",
    description: "Keyboards, mice, monitors, speakers, headsets, cables and USB accessories.",
    image: "/images/products/accessories/keyboard.jpg",
    href: "/products#accessories",
    whatsappMessage: "Hello VASAN TECH, I enquire about Computer Accessories",
  },
  {
    id: "hardware-spares",
    badge: "Components",
    badgeColor: "text-primary",
    title: "Computer Hardware & Spares",
    description: "Power supplies, RAM, SSDs, graphics cards, fans and replacement parts.",
    image: "/images/products/spares/desktop-components.jpg",
    href: "/products#hardware-spares",
    whatsappMessage: "Hello VASAN TECH, I enquire about Hardware and Spares",
  },
];

export default function Products() {
  return (
    <section className="w-full bg-surface-container-low border-t border-outline-variant/30 py-space-xl" id="products">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop space-y-space-xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md reveal-on-scroll is-visible">
          <div className="max-w-2xl space-y-space-xs">
            <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
              Hardware Showcase
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Products, Accessories &amp; Hardware
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Explore computers, laptops, printers, accessories, hardware and spare parts from leading brands.
            </p>
          </div>
          <Link
            className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-all shadow-sm w-fit"
            href="/products"
          >
            <span>View All Products</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>

        {/* 4 Showcase Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {INTRO_CARDS.map((card) => (
            <div
              key={card.id}
              className="reveal-on-scroll rounded-xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col sm:flex-row hover:shadow-md hover:-translate-y-1 transition-all duration-300 group is-visible"
            >
              <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden bg-surface-container shrink-0 relative min-h-[180px]">
                <Image
                  alt={card.title}
                  src={card.image}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 25vw, 20vw"
                />
              </div>
              <div className="sm:w-3/5 p-space-md sm:p-space-lg flex flex-col justify-between space-y-space-sm">
                <div>
                  <span className={`font-label-sm text-label-sm ${card.badgeColor} font-bold uppercase`}>
                    {card.badge}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    {card.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {card.description}
                  </p>
                </div>
                <div className="flex items-center gap-space-sm">
                  <Link
                    className="inline-flex items-center gap-1 text-primary hover:text-secondary font-label-md text-label-md font-semibold transition-colors"
                    href={card.href}
                  >
                    <span>Learn More</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                  <a
                    className="inline-flex items-center gap-1 text-tertiary-container hover:text-primary font-label-md text-label-md transition-colors"
                    href={createWhatsAppUrl(card.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined text-[16px]">chat</span>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Big Bottom Button to Full Catalog */}
        <div className="text-center pt-space-md reveal-on-scroll is-visible">
          <Link
            className="inline-flex items-center justify-center gap-2 px-space-xl py-3.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container hover:-translate-y-0.5 transition-all shadow-md active:translate-y-0"
            href="/products"
          >
            <span className="material-symbols-outlined text-[20px]">grid_view</span>
            <span>Explore All Products &amp; Catalog</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
