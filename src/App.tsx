import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Stage, ConsultingBlock } from './types';
import { STAGES_DATA } from './constants';
import { DigitalConduit } from './components/DigitalConduit';
import { PersonaDisplay } from './components/PersonaDisplay';
import { HolographicMap } from './components/HolographicMap';
import { ConsultingHexagons } from './components/ConsultingHexagons';
import { TrendWatch } from './components/TrendWatch';
import { LifeCycleNav } from './components/LifeCycleNav';
import { DeepDiveModal } from './components/DeepDiveModal';
import { LayoutGrid, Activity, Shield, Cpu } from 'lucide-react';

export default function App() {
  const [currentStage, setCurrentStage] = useState<Stage>(Stage.ASSET_ALLOCATION);
  const [selectedBlock, setSelectedBlock] = useState<ConsultingBlock | null>(null);

  const currentData = STAGES_DATA[currentStage];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden selection:bg-engine-cyan selection:text-black">
      {/* Background Cityscape Dusk Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#05070a] via-[#0a0f1a] to-[#1a1f2e] opacity-90" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[url('https://picsum.photos/seed/cityscape/1920/1080?blur=10')] bg-cover bg-bottom opacity-20 mix-blend-overlay" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `linear-gradient(to right, #00f2ff 1px, transparent 1px), linear-gradient(to bottom, #00f2ff 1px, transparent 1px)`,
            backgroundSize: '100px 100px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }} 
        />
      </div>

      {/* Header */}
      <header className="relative z-10 p-8 flex justify-between items-start">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 glass-panel flex items-center justify-center border-engine-cyan shadow-[0_0_15px_rgba(0,242,255,0.3)]">
            <Cpu className="text-engine-cyan" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-display font-bold tracking-[0.3em] text-white uppercase neon-text-cyan">
              The Capital Markets Engine
            </h1>
            <div className="flex items-center gap-4 mt-1">
              <span className="text-[10px] font-mono text-engine-cyan/60 uppercase tracking-widest flex items-center gap-1">
                <Activity size={10} /> System Status: Optimal
              </span>
              <span className="text-[10px] font-mono text-engine-magenta/60 uppercase tracking-widest flex items-center gap-1">
                <Shield size={10} /> Security: Level 4
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button className="glass-panel px-4 py-2 text-[10px] font-display font-bold tracking-widest uppercase hover:bg-white/5 transition-colors">
            Network View
          </button>
          <button className="glass-panel px-4 py-2 text-[10px] font-display font-bold tracking-widest uppercase bg-engine-cyan/10 border-engine-cyan text-engine-cyan">
            Engine Room
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex flex-col px-8 pb-32">
        <div className="flex-1 grid grid-cols-12 gap-8">
          {/* Left Side: Persona and Conduit */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
            <div className="mb-12">
              <PersonaDisplay persona={currentData.persona} />
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 left-0 text-[10px] font-display font-bold tracking-widest uppercase text-engine-cyan/40">
                Digital Conduit: Dollar Life-Cycle Flow
              </div>
              <DigitalConduit color={currentStage === Stage.ASSET_ALLOCATION ? '#00f2ff' : '#0066ff'} />
            </div>
          </div>

          {/* Right Side: Holograms and Trends */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center gap-8">
            <div className="glass-panel p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <LayoutGrid size={48} className="text-engine-cyan" />
              </div>
              <h2 className="text-engine-cyan font-display font-bold text-xs tracking-[0.2em] uppercase mb-6">
                Market Visualization: {currentStage}
              </h2>
              <HolographicMap 
                investments={currentData.investments} 
                onSelect={(id) => console.log('Selected investment:', id)}
              />
            </div>

            <div className="flex justify-end">
              <TrendWatch trends={currentData.trends} />
            </div>
          </div>
        </div>

        {/* Consulting Blocks Section */}
        <div className="mt-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-engine-border" />
            <h3 className="text-slate-500 font-display font-bold text-[10px] tracking-widest uppercase">
              Modular Consulting Solutions
            </h3>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-engine-border" />
          </div>
          <ConsultingHexagons 
            blocks={currentData.consulting} 
            onSelect={setSelectedBlock} 
          />
        </div>
      </main>

      {/* Bottom Navigation */}
      <footer className="fixed bottom-0 left-0 w-full z-20">
        <LifeCycleNav 
          currentStage={currentStage} 
          onStageChange={setCurrentStage} 
        />
      </footer>

      {/* Modals */}
      <DeepDiveModal 
        block={selectedBlock} 
        onClose={() => setSelectedBlock(null)} 
      />

      {/* Global Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-engine-cyan via-transparent to-engine-magenta opacity-20" />
      <div className="fixed bottom-0 right-0 w-64 h-64 bg-engine-cyan/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="fixed top-1/4 left-0 w-32 h-32 bg-engine-magenta/5 blur-[80px] rounded-full pointer-events-none" />
    </div>
  );
}
