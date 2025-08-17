import { motion } from 'framer-motion';

// SGlass Reflection shimmer effect (Diagonal bright shine across width)

interface ShimmerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  intensity?: number; // 0.1 to 1.0
  duration?: number;
  delay?: number;
}

export default function Shimmer({
  children,
  className = '',
  style = {},
  intensity = 0.4,
  duration = 2,
  delay = 3,
}: ShimmerProps) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(110deg, transparent 20%, rgba(255,255,255,${intensity * 0.8}) 50%, transparent 20%)`,
          width: '40%',
        }}
        initial={{ x: '-50%' }}
        animate={{ x: '250%' }}
        transition={{
          duration,
          repeat: Infinity,
          repeatDelay: delay,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
