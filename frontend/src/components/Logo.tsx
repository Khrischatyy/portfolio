interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <img
      src="/QUESTICITY_SOFT.svg"
      alt="Questicity Soft"
      className={className}
    />
  );
}
