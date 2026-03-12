import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play, Sparkles, Star } from 'lucide-react';

export default function PatternC() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-serif-playfair overflow-x-hidden">
      {/* Immersive Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
        <motion.img 
          style={{ y: y1 }}
          src="https://picsum.photos/seed/roots-dark/1920/1080" 
          className="w-full h-full object-cover opacity-40 scale-110"
          alt="Atmospheric background"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-white/5 backdrop-blur-xl border border-white/10 px-8 py-4 rounded-full flex gap-12 text-xs uppercase tracking-[0.3em]">
        <a href="#" className="hover:text-amber-200 transition-colors">Roots</a>
        <a href="#" className="hover:text-amber-200 transition-colors">Story</a>
        <a href="#" className="hover:text-amber-200 transition-colors">Salon</a>
        <a href="#" className="hover:text-amber-200 transition-colors">Reserve</a>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 z-10">
        <motion.div style={{ opacity }}>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="mb-8"
          >
            <Sparkles className="w-12 h-12 text-amber-200/50 mx-auto" />
          </motion.div>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-7xl md:text-[10rem] font-black italic leading-none mb-6 tracking-tighter"
          >
            ROOTS
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-xl md:text-2xl font-light tracking-[0.5em] uppercase text-amber-100/60"
          >
            人生の節目に、何度でも。
          </motion.p>
        </motion.div>
      </section>

      {/* Narrative Section */}
      <section className="relative py-64 px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl mb-16 leading-tight font-light italic">
              「写真」というカタチだけではなく、<br />
              そこで過ごした「時間」と「想い」も残します。
            </h2>
            <div className="w-20 h-px bg-amber-200/30 mx-auto mb-16" />
            <p className="text-xl md:text-2xl leading-relaxed text-zinc-400 font-sans-inter font-extralight">
              お誕生日、七五三、成人式、卒業、結婚、そして家族のアニバーサリー。<br />
              丁寧な対話からあなたのROOTSを汲み取り、<br />
              「らしさ」を活かした撮影を貸切空間で。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Horizontal Scroll / Showcase */}
      <section className="relative py-32 z-10">
        <div className="flex gap-12 px-8 overflow-x-auto no-scrollbar pb-20">
          {[10, 11, 12, 13, 14].map((i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="min-w-[300px] md:min-w-[500px] aspect-[3/4] relative group rounded-3xl overflow-hidden"
            >
              <img 
                src={`https://picsum.photos/seed/roots-dark-${i}/800/1200`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                alt=""
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-end">
                <Star className="w-6 h-6 text-amber-200 mb-4" />
                <h4 className="text-2xl italic">Eternal Moment</h4>
                <p className="text-sm font-sans-inter opacity-60">Preserving the essence of your journey.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cinematic Call to Action */}
      <section className="relative h-screen flex items-center justify-center z-10">
        <div className="text-center">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-32 h-32 rounded-full border border-amber-200/30 flex items-center justify-center mb-12 mx-auto cursor-pointer group"
          >
            <Play className="w-8 h-8 text-amber-200 fill-amber-200 group-hover:scale-125 transition-transform" />
          </motion.div>
          <h3 className="text-5xl md:text-7xl italic font-light mb-8">Your Story Starts Here.</h3>
          <button className="px-12 py-4 bg-amber-200 text-black rounded-full font-sans-inter font-bold tracking-widest hover:bg-white transition-colors">
            RESERVE NOW
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-8 border-t border-white/5 z-10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-4xl font-black italic tracking-tighter">ROOTS</div>
          <div className="flex gap-12 text-xs uppercase tracking-widest opacity-40">
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">Facebook</a>
          </div>
          <div className="text-xs opacity-40 uppercase tracking-widest">
            © 2026 ROOTS STUDIO.
          </div>
        </div>
      </footer>
    </div>
  );
}
