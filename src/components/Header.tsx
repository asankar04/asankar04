import { motion } from 'framer-motion';

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-40">
      <nav className="max-w-4xl mx-auto px-4 h-16">
        <div className="flex items-center justify-center h-full space-x-8">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors duration-200"
            >
              {item.name}
            </motion.button>
          ))}
        </div>
      </nav>
    </header>
  );
}
