import { motion } from 'framer-motion';
import ReturnButton from './Custom/ReturnButton';
import { type ThemeColor } from '../utils/themes';
import type { Section } from '../hooks/useSection';

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
    </motion.div>
  );
}
