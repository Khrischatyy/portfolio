import { motion } from "framer-motion";

const skills = [
  { name: "React", color: "from-cyan-500/20 to-blue-500/20" },
  { name: "TypeScript", color: "from-blue-500/20 to-indigo-500/20" },
  { name: "Python", color: "from-yellow-500/20 to-green-500/20" },
  { name: "FastAPI", color: "from-emerald-500/20 to-teal-500/20" },
  { name: "Node.js", color: "from-green-500/20 to-lime-500/20" },
  { name: "PostgreSQL", color: "from-blue-500/20 to-sky-500/20" },
  { name: "Docker", color: "from-sky-500/20 to-blue-500/20" },
  { name: "Next.js", color: "from-gray-500/20 to-zinc-500/20" },
  { name: "Redis", color: "from-red-500/20 to-rose-500/20" },
  { name: "GraphQL", color: "from-pink-500/20 to-fuchsia-500/20" },
  { name: "AWS", color: "from-orange-500/20 to-amber-500/20" },
  { name: "CI/CD", color: "from-violet-500/20 to-purple-500/20" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export default function About() {
  return (
    <section id="about" className="snap-section relative flex items-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm tracking-widest uppercase mb-4 block">
              About us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Engineering meets{" "}
              <span className="bg-gradient-to-r from-accent-dark to-accent-light bg-clip-text text-transparent">
                design
              </span>
            </h2>

            <div className="space-y-5 text-secondary text-lg leading-relaxed">
              <p>
                DNA Agency is a full-service digital studio specializing in
                high-performance web products. We handle every layer — from
                architecture and APIs to interfaces with fluid animations.
              </p>
              <p>
                Our team has delivered projects of every scale: from interactive
                portfolios and corporate platforms to high-load financial systems
                processing millions of transactions.
              </p>
              <p>
                We value clean code, thoughtful architecture, and obsessive
                attention to detail. Every project is a chance to build something
                that works flawlessly.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 pt-12 border-t border-surface-border">
              {[
                { number: "50+", label: "Projects" },
                { number: "5+", label: "Years" },
                { number: "30+", label: "Clients" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-heading text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-muted text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4 }}
                className={`group relative p-4 rounded-2xl bg-gradient-to-br ${skill.color} border border-white/5 hover:border-accent/30 transition-colors duration-300 cursor-default`}
              >
                <div className="absolute inset-0 rounded-2xl bg-surface opacity-90 group-hover:opacity-80 transition-opacity duration-300" />
                <span className="relative text-sm font-medium text-secondary group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
