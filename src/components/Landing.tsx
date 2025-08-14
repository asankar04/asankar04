import { motion } from 'framer-motion';

export default function LandingPage() {
  // Departure board component
  const ScheduleBoardText = ({
    children,
    className = '',
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <motion.div
      className={`relative inline-block ${className}`}
      whileHover="hover"
      initial="initial"
      animate="initial"
      variants={{
        initial: {},
        hover: {},
      }}
    >
      {/* Departure board background*/}
      <motion.div
        className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm rounded-sm border border-gray-700/50"
        variants={{
          initial: {
            opacity: 0,
            scale: 1,
          },
          hover: {
            opacity: 1,
            scale: 1.02,
            transition: { duration: 0.3 },
          },
        }}
      />

      {/* Text */}
      <motion.span
        className="relative z-10 block px-4 py-2 font-mono tracking-wide hover:animate-pulse"
        variants={{
          initial: {
            color: '#111827', // gray-900
            textShadow: 'none',
          },
          hover: {
            color: '#facc15', // yellow-400
            textShadow: '0 0 8px rgba(250, 204, 21, 0.5)',
            transition: { duration: 0.2 },
          },
        }}
      >
        {children}
      </motion.span>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center text-center max-w-4xl mx-auto px-4 space-y-4"
    >
      {/* Name */}
      <ScheduleBoardText className="text-4xl font-bold">
        ANIT SANKAR
      </ScheduleBoardText>

      {/* Job title & Location */}
      <ScheduleBoardText className="text-xl">
        SOFTWARE ENGINEER | BIRMINGHAM, AL
      </ScheduleBoardText>

      {/* Bio */}
      <ScheduleBoardText className="text-base leading-relaxed max-w-2xl mx-auto">
        BUILDING COOL STUFF AND EXPLORING NEW IDEAS.
        <br />
        COMPUTER SCIENCE @ UAB. BIG AVGEEK.
      </ScheduleBoardText>
    </motion.div>
  );
}
