import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline-light";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-primary text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5",
  secondary:
    "bg-white text-primary border border-primary/15 hover:bg-primary/5 hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-white border border-white/40 backdrop-blur-sm hover:bg-white/10 hover:-translate-y-0.5",
  "outline-light":
    "bg-white text-primary hover:bg-accent/20 hover:-translate-y-0.5",
};

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  icon?: React.ReactNode;
  target?: string;
  rel?: string;
}

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  icon,
  target,
  rel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold tracking-tight transition-all duration-300 active:translate-y-0",
    variantClasses[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel} onClick={onClick}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} type="button">
      {children}
      {icon}
    </button>
  );
}
