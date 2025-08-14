import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import LetterBoard from '../Custom/LetterBoard';

export default function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second for live feel
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'HOME', id: 'home' },
    { name: 'EXPERIENCE', id: 'experience' },
    { name: 'SKILLS', id: 'skills' },
  ];

  return (
    <header className="top-0 left-0 right-0 bg-gray-900/50 z-40">
      {/* Live Status Bar
      <motion.div
        className="bg-yellow-400 text-gray-900 text-center py-1 overflow-hidden"
        animate={{ opacity: [1, 0.8, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <motion.span
          className="text-xs font-mono tracking-wider inline-block"
          animate={{ x: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          ✈️ ANIT SANKAR PORTFOLIO • WELCOME ABOARD
        </motion.span>
      </motion.div> */}

      <nav className="max-w-6xl mx-auto px-4 py-3">
        {/* 3 columns: left spacer, middle (auto width), right */}
        <div className="grid grid-cols-[auto_1fr_1fr] items-center">
          {/* Centered nav */}
          <div className="col-start-2 justify-self-center">
            <div className="flex space-x-8 text-center">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group flex flex-col items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LetterBoard text={item.name} />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Right-aligned time */}
          <div className="col-start-3 justify-self-end">
            <div className="flex flex-col items-end">
              <LetterBoard
                text={currentTime.toLocaleTimeString('en-US', {
                  hour12: false,
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
