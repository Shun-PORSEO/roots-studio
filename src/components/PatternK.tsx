import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Instagram, Mail, MapPin, Sparkles } from 'lucide-react';

export default function PatternK() {
  const logoColor = "#5D4037";

  return (
    <div className="min-h-screen bg-[#0F0E0C] text-[#E5E1DA] font-serif-cormorant selection:bg-[#5D4037] selection:text-white">
      {/* Immersive Dark Header */}
      <header className="fixed top-0 w-full z-50 p-10 flex justify-between items-center mix-blend-difference">
        <div className="text-[10px] uppercase tracking-[0.5em] opacity-60">Tokyo / Jingumae</div>
        <div 
          className="text-4xl font-serif-playfair tracking-tighter"
          style={{ color: '#FDFCFB' }}
        >
          Roots Studio
        </div>
        <div className="text-[10px] uppercase tracking-[0.5em] opacity-60">Reserve</div>
      </header>

      {/* Hero: High Contrast Cinematic */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://picsum.photos/seed/roots-k-hero/1920/1080" 
            className="w-full h-full object-cover brightness-50"
            alt="Hero"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.2 }}
          >
            <Sparkles className="w-12 h-12 text-[#5D4037] mx-auto mb-12 opacity-80" />
            <h1 className="text-7xl md:text-[10vw] font-black italic leading-none mb-8 tracking-tighter">
              ETERNAL <br />
              <span className="not-italic font-serif-playfair text-white">ROOTS.</span>
            </h1>
            <p className="text-xl md:text-2xl tracking-[0.6em] uppercase text-[#5D4037]">
              人生の節目に、何度でも。
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30 animate-bounce">
          <div className="w-px h-20 bg-white" />
        </div>
      </section>

      {/* Narrative: Dark Editorial */}
      <section className="py-64 px-10 md:px-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-light italic leading-tight mb-24">
            「写真」というカタチだけではなく、<br />
            そこで過ごした「時間」と「想い」も残します。
          </h2>
          <div className="grid md:grid-cols-2 gap-32 items-end">
            <div className="space-y-12">
              <p className="text-2xl font-light leading-relaxed opacity-60">
                お誕生日、七五三、成人式、卒業、結婚、そして家族のアニバーサリー。
                人生には沢山の「節目」＝ROOTSがあります。
              </p>
              <p className="text-2xl font-light leading-relaxed opacity-60">
                丁寧な対話からあなたのROOTSを汲み取り、「らしさ」を活かした撮影を貸切空間で。
                一度きりではなく、人生の節目ごとに帰ってきたくなる「サロン」へ。
              </p>
            </div>
            <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-white/10">
              <img src="https://picsum.photos/seed/roots-k-2/800/1066" className="w-full h-full object-cover grayscale" alt="" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Showcase: Horizontal Scroll Feel */}
      <section className="py-40 px-10 md:px-20 bg-[#1A1A1A]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <h3 className="text-6xl italic">Our Chronicles.</h3>
          <p className="text-sm uppercase tracking-widest opacity-40 mt-8 md:mt-0">Newborn to Kanreki</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: "Newborn", img: "k1" },
            { title: "Wedding", img: "k2" },
            { title: "Coming of Age", img: "k3" },
            { title: "Kanreki", img: "k4" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -20 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[2/3] overflow-hidden rounded-2xl mb-6 border border-white/5">
                <img 
                  src={`https://picsum.photos/seed/roots-${item.img}/600/900`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                  alt={item.title}
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl italic text-center opacity-60 group-hover:opacity-100 transition-opacity">{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-10 md:px-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-3xl font-serif-playfair text-white">Roots Studio</div>
          <div className="flex gap-12 text-[10px] uppercase tracking-widest opacity-40">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Pinterest</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="text-[10px] opacity-20 uppercase tracking-widest">© 2026 Roots Studio.</div>
        </div>
      </footer>
    </div>
  );
}
