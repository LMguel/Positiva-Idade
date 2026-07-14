import { cn } from "@/lib/utils";

export function HorizonMark({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <span
      aria-hidden
      className={cn("relative inline-flex h-[7px] w-11 shrink-0 items-center", className)}
    >
      <span
        className={cn(
          "absolute inset-x-0 top-1/2 h-px -translate-y-1/2",
          light ? "bg-white/30" : "bg-primary/25"
        )}
      />
      <span
        className={cn(
          "absolute left-1/2 top-1/2 size-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full",
          light ? "bg-accent" : "bg-primary"
        )}
      />
    </span>
  );
}
