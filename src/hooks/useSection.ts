import { useState } from 'react';

export type Section = 'checkIn' | 'boarding' | 'experience' | 'projects';
export type TransitionDirection = 'left' | 'right' | 'up' | 'down' | null;

export function useSection() {
  const [currentSection, setCurrentSection] = useState<Section>('checkIn');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionDirection, setTransitionDirection] =
    useState<TransitionDirection>(null);

  const handleSectionChange = (
    section: Section,
    direction: TransitionDirection
  ) => {
    setTransitionDirection(direction);
    setIsTransitioning(true);
    // Change section after a brief delay to let animation start
    setTimeout(() => {
      setCurrentSection(section);
    }, 250); // Halfway through 500ms animation
  };

  return {
    currentSection,
    isTransitioning,
    setIsTransitioning,
    transitionDirection,
    handleSectionChange,
  };
}
