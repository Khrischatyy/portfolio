import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { useProjects } from "../hooks/useProjects";

export default function Projects() {
  const { projects } = useProjects();
  const [first, ...rest] = projects;

  return (
    <>
      {/* First snap: section header + first project together */}
      <section id="projects" className="snap-section flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16"
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

          {first && <ProjectCard project={first} index={0} />}
        </div>
      </section>

      {/* Remaining projects — each its own snap */}
      {rest.map((project, index) => (
        <section key={project.id} className="snap-section flex items-center">
          <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <ProjectCard project={project} index={index + 1} />
          </div>
        </section>
      ))}
    </>
  );
}
