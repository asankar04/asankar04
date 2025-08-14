import { motion } from 'framer-motion';

export default function LandingPage() {
  // Reusable runway effect component
  const RunwayText = ({
    children,
    className = '',
    delay = 0,
  }: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
  }) => (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover="hover"
      variants={{
        hover: {},
      }}
    >
      <span className="relative z-10">{children}</span>
      {/* Runway background */}
      <motion.div
        className="absolute inset-0 bg-gray-800 opacity-0"
        variants={{
          hover: {
            opacity: 0.1,
            transition: { duration: 0.3, delay },
          },
        }}
      />
      {/* Runway centerline */}
      <motion.div
        className="absolute top-1/2 left-0 h-0.5 bg-yellow-400 opacity-0"
        variants={{
          hover: {
            opacity: 1,
            width: '100%',
            transition: { duration: 0.6, ease: 'easeOut', delay: delay + 0.1 },
          },
        }}
        style={{ width: '0%' }}
      />
      {/* Runway edge lights */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center px-2">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-1 bg-blue-400 rounded-full opacity-0"
            variants={{
              hover: {
                opacity: [0, 1, 0],
                transition: {
                  duration: 0.8,
                  delay: delay + 0.2 + i * 0.1,
                  repeat: Infinity,
                  repeatType: 'reverse',
                },
              },
            }}
          />
        ))}
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center max-w-4xl mx-auto px-4"
    >
      {/* Name with runway effect */}
      <RunwayText className="text-4xl font-bold text-gray-900 mb-2" delay={0}>
        Anit Sankar
      </RunwayText>

      {/* Job title with runway effect */}
      <div className="m-2 space-y-2">
        <RunwayText className="text-xl text-gray-600" delay={0.1}>
          Software Engineer
        </RunwayText>

        <RunwayText className="text-lg text-gray-600" delay={0.2}>
          Birmingham, AL ✈️
        </RunwayText>
      </div>

      {/* Bio with runway effect */}
      <div className="mt-6">
        <RunwayText className="text-gray-700 leading-relaxed" delay={0.3}>
          I enjoy building cool stuff and exploring new ideas. Currently, I'm
          completing my Bachelor's of Science in Computer Science at UAB. I'm a
          big avgeek.
        </RunwayText>
      </div>
    </motion.div>
  );
}
