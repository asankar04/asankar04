import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { type ThemeColor } from '../../utils/themes';
import type { Section } from '../../hooks/useSection';
import BoardingPass from './BoardingPass';
import RedirectSigns from './RedirectSigns';
import ReturnButton from '../Custom/ReturnButton';

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
      <BoardingPass color={color} currentTime={currentTime} />

      {/* Experience & Projects Redirect Signs */}
      <RedirectSigns color={color} handleSectionChange={handleSectionChange} />
    </motion.div>
  );
}
