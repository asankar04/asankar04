import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function PaperPlane() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for smooth movement
  const springX = useSpring(x, { stiffness: 900, damping: 60 });
  const springY = useSpring(y, { stiffness: 900, damping: 60 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Set plane position to mouse position
      x.set(event.clientX - 30); // Offset by half the plane width
      y.set(event.clientY - 30); // Offset by half the plane height
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <motion.div
      className="fixed z-50 pointer-events-none"
      style={{
        x: springX,
        y: springY,
      }}
    >
      <div className="relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          className="text-blue-600 drop-shadow-lg"
        >
          {/* Plane */}
          <polygon
            points="90,50 20,20 35,50 20,80"
            fill="currentColor"
            stroke="white"
            strokeWidth="2"
          />
        </svg>

        {/* Trail dots */}
        <div className="absolute top-4.5 right-8 flex flex-row-reverse space-x-1 space-x-reverse">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-blue-400 rounded-full"
              animate={{
                opacity: [1, 0.2, 1],
                scale: [1, 0.3, 1],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
