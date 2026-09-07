export default function Brands() {
  return (
    <section
      className="w-full bg-surface-container-lowest py-space-3xl border-y border-outline-variant/30"
      id="brands"
    >
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop space-y-space-2xl">
        <div className="text-center space-y-space-xs max-w-2xl mx-auto reveal-on-scroll">
          <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
            Multi-Brand Expertise
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Brands We Support</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Sales, service, and support for major computing and printing brands.
          </p>
        </div>

        {/* Subsection A: Laptop & Computer Brands (10 Brands) */}
        <div className="space-y-space-md">
          <div className="flex items-center gap-2 border-b border-outline-variant/30 pb-2 reveal-on-scroll">
            <span className="material-symbols-outlined text-primary text-[22px]">
              laptop_chromebook
            </span>
            <h3 className="font-headline-sm text-headline-sm text-primary">
              Laptop &amp; Computer Brands
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-space-md">
            {/* Dell */}
            <div className="reveal-on-scroll p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 shadow-sm flex flex-col items-center justify-center gap-2 text-center hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-[#007DB8]/10 flex items-center justify-center text-[#007DB8] group-hover:bg-[#007DB8] group-hover:text-white transition-colors duration-300">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5H9.5v-9H11c1.38 0 2.5 1.12 2.5 2.5 0 .85-.43 1.59-1.07 2.05.9.46 1.57 1.39 1.57 2.45 0 1.38-1.12 2-2.5 2zm1-5c0-.83-.67-1.5-1.5-1.5H10v3h.5c.83 0 1.5-.67 1.5-1.5z"></path>
                </svg>
              </div>
              <span className="font-label-md text-label-md text-on-surface font-bold">Dell</span>
            </div>

            {/* HP */}
            <div className="reveal-on-scroll p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 shadow-sm flex flex-col items-center justify-center gap-2 text-center hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-[#0096D6]/10 flex items-center justify-center text-[#0096D6] group-hover:bg-[#0096D6] group-hover:text-white transition-colors duration-300">
                <span className="font-black text-lg tracking-tighter italic">hp</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface font-bold">HP</span>
            </div>

            {/* Lenovo */}
            <div className="reveal-on-scroll p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 shadow-sm flex flex-col items-center justify-center gap-2 text-center hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-[#E2231A]/10 flex items-center justify-center text-[#E2231A] group-hover:bg-[#E2231A] group-hover:text-white transition-colors duration-300">
                <span className="font-bold text-xs tracking-tight uppercase">LENOVO</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface font-bold">Lenovo</span>
            </div>

            {/* Acer */}
            <div className="reveal-on-scroll p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 shadow-sm flex flex-col items-center justify-center gap-2 text-center hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-[#83B81A]/10 flex items-center justify-center text-[#83B81A] group-hover:bg-[#83B81A] group-hover:text-white transition-colors duration-300">
                <span className="font-bold text-sm lowercase tracking-wider">acer</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface font-bold">Acer</span>
            </div>

            {/* ASUS */}
            <div className="reveal-on-scroll p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 shadow-sm flex flex-col items-center justify-center gap-2 text-center hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-[#00539B]/10 flex items-center justify-center text-[#00539B] group-hover:bg-[#00539B] group-hover:text-white transition-colors duration-300">
                <span className="font-black text-xs tracking-wider uppercase">ASUS</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface font-bold">ASUS</span>
            </div>

            {/* Apple */}
            <div className="reveal-on-scroll p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 shadow-sm flex flex-col items-center justify-center gap-2 text-center hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-800 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.67-1.08 1.74-.95 2.77 1.01.08 2.05-.52 2.68-1.27z"></path>
                </svg>
              </div>
              <span className="font-label-md text-label-md text-on-surface font-bold">
                Apple MacBook
              </span>
            </div>

            {/* MSI */}
            <div className="reveal-on-scroll p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 shadow-sm flex flex-col items-center justify-center gap-2 text-center hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-[#E60012]/10 flex items-center justify-center text-[#E60012] group-hover:bg-[#E60012] group-hover:text-white transition-colors duration-300">
                <span className="font-black text-xs tracking-wider uppercase">msi</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface font-bold">MSI</span>
            </div>

            {/* Samsung */}
            <div className="reveal-on-scroll p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 shadow-sm flex flex-col items-center justify-center gap-2 text-center hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-[#034EA2]/10 flex items-center justify-center text-[#034EA2] group-hover:bg-[#034EA2] group-hover:text-white transition-colors duration-300">
                <span className="font-bold text-[11px] uppercase tracking-tighter">Samsung</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface font-bold">Samsung</span>
            </div>

            {/* Microsoft Surface */}
            <div className="reveal-on-scroll p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 shadow-sm flex flex-col items-center justify-center gap-2 text-center hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center p-2.5 group-hover:bg-slate-300 transition-colors duration-300">
                <div className="grid grid-cols-2 gap-1 w-5 h-5">
                  <span className="bg-[#F25022]"></span>
                  <span className="bg-[#7FBA00]"></span>
                  <span className="bg-[#00A4EF]"></span>
                  <span className="bg-[#FFB900]"></span>
                </div>
              </div>
              <span className="font-label-md text-label-md text-on-surface font-bold">
                Microsoft Surface
              </span>
            </div>

            {/* Toshiba */}
            <div className="reveal-on-scroll p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 shadow-sm flex flex-col items-center justify-center gap-2 text-center hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-[#FF0000]/10 flex items-center justify-center text-[#FF0000] group-hover:bg-[#FF0000] group-hover:text-white transition-colors duration-300">
                <span className="font-extrabold text-[10px] tracking-tight uppercase">TOSHIBA</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface font-bold">Toshiba</span>
            </div>
          </div>
        </div>

        {/* Subsection B: Printer Brands (5 Brands) */}
        <div className="space-y-space-md pt-space-xs">
          <div className="flex items-center gap-2 border-b border-outline-variant/30 pb-2 reveal-on-scroll">
            <span className="material-symbols-outlined text-primary text-[22px]">print</span>
            <h3 className="font-headline-sm text-headline-sm text-primary">Printer Brands</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-space-md">
            {/* HP Printer */}
            <div className="reveal-on-scroll p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 shadow-sm flex flex-col items-center justify-center gap-2 text-center hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-[#0096D6]/10 flex items-center justify-center text-[#0096D6] group-hover:bg-[#0096D6] group-hover:text-white transition-colors duration-300">
                <span className="font-black text-lg italic">hp</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface font-bold">HP</span>
            </div>

            {/* Canon */}
            <div className="reveal-on-scroll p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 shadow-sm flex flex-col items-center justify-center gap-2 text-center hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-[#CC0000]/10 flex items-center justify-center text-[#CC0000] group-hover:bg-[#CC0000] group-hover:text-white transition-colors duration-300">
                <span className="font-bold text-xs uppercase tracking-tight">Canon</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface font-bold">Canon</span>
            </div>

            {/* Epson */}
            <div className="reveal-on-scroll p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 shadow-sm flex flex-col items-center justify-center gap-2 text-center hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-[#003399]/10 flex items-center justify-center text-[#003399] group-hover:bg-[#003399] group-hover:text-white transition-colors duration-300">
                <span className="font-extrabold text-xs uppercase tracking-wider">EPSON</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface font-bold">Epson</span>
            </div>

            {/* Brother */}
            <div className="reveal-on-scroll p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 shadow-sm flex flex-col items-center justify-center gap-2 text-center hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-[#002244]/10 flex items-center justify-center text-[#002244] group-hover:bg-[#002244] group-hover:text-white transition-colors duration-300">
                <span className="font-bold text-xs uppercase tracking-tight">brother</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface font-bold">Brother</span>
            </div>

            {/* TVSE */}
            <div className="reveal-on-scroll p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 shadow-sm flex flex-col items-center justify-center gap-2 text-center hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-full bg-[#0B3C74]/10 flex items-center justify-center text-[#0B3C74] group-hover:bg-[#0B3C74] group-hover:text-white transition-colors duration-300">
                <span className="font-black text-xs uppercase tracking-wider">TVS-E</span>
              </div>
              <span className="font-label-md text-label-md text-on-surface font-bold">TVSE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
