import { site } from "@/data/site";

export default function StickyMobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 border-t border-surface-secondary bg-surface shadow-[0_-2px_8px_rgba(0,0,0,0.08)]">
      <a
        href={site.phoneHref}
        className="flex items-center justify-center gap-2 py-4 font-accent uppercase text-sm tracking-wide text-primary"
      >
        Call Now
      </a>
      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-4 font-accent uppercase text-sm tracking-wide bg-accent text-white"
      >
        WhatsApp
      </a>
    </div>
  );
}
