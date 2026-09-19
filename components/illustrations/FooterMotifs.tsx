/** Adult ink-line motifs for the site footer — restrained, kitchen-led. */

type OrnamentProps = {
  className?: string;
};

/** Soft plate rim + leaf wash behind footer content */
export function FooterBackdrop({ className }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 900 420"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <ellipse
        cx="720"
        cy="80"
        rx="220"
        ry="160"
        fill="#D9A441"
        opacity="0.07"
      />
      <ellipse
        cx="120"
        cy="340"
        rx="260"
        ry="140"
        fill="#687A52"
        opacity="0.08"
      />
      <path
        d="M40 210 C120 40, 780 30, 860 210 C780 380, 120 390, 40 210 Z"
        stroke="#29251F"
        strokeWidth="1.1"
        opacity="0.1"
        strokeDasharray="5 7"
      />
      <path
        d="M90 210 C160 90, 740 80, 810 210"
        stroke="#B85C38"
        strokeWidth="0.9"
        opacity="0.12"
      />
      <path
        d="M70 300 C140 270, 220 320, 300 295 C380 270, 450 330, 540 300"
        stroke="#687A52"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.18"
      />
    </svg>
  );
}

/** Pot with gentle steam — contact “kitchen” mark */
export function InkPot({ className }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 56 56"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 26 C12 18, 44 18, 44 26 L42 42 C42 48, 14 48, 14 42 Z"
        stroke="#29251F"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path
        d="M18 26 C20 16, 36 16, 38 26"
        stroke="#29251F"
        strokeWidth="1.35"
      />
      <path
        d="M10 28 H46"
        stroke="#B85C38"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M24 12 C23 8, 29 6, 28 3"
        stroke="#687A52"
        strokeWidth="1.15"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M32 13 C34 8, 30 6, 32 3.5"
        stroke="#687A52"
        strokeWidth="1.05"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}

/** Wrapped parcel with mustard seal */
export function InkParcel({ className }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 56 56"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M12 22 L28 12 L44 22 L44 40 L28 50 L12 40 Z"
        stroke="#29251F"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path d="M12 22 L28 32 L44 22" stroke="#29251F" strokeWidth="1.25" />
      <path d="M28 32 V50" stroke="#29251F" strokeWidth="1.25" />
      <circle
        cx="28"
        cy="26"
        r="4.5"
        fill="#D9A441"
        opacity="0.45"
        stroke="#B85C38"
        strokeWidth="1"
      />
    </svg>
  );
}

/** Simple plate with two morsels */
export function InkPlate({ className }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 56 56"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <ellipse
        cx="28"
        cy="30"
        rx="20"
        ry="12"
        stroke="#29251F"
        strokeWidth="1.4"
      />
      <ellipse
        cx="28"
        cy="30"
        rx="12"
        ry="7"
        stroke="#687A52"
        strokeWidth="1"
        opacity="0.45"
      />
      <ellipse
        cx="24"
        cy="28"
        rx="4"
        ry="2.8"
        fill="#F7F0DF"
        stroke="#29251F"
        strokeWidth="1"
      />
      <circle
        cx="34"
        cy="29"
        r="2.8"
        fill="#B85C38"
        opacity="0.45"
        stroke="#29251F"
        strokeWidth="0.9"
      />
    </svg>
  );
}

/** Needle + thread for tailoring thread in the kitchen story */
export function InkNeedle({ className }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 56 56"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M18 40 L36 14"
        stroke="#29251F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <ellipse
        cx="38"
        cy="11"
        rx="3.2"
        ry="2.2"
        stroke="#B85C38"
        strokeWidth="1.2"
        transform="rotate(-38 38 11)"
      />
      <path
        d="M16 42 C12 46, 22 48, 20 52"
        stroke="#687A52"
        strokeWidth="1.15"
        strokeLinecap="round"
        opacity="0.65"
      />
    </svg>
  );
}

/** Hand-drawn clock for hours */
export function InkClock({ className }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle
        cx="20"
        cy="20"
        r="13"
        stroke="#29251F"
        strokeWidth="1.35"
        opacity="0.7"
      />
      <circle
        cx="20"
        cy="20"
        r="9.5"
        stroke="#B85C38"
        strokeWidth="0.9"
        opacity="0.35"
      />
      <path
        d="M20 13 V21 L25 24"
        stroke="#29251F"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Map pin sketch for collect / visit */
export function InkPin({ className }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M20 6 C26 6 30 11 30 16.5 C30 23 20 32 20 32 C20 32 10 23 10 16.5 C10 11 14 6 20 6 Z"
        stroke="#29251F"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <circle
        cx="20"
        cy="16"
        r="3.2"
        stroke="#B85C38"
        strokeWidth="1.15"
      />
    </svg>
  );
}

/** Dense curry-leaf cluster */
export function InkLeafSpray({ className }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 120 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M8 36 C28 32, 40 18, 52 10 C56 18, 62 30, 78 36 C90 40, 104 34, 112 28"
        stroke="#687A52"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M52 10 C48 20, 44 28, 40 36"
        stroke="#687A52"
        strokeWidth="1.05"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M52 12 C58 22, 64 30, 70 36"
        stroke="#B85C38"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M34 22 C30 18, 36 12, 40 14"
        stroke="#687A52"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M66 20 C72 16, 74 24, 70 26"
        stroke="#687A52"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.45"
      />
      <path
        d="M88 30 C94 26, 98 32, 94 34"
        stroke="#D9A441"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

/** Dashed stitch rule */
export function InkStitch({ className }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 280 12"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      preserveAspectRatio="none"
    >
      <path
        d="M2 6.5 C24 3, 40 9, 62 5.5 C84 2, 108 10, 132 6 C156 2.5, 178 9.5, 202 5.8 C224 2.5, 248 9, 278 6"
        stroke="#29251F"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeDasharray="3.5 5"
        opacity="0.28"
      />
      <path
        d="M2 7 C30 4, 58 10, 90 6 C122 2, 150 10, 180 6.5 C210 3, 245 9, 278 6.5"
        stroke="#B85C38"
        strokeWidth="0.7"
        strokeLinecap="round"
        opacity="0.22"
      />
    </svg>
  );
}
