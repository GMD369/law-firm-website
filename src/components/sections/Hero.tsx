import Image from "next/image";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-dark">
      <Image
        src="/justice.jpg"
        alt="Scales of justice and gavel in a law library"
        fill
        preload
        quality={90}
        sizes="100vw"
        className="object-cover"
      />

      {/* Scrim: heavy on mobile (text sits over the art), directional on desktop
          so the gold scales stay visible on the right. */}
      <div className="absolute inset-0 bg-primary-dark/80 md:hidden" />
      <div className="absolute inset-0 hidden md:block bg-linear-to-r from-primary-dark/95 via-primary-dark/75 to-primary-dark/20" />

      <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-36 md:pt-40 md:pb-48">
        <div className="max-w-xl text-center md:text-left">
          <p className="font-accent text-xs md:text-sm uppercase tracking-[0.3em] text-accent">
            {site.city} · Punjab Bar Council Registered
          </p>
          <h1 className="mt-5 font-heading text-4xl md:text-6xl text-white leading-tight text-balance">
            {site.tagline}
          </h1>
          <p className="mt-6 font-body text-lg text-white/75">
            Free first consultation. Straight answers, no jargon, no pressure —
            in person or over WhatsApp.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Button href="/#contact">Book a Free Consultation</Button>
            <Button href={site.phoneHref} variant="ghost">
              {site.phone}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
