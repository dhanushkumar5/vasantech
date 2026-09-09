import { BRAND_GROUPS } from "@/data/business";

export default function Brands() {
  return (
    <section className="w-full bg-surface-container-lowest border-y border-outline-variant/30 py-space-xl" id="brands">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop space-y-space-xl">
        {/* Section Header */}
        <div className="text-center space-y-space-xs max-w-2xl mx-auto reveal-on-scroll is-visible">
          <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
            Multi-Brand Expertise
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Brands We Deal With
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Sales, service, and genuine spares for leading computing and printing brands.
          </p>
        </div>

        {/* Brand Categories */}
        <div className="space-y-space-lg">
          {BRAND_GROUPS.map((group) => (
            <div key={group.category} className="space-y-space-md">
              <div className="flex items-center gap-2 border-b border-outline-variant/30 pb-2 reveal-on-scroll is-visible">
                <span className="material-symbols-outlined text-primary text-[22px]">
                  {group.icon}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary">
                  {group.category}
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-space-md">
                {group.brands.map((brand) => (
                  <div
                    key={brand.name}
                    className="reveal-on-scroll p-4 rounded-xl bg-surface-container-low border border-outline-variant/40 shadow-sm flex flex-col items-center justify-center gap-2 text-center hover:border-primary hover:-translate-y-1 transition-all duration-300 group is-visible"
                  >
                    <div
                      className={`w-12 h-12 rounded-full ${brand.bg} flex items-center justify-center ${brand.textColor} ${brand.hoverBg} group-hover:text-white transition-colors duration-300`}
                    >
                      <span className="font-black text-sm uppercase tracking-wider">
                        {brand.logo}
                      </span>
                    </div>
                    <span className="font-label-md text-label-md text-on-surface font-bold">
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
