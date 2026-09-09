import Link from "next/link";
import Image from "next/image";
import { BUSINESS_INFO } from "@/data/business";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface pt-space-2xl pb-space-xl border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl mb-space-2xl">
          {/* Col 1: Brand & Motto */}
          <div className="space-y-space-sm">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  alt="VASAN TECH Logo"
                  src="/images/logo.svg"
                  width={48}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-headline-sm tracking-tight text-primary uppercase">
                  {BUSINESS_INFO.name}
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-secondary leading-none">
                  {BUSINESS_INFO.tagline}
                </span>
              </div>
            </div>
            <p className="font-label-md text-label-md text-primary font-semibold italic">
              &quot;{BUSINESS_INFO.motto}&quot;
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Computer, laptop, and printer sales and service in Kumbakonam, Tamil Nadu. Complete hardware, accessories and IT solutions.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-space-sm">
            <h4 className="font-headline-sm text-headline-sm text-on-surface">Quick Links</h4>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link className="hover:text-primary transition-colors" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/#about">
                  About VASAN TECH
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/#services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/products">
                  Products &amp; Accessories
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/#brands">
                  Brands We Deal With
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/#doorstep-service">
                  Doorstep Service
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/#why-choose-us">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/#contact">
                  Contact &amp; Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Products & Services Catalog Links */}
          <div className="space-y-space-sm">
            <h4 className="font-headline-sm text-headline-sm text-on-surface">Products &amp; Spares</h4>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <Link className="hover:text-primary transition-colors" href="/products#laptops">
                  Laptops
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/products#desktops">
                  Desktop PCs
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/products#printers">
                  Printers &amp; Multifunction
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/products#accessories">
                  Computer Accessories
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/products#hardware-spares">
                  Computer Hardware &amp; Spares
                </Link>
              </li>
              <li>
                <Link className="hover:text-primary transition-colors" href="/#doorstep-service">
                  Doorstep Pickup &amp; Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Contact */}
          <div className="space-y-space-sm">
            <h4 className="font-headline-sm text-headline-sm text-on-surface">Location &amp; Contact</h4>
            <div className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary mt-0.5 shrink-0">
                  location_on
                </span>
                <span>{BUSINESS_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary shrink-0">
                  phone
                </span>
                <a className="hover:text-primary hover:underline" href={BUSINESS_INFO.phoneLink}>
                  {BUSINESS_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary shrink-0">
                  chat
                </span>
                <a
                  className="hover:text-primary hover:underline"
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {BUSINESS_INFO.phone} (WhatsApp)
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary shrink-0">
                  electric_moped
                </span>
                <span>Doorstep Service Available</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-space-lg border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-space-sm text-center font-body-sm text-body-sm text-on-surface-variant">
          <p>{BUSINESS_INFO.copyright}</p>
          <p className="font-label-sm text-label-sm text-outline">
            {BUSINESS_INFO.addressShort}
          </p>
        </div>
      </div>
    </footer>
  );
}
