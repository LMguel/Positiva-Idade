import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide uppercase",
              light
                ? "bg-white/10 text-accent border border-white/15"
                : "bg-primary/8 text-primary"
            )}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2
          className={cn(
            "font-display text-balance text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15]",
            light ? "text-white" : "text-foreground"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.18}>
          <p
            className={cn(
              "max-w-2xl text-balance text-[15px] sm:text-base leading-relaxed",
              light ? "text-white/75" : "text-muted"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
