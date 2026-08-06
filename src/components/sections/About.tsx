import Image from "next/image";
import { site } from "@/data/site";
import { images } from "@/data/images";

export default function About() {
  return (
    <section id="about" className="py-section md:py-section-lg scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-2 items-center">
        <div className="relative aspect-square rounded-card overflow-hidden">
          <Image
            src={images.attorneyPortrait}
            alt="Michael Harrington, Founding Attorney"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <h2 className="font-heading text-3xl md:text-4xl text-primary">
            Meet Attorney Michael Harrington
          </h2>
          <p className="mt-6 font-body text-text-muted leading-relaxed">
            With over 20 years serving {site.city}, Michael Harrington has
            built a reputation for straight talk, relentless preparation, and
            results clients can point to. He founded {site.firmName} in 2006
            after a decade at a regional trial firm, with a simple goal: give
            every client the attention a big firm reserves for its biggest
            cases.
          </p>
        </div>
      </div>
    </section>
  );
}
