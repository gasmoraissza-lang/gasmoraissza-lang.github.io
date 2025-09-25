export type Theme = 'light' | 'dark' | 'system';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

export interface Locale {
  code: string;
  name: string;
  flag: string;
}

export interface TranslationKeys {
  [key: string]: string | TranslationKeys;
}
