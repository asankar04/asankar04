import { motion } from 'framer-motion';

interface RunwayCardProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  runway?: string;
}

export default function RunwayCard({
  title,
  company,
  duration,
  description,
  runway = '09L',
}: RunwayCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative bg-gray-800 p-6 rounded-lg overflow-hidden border-2 border-yellow-400 border-dashed"
    >
      {/* Runway centerline */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-400 opacity-20" />

      {/* Runway markings */}
      <div className="absolute top-2 left-4 text-yellow-400 font-bold text-xs">
        RWY {runway}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-yellow-400 font-semibold">{company}</p>
          </div>
          <span className="text-gray-300 text-sm bg-gray-700 px-2 py-1 rounded">
            {duration}
          </span>
        </div>

        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>

      {/* Runway edge lights */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-between px-4">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="w-1 h-1 bg-blue-400 rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
