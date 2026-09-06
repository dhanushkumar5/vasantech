export default function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-container-lowest/95 backdrop-blur-md p-space-xs border-t border-outline-variant/30 flex gap-space-xs">
      <a
        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm"
        href="tel:+919003041200"
      >
        <span className="material-symbols-outlined text-[18px]">call</span>
        <span>Call</span>
      </a>
      <a
        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-tertiary-container text-on-primary font-label-md text-label-md shadow-sm"
        href="https://wa.me/919003041200"
        rel="noopener noreferrer"
        target="_blank"
      >
        <span className="material-symbols-outlined text-[18px]">chat</span>
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
