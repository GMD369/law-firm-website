import { CaseResult } from "@/types";
import Reveal from "@/components/ui/Reveal";

const cases: CaseResult[] = [
  {
    title: "Property Possession Recovery — Gulberg, Lahore",
    amount: "Rs. 8.5 Cr",
    summary: "Recovered illegally occupied commercial property after a 2-year suit.",
  },
  {
    title: "Family Maintenance Settlement — Model Town, Lahore",
    amount: "Rs. 12 Lac",
    summary: "Secured fair monthly maintenance and full custody rights for our client.",
  },
  {
    title: "Commercial Recovery Suit — DHA, Lahore",
    amount: "Rs. 4.2 Cr",
    summary: "Settlement reached after opposing party defaulted on a supply contract.",
  },
];

export default function CaseResults() {
  return (
    <section className="py-section md:py-section-lg bg-surface-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="font-heading text-3xl md:text-4xl text-primary text-center">
            Recent Case Results
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="h-full bg-surface rounded-card p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-2 border-accent">
                <p className="font-accent text-3xl font-bold text-accent">
                  {c.amount}
                </p>
                <h3 className="mt-2 font-heading text-lg text-primary">
                  {c.title}
                </h3>
                <p className="mt-2 font-body text-sm text-text-muted">
                  {c.summary}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center font-body text-xs text-text-muted">
          Past results do not guarantee future outcomes. Every case is
          different.
        </p>
      </div>
    </section>
  );
}
