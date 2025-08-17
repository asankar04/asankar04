import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ReturnButton from './Custom/ReturnButton';
import { Briefcase, ArrowRight, ArrowDown, Globe } from 'lucide-react';
import { type ThemeColor } from '../utils/themes';
import type { Section } from '../hooks/useSection';

interface BoardingProps {
  handleSectionChange: (section: Section) => void;
  isTransitioning: boolean;
  color: ThemeColor;
}

export default function Boarding({
  handleSectionChange,
  isTransitioning,
  color,
}: BoardingProps) {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  useEffect(() => {
    const updateTime = () => setCurrentTime(new Date());
    updateTime();

    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = currentTime.toLocaleTimeString('en-US', {
    timeZone: 'America/Chicago',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <motion.div
      className="relative z-10 bg-black/40 min-h-screen flex flex-col md:gap-8 gap-6 pt-10 items-center justify-center px-4"
      initial={{ scale: 0.8 }}
      animate={{
        scale: isTransitioning ? 0.8 : 1,
      }}
      transition={{
        duration: 0.4,
        ease: 'easeInOut',
      }}
    >
      {/* Return Button */}
      <ReturnButton
        color={color}
        handleSectionChange={() => handleSectionChange('checkIn')}
      />

      {/* Boarding Pass Card */}
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
        <div
          className="text-gray-900 px-6 py-3"
          style={{ backgroundColor: color.primary }}
        >
          <h2 className="font-mono font-bold text-lg tracking-wider text-center">
            BOARDING PASS
          </h2>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
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
          <div className="border-t border-dashed border-gray-600"></div>

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
          <div className="border-t border-dashed border-gray-600"></div>

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

      {/* Airport Sign redirect - Experiences */}
      <motion.div
        className="w-full max-w-lg max-md:scale-90"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          x: [0, 6, 0],
        }}
        transition={{
          duration: 0.6,
          delay: 0.5,
          x: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <motion.button
          className="relative rounded-xl border-2 border-black
                     w-full overflow-hidden group cursor-pointer"
          style={{
            backgroundColor: color.primary,
            boxShadow: `0 0 30px ${color.primary}11`,
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: `0 0 30px ${color.primary}44`,
          }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleSectionChange('experience')}
        >
          <div className="px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-md p-2 group-hover:animate-pulse">
                <Globe size={36} color="black" />
              </div>

              <h2 className="text-black font-mono font-bold text-4xl tracking-wide group-hover:animate-pulse">
                EXPERIENCE
              </h2>
            </div>

            <div className="p-1 group-hover:animate-pulse">
              <ArrowRight size={40} color="black" />
            </div>
          </div>
        </motion.button>
      </motion.div>

      {/* Airport Sign redirect - Projects */}
      <motion.div
        className="w-full max-w-lg max-md:scale-90"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: [0, -6, 0],
        }}
        transition={{
          duration: 0.6,
          delay: 0.7,
          y: {
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <motion.button
          className="relative rounded-xl border-2 border-black
                     w-full overflow-hidden group cursor-pointer"
          style={{
            backgroundColor: color.primary,
            boxShadow: `0 0 30px ${color.primary}11`,
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: `0 0 30px ${color.primary}44`,
          }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleSectionChange('projects')}
        >
          <div className="px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-md p-2 group-hover:animate-pulse">
                <Briefcase size={36} color="black" />
              </div>

              <h2 className="text-black font-mono font-bold text-4xl tracking-wide group-hover:animate-pulse">
                PROJECTS
              </h2>
            </div>

            <div className="p-1 group-hover:animate-pulse">
              <ArrowDown size={40} color="black" />
            </div>
          </div>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
