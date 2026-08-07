import { Scale, ShieldCheck, Users } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const reasons = [
  {
    icon: Users,
    title: "Direct Attorney Access",
    body: "You work with your attorney directly, not a rotating cast of paralegals.",
  },
  {
    icon: ShieldCheck,
    title: "No Fees Unless We Win",
    body: "Contingency-based representation removes the financial risk of reaching out.",
  },
  {
    icon: Scale,
    title: "Trial-Ready Reputation",
    body: "Insurers and opposing counsel know we prepare every case for court.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-section md:py-section-lg bg-surface-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl text-primary text-center">
            What Makes Us Different
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={i * 100}>
                <div className="h-full bg-surface rounded-card p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-heading text-xl text-primary">
                    {reason.title}
                  </h3>
                  <p className="mt-3 font-body text-sm text-text-muted">
                    {reason.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
