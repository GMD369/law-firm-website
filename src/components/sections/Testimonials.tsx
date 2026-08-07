import Image from "next/image";
import { Testimonial } from "@/types";
import { images } from "@/data/images";
import Reveal from "@/components/ui/Reveal";

const testimonials: (Testimonial & { avatar: string })[] = [
  {
    name: "Ayesha Khan",
    quote:
      "They handled my khula case with so much respect and patience. I always knew what was happening at every hearing, and it was resolved faster than I expected.",
    context: "Family Law Client, Lahore",
    avatar: images.clientPortraitFemale,
  },
  {
    name: "Bilal Ahmed",
    quote:
      "Recovered our shop from illegal possession after two other lawyers gave up on the case. Direct, honest, and always reachable on WhatsApp.",
    context: "Property Law Client, Gulberg",
    avatar: images.clientPortraitMale,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-section md:py-section-lg scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl text-primary text-center">
            What Our Clients Say
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <blockquote className="h-full bg-surface-secondary rounded-card p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
                <span className="absolute top-6 right-8 font-heading text-6xl text-accent/20 select-none">
                  &rdquo;
                </span>
                <p className="font-body italic text-text leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden shrink-0 ring-2 ring-accent/30">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                  <div className="font-accent text-sm">
                    <p className="text-primary">{t.name}</p>
                    {t.context ? (
                      <p className="text-text-muted">{t.context}</p>
                    ) : null}
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
