import { motion } from 'framer-motion';
import { useState } from 'react';

interface Cloud {
  id: number;
  x: number;
  y: number;
  scale: number;
  speed: number;
}

export default function SkyBackground() {
  const [isNight, setIsNight] = useState(false);

  const clouds: Cloud[] = [
    { id: 1, x: 10, y: 20, scale: 1, speed: 20 },
    { id: 2, x: 60, y: 10, scale: 0.8, speed: 30 },
    { id: 3, x: 80, y: 30, scale: 1.2, speed: 25 },
  ];

  const skyGradient = isNight
    ? 'from-gray-900 via-blue-900 to-purple-900'
    : 'from-blue-400 via-blue-300 to-blue-100';

  return (
    <div
      className={`fixed inset-0 -z-10 bg-gradient-to-b ${skyGradient} transition-all duration-1000`}
    >
      {/* Day/Night Toggle */}
      <button
        onClick={() => setIsNight(!isNight)}
        className="absolute top-20 right-4 z-50 p-2 bg-white/20 rounded-full backdrop-blur-sm"
      >
        {isNight ? '☀️' : '🌙'}
      </button>

      {/* Clouds */}
      {clouds.map((cloud) => (
        <motion.div
          key={cloud.id}
          className="absolute text-white/30 text-6xl"
          style={{
            left: `${cloud.x}%`,
            top: `${cloud.y}%`,
            scale: cloud.scale,
          }}
          animate={{
            x: [-50, 100, -50],
          }}
          transition={{
            duration: cloud.speed,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          ☁️
        </motion.div>
      ))}

      {/* Stars (only visible at night) */}
      {isNight && (
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
