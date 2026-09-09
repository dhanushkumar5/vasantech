export default function WhyChooseUs() {
  const points = [
    {
      icon: "chat",
      iconColor: "text-primary",
      iconHover: "group-hover:bg-primary group-hover:text-on-primary",
      title: "Clear Communication",
      desc: "Discuss your device issue or requirement directly with our team.",
    },
    {
      icon: "laptop_mac",
      iconColor: "text-secondary",
      iconHover: "group-hover:bg-secondary group-hover:text-white",
      title: "Computer & Laptop Support",
      desc: "Support for laptops, desktops, operating systems, and related hardware.",
    },
    {
      icon: "print",
      iconColor: "text-primary",
      iconHover: "group-hover:bg-primary group-hover:text-on-primary",
      title: "Printer Support",
      desc: "Printer sales and service support for different brands and types.",
    },
    {
      icon: "devices_other",
      iconColor: "text-primary",
      iconHover: "group-hover:bg-primary group-hover:text-on-primary",
      title: "New & Refurbished Systems",
      desc: "Options for new and refurbished laptops and desktop systems.",
    },
    {
      icon: "support_agent",
      iconColor: "text-secondary",
      iconHover: "group-hover:bg-secondary group-hover:text-white",
      title: "Phone & WhatsApp Support",
      desc: "Contact us directly by phone or WhatsApp for enquiries and service requests.",
    },
    {
      icon: "location_city",
      iconColor: "text-primary",
      iconHover: "group-hover:bg-primary group-hover:text-on-primary",
      title: "Local Support in Kumbakonam",
      desc: "Serving customers in Kumbakonam and nearby areas.",
    },
  ];

  return (
    <section className="w-full bg-surface-container-low py-space-xl" id="why-choose-us">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop space-y-space-xl">
        {/* Section Header */}
        <div className="text-center space-y-space-xs max-w-2xl mx-auto reveal-on-scroll is-visible">
          <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
            Local Service
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Why Choose VASAN TECH
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Practical advice, direct communication, and responsive local computer support in Kumbakonam.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {points.map((pt) => (
            <div
              key={pt.title}
              className="reveal-on-scroll p-space-lg rounded-xl bg-surface-container-lowest border border-outline-variant/30 space-y-space-xs shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group is-visible"
            >
              <div
                className={`w-12 h-12 rounded-lg bg-surface-container ${pt.iconColor} flex items-center justify-center ${pt.iconHover} transition-colors duration-300`}
              >
                <span className="material-symbols-outlined text-[28px]">{pt.icon}</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                {pt.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {pt.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
