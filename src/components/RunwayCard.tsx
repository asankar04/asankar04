import { motion } from 'framer-motion';

interface RunwayCardProps {
  title: string;
  company: string;
  duration: string;
}

export default function RunwayCard({
  title,
  company,
  duration,
}: RunwayCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative bg-gray-800 p-6 rounded-lg overflow-hidden border-2 border-yellow-400 border-dotted"
      style={{
        borderStyle: 'solid solid dotted dotted',
        borderColor:
          'rgb(250 204 21) rgb(250 204 21) rgb(59 130 246) rgb(59 130 246)',
        borderWidth: '2px 2px 3px 3px',
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        <div className="flex flex-col justify-between items-start mb-4">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <span className="text-gray-300 text-sm bg-gray-700 px-2 py-1 rounded">
              {duration}
            </span>
          </div>
          <p className="text-yellow-400 font-semibold">{company}</p>
        </div>
      </div>
    </motion.div>
  );
}
