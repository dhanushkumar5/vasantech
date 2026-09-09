import { BUSINESS_INFO } from "@/data/business";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export default function MobileActionBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest/95 backdrop-blur-md p-space-xs shadow-[0_-2px_10px_rgba(0,0,0,0.08)] flex gap-space-xs">
      <a
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg active:scale-98 transition-transform"
        href={BUSINESS_INFO.phoneLink}
      >
        <span className="material-symbols-outlined text-[20px]">call</span>
        <span>Call Store</span>
      </a>
      <a
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-tertiary-container text-on-primary font-label-lg text-label-lg active:scale-98 transition-transform"
        href={createWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="material-symbols-outlined text-[20px]">chat</span>
        <span>WhatsApp Tech</span>
      </a>
    </div>
  );
}
