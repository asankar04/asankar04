import { motion } from 'framer-motion';
import ReturnButton from './Custom/ReturnButton';
import { type ThemeColor } from '../utils/themes';

interface ExperienceProps {
  color: ThemeColor;
  handleSectionChange: (section: string) => void;
  isTransitioning: boolean;
}

export default function Experience({
  color,
  handleSectionChange,
  isTransitioning,
}: ExperienceProps) {
  return (
    <motion.div
      className="relative z-10 bg-black/40 min-h-screen flex flex-col md:gap-8 gap-6 items-center justify-center px-4"
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
      <h1>Experience</h1>
    </motion.div>
  );
}
