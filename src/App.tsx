import AnimatedBackground from './components/Backgrounds/AnimatedBackground';
import PaperPlane from './components/Custom/PaperPlane';
import CheckIn from './components/CheckIn';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Animated aviation background */}
      <AnimatedBackground />
      {/* PaperPlane Cursor */}
      <PaperPlane />

      {/* Welcome screen content */}
      <CheckIn />
    </div>
  );
}

export default App;
