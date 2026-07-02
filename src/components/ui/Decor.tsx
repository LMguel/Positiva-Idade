import { cn } from "@/lib/utils";

export function BlurCircle({
  className,
  size = 400,
  color = "bg-accent/30",
}: {
  className?: string;
  size?: number;
  color?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn("absolute rounded-full blur-3xl pointer-events-none", color, className)}
      style={{ width: size, height: size }}
    />
  );
}
