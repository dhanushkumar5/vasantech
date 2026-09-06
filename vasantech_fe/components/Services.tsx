export default function Services() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl" id="services">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop space-y-space-2xl">
        <div className="max-w-2xl space-y-space-xs">
          <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
            Service &amp; Repair
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Our Services</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Troubleshooting, servicing, and support for computers, laptops, and printers.
          </p>
        </div>

        {/* 3 Primary Core Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* Core 1: Laptop Repair & Service */}
          <div className="rounded-xl bg-surface-container-low border border-outline-variant/30 p-space-lg flex flex-col justify-between shadow-sm">
            <div className="space-y-space-md">
              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[28px]">laptop_mac</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-headline-sm text-headline-sm text-primary">Laptop Repair &amp; Service</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Laptop repair and servicing for various brands and models.
                </p>
              </div>
              <ul className="space-y-2 pt-2 text-on-surface font-body-sm text-body-sm">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                  <span>Laptop troubleshooting</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                  <span>Hardware and software service</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                  <span>OS installation and setup</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                  <span>General laptop maintenance</span>
                </li>
              </ul>
            </div>
            <div className="pt-space-lg mt-space-md">
              <a
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm"
                href="https://wa.me/919003041200"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Core 2: Desktop Repair & Service */}
          <div className="rounded-xl bg-surface-container-low border border-outline-variant/30 p-space-lg flex flex-col justify-between shadow-sm">
            <div className="space-y-space-md">
              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[28px]">desktop_windows</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-headline-sm text-headline-sm text-primary">Desktop Repair &amp; Service</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Desktop computer troubleshooting, servicing, upgrades, and assembled PC support.
                </p>
              </div>
              <ul className="space-y-2 pt-2 text-on-surface font-body-sm text-body-sm">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                  <span>Desktop troubleshooting</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                  <span>Hardware upgrades</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                  <span>Custom assembled PCs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                  <span>OS installation and setup</span>
                </li>
              </ul>
            </div>
            <div className="pt-space-lg mt-space-md">
              <a
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm"
                href="https://wa.me/919003041200"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Core 3: Printer Repair & Service */}
          <div className="rounded-xl bg-surface-container-low border border-outline-variant/30 p-space-lg flex flex-col justify-between shadow-sm">
            <div className="space-y-space-md">
              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-[28px]">print</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-headline-sm text-headline-sm text-primary">Printer Repair &amp; Service</h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Printer servicing and support for different printer types and brands.
                </p>
              </div>
              <ul className="space-y-2 pt-2 text-on-surface font-body-sm text-body-sm">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                  <span>Printer troubleshooting</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                  <span>Printer servicing</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                  <span>Printer setup and connectivity</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                  <span>General printer maintenance</span>
                </li>
              </ul>
            </div>
            <div className="pt-space-lg mt-space-md">
              <a
                className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm"
                href="https://wa.me/919003041200"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Additional Confirmed Services Grid */}
        <div className="p-space-lg rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-space-md">
          <div>
            <h3 className="font-headline-sm text-headline-sm text-primary">Additional IT &amp; Office Solutions</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Setup, installation, and support for offices, retail shops, and classrooms in Kumbakonam.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            <div className="p-space-md rounded-lg bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex items-start gap-3">
              <div className="p-2 rounded bg-surface-container text-primary">
                <span className="material-symbols-outlined text-[24px]">lan</span>
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface">Networking, WiFi &amp; Biometrics</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Networking, WiFi and biometric device setup and support.
                </p>
              </div>
            </div>
            <div className="p-space-md rounded-lg bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex items-start gap-3">
              <div className="p-2 rounded bg-surface-container text-primary">
                <span className="material-symbols-outlined text-[24px]">videocam</span>
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface">CCTV</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  CCTV solutions and support for homes, shops and offices.
                </p>
              </div>
            </div>
            <div className="p-space-md rounded-lg bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex items-start gap-3">
              <div className="p-2 rounded bg-surface-container text-primary">
                <span className="material-symbols-outlined text-[24px]">videocam_off</span>
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface">Projectors</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Projector solutions and support for offices, classrooms and other spaces.
                </p>
              </div>
            </div>
            <div className="p-space-md rounded-lg bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex items-start gap-3">
              <div className="p-2 rounded bg-surface-container text-primary">
                <span className="material-symbols-outlined text-[24px]">co_present</span>
              </div>
              <div>
                <h4 className="font-label-md text-label-md text-on-surface">Interactive Panels</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Interactive panel solutions for classrooms, offices and meeting spaces.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
