interface ProjectVisualProps {
  slug: string;
  className?: string;
}

export default function ProjectVisual({ slug, className = "" }: ProjectVisualProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      {slug === "recap-after-use" && <RecapVisual />}
      {slug === "red-collar" && <RedCollarVisual />}
      {slug === "aic" && <AicVisual />}
      {slug === "duplitrade" && <DupliTradeVisual />}
    </div>
  );
}

function RecapVisual() {
  return (
    <svg viewBox="0 0 640 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="640" height="400" fill="#0d0d0d" />
      {/* Flowing scroll lines — represents scroll-driven storytelling */}
      <path d="M0 200 C 80 120, 160 280, 240 200 S 400 120, 480 200 S 560 280, 640 200" stroke="url(#recap1)" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M0 210 C 80 130, 160 290, 240 210 S 400 130, 480 210 S 560 290, 640 210" stroke="url(#recap1)" strokeWidth="1" fill="none" opacity="0.3" />
      <path d="M0 220 C 80 140, 160 300, 240 220 S 400 140, 480 220 S 560 300, 640 220" stroke="url(#recap1)" strokeWidth="0.5" fill="none" opacity="0.15" />
      {/* Staggered horizontal bars — timeline feel */}
      <rect x="80" y="80" width="120" height="4" rx="2" fill="#6366f1" opacity="0.7" />
      <rect x="120" y="96" width="80" height="4" rx="2" fill="#8b5cf6" opacity="0.5" />
      <rect x="100" y="112" width="100" height="4" rx="2" fill="#a855f7" opacity="0.3" />
      {/* Circle accents */}
      <circle cx="500" cy="100" r="40" stroke="#6366f1" strokeWidth="1.5" fill="none" opacity="0.4" />
      <circle cx="500" cy="100" r="25" stroke="#a855f7" strokeWidth="1" fill="none" opacity="0.3" />
      <circle cx="500" cy="100" r="8" fill="#8b5cf6" opacity="0.6" />
      {/* Bottom dots */}
      <circle cx="200" cy="320" r="3" fill="#6366f1" opacity="0.5" />
      <circle cx="220" cy="330" r="2" fill="#a855f7" opacity="0.4" />
      <circle cx="240" cy="320" r="3" fill="#8b5cf6" opacity="0.5" />
      <circle cx="260" cy="330" r="2" fill="#6366f1" opacity="0.4" />
      <defs>
        <linearGradient id="recap1" x1="0" y1="200" x2="640" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" />
          <stop offset="0.5" stopColor="#a855f7" />
          <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function RedCollarVisual() {
  return (
    <svg viewBox="0 0 640 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="640" height="400" fill="#0d0d0d" />
      {/* Explosive radial pattern — creative energy */}
      <circle cx="320" cy="200" r="140" stroke="url(#rc1)" strokeWidth="1.5" fill="none" opacity="0.3" />
      <circle cx="320" cy="200" r="100" stroke="url(#rc1)" strokeWidth="1" fill="none" opacity="0.4" />
      <circle cx="320" cy="200" r="60" stroke="url(#rc1)" strokeWidth="0.8" fill="none" opacity="0.5" />
      {/* Radiating lines */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
        <line
          key={angle}
          x1={320 + Math.cos((angle * Math.PI) / 180) * 30}
          y1={200 + Math.sin((angle * Math.PI) / 180) * 30}
          x2={320 + Math.cos((angle * Math.PI) / 180) * 160}
          y2={200 + Math.sin((angle * Math.PI) / 180) * 160}
          stroke={angle % 60 === 0 ? "#ef4444" : "#8b5cf6"}
          strokeWidth="0.6"
          opacity="0.3"
        />
      ))}
      {/* Center spark */}
      <circle cx="320" cy="200" r="12" fill="url(#rc2)" opacity="0.8" />
      <circle cx="320" cy="200" r="20" fill="url(#rc2)" opacity="0.2" />
      {/* Corner brackets — frame composition */}
      <path d="M60 60 L60 100" stroke="#ef4444" strokeWidth="1.5" opacity="0.5" />
      <path d="M60 60 L100 60" stroke="#ef4444" strokeWidth="1.5" opacity="0.5" />
      <path d="M580 60 L580 100" stroke="#ef4444" strokeWidth="1.5" opacity="0.5" />
      <path d="M580 60 L540 60" stroke="#ef4444" strokeWidth="1.5" opacity="0.5" />
      <path d="M60 340 L60 300" stroke="#ef4444" strokeWidth="1.5" opacity="0.5" />
      <path d="M60 340 L100 340" stroke="#ef4444" strokeWidth="1.5" opacity="0.5" />
      <path d="M580 340 L580 300" stroke="#ef4444" strokeWidth="1.5" opacity="0.5" />
      <path d="M580 340 L540 340" stroke="#ef4444" strokeWidth="1.5" opacity="0.5" />
      <defs>
        <radialGradient id="rc1" cx="320" cy="200" r="140" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ef4444" />
          <stop offset="1" stopColor="#8b5cf6" />
        </radialGradient>
        <radialGradient id="rc2" cx="320" cy="200" r="12" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#ef4444" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function AicVisual() {
  return (
    <svg viewBox="0 0 640 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="640" height="400" fill="#0d0d0d" />
      {/* Structured grid — represents system architecture */}
      {[0, 1, 2, 3, 4].map((row) =>
        [0, 1, 2, 3, 4, 5].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={100 + col * 80}
            y={60 + row * 65}
            width="60"
            height="45"
            rx="6"
            stroke={
              (row + col) % 3 === 0
                ? "#3b82f6"
                : (row + col) % 3 === 1
                  ? "#6366f1"
                  : "#1e1e1e"
            }
            strokeWidth={(row + col) % 3 === 2 ? "0.3" : "0.8"}
            fill={(row === 1 && col === 2) || (row === 3 && col === 4) ? "#6366f1" : "none"}
            opacity={(row + col) % 3 === 2 ? 0.15 : 0.3}
          />
        ))
      )}
      {/* Connecting lines between highlighted blocks */}
      <path d="M290 105 L420 257" stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.4" />
      {/* Small accent dots at intersections */}
      <circle cx="290" cy="105" r="3" fill="#3b82f6" opacity="0.7" />
      <circle cx="420" cy="257" r="3" fill="#6366f1" opacity="0.7" />
    </svg>
  );
}

function DupliTradeVisual() {
  return (
    <svg viewBox="0 0 640 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect width="640" height="400" fill="#0d0d0d" />
      {/* Candlestick-inspired chart — fintech */}
      {[
        { x: 80, h: 100, y: 180, up: true },
        { x: 120, h: 60, y: 200, up: false },
        { x: 160, h: 130, y: 150, up: true },
        { x: 200, h: 50, y: 220, up: false },
        { x: 240, h: 90, y: 170, up: true },
        { x: 280, h: 110, y: 160, up: true },
        { x: 320, h: 40, y: 230, up: false },
        { x: 360, h: 140, y: 140, up: true },
        { x: 400, h: 70, y: 190, up: false },
        { x: 440, h: 120, y: 150, up: true },
        { x: 480, h: 55, y: 210, up: false },
        { x: 520, h: 95, y: 165, up: true },
      ].map((bar, i) => (
        <g key={i}>
          <line x1={bar.x + 10} y1={bar.y - 20} x2={bar.x + 10} y2={bar.y + bar.h + 20} stroke={bar.up ? "#10b981" : "#ef4444"} strokeWidth="0.5" opacity="0.3" />
          <rect
            x={bar.x}
            y={bar.y}
            width="20"
            height={bar.h}
            rx="2"
            fill={bar.up ? "#10b981" : "#ef4444"}
            opacity={0.15 + (i % 3) * 0.1}
          />
        </g>
      ))}
      {/* Trend line overlay */}
      <path d="M90 250 L160 150 L280 170 L360 130 L440 155 L530 120" stroke="url(#dt1)" strokeWidth="1.5" fill="none" opacity="0.6" />
      {/* Glow dot at latest price */}
      <circle cx="530" cy="120" r="4" fill="#10b981" opacity="0.8" />
      <circle cx="530" cy="120" r="12" fill="#10b981" opacity="0.15" />
      {/* Horizontal grid lines */}
      {[120, 180, 240, 300].map((y) => (
        <line key={y} x1="60" y1={y} x2="580" y2={y} stroke="#222" strokeWidth="0.5" opacity="0.5" />
      ))}
      <defs>
        <linearGradient id="dt1" x1="90" y1="0" x2="530" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10b981" />
          <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
