import { motion } from 'framer-motion';
import { useState } from 'react';
import ReturnButton from '../Custom/ReturnButton';
import { type ThemeColor } from '../../utils/themes';
import type { Section } from '../../hooks/useSection';
import ProjectInfo from './ProjectInfo';

interface ProjectsProps {
  color: ThemeColor;
  handleSectionChange: (section: Section) => void;
  isTransitioning: boolean;
}

export interface Project {
  title: string;
  flightNumber: string;
  description: string;
  link: string;
  techStack: string[];
  status: string;
  type: string;
  radarPosition: { angle: number; distance: number };
  aircraftType: string;
}

const projects: Project[] = [
  {
    title: 'Airport Distance Visualizer',
    flightNumber: 'AS P01',
    description:
      'This web app, built with React and Leaflet, dynamically calculates and visualizes the shortest distance between two airports. It features real-time data fetching from a comprehensive airport database, advanced geocoding, and mapping for a robust, interactive user experience. The app utilizes React for the frontend and Python Flask for the backend.',
    link: 'https://github.com/asankar04/Airport_Distance_Visualizer',
    techStack: ['React', 'Leaflet', 'Python Flask', 'JavaScript'],
    status: 'Completed',
    type: 'Web Application',
    radarPosition: { angle: 45, distance: 0.7 },
    aircraftType: '✈️',
  },
  {
    title: 'Dog Breed Gallery',
    flightNumber: 'AS P02',
    description:
      'Generate a collection of images for a given breed, sub-breed, and the number of images. I used the Dog API to fetch the images. Utilized ReactJS to build the user interface.',
    link: 'https://dog-breed-gallery-site.onrender.com/',
    techStack: ['React', 'Dog API', 'JavaScript', 'CSS'],
    status: 'Completed',
    type: 'Web Application',
    radarPosition: { angle: 120, distance: 0.5 },
    aircraftType: '🛩️',
  },
  {
    title: 'Fact or Fiction',
    flightNumber: 'AS P03',
    description:
      "An interactive quiz web app where users guess if statements are factual or fictional. Developed the frontend with React and used OpenAI's GPT API to generate the statements, with real-time score tracking.",
    link: 'https://fact-or-fiction-e4472f229907.herokuapp.com/',
    techStack: ['React', 'OpenAI GPT API', 'JavaScript', 'CSS'],
    status: 'Completed',
    type: 'Web Application',
    radarPosition: { angle: 200, distance: 0.6 },
    aircraftType: '🚁',
  },
  {
    title: 'Portfolio Website',
    flightNumber: 'AS P04',
    description:
      'This website was created to showcase my experience and projects. It follows a consistent theme and is designed with clarity in mind. I utilized ReactJS, TailwindCSS, Vite, and TypeScript.',
    link: '/',
    techStack: ['ReactJS', 'TailwindCSS', 'Vite', 'TypeScript'],
    status: 'Completed',
    type: 'Portfolio Website',
    radarPosition: { angle: 300, distance: 0.4 },
    aircraftType: '🛸',
  },
  {
    title: 'ReactJS Password Generator',
    flightNumber: 'AS P05',
    description:
      'Users can create a randomly generated password based on their preference of the password length and the inclusion of lowercase letters, uppercase letter, numbers, and special characters. Utilized ReactJS, JavaScript XML(JSX), HTML, CSS. This project includes a frontend interface.',
    link: 'https://react-password-generator-cd8d.onrender.com/',
    techStack: ['React', 'JSX', 'HTML', 'CSS', 'JavaScript'],
    status: 'Completed',
    type: 'Utility Tool',
    radarPosition: { angle: 15, distance: 0.8 },
    aircraftType: '🚀',
  },
];

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
      className="relative z-10 bg-black/40 min-h-screen flex flex-col items-center justify-center px-4 py-8 max-md:px-0"
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
        className="mb-6 text-center"
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

      <div className="flex flex-col lg:flex-row gap-6 items-center justify-center w-full max-w-7xl overflow-visible">
        {/* CircularRadar Display */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Radar Screen Container */}
          <motion.div
            className="relative w-96 h-96 md:w-[600px] md:h-[600px] rounded-full border-2 overflow-hidden"
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
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Aircraft Icon */}
                  <motion.div
                    className="text-2xl"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.aircraftType}
                  </motion.div>

                  {/* Blip dot */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full -translate-x-1/2 -translate-y-1/2"
                    style={{ backgroundColor: color.primary }}
                    animate={{
                      scale: [1, 1.5, 1],
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
