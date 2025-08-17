import { motion } from 'framer-motion';
import ReturnButton from './Custom/ReturnButton';
import { type ThemeColor } from '../utils/themes';
import type { Section } from '../hooks/useSection';

interface ExperienceProps {
  color: ThemeColor;
  handleSectionChange: (section: Section) => void;
  isTransitioning: boolean;
}

const experience = [
  {
    title: 'Lead Software Engineer',
    flightNumber: 'AS 05',
    company: 'Proxylink',
    location: 'Birmingham, AL',
    date: '2025 - Present',
    status: 'In Progress',
  },
  {
    title: 'Software Engineer',
    flightNumber: 'AS 04',
    company: 'Young Software LLC',
    location: 'Birmingham, AL',
    date: '2024 - Present',
    status: 'In Progress',
  },
  {
    title: 'Software Engineer Intern',
    flightNumber: 'AS 03',
    company: 'ShipShape Agworks',
    location: 'Birmingham, AL',
    date: '2024',
    status: 'Completed',
  },
  {
    title: 'Web Development Intern',
    flightNumber: 'AS 02',
    company: 'Circlebox',
    location: 'Birmingham, AL',
    date: '2024',
    status: 'Completed',
  },
  {
    title: 'Software Development Intern',
    flightNumber: 'AS 01',
    company: 'Drew Thomas Software Consulting',
    location: 'Birmingham, AL',
    date: '2024',
    status: 'Completed',
  },
];

export default function Experience({
  color,
  handleSectionChange,
  isTransitioning,
}: ExperienceProps) {
  return (
    <motion.div
      className="relative z-10 bg-black/40 min-h-screen flex flex-col items-center justify-center px-4 py-8 max-md:px-0"
      initial={{ scale: 0.8 }}
      animate={{
        scale: isTransitioning ? 0.8 : 1,
      }}
      transition={{
        duration: 0.4,
        ease: 'easeInOut',
      }}
    >
      <ReturnButton
        color={color}
        handleSectionChange={() => handleSectionChange('boarding')}
      />

      {/* Experience Board */}
      <motion.div
        className="w-full max-w-5xl max-md:scale-95 max-sm:scale-88 rounded-2xl backdrop-blur-xl border shadow-2xl overflow-hidden"
        style={{
          borderColor: `${color.primary}30`,
          background: `linear-gradient(135deg, rgba(17,24,39,0.4) 0%, rgba(31,41,55,0.3) 100%)`,
          boxShadow: `0 25px 50px -12px rgba(0,0,0,0.5), 0 0 0 1px ${color.primary}10, inset 0 1px 0 rgba(255,255,255,0.05)`,
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Header */}
        <div
          className="relative px-8 py-8 border-b"
          style={{
            borderColor: `${color.primary}20`,
            background: `linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 100%)`,
          }}
        >
          <div className="flex justify-center items-center gap-4">
            <motion.div
              className="text-3xl"
              style={{ color: color.primary }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              💼
            </motion.div>
            <div className="text-center">
              <h2
                className="text-3xl font-bold tracking-tight mb-1"
                style={{
                  color: color.primary,
                  textShadow: `0 0 20px ${color.primary}40`,
                }}
              >
                Experience
              </h2>
            </div>
          </div>
        </div>

        {/* Column Headers */}
        <div
          className="px-4 md:px-8 py-4 border-b border-yellow-500/20"
          style={{
            background: `linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 100%)`,
            borderColor: color.primary,
          }}
        >
          <div
            className="grid grid-cols-[60px_1fr_1fr_60px_30px] md:grid-cols-[80px_1fr_1fr_120px_40px] gap-2 md:gap-6 font-mono text-xs md:text-sm font-semibold"
            style={{ color: color.primary }}
          >
            <div>Flight</div>
            <div>Position</div>
            <div className="hidden sm:block">Company</div>
            <div className="sm:hidden">Co.</div>
            <div>Date</div>
            <div className="text-center">Status</div>
          </div>
        </div>

        {/* Experience Rows */}
        <div
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 100%)`,
          }}
        >
          {experience.map((item, index) => (
            <motion.div
              key={item.title}
              className="px-4 md:px-8 py-4 border-b hover:bg-gradient-to-r hover:from-white/5 hover:to-transparent transition-all duration-300 group"
              style={{ borderColor: `${color.primary}15` }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              whileHover={{
                scale: 1.01,
                boxShadow: `inset 0 0 0 1px ${color.primary}20`,
              }}
            >
              <div
                className="grid grid-cols-[60px_1fr_1fr_60px_30px] md:grid-cols-[80px_1fr_1fr_120px_40px] gap-2 md:gap-6 font-mono text-xs md:text-base"
                style={{ color: color.primary }}
              >
                {/* Flight Number */}
                <div className="font-semibold">{item.flightNumber}</div>

                {/* Position */}
                <div className="font-semibold">{item.title}</div>

                {/* Company */}
                <div className="font-semibold">
                  <span className="sm:inline">{item.company}</span>
                </div>

                {/* Date */}
                <div className="font-semibold">
                  <span className="hidden md:inline">{item.date}</span>
                  <span className="md:hidden">{item.date.split(' - ')[0]}</span>
                </div>

                {/* Status */}
                <div className="flex pt-2 justify-center">
                  <motion.div
                    className="h-2 w-2 rounded-full"
                    style={{
                      backgroundColor:
                        item.status === 'Completed' ? '#00ff00' : '#ffff00',
                    }}
                    animate={{
                      opacity: [1, 0.3, 1],
                      scale: [1, 1.5, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div
          className="px-8 py-6 border-t"
          style={{
            borderColor: `${color.primary}20`,
            background: `linear-gradient(135deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.1) 100%)`,
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                style={{ color: color.primary }}
              >
                🌎
              </motion.div>
              <span
                className="text-sm font-medium"
                style={{ color: color.primary }}
              >
                Professional Journey
              </span>
            </div>
            <div
              className="text-xs opacity-60"
              style={{ color: color.primary }}
            >
              {experience.length} Positions
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
