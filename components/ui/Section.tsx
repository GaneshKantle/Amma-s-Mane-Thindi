import { cn } from "@/lib/utils/cn";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  ariaLabelledBy?: string;
};

export function Section({
  children,
  className,
  id,
  ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cn(
        "relative w-full py-12 sm:py-16 lg:py-20",
        className,
      )}
    >
      {children}
    </section>
  );
}
