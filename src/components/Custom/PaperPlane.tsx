import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export default function PaperPlane() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for smooth movement
  const springX = useSpring(x, { stiffness: 1000, damping: 100 });
  const springY = useSpring(y, { stiffness: 1000, damping: 100 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Mouse alignment on plane tip
      x.set(event.clientX - 20); // Offset so airplane tip (50% of 40px)
      y.set(event.clientY - 4); // Offset so airplane tip (10% of 40px)
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
        rotate: -30,
      }}
    >
      <div className="relative">
        <svg
          width="35"
          height="35"
          viewBox="0 0 100 100"
          className="text-blue-600 drop-shadow-lg"
        >
          {/* Plane */}
          <polygon
            points="50,10 20,80 50,65 80,80"
            fill="currentColor"
            stroke="white"
            strokeWidth="2"
          />
        </svg>

        {/* Trail dots */}
        <div className="absolute top-7.5 left-4 flex flex-col space-y-1">
          {[...Array(3)].map((_, i) => (
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
