import Header from './components/Header';
import LandingPage from './components/Landing';
import ExperiencePage from './components/Experience';
import SkillsPage from './components/Skills';
import PaperPlane from './components/PaperPlane';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <PaperPlane />
      <div
        id="home"
        className="min-h-screen pt-16 flex items-center justify-center"
      >
        <LandingPage />
      </div>

      <div
        id="experience"
        className="min-h-screen flex items-center justify-center"
      >
        <ExperiencePage />
      </div>

      <div
        id="skills"
        className="min-h-screen flex items-center justify-center"
      >
        <SkillsPage />
      </div>
    </div>
  );
}

export default App;
