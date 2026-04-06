import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../hooks/useProjects";
import ProjectVisual from "./ProjectVisual";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const visualY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{ opacity }}
      className="group"
    >
      <a
        href={project.site_url}
        target="_blank"
        rel="noopener noreferrer"
        className={`block md:grid md:grid-cols-2 gap-8 lg:gap-16 items-center ${
          isEven ? "" : "md:direction-rtl"
        }`}
      >
        {/* Visual */}
        <div
          className={`relative overflow-hidden rounded-2xl aspect-[16/10] bg-surface border border-surface-border/50 group-hover:border-accent/20 transition-colors duration-500 ${
            isEven ? "" : "md:order-2"
          }`}
          style={{ direction: "ltr" }}
        >
          <motion.div
            style={{ y: visualY }}
            className="absolute inset-[-10%] will-change-transform"
          >
            <ProjectVisual
              slug={project.slug}
              className="transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* Glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Hover arrow */}
          <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-75">
            <ArrowUpRight size={20} className="text-white" />
          </div>
        </div>

        {/* Content */}
        <div
          className={`mt-6 md:mt-0 ${isEven ? "" : "md:order-1 md:text-right"}`}
          style={{ direction: "ltr" }}
        >
          <div
            className={`flex flex-wrap gap-2 mb-4 ${
              isEven ? "" : "md:justify-end"
            }`}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs tracking-wider uppercase text-secondary bg-surface-elevated rounded-full border border-surface-border"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-secondary text-base md:text-lg leading-relaxed max-w-lg mb-6">
            {project.description}
          </p>

          <span className="inline-flex items-center gap-2 text-sm text-accent group-hover:gap-3 transition-all duration-300">
            <span className="tracking-wide uppercase">View project</span>
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
            />
          </span>
        </div>
      </a>
    </motion.div>
  );
}
