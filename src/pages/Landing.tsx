
import React from 'react';
import { Search, MapPin, ArrowRight, History, Compass, Calendar, Accessibility, Share2, LocateFixed, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { Screen } from '../types';

interface LandingProps {
  onNavigate: (screen: Screen) => void;
}

export const Landing: React.FC<LandingProps> = ({ onNavigate }) => {
  return (
    <div className="bg-surface min-h-screen font-body pb-32">
      {/* Hero Section */}
      <section className="relative px-6 pt-24 pb-16 overflow-hidden bg-gradient-to-b from-primary-container/20 to-surface">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-headline font-extrabold text-on-surface leading-[1.1]"
          >
            Compassion <br />
            <span className="italic text-primary">In Every Turn.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant text-lg leading-relaxed max-w-lg mx-auto"
          >
            Navigate complex healthcare environments with Serene Navigator. Your digital saarthi for seamless hospital logistics and facility wayfinding.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative mt-12 bg-white rounded-[40px] shadow-2xl p-4 space-y-2 border border-outline-variant/50 max-w-md mx-auto"
          >
            <div className="flex items-center gap-4 px-6 py-4 border-b border-outline-variant/30">
              <Search className="text-primary w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search for Hospital/Facility" 
                className="w-full bg-transparent border-none focus:outline-none text-on-surface font-medium placeholder:text-outline"
              />
            </div>
            <div className="flex items-center gap-4 px-6 py-4">
              <MapPin className="text-primary w-5 h-5" />
              <input 
                type="text" 
                placeholder="Your current location" 
                className="w-full bg-transparent border-none focus:outline-none text-on-surface font-medium placeholder:text-outline"
              />
            </div>
            <button 
              onClick={() => onNavigate(Screen.Login)}
              className="w-full bg-primary hover:bg-primary-dim text-on-primary py-5 rounded-[32px] font-bold text-xl flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-all mt-2"
            >
              Get Started <ArrowRight className="w-6 h-6" />
            </button>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-3 mt-8">
            <span className="text-xs font-bold text-outline-variant uppercase tracking-widest mr-2">Nearby:</span>
            <div className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full text-sm font-bold text-on-surface-variant">
              <Zap className="w-3 h-3 fill-current" /> City General
            </div>
            <div className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-full text-sm font-bold text-on-surface-variant opacity-60">
              <Zap className="w-3 h-3" /> Trauma Center West
            </div>
          </div>
        </div>
      </section>

      {/* Recent Searches */}
      <section className="px-6 py-12 max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-headline font-bold flex items-center gap-3">
            <History className="text-primary w-6 h-6" /> Recent Searches
          </h2>
          <button className="text-primary text-sm font-bold">Clear all</button>
        </div>

        <div className="space-y-4">
          {[
            { name: "St. Jude Medical Complex", loc: "North Wing, Floor 4, Cardiology", date: "LAST VISITED OCT 12" },
            { name: "Community Health Hub", loc: "Main Lobby, Registration Desk", date: "LAST VISITED YESTERDAY" }
          ].map((item, i) => (
            <div key={i} className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/30 flex justify-between items-start group hover:shadow-md transition-shadow cursor-pointer">
              <div>
                <h3 className="text-lg font-bold text-on-surface mb-1">{item.name}</h3>
                <p className="text-sm text-on-surface-variant mb-3">{item.loc}</p>
                <span className="text-[10px] font-black tracking-widest bg-surface-container-high px-2 py-1 rounded text-outline uppercase">{item.date}</span>
              </div>
              <ArrowRight className="w-6 h-6 text-outline group-hover:text-primary transition-colors" />
            </div>
          ))}
        </div>
      </section>

      {/* Urgent Nav */}
      <section className="px-6 py-8">
        <div className="max-w-2xl mx-auto bg-[#0a3d38] rounded-[40px] p-10 relative overflow-hidden text-white shadow-2xl">
          <div className="relative z-10 space-y-6">
            <h2 className="text-4xl font-headline font-bold leading-tight">Need Urgent Navigation?</h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-xs">
              Access the emergency facility map instantly without login.
            </p>
            <button 
              onClick={() => onNavigate(Screen.Emergency)}
              className="bg-primary-fixed text-on-primary-fixed px-8 py-5 rounded-2xl font-bold flex items-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-xl"
            >
              <LocateFixed className="w-6 h-6" /> Facility Map
            </button>
          </div>
          <div className="absolute right-0 bottom-0 opacity-10 scale-150 rotate-12">
            <Compass className="w-64 h-64" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 py-20 bg-surface-container-lowest mt-12">
        <div className="max-w-2xl mx-auto text-center space-y-16">
          <h2 className="text-4xl font-headline font-extrabold text-on-surface">Seamless Wayfinding <br /> Features</h2>
          
          <div className="grid grid-cols-1 gap-16">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-20 h-20 bg-primary-container rounded-[24px] flex items-center justify-center">
                <Compass className="text-primary w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold">Indoor Live View</h3>
              <p className="text-on-surface-variant leading-relaxed">AR-powered instructions that guide you through corridors to your exact destination.</p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-20 h-20 bg-primary-container rounded-[24px] flex items-center justify-center">
                <Calendar className="text-primary w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold">Appointment Sync</h3>
              <p className="text-on-surface-variant leading-relaxed">Automatically maps the best route based on your check-in time and current hospital traffic.</p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="w-20 h-20 bg-primary-container rounded-[24px] flex items-center justify-center">
                <Accessibility className="text-primary w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold">Accessible Routes</h3>
              <p className="text-on-surface-variant leading-relaxed">Prioritize elevators, ramps, and wide corridors for those requiring mobility assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-20 bg-surface-container-high">
        <div className="max-w-2xl mx-auto space-y-12">
          <div className="flex items-center gap-3 opacity-80">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
              <LocateFixed className="w-6 h-6" />
            </div>
            <span className="text-2xl font-headline font-extrabold text-primary">Serene Navigator</span>
          </div>
          
          <p className="text-on-surface-variant leading-relaxed">
            Modernizing hospital navigation with empathy and precision. Helping patients find their way since 2024.
          </p>

          <button className="p-4 bg-white rounded-full shadow-lg">
            <Share2 className="text-primary w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 gap-12 pt-8 border-t border-outline-variant/30">
            <div className="space-y-6">
              <h4 className="font-bold uppercase tracking-widest text-xs text-outline">Resources</h4>
              <ul className="space-y-4 text-on-surface-variant font-medium">
                <li>For Hospitals</li>
                <li>Accessibility Tools</li>
                <li>Privacy Shield</li>
                <li>API Documentation</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-bold uppercase tracking-widest text-xs text-outline">Support</h4>
              <ul className="space-y-4 text-on-surface-variant font-medium">
                <li>Help Center</li>
                <li>Contact Staff</li>
                <li>Emergency Protocol</li>
                <li>Feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
