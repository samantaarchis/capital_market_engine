import React from 'react';
import { motion } from 'motion/react';
import { ConsultingBlock } from '../types';

interface ConsultingHexagonsProps {
  blocks: ConsultingBlock[];
  onSelect: (block: ConsultingBlock) => void;
}

export const ConsultingHexagons: React.FC<ConsultingHexagonsProps> = ({ blocks, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {blocks.map((block, idx) => (
        <motion.div
          key={block.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          onClick={() => onSelect(block)}
          className="cursor-pointer group relative w-64 h-32"
        >
          {/* Hexagonal Background */}
          <div className="absolute inset-0 glass-panel overflow-hidden group-hover:border-engine-cyan transition-colors">
            <div className="absolute top-0 left-0 w-1 h-full bg-engine-cyan opacity-50" />
            
            <div className="p-4 pl-6 h-full flex flex-col justify-center">
              <h4 className="text-engine-cyan font-display font-bold text-[10px] tracking-widest uppercase mb-1">
                {block.title}
              </h4>
              <p className="text-white text-xs font-medium leading-tight">
                {block.subtitle}
              </p>
            </div>

            {/* Decorative Hexagon Pattern */}
            <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg width="80" height="80" viewBox="0 0 100 100">
                <path d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z" fill="currentColor" className="text-engine-cyan" />
              </svg>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
