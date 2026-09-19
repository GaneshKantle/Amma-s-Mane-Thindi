import { cn } from "@/lib/utils/cn";
import { InkSprig } from "@/components/illustrations/InkOrnaments";

type SectionEyebrowProps = {
  children: React.ReactNode;
  className?: string;
  tone?: "leaf" | "terracotta" | "ink" | "mustard";
  withSprig?: boolean;
};

const toneClass = {
  leaf: "text-leaf",
  terracotta: "text-terracotta",
  ink: "text-ink-soft",
  mustard: "text-mustard",
} as const;

/** Editorial chapter label — adult illustrated, not a pill badge. */
export function SectionEyebrow({
  children,
  className,
  tone = "leaf",
  withSprig = false,
}: SectionEyebrowProps) {
  return (
    <div className={cn("flex flex-col items-start gap-2", className)}>
      {withSprig ? <InkSprig className="h-5 w-10" /> : null}
      <p
        className={cn(
          "text-[0.7rem] font-medium tracking-[0.22em] uppercase sm:text-xs",
          toneClass[tone],
        )}
      >
        {children}
      </p>
    </div>
  );
}
