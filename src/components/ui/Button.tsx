import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "outline";
} & ComponentPropsWithoutRef<typeof Link>;

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-accent uppercase tracking-wide px-8 py-3 rounded-btn transition text-sm";
  const variants = {
    primary: "bg-accent hover:bg-accent-hover text-white",
    outline:
      "border border-primary text-primary hover:bg-primary hover:text-white",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
