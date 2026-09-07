export default function Hero() {
  return (
    <section className="relative w-full bg-surface-container-lowest overflow-hidden pb-space-3xl pt-space-lg border-b border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
            {/* Tagline Badge */}
            <div className="hero-stagger hero-delay-1 inline-flex items-center gap-space-xs px-3.5 py-1.5 rounded-full bg-surface-container text-primary font-label-md text-label-md font-bold shadow-sm">
              <span className="material-symbols-outlined text-[18px] text-secondary">verified</span>
              <span>&quot;Trusted Service Always With You&quot;</span>
            </div>

            {/* Headline */}
            <div className="hero-stagger hero-delay-2 space-y-space-xs">
              <h1 className="font-headline-xl text-headline-xl text-primary leading-tight">
                Computer, Laptop &amp; Printer Sales and Service{" "}
                <span className="text-secondary block">In Kumbakonam</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                Your local computer, laptop, and printer sales and service center in Kumbakonam. We provide repair and service support for laptops, desktops, printers, networking, CCTV, projectors, and interactive panels, along with new and refurbished computer systems.
              </p>
            </div>

            {/* Doorstep Feature Banner */}
            <div className="hero-stagger hero-delay-3 w-full bg-surface-container-low border border-outline-variant/40 p-space-sm rounded-xl flex items-center gap-space-sm shadow-sm hover:border-primary/40 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center shrink-0 text-secondary shadow-sm">
                <span className="material-symbols-outlined text-[24px]">electric_moped</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                <strong className="text-primary font-semibold">Doorstep Service Available in Kumbakonam:</strong>{" "}
                Doorstep support and pickup service are available for selected computer, laptop, and printer requirements. Contact us to check availability.
              </p>
            </div>

            {/* Primary CTAs */}
            <div className="hero-stagger hero-delay-4 flex flex-wrap items-center gap-space-sm pt-space-xs w-full sm:w-auto">
              <a
                className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container hover:-translate-y-0.5 transition-all shadow-md active:translate-y-0"
                href="tel:+919003041200"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
                <span>Call +91 90030 41200</span>
              </a>
              <a
                className="inline-flex items-center justify-center gap-2 px-space-lg py-3 rounded-lg bg-tertiary-container text-on-primary font-label-lg text-label-lg hover:bg-primary hover:-translate-y-0.5 transition-all shadow-md active:translate-y-0"
                href="https://wa.me/919003041200"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>WhatsApp Us</span>
              </a>
              <a
                className="inline-flex items-center gap-1.5 px-space-md py-3 font-label-md text-label-md text-primary hover:text-secondary transition-colors group"
                href="#doorstep-service"
              >
                <span>Doorstep Service Details</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>

            {/* Key Offerings Micro-List */}
            <div className="hero-stagger hero-delay-5 flex flex-wrap items-center gap-y-2 gap-x-5 pt-space-2xs text-on-surface-variant font-label-sm text-label-sm">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-tertiary-container text-[16px]">
                  check_circle
                </span>
                Laptop &amp; Desktop Service
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-tertiary-container text-[16px]">
                  check_circle
                </span>
                Printer Service
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-tertiary-container text-[16px]">
                  check_circle
                </span>
                Sales &amp; Upgrades
              </span>
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-tertiary-container text-[16px]">
                  check_circle
                </span>
                Doorstep Support
              </span>
            </div>
          </div>

          {/* Right Hero Visual Showcase (5 Cols) with Representative Workshop Photo */}
          <div className="lg:col-span-5 relative mt-space-lg lg:mt-0 hero-stagger hero-delay-3">
            <div className="rounded-2xl overflow-hidden bg-surface-container border border-outline-variant/30 shadow-lg relative group">
              <img
                alt="VASAN TECH Service workshop with diagnostic monitor, laptop, tools, and office printer"
                className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                src="/images/hero.jpg"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-2 rounded-lg border border-outline-variant/40 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    precision_manufacturing
                  </span>
                  <span className="font-label-sm text-label-sm text-primary font-bold">
                    Representative technology &amp; service workshop
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
