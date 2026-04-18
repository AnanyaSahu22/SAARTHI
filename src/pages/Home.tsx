
import React from 'react';
import { Map, Stethoscope, Calendar, Activity, Search, Mic, MapPin, ChevronDown, Plus, CalendarCheck } from 'lucide-react';
import { Screen } from '../types';
import { motion } from 'motion/react';

interface HomeProps {
  onNavigate: (screen: Screen) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="pt-24 pb-32 px-6 max-w-5xl mx-auto space-y-8"
    >
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-[3.5rem] font-headline font-extrabold text-on-surface leading-tight tracking-tight">
              Welcome, <span className="text-primary">Ananya</span>
            </h2>
            <p className="text-on-surface-variant text-lg max-w-md">
              Your health journey is our priority. How can we assist you today?
            </p>
          </div>
          <div className="relative group">
            <label className="block text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-1 ml-4">Current Facility</label>
            <div className="flex items-center gap-3 bg-surface-container-low px-6 py-4 rounded-full border border-outline-variant cursor-pointer hover:bg-surface-container transition-all">
              <MapPin className="text-primary w-5 h-5 fill-current" />
              <span className="font-bold text-on-surface">City General Hospital</span>
              <ChevronDown className="text-outline w-5 h-5 ml-2" />
            </div>
          </div>
        </div>

        <div className="relative max-w-2xl">
          <div className="glass-search flex items-center px-6 py-5 rounded-xl shadow-[0_20px_50px_rgba(0,105,118,0.06)] border border-white/40 ring-1 ring-black/[0.02]">
            <Search className="text-primary w-5 h-5 mr-4" />
            <input 
              className="bg-transparent border-none focus:outline-none w-full placeholder:text-on-surface-variant/60 font-medium" 
              placeholder="Search doctors, departments, or services" 
              type="text"
            />
            <button className="p-2 text-primary-dim hover:bg-primary-container/20 rounded-lg transition-colors">
              <Mic className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Navigate Card */}
        <button 
          onClick={() => onNavigate(Screen.Navigation)}
          className="group relative hero-gradient rounded-xl p-8 flex flex-col justify-between h-64 overflow-hidden shadow-2xl transition-transform active:scale-95 duration-200 cursor-pointer text-left"
        >
          <div className="absolute top-0 right-0 w-48 h-48 -mr-12 -mt-12 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all"></div>
          <div className="z-10 bg-white/20 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center">
            <Map className="text-white w-8 h-8 fill-current" />
          </div>
          <div className="z-10">
            <h3 className="text-white text-2xl font-bold font-headline mb-2">Navigate</h3>
            <p className="text-cyan-50 font-medium">Get turn-by-turn indoor directions to any department.</p>
          </div>
        </button>

        {/* Doctor Availability Card */}
        <button 
          onClick={() => onNavigate(Screen.Doctors)}
          className="group bg-tertiary-container rounded-xl p-8 flex flex-col justify-between h-64 transition-transform active:scale-95 duration-200 cursor-pointer shadow-sm hover:shadow-md text-left"
        >
          <div className="flex items-center justify-between">
            <div className="bg-white/60 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center">
              <Stethoscope className="text-tertiary w-8 h-8" />
            </div>
            <span className="bg-tertiary/10 text-tertiary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest leading-none">Real-time</span>
          </div>
          <div>
            <h3 className="text-on-tertiary-container text-2xl font-bold font-headline mb-2">Doctor Availability</h3>
            <p className="text-on-tertiary-container/70 font-medium">Check wait times and live status of specialists.</p>
          </div>
        </button>

        {/* Book Appointment Card */}
        <button 
          onClick={() => onNavigate(Screen.Doctors)}
          className="group bg-surface-container-lowest border border-outline-variant rounded-xl p-8 flex flex-col justify-between h-64 transition-transform active:scale-95 duration-200 cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 text-left"
        >
          <div className="bg-primary/5 w-14 h-14 rounded-2xl flex items-center justify-center">
            <Calendar className="text-primary w-8 h-8" />
          </div>
          <div>
            <h3 className="text-on-surface text-2xl font-bold font-headline mb-2">Book Appointment</h3>
            <p className="text-on-surface-variant font-medium">Schedule a visit or tele-consultation in seconds.</p>
          </div>
        </button>

        {/* Emergency Card */}
        <button 
          onClick={() => onNavigate(Screen.Emergency)}
          className="group bg-error-container/20 border border-error-container/30 rounded-xl p-8 flex flex-col justify-between h-64 transition-transform active:scale-95 duration-200 cursor-pointer shadow-[0_10px_30px_rgba(250,116,111,0.1)] text-left"
        >
          <div className="flex items-start justify-between">
            <div className="bg-error-container w-14 h-14 rounded-2xl flex items-center justify-center animate-pulse">
              <Activity className="text-on-error w-8 h-8 fill-current" />
            </div>
            <div className="text-right">
              <span className="block text-error font-black text-xl leading-none">SOS</span>
              <span className="text-[10px] font-bold text-error/60 uppercase">Priority Response</span>
            </div>
          </div>
          <div>
            <h3 className="text-on-error-container text-2xl font-bold font-headline mb-2">Emergency</h3>
            <p className="text-on-error-container/70 font-medium">One-tap critical care alert and ambulance request.</p>
          </div>
        </button>
      </section>

      <section className="bg-surface-container-low p-6 rounded-xl flex items-center gap-6 border-l-8 border-primary relative overflow-hidden">
        <div className="hidden sm:block">
          <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center">
            <CalendarCheck className="text-primary w-8 h-8" />
          </div>
        </div>
        <div className="flex-1 space-y-1">
          <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Next Appointment</p>
          <h4 className="text-lg font-bold text-on-surface">Cardiology Consultation</h4>
          <p className="text-sm text-on-surface-variant">Tomorrow, 10:30 AM • Dr. Vikram Seth</p>
        </div>
        <button 
          onClick={() => onNavigate(Screen.Booking)}
          className="bg-primary text-on-primary px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-primary/20 active:scale-90 transition-transform whitespace-nowrap"
        >
          Check In
        </button>
      </section>

      {/* Floating Action Button */}
      <div className="fixed bottom-32 right-6 z-40">
        <button className="bg-primary hover:bg-primary-dim text-on-primary w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all hover:rotate-90 active:scale-90 group focus:outline-none">
          <Plus className="w-8 h-8 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};
