
import React from 'react';
import { Menu } from 'lucide-react';

interface TopBarProps {
  userImageUrl: string;
}

export const TopBar: React.FC<TopBarProps> = ({ userImageUrl }) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-2xl flex justify-between items-center px-6 py-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
      <div className="flex items-center gap-4">
        <button className="text-primary hover:bg-primary-fixed/20 transition-colors p-2 rounded-full">
          <Menu className="w-6 h-6" />
        </button>
        <span className="text-2xl font-extrabold bg-gradient-to-br from-primary to-primary-dim bg-clip-text text-transparent font-headline tracking-tight">
          SAARTHI
        </span>
      </div>
      <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden border-2 border-primary-fixed">
        <img 
          alt="User profile" 
          className="w-full h-full object-cover" 
          src={userImageUrl}
          referrerPolicy="no-referrer"
        />
      </div>
    </header>
  );
};
