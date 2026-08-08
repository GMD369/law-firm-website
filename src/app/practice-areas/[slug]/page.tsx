import { notFound } from "next/navigation";
import Image from "next/image";
import { practiceAreas } from "@/data/practice-areas";
import { site } from "@/data/site";
import Button from "@/components/ui/Button";

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) return {};

  return {
    title: `${area.title} Lawyer in ${site.city} | ${site.firmName}`,
    description: `${area.summary} Free consultation with a ${site.city} ${area.title.toLowerCase()} attorney.`,
  };
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  return (
    <article>
      <div className="relative h-72 md:h-96">
        <Image
          src={area.image}
          alt={area.title}
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative h-full mx-auto max-w-3xl px-6 flex flex-col justify-end pb-10">
          <h1 className="font-heading text-4xl text-white">{area.title}</h1>
          <p className="mt-2 font-accent text-sm uppercase tracking-wide text-accent">
            {area.summary}
          </p>
        </div>
      </div>

      <section className="py-section md:py-section-lg">
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-body text-text-muted leading-relaxed">
            {area.description}
          </p>
          <div className="mt-10">
            <Button href="/#contact">Get Your Free Case Review</Button>
          </div>
        </div>
      </section>
    </article>
  );
}
