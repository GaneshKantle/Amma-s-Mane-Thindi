import type { Metadata, Viewport } from "next";
import { Figtree, Fraunces, Noto_Serif_Kannada } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants/site";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const notoKannada = Noto_Serif_Kannada({
  subsets: ["kannada"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-kannada",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Homemade Karnataka Food & Tailoring`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "AMMA'S MANE TINDI",
    "Karnataka homemade food",
    "home tindi",
    "Kannada kitchen",
    "tailoring",
    "bulk orders",
  ],
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/food/logo.jpeg",
        width: 512,
        height: 512,
        alt: SITE.name,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F0DF",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${fraunces.variable} ${notoKannada.variable} h-full antialiased`}
    >
      <body className="paper-grain flex min-h-full flex-col overflow-x-hidden bg-paper font-sans text-ink">
        <a
          href="#main-content"
          className="absolute top-3 left-3 z-[70] -translate-y-[200%] rounded-md bg-cream px-4 py-3 text-sm font-semibold text-ink shadow-md transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
