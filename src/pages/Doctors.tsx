
import React from 'react';
import { Search, Grid, Clock, CheckCircle2, Star, History, ChevronRight, Filter } from 'lucide-react';
import { Screen, Doctor } from '../types';
import { motion } from 'motion/react';

const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Smith',
    specialty: 'Cardiologist',
    availability: 'Available',
    rating: 4.9,
    reviews: 120,
    experience: 12,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCKP2ZUvbRRPoimj-AtbmwdHYVGa6pIuPmokduO5nBrLivcaBQsiQ6G-BTT3rDGib5-mUzPV0IGWij1ELe4dQpIkrcqXahSCxS7GfQCV7EJ_iQUeHf3SWIDbSCJLPZ6mBbgDNgO_fH8mHInCxkqbPidlhixewz0JKk7ACHxsJ1kmtBWdwDbQ3drcWmh2MQVoibrayUBgjydJC6BturHI7Ydc17Ojim8z8ypMDiJVIptHkBtfe0hg9LPkCJSAaQyW0kX0ZVgfog8drk'
  },
  {
    id: '2',
    name: 'Dr. Sarah Johnson',
    specialty: 'Pediatrician',
    availability: 'Available',
    rating: 4.8,
    reviews: 98,
    experience: 8,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXpDBmIrASW2RwAkhWvFp9YxEouhmBH3x7JWaZDk7BDzZWmcd9O3T0euFhF7578whWTIPr_2P4C_JUBfMm4RBnn53Jc_zhZzOt7_1qWhJp2oQjl9HeP0o4WtL1sS6N_3ldagO2FwrE6Qh0bZcXz5317uyNHoWTRg_XDmVL3NK5PytOurShIg5g4R1lbsI5UJxDVN1iHmFNr5WxVHQxt2yajpv3Yvl3rd7O8qM2OulPb4YW_RPqPC2_okjTrwCDtB_ThUM0RNhhhSMn'
  },
  {
    id: '3',
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    availability: 'Busy',
    rating: 5.0,
    reviews: 215,
    experience: 15,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUIm1PccvVuT99MTbX3k0hm0WR0CA0Bd92VP_qDdLdqWZBMGXsAoa37MmB2XmWPTBtmJRfbJMnNWRtwtCFnJjSDRABAjNdi5Uap_uLLpryUFK5I-1KiGP8GYzenwX-19tfR3KA_aE5GM0K8iri0ol0iIyJ2Q5PCgdEQq36KoihwseZh3blmZagvKjmYKiVu6eRUrnP2HGf4QctT78P1aXyKzoP5_aO51Nf_IjMD3665S7pmBiQGjAi6kbRbe-hWcBolmlTqlUjuAwG'
  },
  {
    id: '4',
    name: 'Dr. Elena Rodriguez',
    specialty: 'Dermatologist',
    availability: 'Available',
    rating: 4.7,
    reviews: 74,
    experience: 5,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnh1ikQpPrikj3fnxHSoXCCoFmQNIw1rdd0JAEpaRILyyPIKlG7VGNxhYOHdtAqO9MycxHW6FnxuZ4sAHYcnrAzCKbQaY43rjn1hfC_lbdfiDOAs1qk1Nuy_KY0Kep3OMudBRG7zHO-0bsNH3MoHksqV40hvNpKcUZAddEe0a6Ed-9SLoSjDPQOzIQrBuyOjts9OvYu1WBRYSBKqlPT1s2yEBGMvJHz4xIMPzFzSvgxaktPyadkYg15prUyKHzMFVWQnyhz6gaWFiv'
  }
];

interface DoctorsProps {
  onNavigate: (screen: Screen) => void;
}

export const Doctors: React.FC<DoctorsProps> = ({ onNavigate }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-32 px-6 max-w-5xl mx-auto min-h-screen"
    >
      <section className="mb-10 space-y-6">
        <div className="relative group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-outline">
            <Search className="w-5 h-5" />
          </div>
          <input 
            className="w-full h-16 pl-14 pr-6 bg-surface-container-lowest rounded-xl border-none ring-1 ring-outline-variant focus:ring-2 focus:ring-primary transition-all duration-300 font-medium placeholder:text-on-surface-variant" 
            placeholder="Search doctors by name..." 
            type="text"
          />
        </div>
        
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
          {[
            { icon: Grid, label: 'Department' },
            { icon: Clock, label: 'Time' },
            { icon: CheckCircle2, label: 'Availability' },
            { icon: Filter, label: 'Filters' },
          ].map((filter, i) => {
            const Icon = filter.icon;
            return (
              <button 
                key={i}
                className={`flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm whitespace-nowrap transition-colors ${
                  i === 0 
                  ? 'bg-tertiary-container text-on-tertiary-container' 
                  : 'bg-surface-container-lowest text-on-surface-variant ring-1 ring-outline-variant hover:bg-surface-container-low'
                }`}
              >
                <Icon className="w-4 h-4" />
                {filter.label}
              </button>
            );
          })}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DOCTORS.map((doctor) => (
          <div 
            key={doctor.id}
            onClick={() => onNavigate(Screen.Booking)}
            className="group p-6 bg-surface-container-lowest rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform active:scale-[0.98] cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex gap-4">
                <div className={`w-20 h-20 rounded-lg overflow-hidden bg-surface-container-low ${doctor.availability === 'Busy' ? 'opacity-75 grayscale-[20%]' : ''}`}>
                  <img 
                    className="w-full h-full object-cover" 
                    src={doctor.imageUrl} 
                    alt={doctor.name}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="font-headline font-bold text-lg text-on-surface">{doctor.name}</h3>
                  <p className="text-on-surface-variant text-sm font-medium">{doctor.specialty}</p>
                  
                  <div className={`mt-2 flex items-center gap-1.5 px-3 py-1 rounded-full w-fit ${
                    doctor.availability === 'Available' 
                    ? 'bg-emerald-50 text-emerald-700' 
                    : 'bg-surface-container-high text-outline'
                  }`}>
                    <span className={`w-2 h-2 rounded-full ${doctor.availability === 'Available' ? 'bg-emerald-500' : 'bg-outline-variant'}`}></span>
                    <span className="text-[11px] font-bold uppercase tracking-wider">{doctor.availability}</span>
                  </div>
                </div>
              </div>
              <button className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                doctor.availability === 'Available' 
                ? 'bg-primary-container/20 text-primary group-hover:bg-primary group-hover:text-white' 
                : 'bg-surface-container-low text-outline-variant cursor-not-allowed'
              }`}>
                {doctor.availability === 'Available' ? <ChevronRight className="w-5 h-5" /> : <ChevronRight className="w-5 h-5 opacity-20" />}
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-outline-variant/10">
              <div className={`flex items-center gap-2 ${doctor.availability === 'Busy' ? 'text-outline-variant' : ''}`}>
                <Star className={`w-4 h-4 ${doctor.availability === 'Available' ? 'text-primary fill-current' : ''}`} />
                <span className="text-sm font-bold">{doctor.rating} ({doctor.reviews} reviews)</span>
              </div>
              <div className={`flex items-center gap-2 ${doctor.availability === 'Busy' ? 'text-outline-variant' : ''}`}>
                <History className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold">{doctor.experience} Years Exp.</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
