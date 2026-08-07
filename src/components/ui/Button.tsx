import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "outline" | "ghost";
} & ComponentPropsWithoutRef<typeof Link>;

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "relative overflow-hidden inline-flex items-center justify-center font-accent uppercase tracking-wide px-8 py-3 rounded-btn transition-all duration-300 text-sm hover:-translate-y-0.5";
  const variants = {
    primary:
      "bg-accent hover:bg-accent-hover text-white shadow-md hover:shadow-lg hover:shadow-accent/30 btn-shine",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white btn-shine",
    ghost:
      "border border-white/40 text-white hover:bg-white/10 btn-shine",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
