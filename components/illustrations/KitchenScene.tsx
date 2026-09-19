"use client";

import { motion, useReducedMotion } from "motion/react";
import { DrawPath } from "@/components/ui/DrawPath";
import { storyDuration, storyEase, viewportOnce } from "@/lib/motion/storybook";

type KitchenSceneProps = {
  className?: string;
};

/**
 * Composed hand-drawn kitchen scene — identity anchor for the site.
 * Subtle independent motions; decorative strokes draw on view.
 */
export function KitchenScene({ className }: KitchenSceneProps) {
  const reduceMotion = useReducedMotion();

  const float = (y = 3, duration = 5, delay = 0) =>
    reduceMotion
      ? {}
      : {
          animate: { y: [0, -y, 0] },
          transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay,
          },
        };

  return (
    <div className={className} aria-hidden>
      <svg
        viewBox="0 0 520 440"
        className="h-auto w-full max-w-full"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Hand-drawn illustration of a warm Kannada home kitchen"
      >
        <defs>
          <linearGradient id="windowGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F7F0DF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#D9A441" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="leafGreen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7A8F5E" />
            <stop offset="100%" stopColor="#687A52" />
          </linearGradient>
        </defs>

        <ellipse
          cx="260"
          cy="230"
          rx="230"
          ry="190"
          fill="#EFE4C8"
          opacity="0.55"
        />
        <DrawPath
          d="M48 228 C70 80, 450 70, 472 228 C450 370, 70 380, 48 228 Z"
          stroke="#29251F"
          strokeWidth={1.4}
          opacity={0.18}
          dashArray="3 5"
          delay={0.2}
          duration={1.6}
        />

        {/* Kitchen window */}
        <g transform="translate(318, 42)">
          <path
            d="M8 18 C12 6, 148 4, 154 18 L152 118 C148 128, 12 130, 10 118 Z"
            fill="url(#windowGlow)"
            stroke="#29251F"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M81 18 V118 M10 68 H152"
            stroke="#29251F"
            strokeWidth="1.3"
            opacity="0.45"
          />
          <DrawPath
            d="M24 34 Q48 42 72 32"
            stroke="#D9A441"
            strokeWidth={1.2}
            opacity={0.5}
            delay={0.35}
          />
          {/* Curtain sway */}
          <motion.path
            d="M12 20 Q28 40 18 70 Q30 95 14 112"
            stroke="#B85C38"
            strokeWidth="1.4"
            fill="none"
            opacity="0.35"
            strokeLinecap="round"
            animate={
              reduceMotion
                ? undefined
                : {
                    d: [
                      "M12 20 Q28 40 18 70 Q30 95 14 112",
                      "M12 20 Q32 42 20 72 Q28 96 14 112",
                      "M12 20 Q28 40 18 70 Q30 95 14 112",
                    ],
                  }
            }
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>

        {/* Shelf with jars */}
        <g transform="translate(52, 78)">
          <DrawPath
            d="M4 78 C50 74, 140 74, 188 80"
            stroke="#29251F"
            strokeWidth={2}
            opacity={0.55}
            delay={0.15}
          />
          <g transform="translate(28, 28)">
            <path
              d="M6 8 H34 V48 C34 54, 6 54, 6 48 Z"
              fill="#F7F0DF"
              stroke="#29251F"
              strokeWidth="1.5"
            />
            <rect x="10" y="2" width="20" height="8" rx="2" fill="#B85C38" opacity="0.7" />
            <path d="M12 22 H28" stroke="#687A52" strokeWidth="1.2" opacity="0.5" />
          </g>
          <g transform="translate(78, 34)">
            <path
              d="M8 4 H30 C32 4, 34 8, 34 12 V42 C34 48, 8 48, 8 42 Z"
              fill="#F7F0DF"
              stroke="#29251F"
              strokeWidth="1.5"
            />
            <ellipse cx="21" cy="4" rx="11" ry="4" fill="#D9A441" opacity="0.75" />
            <circle cx="21" cy="26" r="5" fill="#B85C38" opacity="0.35" />
          </g>
          <g transform="translate(128, 30)">
            <path
              d="M10 10 H36 V50 C36 56, 10 56, 10 50 Z"
              fill="#F7F0DF"
              stroke="#29251F"
              strokeWidth="1.5"
            />
            <path d="M14 4 H32 V12 H14 Z" fill="#687A52" opacity="0.55" />
            <path
              d="M16 28 Q23 22 30 30 Q23 36 16 28"
              fill="#B85C38"
              opacity="0.4"
            />
          </g>
        </g>

        {/* Idli steamer + steam */}
        <g transform="translate(78, 168)">
          <ellipse cx="70" cy="148" rx="62" ry="14" fill="#29251F" opacity="0.08" />
          <path
            d="M18 90 C18 70, 122 70, 122 90 L118 140 C118 152, 22 152, 22 140 Z"
            fill="#EFE4C8"
            stroke="#29251F"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M28 100 H112 M30 118 H110 M32 134 H108"
            stroke="#29251F"
            strokeWidth="1.2"
            opacity="0.25"
            strokeLinecap="round"
          />
          <path
            d="M22 90 C30 62, 110 62, 118 90"
            fill="#F7F0DF"
            stroke="#29251F"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <ellipse cx="70" cy="68" rx="10" ry="6" fill="#B85C38" opacity="0.55" />
          <path d="M70 58 V66" stroke="#29251F" strokeWidth="1.5" strokeLinecap="round" />

          <g>
            <motion.path
              d="M48 52 C46 40, 56 36, 54 24"
              stroke="#687A52"
              strokeWidth="1.4"
              fill="none"
              strokeLinecap="round"
              opacity="0.45"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -4, 0],
                      opacity: [0.35, 0.5, 0.35],
                    }
              }
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M70 48 C68 34, 78 30, 74 16"
              stroke="#687A52"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              opacity="0.4"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -5, 0],
                      opacity: [0.3, 0.48, 0.3],
                    }
              }
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
            />
            <motion.path
              d="M92 54 C94 42, 84 38, 88 26"
              stroke="#687A52"
              strokeWidth="1.3"
              fill="none"
              strokeLinecap="round"
              opacity="0.35"
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -3.5, 0],
                      opacity: [0.28, 0.42, 0.28],
                    }
              }
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            />
          </g>
        </g>

        {/* Banana leaf — subtle float */}
        <g transform="translate(210, 250)">
          <motion.g {...float(2.5, 6, 0.2)}>
          <path
            d="M20 70 C40 20, 160 18, 190 68 C160 108, 40 112, 20 70 Z"
            fill="url(#leafGreen)"
            stroke="#29251F"
            strokeWidth="1.6"
            opacity="0.9"
            strokeLinejoin="round"
          />
          <path
            d="M40 68 C70 48, 140 46, 170 70"
            stroke="#29251F"
            strokeWidth="1"
            fill="none"
            opacity="0.25"
          />
          <path
            d="M55 55 C80 70, 120 72, 155 58"
            stroke="#29251F"
            strokeWidth="0.8"
            fill="none"
            opacity="0.2"
          />
          <ellipse cx="70" cy="62" rx="22" ry="14" fill="#F7F0DF" stroke="#29251F" strokeWidth="1.3" />
          <ellipse cx="110" cy="58" rx="20" ry="13" fill="#FAF6EB" stroke="#29251F" strokeWidth="1.3" />
          <ellipse cx="95" cy="78" rx="18" ry="11" fill="#F7F0DF" stroke="#29251F" strokeWidth="1.2" />
          <circle cx="145" cy="72" r="10" fill="#687A52" opacity="0.55" stroke="#29251F" strokeWidth="1" />
          <circle cx="48" cy="78" r="8" fill="#B85C38" opacity="0.5" stroke="#29251F" strokeWidth="1" />
          </motion.g>
        </g>

        {/* Filter coffee — tiny tilt */}
        <g transform="translate(368, 268)">
        <motion.g
          style={{ transformOrigin: "48px 88px" }}
          animate={
            reduceMotion
              ? undefined
              : { rotate: [0, 1.2, 0, -0.8, 0] }
          }
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <ellipse cx="48" cy="98" rx="40" ry="10" fill="#29251F" opacity="0.07" />
          <ellipse
            cx="48"
            cy="88"
            rx="42"
            ry="12"
            fill="#EFE4C8"
            stroke="#29251F"
            strokeWidth="1.5"
          />
          <path
            d="M18 70 C18 58, 78 58, 78 70 L74 88 C74 94, 22 94, 22 88 Z"
            fill="#D9A441"
            stroke="#29251F"
            strokeWidth="1.6"
            opacity="0.85"
          />
          <path
            d="M34 42 H62 L58 78 H38 Z"
            fill="#D9A441"
            stroke="#29251F"
            strokeWidth="1.6"
            opacity="0.9"
          />
          <ellipse cx="48" cy="42" rx="14" ry="5" fill="#B85C38" opacity="0.45" stroke="#29251F" strokeWidth="1.2" />
          <path
            d="M40 54 H56"
            stroke="#29251F"
            strokeWidth="1"
            opacity="0.3"
            strokeLinecap="round"
          />
        </motion.g>
        </g>

        {/* Needle & thread — draw once then gentle breathe */}
        <g transform="translate(430, 160)">
          <motion.path
            d="M8 40 C20 28, 18 12, 32 8 C44 4, 48 18, 38 24 C28 30, 22 42, 34 52"
            stroke="#B85C38"
            strokeWidth="1.3"
            fill="none"
            strokeLinecap="round"
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.55 }}
            viewport={viewportOnce}
            transition={{ duration: storyDuration.draw, ease: storyEase, delay: 0.4 }}
          />
          <path
            d="M34 52 L42 62"
            stroke="#29251F"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.55"
          />
          <circle cx="43" cy="64" r="2" fill="#29251F" opacity="0.45" />
        </g>

        {/* Decorative dots last */}
        <motion.g
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
        >
          <circle cx="70" cy="360" r="2.5" fill="#D9A441" opacity="0.5" />
          <circle cx="450" cy="380" r="2" fill="#B85C38" opacity="0.4" />
          <DrawPath
            d="M300 400 Q310 392 320 400"
            stroke="#687A52"
            strokeWidth={1.2}
            opacity={0.35}
            delay={0.7}
          />
        </motion.g>
      </svg>
    </div>
  );
}
