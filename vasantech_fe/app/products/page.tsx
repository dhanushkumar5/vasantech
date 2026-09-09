import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import ScrollObserver from "@/components/ScrollObserver";
import { BUSINESS_INFO, BRAND_GROUPS } from "@/data/business";
import { PRODUCT_SECTIONS } from "@/data/products";
import { createProductEnquiryUrl, createWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "VASAN TECH - Computers, Laptops, Printers & Accessories",
  description:
    "Explore computers, laptops, printers, accessories and computer hardware available through VASAN TECH. Computer, laptop and printer sales and service in Kumbakonam.",
};

export default function ProductsPage() {
  const categoryPills = [
    { label: "Laptops", href: "#laptops" },
    { label: "Desktop PCs", href: "#desktops" },
    { label: "Printers", href: "#printers" },
    { label: "Computer Accessories", href: "#accessories" },
    { label: "Computer Hardware & Spares", href: "#hardware-spares" },
    { label: "Brands We Deal With", href: "#brands" },
  ];

  const laptopsSection = PRODUCT_SECTIONS.find((s) => s.id === "laptops")!;
  const desktopsSection = PRODUCT_SECTIONS.find((s) => s.id === "desktops")!;
  const printersSection = PRODUCT_SECTIONS.find((s) => s.id === "printers")!;
  const accessoriesSection = PRODUCT_SECTIONS.find((s) => s.id === "accessories")!;
  const sparesSection = PRODUCT_SECTIONS.find((s) => s.id === "hardware-spares")!;

  return (
    <>
      <ScrollObserver />
      <Navbar />

      <main className="w-full pt-28 bg-surface flex-grow pb-16 lg:pb-0">
        <div className="flex flex-col w-full">
          {/* Header & Breadcrumb Section */}
          <section className="w-full bg-surface-container-low py-space-xl lg:py-space-2xl">
            <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
              <div className="flex flex-col gap-space-md">
                {/* Breadcrumb */}
                <div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
                  <Link className="hover:text-primary transition-colors" href="/">
                    Home
                  </Link>
                  <span className="material-symbols-outlined text-[16px] text-outline">
                    chevron_right
                  </span>
                  <span className="text-primary font-bold">Products</span>
                </div>

                {/* Header Title & Direct Support Box */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
                  <div className="max-w-3xl space-y-space-sm">
                    <h1 className="font-headline-xl text-headline-xl text-primary tracking-tight font-bold">
                      Computers, Laptops, Printers &amp; Accessories
                    </h1>
                    <p className="font-body-lg text-body-lg text-on-surface-variant">
                      Explore computers, laptops, printers, accessories and computer hardware available through VASAN TECH. Contact us to check current availability and configurations.
                    </p>
                  </div>
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center gap-space-md border-l-4 border-primary shrink-0">
                    <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[24px]">support_agent</span>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider">
                        Direct Support
                      </p>
                      <a
                        className="font-headline-sm text-headline-sm text-primary hover:underline font-bold"
                        href={BUSINESS_INFO.phoneLink}
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Info Notice Banner */}
                <div className="mt-space-xs bg-surface-container rounded-lg p-space-sm flex items-center gap-space-sm text-on-surface">
                  <span className="material-symbols-outlined text-primary text-[20px] shrink-0">
                    info
                  </span>
                  <span className="font-label-md text-label-md">
                    Product visuals are representative category showcases. Contact us to check current availability and configurations.
                  </span>
                </div>

                {/* Category Quick Navigation Pills */}
                <div className="pt-space-xs flex items-center gap-space-xs overflow-x-auto pb-space-2xs no-scrollbar">
                  {categoryPills.map((pill) => (
                    <a
                      key={pill.label}
                      className="whitespace-nowrap px-space-md py-2 rounded-full bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm hover:bg-primary hover:text-on-primary transition-all active:scale-98"
                      href={pill.href}
                    >
                      {pill.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section 1: Laptops */}
          <section className="w-full py-space-2xl bg-surface" id="laptops">
            <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-sm">
                <div className="space-y-space-2xs">
                  <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                    {laptopsSection.title}
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {laptopsSection.subtitle}
                  </p>
                </div>
                {laptopsSection.brandText && (
                  <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-outline">
                    <span>{laptopsSection.brandText}</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                {laptopsSection.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-outline-variant/30"
                  >
                    <div>
                      <div className="aspect-[16/10] w-full bg-surface-container overflow-hidden relative">
                        <Image
                          alt={item.title}
                          src={item.image}
                          fill
                          className="object-cover object-center transform hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-space-lg space-y-space-xs">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          {item.title}
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          {item.description}
                        </p>
                        {item.specs && (
                          <div className="pt-space-2xs flex flex-wrap gap-1.5 font-label-sm text-label-sm text-outline">
                            {item.specs.map((spec) => (
                              <span
                                key={spec}
                                className="bg-surface-container-low px-2 py-0.5 rounded text-on-surface-variant"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="p-space-lg pt-0">
                      <a
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-tertiary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm"
                        href={createProductEnquiryUrl(item.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="material-symbols-outlined text-[18px]">chat</span>
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 2: Desktop PCs */}
          <section className="w-full py-space-2xl bg-surface-container-low" id="desktops">
            <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-sm">
                <div className="space-y-space-2xs">
                  <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                    {desktopsSection.title}
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {desktopsSection.subtitle}
                  </p>
                </div>
                {desktopsSection.brandText && (
                  <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-outline">
                    <span>{desktopsSection.brandText}</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
                {desktopsSection.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-outline-variant/30"
                  >
                    <div>
                      <div className="aspect-[16/10] w-full bg-surface-container overflow-hidden relative">
                        <Image
                          alt={item.title}
                          src={item.image}
                          fill
                          className="object-cover object-center transform hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-space-lg space-y-space-xs">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          {item.title}
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          {item.description}
                        </p>
                        {item.specs && (
                          <div className="pt-space-2xs flex flex-wrap gap-1.5 font-label-sm text-label-sm text-outline">
                            {item.specs.map((spec) => (
                              <span
                                key={spec}
                                className="bg-surface-container-low px-2 py-0.5 rounded text-on-surface-variant"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="p-space-lg pt-0">
                      <a
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-tertiary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm"
                        href={createProductEnquiryUrl(item.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="material-symbols-outlined text-[18px]">chat</span>
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: Printers */}
          <section className="w-full py-space-2xl bg-surface" id="printers">
            <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-sm">
                <div className="space-y-space-2xs">
                  <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                    {printersSection.title}
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {printersSection.subtitle}
                  </p>
                </div>
                {printersSection.brandText && (
                  <div className="font-label-sm text-label-sm text-outline">
                    {printersSection.brandText}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
                {printersSection.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between border border-outline-variant/30"
                  >
                    <div>
                      <div className="aspect-[4/3] w-full bg-surface-container overflow-hidden relative">
                        <Image
                          alt={item.title}
                          src={item.image}
                          fill
                          className="object-cover object-center transform hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-space-lg space-y-space-xs">
                        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                          {item.title}
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                          {item.description}
                        </p>
                        {item.specs && (
                          <div className="pt-space-2xs flex flex-wrap gap-1.5 font-label-sm text-label-sm text-outline">
                            {item.specs.map((spec) => (
                              <span
                                key={spec}
                                className="bg-surface-container-low px-2 py-0.5 rounded text-on-surface-variant"
                              >
                                {spec}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="p-space-lg pt-0">
                      <a
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-tertiary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm"
                        href={createProductEnquiryUrl(item.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="material-symbols-outlined text-[18px]">chat</span>
                        <span>Enquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 4: Computer Accessories */}
          <section className="w-full py-space-2xl bg-surface-container-low" id="accessories">
            <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
              <div className="space-y-space-2xs mb-space-xl">
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                  {accessoriesSection.title}
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {accessoriesSection.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
                {accessoriesSection.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-surface-container-lowest rounded-xl border border-surface-container overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group"
                  >
                    <div className="w-full h-44 overflow-hidden bg-surface-container relative">
                      <Image
                        alt={item.title}
                        src={item.image}
                        fill
                        className="object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-space-sm flex-grow flex flex-col justify-between space-y-space-xs">
                      <div>
                        <h4 className="font-headline-sm text-[16px] text-on-surface font-bold">
                          {item.title}
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-1">
                          {item.description}
                        </p>
                      </div>
                      <a
                        className="inline-flex items-center gap-1 text-primary hover:text-secondary font-label-sm text-label-sm font-semibold transition-colors pt-space-2xs"
                        href={createProductEnquiryUrl(item.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Enquire on WhatsApp</span>
                        <span className="material-symbols-outlined text-[16px]">chat</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 5: Computer Hardware & Spares */}
          <section className="w-full py-space-2xl bg-surface" id="hardware-spares">
            <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
              <div className="space-y-space-2xs mb-space-xl">
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                  {sparesSection.title}
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {sparesSection.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-space-md">
                {sparesSection.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-surface-container-lowest rounded-xl border border-surface-container overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group"
                  >
                    <div className="w-full h-44 overflow-hidden bg-surface-container relative">
                      <Image
                        alt={item.title}
                        src={item.image}
                        fill
                        className="object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 50vw, 25vw"
                      />
                    </div>
                    <div className="p-space-sm flex-grow flex flex-col justify-between space-y-space-xs">
                      <div>
                        <h4 className="font-headline-sm text-[16px] text-on-surface font-bold">
                          {item.title}
                        </h4>
                        <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-1">
                          {item.description}
                        </p>
                      </div>
                      <a
                        className="inline-flex items-center gap-1 text-primary hover:text-secondary font-label-sm text-label-sm font-semibold transition-colors pt-space-2xs"
                        href={createProductEnquiryUrl(item.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Enquire on WhatsApp</span>
                        <span className="material-symbols-outlined text-[16px]">chat</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 6: Brands We Deal With */}
          <section className="w-full py-space-2xl bg-surface-container-low" id="brands">
            <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
              <div className="text-center max-w-2xl mx-auto mb-space-xl space-y-space-2xs">
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
                  Brands We Deal With
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Products, components and peripherals from leading technology brands.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
                {BRAND_GROUPS.map((group) => (
                  <div
                    key={group.category}
                    className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-md border border-outline-variant/30"
                  >
                    <div className="flex items-center gap-space-xs text-primary">
                      <span className="material-symbols-outlined text-[24px]">
                        {group.icon}
                      </span>
                      <h3 className="font-headline-sm text-headline-sm font-bold">
                        {group.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-space-xs">
                      {group.brands.map((brand) => (
                        <span
                          key={brand.name}
                          className="px-space-md py-1.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md font-semibold"
                        >
                          {brand.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 7: Custom Enquiry CTA Card */}
          <section className="w-full py-space-2xl bg-surface">
            <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
              <div className="bg-primary text-on-primary rounded-xl p-space-lg lg:p-space-2xl shadow-md flex flex-col lg:flex-row items-center justify-between gap-space-xl">
                <div className="space-y-space-sm max-w-2xl text-center lg:text-left">
                  <h2 className="font-headline-lg text-headline-lg font-bold">
                    Have a specific model or configuration requirement?
                  </h2>
                  <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
                    Contact VASAN TECH directly on WhatsApp ({BUSINESS_INFO.phone}) or call us. We will assist you with availability, specifications, and options.
                  </p>
                  <div className="pt-space-xs flex items-center gap-2 justify-center lg:justify-start font-body-sm text-body-sm text-on-primary-container">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                    <span>{BUSINESS_INFO.address}</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-space-sm w-full lg:w-auto shrink-0 justify-center">
                  <a
                    className="inline-flex items-center justify-center gap-2 px-space-lg py-3.5 rounded-lg bg-tertiary-container text-on-primary font-label-lg text-label-lg hover:bg-primary transition-colors shadow-sm"
                    href={createWhatsAppUrl("Hello VASAN TECH, I have a specific model or configuration requirement. Please assist.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined">chat</span>
                    <span>WhatsApp Support</span>
                  </a>
                  <a
                    className="inline-flex items-center justify-center gap-2 px-space-lg py-3.5 rounded-lg bg-secondary-container text-on-primary font-label-lg text-label-lg hover:bg-secondary transition-colors shadow-sm"
                    href={BUSINESS_INFO.phoneLink}
                  >
                    <span className="material-symbols-outlined">call</span>
                    <span>Call {BUSINESS_INFO.phone}</span>
                  </a>
                  <a
                    className="inline-flex items-center justify-center gap-2 px-space-lg py-3.5 rounded-lg bg-surface-container-lowest text-primary font-label-lg text-label-lg hover:bg-surface-container-high transition-colors shadow-sm"
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="material-symbols-outlined">directions</span>
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <MobileStickyBar />
    </>
  );
}
