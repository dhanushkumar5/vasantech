export default function Services() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl" id="services">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop space-y-space-2xl">
        <div className="max-w-2xl space-y-space-xs reveal-on-scroll">
          <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
            Service &amp; Repair
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Our Services</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Troubleshooting, servicing, and support for computers, laptops, and printers.
          </p>
        </div>

        {/* 3 Primary Image-Based Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* Card 1: Laptop Repair & Service */}
          <div className="reveal-on-scroll rounded-xl bg-surface-container-low border border-outline-variant/30 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
            <div>
              <div className="w-full aspect-[4/3] overflow-hidden bg-surface-container">
                <img
                  alt="Laptop Repair &amp; Service"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/services/laptop-repair.jpg"
                />
              </div>
              <div className="p-space-lg space-y-space-sm">
                <div className="space-y-1">
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    Laptop Repair &amp; Service
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Laptop repair and servicing for various brands and models.
                  </p>
                </div>
                <ul className="space-y-2 pt-2 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[16px]">
                      check_circle
                    </span>
                    <span>Laptop troubleshooting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[16px]">
                      check_circle
                    </span>
                    <span>Hardware and software service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[16px]">
                      check_circle
                    </span>
                    <span>OS installation and setup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[16px]">
                      check_circle
                    </span>
                    <span>General laptop maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-space-lg pt-0">
              <a
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm"
                href="https://wa.me/919003041200?text=Hello%20VASAN%20TECH,%20I%20enquire%20about%20Laptop%20Repair%20Service"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 2: Desktop Repair & Service */}
          <div className="reveal-on-scroll rounded-xl bg-surface-container-low border border-outline-variant/30 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
            <div>
              <div className="w-full aspect-[4/3] overflow-hidden bg-surface-container">
                <img
                  alt="Desktop Repair &amp; Service"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/services/desktop-repair.jpg"
                />
              </div>
              <div className="p-space-lg space-y-space-sm">
                <div className="space-y-1">
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    Desktop Repair &amp; Service
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Desktop computer troubleshooting, servicing, upgrades, and assembled PC support.
                  </p>
                </div>
                <ul className="space-y-2 pt-2 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[16px]">
                      check_circle
                    </span>
                    <span>Desktop troubleshooting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[16px]">
                      check_circle
                    </span>
                    <span>Hardware upgrades</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[16px]">
                      check_circle
                    </span>
                    <span>Custom assembled PCs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[16px]">
                      check_circle
                    </span>
                    <span>OS installation and setup</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-space-lg pt-0">
              <a
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm"
                href="https://wa.me/919003041200?text=Hello%20VASAN%20TECH,%20I%20enquire%20about%20Desktop%20Repair%20Service"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 3: Printer Repair & Service */}
          <div className="reveal-on-scroll rounded-xl bg-surface-container-low border border-outline-variant/30 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
            <div>
              <div className="w-full aspect-[4/3] overflow-hidden bg-surface-container">
                <img
                  alt="Printer Repair &amp; Service"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/services/printer-repair.jpg"
                />
              </div>
              <div className="p-space-lg space-y-space-sm">
                <div className="space-y-1">
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    Printer Repair &amp; Service
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Printer servicing and support for different printer types and brands.
                  </p>
                </div>
                <ul className="space-y-2 pt-2 text-on-surface font-body-sm text-body-sm">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[16px]">
                      check_circle
                    </span>
                    <span>Printer troubleshooting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[16px]">
                      check_circle
                    </span>
                    <span>Printer servicing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[16px]">
                      check_circle
                    </span>
                    <span>Printer setup and connectivity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[16px]">
                      check_circle
                    </span>
                    <span>General printer maintenance</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="p-space-lg pt-0">
              <a
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm"
                href="https://wa.me/919003041200?text=Hello%20VASAN%20TECH,%20I%20enquire%20about%20Printer%20Repair%20Service"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Enquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Additional Confirmed Services Grid (All 4 with matching 4:3 image cards) */}
        <div className="space-y-space-md pt-space-xs">
          <div className="reveal-on-scroll">
            <h3 className="font-headline-sm text-headline-sm text-primary">
              Additional IT &amp; Office Solutions
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Setup, installation, and support for offices, retail shops, and classrooms in Kumbakonam.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {/* Service 4: Networking */}
            <div className="reveal-on-scroll rounded-xl bg-surface-container-low border border-outline-variant/30 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-full">
                <div className="aspect-[4/3] overflow-hidden bg-surface-container">
                  <img
                    alt="Networking, WiFi &amp; Biometrics"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="/images/services/networking.jpg"
                  />
                </div>
                <div className="p-space-md space-y-1">
                  <h4 className="font-headline-sm text-[16px] leading-snug text-primary">
                    Networking, WiFi &amp; Biometrics
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Networking, WiFi and biometric device setup and support.
                  </p>
                </div>
              </div>
              <div className="p-space-md pt-0">
                <a
                  className="inline-flex items-center gap-1 text-primary hover:text-secondary font-label-md text-label-md transition-colors group/link"
                  href="https://wa.me/919003041200?text=Hello%20VASAN%20TECH,%20I%20enquire%20about%20Networking%20WiFi%20Biometrics"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Enquire Now</span>
                  <span className="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            {/* Service 5: CCTV */}
            <div className="reveal-on-scroll rounded-xl bg-surface-container-low border border-outline-variant/30 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-full">
                <div className="aspect-[4/3] overflow-hidden bg-surface-container">
                  <img
                    alt="CCTV Solutions"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="/images/services/cctv.jpg"
                  />
                </div>
                <div className="p-space-md space-y-1">
                  <h4 className="font-headline-sm text-[16px] leading-snug text-primary">CCTV</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    CCTV solutions and support for homes, shops and offices.
                  </p>
                </div>
              </div>
              <div className="p-space-md pt-0">
                <a
                  className="inline-flex items-center gap-1 text-primary hover:text-secondary font-label-md text-label-md transition-colors group/link"
                  href="https://wa.me/919003041200?text=Hello%20VASAN%20TECH,%20I%20enquire%20about%20CCTV%20Solutions"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Enquire Now</span>
                  <span className="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            {/* Service 6: Projectors */}
            <div className="reveal-on-scroll rounded-xl bg-surface-container-low border border-outline-variant/30 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-full">
                <div className="aspect-[4/3] overflow-hidden bg-surface-container">
                  <img
                    alt="Projector solutions and support"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="/images/services/projectors.jpg"
                  />
                </div>
                <div className="p-space-md space-y-1">
                  <h4 className="font-headline-sm text-[16px] leading-snug text-primary">
                    Projectors
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Projector solutions and support for offices, classrooms and other spaces.
                  </p>
                </div>
              </div>
              <div className="p-space-md pt-0">
                <a
                  className="inline-flex items-center gap-1 text-primary hover:text-secondary font-label-md text-label-md transition-colors group/link"
                  href="https://wa.me/919003041200?text=Hello%20VASAN%20TECH,%20I%20enquire%20about%20Projector%20Solutions"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Enquire Now</span>
                  <span className="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>

            {/* Service 7: Interactive Panels */}
            <div className="reveal-on-scroll rounded-xl bg-surface-container-low border border-outline-variant/30 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-full">
                <div className="aspect-[4/3] overflow-hidden bg-surface-container">
                  <img
                    alt="Interactive flat panel smart display"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="/images/services/interactive-panels.jpg"
                  />
                </div>
                <div className="p-space-md space-y-1">
                  <h4 className="font-headline-sm text-[16px] leading-snug text-primary">
                    Interactive Panels
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Interactive panel solutions for classrooms, offices and meeting spaces.
                  </p>
                </div>
              </div>
              <div className="p-space-md pt-0">
                <a
                  className="inline-flex items-center gap-1 text-primary hover:text-secondary font-label-md text-label-md transition-colors group/link"
                  href="https://wa.me/919003041200?text=Hello%20VASAN%20TECH,%20I%20enquire%20about%20Interactive%20Panels"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Enquire Now</span>
                  <span className="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
