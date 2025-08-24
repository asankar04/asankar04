import { motion } from 'framer-motion';
import { useState } from 'react';
import ReturnButton from '../Custom/ReturnButton';
import { type ThemeColor } from '../../utils/themes';
import type { Section } from '../../hooks/useSection';
import ProjectInfo from './ProjectInfo';
import ProjectBlip from './ProjectBlip';
import { type Project, projects } from './ProjectList';

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

  const getRadarPosition = (
    angle: number,
    distance: number,
    radarSize: number,
    isMobile: boolean
  ) => {
    const radian = (angle * Math.PI) / 180;
    const x = Math.cos(radian) * distance * (radarSize / (isMobile ? 3.5 : 2));
    const y = Math.sin(radian) * distance * (radarSize / (isMobile ? 3.5 : 2));
    return { x, y };
  };

  const radarCircleRadii = [0.25, 0.5, 0.75, 1];

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

      <div className="flex flex-col mx-4 sm:mx-8 lg:mx-10 lg:flex-row gap-6 items-center justify-center w-full max-w-7xl overflow-visible">
        {/* CircularRadar Display */}
        <motion.div
          className="relative mx-4 sm:mx-6 md:mx-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Radar Screen Container */}
          <motion.div
            className="relative w-90 h-90 sm:w-96 sm:h-96 md:w-[600px] md:h-[600px] rounded-full border-2 overflow-hidden"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              borderColor: color.primary,
              background: `radial-gradient(circle, rgba(0,0,0,0.9) 0%, rgba(0,20,0,0.95) 100%)`,
              boxShadow: `
                0 0 50px ${color.primary}40,
                inset 0 0 50px rgba(0,0,0,0.8)
              `,
            }}
          >
            {/* Center Dot */}
            <div
              className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2"
              style={{ backgroundColor: color.primary }}
            />

            {/* Radar Grid Lines */}
            <div className="absolute inset-0">
              {radarCircleRadii.map((scale, index) => (
                <div
                  key={index}
                  className="absolute border rounded-full opacity-30"
                  style={{
                    borderColor: color.primary,
                    width: `${scale * 100}%`,
                    height: `${scale * 100}%`,
                    top: `${(1 - scale) * 50}%`,
                    left: `${(1 - scale) * 50}%`,
                  }}
                />
              ))}

              <div
                className="absolute w-full h-0.5 top-1/2 opacity-30"
                style={{ backgroundColor: color.primary }}
              />
              <div
                className="absolute h-full w-0.5 left-1/2 opacity-30"
                style={{ backgroundColor: color.primary }}
              />

              <div
                className="absolute w-full h-0.5 top-1/2 opacity-20 rotate-45 origin-center"
                style={{ backgroundColor: color.primary }}
              />
              <div
                className="absolute w-full h-0.5 top-1/2 opacity-20 -rotate-45 origin-center"
                style={{ backgroundColor: color.primary }}
              />
            </div>

            {/* Sweep Line & Trail */}
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div
                className="absolute w-1/2 h-0.5 top-1/2 left-1/2 origin-left"
                style={{
                  background: `linear-gradient(90deg, ${color.primary}80 0%, transparent 100%)`,
                }}
              />
              {/* Sweep trail */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(from 0deg, transparent 0deg, ${color.primary}20 90deg, transparent 90deg)`,
                }}
              />
            </motion.div>

            {/* Project Blips */}
            {projects.map((project, index) => {
              const radarSize = 550;
              const isMobile = window.innerWidth < 768;
              const position = getRadarPosition(
                project.radarPosition.angle,
                project.radarPosition.distance,
                radarSize,
                isMobile
              );

              return (
                <ProjectBlip
                  key={project.flightNumber}
                  project={project}
                  position={position}
                  color={color}
                  index={index}
                  onProjectSelect={setSelectedProject}
                />
              );
            })}
          </motion.div>

          {/* Radar Info Panel */}
          <div
            className="absolute -bottom-16 left-0 right-0 text-center font-mono text-xs"
            style={{ color: color.primary }}
          >
            <div className="opacity-60">CONTACTS: {projects.length}</div>
          </div>
        </motion.div>

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
