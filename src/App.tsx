import AnimatedBackground from './components/Backgrounds/AnimatedBackground';
import PaperPlane from './components/Custom/PaperPlane';
import CheckIn from './components/CheckIn';
import { useState } from 'react';
import Boarding from './components/Boarding';
import ThemePicker from './components/ThemePicker';
import { themes, type ThemeName } from './utils/themes';

function App() {
  const [currentSection, setCurrentSection] = useState('checkIn');
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('yellow');

  const color = themes[currentTheme];

  const handleThemeChange = (theme: ThemeName) => {
    // Update current theme
    setCurrentTheme(theme);

    // Update CSS colors for scrollbars
    const root = document.documentElement;
    const themeColor = themes[theme].primary;

    root.style.setProperty('--theme-primary', themeColor);
    root.style.setProperty('--theme-primary-hover', themeColor);
  };

  return (
    <div className="min-h-screen relative">
      {/* Theme Picker - top left */}
      <ThemePicker currentTheme={currentTheme} setTheme={handleThemeChange} />

      {/* Animated aviation background */}
      <AnimatedBackground color={color} />
      {/* PaperPlane Cursor */}
      <PaperPlane />

      {/* Welcome screen content */}
      {currentSection === 'checkIn' && (
        <CheckIn setCurrentSection={setCurrentSection} color={color} />
      )}
      {currentSection === 'boarding' && (
        <Boarding setCurrentSection={setCurrentSection} color={color} />
      )}
    </div>
  );
}

export default App;
