import { motion } from 'framer-motion';
import { type ThemeColor } from '../../utils/themes';
import { type Project } from './Projects';

interface ProjectInfoProps {
  project: Project;
  setSelectedProject: (project: Project | null) => void;
  color: ThemeColor;
}

export default function ProjectInfo({
  project,
  setSelectedProject,
  color,
}: ProjectInfoProps) {
  return (
    <motion.div
      className="bg-black/60 backdrop-blur-sm border rounded-lg p-6 max-w-md w-full"
      style={{ borderColor: color.primary }}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3
            className="text-xl font-mono font-bold"
            style={{ color: color.primary }}
          >
            {project.flightNumber}
          </h3>
          <p className="text-white text-lg font-semibold">{project.title}</p>
        </div>
        <button
          onClick={() => setSelectedProject(null)}
          className="text-gray-400 hover:text-white scale-125 hover:scale-150 transition-all duration-100 hover:cursor-none"
        >
          ✕
        </button>
      </div>

      <div className="space-y-3">
        <div>
          <p
            className="text-xs font-mono uppercase tracking-wide mb-1"
            style={{ color: color.primary }}
          >
            Type
          </p>
          <p className="text-white">
            {project.aircraftType} {project.type}
          </p>
        </div>

        <div>
          <p
            className="text-xs font-mono uppercase tracking-wide mb-1"
            style={{ color: color.primary }}
          >
            Project Briefing
          </p>
          <p className="text-white text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <div>
          <p
            className="text-xs font-mono uppercase tracking-wide mb-1"
            style={{ color: color.primary }}
          >
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-1">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-mono rounded border"
                style={{
                  borderColor: color.primary,
                  color: color.primary,
                  backgroundColor: `${color.primary}10`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p
            className="text-xs font-mono uppercase tracking-wide mb-1"
            style={{ color: color.primary }}
          >
            Status
          </p>
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: '#00ff00' }}
            />
            <span className="text-white text-sm">{project.status}</span>
          </div>
        </div>

        <motion.a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-2 px-4 border rounded font-mono text-sm font-bold"
          style={{
            borderColor: color.primary,
            color: color.primary,
          }}
          whileHover={{
            backgroundColor: color.primary,
            color: 'black',
            scale: 1.02,
          }}
          whileTap={{ scale: 0.98 }}
        >
          TRAVEL TO PROJECT →
        </motion.a>
      </div>
    </motion.div>
  );
}
