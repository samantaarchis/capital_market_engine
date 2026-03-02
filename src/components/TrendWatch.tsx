import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trend } from '../types';

interface TrendWatchProps {
  trends: Trend[];
}

export const TrendWatch: React.FC<TrendWatchProps> = ({ trends }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % trends.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [trends]);

  return (
    <div className="glass-panel p-4 border-r-4 border-r-engine-magenta w-full max-w-xs">
      <h5 className="text-engine-magenta font-display font-bold text-[10px] tracking-widest uppercase mb-3 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-engine-magenta animate-pulse" />
        Trend Watch
      </h5>
      <div className="h-12 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={trends[currentIndex]?.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-slate-300 text-xs font-mono leading-relaxed"
          >
            {trends[currentIndex]?.text}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};
