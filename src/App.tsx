import AnimatedBackground from './components/Backgrounds/AnimatedBackground';
import PaperPlane from './components/Custom/PaperPlane';
import CheckIn from './components/CheckIn';
import Boarding from './components/Boarding';
import ThemePicker from './components/ThemePicker';
import Experience from './components/Experience';
import { useTheme } from './hooks/useTheme';
import { useSection } from './hooks/useSection';

function App() {
  const { currentTheme, changeTheme, color } = useTheme();
  const { currentSection, isTransitioning, handleSectionChange } = useSection();

  return (
    <div className="min-h-screen relative">
      {/* Theme Picker */}
      <ThemePicker currentTheme={currentTheme} setTheme={changeTheme} />

      {/* Animated Dark background */}
      <AnimatedBackground color={color} />
      {/* PaperPlane Cursor */}
      <PaperPlane />

      {/* Main Sections */}
      {currentSection === 'checkIn' && (
        <CheckIn
          handleSectionChange={handleSectionChange}
          isTransitioning={isTransitioning}
          color={color}
        />
      )}
      {currentSection === 'boarding' && (
        <Boarding
          handleSectionChange={handleSectionChange}
          isTransitioning={isTransitioning}
          color={color}
        />
      )}
      {currentSection === 'experience' && (
        <Experience
          handleSectionChange={handleSectionChange}
          isTransitioning={isTransitioning}
          color={color}
        />
      )}
    </div>
  );
}

export default App;
