import { motion } from 'framer-motion';
import { type ThemeColor } from '../../utils/themes';
import type { Section } from '../../hooks/useSection';
import { Globe, ArrowRight, ArrowDown, Briefcase } from 'lucide-react';
import Shimmer from '../Custom/Shimmer';

interface RedirectSignsProps {
  color: ThemeColor;
  handleSectionChange: (section: Section) => void;
}

export default function RedirectSigns({
  color,
  handleSectionChange,
}: RedirectSignsProps) {
  return (
    <>
      {/* Airport Sign redirect - Experiences */}
      <motion.div
        className="w-full max-w-lg max-md:scale-90"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          x: [0, 6, 0],
        }}
        transition={{
          duration: 0.6,
          delay: 0.5,
          x: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <motion.div
          className="rounded-2xl"
          whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${color.primary}33` }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <Shimmer
            className="rounded-2xl border backdrop-blur-xl w-full cursor-pointer"
            style={{
              background: color.primary,
              borderColor: `${color.primary}40`,
            }}
            delay={1}
            intensity={0.3}
          >
            <button
              className="w-full group"
              onClick={() => handleSectionChange('experience')}
            >
              <div className="px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-md p-2 group-hover:animate-pulse">
                    <Globe size={36} color="black" />
                  </div>

                  <h2 className="text-black font-mono font-bold text-4xl tracking-wide group-hover:animate-pulse">
                    EXPERIENCE
                  </h2>
                </div>

                <div className="p-1 group-hover:animate-pulse">
                  <ArrowRight size={40} color="black" />
                </div>
              </div>
            </button>
          </Shimmer>
        </motion.div>
      </motion.div>

      {/* Airport Sign redirect - Projects */}
      <motion.div
        className="w-full max-w-lg max-md:scale-90"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: [0, -6, 0],
        }}
        transition={{
          duration: 0.6,
          delay: 0.7,
          y: {
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        <motion.div
          className="rounded-2xl"
          whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${color.primary}33` }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
        >
          <Shimmer
            className="rounded-2xl border backdrop-blur-xl w-full cursor-pointer"
            style={{
              background: color.primary,
              borderColor: `${color.primary}40`,
              boxShadow: `0 0 30px ${color.primary}11`,
            }}
            delay={1.5}
            intensity={0.3}
          >
            <button
              className="w-full group"
              onClick={() => handleSectionChange('projects')}
            >
              <div className="px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-md p-2 group-hover:animate-pulse">
                    <Briefcase size={36} color="black" />
                  </div>

                  <h2 className="text-black font-mono font-bold text-4xl tracking-wide group-hover:animate-pulse">
                    PROJECTS
                  </h2>
                </div>

                <div className="p-1 group-hover:animate-pulse">
                  <ArrowDown size={40} color="black" />
                </div>
              </div>
            </button>
          </Shimmer>
        </motion.div>
      </motion.div>
    </>
  );
}
