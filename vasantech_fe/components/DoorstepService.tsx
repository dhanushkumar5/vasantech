export default function DoorstepService() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl" id="doorstep-service">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="rounded-2xl bg-primary text-on-primary p-space-lg lg:p-space-2xl shadow-xl">
          <div className="max-w-3xl space-y-space-xs mb-space-xl">
            <span className="px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold uppercase tracking-wider">
              Convenient On-Site Care
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-primary">
              Doorstep Service in Kumbakonam
            </h2>
            <p className="font-body-md text-body-md text-on-primary-container">
              Doorstep service and pickup support are available for selected computer, laptop, and printer requirements in Kumbakonam and nearby areas. Contact us to check service availability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-xl">
            <div className="bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl space-y-2 border border-white/10">
              <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                1
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-primary">Contact Us</h3>
              <p className="font-body-sm text-body-sm text-on-primary-container">
                Call or WhatsApp us with your device issue or requirement.
              </p>
            </div>
            <div className="bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl space-y-2 border border-white/10">
              <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                2
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-primary">Check Availability</h3>
              <p className="font-body-sm text-body-sm text-on-primary-container">
                We will confirm doorstep service availability for your location and requirement.
              </p>
            </div>
            <div className="bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl space-y-2 border border-white/10">
              <div className="w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                3
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-primary">Service / Pickup</h3>
              <p className="font-body-sm text-body-sm text-on-primary-container">
                Based on the requirement, doorstep support or pickup service can be arranged.
              </p>
            </div>
          </div>

          <div className="bg-surface-container-lowest/10 rounded-xl p-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[24px] text-tertiary-fixed">location_on</span>
              <span className="font-label-md text-label-md text-on-primary">
                Doorstep service available across Kumbakonam and surrounding areas.
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-space-xs">
              <a
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary-container transition-colors shadow-sm"
                href="https://wa.me/919003041200"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Request on WhatsApp</span>
              </a>
              <a
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-surface-container-high transition-colors"
                href="tel:+919003041200"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>Call +91 90030 41200</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
