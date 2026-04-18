
import React from 'react';
import { QrCode, ArrowUp, CornerDownLeft, ChevronRight, Stethoscope, Activity, Pill, UserSearch, MapPin } from 'lucide-react';
import { Screen } from '../types';
import { motion } from 'motion/react';

interface NavigationProps {
  onNavigate: (screen: Screen) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onNavigate }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pt-24 px-6 max-w-5xl mx-auto pb-32"
    >
      <div className="flex gap-3 overflow-x-auto pb-6 no-scrollbar">
        {[
          { icon: Stethoscope, label: 'OPD', active: true },
          { icon: Activity, label: 'ICU', active: false },
          { icon: Pill, label: 'Pharmacy', active: false },
          { icon: UserSearch, label: 'Doctor Search', active: false },
        ].map((btn, i) => {
          const Icon = btn.icon;
          return (
            <button 
              key={i}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all whitespace-nowrap ${
                btn.active 
                  ? 'bg-primary text-on-primary shadow-lg scale-100' 
                  : 'bg-surface-container-lowest text-on-surface-variant border border-outline-variant hover:bg-surface-container-low'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-sm font-label uppercase tracking-wider">{btn.label}</span>
            </button>
          );
        })}
      </div>

      <div className="relative bg-surface-container-low rounded-xl overflow-hidden min-h-[450px] shadow-inner mb-8 flex items-center justify-center perspective-map">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-50/50 to-transparent"></div>
        
        <div className="rotated-map w-[120%] h-[120%] relative">
          <img 
            alt="3D Floor Plan" 
            className="w-full h-full object-cover opacity-60 rounded-xl" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuXqzuutN8zUNaFESNTb0Fybt4SOeNZ1LNgNKJg0KSRWwycXWCM7yANk7s8GTPAzNtiWibimzgpRSKp3qHzxHHck49pvjA4LUQ3_RIjfTfoenlAR1dhrjy3xzH2clEsxqodzAe177IGdr1G7vJQZmQGaz5fMd9ZMqV0gQMysv9SPWEmGjjOVR1G-TOCTQuytc2nSxm-ZabnkrQHpjUA0mUOC0uTUvsot93OAzbjyZQOyGr-NXkmRQsBZ1JUuQOE4BYbCB8iJ8U-k51"
            referrerPolicy="no-referrer"
          />
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1000 1000">
            <path 
              d="M 300 700 L 300 500 L 600 500 L 600 300" 
              fill="none" 
              stroke="#006976" 
              strokeDasharray="1 20" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="8"
            />
            <circle cx="300" cy="700" fill="#006976" r="12" />
            <circle cx="600" cy="300" fill="#fa746f" r="16" />
          </svg>

          <div className="absolute top-[30%] left-[60%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="bg-primary text-on-primary px-4 py-2 rounded-lg text-xs font-bold shadow-xl mb-2">OPD - Cardiology</div>
            <div className="w-4 h-4 bg-primary rounded-full animate-pulse border-4 border-white shadow-lg"></div>
          </div>
          
          <div className="absolute top-[70%] left-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
            <div className="bg-white/90 backdrop-blur-md text-on-surface-variant px-3 py-1 rounded-full text-[10px] font-bold shadow-md mb-2">You are here</div>
            <MapPin className="text-primary w-8 h-8 fill-current" />
          </div>
        </div>

        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          {['3', '2', '1', 'G'].map((floor) => (
            <button 
              key={floor}
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-md transition-all ${
                floor === '2' 
                  ? 'bg-primary text-on-primary shadow-lg' 
                  : 'bg-surface-container-lowest text-on-surface-variant hover:bg-primary hover:text-on-primary'
              }`}
            >
              {floor}
            </button>
          ))}
        </div>

        <button 
          onClick={() => onNavigate(Screen.QRScanner)}
          className="absolute bottom-6 left-6 flex items-center gap-3 bg-white/40 backdrop-blur-xl border border-white/40 px-5 py-4 rounded-xl shadow-[0_8px_32px_0_rgba(0,105,118,0.1)] active:scale-95 transition-transform"
        >
          <QrCode className="text-primary w-6 h-6" />
          <span className="text-primary font-bold text-sm tracking-wide">SCAN QR</span>
        </button>
      </div>

      <section className="bg-surface-container-lowest/70 backdrop-blur-xl rounded-xl p-6 border border-outline-variant shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-on-surface tracking-tight">Navigation Steps</h3>
          <span className="text-primary font-bold text-sm">ETA: 2 mins</span>
        </div>
        
        <div className="space-y-6">
          {[
            { icon: ArrowUp, title: 'Go straight for 10m', sub: 'Walk towards the main elevator bank', active: true },
            { icon: CornerDownLeft, title: 'Turn left at the Pharmacy', sub: 'Pass the central waiting area on your right', active: true },
            { icon: ChevronRight, title: 'Arrive at OPD - Cardiology', sub: 'Second door on the right side of the hallway', active: false },
          ].map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className={`flex items-start gap-4 ${!step.active ? 'opacity-50' : ''}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${step.active ? 'bg-cyan-50' : 'bg-surface-container-low'}`}>
                  <Icon className={`w-5 h-5 ${step.active ? 'text-primary' : 'text-on-surface-variant'}`} />
                </div>
                <div>
                  <p className="text-on-surface font-bold">{step.title}</p>
                  <p className="text-on-surface-variant text-sm">{step.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
};
