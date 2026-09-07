export default function About() {
  return (
    <section className="w-full bg-surface-container-low py-space-3xl" id="about">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          {/* Left Column: Concise Text & List */}
          <div className="lg:col-span-7 space-y-space-md reveal-on-scroll">
            <div className="space-y-space-xs">
              <span className="font-label-sm text-label-sm tracking-widest uppercase text-secondary font-bold">
                Local IT Support
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">About VASAN TECH</h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              VASAN TECH provides computer, laptop, and printer sales and service in Kumbakonam, Tamil Nadu. We support customers with computer repairs, laptop servicing, printer service, new and refurbished systems, and related IT equipment.
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Our services cover laptops, desktop computers, printers, networking, CCTV, projectors, and interactive panels. Customers can contact us directly by phone or WhatsApp for service, sales enquiries, and doorstep service availability.
            </p>

            {/* What We Offer List */}
            <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm space-y-space-sm hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-2.5 text-primary">
                <span className="material-symbols-outlined text-[24px] text-secondary">handshake</span>
                <h3 className="font-headline-sm text-headline-sm">What We Offer</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 font-body-sm text-body-sm text-on-surface-variant pt-1">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-tertiary-container text-[18px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span>Computer, laptop and printer sales and service</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-tertiary-container text-[18px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span>New and refurbished laptops and desktops</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-tertiary-container text-[18px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span>Printer sales and service</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-tertiary-container text-[18px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span>Networking, WiFi and biometric solutions</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-tertiary-container text-[18px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span>CCTV, projectors and interactive panels</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-tertiary-container text-[18px] mt-0.5 shrink-0">
                    check_circle
                  </span>
                  <span>Direct phone and WhatsApp support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Card */}
          <div className="lg:col-span-5 reveal-on-scroll">
            <div className="relative rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant/30 shadow-lg group">
              <img
                alt="Desktop repair and workstation assembly"
                className="w-full h-[380px] object-cover transition-transform duration-500 group-hover:scale-105"
                src="/images/services/desktop-repair.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-space-lg text-white">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary text-white text-label-sm font-semibold w-max mb-2 shadow-sm">
                  <span className="material-symbols-outlined text-[15px]">build</span>
                  Computer Hardware &amp; Software Support
                </span>
                <h4 className="font-headline-sm text-headline-sm text-white">
                  Computer &amp; Laptop Servicing
                </h4>
                <p className="font-body-sm text-body-sm text-gray-200 mt-1">
                  Computer, laptop, and desktop servicing and support in Kumbakonam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
