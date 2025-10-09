import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-slate-50/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-300/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:scale-110 transition-all duration-300"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      {theme === 'light' ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
    </button>
  );
};

export default ThemeToggle;
