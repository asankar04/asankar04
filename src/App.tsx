import Header from './components/Header';
import LandingPage from './components/Landing';
import ExperiencePage from './components/Experience';
import SkillsPage from './components/Skills';
import PaperPlane from './components/PaperPlane';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Animated dark background with falling planes */}
      <AnimatedBackground />

      {/* Header with departure board style */}
      <Header />

      {/* User-controlled paper plane cursor */}
      <PaperPlane />

      {/* Main content sections */}
      <main className="relative z-10">
        <section
          id="home"
          className="min-h-screen pt-20 flex items-center justify-center"
        >
          <LandingPage />
        </section>

        <section
          id="experience"
          className="min-h-screen flex items-center justify-center"
        >
          <ExperiencePage />
        </section>

        <section
          id="skills"
          className="min-h-screen flex items-center justify-center"
        >
          <SkillsPage />
        </section>
      </main>
    </div>
  );
}

export default App;
