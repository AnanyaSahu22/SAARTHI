
import React from 'react';
import { Star, MessageCircle, ShieldCheck, ChevronLeft, ChevronRight, Sun, CloudSun, Moon, Info } from 'lucide-react';
import { motion } from 'motion/react';

export const Booking: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="pt-24 px-6 max-w-5xl mx-auto space-y-8 pb-32"
    >
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-surface-container-lowest rounded-xl p-6 flex items-start gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-outline-variant/10">
          <div className="relative w-28 h-32 md:w-32 md:h-40 shrink-0">
            <img 
              alt="Doctor profile" 
              className="w-full h-full object-cover rounded-lg shadow-sm" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8K_mG8hiP-Pg-LoEb0e34HJO8xh74WQKlJUF4y_DppA_x2qF_RUMkxl2yavbEiBwQtbDExqi_Gg1iWhxKunzT4kiHaVQv24eEwOKMYNAfI6S2iv8c2Evpxi6GLurUpOHQU3K21RnDRLIhP-s8e2E_gs1NtdZy7J86l42gcs-EGJG2jlfCthEdjlMbDnIxV6EVNWB8uO7O81aWaXHzywupUxHabGcymUYaABy1sPN6VIKlU0yY2C_ggihIEqgdSrLcPRGXPqw92PEF"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-2">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-wide">
              CARDIOLOGY
            </div>
            <h2 className="text-2xl font-bold text-on-surface">Dr. Vikram Aditya</h2>
            <p className="text-on-surface-variant text-sm leading-relaxed">Senior Consultant • 15+ Years Experience</p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-1">
                <Star className="text-primary w-4 h-4 fill-current" />
                <span className="text-sm font-bold text-on-surface">4.9</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="text-primary w-4 h-4" />
                <span className="text-sm font-bold text-on-surface">120+ Reviews</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary/5 rounded-xl p-6 flex flex-col justify-between border-2 border-primary-container/20">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-on-surface-variant text-sm">Consultation Fee</span>
              <span className="text-lg font-bold text-primary">₹800.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-on-surface-variant text-sm">Wait Time</span>
              <span className="text-sm font-semibold text-on-surface">~15 mins</span>
            </div>
          </div>
          <div className="pt-4 mt-4 border-t border-outline-variant">
            <div className="flex items-center gap-2 text-primary font-bold">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-sm">Health Insurance Accepted</span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-8 shadow-[0_10px_40px_rgba(0,105,118,0.03)] border border-outline-variant/10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-on-surface">Select Date</h3>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-surface-container-low transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="font-bold text-on-surface-variant">October 2024</span>
              <button className="p-2 rounded-full hover:bg-surface-container-low transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-y-4 text-center">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <div key={day} className={`text-xs font-bold text-outline uppercase tracking-widest pb-4 ${(day === 'Sat' || day === 'Sun') ? 'text-error-container' : ''}`}>
                {day}
              </div>
            ))}
            
            {[28, 29, 30, 31].map(d => <div key={d} className="py-3 text-surface-highest/50 pointer-events-none">{d}</div>)}
            <button className="py-3 font-semibold rounded-xl hover:bg-surface-container-low transition-all">1</button>
            <button className="py-3 font-semibold text-on-surface-variant">2</button>
            <button className="py-3 font-semibold text-on-surface-variant">3</button>
            {[4, 5, 6, 7, 8, 9, 10, 11].map(d => <button key={d} className="py-3 font-semibold">{d}</button>)}
            <button className="py-3 font-semibold bg-primary text-on-primary rounded-xl shadow-lg shadow-primary/20 scale-110">12</button>
            {[13, 14, 15, 16, 17].map(d => <button key={d} className="py-3 font-semibold">{d}</button>)}
          </div>
        </div>

        <div className="lg:col-span-5 bg-surface-container-low rounded-xl p-8 flex flex-col border border-outline-variant/10">
          <h3 className="text-xl font-bold text-on-surface mb-6">Select Time</h3>
          <div className="space-y-6 flex-grow">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sun className="text-primary-dim w-5 h-5" />
                <span className="font-bold text-sm uppercase tracking-wider text-on-surface-variant">Morning</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="px-5 py-3 rounded-full bg-surface-container-lowest text-on-surface-variant font-bold text-sm hover:bg-primary-container hover:text-on-primary-container transition-all">09:00 AM</button>
                <button className="px-5 py-3 rounded-full bg-surface-container-lowest text-on-surface-variant font-bold text-sm hover:bg-primary-container hover:text-on-primary-container transition-all">10:30 AM</button>
                <button className="px-5 py-3 rounded-full bg-primary text-on-primary font-bold text-sm ring-2 ring-primary ring-offset-2">11:15 AM</button>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CloudSun className="text-primary-dim w-5 h-5" />
                <span className="font-bold text-sm uppercase tracking-wider text-on-surface-variant">Afternoon</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="px-5 py-3 rounded-full bg-surface-container-lowest text-on-surface-variant font-bold text-sm hover:bg-primary-container hover:text-on-primary-container transition-all">01:30 PM</button>
                <button className="px-5 py-3 rounded-full bg-surface-container-lowest text-on-surface-variant font-bold text-sm hover:bg-primary-container hover:text-on-primary-container transition-all">02:45 PM</button>
                <button className="px-5 py-3 rounded-full bg-surface-container-lowest text-on-surface-variant font-bold text-sm hover:bg-primary-container hover:text-on-primary-container transition-all">04:00 PM</button>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Moon className="text-primary-dim w-5 h-5" />
                <span className="font-bold text-sm uppercase tracking-wider text-on-surface-variant">Evening</span>
              </div>
              <div className="flex flex-wrap gap-3 opacity-50">
                <button className="px-5 py-3 rounded-full bg-surface-container-lowest text-on-surface-variant font-bold text-sm line-through cursor-not-allowed">06:30 PM</button>
                <button className="px-5 py-3 rounded-full bg-surface-container-lowest text-on-surface-variant font-bold text-sm line-through cursor-not-allowed">07:45 PM</button>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button className="w-full py-5 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary text-lg font-bold shadow-xl shadow-primary/30 transform transition-transform active:scale-95">
              Book Now
            </button>
          </div>
        </div>
      </section>

      <div className="bg-surface-container-high/50 p-6 rounded-xl flex gap-4 items-center border border-outline-variant/10">
        <Info className="text-primary w-6 h-6 flex-shrink-0" />
        <p className="text-sm text-on-surface-variant leading-snug">
          Appointments can be rescheduled or cancelled up to <span className="font-bold text-on-surface">2 hours</span> before the scheduled time without any penalty.
        </p>
      </div>
    </motion.div>
  );
};
