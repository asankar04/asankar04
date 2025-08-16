import { useState } from 'react';

export function useSection() {
  const [currentSection, setCurrentSection] = useState('checkIn');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSectionChange = (section: string) => {
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
