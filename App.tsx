import React, { useState } from 'react';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import DocumentSection from './components/DocumentSection';
import Modal from './components/Modal';

const App: React.FC = () => {
  const [modalContent, setModalContent] = useState<{ url: string; title: string } | null>(null);

  const openModal = (url: string, title: string) => {
    setModalContent({ url, title });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="bg-slate-200 min-h-screen text-slate-900 p-4 sm:p-8 selection:bg-cyan-500 selection:text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-400/[0.2] [mask-image:linear-gradient(to_bottom,white_0%,transparent_100%)]"></div>
      <main className="relative max-w-4xl mx-auto flex flex-col gap-8 z-10">
        <Header />
        <ProfileCard />
        <DocumentSection onOpenModal={openModal} />
      </main>
      {modalContent && (
        <Modal 
          url={modalContent.url} 
          title={modalContent.title} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default App;