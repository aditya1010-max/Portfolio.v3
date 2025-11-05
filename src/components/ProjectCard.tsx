import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
}

const ProjectCard = ({ title, description, tech, live, github }: ProjectProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md shadow-lg transition"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-3">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span key={index} className="bg-white/10 text-xs px-2 py-1 rounded-lg">
            {item}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        <a href={live} target="_blank" className="hover:text-blue-400">
          🔗 Live Demo
        </a>
        <a href={github} target="_blank" className="hover:text-blue-400">
          💻 GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
