type MarkProps = {
  className?: string;
};

function SvgShell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function PhoneMark({ className }: MarkProps) {
  return (
    <SvgShell className={className}>
      <rect
        x="20"
        y="10"
        width="24"
        height="44"
        rx="4"
        stroke="#29251F"
        strokeWidth="1.6"
      />
      <path d="M28 14h8" stroke="#B85C38" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="32" cy="46" r="2.5" fill="#687A52" opacity="0.7" />
    </SvgShell>
  );
}

export function PotMark({ className }: MarkProps) {
  return (
    <SvgShell className={className}>
      <path
        d="M16 28 C16 20, 48 20, 48 28 L46 46 C46 52, 18 52, 18 46 Z"
        stroke="#29251F"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M22 28 C24 18, 40 18, 42 28" stroke="#29251F" strokeWidth="1.5" />
      <path
        d="M28 14 C27 10, 33 8, 32 4"
        stroke="#687A52"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M36 16 C38 11, 34 9, 36 5"
        stroke="#687A52"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.45"
      />
    </SvgShell>
  );
}

export function ParcelMark({ className }: MarkProps) {
  return (
    <SvgShell className={className}>
      <path
        d="M14 24 L32 14 L50 24 L50 44 L32 54 L14 44 Z"
        stroke="#29251F"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M14 24 L32 34 L50 24" stroke="#29251F" strokeWidth="1.4" />
      <path d="M32 34 V54" stroke="#29251F" strokeWidth="1.4" />
      <circle cx="32" cy="28" r="5" fill="#D9A441" opacity="0.55" stroke="#B85C38" strokeWidth="1" />
    </SvgShell>
  );
}

export function PlateMark({ className }: MarkProps) {
  return (
    <SvgShell className={className}>
      <ellipse
        cx="32"
        cy="34"
        rx="22"
        ry="14"
        fill="#687A52"
        opacity="0.35"
        stroke="#29251F"
        strokeWidth="1.5"
      />
      <ellipse cx="28" cy="32" rx="7" ry="5" fill="#F7F0DF" stroke="#29251F" strokeWidth="1.2" />
      <ellipse cx="38" cy="34" rx="6" ry="4.5" fill="#F7F0DF" stroke="#29251F" strokeWidth="1.2" />
      <circle cx="42" cy="30" r="3.5" fill="#B85C38" opacity="0.5" stroke="#29251F" strokeWidth="1" />
    </SvgShell>
  );
}

export function ProcessMark({
  mark,
  className,
}: {
  mark: "phone" | "pot" | "parcel" | "plate";
  className?: string;
}) {
  switch (mark) {
    case "phone":
      return <PhoneMark className={className} />;
    case "pot":
      return <PotMark className={className} />;
    case "parcel":
      return <ParcelMark className={className} />;
    case "plate":
      return <PlateMark className={className} />;
  }
}
