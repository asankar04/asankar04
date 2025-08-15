import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { LogOut } from 'lucide-react';
import { type ThemeColor } from '../utils/themes';

interface BoardingProps {
  setCurrentSection: (section: string) => void;
  color: ThemeColor;
}

export default function Boarding({ setCurrentSection, color }: BoardingProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);
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

  const handleTransition = (section: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection(section);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <motion.div
      className="relative z-10 min-h-screen flex items-center justify-center px-4"
      animate={{ x: isTransitioning ? '100vw' : 0 }}
      transition={{
        duration: 0.4,
        ease: 'easeInOut',
      }}
    >
      {/* Return Button */}
      <motion.div
        className="absolute top-8 left-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: color.primary,
            boxShadow: `0 0 30px ${color.primary}66`, // 66 = 40% opacity
            color: 'white',
          }}
          whileTap={{ scale: 0.98 }}
          className="bg-gray-900/90 border-2 px-4 py-2 rounded-md font-mono font-bold tracking-wide flex items-center gap-2"
          style={{
            borderColor: color.primary,
            color: color.primary,
          }}
          onClick={() => handleTransition('checkIn')}
        >
          RETURN
          <LogOut size={16} className="transform -scale-x-100" />
        </motion.button>
      </motion.div>

      {/* Boarding Pass Card */}
      <motion.div
        className="bg-gray-900/60 backdrop-blur-sm border rounded-lg shadow-2xl 
                   max-w-lg w-full overflow-hidden"
        style={{ borderColor: color.primary }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
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
    </motion.div>
  );
}
