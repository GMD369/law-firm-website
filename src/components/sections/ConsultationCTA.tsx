import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function ConsultationCTA() {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-fixed py-section text-center text-white"
      style={{ backgroundImage: "url(/law.jpeg)" }}
    >
      {/* Lighter than a flat fill so the gold "LAW" lettering still reads through */}
      <div className="absolute inset-0 bg-primary-dark/80" />
      <Reveal className="relative mx-auto max-w-3xl px-6">
        <h2 className="font-heading text-3xl md:text-4xl">
          Free Case Review — No Obligation
        </h2>
        <p className="mt-4 font-body text-white/80">
          Talk to an advocate today. It costs nothing to find out where you
          stand.
        </p>
        <div className="mt-8">
          <Button href="/#contact">Talk to an Advocate Today</Button>
        </div>
      </Reveal>
    </section>
  );
}
