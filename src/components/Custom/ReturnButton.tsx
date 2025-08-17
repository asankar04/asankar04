import { motion } from 'framer-motion';
import { type ThemeColor } from '../../utils/themes';
import { LogOut } from 'lucide-react';

interface ReturnButtonProps {
  color: ThemeColor;
  handleSectionChange: (section: string) => void;
}

export default function ReturnButton({
  color,
  handleSectionChange,
}: ReturnButtonProps) {
  return (
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
          color: '#000',
        }}
        whileTap={{ scale: 0.98 }}
        className="bg-gray-900/90 border-2 px-4 py-2 rounded-md font-mono font-bold tracking-wide flex items-center gap-2"
        style={{
          borderColor: color.primary,
          color: color.primary,
        }}
        onClick={() => handleSectionChange('checkIn')}
      >
        RETURN
        <LogOut size={16} className="transform -scale-x-100" />
      </motion.button>
    </motion.div>
  );
}
