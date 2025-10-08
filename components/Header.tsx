
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center space-y-2 py-8">
      <h1 
        className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 animate-fade-in-up"
        style={{ animationDelay: '100ms' }}
      >
        TUGAS OJT 3 PELATIHAN KKA SMP MUBA 1
      </h1>
      <h2 
        className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 animate-fade-in-up"
        style={{ animationDelay: '200ms' }}
      >
        Peer Teaching: “PERAN KECERDASAN ARTIFISIAL DALAM KOMUNIKASI”
      </h2>
      <p 
        className="text-md text-slate-500 animate-fade-in-up"
        style={{ animationDelay: '300ms' }}
      >
        Mata Pelajaran: Koding dan Kecerdasan Artifisial
      </p>
    </header>
  );
};

export default Header;