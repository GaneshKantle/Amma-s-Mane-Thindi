/** Small ink-line ornaments for an adult illustrated storybook feel. */

type OrnamentProps = {
  className?: string;
};

export function InkSprig({ className }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 48 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 18 C14 16, 20 10, 24 6 C28 10, 34 16, 44 18"
        stroke="#687A52"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M24 6 C22 12, 20 16, 18 20"
        stroke="#687A52"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M24 8 C26 13, 28 16, 30 19"
        stroke="#B85C38"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  );
}

export function InkCorner({ className }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 28 28"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M4 24 V8 C4 5, 5 4, 8 4 H24"
        stroke="#29251F"
        strokeWidth="1.35"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M8 24 V12 C8 10, 9 9, 11 9 H24"
        stroke="#B85C38"
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.28"
      />
    </svg>
  );
}

export function ChapterMark({
  className,
  number,
}: OrnamentProps & { number?: string }) {
  return (
    <span className={className} aria-hidden>
      <svg viewBox="0 0 40 40" className="h-9 w-9" fill="none">
        <circle
          cx="20"
          cy="20"
          r="15.5"
          stroke="#29251F"
          strokeWidth="1.2"
          opacity="0.28"
          strokeDasharray="2 3.5"
        />
        <circle
          cx="20"
          cy="20"
          r="11"
          stroke="#B85C38"
          strokeWidth="1"
          opacity="0.4"
        />
        {number ? (
          <text
            x="20"
            y="24"
            textAnchor="middle"
            fill="#29251F"
            fontSize="11"
            fontFamily="Georgia, serif"
            opacity="0.75"
          >
            {number}
          </text>
        ) : null}
      </svg>
    </span>
  );
}

/** Soft illustrated plate behind a hero scene */
export function PlateBackdrop({ className }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 520 440"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      <ellipse
        cx="260"
        cy="230"
        rx="238"
        ry="198"
        fill="#EFE4C8"
        opacity="0.45"
      />
      <path
        d="M42 230 C68 72, 452 62, 478 230 C452 382, 68 392, 42 230 Z"
        stroke="#29251F"
        strokeWidth="1.2"
        opacity="0.16"
        strokeDasharray="4 6"
      />
      <path
        d="M70 230 C90 110, 430 100, 450 230"
        stroke="#687A52"
        strokeWidth="0.9"
        opacity="0.18"
      />
    </svg>
  );
}
