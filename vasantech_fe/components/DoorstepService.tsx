import { BUSINESS_INFO } from "@/data/business";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export default function DoorstepService() {
  const steps = [
    {
      num: "01",
      title: "Contact Us",
      desc: "Call or WhatsApp us directly regarding your computer, laptop, or printer issue.",
    },
    {
      num: "02",
      title: "Share Requirement",
      desc: "Provide model details and describe the specific problem or upgrade requirement.",
    },
    {
      num: "03",
      title: "Availability & Assist",
      desc: "We confirm doorstep availability and suitable appointment timing for your area.",
    },
    {
      num: "04",
      title: "Service / Support",
      desc: "On-site troubleshooting or safe pickup service is arranged for thorough repair.",
    },
  ];

  return (
    <section className="w-full bg-surface-container-lowest py-space-xl" id="doorstep-service">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div
          className="rounded-2xl bg-primary text-on-primary p-space-lg lg:p-space-2xl shadow-xl relative overflow-hidden reveal-on-scroll is-visible"
          id="doorstep-container"
        >
          {/* Header */}
          <div className="max-w-3xl space-y-space-xs mb-space-xl">
            <span className="px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm font-semibold uppercase tracking-wider inline-block">
              Convenient On-Site Care
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-primary">
              Doorstep Service in Kumbakonam
            </h2>
            <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
              {BUSINESS_INFO.doorstepWording}
            </p>
          </div>

          {/* 4-Step Process Sequence */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md mb-space-xl relative">
            {steps.map((step) => (
              <div
                key={step.num}
                className="step-card bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-xl space-y-2 border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <div className="step-badge w-10 h-10 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-headline-sm text-headline-sm font-bold shadow-sm transition-transform duration-300">
                  {step.num}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-primary">
                  {step.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-primary-container">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Callout Bar */}
          <div className="bg-surface-container-lowest/10 rounded-xl p-space-md flex flex-col sm:flex-row items-center justify-between gap-space-md">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[24px] text-tertiary-fixed shrink-0">
                location_on
              </span>
              <span className="font-label-md text-label-md text-on-primary">
                Doorstep service available for selected requirements in Kumbakonam &amp; nearby areas
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-space-xs">
              <a
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary-container hover:-translate-y-0.5 transition-all shadow-sm active:translate-y-0"
                href={createWhatsAppUrl("Hello VASAN TECH, I want to check Doorstep Service availability for my device.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>Request on WhatsApp</span>
              </a>
              <a
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md hover:bg-surface-container-high hover:-translate-y-0.5 transition-all active:translate-y-0"
                href={BUSINESS_INFO.phoneLink}
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>Call {BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
