import Link from "next/link";
import { site } from "@/data/site";
import Button from "@/components/ui/Button";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur border-b border-surface-secondary">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="font-heading text-xl text-primary">
          {site.firmName}
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-body text-sm text-text">
          {site.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-primary transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={site.phoneHref}
            className="hidden sm:block font-accent text-sm text-primary"
          >
            {site.phone}
          </a>
          <Button href="/#contact">Free Consultation</Button>
        </div>
      </div>
    </header>
  );
}
