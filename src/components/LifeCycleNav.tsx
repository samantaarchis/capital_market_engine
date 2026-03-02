import React from 'react';
import { motion } from 'motion/react';
import { Stage } from '../types';
import { ChevronRight } from 'lucide-react';

interface LifeCycleNavProps {
  currentStage: Stage;
  onStageChange: (stage: Stage) => void;
}

export const LifeCycleNav: React.FC<LifeCycleNavProps> = ({ currentStage, onStageChange }) => {
  const stages = Object.values(Stage);

  return (
    <div className="w-full bg-black/40 backdrop-blur-xl border-t border-engine-border p-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {stages.map((stage, idx) => {
          const isActive = stage === currentStage;
          return (
            <React.Fragment key={stage}>
              <button
                onClick={() => onStageChange(stage)}
                className={`flex-1 group relative py-4 px-2 transition-all duration-500 rounded-lg ${
                  isActive ? 'bg-engine-cyan/10' : 'hover:bg-white/5'
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                    isActive 
                      ? 'bg-engine-cyan border-engine-cyan shadow-[0_0_10px_rgba(0,242,255,0.8)]' 
                      : 'border-slate-600 group-hover:border-slate-400'
                  }`} />
                  <span className={`text-[10px] font-display font-bold tracking-widest uppercase text-center transition-colors duration-500 ${
                    isActive ? 'text-engine-cyan' : 'text-slate-500 group-hover:text-slate-300'
                  }`}>
                    {idx + 1}. {stage}
                  </span>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute -top-2 left-1/2 -translate-x-1/2 text-engine-cyan"
                  >
                    <div className="w-1 h-1 bg-engine-cyan rounded-full animate-ping" />
                  </motion.div>
                )}
              </button>
              {idx < stages.length - 1 && (
                <ChevronRight className="text-slate-700 w-4 h-4" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
