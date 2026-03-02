import React from 'react';
import { motion } from 'motion/react';
import { InvestmentType } from '../types';

interface HolographicMapProps {
  investments: InvestmentType[];
  onSelect?: (id: string) => void;
}

export const HolographicMap: React.FC<HolographicMapProps> = ({ investments, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-12 py-8">
      {investments.map((inv, idx) => (
        <motion.div
          key={inv.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => onSelect?.(inv.id)}
          className="group cursor-pointer relative"
        >
          {/* Holographic Icon Container */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* Background Glow */}
            <div 
              className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
              style={{ backgroundColor: `var(--color-engine-${inv.pulseColor})` }}
            />
            
            {/* 3D-like Geometric Shape */}
            <svg viewBox="0 0 100 100" className="w-20 h-20">
              <defs>
                <linearGradient id={`grad-${inv.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: `var(--color-engine-${inv.color})`, stopOpacity: 0.8 }} />
                  <stop offset="100%" style={{ stopColor: '#000', stopOpacity: 0.2 }} />
                </linearGradient>
              </defs>
              <motion.path
                d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z"
                fill={`url(#grad-${inv.id})`}
                stroke={`var(--color-engine-${inv.color})`}
                strokeWidth="1"
                animate={{
                  y: [0, -5, 0],
                  rotateY: [0, 10, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: idx * 0.5
                }}
              />
              <path d="M50 10 L50 90 M10 30 L90 30 M10 70 L90 70" stroke="white" strokeOpacity="0.1" />
            </svg>

            {/* Pulsing Arrow for Highlighted */}
            {inv.id === 'private-markets' && (
              <motion.div
                animate={{ y: [-10, -20, -10] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 left-1/2 -translate-x-1/2 text-engine-magenta"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              </motion.div>
            )}
          </div>

          {/* Label */}
          <div className="text-center mt-2">
            <span 
              className={`text-[10px] font-display font-bold tracking-widest uppercase transition-colors duration-300`}
              style={{ color: `var(--color-engine-${inv.color})` }}
            >
              {inv.label}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
