const reasons = [
  {
    title: "Direct Attorney Access",
    body: "You work with your attorney directly, not a rotating cast of paralegals.",
  },
  {
    title: "No Fees Unless We Win",
    body: "Contingency-based representation removes the financial risk of reaching out.",
  },
  {
    title: "Trial-Ready Reputation",
    body: "Insurers and opposing counsel know we prepare every case for court.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-section md:py-section-lg bg-surface-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-heading text-3xl md:text-4xl text-primary text-center">
          What Makes Us Different
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title}>
              <h3 className="font-heading text-xl text-primary">
                {reason.title}
              </h3>
              <p className="mt-3 font-body text-sm text-text-muted">
                {reason.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
