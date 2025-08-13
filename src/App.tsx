import { motion } from 'framer-motion'
import Header from './components/Header'
import LandingPage from './components/Landing'
import ExperiencePage from './components/Experience'
import SkillsPage from './components/Skills'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      <div id="home" className="min-h-screen pt-16 flex items-center justify-center">
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
          <LandingPage />
        </motion.div>
      </div>

      <div id="experience" className="min-h-screen flex items-center justify-center">
        <ExperiencePage />
      </div>

      <div id="skills" className="min-h-screen flex items-center justify-center">
        <SkillsPage />
      </div>
    </div>
  )
}

export default App