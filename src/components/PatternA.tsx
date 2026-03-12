import React from 'react';
import { motion } from 'motion/react';
import { Camera, Heart, Mail, MapPin, ArrowRight } from 'lucide-react';

export default function PatternA() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2D2A26] font-serif-cormorant">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white">
        <div className="text-2xl font-semibold tracking-widest">ROOTS</div>
        <div className="hidden md:flex gap-12 text-sm uppercase tracking-[0.2em]">
          <a href="#" className="hover:opacity-50 transition-opacity">Concept</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Gallery</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Plan</a>
          <a href="#" className="hover:opacity-50 transition-opacity">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="https://picsum.photos/seed/roots1/1920/1080" 
            className="w-full h-full object-cover brightness-90"
            alt="Studio atmosphere"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-4">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl mb-6 tracking-[0.3em] font-light italic"
          >
            人生のRoots＝節目に
          </motion.p>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="text-6xl md:text-9xl font-light leading-tight mb-8"
          >
            何度でも帰れるサロン
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex justify-center"
          >
            <div className="w-px h-24 bg-white/50 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-32 px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-sm uppercase tracking-[0.4em] text-[#8C867E] mb-4">Concept</h2>
            <h3 className="text-4xl md:text-5xl leading-tight mb-8">
              ここは、ただ写真を<br />撮るだけの場所ではありません。
            </h3>
            <p className="text-xl leading-relaxed text-[#5A5650] mb-8 font-sans-inter font-light">
              お誕生日、七五三、成人式、卒業、結婚、そして家族のアニバーサリー。<br />
              人生には沢山の「節目」＝ROOTSがあります。<br /><br />
              丁寧な対話からあなたのROOTSを汲み取り、「らしさ」を活かした撮影を貸切空間で。<br />
              手紙を書いたり、語り合ったり。<br />
              「写真」というカタチだけではなく、そこで過ごした「時間」と「想い」も残します。
            </p>
            <button className="group flex items-center gap-4 text-lg border-b border-[#2D2A26] pb-2 hover:opacity-60 transition-all">
              Read More <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative aspect-[3/4] rounded-[100px] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://picsum.photos/seed/roots2/800/1200" 
              className="w-full h-full object-cover"
              alt="Emotional portrait"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-[#F5F2ED] py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
            <div>
              <h2 className="text-sm uppercase tracking-[0.4em] text-[#8C867E] mb-4">Moments</h2>
              <h3 className="text-5xl">紡がれる記憶</h3>
            </div>
            <p className="text-[#5A5650] max-w-md mt-6 md:mt-0 font-sans-inter font-light">
              一度きりではなく、人生の節目ごとに帰ってきたくなる場所へ。あなたのROOTSを、あなたの色で。
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[3, 4, 5, 6].map((i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <img 
                  src={`https://picsum.photos/seed/roots${i}/600/800`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  alt={`Gallery ${i}`}
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 border-t border-[#E5E1DA]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <div className="text-3xl font-semibold tracking-widest mb-6">ROOTS</div>
            <p className="text-[#8C867E] font-sans-inter font-light">
              人生のRoots＝節目に何度でも帰れるサロン
            </p>
          </div>
          <div className="space-y-4 font-sans-inter font-light">
            <div className="flex items-center gap-3"><MapPin className="w-4 h-4" /> 東京都渋谷区神宮前 0-0-0</div>
            <div className="flex items-center gap-3"><Mail className="w-4 h-4" /> hello@roots-studio.jp</div>
          </div>
          <div className="flex gap-6 justify-end items-start">
            <div className="w-10 h-10 rounded-full border border-[#2D2A26] flex items-center justify-center hover:bg-[#2D2A26] hover:text-white transition-colors cursor-pointer">
              <Camera className="w-4 h-4" />
            </div>
            <div className="w-10 h-10 rounded-full border border-[#2D2A26] flex items-center justify-center hover:bg-[#2D2A26] hover:text-white transition-colors cursor-pointer">
              <Heart className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="mt-20 text-center text-xs tracking-widest text-[#8C867E] uppercase">
          © 2026 ROOTS STUDIO. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
