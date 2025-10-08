import React from 'react';
import { Code, Coffee } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-8">
      <p className="text-slate-500 flex items-center justify-center gap-2">
        <span>Dibuat dengan</span>
        <Code className="w-5 h-5 text-cyan-600" />
        <span>dan</span>
        <Coffee className="w-5 h-5 text-amber-700" />
        <span>oleh</span>
        <a
          href="https://rdsusanto.my.id"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-blue-600 hover:text-blue-800 hover:underline transition-colors"
        >
          Rudy Susanto, S.Pd
        </a>
      </p>
    </footer>
  );
};

export default Footer;