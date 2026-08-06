import Link from "next/link";
import Image from "next/image";
import { practiceAreas } from "@/data/practice-areas";

export const metadata = {
  title: "Practice Areas",
  description: "Explore the areas of law we practice.",
};

export default function PracticeAreasPage() {
  return (
    <section className="py-section md:py-section-lg">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="font-heading text-4xl text-primary text-center">
          Practice Areas
        </h1>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {practiceAreas.map((area) => (
            <Link
              key={area.slug}
              href={`/practice-areas/${area.slug}`}
              className="group bg-surface-secondary rounded-card overflow-hidden hover:shadow-md transition"
            >
              <div className="relative aspect-4/3">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h2 className="font-heading text-xl text-primary">
                  {area.title}
                </h2>
                <p className="mt-3 font-body text-sm text-text-muted">
                  {area.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
