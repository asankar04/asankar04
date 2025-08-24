import { motion } from 'framer-motion';
import { type ThemeColor } from '../../utils/themes';
import { projects, type Project } from './ProjectList';
import ProjectBlip from './ProjectBlip';

interface RadarScreenProps {
  color: ThemeColor;
  setSelectedProject: (project: Project) => void;
}
export default function RadarScreen({
  color,
  setSelectedProject,
}: RadarScreenProps) {
  const isMobile = window.innerWidth < 768;
  const radarSize = 550;

  const getRadarPosition = (
    angle: number,
    distance: number,
    radarSize: number
  ) => {
    const radian = (angle * Math.PI) / 180;
    const x = Math.cos(radian) * distance * (radarSize / (isMobile ? 3.5 : 2));
    const y = Math.sin(radian) * distance * (radarSize / (isMobile ? 3.5 : 2));
    return { x, y };
  };

  const radarCircleRadii = [0.25, 0.5, 0.75, 1];

  return (
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
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, transparent 0deg, ${color.primary}20 90deg, transparent 90deg)`,
            }}
          />
        </motion.div>

        {/* Project Blips */}
        {projects.map((project, index) => {
          const position = getRadarPosition(
            project.radarPosition.angle,
            project.radarPosition.distance,
            radarSize
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
  );
}
