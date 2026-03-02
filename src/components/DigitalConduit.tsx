import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const DigitalConduit: React.FC<{ color?: string }> = ({ color = '#00f2ff' }) => {
  const [nodes, setNodes] = useState<{ id: number; delay: number; y: number }[]>([]);

  useEffect(() => {
    const newNodes = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 5,
      y: 20 + Math.random() * 60,
    }));
    setNodes(newNodes);
  }, []);

  return (
    <div className="relative w-full h-48 overflow-hidden">
      {/* Main Conduit Line */}
      <div 
        className="absolute top-1/2 left-0 w-full h-[2px] opacity-30"
        style={{ 
          background: `linear-gradient(90deg, transparent 0%, ${color} 50%, transparent 100%)`,
          boxShadow: `0 0 20px ${color}`
        }}
      />
      
      {/* Moving Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          initial={{ x: '-10%', opacity: 0 }}
          animate={{ 
            x: '110%', 
            opacity: [0, 1, 1, 0] 
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: node.delay,
            ease: "linear"
          }}
          className="absolute w-3 h-3 rounded-full"
          style={{
            top: `${node.y}%`,
            backgroundColor: color,
            boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
          }}
        >
          <div className="absolute inset-0 animate-ping rounded-full bg-white/50" />
        </motion.div>
      ))}

      {/* Light Trails */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 opacity-10 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent blur-xl" />
      </div>
    </div>
  );
};
