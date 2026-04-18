
import React from 'react';
import { X, Zap, Info, LocateFixed } from 'lucide-react';
import { motion } from 'motion/react';
import { Screen } from '../types';

interface QRScannerProps {
  onClose: () => void;
}

export const QRScanner: React.FC<QRScannerProps> = ({ onClose }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black text-white overflow-hidden font-body"
    >
      {/* Background Simulation */}
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover brightness-50 scale-105 blur-[2px]" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYIee3zncDX0m46uBT8OfEP_W_OeRZuzlFUhC9IzjG0TM_3OH3VjfFJ-fK4zIInG8Vg2BRz4mCzghPotaK3_4Nggz2Fwwy3-7bVmoK05ylvfZRaBxuoeOZS5iY1DUcSLqORgG-20pn78Qq-y5HeyKzDJxQCqRLWOD3TtzRSn_hXtun8TZtOFhZbCb5IKoSGA1Nib_rORj2XbbObCsjXetDL8aTZ8M58b7KMYwQaxX_ank_pdqhEJ0Ognoc7qONipug-yYZu4Fd3w2W"
          alt="Scanner Background"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <header className="absolute top-0 w-full z-50 flex justify-between items-center px-6 py-4">
        <button 
          onClick={onClose}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all text-white active:scale-95"
        >
          <X className="w-6 h-6" />
        </button>
        <h1 className="text-2xl font-extrabold bg-gradient-to-br from-white to-cyan-200 bg-clip-text text-transparent font-headline tracking-tight">
          SAARTHI
        </h1>
        <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all text-white">
          <Zap className="w-6 h-6" />
        </button>
      </header>

      <main className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <div className="mb-10 text-center max-w-xs">
          <h2 className="font-headline text-3xl font-bold text-white mb-2 tracking-tight">Scan QR</h2>
          <p className="text-cyan-50/80 font-medium leading-relaxed">
            Scan QR to detect your location and find your path in the hospital.
          </p>
        </div>

        <div className="relative w-72 h-72 md:w-80 md:h-80 group">
          <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-primary-fixed rounded-tl-xl glow-teal"></div>
          <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-primary-fixed rounded-tr-xl glow-teal"></div>
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-primary-fixed rounded-bl-xl glow-teal"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-primary-fixed rounded-br-xl glow-teal"></div>
          
          <div className="absolute inset-2 overflow-hidden rounded-lg">
            <div className="scanning-line absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-fixed to-transparent shadow-[0_0_15px_#8be8fa] z-20"></div>
            <div className="w-full h-full bg-cyan-900/10 backdrop-blur-[1px]"></div>
          </div>

          <div className="absolute -inset-8 pointer-events-none opacity-30">
            <div className="absolute top-1/2 left-0 w-4 h-[1px] bg-white"></div>
            <div className="absolute top-1/2 right-0 w-4 h-[1px] bg-white"></div>
            <div className="absolute top-0 left-1/2 w-[1px] h-4 bg-white"></div>
            <div className="absolute bottom-0 left-1/2 w-[1px] h-4 bg-white"></div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="p-1.5 bg-white/10 backdrop-blur-xl rounded-full border border-white/5 flex gap-1">
            <button className="px-6 py-2 rounded-full bg-primary-fixed text-on-primary-fixed font-bold text-sm transition-all">QR CODE</button>
            <button className="px-6 py-2 rounded-full text-white/70 hover:text-white font-semibold text-sm transition-all">MANUAL ID</button>
          </div>
          
          <div className="mx-auto bg-surface-container-lowest/10 backdrop-blur-md border border-white/10 rounded-lg p-5 flex items-center gap-4 max-w-sm">
            <div className="w-12 h-12 rounded-full bg-primary-fixed/20 flex items-center justify-center shrink-0">
              <Info className="text-primary-fixed w-6 h-6" />
            </div>
            <p className="text-sm text-white/90 font-medium leading-tight">
              Look for posters near elevators or reception desks labeled "Navigate with SAARTHI".
            </p>
          </div>
        </div>
      </main>

      <div className="fixed bottom-10 left-0 right-0 flex justify-center pointer-events-none z-50">
        <div className="bg-white/10 text-white px-8 py-3 rounded-full flex items-center gap-3 shadow-xl backdrop-blur-lg border border-white/10">
          <LocateFixed className="text-primary-fixed w-4 h-4" />
          <span className="text-xs font-bold tracking-widest uppercase">Detecting Frame...</span>
        </div>
      </div>
    </motion.div>
  );
};
