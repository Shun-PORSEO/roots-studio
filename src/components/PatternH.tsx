import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown, Star, Users, Camera, Heart } from 'lucide-react';

export default function PatternH() {
  const { scrollYProgress } = useScroll();
  
  return (
    <div className="min-h-screen bg-[#080808] text-white font-serif-playfair selection:bg-white selection:text-black">
      {/* Immersive Vertical Timeline Hero */}
      <section className="relative h-[200vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div 
            style={{ 
              scale: useTransform(scrollYProgress, [0, 0.5], [1, 1.2]),
              opacity: useTransform(scrollYProgress, [0, 0.4, 0.5], [1, 1, 0])
            }}
            className="absolute inset-0 z-0"
          >
            <img 
              src="https://picsum.photos/seed/roots-h-hero/1920/1080" 
              className="w-full h-full object-cover brightness-50"
              alt="Hero"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-7xl md:text-[12vw] font-black italic tracking-tighter leading-none mb-8">
                CHRONICLE
              </h1>
              <p className="text-xs md:text-sm uppercase tracking-[0.8em] opacity-50 mb-12">
                The Timeline of Your Roots
              </p>
              <div className="flex flex-col items-center gap-4 animate-bounce opacity-30">
                <ArrowDown className="w-6 h-6" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Content */}
      <section className="relative z-20 bg-[#080808] py-40 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-32">
            {/* Left: Text Content */}
            <div className="space-y-64">
              {[
                { 
                  year: '01', 
                  title: 'Newborn & Birthdays', 
                  desc: 'はじまりの瞬間。お誕生日、100日祝い。家族の歴史が刻まれる最初のページ。',
                  icon: <Star className="w-8 h-8" />
                },
                { 
                  year: '02', 
                  title: 'Growth & Graduation', 
                  desc: '入学、卒業、成人式。友人と笑い合い、自立へと向かう輝かしい節目。',
                  icon: <Users className="w-8 h-8" />
                },
                { 
                  year: '03', 
                  title: 'Love & Union', 
                  desc: '婚活写真から、結婚式前撮り、フォトウェディングまで。ふたりの物語を永遠に。',
                  icon: <Heart className="w-8 h-8" />
                },
                { 
                  year: '04', 
                  title: 'Legacy & Kanreki', 
                  desc: '還暦祝い。重ねてきた歳月を慈しみ、次なるRootsへと繋いでいく。',
                  icon: <Camera className="w-8 h-8" />
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1 }}
                  className="relative pl-20"
                >
                  <div className="absolute left-0 top-0 text-6xl font-black italic opacity-10">{item.year}</div>
                  <div className="text-amber-200/50 mb-6">{item.icon}</div>
                  <h3 className="text-4xl md:text-6xl font-light italic mb-8">{item.title}</h3>
                  <p className="text-xl font-sans-inter font-extralight leading-relaxed opacity-60">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Right: Sticky Images */}
            <div className="hidden md:block sticky top-40 h-[70vh]">
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10">
                <motion.div 
                  style={{ 
                    y: useTransform(scrollYProgress, [0.4, 0.9], [0, -1000])
                  }}
                  className="flex flex-col gap-4"
                >
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/roots-h-${i}/800/1000`} 
                      className="w-full aspect-[4/5] object-cover rounded-2xl"
                      alt=""
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-64 text-center px-8 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-[8vw] font-black italic tracking-tighter mb-16">
            YOUR STORY.
          </h2>
          <button className="px-16 py-6 bg-white text-black rounded-full font-sans-inter font-bold tracking-[0.2em] hover:bg-amber-100 transition-colors">
            RESERVE THE MOMENT
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-2xl font-black italic tracking-tighter">ROOTS STUDIO.</div>
          <div className="flex gap-12 text-[10px] uppercase tracking-widest opacity-40">
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">Contact</a>
          </div>
          <div className="text-[10px] opacity-20 uppercase tracking-widest">
            © 2026 ROOTS STUDIO.
          </div>
        </div>
      </footer>
    </div>
  );
}
