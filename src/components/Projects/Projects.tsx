import { motion } from 'framer-motion';
import { useState } from 'react';
import { type ThemeColor } from '../../utils/themes';
import type { Section } from '../../hooks/useSection';
import { type Project } from './ProjectList';
import ReturnButton from '../Custom/ReturnButton';
import ProjectInfo from './ProjectInfo';
import RadarScreen from './RadarScreen';

interface ProjectsProps {
  color: ThemeColor;
  handleSectionChange: (section: Section) => void;
  isTransitioning: boolean;
}

export default function Projects({
  color,
  handleSectionChange,
  isTransitioning,
}: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <motion.div
      className="relative z-10 bg-black/40 min-h-screen flex flex-col items-center justify-center px-4 py-8"
      initial={{ scale: 0.8 }}
      animate={{
        scale: isTransitioning ? 0.8 : 1,
      }}
      transition={{
        duration: 0.4,
        ease: 'easeInOut',
      }}
    >
      <ReturnButton
        color={color}
        handleSectionChange={() => handleSectionChange('boarding')}
      />

      {/* Radar Header */}
      <motion.div
        className="mb-6 mx-auto text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1
          className="text-3xl md:text-4xl font-mono font-bold tracking-wider mb-2"
          style={{
            color: color.primary,
            textShadow: `0 0 20px ${color.primary}60`,
          }}
        >
          PROJECTS RADAR SYSTEM
        </h1>
        <p
          className="text-sm font-mono opacity-80"
          style={{ color: color.primary }}
        >
          AIRSPACE - ANIT-SANKAR-PROJ
        </p>
      </motion.div>

      {/* Radar Display */}
      <div className="flex flex-col mx-4 sm:mx-8 lg:mx-10 lg:flex-row gap-6 items-center justify-center w-full max-w-7xl overflow-visible">
        {/* CircularRadar Display */}
        <RadarScreen color={color} setSelectedProject={setSelectedProject} />

        {/* Project Details Panel */}
        {selectedProject && (
          <ProjectInfo
            project={selectedProject}
            setSelectedProject={setSelectedProject}
            color={color}
          />
        )}
      </div>
    </motion.div>
  );
}
