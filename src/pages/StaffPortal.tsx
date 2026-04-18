
import React from 'react';
import { motion } from 'motion/react';
import { Users, LayoutDashboard, ShieldCheck, Settings, LogOut, ArrowUpRight, TrendingUp, AlertTriangle } from 'lucide-react';

export const StaffPortal: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="min-h-screen bg-surface pt-24 pb-32 px-6 max-w-5xl mx-auto space-y-10"
    >
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/30 text-primary text-xs font-black tracking-widest uppercase">
            <ShieldCheck className="w-3 h-3" /> Secure Access Level 4
          </div>
          <h1 className="text-4xl font-headline font-extrabold text-on-surface">Staff Command Center</h1>
          <p className="text-on-surface-variant text-lg">Real-time facility orchestration and analytics.</p>
        </div>
        <div className="flex gap-4">
          <button className="flex-1 md:flex-none p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 text-primary">
            <Settings className="w-6 h-6 mx-auto" />
          </button>
          <button className="flex-1 md:flex-none p-4 rounded-xl bg-error-container/20 text-error">
            <LogOut className="w-6 h-6 mx-auto" />
          </button>
        </div>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 space-y-4">
          <div className="flex justify-between items-start">
            <div className="p-3 rounded-xl bg-primary-container text-primary"><Users className="w-6 h-6" /></div>
            <span className="flex items-center gap-1 text-green-600 text-sm font-bold"><TrendingUp className="w-4 h-4" /> +12%</span>
          </div>
          <div>
            <p className="text-on-surface-variant text-sm font-bold uppercase tracking-widest">Active Patients</p>
            <h2 className="text-4xl font-headline font-extrabold text-on-surface">1,284</h2>
          </div>
        </div>

        <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 space-y-4">
          <div className="flex justify-between items-start">
            <div className="p-3 rounded-xl bg-secondary-container text-secondary"><LayoutDashboard className="w-6 h-6" /></div>
            <span className="flex items-center gap-1 text-green-600 text-sm font-bold"><TrendingUp className="w-4 h-4" /> +4%</span>
          </div>
          <div>
            <p className="text-on-surface-variant text-sm font-bold uppercase tracking-widest">Room Utilization</p>
            <h2 className="text-4xl font-headline font-extrabold text-on-surface">82%</h2>
          </div>
        </div>

        <div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30 space-y-4">
          <div className="flex justify-between items-start">
            <div className="p-3 rounded-xl bg-error-container/20 text-error"><AlertTriangle className="w-6 h-6" /></div>
            <span className="bg-error text-white text-[10px] font-bold px-2 py-0.5 rounded-full">CRITICAL</span>
          </div>
          <div>
            <p className="text-on-surface-variant text-sm font-bold uppercase tracking-widest">Pending Repairs</p>
            <h2 className="text-4xl font-headline font-extrabold text-on-surface">06</h2>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <section className="space-y-6">
          <h3 className="text-xl font-bold px-1">Navigational Hotspots</h3>
          <div className="space-y-4">
            {[
              { location: "Outpatient Lobby (North)", count: "482 scans", trend: "+12%" },
              { location: "Cardiology Suite (Floor 3)", count: "215 scans", trend: "+24%" },
              { location: "Emergency ER Bay", count: "182 scans", trend: "-5%" }
            ].map((item, i) => (
              <div key={i} className="bg-surface-container-lowest p-5 rounded-xl flex items-center justify-between border border-outline-variant/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center font-bold text-outline">{i+1}</div>
                  <div>
                    <p className="font-bold text-on-surface">{item.location}</p>
                    <p className="text-xs text-on-surface-variant font-medium">{item.count}</p>
                  </div>
                </div>
                <ArrowUpRight className="text-primary w-5 h-5" />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary-dim p-8 rounded-[32px] text-on-primary space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10 space-y-6">
            <h3 className="text-2xl font-bold">System Health</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold opacity-80">
                <span>Wayfinding Core</span>
                <span>99.9%</span>
              </div>
              <div className="w-full h-2 bg-on-primary/10 rounded-full overflow-hidden">
                <div className="h-full bg-on-primary w-[99.9%]"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-bold opacity-80">
                <span>RTLS Sensors</span>
                <span>84.2%</span>
              </div>
              <div className="w-full h-2 bg-on-primary/10 rounded-full overflow-hidden">
                <div className="h-full bg-secondary w-[84.2%]"></div>
              </div>
            </div>
            <button className="w-full py-4 bg-white text-primary rounded-2xl font-bold shadow-xl hover:scale-[1.02] active:scale-95 transition-all">
              Run Diagnostics
            </button>
          </div>
        </section>
      </div>
    </motion.div>
  );
};
