import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBackground() {
  // Track entire page scroll — active from top to bottom
  const { scrollYProgress } = useScroll();

  // Different speeds for each layer — creates depth
  const y1 = useTransform(scrollYProgress, [0, 1], ["0vh", "80vh"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0vh", "200vh"]);
  const y4 = useTransform(scrollYProgress, [0, 1], ["0vh", "120vh"]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1.5]);
  const scale2 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.85, 0.7]);

  // Stay visible the entire scroll — brighter values
  const opacity1 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.35, 0.25, 0.3, 0.2]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.2, 0.25, 0.15]);
  const opacity3 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.25, 0.18, 0.22, 0.12]);
  const opacity4 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.2, 0.25, 0.15]);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Layer 1 — Slowest: Large gradient rings + flowing lines */}
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
          <circle cx="200" cy="150" r="280" stroke="url(#ring1)" strokeWidth="1.5" fill="none" opacity="0.7" />
          <circle cx="200" cy="150" r="320" stroke="url(#ring1)" strokeWidth="0.8" fill="none" opacity="0.4" />
          <circle cx="200" cy="150" r="360" stroke="url(#ring1)" strokeWidth="0.4" fill="none" opacity="0.2" />

          {/* Large ring bottom-right */}
          <circle cx="1200" cy="700" r="350" stroke="url(#ring2)" strokeWidth="1.5" fill="none" opacity="0.6" />
          <circle cx="1200" cy="700" r="400" stroke="url(#ring2)" strokeWidth="0.8" fill="none" opacity="0.35" />

          {/* Mid ring center */}
          <circle cx="720" cy="450" r="200" stroke="url(#ring1)" strokeWidth="0.6" fill="none" opacity="0.2" />

          {/* Horizontal flowing lines */}
          <path d="M0 450 Q 360 350, 720 450 T 1440 450" stroke="url(#line1)" strokeWidth="1.2" fill="none" opacity="0.5" />
          <path d="M0 465 Q 360 365, 720 465 T 1440 465" stroke="url(#line1)" strokeWidth="0.6" fill="none" opacity="0.3" />
          <path d="M0 480 Q 360 380, 720 480 T 1440 480" stroke="url(#line1)" strokeWidth="0.3" fill="none" opacity="0.15" />

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
              <stop offset="20%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="80%" stopColor="#6366f1" />
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
          <polygon points="1100,120 1130,103 1160,120 1160,155 1130,172 1100,155" stroke="#8b5cf6" strokeWidth="1.2" fill="none" />
          <polygon points="1140,170 1170,153 1200,170 1200,205 1170,222 1140,205" stroke="#6366f1" strokeWidth="1.2" fill="none" />
          <polygon points="1060,170 1090,153 1120,170 1120,205 1090,222 1060,205" stroke="#a855f7" strokeWidth="0.8" fill="none" />

          {/* Diamond left */}
          <rect x="100" y="500" width="70" height="70" rx="4" stroke="#6366f1" strokeWidth="1.2" fill="none" transform="rotate(45 135 535)" />
          <rect x="115" y="515" width="40" height="40" rx="2" stroke="#a855f7" strokeWidth="0.8" fill="none" transform="rotate(45 135 535)" />

          {/* Triangle bottom-center */}
          <polygon points="720,750 770,660 820,750" stroke="#8b5cf6" strokeWidth="1.2" fill="none" />
          <polygon points="735,740 770,680 805,740" stroke="#6366f1" strokeWidth="0.6" fill="none" />

          {/* Larger circles scattered */}
          <circle cx="400" cy="200" r="6" fill="#6366f1" opacity="0.6" />
          <circle cx="900" cy="350" r="5" fill="#a855f7" opacity="0.5" />
          <circle cx="300" cy="700" r="7" fill="#8b5cf6" opacity="0.4" />
          <circle cx="1300" cy="450" r="5" fill="#6366f1" opacity="0.5" />
          <circle cx="600" cy="100" r="4" fill="#a855f7" opacity="0.6" />
          <circle cx="1050" cy="600" r="6" fill="#8b5cf6" opacity="0.4" />
          <circle cx="180" cy="300" r="3" fill="#6366f1" opacity="0.5" />
          <circle cx="1350" cy="200" r="4" fill="#a855f7" opacity="0.4" />
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
          <path d="M80 0 C 80 0, 150 100, 80 200 C 10 300, 150 400, 80 500 C 10 600, 150 700, 80 800 C 10 900, 150 1000, 80 1100" stroke="url(#dna1)" strokeWidth="1.8" fill="none" />
          <path d="M150 0 C 150 0, 80 100, 150 200 C 220 300, 80 400, 150 500 C 220 600, 80 700, 150 800 C 220 900, 80 1000, 150 1100" stroke="url(#dna1)" strokeWidth="1.8" fill="none" />
          {/* Cross bars */}
          <line x1="95" y1="100" x2="135" y2="100" stroke="#6366f1" strokeWidth="1" opacity="0.6" />
          <line x1="80" y1="200" x2="150" y2="200" stroke="#8b5cf6" strokeWidth="1" opacity="0.6" />
          <line x1="95" y1="300" x2="135" y2="300" stroke="#a855f7" strokeWidth="1" opacity="0.6" />
          <line x1="80" y1="400" x2="150" y2="400" stroke="#6366f1" strokeWidth="1" opacity="0.6" />
          <line x1="95" y1="500" x2="135" y2="500" stroke="#8b5cf6" strokeWidth="1" opacity="0.6" />
          <line x1="80" y1="600" x2="150" y2="600" stroke="#a855f7" strokeWidth="1" opacity="0.6" />

          {/* DNA strand right side */}
          <path d="M1290 -100 C 1290 -100, 1360 0, 1290 100 C 1220 200, 1360 300, 1290 400 C 1220 500, 1360 600, 1290 700 C 1220 800, 1360 900, 1290 1000" stroke="url(#dna2)" strokeWidth="1.8" fill="none" />
          <path d="M1360 -100 C 1360 -100, 1290 0, 1360 100 C 1430 200, 1290 300, 1360 400 C 1430 500, 1290 600, 1360 700 C 1430 800, 1290 900, 1360 1000" stroke="url(#dna2)" strokeWidth="1.8" fill="none" />
          <line x1="1305" y1="0" x2="1345" y2="0" stroke="#a855f7" strokeWidth="1" opacity="0.6" />
          <line x1="1290" y1="100" x2="1360" y2="100" stroke="#6366f1" strokeWidth="1" opacity="0.6" />
          <line x1="1305" y1="200" x2="1345" y2="200" stroke="#8b5cf6" strokeWidth="1" opacity="0.6" />
          <line x1="1290" y1="300" x2="1360" y2="300" stroke="#a855f7" strokeWidth="1" opacity="0.6" />
          <line x1="1305" y1="400" x2="1345" y2="400" stroke="#6366f1" strokeWidth="1" opacity="0.6" />
          <line x1="1290" y1="500" x2="1360" y2="500" stroke="#8b5cf6" strokeWidth="1" opacity="0.6" />

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

      {/* Layer 4 — Dotted arcs + cross grid */}
      <motion.div
        style={{ y: y4, rotate: rotate3, scale: scale2, opacity: opacity4 }}
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
          <line x1="580" y1="350" x2="860" y2="350" stroke="#6366f1" strokeWidth="0.5" opacity="0.5" />
          <line x1="580" y1="375" x2="860" y2="375" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.4" />
          <line x1="580" y1="400" x2="860" y2="400" stroke="#a855f7" strokeWidth="0.5" opacity="0.3" />
          <line x1="690" y1="260" x2="690" y2="490" stroke="#6366f1" strokeWidth="0.5" opacity="0.4" />
          <line x1="720" y1="260" x2="720" y2="490" stroke="#8b5cf6" strokeWidth="0.5" opacity="0.35" />
          <line x1="750" y1="260" x2="750" y2="490" stroke="#a855f7" strokeWidth="0.5" opacity="0.3" />

          {/* Dotted arcs */}
          <path d="M400 650 Q 720 500, 1040 650" stroke="#8b5cf6" strokeWidth="1" fill="none" strokeDasharray="6 10" opacity="0.4" />
          <path d="M370 680 Q 720 510, 1070 680" stroke="#6366f1" strokeWidth="0.6" fill="none" strokeDasharray="3 14" opacity="0.25" />

          {/* Extra scattered dots */}
          <circle cx="200" cy="800" r="3" fill="#6366f1" opacity="0.5" />
          <circle cx="500" cy="150" r="4" fill="#a855f7" opacity="0.4" />
          <circle cx="1100" cy="800" r="3" fill="#8b5cf6" opacity="0.5" />
          <circle cx="950" cy="100" r="2" fill="#6366f1" opacity="0.4" />
        </svg>
      </motion.div>
    </div>
  );
}
