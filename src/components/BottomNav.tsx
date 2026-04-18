
import React from 'react';
import { Home, FileText, Stethoscope, Activity } from 'lucide-react';
import { Screen } from '../types';
import { motion } from 'motion/react';

interface BottomNavProps {
  currentScreen: Screen;
  onScreenChange: (screen: Screen) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onScreenChange }) => {
  const tabs = [
    { id: Screen.Home, label: 'Home', icon: Home },
    { id: Screen.Records, label: 'Records', icon: FileText },
    { id: Screen.Doctors, label: 'Doctors', icon: Stethoscope },
    { id: Screen.Emergency, label: 'Emergency', icon: Activity },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      <div className="bg-white/90 backdrop-blur-3xl rounded-t-[2.5rem] h-24 flex justify-around items-center px-4 pb-4 shadow-[0_-10px_40px_rgba(14,132,148,0.08)]">
        {tabs.map((tab) => {
          const isActive = currentScreen === tab.id || (tab.id === Screen.Doctors && currentScreen === Screen.Booking);
          const Icon = tab.icon;
          
          return (
            <button
              key={tab.id}
              onClick={() => onScreenChange(tab.id)}
              className={`relative flex flex-col items-center justify-center px-5 py-2 transition-all duration-300 ${
                isActive 
                  ? 'bg-primary-fixed/30 text-primary rounded-[2rem]' 
                  : 'text-outline hover:text-primary transition-transform scale-90 active:scale-100'
              }`}
            >
              <Icon className={`w-6 h-6 ${isActive ? 'fill-current' : ''}`} />
              <span className="font-body text-[11px] font-semibold uppercase tracking-wider mt-1">
                {tab.label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/10 rounded-[2rem] -z-10"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
