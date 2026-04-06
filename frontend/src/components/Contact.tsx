import { motion } from "framer-motion";
import { Github, Send, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/khrischatyy" },
  { icon: Send, label: "Telegram", href: "https://t.me/khrischatyy" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/khrischatyy" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 md:py-40 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent text-sm tracking-widest uppercase mb-4 block">
            Contact
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
            Let's build{" "}
            <span className="bg-gradient-to-r from-accent-dark to-accent-light bg-clip-text text-transparent">
              together
            </span>
          </h2>

          <p className="text-secondary text-lg md:text-xl max-w-xl mx-auto mb-12">
            Ready for your next project? Drop us a line and let's discuss
            how we can bring your vision to life.
          </p>

          {/* Email */}
          <motion.a
            href="mailto:zharkovalexander1987@gmail.com"
            className="group inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-lg md:text-2xl lg:text-3xl font-heading font-semibold hover:text-accent transition-colors duration-300 max-w-full"
            whileHover={{ scale: 1.02 }}
          >
            <Mail
              size={24}
              className="text-accent group-hover:rotate-12 transition-transform duration-300 shrink-0"
            />
            <span className="relative truncate">
              zharkovalexander1987@gmail.com
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-500" />
            </span>
          </motion.a>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 mt-12">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-surface-elevated border border-surface-border flex items-center justify-center text-secondary hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -4 }}
                aria-label={social.label}
              >
                <social.icon size={22} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
