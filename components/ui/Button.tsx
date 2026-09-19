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
    "bg-terracotta text-cream shadow-[2px_3px_0_rgba(41,37,31,0.12)] hover:bg-terracotta-deep active:translate-y-px",
  secondary:
    "bg-cream/70 text-ink border-[1.5px] border-ink/25 shadow-[2px_2px_0_rgba(41,37,31,0.08)] hover:border-terracotta/50 hover:bg-cream active:translate-y-px [border-radius:1.1rem_0.7rem_1.15rem_0.85rem]",
  ghost:
    "bg-transparent text-ink hover:bg-ink/5 active:bg-ink/10",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "min-h-11 px-5 text-sm sm:text-base",
  lg: "min-h-12 px-6 text-base sm:min-h-[3.25rem] sm:px-7 sm:text-lg",
};

function buttonClassName(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return cn(
    "tap-target inline-flex items-center justify-center gap-2 rounded-[1rem_0.75rem_1.05rem_0.9rem] font-medium transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out disabled:pointer-events-none disabled:opacity-50 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[3px_4px_0_rgba(41,37,31,0.12)]",
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
