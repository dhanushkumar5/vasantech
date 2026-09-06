"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    requirement: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, requirement, message } = formData;
    const text = `Hello VASAN TECH,\n\nName: ${name.trim()}\nPhone: ${phone.trim()}\nRequirement: ${requirement.trim()}\nMessage: ${message.trim()}`;
    const whatsappUrl = `https://wa.me/919003041200?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl" id="contact">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
        <div className="text-center space-y-space-xs max-w-2xl mx-auto mb-space-2xl">
          <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
            Reach Out
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Contact &amp; Location</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Connect with us directly for device servicing, sales inquiries, or doorstep service requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          {/* Left Column: Location & Direct CTAs (5 cols) */}
          <div className="lg:col-span-5 space-y-space-md">
            <div className="rounded-xl bg-surface-container-low border border-outline-variant/30 p-space-lg shadow-sm space-y-space-md">
              <h3 className="font-headline-sm text-headline-sm text-primary flex items-start gap-2">
                <span className="material-symbols-outlined text-secondary mt-0.5">location_on</span>
                <span>Store Address</span>
              </h3>
              <p className="font-body-md text-body-md text-on-surface font-medium leading-relaxed">
                No. 1378, Manargudi Main Road,<br />
                Sakkottai, Kumbakonam – 612 401,<br />
                Tamil Nadu
              </p>
              <div className="space-y-space-xs font-body-sm text-body-sm text-on-surface pt-space-xs border-t border-outline-variant/30">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">phone</span>
                  <span>
                    <strong>Phone:</strong>{" "}
                    <a className="hover:text-primary hover:underline" href="tel:+919003041200">
                      +91 90030 41200
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">chat</span>
                  <span>
                    <strong>WhatsApp:</strong>{" "}
                    <a
                      className="hover:text-primary hover:underline"
                      href="https://wa.me/919003041200"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      +91 90030 41200
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">electric_moped</span>
                  <span>
                    <strong>Doorstep Service:</strong> Doorstep support and pickup available in Kumbakonam and nearby areas
                  </span>
                </div>
              </div>
              <div className="pt-space-sm flex flex-col gap-space-xs">
                <a
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm"
                  href="tel:+919003041200"
                >
                  <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                  <span>Call +91 90030 41200</span>
                </a>
                <a
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-tertiary-container text-on-primary font-label-md text-label-md hover:bg-primary transition-colors shadow-sm"
                  href="https://wa.me/919003041200"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct WhatsApp Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-surface-container-low border border-outline-variant/30 p-space-lg lg:p-space-xl shadow-sm">
              <div className="space-y-1 mb-space-md">
                <h3 className="font-headline-md text-headline-md text-primary">
                  Send an Enquiry on WhatsApp
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Fill in your requirement below and send the details directly to our WhatsApp.
                </p>
              </div>

              <form className="space-y-space-md" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="space-y-1">
                    <label className="block font-label-md text-label-md text-on-surface" htmlFor="form-name">
                      Name *
                    </label>
                    <input
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-sm text-body-sm"
                      id="form-name"
                      placeholder="Enter your name"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block font-label-md text-label-md text-on-surface" htmlFor="form-phone">
                      Phone Number *
                    </label>
                    <input
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-sm text-body-sm"
                      id="form-phone"
                      placeholder="Enter phone number"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block font-label-md text-label-md text-on-surface" htmlFor="form-requirement">
                    Service / Sales Requirement *
                  </label>
                  <select
                    className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-sm text-body-sm"
                    id="form-requirement"
                    required
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  >
                    <option value="">Select requirement</option>
                    <option value="Laptop Repair & Service">Laptop Repair &amp; Service</option>
                    <option value="Desktop Repair & Service">Desktop Repair &amp; Service</option>
                    <option value="Printer Repair & Service">Printer Repair &amp; Service</option>
                    <option value="New / Refurbished Laptop">New / Refurbished Laptop</option>
                    <option value="Desktop PC Purchase">Desktop PC Purchase</option>
                    <option value="Printer Purchase">Printer Purchase</option>
                    <option value="Networking, WiFi & Biometrics">Networking, WiFi &amp; Biometrics</option>
                    <option value="CCTV">CCTV</option>
                    <option value="Projectors">Projectors</option>
                    <option value="Interactive Panels">Interactive Panels</option>
                    <option value="Request Doorstep Service">Request Doorstep Service</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="block font-label-md text-label-md text-on-surface" htmlFor="form-message">
                    Message / Issue Details
                  </label>
                  <textarea
                    className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-sm text-body-sm"
                    id="form-message"
                    placeholder="Briefly describe your device problem or requirement..."
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  className="w-full py-3 rounded-lg bg-tertiary-container text-on-primary font-label-lg text-label-lg hover:bg-primary transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  type="submit"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>Send Enquiry on WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
