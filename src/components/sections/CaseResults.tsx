import { CaseResult } from "@/types";

const cases: CaseResult[] = [
  {
    title: "Auto Accident Settlement — Riverside, CA",
    amount: "$1.2M",
    summary: "Secured full policy limits for a client with lasting injuries.",
  },
  {
    title: "Workplace Injury Verdict — San Bernardino, CA",
    amount: "$850K",
    summary: "Jury verdict after the insurer refused a fair pre-trial offer.",
  },
  {
    title: "Wrongful Termination — Corona, CA",
    amount: "$400K",
    summary: "Settlement reached after documenting a pattern of retaliation.",
  },
];

export default function CaseResults() {
  return (
    <section className="py-section md:py-section-lg bg-surface-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-heading text-3xl md:text-4xl text-primary text-center">
          Recent Case Results
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {cases.map((c) => (
            <div key={c.title} className="bg-surface rounded-card p-8">
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
