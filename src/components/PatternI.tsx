import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Instagram, Mail, MapPin } from 'lucide-react';

export default function PatternI() {
  const logoColor = "#5D4037"; // Deep earthy brown from the logo

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#2D2A26] font-serif-cormorant">
      {/* Elegant Minimal Header */}
      <header className="p-10 flex justify-between items-center">
        <div className="text-[10px] uppercase tracking-[0.4em] font-medium opacity-40">Est. 2026</div>
        <div 
          className="text-4xl font-serif-playfair tracking-tight"
          style={{ color: logoColor }}
        >
          Roots Studio
        </div>
        <div className="text-[10px] uppercase tracking-[0.4em] font-medium opacity-40">Menu</div>
      </header>

      {/* Hero: Large Typography & Soft Image */}
      <section className="pt-20 pb-40 px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="text-7xl md:text-9xl font-light leading-[0.85] mb-12">
              Capturing <br />
              <span className="italic font-serif-playfair" style={{ color: logoColor }}>The Soul.</span>
            </h1>
            <p className="text-2xl font-light leading-relaxed max-w-md text-[#5A5650]">
              人生の節目に、何度でも。
              丁寧な対話からあなたのRootsを汲み取り、
              「らしさ」を活かした撮影を。
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="aspect-[3/4] overflow-hidden rounded-t-full shadow-xl"
          >
            <img 
              src="https://picsum.photos/seed/roots-i-hero/1000/1333" 
              className="w-full h-full object-cover"
              alt="Hero"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Categories: Editorial List */}
      <section className="py-40 bg-[#F5F2ED] px-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xs uppercase tracking-[0.5em] opacity-40 mb-20 text-center">Our Services</h2>
          <div className="space-y-12">
            {[
              { title: "Newborn & 100 Days", category: "Beginning" },
              { title: "Entrance & Graduation", category: "Growth" },
              { title: "Coming of Age", category: "Heritage" },
              { title: "Wedding & Photo Wedding", category: "Union" },
              { title: "Celebrations & Kanreki", category: "Legacy" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 20 }}
                className="flex justify-between items-end border-b border-[#2D2A26]/10 pb-8 group cursor-pointer"
              >
                <div>
                  <span className="text-[10px] uppercase tracking-widest opacity-40 block mb-2">{item.category}</span>
                  <h3 className="text-4xl md:text-6xl font-light group-hover:italic transition-all">{item.title}</h3>
                </div>
                <ArrowRight className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Split */}
      <section className="py-40 px-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-32 items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/roots-i-2/800/1000" className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-5xl font-light italic mb-12" style={{ color: logoColor }}>
              ここは、ただ写真を撮るだけの場所ではありません。
            </h2>
            <p className="text-xl font-light leading-loose opacity-70 mb-12">
              手紙を書いたり、語り合ったり。<br />
              「写真」というカタチだけではなく、そこで過ごした「時間」と「想い」も残します。<br />
              一度きりではなく、人生の節目ごとに帰ってきたくなる「サロン」へ。
            </p>
            <button className="px-12 py-4 border border-[#2D2A26] rounded-full text-sm uppercase tracking-widest hover:bg-[#2D2A26] hover:text-white transition-all">
              Reserve Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-10 border-t border-[#2D2A26]/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-3xl font-serif-playfair tracking-tighter" style={{ color: logoColor }}>Roots Studio</div>
          <div className="flex gap-12 text-[10px] uppercase tracking-widest opacity-40">
            <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Pinterest</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Contact</a>
          </div>
          <div className="text-[10px] opacity-20 uppercase tracking-widest">
            © 2026 Roots Studio.
          </div>
        </div>
      </footer>
    </div>
  );
}
