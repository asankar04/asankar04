import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { type ThemeColor } from '../../utils/themes';

interface AviationOverlayProps {
  isVisible: boolean;
  direction: any;
  color: ThemeColor;
  onComplete: () => void;
}

export default function AviationOverlay({
  isVisible,
  direction,
  color,
  onComplete,
}: AviationOverlayProps) {
  useEffect(() => {
    if (isVisible) {
      // Auto-complete after animation duration
      const timer = setTimeout(() => {
        onComplete();
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  // Get animation properties based on direction
  const getAnimationProps = () => {
    switch (direction) {
      case 'right':
        return {
          initial: { x: '-100vw' },
          animate: { x: '100vw' },
          rotation: 0,
        };
      case 'left':
        return {
          initial: { x: '100vw' },
          animate: { x: '-100vw' },
          rotation: 180,
        };
      case 'down':
        return {
          initial: { y: '-100vh' },
          animate: { y: '100vh' },
          rotation: 90,
        };
      case 'up':
        return {
          initial: { y: '100vh' },
          animate: { y: '-100vh' },
          rotation: -90,
        };
      default:
        return {
          initial: { scale: 0 },
          animate: { scale: 1 },
          rotation: 0,
        };
    }
  };

  const animProps = getAnimationProps();

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, rgba(0,0,0,100), rgba(0,0,0,0.95))`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
      >
        {/* Contrail/Trail Effect */}
        <motion.div
          className="absolute inset-0 z-10"
          initial={animProps.initial}
          animate={animProps.animate}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {/* Multiple contrail lines */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-70"
              style={
                direction === 'down' || direction === 'up'
                  ? {
                      // Vertical lines
                      background: `linear-gradient(180deg, transparent, ${color.primary}90, transparent)`,
                      left: `${47 + i * 3}%`,
                      top: '-20%',
                      bottom: '-20%',
                      width: '2px',
                      height: '140%',
                      transform: 'translateX(-50%)',
                    }
                  : {
                      // Horizontal lines
                      background: `linear-gradient(90deg, transparent, ${color.primary}90, transparent)`,
                      top: `${47 + i * 3}%`,
                      left: '-20%',
                      right: '-20%',
                      width: '140%',
                      height: '4px',
                      transform: 'translateY(-50%)',
                    }
              }
              initial={{
                scaleX: direction === 'down' || direction === 'up' ? 1 : 0,
                scaleY: direction === 'down' || direction === 'up' ? 0 : 1,
                opacity: 0,
              }}
              animate={{
                scaleX: 1,
                scaleY: 1,
                opacity: [0, 0.7, 0.7, 0],
              }}
              transition={{
                duration: 0.5,
                times: [0, 0.3, 0.7, 1],
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>

        {/* Radar Sweep Effect */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.8, 0] }}
          transition={{ duration: 0.5, times: [0, 0.4, 1] }}
        >
          <motion.div
            className="w-96 h-96 rounded-full border-2 border-dashed"
            style={{ borderColor: `${color.primary}40` }}
            animate={{ rotate: 360, scale: [0.8, 1.2, 0.8] }}
            transition={{ duration: 0.75, ease: 'linear' }}
          />
        </motion.div>

        {/* Aviation Text Overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, delay: 0 }}
        >
          <div className="text-center">
            <motion.h2
              className="text-3xl font-mono font-bold tracking-wider mb-2"
              style={{
                color: color.primary,
                textShadow: `0 0 20px ${color.primary}60`,
              }}
            >
              NAVIGATING
            </motion.h2>
            <motion.div
              className="flex items-center justify-center gap-2 text-md font-mono opacity-80"
              style={{ color: color.primary }}
            >
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              >
                ●
              </motion.div>
              <span>FASTEN YOUR SEATBELT</span>
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }}
              >
                ●
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
