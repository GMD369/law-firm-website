import Image from "next/image";
import { Testimonial } from "@/types";
import { images } from "@/data/images";

const testimonials: (Testimonial & { avatar: string })[] = [
  {
    name: "Maria Sanchez",
    quote:
      "They treated me like a person, not a case number. I always knew where things stood, and they settled my case for far more than the insurance company first offered.",
    context: "Personal Injury Client",
    avatar: images.clientPortrait,
  },
  {
    name: "David Reyes",
    quote:
      "Straightforward, responsive, and they delivered exactly what they promised during a really difficult custody dispute.",
    context: "Family Law Client",
    avatar: images.clientPortrait,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-section md:py-section-lg scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-heading text-3xl md:text-4xl text-primary text-center">
          What Our Clients Say
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="bg-surface-secondary rounded-card p-8"
            >
              <p className="font-body italic text-text leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden shrink-0">
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
          ))}
        </div>
      </div>
    </section>
  );
}
