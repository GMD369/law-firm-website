import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/data/images";

export default function ConsultationCTA() {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-section text-center text-white"
      style={{ backgroundImage: `url(${images.courthouseColumns})` }}
    >
      <div className="absolute inset-0 bg-primary/85" />
      <Reveal className="relative mx-auto max-w-3xl px-6">
        <h2 className="font-heading text-3xl md:text-4xl">
          Free Case Review — No Obligation
        </h2>
        <p className="mt-4 font-body text-white/80">
          Talk to an attorney today. It costs nothing to find out where you
          stand.
        </p>
        <div className="mt-8">
          <Button href="/#contact">Talk to an Attorney Today</Button>
        </div>
      </Reveal>
    </section>
  );
}
