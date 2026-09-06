export default function Products() {
  return (
    <section className="w-full bg-surface-container-low py-space-3xl" id="sales-products">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop space-y-space-xl">
        <div className="max-w-2xl space-y-space-xs">
          <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
            Hardware Sales
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Sales &amp; Products</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            We supply new and refurbished systems, printers, and computing accessories.
          </p>
        </div>

        {/* 3 Dedicated Clean Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {/* Card 1: New & Refurbished Laptops */}
          <div className="rounded-xl bg-surface-container-lowest border border-outline-variant/30 p-space-lg shadow-sm flex flex-col justify-between">
            <div className="space-y-space-sm">
              <div className="w-12 h-12 rounded-lg bg-surface-container text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">laptop</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">New &amp; Refurbished Laptops</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                New and refurbished laptops for different personal, student, and office requirements.
              </p>
              <div className="pt-2 border-t border-outline-variant/30">
                <span className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5">
                  Brands:
                </span>
                <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
                  Dell, HP, Lenovo, Acer, ASUS, Apple MacBook, MSI, Samsung, Microsoft Surface, Toshiba and other brands.
                </p>
              </div>
            </div>
            <div className="pt-space-lg mt-space-sm">
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

          {/* Card 2: Desktop & Assembled Systems */}
          <div className="rounded-xl bg-surface-container-lowest border border-outline-variant/30 p-space-lg shadow-sm flex flex-col justify-between">
            <div className="space-y-space-sm">
              <div className="w-12 h-12 rounded-lg bg-surface-container text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">desktop_mac</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">Desktop &amp; Assembled Systems</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Desktop computers and assembled systems configured according to customer requirements and budget.
              </p>
              <div className="pt-2 border-t border-outline-variant/30">
                <span className="block font-label-md text-label-md text-on-surface font-semibold mb-1.5">
                  Options:
                </span>
                <ul className="space-y-1 font-body-sm text-body-sm text-on-surface">
                  <li className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary text-[14px]">check</span>
                    <span>Custom assembled desktop PCs</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary text-[14px]">check</span>
                    <span>Office desktop systems</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary text-[14px]">check</span>
                    <span>Home and student desktop systems</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-secondary text-[14px]">check</span>
                    <span>Refurbished desktop systems</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-space-lg mt-space-sm">
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

          {/* Card 3: Printers */}
          <div className="rounded-xl bg-surface-container-lowest border border-outline-variant/30 p-space-lg shadow-sm flex flex-col justify-between">
            <div className="space-y-space-sm">
              <div className="w-12 h-12 rounded-lg bg-surface-container text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[28px]">print</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary">Printers</h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Printers and multifunction models for home, shop, office, and business requirements.
              </p>
              <div className="pt-2 border-t border-outline-variant/30 space-y-2">
                <div>
                  <span className="block font-label-md text-label-md text-on-surface font-semibold">
                    Brands:
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface">HP, Canon, Epson, Brother, TVSE.</p>
                </div>
                <div>
                  <span className="block font-label-md text-label-md text-on-surface font-semibold">
                    Printer Types:
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface leading-snug">
                    Ink Tank, Laser, All-in-One, Color, Monochrome, WiFi and Multifunction printers.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-space-lg mt-space-sm">
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
      </div>
    </section>
  );
}
