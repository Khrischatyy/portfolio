import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBackground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Different speeds for each layer — creates depth
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0%", "45%"]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.08, 0]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [0.12, 0.06, 0]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.6, 1], [0.1, 0.05, 0]);

  return (
    <div
      ref={ref}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Layer 1 — Slowest: Large gradient rings */}
      <motion.div
        style={{ y: y1, opacity: opacity1, scale: scale1 }}
        className="absolute inset-0 will-change-transform"
      >
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Large ring top-left */}
          <circle cx="200" cy="150" r="280" stroke="url(#ring1)" strokeWidth="1" fill="none" opacity="0.6" />
          <circle cx="200" cy="150" r="320" stroke="url(#ring1)" strokeWidth="0.5" fill="none" opacity="0.3" />

          {/* Large ring bottom-right */}
          <circle cx="1200" cy="700" r="350" stroke="url(#ring2)" strokeWidth="1" fill="none" opacity="0.5" />
          <circle cx="1200" cy="700" r="400" stroke="url(#ring2)" strokeWidth="0.5" fill="none" opacity="0.25" />

          {/* Horizontal flowing line */}
          <path d="M0 450 Q 360 380, 720 450 T 1440 450" stroke="url(#line1)" strokeWidth="0.8" fill="none" opacity="0.4" />
          <path d="M0 460 Q 360 390, 720 460 T 1440 460" stroke="url(#line1)" strokeWidth="0.4" fill="none" opacity="0.2" />

          <defs>
            <linearGradient id="ring1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <linearGradient id="ring2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <linearGradient id="line1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="#6366f1" />
              <stop offset="70%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Layer 2 — Medium: Geometric shapes */}
      <motion.div
        style={{ y: y2, opacity: opacity2, rotate: rotate1 }}
        className="absolute inset-0 will-change-transform"
      >
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Hexagon cluster top-right */}
          <polygon points="1100,120 1130,103 1160,120 1160,155 1130,172 1100,155" stroke="#8b5cf6" strokeWidth="0.8" fill="none" />
          <polygon points="1140,170 1170,153 1200,170 1200,205 1170,222 1140,205" stroke="#6366f1" strokeWidth="0.8" fill="none" />
          <polygon points="1060,170 1090,153 1120,170 1120,205 1090,222 1060,205" stroke="#a855f7" strokeWidth="0.6" fill="none" />

          {/* Diamond left */}
          <rect x="100" y="500" width="60" height="60" rx="4" stroke="#6366f1" strokeWidth="0.8" fill="none" transform="rotate(45 130 530)" />
          <rect x="110" y="510" width="40" height="40" rx="2" stroke="#a855f7" strokeWidth="0.5" fill="none" transform="rotate(45 130 530)" />

          {/* Triangle bottom-center */}
          <polygon points="720,750 760,680 800,750" stroke="#8b5cf6" strokeWidth="0.8" fill="none" />
          <polygon points="730,740 760,695 790,740" stroke="#6366f1" strokeWidth="0.5" fill="none" />

          {/* Small circles scattered */}
          <circle cx="400" cy="200" r="4" fill="#6366f1" opacity="0.5" />
          <circle cx="900" cy="350" r="3" fill="#a855f7" opacity="0.4" />
          <circle cx="300" cy="700" r="5" fill="#8b5cf6" opacity="0.3" />
          <circle cx="1300" cy="450" r="3" fill="#6366f1" opacity="0.4" />
          <circle cx="600" cy="100" r="2" fill="#a855f7" opacity="0.5" />
          <circle cx="1050" cy="600" r="4" fill="#8b5cf6" opacity="0.3" />
        </svg>
      </motion.div>

      {/* Layer 3 — Fast: DNA helix strands */}
      <motion.div
        style={{ y: y3, opacity: opacity3, rotate: rotate2 }}
        className="absolute inset-0 will-change-transform"
      >
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* DNA strand left side */}
          <path d="M80 0 C 80 0, 140 100, 80 200 C 20 300, 140 400, 80 500 C 20 600, 140 700, 80 800 C 20 900, 140 1000, 80 1100" stroke="url(#dna1)" strokeWidth="1.2" fill="none" />
          <path d="M140 0 C 140 0, 80 100, 140 200 C 200 300, 80 400, 140 500 C 200 600, 80 700, 140 800 C 200 900, 80 1000, 140 1100" stroke="url(#dna1)" strokeWidth="1.2" fill="none" />
          {/* Cross bars */}
          <line x1="95" y1="100" x2="125" y2="100" stroke="#6366f1" strokeWidth="0.6" opacity="0.5" />
          <line x1="80" y1="200" x2="140" y2="200" stroke="#8b5cf6" strokeWidth="0.6" opacity="0.5" />
          <line x1="95" y1="300" x2="125" y2="300" stroke="#a855f7" strokeWidth="0.6" opacity="0.5" />
          <line x1="80" y1="400" x2="140" y2="400" stroke="#6366f1" strokeWidth="0.6" opacity="0.5" />
          <line x1="95" y1="500" x2="125" y2="500" stroke="#8b5cf6" strokeWidth="0.6" opacity="0.5" />

          {/* DNA strand right side */}
          <path d="M1300 -100 C 1300 -100, 1360 0, 1300 100 C 1240 200, 1360 300, 1300 400 C 1240 500, 1360 600, 1300 700 C 1240 800, 1360 900, 1300 1000" stroke="url(#dna2)" strokeWidth="1.2" fill="none" />
          <path d="M1360 -100 C 1360 -100, 1300 0, 1360 100 C 1420 200, 1300 300, 1360 400 C 1420 500, 1300 600, 1360 700 C 1420 800, 1300 900, 1360 1000" stroke="url(#dna2)" strokeWidth="1.2" fill="none" />
          <line x1="1315" y1="0" x2="1345" y2="0" stroke="#a855f7" strokeWidth="0.6" opacity="0.5" />
          <line x1="1300" y1="100" x2="1360" y2="100" stroke="#6366f1" strokeWidth="0.6" opacity="0.5" />
          <line x1="1315" y1="200" x2="1345" y2="200" stroke="#8b5cf6" strokeWidth="0.6" opacity="0.5" />
          <line x1="1300" y1="300" x2="1360" y2="300" stroke="#a855f7" strokeWidth="0.6" opacity="0.5" />

          <defs>
            <linearGradient id="dna1" x1="80" y1="0" x2="80" y2="1100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <linearGradient id="dna2" x1="1300" y1="-100" x2="1300" y2="1000" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Layer 4 — Dotted grid with parallax */}
      <motion.div
        style={{ y: y4, rotate: rotate3, scale: scale2, opacity: opacity1 }}
        className="absolute inset-0 will-change-transform"
      >
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Cross pattern center */}
          <line x1="620" y1="350" x2="820" y2="350" stroke="#6366f1" strokeWidth="0.3" opacity="0.4" />
          <line x1="620" y1="370" x2="820" y2="370" stroke="#8b5cf6" strokeWidth="0.3" opacity="0.3" />
          <line x1="620" y1="390" x2="820" y2="390" stroke="#a855f7" strokeWidth="0.3" opacity="0.2" />
          <line x1="700" y1="280" x2="700" y2="460" stroke="#6366f1" strokeWidth="0.3" opacity="0.3" />
          <line x1="720" y1="280" x2="720" y2="460" stroke="#8b5cf6" strokeWidth="0.3" opacity="0.25" />
          <line x1="740" y1="280" x2="740" y2="460" stroke="#a855f7" strokeWidth="0.3" opacity="0.2" />

          {/* Dotted arc */}
          <path d="M500 600 Q 720 500, 940 600" stroke="#8b5cf6" strokeWidth="0.6" fill="none" strokeDasharray="4 8" opacity="0.3" />
          <path d="M480 620 Q 720 510, 960 620" stroke="#6366f1" strokeWidth="0.4" fill="none" strokeDasharray="2 12" opacity="0.2" />
        </svg>
      </motion.div>
    </div>
  );
}
