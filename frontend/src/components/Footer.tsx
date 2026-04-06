import { ArrowUp } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-surface-border py-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <Logo className="h-5 md:h-6 w-auto opacity-50 shrink-0 hidden sm:block" />
          <p className="text-muted text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} DNA Agency
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-surface-elevated border border-surface-border flex items-center justify-center text-secondary hover:text-white hover:border-accent/50 transition-all duration-300 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </footer>
  );
}
