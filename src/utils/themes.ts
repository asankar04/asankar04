export const themes = {
  yellow: { primary: '#facc15' },
  red: { primary: '#ef4444' },
  green: { primary: '#10b981' },
  blue: { primary: '#3b82f6' },
  purple: { primary: '#8b5cf6' },
} as const;

export type ThemeName = keyof typeof themes;
export type ThemeColor = {
  primary: string;
};
