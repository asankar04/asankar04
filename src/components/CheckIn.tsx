import { motion } from 'framer-motion';
import { useState } from 'react';
import { type ThemeColor } from '../utils/themes';

interface CheckInProps {
  setCurrentSection: (section: string) => void;
  color: ThemeColor;
}

export default function CheckIn({ setCurrentSection, color }: CheckInProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Creates delay for sliding transition
  const handleCheckIn = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection('boarding');
    }, 800);
  };

  return (
    <motion.div
      className="relative z-10 min-h-screen bg-black/40 flex flex-col items-center justify-center px-4"
      animate={{
        x: isTransitioning ? '-100vw' : 0,
      }}
      transition={{
        duration: 0.8,
        ease: 'easeInOut',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center mb-12"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-6xl md:text-8xl font-bold text-white tracking-wider mb-4"
        >
          WELCOME
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-32 h-0.5 mx-auto"
          style={{ backgroundColor: color.primary }}
        ></motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{
          scale: 1.05,
          backgroundColor: color.primary,
          color: 'white',
          boxShadow: `0 0 20px ${color.primary}80`,
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          backgroundColor: { duration: 0.3, ease: 'easeOut' },
          color: { duration: 0.3, ease: 'easeOut' },
          boxShadow: { duration: 0.3, ease: 'easeOut' },
        }}
        whileTap={{ scale: 0.98 }}
        onClick={handleCheckIn}
        className="bg-gray-900/90 border-2 border-dashed 
               px-12 py-6 text-2xl font-mono font-bold 
               tracking-widest rounded-sm"
        style={{
          borderColor: color.primary,
          color: color.primary,
        }}
      >
        CHECK IN
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="text-gray-400 text-sm font-mono mt-8 tracking-wide"
      >
        CLICK TO PROCEED TO BOARDING
      </motion.p>
    </motion.div>
  );
}
