import Image from "next/image";
import { site } from "@/data/site";
import Reveal from "@/components/ui/Reveal";

export default function About() {
  return (
    <section id="about" className="py-section md:py-section-lg scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-2 items-center">
        <Reveal>
          <div className="relative aspect-square rounded-card overflow-hidden shadow-2xl">
            <Image
              src="/lawyer.jpeg"
              alt={`${site.attorneyName}, Founding Advocate`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-5 left-5 right-5 md:right-auto rounded-card bg-surface/90 backdrop-blur-md shadow-xl px-6 py-4">
              <p className="font-accent text-3xl font-bold text-accent">
                15+
              </p>
              <p className="font-body text-xs uppercase tracking-wide text-text-muted">
                Years at Lahore High Court
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <h2 className="font-heading text-3xl md:text-4xl text-primary">
            Meet {site.attorneyName}
          </h2>
          <p className="mt-6 font-body text-text-muted leading-relaxed">
            With over 15 years practicing before the Lahore High Court and
            District Courts of Punjab, {site.attorneyName} has built a
            reputation for straight talk, meticulous case preparation, and
            results clients can point to. He founded {site.firmName} in 2011
            after a decade at a leading Lahore chambers, with a simple goal:
            give every client — whether an individual or a growing business —
            the attention a big firm reserves for its biggest cases.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
