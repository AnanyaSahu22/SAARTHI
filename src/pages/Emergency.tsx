
import React from 'react';
import { Phone, Car, Activity, Droplet, Map as MapIcon } from 'lucide-react';
import { motion } from 'motion/react';

export const Emergency: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-32 px-6 max-w-2xl mx-auto space-y-8"
    >
      <section className="text-center space-y-2">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-error-container/20 text-error font-bold text-sm tracking-widest uppercase">
          <Activity className="w-4 h-4 mr-2 fill-current" />
          Critical Care System Active
        </div>
        <h1 className="text-4xl font-headline font-extrabold text-on-surface leading-tight">Emergency Assistance</h1>
        <p className="text-on-surface-variant text-lg">Help is only one tap away. Stay calm.</p>
      </section>

      <div className="grid grid-cols-1 gap-6">
        <button className="bg-emergency-gradient group relative overflow-hidden flex items-center justify-between p-8 rounded-xl shadow-[0_20px_50px_rgba(168,56,54,0.15)] active:scale-95 transition-all duration-300 text-left">
          <div className="flex flex-col items-start">
            <span className="text-white/80 font-headline font-bold text-lg uppercase tracking-widest">Immediate Response</span>
            <span className="text-white text-4xl font-headline font-extrabold">Call Emergency</span>
          </div>
          <div className="bg-white/20 p-4 rounded-full backdrop-blur-md">
            <Phone className="text-white w-12 h-12 fill-current" />
          </div>
          <div className="absolute inset-0 bg-white/5 pointer-events-none group-hover:bg-white/10 transition-colors"></div>
        </button>

        <button className="bg-surface-container-lowest flex items-center justify-between p-8 rounded-xl shadow-sm border border-outline-variant active:scale-95 transition-all duration-300 text-left">
          <div className="flex flex-col items-start">
            <span className="text-on-surface-variant font-headline font-bold text-lg uppercase tracking-widest">Route to Clinic</span>
            <span className="text-on-surface text-4xl font-headline font-extrabold">Navigate to ER</span>
          </div>
          <div className="bg-primary-container p-4 rounded-full">
            <Car className="text-on-primary-container w-12 h-12 fill-current" />
          </div>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2 bg-surface-container-low p-6 rounded-lg flex items-center gap-6 border border-outline-variant/10">
          <div className="relative w-24 h-24 flex-shrink-0">
            <div className="absolute inset-0 rounded-full border-4 border-error/20 border-t-error animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="text-2xl font-black text-error">8</span>
              <span className="text-[10px] font-bold uppercase text-error-dim">Min</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-headline font-bold text-on-surface">Nearest ER ETA</h3>
            <p className="text-on-surface-variant text-sm leading-relaxed">City General Hospital is 2.4 miles away with light traffic.</p>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant">
          <div className="flex justify-between items-start mb-4">
            <Activity className="text-primary w-6 h-6 fill-current" />
            <span className="text-primary text-xs font-bold px-2 py-1 bg-primary-container/30 rounded-md">LIVE</span>
          </div>
          <p className="text-on-surface-variant text-xs font-bold uppercase">Heart Rate</p>
          <p className="text-2xl font-headline font-extrabold text-on-surface">72 <span className="text-sm font-normal">BPM</span></p>
        </div>
        
        <div className="bg-surface-container-lowest p-5 rounded-lg border border-outline-variant">
          <div className="flex justify-between items-start mb-4">
            <Droplet className="text-error w-6 h-6 fill-current" />
          </div>
          <p className="text-on-surface-variant text-xs font-bold uppercase">Blood Type</p>
          <p className="text-2xl font-headline font-extrabold text-on-surface">B+ <span className="text-sm font-normal">Pos</span></p>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/10">
        <div className="h-40 w-full relative">
          <img 
            className="w-full h-full object-cover grayscale opacity-50" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYgm1a0GxKrIWRgxaSBydQf1v4bI9FsendRQhC6RpiwCw9egyxJwSqD5YP8V8d4m23Sd1y8haXST458RCOJe_nsTxVlDk11D_jmxNzmALKbpC5CjHeATdI1Ivy_chb7sTOFqi2atEaW4mTw9GvNDSqGWpTyEjyeBCPLcf0F3ehNd9VEeUvfrCaLoqyVmmLkKkf7pShgejwgZC989QGtHjqqTwTN4VyrUB4YdDk_0fOisKtSANG35xZZGWfaxtcZlZyKzHeG-DNtOxg"
            alt="City Map"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
          <div className="absolute bottom-4 left-6">
            <span className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-sm text-sm font-bold">
              <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
              City General ER
            </span>
          </div>
        </div>
        <div className="p-6 flex justify-between items-center">
          <div>
            <h4 className="font-bold text-on-surface">City General Hospital</h4>
            <p className="text-sm text-on-surface-variant">Level 1 Trauma Center</p>
          </div>
          <div className="p-2 bg-primary-container rounded-full">
            <MapIcon className="text-primary-dim w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-headline font-bold px-1">Ice Contacts</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg transition-colors hover:bg-surface-container-high border border-outline-variant/10 cursor-pointer">
            <div className="flex items-center gap-4">
              <img 
                className="w-12 h-12 rounded-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXbzwC8Ijsl93oofVUC2V1IED-55topk0Os4pxrBTMH9qu3GLZnk8p2O43-Px4CFhJSM3-6eecBlAPiIhOe3M6w4VLphCF9z_lIzBSxSMuDxjAIopfWXt8QoV3rXHM7SRM4gVZw7eNKnOK0R39NToPpbjCxHVHOZZo783ZTMboQXCMB7dJ8pwb1mIK3mjYWanyU3Xdb07yRGaIosYYoWCbNM77iuZHdod01cUQn5Inv9V5G30AdJl0MEClxzBNY2lD3dkRXnmcSSHc"
                alt="ICE Contact"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="font-bold">Ananya Sharma (Wife)</p>
                <p className="text-xs text-on-surface-variant">+91 98765 43210</p>
              </div>
            </div>
            <Phone className="text-on-surface-variant w-5 h-5" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
