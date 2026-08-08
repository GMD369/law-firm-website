import Link from "next/link";
import Image from "next/image";
import { practiceAreas } from "@/data/practice-areas";
import Reveal from "@/components/ui/Reveal";

export default function PracticeAreas() {
  return (
    <section className="py-section md:py-section-lg">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl text-primary text-center">
            How Can We Help You?
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map((area, i) => (
            <Reveal key={area.slug} delay={i * 100}>
              <Link
                href={`/practice-areas/${area.slug}`}
                className="group block bg-surface-secondary rounded-card overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={area.image}
                    alt={area.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-primary">
                    {area.title}
                  </h3>
                  <p className="mt-3 font-body text-sm text-text-muted">
                    {area.summary}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
