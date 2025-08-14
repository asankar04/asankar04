import Header from './components/Header/Header';
import LandingPage from './components/Sections/Landing';
import ExperiencePage from './components/Sections/Experience';
import SkillsPage from './components/Sections/Skills';
import PaperPlane from './components/Custom/PaperPlane';
// import SkyBackground from './components/SkyBackground';
import AnimatedBackground from './components/Backgrounds/AnimatedBackground';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <AnimatedBackground />
      {/* <SkyBackground /> */}

      {/* Cursor & Header */}
      <PaperPlane />
      <Header />

      {/* Content sections */}
      <main className="relative z-10">
        <section id="home" className="min-h-screen pt-20 flex justify-center">
          <LandingPage />
        </section>

        <section id="experience" className="min-h-screen flex justify-center">
          <ExperiencePage />
        </section>

        <section id="skills" className="min-h-screen flex justify-center">
          <SkillsPage />
        </section>
      </main>
    </div>
  );
}

export default App;
