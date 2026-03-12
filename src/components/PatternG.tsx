import React from 'react';
import { motion } from 'motion/react';
import { Camera, Heart, Mail, MapPin, ArrowRight, Sparkles } from 'lucide-react';

export default function PatternG() {
  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#2D2A26] font-serif-cormorant">
      {/* Floating Glass Header */}
      <header className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
        <div className="bg-white/40 backdrop-blur-xl border border-white/20 rounded-full px-8 py-4 flex justify-between items-center shadow-lg shadow-black/5">
          <div className="text-xl font-serif-playfair tracking-tighter">Roots Studio</div>
          <nav className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-medium">
            <a href="#" className="hover:opacity-50 transition-opacity">The Salon</a>
            <a href="#" className="hover:opacity-50 transition-opacity">Moments</a>
            <a href="#" className="hover:opacity-50 transition-opacity">Reserve</a>
          </nav>
          <button className="text-[10px] uppercase tracking-widest font-bold border-b border-[#2D2A26] pb-0.5">Contact</button>
        </div>
      </header>

      {/* Soft Editorial Hero */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="container mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-[#2D2A26]/20" />
              <span className="text-xs uppercase tracking-[0.4em] opacity-40">Photography Salon</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-light leading-[0.9] mb-12">
              Pure <br />
              <span className="italic font-serif-playfair">Narrative.</span>
            </h1>
            <p className="text-xl font-light leading-relaxed text-[#5A5650] max-w-md mb-12">
              ニューボーンから還暦まで。人生の節目に何度でも帰れる、光と想いが溢れる場所。
            </p>
            <button className="group flex items-center gap-4 text-sm uppercase tracking-widest font-bold">
              View Our Works <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
          
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="aspect-[4/5] rounded-t-full overflow-hidden shadow-2xl relative z-10"
            >
              <img 
                src="https://picsum.photos/seed/roots-g-hero/1000/1250" 
                className="w-full h-full object-cover"
                alt="Soft Portrait"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#F5F2ED] rounded-full -z-0" />
            <Sparkles className="absolute top-0 right-0 w-12 h-12 text-[#C5A059]/30 -translate-y-1/2 translate-x-1/2" />
          </div>
        </div>
      </section>

      {/* Target Audience Bento */}
      <section className="py-40 bg-[#F9F7F5]">
        <div className="container mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-light italic mb-6">Every Milestone Matters.</h2>
            <p className="text-sm uppercase tracking-[0.4em] opacity-40">人生のRootsを形に残す</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 aspect-[16/9] relative rounded-3xl overflow-hidden group">
              <img src="https://picsum.photos/seed/roots-g-1/1200/800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-10 flex flex-col justify-end text-white">
                <h3 className="text-3xl italic mb-2">Wedding & Photo Wedding</h3>
                <p className="text-sm font-sans-inter opacity-70">結婚式の代わりのフォトウェディング、プチ人前セレモニーも。</p>
              </div>
            </div>
            <div className="aspect-square relative rounded-3xl overflow-hidden group">
              <img src="https://picsum.photos/seed/roots-g-2/800/800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl italic">Newborn</h3>
              </div>
            </div>
            <div className="aspect-square relative rounded-3xl overflow-hidden group">
              <img src="https://picsum.photos/seed/roots-g-3/800/800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl italic">Coming of Age</h3>
              </div>
            </div>
            <div className="md:col-span-2 aspect-[16/9] relative rounded-3xl overflow-hidden group">
              <img src="https://picsum.photos/seed/roots-g-4/1200/800" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent p-10 flex flex-col justify-end text-white">
                <h3 className="text-3xl italic mb-2">Anniversary & Kanreki</h3>
                <p className="text-sm font-sans-inter opacity-70">還暦祝い、誕生日。家族の歴史を重ねる場所。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-32 px-8 border-t border-[#2D2A26]/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-20">
          <div>
            <div className="text-3xl font-serif-playfair tracking-tighter mb-8">Roots Studio</div>
            <p className="text-sm leading-relaxed opacity-50">
              一度きりではなく、人生の節目ごとに帰ってきたくなる場所へ。<br />
              あなたのROOTSを、あなたの色で。
            </p>
          </div>
          <div className="space-y-6">
            <div className="text-[10px] uppercase tracking-widest font-bold opacity-30">Location</div>
            <div className="flex items-center gap-4 text-sm"><MapPin className="w-4 h-4 opacity-40" /> 東京都渋谷区神宮前 0-0-0</div>
            <div className="flex items-center gap-4 text-sm"><Mail className="w-4 h-4 opacity-40" /> hello@roots-studio.jp</div>
          </div>
          <div className="flex flex-col items-end gap-10">
            <div className="flex gap-6">
              <div className="w-10 h-10 rounded-full border border-[#2D2A26]/10 flex items-center justify-center hover:bg-[#2D2A26] hover:text-white transition-all cursor-pointer">
                <Heart className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-full border border-[#2D2A26]/10 flex items-center justify-center hover:bg-[#2D2A26] hover:text-white transition-all cursor-pointer">
                <Camera className="w-4 h-4" />
              </div>
            </div>
            <p className="text-[10px] uppercase tracking-widest opacity-30">© 2026 Roots Studio. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
