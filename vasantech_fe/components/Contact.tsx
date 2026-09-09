"use client";

import { useState } from "react";
import { BUSINESS_INFO } from "@/data/business";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [requirement, setRequirement] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello VASAN TECH,
Name: ${name}
Phone: ${phone}
Requirement: ${requirement}
Details: ${message || "Not specified"}`;

    const url = createWhatsAppUrl(text);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="w-full bg-surface-container-lowest py-space-3xl" id="contact">
      <div className="max-w-container-max mx-auto px-gutter-mobile lg:px-gutter-desktop">
        {/* Section Header */}
        <div className="text-center space-y-space-xs max-w-2xl mx-auto mb-space-2xl reveal-on-scroll is-visible">
          <span className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider">
            Reach Out
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Contact &amp; Location
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Connect with us directly for device servicing, sales inquiries, or doorstep service requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
          {/* Left Column: Location & Direct CTAs (5 cols) */}
          <div className="lg:col-span-5 space-y-space-md reveal-on-scroll is-visible">
            <div className="rounded-xl bg-surface-container-low border border-outline-variant/30 p-space-lg shadow-sm space-y-space-md">
              <h3 className="font-headline-sm text-headline-sm text-primary flex items-start gap-2">
                <span className="material-symbols-outlined text-secondary mt-0.5">location_on</span>
                <span>Store Address</span>
              </h3>
              <p className="font-body-md text-body-md text-on-surface font-medium leading-relaxed">
                No. 1378, Manargudi Main Road,
                <br />
                Sakkottai, Kumbakonam – 612 401,
                <br />
                Tamil Nadu
              </p>
              <div className="space-y-space-xs font-body-sm text-body-sm text-on-surface pt-space-xs border-t border-outline-variant/30">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">phone</span>
                  <span>
                    <strong>Phone:</strong>{" "}
                    <a className="hover:text-primary hover:underline" href={BUSINESS_INFO.phoneLink}>
                      {BUSINESS_INFO.phone}
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">chat</span>
                  <span>
                    <strong>WhatsApp:</strong>{" "}
                    <a
                      className="hover:text-primary hover:underline"
                      href={createWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {BUSINESS_INFO.phone}
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
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container hover:-translate-y-0.5 transition-all shadow-sm active:translate-y-0"
                  href={BUSINESS_INFO.phoneLink}
                >
                  <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
                <a
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg bg-tertiary-container text-on-primary font-label-md text-label-md hover:bg-primary hover:-translate-y-0.5 transition-all shadow-sm active:translate-y-0"
                  href={createWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  <span>WhatsApp Us</span>
                </a>
                <a
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-primary font-label-md text-label-md hover:bg-surface-container-high transition-all shadow-sm"
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="material-symbols-outlined text-[20px] text-secondary">near_me</span>
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct WhatsApp Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 reveal-on-scroll is-visible">
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
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-sm text-body-sm transition-all"
                      id="form-name"
                      placeholder="Enter your name"
                      required
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="block font-label-md text-label-md text-on-surface" htmlFor="form-phone">
                      Phone Number *
                    </label>
                    <input
                      className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-sm text-body-sm transition-all"
                      id="form-phone"
                      placeholder="Enter phone number"
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="block font-label-md text-label-md text-on-surface" htmlFor="form-requirement">
                    Service / Sales Requirement *
                  </label>
                  <select
                    className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-sm text-body-sm transition-all"
                    id="form-requirement"
                    required
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)}
                  >
                    <option value="">Select requirement</option>
                    <option value="Laptop Repair & Service">Laptop Repair &amp; Service</option>
                    <option value="Desktop Repair & Service">Desktop Repair &amp; Service</option>
                    <option value="Printer Repair & Service">Printer Repair &amp; Service</option>
                    <option value="Gaming Laptops">Gaming Laptops</option>
                    <option value="Business Laptops">Business Laptops</option>
                    <option value="Student & Everyday Laptops">Student &amp; Everyday Laptops</option>
                    <option value="Thin & Lightweight Laptops">Thin &amp; Lightweight Laptops</option>
                    <option value="Gaming PCs">Gaming PCs</option>
                    <option value="Office & Business PCs">Office &amp; Business PCs</option>
                    <option value="Home & Student PCs">Home &amp; Student PCs</option>
                    <option value="Custom Assembled PCs">Custom Assembled PCs</option>
                    <option value="Ink Tank Printers">Ink Tank Printers</option>
                    <option value="Laser Printers">Laser Printers</option>
                    <option value="All-in-One Printers">All-in-One Printers</option>
                    <option value="Color Printers">Color Printers</option>
                    <option value="Monochrome Printers">Monochrome Printers</option>
                    <option value="Multifunction Printers">Multifunction Printers</option>
                    <option value="Networking, WiFi & Biometrics">Networking, WiFi &amp; Biometrics</option>
                    <option value="CCTV">CCTV</option>
                    <option value="Projectors">Projectors</option>
                    <option value="Interactive Panels">Interactive Panels</option>
                    <option value="Doorstep Service Request">Request Doorstep Service</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="block font-label-md text-label-md text-on-surface" htmlFor="form-message">
                    Message / Issue Details
                  </label>
                  <textarea
                    className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/60 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary font-body-sm text-body-sm transition-all"
                    id="form-message"
                    placeholder="Briefly describe your device problem or requirement..."
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button
                  className="w-full py-3 rounded-lg bg-tertiary-container text-on-primary font-label-lg text-label-lg hover:bg-primary hover:-translate-y-0.5 transition-all duration-200 shadow-md flex items-center justify-center gap-2 active:translate-y-0 cursor-pointer"
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
