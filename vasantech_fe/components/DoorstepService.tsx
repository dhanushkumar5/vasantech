export default function DoorstepService() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl" id="doorstep-service">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div
          className="rounded-2xl bg-primary text-on-primary p-space-lg lg:p-space-2xl shadow-xl relative overflow-hidden reveal-on-scroll"
          id="doorstep-container"
        >
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

          {/* 4-Step Process Sequence with Animated Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl relative">
            {/* Step 1 */}
            <div className="step-card bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl space-y-2 border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="step-badge w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-headline-sm text-headline-sm font-bold shadow-sm transition-transform duration-300">
                01
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-primary">Contact Us</h3>
              <p className="font-body-sm text-body-sm text-on-primary-container">
                Call or WhatsApp us directly regarding your computer, laptop, or printer issue.
              </p>
            </div>

            {/* Step 2 */}
            <div className="step-card bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl space-y-2 border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="step-badge w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-headline-sm text-headline-sm font-bold shadow-sm transition-transform duration-300">
                02
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-primary">
                Share Requirement
              </h3>
              <p className="font-body-sm text-body-sm text-on-primary-container">
                Provide model details and describe the specific problem or upgrade requirement.
              </p>
            </div>

            {/* Step 3 */}
            <div className="step-card bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl space-y-2 border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="step-badge w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-headline-sm text-headline-sm font-bold shadow-sm transition-transform duration-300">
                03
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-primary">
                Availability &amp; Assist
              </h3>
              <p className="font-body-sm text-body-sm text-on-primary-container">
                We confirm doorstep availability and suitable appointment timing for your area.
              </p>
            </div>

            {/* Step 4 */}
            <div className="step-card bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl space-y-2 border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="step-badge w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-headline-sm text-headline-sm font-bold shadow-sm transition-transform duration-300">
                04
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-primary">
                Service / Support
              </h3>
              <p className="font-body-sm text-body-sm text-on-primary-container">
                On-site troubleshooting or safe pickup service is arranged for thorough repair.
              </p>
            </div>
          </div>

          <div className="bg-surface-container-lowest/10 rounded-xl p-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[24px] text-tertiary-fixed">
                location_on
              </span>
              <span className="font-label-md text-label-md text-on-primary">
                Doorstep service available across Kumbakonam and surrounding areas.
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-space-xs">
              <a
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary-container hover:-translate-y-0.5 transition-all shadow-sm active:translate-y-0"
                href="https://wa.me/919003041200"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Request on WhatsApp</span>
              </a>
              <a
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-surface-container-high hover:-translate-y-0.5 transition-all active:translate-y-0"
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
