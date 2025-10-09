import React from 'react';
import { BookOpen, FileText, ExternalLink, Presentation, BookUp2 } from 'lucide-react';

interface DocumentSectionProps {
  onOpenModal: (url: string, title: string) => void;
}

const documents = [
  {
    id: 'materi-presentasi',
    title: 'Materi (Presentasi)',
    url: 'https://ojt3-kka-rudysusanto.vercel.app/',
    icon: Presentation,
    type: 'external' as const,
  },
  {
    id: 'modul',
    title: 'Modul Ajar (Dokumen)',
    url: 'https://drive.google.com/file/d/1DNINkVVU6W70UWPvNmZLoknEzJXhNEP0/preview',
    icon: BookOpen,
    type: 'modal' as const,
  },
  {
    id: 'modul-ajar-interaktif',
    title: 'Modul Ajar Interaktif(Web)',
    url: 'https://modulajar-kka-rudysusanto.vercel.app/',
    icon: BookUp2,
    type: 'modal' as const,
  },
  {
    id: 'lkpd-interactive',
    title: 'LKPD Interaktif',
    url: 'https://lkpd-ojt-3-rudysusanto.vercel.app/',
    icon: ExternalLink,
    type: 'external' as const,
  },
  {
    id: 'lkpd-doc',
    title: 'Dokumen LKPD',
    url: 'https://drive.google.com/file/d/1R8cw9UsVGxfwe0yniQgj0Tsyn3PaJSnJ/preview',
    icon: FileText,
    type: 'modal' as const,
  },
];

const DocumentSection: React.FC<DocumentSectionProps> = ({ onOpenModal }) => {
  return (
    <div className="bg-slate-50/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-300/50 dark:border-slate-700/50 rounded-2xl p-6 shadow-xl shadow-slate-300/50 dark:shadow-black/50">
      <h3 
        className="text-xl font-bold text-center mb-6 text-slate-900 dark:text-slate-100 animate-fade-in-up"
        style={{ animationDelay: '500ms' }}
      >
        Materi Pembelajaran
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {documents.map((doc, index) => (
          <button
            key={doc.id}
            onClick={() => {
              if (doc.type === 'modal') {
                onOpenModal(doc.url, doc.title);
              } else {
                window.open(doc.url, '_blank', 'noopener,noreferrer');
              }
            }}
            className="group relative flex items-center justify-start gap-3 w-full px-6 py-4 text-lg font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 dark:hover:shadow-cyan-400/20 border border-slate-200 dark:border-slate-700 animate-fade-in-up"
            style={{ animationDelay: `${600 + index * 100}ms` }}
          >
            <span className="absolute left-0 top-0 h-0 w-0 border-t-2 border-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute right-0 top-0 h-0 w-0 border-r-2 border-cyan-500 transition-all duration-300 group-hover:h-full"></span>
            <span className="absolute bottom-0 right-0 h-0 w-0 border-b-2 border-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            <span className="absolute bottom-0 left-0 h-0 w-0 border-l-2 border-cyan-500 transition-all duration-300 group-hover:h-full"></span>
            <doc.icon className="w-6 h-6 text-cyan-500 group-hover:animate-pulse" />
            <span>{doc.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DocumentSection;