import Image from "next/image";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { images } from "@/data/images";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={images.cityskyline}
          alt={`${site.city} skyline`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-primary/85 to-primary-dark/95" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 pt-36 pb-40 md:pt-44 md:pb-52 text-center">
        <p className="font-accent text-xs md:text-sm uppercase tracking-[0.3em] text-accent">
          {site.city} · Trial-Ready Representation
        </p>
        <h1 className="mt-5 font-heading text-4xl md:text-6xl text-white leading-tight text-balance">
          {site.tagline}
        </h1>
        <p className="mt-6 font-body text-lg text-white/75 max-w-xl mx-auto">
          Free consultation. No fees unless we win. Straight answers, no
          jargon, no pressure.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/#contact">Get Your Free Case Review</Button>
          <Button href={site.phoneHref} variant="ghost">
            {site.phone}
          </Button>
        </div>
      </div>
    </section>
  );
}
