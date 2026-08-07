import Reveal from "@/components/ui/Reveal";

const stats = [
  { value: "Rs. 500M+", label: "Recovered & Settled for Clients" },
  { value: "1,800+", label: "Cases Handled" },
  { value: "94%", label: "Success Rate" },
  { value: "15+", label: "Years at Lahore High Court" },
];

export default function Results() {
  return (
    <section id="results" className="bg-primary text-text-inverse py-section scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 100}>
            <div>
              <p className="font-accent text-4xl font-bold text-accent">
                {stat.value}
              </p>
              <p className="mt-2 font-body text-sm text-white/80">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
