export default function Navbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.06)] transition-all duration-300"
      id="main-header"
    >
      {/* Top Utility Banner */}
      <div className="bg-primary text-on-primary py-1.5 px-gutter-mobile lg:px-gutter-desktop">
        <div className="max-w-container-max mx-auto flex items-center justify-between font-label-sm text-label-sm">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">
              location_on
            </span>
            <span>Computer, Laptop &amp; Printer Sales and Service • Kumbakonam</span>
          </div>
          <div className="hidden sm:flex items-center gap-space-md">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">
                electric_moped
              </span>
              <span>Doorstep Service Available</span>
            </span>
            <a
              className="flex items-center gap-1 hover:text-tertiary-fixed transition-colors"
              href="tel:+919003041200"
            >
              <span className="material-symbols-outlined text-[15px]">call</span>
              <span>+91 90030 41200</span>
            </a>
            <span className="text-on-primary-container">&quot;Trusted Service Always With You&quot;</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="h-20 max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop flex items-center justify-between gap-space-md">
        <a className="flex items-center gap-2 group" href="#">
          <img
            alt="VASAN TECH Logo"
            className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            src="/images/logo.svg"
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-space-md font-label-md text-label-md">
          <a
            className="nav-link text-on-surface-variant hover:text-primary transition-colors py-space-xs"
            href="#"
          >
            Home
          </a>
          <a
            className="nav-link text-on-surface-variant hover:text-primary transition-colors py-space-xs"
            href="#about"
          >
            About
          </a>
          <a
            className="nav-link text-on-surface-variant hover:text-primary transition-colors py-space-xs"
            href="#services"
          >
            Services
          </a>
          <a
            className="nav-link text-on-surface-variant hover:text-primary transition-colors py-space-xs"
            href="#sales-products"
          >
            Sales &amp; Products
          </a>
          <a
            className="nav-link text-on-surface-variant hover:text-primary transition-colors py-space-xs"
            href="#brands"
          >
            Brands
          </a>
          <a
            className="nav-link text-on-surface-variant hover:text-primary transition-colors py-space-xs"
            href="#doorstep-service"
          >
            Doorstep Service
          </a>
          <a
            className="nav-link text-on-surface-variant hover:text-primary transition-colors py-space-xs"
            href="#why-choose-us"
          >
            Why Choose Us
          </a>
          <a
            className="nav-link text-on-surface-variant hover:text-primary transition-colors py-space-xs"
            href="#contact"
          >
            Contact
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-space-xs sm:gap-space-sm">
          <a
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container hover:-translate-y-0.5 transition-all shadow-sm active:translate-y-0"
            href="tel:+919003041200"
          >
            <span className="material-symbols-outlined text-[18px]">phone_in_talk</span>
            <span>+91 90030 41200</span>
          </a>
          <a
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-tertiary-container text-on-primary font-label-md text-label-md hover:bg-primary hover:-translate-y-0.5 transition-all shadow-sm active:translate-y-0"
            href="https://wa.me/919003041200"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[18px]">chat</span>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
