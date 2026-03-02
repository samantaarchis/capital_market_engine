import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ConsultingBlock } from '../types';
import { X, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

interface DeepDiveModalProps {
  block: ConsultingBlock | null;
  onClose: () => void;
}

export const DeepDiveModal: React.FC<DeepDiveModalProps> = ({ block, onClose }) => {
  if (!block) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl glass-panel overflow-hidden border-2 border-engine-cyan/40"
        >
          {/* Header */}
          <div className="p-6 border-b border-engine-border flex justify-between items-center bg-engine-cyan/5">
            <div>
              <h2 className="text-engine-cyan font-display font-bold text-xs tracking-[0.2em] uppercase mb-1">
                Consulting Deep-Dive: {block.title}
              </h2>
              <p className="text-white text-lg font-medium">{block.subtitle}</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column: Diagnostic */}
            <div className="space-y-8">
              <div className="glass-panel p-6 border-l-4 border-l-engine-cyan bg-white/5">
                <div className="flex items-center gap-2 text-engine-cyan mb-4">
                  <span className="text-[10px] font-display font-bold tracking-widest uppercase">Stage Context</span>
                </div>
                <p className="text-white font-medium mb-2">{block.details.stage}</p>
                <div className="flex items-start gap-3 p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                  <AlertCircle className="text-red-400 shrink-0 mt-1" size={18} />
                  <div>
                    <span className="text-[10px] font-display font-bold text-red-400 uppercase tracking-wider block mb-1">Diagnostic Alert</span>
                    <p className="text-slate-300 text-sm">{block.details.diagnostic}</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-1 h-12 bg-engine-magenta" />
                <h4 className="text-engine-magenta font-display font-bold text-[10px] tracking-widest uppercase mb-4">Impact Metrics</h4>
                <div className="grid grid-cols-1 gap-3">
                  {block.details.impact.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                      <CheckCircle2 className="text-engine-green" size={16} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Solution Visualization */}
            <div className="space-y-8">
              <div className="glass-panel p-6 bg-engine-blue/5 border-engine-blue/20">
                <h4 className="text-engine-blue font-display font-bold text-[10px] tracking-widest uppercase mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 bg-engine-blue rounded-full" />
                  Proposed Solution
                </h4>
                
                <div className="relative p-6 bg-black/40 rounded-xl border border-white/5 overflow-hidden">
                  <div className="relative z-10">
                    <p className="text-white font-medium text-sm mb-4">{block.details.solution}</p>
                    
                    {/* Abstract Flow Diagram */}
                    <div className="flex items-center justify-between gap-4 py-4">
                      <div className="w-12 h-12 rounded-lg bg-engine-cyan/20 border border-engine-cyan/40 flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-engine-cyan rounded animate-pulse" />
                      </div>
                      <ArrowRight className="text-slate-600" />
                      <div className="flex-1 h-1 bg-gradient-to-r from-engine-cyan to-engine-magenta rounded-full relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-sm animate-flow" />
                      </div>
                      <ArrowRight className="text-slate-600" />
                      <div className="w-12 h-12 rounded-lg bg-engine-magenta/20 border border-engine-magenta/40 flex items-center justify-center">
                        <div className="w-6 h-6 rotate-45 border-2 border-engine-magenta rounded" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Background Grid */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                <h4 className="text-slate-400 font-display font-bold text-[10px] tracking-widest uppercase mb-2">Client Case Study</h4>
                <p className="text-slate-300 text-sm italic">"{block.details.caseStudy}"</p>
              </div>
            </div>
          </div>

          {/* Footer Decoration */}
          <div className="h-1 w-full bg-gradient-to-r from-engine-cyan via-engine-magenta to-engine-green" />
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
