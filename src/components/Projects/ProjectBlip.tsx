import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';
import { type ThemeColor } from '../../utils/themes';
import type { Project } from './Projects';

interface ProjectBlipProps {
  project: Project;
  position: { x: number; y: number };
  color: ThemeColor;
  index: number;
  onProjectSelect: (project: Project) => void;
}

export default function ProjectBlip({
  project,
  position,
  color,
  index,
  onProjectSelect,
}: ProjectBlipProps) {
  return (
    <motion.div
      key={project.flightNumber}
      className="absolute group"
      style={{
        left: `calc(50% + ${position.x}px)`,
        top: `calc(50% + ${position.y}px)`,
        transform: 'translate(-50%, -50%)',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 0.8 + index * 0.2,
      }}
      onClick={() => onProjectSelect(project)}
    >
      {/* Aircraft Icon */}
      <motion.div
        className="text-2xl"
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
      >
        <Plane
          style={{
            color: color.primary,
            fill: color.primary,
            filter: 'opacity(0.6)',
          }}
        />
      </motion.div>

      {/* Blip dot */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ backgroundColor: color.primary }}
        animate={{
          scale: [0.5, 1, 0.5],
          opacity: [0.9, 0.5, 0.9],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Flight Number Label */}
      <div
        className="absolute top-8 left-1/2 -translate-x-1/2 text-xs font-mono font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ color: color.primary }}
      >
        {project.flightNumber}
      </div>
    </motion.div>
  );
}
