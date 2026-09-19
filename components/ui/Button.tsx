import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-terracotta text-cream shadow-[1px_2px_0_rgba(41,37,31,0.1)] hover:bg-terracotta-deep active:translate-y-px",
  secondary:
    "bg-cream/80 text-ink border border-ink/30 shadow-[1px_2px_0_rgba(41,37,31,0.06)] hover:border-terracotta/55 hover:bg-cream active:translate-y-px",
  ghost:
    "bg-transparent text-ink hover:bg-ink/[0.04] active:bg-ink/[0.07]",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "min-h-11 px-5 text-sm tracking-wide sm:text-[0.95rem]",
  lg: "min-h-12 px-6 text-[0.95rem] tracking-wide sm:min-h-[3.15rem] sm:px-7 sm:text-base",
};

function buttonClassName(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return cn(
    "tap-target inline-flex items-center justify-center gap-2 rounded-[0.7rem_0.45rem_0.85rem_0.55rem] font-medium transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 motion-safe:hover:-translate-y-px motion-safe:hover:shadow-[2px_3px_0_rgba(41,37,31,0.1)]",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

export function Button(props: ButtonProps) {
  const { children, className, variant = "primary", size = "md" } = props;
  const classes = buttonClassName(variant, size, className);

  if ("href" in props && props.href) {
    const { href, external } = props;
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as ButtonAsButton;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
