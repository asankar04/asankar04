import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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

  // Clean letter board without flickering animation
  const LetterBoard = ({ text }: { text: string }) => (
    <div className="flex space-x-0.5">
      {text.split('').map((char, index) => (
        <div
          key={index}
          className="bg-gray-800 border border-gray-600 px-1.5 py-1 min-w-[16px] text-center"
        >
          <span className="text-yellow-400 font-mono text-xs font-bold">
            {char === ' ' ? '\u00A0' : char}
          </span>
        </div>
      ))}
    </div>
  );

  const navItems = [
    { heading: 'GATE A', name: 'HOME', id: 'home' },
    { heading: 'GATE B', name: 'EXPERIENCE', id: 'experience' },
    { heading: 'GATE C', name: 'SKILLS', id: 'skills' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 border-b-2 border-yellow-400 z-40">
      {/* Live Status Bar */}
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
      </motion.div>

      <nav className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Callsign Display */}
          <div className="flex flex-col items-start">
            <div className="text-yellow-400 text-xs font-mono mb-1">
              CALLSIGN
            </div>
            <LetterBoard text="AS-04" />
          </div>

          {/* Navigation with departure board style */}
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="group flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-yellow-400 text-xs font-mono mb-1">
                  {item.heading}
                </div>
                <LetterBoard text={item.name} />
              </motion.button>
            ))}
          </div>

          {/* Live Time Display */}
          <div className="flex flex-col items-end">
            <div className="text-yellow-400 text-xs font-mono mb-1">
              LOCAL TIME
            </div>
            <LetterBoard
              text={currentTime.toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
              })}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
