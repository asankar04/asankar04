import { useState } from 'react';
import { themes, type ThemeName } from '../utils/themes';

export function useTheme() {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('yellow');

  const changeTheme = (theme: ThemeName) => {
    setCurrentTheme(theme);

    const root = document.documentElement;
    const themeColor = themes[theme].primary;

    root.style.setProperty('--theme-primary', themeColor);
    root.style.setProperty('--theme-primary-hover', themeColor);
  };

  return {
    currentTheme,
    changeTheme,
    color: themes[currentTheme],
  };
}
