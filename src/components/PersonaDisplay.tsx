import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Persona } from '../types';

interface PersonaDisplayProps {
  persona: Persona;
}

export const PersonaDisplay: React.FC<PersonaDisplayProps> = ({ persona }) => {
  return (
    <div className="flex items-center gap-8">
      <div className="relative w-48 h-64">
        {/* Stylized Human Figure Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          key={persona.title}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-full h-full">
            {/* Holographic Base */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-cyan-500/20 blur-xl rounded-full" />
            
            {/* Figure Silhouette */}
            <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#00f2ff', stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: '#0066ff', stopOpacity: 0.2 }} />
                </linearGradient>
              </defs>
              <path
                d="M50 20 C60 20 65 30 65 40 C65 50 60 60 50 60 C40 60 35 50 35 40 C35 30 40 20 50 20 Z M50 65 C30 65 20 80 20 110 L20 180 L35 180 L35 130 L45 130 L45 180 L55 180 L55 130 L65 130 L65 180 L80 180 L80 110 C80 80 70 65 50 65 Z"
                fill="url(#grad)"
              />
              {/* Data Headset Detail */}
              <rect x="45" y="35" width="15" height="2" fill="#00f2ff" />
              <circle cx="60" cy="36" r="2" fill="#00f2ff" />
            </svg>
          </div>
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={persona.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="glass-panel p-6 max-w-xs border-l-4 border-l-engine-cyan"
        >
          <h3 className="text-engine-cyan font-display font-bold text-sm tracking-widest mb-1">
            {persona.title}
          </h3>
          <p className="text-white font-medium mb-2">{persona.role}</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            {persona.description}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
