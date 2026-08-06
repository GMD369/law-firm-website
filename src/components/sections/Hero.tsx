import Image from "next/image";
import Button from "@/components/ui/Button";
import { site } from "@/data/site";
import { images } from "@/data/images";

export default function Hero() {
  return (
    <section className="bg-surface-secondary">
      <div className="mx-auto max-w-7xl px-6 py-section-lg grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <h1 className="font-heading text-4xl md:text-6xl text-primary leading-tight">
            {site.tagline}
          </h1>
          <p className="mt-6 font-body text-lg text-text-muted max-w-xl">
            Free consultation. No fees unless we win. Straight answers, no
            jargon, no pressure.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/#contact">Get Your Free Case Review</Button>
            <Button href={site.phoneHref} variant="outline">
              {site.phone}
            </Button>
          </div>
        </div>
        <div className="relative aspect-4/3 rounded-card overflow-hidden">
          <Image
            src={images.heroOffice}
            alt={`${site.firmName} office in ${site.city}`}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
