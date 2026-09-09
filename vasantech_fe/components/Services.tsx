import Image from "next/image";
import { PRIMARY_SERVICES, ADDITIONAL_SERVICES } from "@/data/services";
import { createServiceEnquiryUrl, createWhatsAppUrl } from "@/lib/whatsapp";

export default function Services() {
  return (
    <section className="w-full bg-surface-container-lowest py-space-xl" id="services">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop space-y-space-xl">
        {/* Section Header */}
        <div className="text-center space-y-space-xs max-w-2xl mx-auto reveal-on-scroll is-visible">
          <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
            Expert IT Support
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Our Repair &amp; IT Services
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Hardware repairs, software diagnostics, printer servicing, and technology installations in Kumbakonam.
          </p>
        </div>

        {/* Primary Services (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {PRIMARY_SERVICES.map((service) => (
            <div
              key={service.id}
              className="reveal-on-scroll rounded-xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 group is-visible"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-surface-container relative">
                  <Image
                    alt={service.title}
                    src={service.image}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-space-lg space-y-space-sm">
                  <div className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-[24px] text-secondary">
                      {service.icon}
                    </span>
                    <h3 className="font-headline-sm text-headline-sm font-bold">
                      {service.title}
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {service.description}
                  </p>
                  {service.points && (
                    <ul className="space-y-1.5 font-body-sm text-body-sm text-on-surface pt-space-xs border-t border-outline-variant/20">
                      {service.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-[16px] text-tertiary-container mt-0.5 shrink-0">
                            check_circle
                          </span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="p-space-lg pt-0">
                <a
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-surface-container text-primary font-label-md text-label-md group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300 shadow-sm"
                  href={createServiceEnquiryUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[18px]">chat</span>
                  <span>Book Service</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional IT Services (4 Cards) */}
        <div className="space-y-space-md pt-space-md">
          <div className="flex items-center gap-2 border-b border-outline-variant/30 pb-2 reveal-on-scroll is-visible">
            <span className="material-symbols-outlined text-primary text-[22px]">settings_input_component</span>
            <h3 className="font-headline-sm text-headline-sm text-primary">
              Additional IT Solutions
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {ADDITIONAL_SERVICES.map((service) => (
              <div
                key={service.id}
                className="reveal-on-scroll rounded-xl bg-surface-container-low border border-outline-variant/30 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group is-visible"
              >
                <div className="w-full">
                  <div className="aspect-[4/3] overflow-hidden bg-surface-container relative">
                    <Image
                      alt={service.title}
                      src={service.image}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-space-md space-y-1">
                    <h4 className="font-headline-sm text-[16px] leading-snug text-primary">
                      {service.title}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="p-space-md pt-0">
                  <a
                    className="inline-flex items-center gap-1 text-primary hover:text-secondary font-label-md text-label-md transition-colors group/link"
                    href={createWhatsAppUrl(`Hello VASAN TECH, I enquire about ${service.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Enquire Now</span>
                    <span className="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
