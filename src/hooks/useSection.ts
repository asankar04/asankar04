import { useState } from 'react';

export type Section = 'checkIn' | 'boarding' | 'experience' | 'projects';

export function useSection() {
  const [currentSection, setCurrentSection] = useState<Section>('checkIn');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSectionChange = (section: Section) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSection(section);
      setIsTransitioning(false);
    }, 300);
  };

  return {
    currentSection,
    isTransitioning,
    handleSectionChange,
  };
}
