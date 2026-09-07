export default function Products() {
  return (
    <section
      className="w-full bg-surface-container-low py-space-3xl border-t border-outline-variant/30"
      id="sales-products"
    >
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop space-y-space-3xl">
        {/* Section Header */}
        <div className="max-w-3xl space-y-space-xs reveal-on-scroll">
          <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
            Hardware Showcase
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Sales &amp; Products</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Explore laptops, desktops and printers for home, office, study and gaming.
          </p>
          <p className="font-label-sm text-label-sm text-outline italic">
            Note: All product visuals are representative category showcases. Contact us directly to check real-time stock and configurations.
          </p>
        </div>

        {/* SUB-SECTION A: LAPTOPS (Exactly 4 Cards in 2x2 Grid) */}
        <div className="space-y-space-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/30 pb-3 reveal-on-scroll">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-primary text-[26px]">laptop_mac</span>
              <h3 className="font-headline-md text-headline-md text-primary">Laptops</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold w-fit">
              New &amp; Refurbished Available
            </span>
          </div>

          {/* 4 Category Cards (Clean 2x2 Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
            {/* 1. Gaming Laptops */}
            <div className="reveal-on-scroll rounded-xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col sm:flex-row hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden bg-surface-container shrink-0">
                <img
                  alt="Modern high-performance gaming laptop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/products/laptops/gaming.jpg"
                />
              </div>
              <div className="sm:w-3/5 p-space-md sm:p-space-lg flex flex-col justify-between space-y-space-sm">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">
                    High Performance
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-primary">Gaming Laptops</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Performance laptops for gaming and high-performance requirements.
                  </p>
                </div>
                <a
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm w-fit"
                  href="https://wa.me/919003041200?text=Hello%20VASAN%20TECH,%20I%20am%20interested%20in%20Gaming%20Laptops.%20Please%20share%20the%20available%20options."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* 2. Business Laptops */}
            <div className="reveal-on-scroll rounded-xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col sm:flex-row hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden bg-surface-container shrink-0">
                <img
                  alt="Sleek modern business laptop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/products/laptops/business.jpg"
                />
              </div>
              <div className="sm:w-3/5 p-space-md sm:p-space-lg flex flex-col justify-between space-y-space-sm">
                <div>
                  <span className="font-label-sm text-label-sm text-primary font-bold uppercase">
                    Enterprise &amp; Office
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-primary">Business Laptops</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Reliable laptops for office, business and professional requirements.
                  </p>
                </div>
                <a
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm w-fit"
                  href="https://wa.me/919003041200?text=Hello%20VASAN%20TECH,%20I%20am%20interested%20in%20Business%20Laptops.%20Please%20share%20the%20available%20options."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* 3. Student & Everyday Laptops */}
            <div className="reveal-on-scroll rounded-xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col sm:flex-row hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden bg-surface-container shrink-0">
                <img
                  alt="Modern student and everyday laptop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/products/laptops/student.jpg"
                />
              </div>
              <div className="sm:w-3/5 p-space-md sm:p-space-lg flex flex-col justify-between space-y-space-sm">
                <div>
                  <span className="font-label-sm text-label-sm text-tertiary-container font-bold uppercase">
                    Home &amp; Education
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    Student &amp; Everyday Laptops
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Laptops suitable for study, home and everyday computing.
                  </p>
                </div>
                <a
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm w-fit"
                  href="https://wa.me/919003041200?text=Hello%20VASAN%20TECH,%20I%20am%20interested%20in%20Student%20and%20Everyday%20Laptops.%20Please%20share%20the%20available%20options."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* 4. Thin & Lightweight Laptops */}
            <div className="reveal-on-scroll rounded-xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col sm:flex-row hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden bg-surface-container shrink-0">
                <img
                  alt="Sleek modern ultra-thin lightweight laptop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/products/laptops/thin-light.jpg"
                />
              </div>
              <div className="sm:w-3/5 p-space-md sm:p-space-lg flex flex-col justify-between space-y-space-sm">
                <div>
                  <span className="font-label-sm text-label-sm text-primary font-bold uppercase">
                    Portability &amp; Travel
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    Thin &amp; Lightweight Laptops
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Portable laptops designed for everyday productivity and mobility.
                  </p>
                </div>
                <a
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm w-fit"
                  href="https://wa.me/919003041200?text=Hello%20VASAN%20TECH,%20I%20am%20interested%20in%20Thin%20and%20Lightweight%20Laptops.%20Please%20share%20the%20available%20options."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Supported Brands Tagline */}
          <div className="p-space-sm rounded-lg bg-surface-container-lowest border border-outline-variant/30 flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm reveal-on-scroll">
            <span className="font-semibold text-primary shrink-0">Supported Brands:</span>
            <span>
              Dell, HP, Lenovo, Acer, ASUS, Apple MacBook, MSI, Samsung, Microsoft Surface, Toshiba and other brands.
            </span>
          </div>
        </div>

        {/* SUB-SECTION B: DESKTOP & ASSEMBLED PCS (Exactly 4 Cards in 2x2 Grid) */}
        <div className="space-y-space-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/30 pb-3 reveal-on-scroll">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-primary text-[26px]">computer</span>
              <h3 className="font-headline-md text-headline-md text-primary">
                Desktop &amp; Assembled PCs
              </h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold w-fit">
              New &amp; Refurbished Systems
            </span>
          </div>

          {/* 4 Category Cards (Clean 2x2 Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
            {/* 1. Gaming PCs */}
            <div className="reveal-on-scroll rounded-xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col sm:flex-row hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden bg-surface-container shrink-0">
                <img
                  alt="Modern high-performance gaming desktop PC tower"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/products/pcs/gaming.jpg"
                />
              </div>
              <div className="sm:w-3/5 p-space-md sm:p-space-lg flex flex-col justify-between space-y-space-sm">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">
                    High Performance
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-primary">Gaming PCs</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Custom assembled systems for gaming and performance requirements.
                  </p>
                </div>
                <a
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm w-fit"
                  href="https://wa.me/919003041200?text=Hello%20VASAN%20TECH,%20I%20am%20interested%20in%20Gaming%20PCs.%20Please%20share%20the%20available%20options."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* 2. Office & Business PCs */}
            <div className="reveal-on-scroll rounded-xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col sm:flex-row hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden bg-surface-container shrink-0">
                <img
                  alt="Modern office desktop computer setup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/products/pcs/office.jpg"
                />
              </div>
              <div className="sm:w-3/5 p-space-md sm:p-space-lg flex flex-col justify-between space-y-space-sm">
                <div>
                  <span className="font-label-sm text-label-sm text-primary font-bold uppercase">
                    Commercial Reliability
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    Office &amp; Business PCs
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Desktop systems for office, business and professional requirements.
                  </p>
                </div>
                <a
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm w-fit"
                  href="https://wa.me/919003041200?text=Hello%20VASAN%20TECH,%20I%20am%20interested%20in%20Office%20and%20Business%20PCs.%20Please%20share%20the%20available%20options."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* 3. Home & Student PCs */}
            <div className="reveal-on-scroll rounded-xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col sm:flex-row hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden bg-surface-container shrink-0">
                <img
                  alt="Practical desktop systems for home and study"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/products/pcs/home.jpg"
                />
              </div>
              <div className="sm:w-3/5 p-space-md sm:p-space-lg flex flex-col justify-between space-y-space-sm">
                <div>
                  <span className="font-label-sm text-label-sm text-tertiary-container font-bold uppercase">
                    Daily Computing
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    Home &amp; Student PCs
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Practical desktop systems for home, study and everyday computing.
                  </p>
                </div>
                <a
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm w-fit"
                  href="https://wa.me/919003041200?text=Hello%20VASAN%20TECH,%20I%20am%20interested%20in%20Home%20and%20Student%20PCs.%20Please%20share%20the%20available%20options."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* 4. Custom Assembled PCs */}
            <div className="reveal-on-scroll rounded-xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col sm:flex-row hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto overflow-hidden bg-surface-container shrink-0">
                <img
                  alt="PC systems assembled according to individual requirements"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="/images/products/pcs/custom.jpg"
                />
              </div>
              <div className="sm:w-3/5 p-space-md sm:p-space-lg flex flex-col justify-between space-y-space-sm">
                <div>
                  <span className="font-label-sm text-label-sm text-secondary font-bold uppercase">
                    Tailored Specifications
                  </span>
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    Custom Assembled PCs
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    PC systems assembled according to individual requirements.
                  </p>
                </div>
                <a
                  className="inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm w-fit"
                  href="https://wa.me/919003041200?text=Hello%20VASAN%20TECH,%20I%20am%20interested%20in%20Custom%20Assembled%20PCs.%20Please%20share%20the%20available%20options."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* SUB-SECTION C: PRINTERS (Exactly 6 Distinct Visual Cards in 3x2 Grid) */}
        <div className="space-y-space-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/30 pb-3 reveal-on-scroll">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-primary text-[26px]">print</span>
              <h3 className="font-headline-md text-headline-md text-primary">Printers</h3>
            </div>
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-bold w-fit">
              Wi-Fi Models Available
            </span>
          </div>

          {/* 6 Distinct Category Cards with DIFFERENT images (3x2 Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-space-lg">
            {/* 1. Ink Tank Printers */}
            <div className="reveal-on-scroll rounded-xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-surface-container">
                  <img
                    alt="Modern compact ink tank multifunction color printer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="/images/products/printers/ink-tank.jpg"
                  />
                </div>
                <div className="p-space-md space-y-1.5">
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    Ink Tank Printers
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Ink tank printers for home, study and everyday printing needs.
                  </p>
                </div>
              </div>
              <div className="p-space-md pt-0">
                <a
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm"
                  href="https://wa.me/919003041200?text=Hello%20VASAN%20TECH,%20I%20am%20interested%20in%20Ink%20Tank%20Printers.%20Please%20share%20the%20available%20options."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* 2. Laser Printers */}
            <div className="reveal-on-scroll rounded-xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-surface-container">
                  <img
                    alt="Modern compact laser printer on clean desk"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="/images/products/printers/laser.jpg"
                  />
                </div>
                <div className="p-space-md space-y-1.5">
                  <h4 className="font-headline-sm text-headline-sm text-primary">Laser Printers</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Laser printers for everyday document and office printing.
                  </p>
                </div>
              </div>
              <div className="p-space-md pt-0">
                <a
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm"
                  href="https://wa.me/919003041200?text=Hello%20VASAN%20TECH,%20I%20am%20interested%20in%20Laser%20Printers.%20Please%20share%20the%20available%20options."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* 3. All-in-One Printers */}
            <div className="reveal-on-scroll rounded-xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-surface-container">
                  <img
                    alt="Modern all-in-one printer with scanner flatbed open"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="/images/products/printers/all-in-one.jpg"
                  />
                </div>
                <div className="p-space-md space-y-1.5">
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    All-in-One Printers
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Printers combining printing, scanning and copying in one device.
                  </p>
                </div>
              </div>
              <div className="p-space-md pt-0">
                <a
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm"
                  href="https://wa.me/919003041200?text=Hello%20VASAN%20TECH,%20I%20am%20interested%20in%20All-in-One%20Printers.%20Please%20share%20the%20available%20options."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* 4. Color Printers */}
            <div className="reveal-on-scroll rounded-xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-surface-container">
                  <img
                    alt="Modern vibrant color inkjet printer test output"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="/images/products/printers/color.jpg"
                  />
                </div>
                <div className="p-space-md space-y-1.5">
                  <h4 className="font-headline-sm text-headline-sm text-primary">Color Printers</h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Printers suitable for color documents, reports and everyday printing.
                  </p>
                </div>
              </div>
              <div className="p-space-md pt-0">
                <a
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm"
                  href="https://wa.me/919003041200?text=Hello%20VASAN%20TECH,%20I%20am%20interested%20in%20Color%20Printers.%20Please%20share%20the%20available%20options."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* 5. Monochrome Printers */}
            <div className="reveal-on-scroll rounded-xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-surface-container">
                  <img
                    alt="Sleek modern black and white monochrome laser printer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="/images/products/printers/monochrome.jpg"
                  />
                </div>
                <div className="p-space-md space-y-1.5">
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    Monochrome Printers
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Printers designed for black-and-white document printing.
                  </p>
                </div>
              </div>
              <div className="p-space-md pt-0">
                <a
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm"
                  href="https://wa.me/919003041200?text=Hello%20VASAN%20TECH,%20I%20am%20interested%20in%20Monochrome%20Printers.%20Please%20share%20the%20available%20options."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* 6. Multifunction Printers */}
            <div className="reveal-on-scroll rounded-xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-surface-container">
                  <img
                    alt="Heavy-duty office multifunction laser printer and copier"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src="/images/products/printers/multifunction.jpg"
                  />
                </div>
                <div className="p-space-md space-y-1.5">
                  <h4 className="font-headline-sm text-headline-sm text-primary">
                    Multifunction Printers
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Printers combining multiple document functions for office use.
                  </p>
                </div>
              </div>
              <div className="p-space-md pt-0">
                <a
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm"
                  href="https://wa.me/919003041200?text=Hello%20VASAN%20TECH,%20I%20am%20interested%20in%20Multifunction%20Printers.%20Please%20share%20the%20available%20options."
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Brands Tag */}
          <div className="p-space-sm rounded-lg bg-surface-container-lowest border border-outline-variant/30 flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm reveal-on-scroll">
            <span className="font-semibold text-primary shrink-0">Printer Brands:</span>
            <span>HP, Canon, Epson, Brother, TVSE.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
