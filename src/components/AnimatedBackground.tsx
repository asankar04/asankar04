import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Plane {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

export default function AnimatedBackground() {
  const [planes, setPlanes] = useState<Plane[]>([]);
  const [viewportHeight, setViewportHeight] = useState(0);

  const generatePlanes = () => {
    const newPlanes: Plane[] = [];
    for (let i = 0; i < 14; i++) {
      newPlanes.push({
        id: i,
        x: Math.random() * 100, // horizontal position
        y: -10, // start above viewport
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 4, // random fall speed
      });
    }
    setPlanes(newPlanes);
  };

  // Cache viewport height
  const updateViewportHeight = () => setViewportHeight(window.innerHeight);

  useEffect(() => {
    updateViewportHeight();
    generatePlanes();

    // Update viewport height on rezie
    window.addEventListener('resize', updateViewportHeight);
    return () => window.removeEventListener('resize', updateViewportHeight);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gray-800/20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Animated planes */}
      {planes.map((plane) => (
        <motion.div
          key={plane.id}
          className="absolute text-blue-400/40"
          style={{
            left: `${plane.x}%`,
          }}
          initial={{
            y: -50,
            rotate: 0,
          }}
          animate={{
            y: viewportHeight + 50, // Use cached height instead of window.innerHeight
            rotate: [0, 10, -10, 0],
            x: [0, 30, -20, 0],
          }}
          transition={{
            duration: plane.duration,
            delay: plane.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 100 100"
            className="opacity-60"
          >
            <polygon
              points="50,90 20,20 50,35 80,20"
              fill="currentColor"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
            />
          </svg>
        </motion.div>
      ))}

      {/* Subtle glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
    </div>
  );
}
