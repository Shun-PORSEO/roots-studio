import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Grid, Layout, Maximize, Menu } from 'lucide-react';

export default function PatternB() {
  return (
    <div className="min-h-screen bg-white text-black font-sans-inter selection:bg-black selection:text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 mix-blend-difference text-white p-6 md:p-10 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter">ROOTS STUDIO.</div>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Hero */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-20">
        <div className="max-w-5xl">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12vw] md:text-[8vw] font-black leading-[0.9] tracking-tighter uppercase mb-12"
          >
            Preserving <br />
            <span className="text-transparent border-text stroke-black" style={{ WebkitTextStroke: '1px black' }}>The Milestones</span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row gap-8 items-start md:items-center"
          >
            <p className="text-lg md:text-xl max-w-md font-light leading-relaxed">
              人生のRoots＝節目に何度でも帰れるサロン。
              丁寧な対話からあなたのROOTSを汲み取り、「らしさ」を活かした撮影を。
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 hover:scale-105 transition-transform">
              Book a Session <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Full Width Image */}
      <section className="px-6 md:px-10 pb-20">
        <motion.div 
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[70vh] w-full overflow-hidden rounded-3xl"
        >
          <img 
            src="https://picsum.photos/seed/roots-modern/1920/1080" 
            className="w-full h-full object-cover"
            alt="Modern studio"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* Split Content */}
      <section className="py-32 grid md:grid-cols-2 border-t border-black/10">
        <div className="p-10 md:p-20 border-b md:border-b-0 md:border-r border-black/10">
          <h2 className="text-xs uppercase tracking-widest mb-10 opacity-50">01 / The Philosophy</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-10">
            想いと時間を、<br />カタチにする。
          </h3>
          <p className="text-xl font-light leading-relaxed opacity-70">
            ここは、ただ写真を撮るだけの場所ではありません。手紙を書いたり、語り合ったり。
            「写真」というカタチだけではなく、そこで過ごした「時間」と「想い」も残します。
          </p>
        </div>
        <div className="p-10 md:p-20 flex flex-col justify-center">
          <div className="space-y-12">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                <Layout className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Private Space</h4>
                <p className="opacity-60">完全貸切のプライベート空間で、リラックスした撮影を。</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                <Maximize className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Dialogue First</h4>
                <p className="opacity-60">撮影前の丁寧な対話を通じて、あなたの「Roots」を深く理解します。</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                <Grid className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Life-long Partner</h4>
                <p className="opacity-60">一度きりではなく、人生の節目ごとに帰ってきたくなる場所へ。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Gallery */}
      <section className="p-6 md:p-10 bg-zinc-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[120vh] md:h-[80vh]">
          <div className="md:col-span-2 relative overflow-hidden rounded-3xl group">
            <img src="https://picsum.photos/seed/bento1/1200/800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="" referrerPolicy="no-referrer" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm uppercase tracking-widest mb-2">Anniversary</p>
              <h5 className="text-3xl font-bold">Family Roots</h5>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl group">
            <img src="https://picsum.photos/seed/bento2/600/800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="" referrerPolicy="no-referrer" />
          </div>
          <div className="relative overflow-hidden rounded-3xl group">
            <img src="https://picsum.photos/seed/bento3/600/800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="" referrerPolicy="no-referrer" />
          </div>
          <div className="md:col-span-2 relative overflow-hidden rounded-3xl group">
            <img src="https://picsum.photos/seed/bento4/1200/800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-10 md:p-20 bg-black text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
          <div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">LET'S TALK.</h2>
            <p className="text-xl opacity-50 max-w-sm">あなたの物語を、ここから残していきませんか。</p>
          </div>
          <div className="text-right">
            <p className="text-lg mb-2">hello@roots-studio.jp</p>
            <p className="opacity-50">© 2026 ROOTS STUDIO.</p>
          </div>
        </div>
      </footer >
    </div>
  );
}
