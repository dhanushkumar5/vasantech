export default function About() {
  return (
    <section className="w-full bg-surface-container-low py-space-3xl" id="about">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-7 space-y-space-md">
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
          </div>

          <div className="lg:col-span-5 space-y-space-md">
            <div className="p-space-lg rounded-xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm space-y-space-sm">
              <div className="flex items-center gap-3 text-primary">
                <span className="material-symbols-outlined text-[28px] text-secondary">handshake</span>
                <h3 className="font-headline-sm text-headline-sm">What We Offer</h3>
              </div>
              <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-tertiary-container text-[18px] mt-0.5">check</span>
                  <span>Computer, laptop and printer sales and service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-tertiary-container text-[18px] mt-0.5">check</span>
                  <span>New and refurbished laptops and desktops</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-tertiary-container text-[18px] mt-0.5">check</span>
                  <span>Printer sales and service</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-tertiary-container text-[18px] mt-0.5">check</span>
                  <span>Networking, WiFi and biometric solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-tertiary-container text-[18px] mt-0.5">check</span>
                  <span>CCTV, projectors and interactive panels</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-tertiary-container text-[18px] mt-0.5">check</span>
                  <span>Direct phone and WhatsApp support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
