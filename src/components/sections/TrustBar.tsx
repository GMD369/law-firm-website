import Reveal from "@/components/ui/Reveal";

const badges = [
  "Google 4.8★ (312 Reviews)",
  "Punjab Bar Council Registered",
  "Lahore High Court Bar Association Member",
  "Featured in Dawn & The Express Tribune",
];

export default function TrustBar() {
  return (
    <div className="relative z-20 -mt-20 md:-mt-24 px-6">
      <Reveal>
        <div className="mx-auto max-w-5xl rounded-card bg-surface/90 backdrop-blur-md shadow-xl border border-black/5 px-6 py-6 md:px-10 md:py-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {badges.map((badge) => (
            <span
              key={badge}
              className="font-accent text-xs uppercase tracking-wide text-text-muted"
            >
              {badge}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
