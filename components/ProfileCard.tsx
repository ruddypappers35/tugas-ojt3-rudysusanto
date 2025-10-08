import React from 'react';
import { Github, Globe, MessageSquare, CheckCircle2, AtSign } from 'lucide-react';

const socialLinks = [
  { 
    href: 'https://rdsusanto.my.id', 
    icon: Globe, 
    label: 'Website' 
  },
  { 
    href: 'https://wa.me/6282127618761', 
    icon: MessageSquare, 
    label: 'WhatsApp' 
  },
  { 
    href: 'https://github.com/ruddypappers35', 
    icon: Github, 
    label: 'GitHub' 
  },
  {
    href: 'https://www.threads.net/@ruddy_pappers',
    icon: AtSign,
    label: 'Threads'
  }
];

const ProfileCard: React.FC = () => {
  return (
    <div 
      className="bg-slate-50/60 backdrop-blur-sm border border-slate-300/50 rounded-2xl p-6 shadow-xl shadow-slate-300/50 animate-fade-in-up"
      style={{ animationDelay: '400ms' }}
    >
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <img
          src="https://rdsusanto.my.id/src/images/profile/user.svg"
          alt="Rudy Susanto"
          className="w-28 h-28 rounded-full border-4 border-cyan-500 shadow-lg"
        />
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <h3 className="text-2xl font-bold text-slate-900">Rudy Susanto, S.Pd</h3>
            <CheckCircle2 className="w-6 h-6 text-white fill-blue-500" aria-label="Verified" />
          </div>
          <p className="text-lg text-slate-600">SMPN 2 Tungkal Jaya</p>
          <div className="mt-4 flex items-center justify-center sm:justify-start gap-6 text-slate-600">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
                className="p-2 rounded-full hover:bg-cyan-100 hover:text-cyan-600 transition-all duration-300 hover:scale-110"
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;