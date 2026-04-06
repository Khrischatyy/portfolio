import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useProjects } from "../hooks/useProjects";

export default function Projects() {
  const { projects } = useProjects();

  return (
    <section id="projects" className="py-32 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:mb-28"
        >
          <span className="text-accent text-sm tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
            Selected{" "}
            <span className="bg-gradient-to-r from-accent-dark to-accent-light bg-clip-text text-transparent">
              projects
            </span>
          </h2>
        </motion.div>

        {/* Project cards */}
        <div className="space-y-24 md:space-y-32 lg:space-y-40">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
