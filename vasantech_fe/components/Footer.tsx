export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low text-on-surface pt-space-2xl pb-space-xl border-t border-outline-variant/30">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl mb-space-2xl">
          <div className="space-y-space-sm">
            <img
              alt="VASAN TECH Logo"
              className="h-10 w-auto object-contain"
              src="/images/logo.svg"
            />
            <p className="font-label-md text-label-md text-primary font-semibold italic">
              &quot;Trusted Service Always With You&quot;
            </p>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Computer, laptop, and printer sales and service in Kumbakonam, Tamil Nadu.
            </p>
          </div>

          <div className="space-y-space-sm">
            <h4 className="font-headline-sm text-headline-sm text-on-surface">Quick Links</h4>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li>
                <a className="hover:text-primary transition-colors" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#about">
                  About VASAN TECH
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#sales-products">
                  Sales &amp; Products
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#brands">
                  Brands We Support
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#doorstep-service">
                  Doorstep Service
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#why-choose-us">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-space-sm">
            <h4 className="font-headline-sm text-headline-sm text-on-surface">Services &amp; Sales</h4>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <li>Laptop Repair &amp; Service</li>
              <li>Desktop Repair &amp; Service</li>
              <li>Printer Repair &amp; Service</li>
              <li>New &amp; Refurbished Laptops &amp; Desktops</li>
              <li>Networking, WiFi &amp; Biometric Devices</li>
              <li>CCTV, Projectors &amp; Interactive Panels</li>
            </ul>
          </div>

          <div className="space-y-space-sm">
            <h4 className="font-headline-sm text-headline-sm text-on-surface">Location &amp; Contact</h4>
            <div className="space-y-space-xs font-body-sm text-body-sm text-on-surface-variant">
              <p className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary mt-0.5">
                  location_on
                </span>
                <span>No. 1378, Manargudi Main Road, Sakkottai, Kumbakonam – 612 401, Tamil Nadu</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">phone</span>
                <a className="hover:text-primary hover:underline" href="tel:+919003041200">
                  +91 90030 41200
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">chat</span>
                <a
                  className="hover:text-primary hover:underline"
                  href="https://wa.me/919003041200"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  +91 90030 41200
                </a>
              </p>
              <p className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary">
                  electric_moped
                </span>
                <span>Doorstep Service Available</span>
              </p>
            </div>
          </div>
        </div>

        <div className="pt-space-lg border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-space-sm text-center font-body-sm text-body-sm text-on-surface-variant">
          <p>© VASAN TECH. All Rights Reserved.</p>
          <p className="font-label-sm text-label-sm text-outline">
            No. 1378, Manargudi Main Road, Sakkottai, Kumbakonam - 612 401
          </p>
        </div>
      </div>
    </footer>
  );
}
