import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { themes, type ThemeName } from '../utils/themes';

interface ThemePickerProps {
  currentTheme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

export default function ThemePicker({
  currentTheme,
  setTheme,
}: ThemePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const availableThemes = Object.keys(themes) as ThemeName[];

  const themeColors = {
    blue: '#3b82f6',
    yellow: '#facc15',
    red: '#ef4444',
    green: '#10b981',
    purple: '#8b5cf6',
  };

  const handleThemeSelect = (theme: ThemeName) => {
    setTheme(theme);
    setIsOpen(false);
  };

  return (
    <motion.div
      className="fixed top-6 right-6 z-50"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
    >
      <div className="relative">
        {/* Dropdown Toggle Button */}
        <motion.button
          className="flex items-center gap-2 bg-gray-900/90 backdrop-blur-sm rounded-xl p-3 border border-gray-700/50 shadow-lg hover:border-gray-600 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Current theme color indicator */}
          <div
            className="w-6 h-6 rounded-lg border-2 border-white shadow-sm"
            style={{
              backgroundColor:
                themeColors[currentTheme as keyof typeof themeColors],
              boxShadow: `0 0 10px ${themeColors[currentTheme as keyof typeof themeColors]}40`,
            }}
          />

          {/* Chevron icon */}
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown size={16} className="text-gray-400" />
          </motion.div>
        </motion.button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full right-0 mt-2 bg-gray-900/95 backdrop-blur-sm rounded-xl p-2 border border-gray-700/50 shadow-xl"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-1">
                {availableThemes.map((theme) => (
                  <motion.button
                    key={theme}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                      currentTheme === theme
                        ? 'bg-gray-700/50'
                        : 'hover:bg-gray-700/30'
                    }`}
                    onClick={() => handleThemeSelect(theme)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Color circle */}
                    <div
                      className={`w-5 h-5 rounded-lg border-2 ${
                        currentTheme === theme
                          ? 'border-white'
                          : 'border-gray-600'
                      }`}
                      style={{
                        backgroundColor:
                          themeColors[theme as keyof typeof themeColors],
                      }}
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
