const badges = [
  "Google 4.9★ (238 Reviews)",
  "California State Bar Member",
  "Super Lawyers Rated 2021–2026",
  "Featured in Riverside Business Journal",
];

export default function TrustBar() {
  return (
    <section className="border-y border-surface-secondary">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
        {badges.map((badge) => (
          <span
            key={badge}
            className="font-accent text-xs uppercase tracking-wide text-text-muted"
          >
            {badge}
          </span>
        ))}
      </div>
    </section>
  );
}
