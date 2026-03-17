import React from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'motion/react';
import { Heart, Star, Camera, Users, Instagram } from 'lucide-react';

import { MessageCircle } from 'lucide-react';

const LineIcon = ({ className }: { className?: string }) => (
  <MessageCircle className={className} />
);

const heroImages = [
  // Wedding couple — romantic portrait
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2560&auto=format&fit=crop",
  // Business partners — two founders at desk
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2560&auto=format&fit=crop",
  // Wedding couple — outdoor ceremony
  "https://images.unsplash.com/photo-1511285560929-80b456503681?q=80&w=2560&auto=format&fit=crop",
  // Business partners — co-founders discussing
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2560&auto=format&fit=crop",
  // Couple — intimate moment
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2560&auto=format&fit=crop",
];

export default function PatternJ() {
  const logoColor = "#5D4037";
  const [currentPage, setCurrentPage] = React.useState<'home' | 'gallery' | 'plan'>('home');
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const [heroIdx, setHeroIdx] = React.useState(0);
  const [isWhiteout, setIsWhiteout] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsWhiteout(true);
      setTimeout(() => {
        setHeroIdx(prev => (prev + 1) % heroImages.length);
      }, 700);
      setTimeout(() => {
        setIsWhiteout(false);
      }, 1100);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Concept' },
    { id: 'plan', label: 'Plan' },
    { id: 'gallery', label: 'Gallery' },
  ] as const;

  const renderContent = () => {
    switch (currentPage) {
      case 'gallery':
        return (
          <section className="py-20 md:py-40 px-6 md:px-20 min-h-screen">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mb-16 md:mb-20"
              >
                <h2 className="text-4xl md:text-7xl font-light italic mb-4">Gallery.</h2>
                <p className="text-sm md:text-lg opacity-60 tracking-widest uppercase">Captured Moments of Life</p>
              </motion.div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.94 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.7, delay: ((i - 1) % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.03, zIndex: 10 }}
                    className={`relative overflow-hidden rounded-2xl bg-stone-200 ${i === 4 ? 'col-span-2 md:col-span-1' : ''}`}
                  >
                    <img
                      src={`https://picsum.photos/seed/gallery-${i}/800/1200`}
                      className="w-full h-full object-cover aspect-[3/4]"
                      alt={`Gallery ${i}`}
                      referrerPolicy="no-referrer"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-[#4E342E]/20 transition-all"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      case 'plan':
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-[#F5F2ED] text-[#4E342E]"
          >
            {/* Page Header */}
            <div className="pt-36 pb-14 px-6 md:px-20 border-b border-[#4E342E]/10">
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-px bg-[#4E342E]/30" />
                    <span className="text-[10px] uppercase tracking-[0.4em] opacity-40">撮影プラン一覧</span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-light italic leading-none mb-5" style={{ color: "#5D4037" }}>Plan.</h1>
                  <p className="text-sm md:text-base font-light opacity-60 leading-loose max-w-md">
                    人生の節目に合わせて選べる、<br className="hidden md:block" />Roots Studioだけの<br className="md:hidden" />オリジナルプランをご用意しています。
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {[
                    { label: '基本料金', target: 'base-pricing' },
                    { label: '季節限定プラン', target: 'seasonal-plan' },
                  ].map((item) => (
                    <button
                      key={item.target}
                      onClick={() => {
                        const el = document.getElementById(item.target);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-6 py-3 rounded-full border border-[#4E342E]/20 text-xs tracking-[0.15em] font-medium hover:bg-[#4E342E] hover:text-white hover:border-[#4E342E] transition-all duration-300"
                      style={{ color: "#4E342E" }}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Category Overview — "こんな撮影ができます" */}
            <div className="px-6 md:px-20 pb-16 md:pb-24">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <p className="text-xs uppercase tracking-[0.4em] opacity-40 mb-3">撮影カテゴリー</p>
                  <h2 className="text-2xl md:text-3xl font-light" style={{ color: "#5D4037" }}>こんな撮影ができます</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {[
                    { title: "Wedding", sub: "ウェディング", desc: "誓いの瞬間を、二人だけの形に。フォトウェディングから入籍フォトまで、4つの特別なプランをご用意。", target: "wedding-collection", img: "w1" },
                    { title: "Family", sub: "ファミリー", desc: "家族の絆を、世代を超えて残す。ペット撮影から定点観測、グリーフケアまで7つのプラン。", target: "family-collection", img: "f2" },
                    { title: "My Roots", sub: "マイルーツ", desc: "自分らしさを探究する、個のための撮影。起業・ポートレート・展覧会など5つのプラン。", target: "my-roots-collection", img: "m3" },
                  ].map((cat) => (
                    <motion.div
                      key={cat.target}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.7, delay: ["wedding-collection","family-collection","my-roots-collection"].indexOf(cat.target) * 0.15 }}
                      whileHover={{ y: -6 }}
                      onClick={() => {
                        const el = document.getElementById(cat.target);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="group cursor-pointer bg-white rounded-[2rem] overflow-hidden border border-[#4E342E]/5 hover:shadow-xl transition-all duration-500"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={`https://picsum.photos/seed/${cat.img}-cat/800/600`}
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                          alt={cat.title}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-8">
                        <p className="text-xs tracking-[0.2em] opacity-40 mb-1">{cat.sub}</p>
                        <h3 className="text-2xl font-bold mb-3" style={{ color: "#5D4037" }}>{cat.title}</h3>
                        <p className="text-sm opacity-60 leading-relaxed mb-5">{cat.desc}</p>
                        <span className="text-xs uppercase tracking-widest font-bold flex items-center gap-2 group-hover:gap-4 transition-all opacity-50 group-hover:opacity-100" style={{ color: "#4E342E" }}>
                          詳しく見る <span className="w-6 h-px bg-current inline-block" />
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Wedding Collection */}
            <div id="wedding-collection" className="scroll-mt-24 px-6 md:px-20 pb-20 md:pb-32">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="flex items-end gap-6 mb-12 pb-6 border-b border-[#4E342E]/10"
                >
                  <span className="text-[10px] uppercase tracking-[0.4em] opacity-30 mb-1">01</span>
                  <h2 className="text-3xl md:text-4xl italic" style={{ color: "#5D4037" }}>Wedding</h2>
                  <p className="text-sm opacity-40 mb-1 hidden md:block">誓いの瞬間を、二人だけの形に</p>
                </motion.div>

                {/* Featured first card */}
                {(() => {
                  const item = { title: "手紙と残すフォトウェディング", desc: "撮影の最後に、お互いへ、または家族へ「手紙」を書く時間を設けるプラン。写真は「誓いのシーン」と「手紙を書いているシーン」、そして「手書きの手紙そのもの」をデータ化して納品します。手紙は特製のボックスに入れ、1年後（または数年後）の記念日までスタジオで保管、または封印して持ち帰っていただきます。", img: "w1", tag: "Story" };
                  return (
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="group flex flex-col md:flex-row rounded-[2rem] overflow-hidden bg-white border border-[#4E342E]/5 shadow-sm hover:shadow-2xl transition-all duration-700 mb-6 cursor-pointer"
                    >
                      <div className="md:w-[55%] aspect-[4/3] md:aspect-auto overflow-hidden">
                        <img src={`https://picsum.photos/seed/wedding-${item.img}/1200/900`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt={item.title} referrerPolicy="no-referrer" />
                      </div>
                      <div className="md:w-[45%] p-10 md:p-14 flex flex-col justify-center">
                        <span className="text-[9px] uppercase tracking-[0.3em] opacity-30 px-3 py-1 border border-[#4E342E]/10 rounded-full w-fit mb-6">{item.tag}</span>
                        <h3 className="text-2xl md:text-3xl font-bold mb-5 leading-tight" style={{ color: "#5D4037" }}>{item.title}</h3>
                        <p className="text-base opacity-65 leading-relaxed mb-8">{item.desc}</p>
                        <button onClick={() => window.open('https://lin.ee/oOwyg7y', '_blank', 'noopener,noreferrer')} className="text-[10px] uppercase tracking-[0.3em] font-bold flex items-center gap-3 group-hover:gap-5 transition-all" style={{ color: "#4E342E" }}>
                          <span>お問い合わせ</span><div className="w-10 h-px bg-current opacity-30" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })()}

                {/* Remaining 3 cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {[
                    { title: "2度目のプロポーズ", desc: "「実はちゃんとプロポーズしていない」「結婚式で誓いの言葉を言えなかった」というカップルのために、スタジオを完全貸切にして、二人きりで手紙を読み合う時間を作ります。カメラマンは遠くから望遠レンズで、お二人の邪魔をしないようにその空気を盗み撮りします。", img: "w2", tag: "Emotion" },
                    { title: "写真だけの小さな結婚式", desc: "「ナシ婚」層や、事情があって式を挙げなかったカップル向け。スタジオ内で「誓いの言葉」を読み上げ、指輪交換を行う「二人だけの挙式」を行い、その様子をドキュメンタリータッチで撮影します。", img: "w3", tag: "Ceremony" },
                    { title: "入籍フォト", desc: "婚姻届を提出するその日、その瞬間。新しい家族としての第一歩を、スタジオの柔らかな光の中で記録します。飾らない、ありのままの幸せをカタチに。", img: "w4", tag: "Daily" },
                  ].map((item, i) => (
                    <motion.div key={i} whileHover={{ y: -6 }} className="group bg-white rounded-[1.5rem] overflow-hidden border border-[#4E342E]/5 hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img src={`https://picsum.photos/seed/wedding-${item.img}/800/600`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt={item.title} referrerPolicy="no-referrer" />
                      </div>
                      <div className="p-7 flex flex-col flex-grow">
                        <span className="text-[8px] uppercase tracking-[0.3em] opacity-30 px-2.5 py-1 border border-[#4E342E]/10 rounded-full w-fit mb-4">{item.tag}</span>
                        <h4 className="text-lg font-bold mb-3 leading-tight" style={{ color: "#5D4037" }}>{item.title}</h4>
                        <p className="text-sm opacity-65 leading-relaxed mb-5 line-clamp-4">{item.desc}</p>
                        <button onClick={() => window.open('https://lin.ee/oOwyg7y', '_blank', 'noopener,noreferrer')} className="mt-auto text-[9px] uppercase tracking-widest font-bold flex items-center gap-2 group-hover:gap-4 transition-all opacity-60 hover:opacity-100" style={{ color: "#4E342E" }}>
                          <span>詳細・予約</span><div className="w-6 h-px bg-current" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Family Collection */}
            <div id="family-collection" className="scroll-mt-24 px-6 md:px-20 py-16 md:py-24 bg-white">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="flex items-end gap-6 mb-12 pb-6 border-b border-[#4E342E]/10"
                >
                  <span className="text-[10px] uppercase tracking-[0.4em] opacity-30 mb-1">02</span>
                  <h2 className="text-3xl md:text-4xl italic" style={{ color: "#5D4037" }}>Family</h2>
                  <p className="text-sm opacity-40 mb-1 hidden md:block">家族の絆を、世代を超えて残す</p>
                </motion.div>

                {/* Featured first card */}
                {(() => {
                  const item = { title: "ペット＆ファミリー貸切撮影", desc: "完全貸切のスタジオを活かした、ペットとのストレスフリーな撮影会。他の顧客と会わないため、大型犬や猫も安心して撮影できます。ペットも「家族のRoots」として捉え、肉球スタンプや、飼い主との自然な触れ合いを撮影します。", img: "f1", tag: "Pet" };
                  return (
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="group flex flex-col md:flex-row-reverse rounded-[2rem] overflow-hidden bg-[#F5F2ED] border border-[#4E342E]/5 shadow-sm hover:shadow-2xl transition-all duration-700 mb-6 cursor-pointer"
                    >
                      <div className="md:w-[55%] aspect-[4/3] md:aspect-auto overflow-hidden">
                        <img src={`https://picsum.photos/seed/family-${item.img}/1200/900`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt={item.title} referrerPolicy="no-referrer" />
                      </div>
                      <div className="md:w-[45%] p-10 md:p-14 flex flex-col justify-center">
                        <span className="text-[9px] uppercase tracking-[0.3em] opacity-30 px-3 py-1 border border-[#4E342E]/10 rounded-full w-fit mb-6">{item.tag}</span>
                        <h3 className="text-2xl md:text-3xl font-bold mb-5 leading-tight" style={{ color: "#5D4037" }}>{item.title}</h3>
                        <p className="text-base opacity-65 leading-relaxed mb-8">{item.desc}</p>
                        <button onClick={() => window.open('https://lin.ee/oOwyg7y', '_blank', 'noopener,noreferrer')} className="text-[10px] uppercase tracking-[0.3em] font-bold flex items-center gap-3 group-hover:gap-5 transition-all" style={{ color: "#4E342E" }}>
                          <span>お問い合わせ</span><div className="w-10 h-px bg-current opacity-30" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })()}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {[
                    { title: "毎年帰る「定点観測」", desc: "結婚記念日、子供の誕生日など、毎年同じ時期に、同じ白い背景で、同じ構図で撮影するシンプルなプラン。継続することで、家族の成長が鮮明に浮かび上がります。", img: "f2", tag: "History" },
                    { title: "プロジェクター投影撮影", desc: "スタジオの白い壁に、幼少期の写真や亡くなった祖父母の写真をプロジェクターで投影し、その映像の中で現在の二人が撮影するプランです。時空を超えた家族の共演を。", img: "f3", tag: "Projector" },
                    { title: "親子三代「同じ構図」", desc: "親御さんの結婚当時の写真を持ってきてもらい、ポーズ・立ち位置・光の当たり方まで完全に再現する「オマージュ撮影」。世代を超えて受け継がれる愛を一枚の写真に。", img: "f4", tag: "Heritage" },
                    { title: "声を飾るフォトフレーム", desc: "撮影時に「10年後の相手へのメッセージ」を録音。納品される写真はQRコード付きのアートフレームで、スマホをかざすとその時の「声」が再生されます。", img: "f5", tag: "Voice" },
                    { title: "タイムカプセル開封撮影", desc: "幼少期にRoots Studioで撮影した子供が成人した際に、当時親御さんが書いた手紙を見ながら撮影するプラン。過去と未来を繋ぐ儀式です。", img: "f6", tag: "Future" },
                    { title: "届かない手紙（グリーフケア）", desc: "亡くなったご家族や会えなくなった大切な人に向けた手紙を書き、思い出の品と共に撮影するプラン。悲しみを乗り越え、感謝を区切りとして残す撮影です。", img: "f7", tag: "Grief Care" },
                  ].map((item, i) => (
                    <motion.div key={i} whileHover={{ y: -6 }} className="group bg-white rounded-[1.5rem] overflow-hidden border border-[#4E342E]/5 hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col">
                      <div className="aspect-[4/3] overflow-hidden">
                        <img src={`https://picsum.photos/seed/family-${item.img}/800/600`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt={item.title} referrerPolicy="no-referrer" />
                      </div>
                      <div className="p-7 flex flex-col flex-grow">
                        <span className="text-[8px] uppercase tracking-[0.3em] opacity-30 px-2.5 py-1 border border-[#4E342E]/10 rounded-full w-fit mb-4">{item.tag}</span>
                        <h4 className="text-lg font-bold mb-3 leading-tight" style={{ color: "#5D4037" }}>{item.title}</h4>
                        <p className="text-sm opacity-65 leading-relaxed mb-5 line-clamp-4">{item.desc}</p>
                        <button onClick={() => window.open('https://lin.ee/oOwyg7y', '_blank', 'noopener,noreferrer')} className="mt-auto text-[9px] uppercase tracking-widest font-bold flex items-center gap-2 group-hover:gap-4 transition-all opacity-60 hover:opacity-100" style={{ color: "#4E342E" }}>
                          <span>詳細・予約</span><div className="w-6 h-px bg-current" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* My Roots Collection */}
            <div id="my-roots-collection" className="scroll-mt-24 px-6 md:px-20 py-16 md:py-24">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="flex items-end gap-6 mb-12 pb-6 border-b border-[#4E342E]/10"
                >
                  <span className="text-[10px] uppercase tracking-[0.4em] opacity-30 mb-1">03</span>
                  <h2 className="text-3xl md:text-4xl italic" style={{ color: "#5D4037" }}>My Roots</h2>
                  <p className="text-sm opacity-40 mb-1 hidden md:block">自分らしさを探究する、個のための撮影</p>
                </motion.div>

                {/* Featured first card */}
                {(() => {
                  const item = { title: "起業・独立の「0日目」", desc: "会社設立、お店のオープン、フリーランス転向など、ビジネスの「出発点」を祝うプラン。あえて「まだ何もない状態」や「不安と希望が入り混じった表情」を撮影し、初心（Roots）として残します。ロゴ入りの名刺を持ったり、商売道具と撮ったりします。", img: "m1", tag: "Start-up" };
                  return (
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="group flex flex-col md:flex-row rounded-[2rem] overflow-hidden bg-white border border-[#4E342E]/5 shadow-sm hover:shadow-2xl transition-all duration-700 mb-6 cursor-pointer"
                    >
                      <div className="md:w-[55%] aspect-[4/3] md:aspect-auto overflow-hidden">
                        <img src={`https://picsum.photos/seed/myroots-${item.img}/1200/900`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt={item.title} referrerPolicy="no-referrer" />
                      </div>
                      <div className="md:w-[45%] p-10 md:p-14 flex flex-col justify-center">
                        <span className="text-[9px] uppercase tracking-[0.3em] opacity-30 px-3 py-1 border border-[#4E342E]/10 rounded-full w-fit mb-6">{item.tag}</span>
                        <h3 className="text-2xl md:text-3xl font-bold mb-5 leading-tight" style={{ color: "#5D4037" }}>{item.title}</h3>
                        <p className="text-base opacity-65 leading-relaxed mb-8">{item.desc}</p>
                        <button onClick={() => window.open('https://lin.ee/oOwyg7y', '_blank', 'noopener,noreferrer')} className="text-[10px] uppercase tracking-[0.3em] font-bold flex items-center gap-3 group-hover:gap-5 transition-all" style={{ color: "#4E342E" }}>
                          <span>お問い合わせ</span><div className="w-10 h-px bg-current opacity-30" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })()}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { title: "起業パートナーとの「結成式」", desc: "共同創業者やビジネスパートナーと撮るプラン。会社のロゴを持って創業の決意を宣言し、握手や背中合わせの写真を撮ります。共に歩む決意を、一枚の肖像に。", img: "m2", tag: "Partnership" },
                    { title: "「私」を表現するポートレート", desc: "起業家のプロフィール写真や、独身の方のソロウェディング、あるいは「今の自分」を残したい方のためのプラン。ファッション誌のようなクオリティで「個」の魅力を引き出します。", img: "m3", tag: "Portrait" },
                    { title: "あなただけの展覧会", desc: "趣味の道具・集めている本・楽器・思い出の服をスタジオ内にギャラリーのように配置し、まるで雑誌の特集ページや博物館の展示のような一枚を作ります。", img: "m4", tag: "Exhibition" },
                    { title: "傷跡という勲章", desc: "手術の痕、帝王切開の傷、あるいは職人の手のシワなど、身体に刻まれた「生きた証（Roots）」にクローズアップする撮影。コンプレックスを美しいアートとして表現します。", img: "m5", tag: "Art" },
                  ].map((item, i) => (
                    <motion.div key={i} whileHover={{ y: -6 }} className="group bg-white rounded-[1.5rem] overflow-hidden border border-[#4E342E]/5 hover:shadow-xl transition-all duration-500 cursor-pointer flex flex-col">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img src={`https://picsum.photos/seed/myroots-${item.img}/1000/600`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt={item.title} referrerPolicy="no-referrer" />
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        <span className="text-[8px] uppercase tracking-[0.3em] opacity-30 px-2.5 py-1 border border-[#4E342E]/10 rounded-full w-fit mb-4">{item.tag}</span>
                        <h4 className="text-xl font-bold mb-3 leading-tight" style={{ color: "#5D4037" }}>{item.title}</h4>
                        <p className="text-base opacity-65 leading-relaxed mb-6">{item.desc}</p>
                        <button onClick={() => window.open('https://lin.ee/oOwyg7y', '_blank', 'noopener,noreferrer')} className="mt-auto text-[9px] uppercase tracking-widest font-bold flex items-center gap-2 group-hover:gap-4 transition-all opacity-60 hover:opacity-100" style={{ color: "#4E342E" }}>
                          <span>詳細・予約</span><div className="w-6 h-px bg-current" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Base Pricing — Dark Band */}
            <div id="base-pricing" className="scroll-mt-24 px-6 md:px-20 py-16 md:py-24">
              <div className="max-w-6xl mx-auto">
                <div className="rounded-[2.5rem] overflow-hidden bg-[#4E342E] text-[#F5F2ED] py-14 md:py-20 px-8 md:px-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] opacity-40 mb-4">基本料金（全プラン共通）</p>
                      <div className="text-5xl md:text-6xl font-light mb-4 tracking-tight">39,800<span className="text-2xl ml-1 opacity-70">円</span></div>
                      <p className="text-sm opacity-60 leading-relaxed mb-8">すべての撮影プランに<br className="md:hidden" />この基本料金が含まれます。<br />ご希望に応じてオプションを<br className="md:hidden" />追加いただけます。</p>
                      <button
                        onClick={() => window.open('https://lin.ee/oOwyg7y', '_blank', 'noopener,noreferrer')}
                        className="px-8 py-4 rounded-full bg-[#F5F2ED] text-[#4E342E] hover:bg-white transition-all text-sm font-bold tracking-widest hover:scale-105 active:scale-95"
                      >
                        お問い合わせ・ご予約
                      </button>
                    </div>
                    <div className="space-y-4">
                      {[
                        "撮影カット数 50カット",
                        "全データダウンロード可能",
                        "スタジオ完全貸切",
                        "専属フォトプランナー",
                      ].map((f) => (
                        <div key={f} className="flex items-center gap-4 border-b border-white/10 pb-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#F5F2ED]/50 shrink-0" />
                          <p className="text-base opacity-80">{f}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Seasonal Limited — SAKURA */}
            <div id="seasonal-plan" className="scroll-mt-24 px-6 md:px-20 py-16 md:py-24">
              <div className="max-w-6xl mx-auto">
                <div className="relative rounded-[2.5rem] overflow-hidden bg-[#FFF5F7] border border-[#FFC1CC]/30">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC1CC]/15 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFC1CC]/10 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none" />
                  <div className="relative z-10 p-10 md:p-16">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-[#FFC1CC]/30 text-[#D4818F] text-[9px] uppercase tracking-[0.3em] font-bold mb-4">期間限定</span>
                        <h3 className="text-2xl md:text-4xl italic mb-2" style={{ color: "#5D4037" }}>SAKURA Bloom Session 2026</h3>
                        <p className="text-sm opacity-60">記憶に残る、一番早いお花見を</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {[
                        { title: "ライトプラン", subtitle: "まずはお試しに", price: "16,500", features: ["厳選データ3枚"] },
                        { title: "スタンダードプラン", subtitle: "一番人気", price: "19,800", features: ["厳選データ15枚"], featured: true },
                        { title: "プレミアムプラン", subtitle: "ギフトにも最適", price: "39,800", features: ["データ30枚", "フォトフレーム付"] },
                      ].map((plan, i) => (
                        <div key={i} className={`rounded-2xl p-8 flex flex-col ${plan.featured ? 'bg-[#D4818F] text-white' : 'bg-white/60 backdrop-blur-sm'}`}>
                          <p className={`text-[9px] uppercase tracking-[0.3em] mb-2 ${plan.featured ? 'opacity-70' : 'opacity-40'}`}>{plan.subtitle}</p>
                          <h4 className="text-lg font-bold mb-4 leading-tight">{plan.title}</h4>
                          <div className="text-3xl font-light mb-6">{plan.price}<span className="text-base ml-1 opacity-70">円</span></div>
                          <ul className="space-y-2 mb-8 flex-grow">
                            {plan.features.map((f, j) => (
                              <li key={j} className={`text-sm flex items-center gap-2 ${plan.featured ? 'opacity-90' : 'opacity-60'}`}>
                                <div className={`w-1 h-1 rounded-full ${plan.featured ? 'bg-white' : 'bg-[#D4818F]'}`} />
                                {f}
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={() => window.open('https://lin.ee/oOwyg7y', '_blank', 'noopener,noreferrer')}
                            className={`w-full py-3 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all ${plan.featured ? 'bg-white text-[#D4818F] hover:bg-white/90' : 'border border-[#FFC1CC] text-[#D4818F] hover:bg-[#FFC1CC] hover:text-white'}`}
                          >
                            お問い合わせ
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Options + CTA */}
            <div className="px-6 md:px-20 py-16 md:py-24">
              <div className="max-w-4xl mx-auto rounded-[2.5rem] overflow-hidden bg-[#4E342E] text-[#F5F2ED] py-16 md:py-24 px-8 md:px-16">
                <div className="mb-12">
                  <p className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-4">オプション</p>
                  <h3 className="text-2xl md:text-3xl italic mb-10 opacity-90">セッションをカスタマイズ</h3>
                  <div className="space-y-0 divide-y divide-white/10">
                    <div className="flex justify-between items-center py-5">
                      <span className="text-base opacity-80">ヘアセット＆メイク</span>
                      <span className="text-base opacity-50">19,800円</span>
                    </div>
                    <div className="flex justify-between items-center py-5">
                      <span className="text-base opacity-80">衣装</span>
                      <span className="text-base opacity-50">19,800円〜</span>
                    </div>
                  </div>
                </div>
                <div className="text-center pt-10 border-t border-white/10">
                  <button
                    onClick={() => window.open('https://lin.ee/oOwyg7y', '_blank', 'noopener,noreferrer')}
                    className="px-14 py-5 rounded-full bg-[#F5F2ED] text-[#4E342E] hover:bg-white transition-all uppercase tracking-[0.3em] text-sm font-bold shadow-2xl hover:scale-105 active:scale-95"
                  >
                    お問い合わせ・ご予約
                  </button>
                  <p className="mt-5 text-[10px] uppercase tracking-widest opacity-30">今すぐ相談する</p>
                </div>
              </div>
            </div>

          </motion.div>
        );
      default:
        return (
          <>
            {/* Hero: Centered Logo & Immersive Image */}
            <section className="h-screen relative flex flex-col items-center justify-center overflow-hidden">
              <motion.div 
                style={{ y }}
                className="absolute inset-0 z-0"
              >
                <img
                  src={heroImages[heroIdx]}
                  className="w-full h-full object-cover scale-[1.05]"
                  alt="Hero"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* White-out transition overlay */}
              <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                  backgroundColor: 'white',
                  opacity: isWhiteout ? 1 : 0,
                  transition: isWhiteout ? 'opacity 700ms ease-in' : 'opacity 900ms ease-out',
                }}
              />

              {/* Premium Gradual Lighting Overlay for Readability */}
              <div className="absolute inset-0 z-[2] bg-white/30" />
              <div
                className="absolute inset-0 z-[3] mix-blend-screen pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(249,247,245,0.95) 0%, rgba(249,247,245,0.4) 45%, transparent 80%)'
                }} 
              />
              
              <div className="relative z-[10] text-center flex flex-col items-center justify-center w-full mt-10">
                <motion.div
                  initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center"
                >
                  <h1
                    className="text-[13vw] sm:text-[9vw] md:text-[5.5vw] lg:text-[6vw] font-serif-playfair leading-[0.9] tracking-tighter mb-8 text-center flex flex-col items-center"
                    style={{ 
                      color: logoColor,
                      textShadow: '0 10px 40px rgba(255,255,255,0.8), 0 0 16px rgba(255,255,255,0.6)'
                    }}
                  >
                    Roots
                    <span className="italic font-light opacity-90">Studio</span>
                  </h1>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p 
                    className="text-xs md:text-xl font-medium tracking-[0.2em] md:tracking-[0.6em] uppercase flex items-center gap-2 md:gap-4"
                    style={{ 
                      color: logoColor,
                      textShadow: '0 4px 20px rgba(255,255,255,0.9)'
                    }}
                  >
                    <span className="w-6 md:w-12 h-px bg-current opacity-40" />
                    人生の節目に、何度でも。
                    <span className="w-6 md:w-12 h-px bg-current opacity-40" />
                  </p>
                </motion.div>
              </div>
            </section>

            {/* Story Section: Earthy Tones */}
            <section className="py-16 md:py-28 px-6 md:px-20 bg-[#F5F2ED] overflow-hidden">
              <div className="max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8 }}
                  className="flex items-center gap-4 md:gap-6 mb-8 md:mb-12"
                >
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="origin-left w-10 md:w-14 h-px bg-[#4E342E]/30"
                  />
                  <span className="text-[10px] uppercase tracking-widest opacity-40">The Narrative</span>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  className="text-2xl md:text-4xl lg:text-5xl font-light italic leading-snug mb-10 md:mb-14"
                >
                  あなたのROOTSを、<br className="md:hidden" />あなたの色で、<br className="hidden md:block" />ここから残していきませんか。
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                  {[
                    "お誕生日、七五三、成人式、卒業、結婚、そして家族のアニバーサリー。人生には沢山の「節目」＝ROOTSがあります。「ROOTS STUDIO」は、あなたのROOTSを形に残す場所。",
                    "丁寧な対話からあなたのROOTSを汲み取り、「らしさ」を活かした撮影を貸切空間で。ここは、ただ写真を撮るだけの場所ではありません。手紙を書いたり、語り合ったり。"
                  ].map((text, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.8, delay: i * 0.18, ease: [0.16, 1, 0.3, 1] }}
                      className="text-base md:text-lg font-light leading-loose opacity-70"
                    >
                      {text}
                    </motion.p>
                  ))}
                </div>
              </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-16 md:py-28 px-6 md:px-20 border-y border-[#4E342E]/10 overflow-hidden">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-6 md:mb-8">01 / THE PHILOSOPHY</div>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-light italic leading-snug mb-8">
                    想いと時間を、<br className="hidden md:block" />カタチにする。
                  </h2>
                  <p className="text-base md:text-lg font-light leading-loose opacity-70">
                    ここは、ただ写真を撮るだけの場所ではありません。手紙を書いたり、語り合ったり。
                    「写真」というカタチだけではなく、そこで過ごした「時間」と「想い」も残します。
                  </p>
                </motion.div>
                <div className="space-y-8 md:space-y-12">
                  {[
                    { title: "完全貸切の空間", desc: "完全貸切のプライベート空間で、リラックスした撮影を。" },
                    { title: "対話を大切に", desc: "撮影前の丁寧な対話を通じて、あなたの「ルーツ」を深く理解します。" },
                    { title: "一生のパートナー", desc: "一度きりではなく、人生の節目ごとに帰ってきたくなる場所へ。" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                      className="border-l-2 border-[#4E342E]/20 pl-6"
                    >
                      <h4 className="text-lg md:text-xl font-bold mb-2" style={{ color: "#4E342E" }}>{item.title}</h4>
                      <p className="text-sm md:text-base opacity-60 leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Plan Preview Section */}
            <section className="py-16 md:py-28 px-6 md:px-20 bg-[#F5F2ED] overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20"
              >
                <div>
                  <h3 className="text-3xl md:text-5xl italic mb-3" style={{ color: logoColor }}>撮影プラン</h3>
                  <p className="text-[10px] tracking-widest opacity-40">誕生から還暦まで、人生のすべてに。</p>
                </div>
                <button
                  onClick={() => setCurrentPage('plan')}
                  className="text-xs md:text-sm opacity-60 hover:opacity-100 transition-opacity border-b border-current pb-1 mt-6 md:mt-0"
                >
                  プランをすべて見る
                </button>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
                {[
                  { title: "Wedding", src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=900&auto=format&fit=crop", desc: "誓いの瞬間" },
                  { title: "Family", src: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?q=80&w=900&auto=format&fit=crop", desc: "家族の絆" },
                  { title: "My Roots", src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=900&auto=format&fit=crop", desc: "自分らしさの探究" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.9, delay: i * 0.18, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -20 }}
                    onClick={() => setCurrentPage('plan')}
                    className="group cursor-pointer flex md:block items-center gap-4 md:gap-0"
                  >
                    <div className="w-2/3 md:w-full aspect-[3/2] md:aspect-[2/3] overflow-hidden rounded-2xl md:mb-6 border border-[#4E342E]/5 shadow-sm shrink-0">
                      <img
                        src={item.src}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                        alt={item.title}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="w-1/3 md:w-full md:text-center">
                      <h4 className="text-lg md:text-xl italic mb-1 group-hover:underline underline-offset-4 decoration-[#5D4037]/30 transition-all" style={{ color: logoColor }}>{item.title}</h4>
                      <p className="text-[9px] md:text-[10px] tracking-widest opacity-40">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F7F5] text-[#4E342E] font-serif-cormorant selection:bg-[#4E342E] selection:text-white">


      <main>
        {/* Centered Floating Navigation */}
        <nav className="fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-1 md:gap-2 p-1.5 md:p-2 bg-[#F9F7F5]/85 backdrop-blur-2xl border border-white/40 rounded-full shadow-[0_20px_40px_rgba(78,52,46,0.08),0_1px_3px_rgba(78,52,46,0.05)] text-[11px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.2em] font-medium transition-all w-[calc(100vw-24px)] md:w-max">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setCurrentPage(link.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex-1 md:flex-none px-2 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-500 whitespace-nowrap text-center ${
                currentPage === link.id
                  ? 'bg-white font-bold shadow-sm'
                  : 'hover:bg-white/50 opacity-60 hover:opacity-100'
              }`}
              style={{ color: logoColor }}
            >
              {link.label}
            </button>
          ))}
          <div className="w-px h-6 bg-[#4E342E]/10 mx-1 md:mx-3 shrink-0" />
          <a
            href="https://lin.ee/oOwyg7y"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-1.5 flex-1 md:flex-none px-2 md:px-8 py-2.5 md:py-3 rounded-full text-white transition-all duration-500 whitespace-nowrap shadow-md hover:shadow-xl hover:-translate-y-0.5 shrink-0"
            style={{ backgroundColor: logoColor }}
          >
            <LineIcon className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="text-[11px] md:text-xs tracking-[0.1em] md:tracking-[0.2em] font-bold font-serif-jp">LINEで相談</span>
          </a>
        </nav>

        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2px] z-[200] origin-left"
          style={{ scaleX, backgroundColor: '#5D4037' }}
        />

        {/* Dynamic Content */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer */}
        <footer className="border-t border-[#4E342E]/10 py-14 px-6 md:px-32">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

            {/* Left: Logo + Address + Map */}
            <div className="flex flex-col gap-5 md:col-span-1 items-center md:items-start text-center md:text-left">
              <div className="text-3xl font-serif-playfair" style={{ color: logoColor }}>Roots Studio</div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2">Address</p>
                <p className="text-sm leading-relaxed opacity-60">
                  〒060-0007　北海道札幌市中央区<br />
                  北７条西１９丁目１−２　momijiビル 2F
                </p>
              </div>
              <div className="w-64 h-36 rounded-xl overflow-hidden border border-[#4E342E]/10">
                <iframe
                  title="Roots Studio Map"
                  src="https://www.google.com/maps?q=札幌市中央区北7条西19丁目1−2+momijiビル2F&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <a
                href="https://www.google.com/maps?q=札幌市中央区北7条西19丁目1−2+momijiビル2F"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[9px] uppercase tracking-widest opacity-40 hover:opacity-80 transition-opacity"
                style={{ color: logoColor }}
              >
                <span>Google マップで開く</span>
                <div className="w-4 h-px bg-current" />
              </a>
            </div>

            {/* Center: Links list */}
            <div className="flex flex-col gap-5 md:col-span-1 items-center">
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-40">Links</p>
              <ul className="space-y-6">
                <li>
                  <a href="https://www.instagram.com/roots_studio_sapporo/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity text-xl font-light" style={{ color: logoColor }}>
                    <Instagram className="w-6 h-6 flex-shrink-0" />
                    <span>Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="https://lin.ee/oOwyg7y" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 opacity-50 hover:opacity-100 transition-opacity text-xl font-light" style={{ color: logoColor }}>
                    <LineIcon className="w-6 h-6 flex-shrink-0" />
                    <span>LINE</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Right: empty spacer */}
            <div className="hidden md:block md:col-span-1" />

          </div>

          {/* Bottom copyright */}
          <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-[#4E342E]/10 text-center md:text-left">
            <p className="text-[10px] opacity-20 uppercase tracking-widest">© 2026 Roots Studio. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
