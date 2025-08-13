import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          👋 Hello! I'm Anit Sankar
        </h1>
        <p className="text-xl text-gray-600">
          Let's build something amazing!
        </p>
      </motion.div>
    </div>
  )
}

export default App