
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, ArrowRight, Chrome, Github } from 'lucide-react';
import { Screen } from '../types';

interface LoginProps {
  onLogin: (screen: Screen) => void;
}

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(Screen.Home);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-surface flex flex-col justify-center px-6 pb-32"
    >
      <div className="max-w-md mx-auto w-full space-y-12">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-headline font-extrabold text-on-surface">Welcome Back</h1>
          <p className="text-on-surface-variant font-medium">Log in to your health portal</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full pl-14 pr-6 py-5 bg-surface-container-low rounded-2xl border-none text-on-surface font-medium placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-14 pr-6 py-5 bg-surface-container-low rounded-2xl border-none text-on-surface font-medium placeholder:text-outline focus:ring-2 focus:ring-primary/20 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center justify-between px-2">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20" />
              <span className="text-sm font-bold text-on-surface-variant group-hover:text-primary transition-colors">Remember me</span>
            </label>
            <button type="button" className="text-sm font-bold text-primary hover:text-primary-dim">Forgot Password?</button>
          </div>

          <button 
            type="submit"
            className="w-full bg-primary text-on-primary py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 shadow-lg active:scale-95 transition-all"
          >
            Sign In <ArrowRight className="w-6 h-6" />
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-outline-variant"></span></div>
          <div className="relative flex justify-center text-xs font-black tracking-widest uppercase"><span className="bg-surface px-4 text-outline">Or continue with</span></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-3 bg-surface-container-low py-4 rounded-xl border border-outline-variant/30 font-bold hover:bg-surface-container-high transition-colors">
            <Chrome className="w-5 h-5" /> Google
          </button>
          <button className="flex items-center justify-center gap-3 bg-surface-container-low py-4 rounded-xl border border-outline-variant/30 font-bold hover:bg-surface-container-high transition-colors">
            <Github className="w-5 h-5" /> GitHub
          </button>
        </div>

        <p className="text-center text-on-surface-variant font-medium">
          Don't have an account? <button className="text-primary font-bold">Register Now</button>
        </p>
      </div>
    </motion.div>
  );
};
