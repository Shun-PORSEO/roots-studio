import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PatternA from './components/PatternA';
import PatternB from './components/PatternB';
import PatternC from './components/PatternC';
import PatternD from './components/PatternD';
import PatternE from './components/PatternE';
import PatternF from './components/PatternF';
import PatternG from './components/PatternG';
import PatternH from './components/PatternH';
import PatternI from './components/PatternI';
import PatternJ from './components/PatternJ';
import PatternK from './components/PatternK';
import { Layers, Palette, Sparkles, Zap, BookOpen, Film, Sun, History, Type, Flower, Moon } from 'lucide-react';

type Pattern = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K';

export default function App() {
  const [activePattern, setActivePattern] = useState<Pattern>('J');

  const patterns = [
    { id: 'A', name: 'Organic', icon: Palette, concept: 'Warm Heritage' },
    { id: 'B', name: 'Minimal', icon: Layers, concept: 'Modern Studio' },
    { id: 'C', name: 'Immersive', icon: Sparkles, concept: 'Cinematic Narrative' },
    { id: 'D', name: 'Brutal', icon: Zap, concept: 'Brutalist Grid' },
    { id: 'E', name: 'Editorial', icon: BookOpen, concept: 'Editorial Luxury' },
    { id: 'F', name: 'Eternal', icon: Film, concept: 'Cinematic Heritage' },
    { id: 'G', name: 'Pure', icon: Sun, concept: 'Soft Light Editorial' },
    { id: 'H', name: 'Chronicle', icon: History, concept: 'Narrative Timeline' },
    { id: 'I', name: 'Classic', icon: Type, concept: 'Logo-Matched Editorial' },
    { id: 'J', name: 'Earthy', icon: Flower, concept: 'Organic Narrative' },
    { id: 'K', name: 'Heritage', icon: Moon, concept: 'High-Contrast Cinematic' },
  ] as const;

  return (
    <div className="relative">
      {/* Pattern Switcher UI */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-1 bg-black/80 backdrop-blur-2xl p-1.5 rounded-full border border-white/10 shadow-2xl scale-[0.65] md:scale-100 max-w-[98vw] overflow-x-auto no-scrollbar">
        {patterns.map((p) => (
          <button
            key={p.id}
            onClick={() => setActivePattern(p.id)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full transition-all whitespace-nowrap ${
              activePattern === p.id ? 'bg-white text-black font-bold' : 'text-white/60 hover:text-white hover:bg-white/10'
            }`}
          >
            <p.icon className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-widest hidden xl:inline">{p.name}</span>
          </button>
        ))}
      </div>

      {/* Pattern Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePattern}
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(10px)' }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {activePattern === 'A' && <PatternA />}
          {activePattern === 'B' && <PatternB />}
          {activePattern === 'C' && <PatternC />}
          {activePattern === 'D' && <PatternD />}
          {activePattern === 'E' && <PatternE />}
          {activePattern === 'F' && <PatternF />}
          {activePattern === 'G' && <PatternG />}
          {activePattern === 'H' && <PatternH />}
          {activePattern === 'I' && <PatternI />}
          {activePattern === 'J' && <PatternJ />}
          {activePattern === 'K' && <PatternK />}
        </motion.div>
      </AnimatePresence>

      {/* Pattern Info Overlay */}
      <div className="fixed top-8 left-8 z-[100] pointer-events-none">
        <div className="bg-black/20 backdrop-blur-md border border-white/10 p-4 rounded-2xl text-white/80 text-[10px] uppercase tracking-[0.2em]">
          Concept {activePattern}: {patterns.find(p => p.id === activePattern)?.concept}
        </div>
      </div>
    </div>
  );
}
