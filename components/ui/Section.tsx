import { cn } from "@/lib/utils/cn";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabelledBy?: string;
  /** Tighter vertical rhythm for denser pages */
  tight?: boolean;
};

export function Section({
  children,
  className,
  id,
  ariaLabelledBy,
  tight = false,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "relative w-full min-w-0",
        tight ? "section-y-tight" : "section-y",
        className,
      )}
    >
      {children}
    </section>
  );
}
