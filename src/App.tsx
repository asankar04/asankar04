import AnimatedBackground from './components/Backgrounds/AnimatedBackground';
import PaperPlane from './components/Custom/PaperPlane/PaperPlane';
import CheckIn from './components/CheckIn';
import Boarding from './components/Boarding/Boarding';
import ThemePicker from './components/Custom/ThemePicker';
import Experience from './components/Experience';
import Projects from './components/Projects/Projects';
import { useTheme } from './hooks/useTheme';
import { useSection } from './hooks/useSection';
import AviationOverlay from './components/Custom/AviationOverlay';

function App() {
  const { currentTheme, changeTheme, color } = useTheme();
  const {
    currentSection,
    isTransitioning,
    setIsTransitioning,
    handleSectionChange,
    transitionDirection,
  } = useSection();

  return (
    <div className="min-h-screen relative">
      {/* Theme Picker */}
      <ThemePicker currentTheme={currentTheme} setTheme={changeTheme} />

      {/* Animated Dark background */}
      <AnimatedBackground color={color} />
      {/* PaperPlane Cursor */}
      <PaperPlane color={color} />

      {/* Aviation Overlay */}
      <AviationOverlay
        isVisible={isTransitioning}
        direction={transitionDirection || 'right'}
        color={color}
        onComplete={() => {
          setIsTransitioning(false);
        }}
      />

      {/* Main Sections */}
      {currentSection === 'checkIn' && (
        <CheckIn handleSectionChange={handleSectionChange} color={color} />
      )}
      {currentSection === 'boarding' && (
        <Boarding handleSectionChange={handleSectionChange} color={color} />
      )}
      {currentSection === 'experience' && (
        <Experience handleSectionChange={handleSectionChange} color={color} />
      )}
      {currentSection === 'projects' && (
        <Projects handleSectionChange={handleSectionChange} color={color} />
      )}
    </div>
  );
}

export default App;
