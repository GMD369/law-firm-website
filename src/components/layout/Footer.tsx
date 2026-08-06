import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-primary text-text-inverse py-section"
    >
      <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-heading text-2xl">{site.firmName}</p>
          <p className="mt-3 text-sm text-white/70 leading-relaxed">
            {site.address}
          </p>
        </div>

        <div className="text-sm space-y-2">
          <p>
            <a href={site.phoneHref} className="hover:text-accent">
              {site.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${site.email}`} className="hover:text-accent">
              {site.email}
            </a>
          </p>
          <p className="text-white/70">{site.hours}</p>
        </div>

        <div className="text-sm text-white/70">
          <p>
            Licensed and in good standing with the State Bar.
          </p>
          <p className="mt-4">
            &copy; {new Date().getFullYear()} {site.firmName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
