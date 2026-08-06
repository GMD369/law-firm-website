import Button from "@/components/ui/Button";

export default function ConsultationCTA() {
  return (
    <section className="py-section bg-primary text-text-inverse text-center">
      <div className="mx-auto max-w-3xl px-6">
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
      </div>
    </section>
  );
}
