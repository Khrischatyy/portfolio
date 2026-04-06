interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 140 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* DNA Helix icon */}
      <g>
        {/* Left strand */}
        <path
          d="M4 4C4 4 8 10 8 16C8 22 4 28 4 28"
          stroke="url(#logoGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Right strand */}
        <path
          d="M20 4C20 4 16 10 16 16C16 22 20 28 20 28"
          stroke="url(#logoGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Cross bars */}
        <line x1="6" y1="10" x2="18" y2="10" stroke="url(#logoGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
        <line x1="7" y1="16" x2="17" y2="16" stroke="url(#logoGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.9" />
        <line x1="6" y1="22" x2="18" y2="22" stroke="url(#logoGrad)" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      </g>

      {/* Text */}
      <text
        x="30"
        y="22"
        fontFamily="Space Grotesk, system-ui, sans-serif"
        fontWeight="700"
        fontSize="20"
        fill="white"
        letterSpacing="0.05em"
      >
        DNA
      </text>
      <text
        x="80"
        y="22"
        fontFamily="Space Grotesk, system-ui, sans-serif"
        fontWeight="400"
        fontSize="12"
        fill="#a0a0a0"
        letterSpacing="0.15em"
      >
        AGENCY
      </text>

      <defs>
        <linearGradient id="logoGrad" x1="4" y1="4" x2="20" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>
    </svg>
  );
}
