import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const navLinks = [
  { label: "Work", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const container = document.getElementById("scroll-root");
    if (!container) return;
    const onScroll = () => setScrolled(container.scrollTop > 50);
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-dark/80 backdrop-blur-xl border-b border-surface-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300"
        >
          <img
            src="/QS.svg"
            alt="QS"
            className="h-9 md:h-10 w-auto"
          />
          <Logo className="h-12 md:h-14 w-auto" />
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-secondary hover:text-white transition-colors duration-300 tracking-wide uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative z-50 p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-dark/95 backdrop-blur-2xl z-40 flex items-center justify-center md:hidden"
          >
            <ul className="flex flex-col items-center gap-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-3xl font-heading font-semibold text-white hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
