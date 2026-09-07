export default function WhyChooseUs() {
  return (
    <section className="w-full bg-surface-container-low py-space-3xl" id="why-choose-us">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop space-y-space-2xl">
        <div className="text-center space-y-space-xs max-w-2xl mx-auto reveal-on-scroll">
          <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
            Local Service
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Why Choose VASAN TECH</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Practical advice, direct communication, and responsive local computer support in Kumbakonam.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {/* Card 1 */}
          <div className="reveal-on-scroll p-space-lg rounded-xl bg-surface-container-lowest border border-outline-variant/30 space-y-space-xs shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-surface-container text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
              <span className="material-symbols-outlined text-[28px]">chat</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary">Clear Communication</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Discuss your device issue or requirement directly with our team.
            </p>
          </div>

          {/* Card 2 */}
          <div className="reveal-on-scroll p-space-lg rounded-xl bg-surface-container-lowest border border-outline-variant/30 space-y-space-xs shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-surface-container text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-[28px]">laptop_mac</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary">
              Computer &amp; Laptop Support
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Support for laptops, desktops, operating systems, and related hardware.
            </p>
          </div>

          {/* Card 3 */}
          <div className="reveal-on-scroll p-space-lg rounded-xl bg-surface-container-lowest border border-outline-variant/30 space-y-space-xs shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-surface-container text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
              <span className="material-symbols-outlined text-[28px]">print</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary">Printer Support</h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Printer sales and service support for different brands and types.
            </p>
          </div>

          {/* Card 4 */}
          <div className="reveal-on-scroll p-space-lg rounded-xl bg-surface-container-lowest border border-outline-variant/30 space-y-space-xs shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-surface-container text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
              <span className="material-symbols-outlined text-[28px]">devices_other</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary">
              New &amp; Refurbished Systems
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Options for new and refurbished laptops and desktop systems.
            </p>
          </div>

          {/* Card 5 */}
          <div className="reveal-on-scroll p-space-lg rounded-xl bg-surface-container-lowest border border-outline-variant/30 space-y-space-xs shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-surface-container text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
              <span className="material-symbols-outlined text-[28px]">support_agent</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary">
              Phone &amp; WhatsApp Support
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Contact us directly by phone or WhatsApp for enquiries and service requests.
            </p>
          </div>

          {/* Card 6 */}
          <div className="reveal-on-scroll p-space-lg rounded-xl bg-surface-container-lowest border border-outline-variant/30 space-y-space-xs shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-surface-container text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
              <span className="material-symbols-outlined text-[28px]">location_city</span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary">
              Local Support in Kumbakonam
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Serving customers in Kumbakonam and nearby areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
