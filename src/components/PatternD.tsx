import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Plus, Zap } from 'lucide-react';

export default function PatternD() {
  return (
    <div className="min-h-screen bg-white text-black font-sans-space selection:bg-[#00FF00] selection:text-black">
      {/* Brutalist Header */}
      <header className="fixed top-0 w-full z-50 flex border-b border-black bg-white">
        <div className="p-6 border-r border-black font-bold text-2xl tracking-tighter">ROOTS_STUDIO</div>
        <div className="flex-1 flex items-center justify-end px-8 gap-8 text-xs font-bold uppercase tracking-tighter">
          <a href="#" className="hover:line-through">Concept</a>
          <a href="#" className="hover:line-through">Archive</a>
          <a href="#" className="hover:line-through">Contact</a>
          <button className="bg-black text-white px-6 py-2 hover:bg-[#00FF00] hover:text-black transition-colors">
            BOOK_NOW
          </button>
        </div>
      </header>

      {/* Hero Grid */}
      <section className="pt-24 grid md:grid-cols-12 min-h-screen">
        <div className="md:col-span-8 border-r border-black p-8 md:p-20 flex flex-col justify-end">
          <motion.h1 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-[12vw] font-black leading-[0.8] tracking-tighter uppercase mb-12"
          >
            LIFE IS <br />
            <span className="bg-[#00FF00] px-4">ROOTS.</span>
          </motion.h1>
          <p className="text-2xl font-bold max-w-xl leading-none uppercase">
            人生のRoots＝節目に何度でも帰れるサロン。
            丁寧な対話からあなたのROOTSを汲み取り、「らしさ」を活かした撮影を。
          </p>
        </div>
        <div className="md:col-span-4 flex flex-col">
          <div className="flex-1 border-b border-black relative overflow-hidden group">
            <img src="https://picsum.photos/seed/brutal1/800/800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="" referrerPolicy="no-referrer" />
            <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs font-bold">01_STUDIO</div>
          </div>
          <div className="flex-1 p-8 bg-[#00FF00] flex flex-col justify-between">
            <Zap className="w-12 h-12" />
            <div>
              <h2 className="text-4xl font-black leading-none mb-4 uppercase">Capture the energy.</h2>
              <button className="flex items-center gap-2 font-bold border-b-2 border-black pb-1">
                VIEW_ARCHIVE <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-black py-4 overflow-hidden bg-black text-white">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap gap-20 text-4xl font-black uppercase italic"
        >
          <span>Roots Studio // Preserving Moments // Life is a Journey // Roots Studio // Preserving Moments // Life is a Journey //</span>
          <span>Roots Studio // Preserving Moments // Life is a Journey // Roots Studio // Preserving Moments // Life is a Journey //</span>
        </motion.div>
      </div>

      {/* Content Grid */}
      <section className="grid md:grid-cols-3 border-b border-black">
        {[
          { id: '01', title: 'DIALOGUE', desc: '丁寧な対話からあなたのROOTSを汲み取ります。' },
          { id: '02', title: 'PRIVATE', desc: '貸切空間で、「らしさ」を活かした撮影を。' },
          { id: '03', title: 'ETERNAL', desc: 'そこで過ごした「時間」と「想い」も残します。' }
        ].map((item) => (
          <div key={item.id} className="p-12 border-r border-black last:border-r-0 hover:bg-zinc-100 transition-colors">
            <div className="text-6xl font-black mb-8 opacity-20">{item.id}</div>
            <h3 className="text-3xl font-black mb-4 uppercase">{item.title}</h3>
            <p className="font-bold opacity-60">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="p-20 flex flex-col md:flex-row justify-between items-end gap-12">
        <div>
          <div className="text-8xl font-black tracking-tighter mb-8">ROOTS.</div>
          <div className="flex gap-8 font-bold uppercase text-sm">
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">Behance</a>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold mb-4">HELLO@ROOTS-STUDIO.JP</div>
          <div className="text-xs font-bold opacity-40">©2026_ALL_RIGHTS_RESERVED</div>
        </div>
      </footer>
    </div>
  );
}
