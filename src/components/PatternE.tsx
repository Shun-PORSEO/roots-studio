import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Instagram, Mail, MapPin } from 'lucide-react';

export default function PatternE() {
  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] font-serif-cormorant">
      {/* Elegant Header */}
      <header className="p-10 flex justify-between items-center border-b border-[#1A1A1A]/10">
        <div className="text-xs uppercase tracking-[0.3em] font-medium">Est. 2026</div>
        <div className="text-3xl font-light tracking-[0.2em] uppercase">Roots Studio</div>
        <div className="text-xs uppercase tracking-[0.3em] font-medium">Menu</div>
      </header>

      {/* Editorial Hero */}
      <section className="grid md:grid-cols-2 min-h-[90vh]">
        <div className="p-10 md:p-20 flex flex-col justify-center border-r border-[#1A1A1A]/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-7xl md:text-9xl font-light leading-[0.9] mb-12 italic">
              The Art of <br />
              <span className="not-italic">Roots.</span>
            </h1>
            <p className="text-2xl font-light leading-relaxed max-w-md mb-12 text-[#4A4A4A]">
              人生の節目に何度でも帰れるサロン。
              丁寧な対話からあなたのROOTSを汲み取り、
              「らしさ」を活かした撮影を貸切空間で。
            </p>
            <button className="group flex items-center gap-6 text-lg uppercase tracking-widest border border-[#1A1A1A] px-10 py-4 rounded-full hover:bg-[#1A1A1A] hover:text-white transition-all">
              Explore Story <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
        <div className="relative p-10 flex items-center justify-center">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full aspect-[3/4] overflow-hidden rounded-[200px] shadow-2xl"
          >
            <img 
              src="https://picsum.photos/seed/editorial1/1000/1400" 
              className="w-full h-full object-cover"
              alt="Editorial portrait"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute bottom-20 right-0 translate-x-1/2 rotate-90 text-[10px] uppercase tracking-[0.5em] opacity-40">
            Capturing the essence of time
          </div>
        </div>
      </section>

      {/* Split Narrative */}
      <section className="py-32 px-10 border-y border-[#1A1A1A]/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-20">
          <div className="md:col-span-2">
            <h2 className="text-5xl md:text-7xl font-light italic mb-12">
              ここは、ただ写真を撮るだけの場所ではありません。
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <p className="text-xl font-light leading-relaxed opacity-70">
                お誕生日、七五三、成人式、卒業、結婚、そして家族のアニバーサリー。
                人生には沢山の「節目」＝ROOTSがあります。
              </p>
              <p className="text-xl font-light leading-relaxed opacity-70">
                手紙を書いたり、語り合ったり。
                「写真」というカタチだけではなく、そこで過ごした「時間」と「想い」も残します。
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <div className="aspect-square rounded-full overflow-hidden border border-[#1A1A1A]/10 p-2">
              <img src="https://picsum.photos/seed/editorial2/600/600" className="w-full h-full object-cover rounded-full" alt="" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Gallery */}
      <section className="py-32 px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -20 }}
              className={`aspect-[2/3] overflow-hidden rounded-t-full ${i % 2 === 0 ? 'mt-20' : ''}`}
            >
              <img 
                src={`https://picsum.photos/seed/editorial-gallery-${i}/600/900`} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                alt=""
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-[#F5F2ED] p-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-6xl font-light italic mb-12">Roots Studio.</h2>
            <div className="space-y-6 text-sm uppercase tracking-widest opacity-60">
              <div className="flex items-center gap-4"><MapPin className="w-4 h-4" /> Jingumae, Shibuya, Tokyo</div>
              <div className="flex items-center gap-4"><Mail className="w-4 h-4" /> hello@roots-studio.jp</div>
              <div className="flex items-center gap-4"><Instagram className="w-4 h-4" /> @roots_studio</div>
            </div>
          </div>
          <div className="flex flex-col justify-between items-end">
            <div className="text-right">
              <p className="text-2xl font-light italic mb-4">一度きりではなく、人生の節目ごとに帰ってきたくなる場所へ。</p>
              <p className="text-xs uppercase tracking-[0.5em] opacity-40">Your roots, your colors, from here.</p>
            </div>
            <div className="text-xs opacity-40 uppercase tracking-widest mt-20">
              © 2026 ROOTS STUDIO.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
