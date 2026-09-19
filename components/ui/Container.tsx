import { cn } from "@/lib/utils/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main" | "header" | "footer" | "nav";
  /** Narrower reading measure for long text blocks */
  narrow?: boolean;
};

export function Container({
  children,
  className,
  as: Tag = "div",
  narrow = false,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "page-shell",
        narrow && "max-w-[min(var(--page-max),48rem)]",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
