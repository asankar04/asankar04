import { motion } from 'framer-motion';

export default function CheckIn() {
  return (
    <div className="relative z-10 min-h-screen bg-black/40 flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center mb-12"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-6xl md:text-8xl font-bold text-white tracking-wider mb-4"
        >
          WELCOME
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-32 h-0.5 bg-yellow-400 mx-auto"
        ></motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileHover={{
          scale: 1.05,
          boxShadow: '0 0 30px rgba(250, 204, 21, 0.4)',
        }}
        whileTap={{ scale: 0.98 }}
        className="bg-gray-900/90 backdrop-blur-sm border-2 border-yellow-400 border-dashed 
               px-12 py-6 text-2xl font-mono font-bold text-yellow-400 
               tracking-widest hover:bg-yellow-400 hover:text-gray-900 
               transition-all duration-300 rounded-sm
               shadow-lg hover:shadow-yellow-400/20"
      >
        CHECK IN
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="text-gray-400 text-sm font-mono mt-8 tracking-wide"
      >
        CLICK TO PROCEED TO BOARDING
      </motion.p>
    </div>
  );
}
