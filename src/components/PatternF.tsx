import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Heart, Star, Calendar } from 'lucide-react';

export default function PatternF() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <div className="min-h-screen bg-[#0F0E0C] text-[#E5E1DA] font-serif-cormorant selection:bg-[#C5A059] selection:text-black">
      {/* Cinematic Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/roots-f-hero/1920/1080?blur=2" 
            className="w-full h-full object-cover brightness-[0.4]"
            alt="Hero"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <span className="text-xs uppercase tracking-[0.6em] text-[#C5A059] mb-8 block">Life's Eternal Roots</span>
            <h1 className="text-6xl md:text-[8vw] font-light leading-none mb-12 italic">
              Eternal <br />
              <span className="not-italic font-serif-playfair">Milestones.</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-8 text-[10px] uppercase tracking-[0.4em] opacity-60">
              <span>Newborn</span>
              <span>Wedding</span>
              <span>Anniversary</span>
              <span>Kanreki</span>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#C5A059]" />
          <span className="text-[8px] uppercase tracking-widest">Scroll to explore</span>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-40 px-8 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-light italic leading-relaxed mb-16">
            「写真」というカタチだけではなく、<br />
            そこで過ごした「時間」と「想い」も残します。
          </h2>
          <p className="text-lg md:text-xl font-sans-inter font-extralight leading-loose opacity-70 max-w-2xl mx-auto">
            お誕生日、七五三、成人式、卒業、結婚、そして家族のアニバーサリー。<br />
            人生には沢山の「節目」＝ROOTSがあります。<br />
            一度きりではなく、人生の節目ごとに帰ってきたくなる「サロン」へ。
          </p>
        </motion.div>
      </section>

      {/* Target Showcase Grid */}
      <section className="py-20 px-4 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Newborn & 100 Days', img: 'newborn', desc: 'はじまりの記憶を、柔らかな光とともに。' },
            { title: 'Wedding Story', img: 'wedding', desc: '誓いの瞬間、ふたりのRootsが重なる場所。' },
            { title: 'Celebration of Life', img: 'kanreki', desc: '還暦、誕生日。重なりゆく歳月を祝う。' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-sm mb-6 relative">
                <img 
                  src={`https://picsum.photos/seed/roots-f-${item.img}/800/1200`} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  alt={item.title}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <h3 className="text-2xl italic mb-2">{item.title}</h3>
              <p className="text-sm font-sans-inter font-light opacity-50">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Immersive Quote */}
      <section className="relative h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/roots-f-quote/1920/1080" 
            className="w-full h-full object-cover opacity-20"
            alt="Quote BG"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 text-center px-8">
          <Heart className="w-12 h-12 text-[#C5A059] mx-auto mb-12 opacity-50" />
          <h2 className="text-4xl md:text-6xl font-light italic leading-tight max-w-4xl mx-auto">
            あなたのROOTSを、あなたの色で、<br />ここから残していきませんか。
          </h2>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <div className="text-2xl font-serif-playfair tracking-tighter mb-6">ROOTS STUDIO.</div>
            <p className="text-xs uppercase tracking-widest opacity-40">Tokyo / Jingumae</p>
          </div>
          <div className="flex gap-20">
            <div className="space-y-4">
              <div className="text-[10px] uppercase tracking-widest text-[#C5A059]">Menu</div>
              <div className="flex flex-col gap-2 text-sm">
                <a href="#" className="hover:opacity-50 transition-opacity">Concept</a>
                <a href="#" className="hover:opacity-50 transition-opacity">Gallery</a>
                <a href="#" className="hover:opacity-50 transition-opacity">Reserve</a>
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-[10px] uppercase tracking-widest text-[#C5A059]">Contact</div>
              <div className="flex flex-col gap-2 text-sm">
                <span>Instagram</span>
                <span>hello@roots-studio.jp</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
