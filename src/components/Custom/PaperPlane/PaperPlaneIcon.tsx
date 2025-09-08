import type { ThemeColor } from '../../../utils/themes';

interface PaperPlaneIconProps {
  color: ThemeColor;
  direction: 'left' | 'right' | 'up' | 'down';
  size?: number;
}

export default function PaperPlaneIcon({
  color,
  direction,
  size = 35,
}: PaperPlaneIconProps) {
  // Calculate rotation based on direction
  const getRotation = () => {
    switch (direction) {
      case 'right':
        return -30; // Point right
      case 'left':
        return 150; // Point left
      case 'up':
        return -120; // Point up
      case 'down':
        return 60; // Point down
      default:
        return -30;
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className="drop-shadow-lg"
      style={{
        transform: `rotate(${getRotation()}deg)`,
      }}
    >
      {/* Plane */}
      <polygon
        points="50,10 20,80 50,65 80,80"
        fill="currentColor"
        style={{
          stroke: color.primary,
        }}
        strokeWidth="2"
      />
    </svg>
  );
}
