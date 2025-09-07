import { motion } from 'framer-motion';
import { Linkedin, Github, Instagram } from 'lucide-react';
import Shimmer from '../Custom/Shimmer';
import { type ThemeColor } from '../../utils/themes';

interface BoardingPassProps {
  color: ThemeColor;
  currentTime: Date;
}

export default function BoardingPass({
  color,
  currentTime,
}: BoardingPassProps) {
  const timeString = currentTime.toLocaleTimeString('en-US', {
    timeZone: 'America/Chicago',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  const sectionDivider = () => {
    return <div className="border-t border-dashed border-gray-600"></div>;
  };

  return (
    <motion.div
      className="bg-gray-900/50 backdrop-blur-sm border rounded-lg shadow-2xl 
                 max-w-lg w-full overflow-hidden max-md:scale-90"
      style={{ borderColor: color.primary }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: [0, -6, 0],
      }}
      transition={{
        duration: 0.6,
        delay: 0.3,
        y: {
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
    >
      {/* Header */}
      <Shimmer
        className="text-gray-900 px-6 py-3"
        style={{
          background: color.primary,
        }}
        intensity={0.3}
        delay={0.5}
      >
        <h2 className="font-mono font-bold text-lg tracking-wider text-center">
          BOARDING PASS
        </h2>
      </Shimmer>

      {/* Content */}
      <div className="p-5 space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p
              className="text-xs font-mono tracking-wide mb-1"
              style={{ color: color.primary }}
            >
              NAME
            </p>
            <p className="text-white font-mono font-bold text-lg">
              ANIT SANKAR
            </p>
          </div>
          <div className="text-right">
            <p
              className="text-xs font-mono tracking-wide mb-1"
              style={{ color: color.primary }}
            >
              LOCAL TIME
            </p>
            <p className="text-white font-mono font-bold text-lg">
              {timeString}
            </p>
          </div>
        </div>

        {/* Divider */}
        {sectionDivider()}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p
              className="text-xs font-mono tracking-wide mb-1"
              style={{ color: color.primary }}
            >
              PROFESSION
            </p>
            <p className="text-white font-mono font-bold text-xl tracking-wider">
              SOFTWARE ENGINEER
            </p>
          </div>
          <div className="text-right">
            <p
              className="text-xs font-mono tracking-wide mb-1"
              style={{ color: color.primary }}
            >
              LOCATION
            </p>
            <p className="text-white font-mono font-bold text-lg">
              BIRMINGHAM, AL
            </p>
          </div>
        </div>

        {/* Divider */}
        {sectionDivider()}

        <div>
          <p
            className="text-yellow-400 text-xs font-mono tracking-wide mb-1"
            style={{ color: color.primary }}
          >
            STATUS
          </p>
          <p className="text-white font-mono font-bold text-lg tracking-wider">
            BUILDING COOL STUFF & EXPLORING NEW IDEAS
          </p>
        </div>

        {/* Divider */}
        {sectionDivider()}

        {/* Social Connections - Compact Boarding Pass Style */}
        <div>
          <p
            className="text-xs font-mono tracking-wide mb-2"
            style={{ color: color.primary }}
          >
            CONTACT
          </p>
          <div className="flex justify-between gap-2">
            <motion.a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-4 py-2 rounded border border-dashed hover:border-solid border-gray-400 hover:border-white/50 transition-colors duration-300 flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Linkedin size={14} color="white" />
              <span className="text-xs font-mono text-white tracking-wide">
                LINKEDIN
              </span>
            </motion.a>

            <motion.a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-4 py-2 rounded border border-dashed hover:border-solid border-gray-400 hover:border-white/50 transition-colors duration-300 flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Github size={14} color="white" />
              <span className="text-xs font-mono text-white tracking-wide">
                GITHUB
              </span>
            </motion.a>

            <motion.a
              href="https://instagram.com/your-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-4 py-2 rounded border border-dashed hover:border-solid border-gray-400 hover:border-white/50 transition-colors duration-300 flex-1"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Instagram size={14} color="white" />
              <span className="text-xs font-mono text-white tracking-wide">
                INSTAGRAM
              </span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="bg-gray-800 px-6 py-3 border-t"
        style={{ borderColor: color.primary }}
      >
        <p
          className="text-center font-mono text-xs tracking-widest"
          style={{ color: color.primary }}
        >
          WELCOME ABOARD FLIGHT AS-2024
        </p>
      </div>
    </motion.div>
  );
}
