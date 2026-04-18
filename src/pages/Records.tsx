
import React from 'react';
import { Search, Upload, FlaskConical, FileSignature, ImageIcon, Syringe, FileBarChart, ExternalLink, Calendar, User, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { MedicalRecord } from '../types';

const RECORDS: MedicalRecord[] = [
  { id: '1', title: 'Blood Biochemistry', date: 'Oct 24, 2023', doctor: 'Dr. Arpan Mehta', type: 'LAB REPORT', icon: 'biotech' },
  { id: '2', title: 'Post-Surgical Care', date: 'Sep 12, 2023', doctor: 'Dr. Sarah Wilson', type: 'PRESCRIPTION', icon: 'prescriptions' },
  { id: '3', title: 'Chest X-Ray', date: 'Aug 05, 2023', doctor: 'City Diagnostics', type: 'IMAGING', icon: 'image' },
  { id: '4', title: 'COVID-19 Booster', date: 'Jun 15, 2023', doctor: 'Public Health Ctr', type: 'VACCINATION', icon: 'vaccines' },
];

export const Records: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-32 px-6 max-w-5xl mx-auto"
    >
      <section className="mb-10">
        <h2 className="text-4xl font-bold text-on-surface mb-2 leading-tight">Medical Records</h2>
        <p className="text-on-surface-variant text-lg">Securely manage and access your clinical history.</p>
      </section>

      <section className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between">
        <div className="relative w-full md:max-w-md">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="text-outline w-5 h-5" />
          </div>
          <input 
            className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest border-none rounded-xl shadow-sm focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline-variant transition-all font-medium" 
            placeholder="Search by document or doctor..." 
            type="text"
          />
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-gradient-to-br from-primary to-primary-dim text-on-primary px-8 py-4 rounded-full font-bold shadow-lg active:scale-95 transition-transform">
            <Upload className="w-5 h-5" />
            Upload Record
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RECORDS.map((record) => {
          let Icon = FileText;
          let bgColor = 'bg-surface-container-low';
          let textColor = 'text-primary';

          if (record.type === 'LAB REPORT') { Icon = FlaskConical; bgColor = 'bg-secondary-container/30'; textColor = 'text-secondary'; }
          if (record.type === 'PRESCRIPTION') { Icon = FileSignature; bgColor = 'bg-tertiary-container/30'; textColor = 'text-tertiary'; }
          if (record.type === 'IMAGING') { Icon = ImageIcon; bgColor = 'bg-primary-container/30'; textColor = 'text-primary'; }
          if (record.type === 'VACCINATION') { Icon = Syringe; bgColor = 'bg-error-container/20'; textColor = 'text-error'; }

          return (
            <div 
              key={record.id}
              className="group relative bg-surface-container-lowest rounded-xl p-6 shadow-sm hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 overflow-hidden border border-outline-variant/10"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon className="text-7xl w-24 h-24" />
              </div>
              <div className="flex items-start justify-between mb-6">
                <div className={`p-3 ${bgColor} rounded-xl`}>
                  <Icon className={`${textColor} w-8 h-8`} />
                </div>
                <span className="bg-surface-container-low text-on-surface-variant px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                  {record.type}
                </span>
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-1">{record.title}</h3>
              <p className="text-on-surface-variant text-sm flex items-center gap-2 mb-6 font-medium">
                <Calendar className="w-4 h-4" /> {record.date}
              </p>
              <div className="flex items-center justify-between border-t border-outline-variant/10 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-tertiary-container/50 flex items-center justify-center">
                    <User className="text-tertiary w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-on-surface-variant">{record.doctor}</span>
                </div>
                <button className="text-primary hover:text-primary-dim transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </button>
              </div>
            </div>
          );
        })}
        
        <div className="lg:col-span-2 relative bg-primary-dim rounded-xl p-8 overflow-hidden flex flex-col justify-center items-start shadow-xl border border-outline-variant/10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-30 translate-x-1/2 -translate-y-1/2"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-on-primary mb-2">Need a summary of your health?</h3>
            <p className="text-on-primary/80 mb-6 max-w-md">
              Download your consolidated health profile with all records compiled into a single professional PDF for your next visit.
            </p>
            <button className="bg-white text-primary px-6 py-3 rounded-full font-bold hover:bg-on-primary transition-colors flex items-center gap-2">
              <FileBarChart className="w-5 h-5" />
              Generate Health Summary
            </button>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-center">
        <button className="px-10 py-3 rounded-full bg-surface-container-high text-primary font-bold hover:bg-primary hover:text-on-primary transition-all active:scale-95">
          View All Records
        </button>
      </div>
    </motion.div>
  );
};
