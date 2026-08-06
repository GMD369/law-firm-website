const stats = [
  { value: "$42M+", label: "Recovered for Clients" },
  { value: "1,200+", label: "Cases Handled" },
  { value: "95%", label: "Success Rate" },
  { value: "20+", label: "Years Serving City" },
];

export default function Results() {
  return (
    <section id="results" className="bg-primary text-text-inverse py-section scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-accent text-4xl font-bold text-accent">
              {stat.value}
            </p>
            <p className="mt-2 font-body text-sm text-white/80">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
