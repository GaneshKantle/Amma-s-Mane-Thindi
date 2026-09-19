import { cn } from "@/lib/utils/cn";

type DividerProps = {
  className?: string;
  tone?: "ink" | "terracotta" | "leaf" | "mustard";
  decorative?: boolean;
};

const strokeMap = {
  ink: "#29251F",
  terracotta: "#B85C38",
  leaf: "#687A52",
  mustard: "#D9A441",
} as const;

/** Hand-drawn stitch / ink wobble divider. */
export function Divider({
  className,
  tone = "ink",
  decorative = true,
}: DividerProps) {
  const stroke = strokeMap[tone];

  return (
    <div
      role={decorative ? "presentation" : "separator"}
      aria-hidden={decorative}
      className={cn("mx-auto flex w-full max-w-xs items-center justify-center py-2", className)}
    >
      <svg
        viewBox="0 0 220 18"
        className="h-4 w-full max-w-[13.75rem]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 9.2 C28 4.5, 42 13.5, 66 8.8 C90 4.2, 108 13.8, 132 9 C156 4.4, 174 12.5, 198 8.2 C206 7, 214 9.5, 216 10"
          stroke={stroke}
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M18 9.5h0.1 M34 8.2h0.1 M50 10.1h0.1 M66 8.5h0.1 M82 9.8h0.1 M98 8.1h0.1 M114 9.6h0.1 M130 8.8h0.1 M146 9.4h0.1 M162 8.3h0.1 M178 9.7h0.1 M194 8.6h0.1"
          stroke={stroke}
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}
