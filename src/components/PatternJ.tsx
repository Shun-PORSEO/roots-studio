import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Heart, Star, Camera, Users, Calendar, Layout, Maximize, Grid, Instagram } from 'lucide-react';

const LineIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 10.304c0-5.232-5.383-9.488-12-9.488S0 5.072 0 10.304c0 4.689 4.272 8.61 10.044 9.334.391.084.923.258 1.058.592.121.303.079.778.039 1.084l-.171 1.047c-.052.312-.252 1.222 1.085.667 1.335-.555 7.203-4.243 9.831-7.267 1.444-1.63 2.114-3.322 2.114-5.487zm-15.429.492c0 .15-.122.272-.272.272h-1.758c-.15 0-.272-.122-.272-.272V8.224c0-.15.122-.272.272-.272h.406c.15 0 .272.122.272.272v1.814h1.081c.15 0 .272.122.272.272v.486zm2.52 0c0 .15-.122.272-.272.272h-1.758c-.15 0-.272-.122-.272-.272V8.224c0-.15.122-.272.272-.272h.406c.15 0 .272.122.272.272v1.814h1.081c.15 0 .272.122.272.272v.486zm3.6 0c0 .15-.122.272-.272.272h-.406c-.15 0-.272-.122-.272-.272V8.812l-.95 1.837c-.035.068-.105.111-.182.111h-.233c-.077 0-.147-.043-.182-.111l-.95-1.837v1.984c0 .15-.122.272-.272.272h-.406c-.15 0-.272-.122-.272-.272V8.224c0-.15.122-.272.272-.272h.441c.092 0 .176.047.223.125l.896 1.486.896-1.486c.047-.078.131-.125.223-.125h.441c.15 0 .272.122.272.272v2.572zm3.333-1.814h-1.081v-.486h1.081c.15 0 .272-.122.272-.272v-.486c0-.15-.122-.272-.272-.272h-1.758c-.15 0-.272.122-.272.272v2.572c0 .15.122.272.272.272h1.758c.15 0 .272-.122.272-.272v-.486c0-.151-.122-.272-.272-.272z" />
  </svg>
);

export default function PatternJ() {
  const logoColor = "#5D4037";
  const [currentPage, setCurrentPage] = React.useState<'home' | 'gallery' | 'plan' | 'contact'>('home');
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const navLinks = [
    { id: 'home', label: 'Concept' },
    { id: 'plan', label: 'Plan' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ] as const;

  const renderContent = () => {
    switch (currentPage) {
      case 'gallery':
        return (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-20 md:py-40 px-6 md:px-20 min-h-screen"
          >
            <div className="max-w-6xl mx-auto">
              <div className="mb-20">
                <h2 className="text-4xl md:text-7xl font-light italic mb-6">Gallery.</h2>
                <p className="text-lg opacity-60 tracking-widest uppercase">Captured Moments of Life</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className={`relative overflow-hidden rounded-2xl bg-stone-200 ${i % 4 === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                  >
                    <img 
                      src={`https://picsum.photos/seed/gallery-${i}/800/1200`} 
                      className="w-full h-full object-cover aspect-[3/4] md:aspect-auto"
                      alt={`Gallery ${i}`}
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        );
      case 'plan':
        return (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-20 md:py-40 px-6 md:px-20 min-h-screen bg-[#F5F2ED]"
          >
            <div className="max-w-6xl mx-auto">
              <div className="mb-20">
                <h2 className="text-4xl md:text-7xl font-light italic mb-6">Our Plans.</h2>
                <p className="text-lg opacity-60 tracking-widest uppercase">Tailored for your Roots</p>
              </div>

              {/* Top Level Categories */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                {[
                  { title: "Wedding", desc: "4つの特別な物語", target: "wedding-collection" },
                  { title: "Family", desc: "家族の絆を刻む", target: "family-collection" },
                  { title: "My Roots", desc: "自分らしさを探究", target: "my-roots-collection" },
                ].map((plan, i) => (
                  <div 
                    key={i} 
                    onClick={() => {
                      const el = document.getElementById(plan.target);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="p-10 rounded-3xl border border-[#4E342E]/10 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                  >
                    <h3 className="text-3xl font-serif-playfair mb-2 group-hover:underline underline-offset-8 decoration-[#4E342E]/20" style={{ color: logoColor }}>{plan.title}</h3>
                    <p className="text-xs opacity-40 tracking-widest">{plan.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mb-32">
                <button 
                  onClick={() => {
                    const el = document.getElementById('seasonal-plan');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-8 md:py-12 rounded-[2.5rem] bg-[#FFF5F7] border border-[#FFC1CC] text-[#D4818F] hover:bg-[#FFC1CC] hover:text-white transition-all flex flex-col items-center justify-center group shadow-sm hover:shadow-xl"
                >
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold mb-2 opacity-60 group-hover:opacity-100">Seasonal Limited</span>
                  <span className="text-xl md:text-3xl italic font-serif-playfair">SAKURA Bloom Session 2026</span>
                </button>
              </div>

              {/* Wedding Collection - Detailed Sub-plans */}
              <div id="wedding-collection" className="mb-32 scroll-mt-32">
                <div className="flex items-center gap-6 mb-16">
                  <div className="w-16 h-px bg-[#4E342E]/30" />
                  <h3 className="text-2xl md:text-4xl italic" style={{ color: logoColor }}>Wedding Collection.</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "手紙と残すフォトウェディング",
                      desc: "撮影の最後に、お互いへ、または家族へ「手紙」を書く時間を設けるプラン。写真は「誓いのシーン」と「手紙を書いているシーン」、そして「手書きの手紙そのもの」をデータ化して納品します。手紙は特製のボックスに入れ、1年後（または数年後）の記念日までスタジオで保管、または封印して持ち帰っていただきます。",
                      img: "w1",
                      tag: "Story"
                    },
                    {
                      title: "2度目のプロポーズ",
                      desc: "「実はちゃんとプロポーズしていない」「結婚式で誓いの言葉を言えなかった」というカップルのために、スタジオを完全貸切にして、二人きりで手紙を読み合う時間を作ります。カメラマンは遠くから望遠レンズで、お二人の邪魔をしないようにその空気を盗み撮りします。",
                      img: "w2",
                      tag: "Emotion"
                    },
                    {
                      title: "写真だけの小さな結婚式",
                      desc: "「ナシ婚」層や、事情があって式を挙げなかったカップル向け。スタジオ内で「誓いの言葉」を読み上げ、指輪交換を行う「二人だけの挙式」を行い、その様子をドキュメンタリータッチで撮影します。司会者（プランナー）が入り、簡易的な進行も行います。",
                      img: "w3",
                      tag: "Ceremony"
                    },
                    {
                      title: "入籍フォト",
                      desc: "婚姻届を提出するその日、その瞬間。新しい家族としての第一歩を、スタジオの柔らかな光の中で記録します。飾らない、ありのままの幸せをカタチに。",
                      img: "w4",
                      tag: "Daily"
                    }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -10 }}
                      className="group bg-white rounded-[2rem] overflow-hidden border border-[#4E342E]/5 shadow-sm hover:shadow-xl transition-all cursor-pointer"
                    >
                      <div className="aspect-[16/9] overflow-hidden">
                        <img 
                          src={`https://picsum.photos/seed/wedding-${item.img}/1200/800`} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                          alt={item.title}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-8 md:p-10">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-[10px] uppercase tracking-[0.3em] opacity-30 px-3 py-1 border border-[#4E342E]/10 rounded-full">{item.tag}</span>
                          <Heart className="w-4 h-4 opacity-20 group-hover:opacity-100 group-hover:text-red-400 transition-all" />
                        </div>
                        <h4 className="text-2xl font-bold mb-4 leading-tight" style={{ color: logoColor }}>{item.title}</h4>
                        <p className="text-sm opacity-60 leading-relaxed mb-8 line-clamp-3 group-hover:line-clamp-none transition-all">
                          {item.desc}
                        </p>
                        <div 
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentPage('contact');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold group-hover:gap-4 transition-all"
                        >
                          <span>Read More</span>
                          <div className="w-8 h-px bg-current opacity-30" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Family Collection - Detailed Sub-plans */}
              <div id="family-collection" className="mb-32 scroll-mt-32">
                <div className="flex items-center gap-6 mb-16">
                  <div className="w-16 h-px bg-[#4E342E]/30" />
                  <h3 className="text-2xl md:text-4xl italic" style={{ color: logoColor }}>Family Collection.</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: "ペット＆ファミリー貸切撮影",
                      desc: "完全貸切のスタジオを活かした、ペットとのストレスフリーな撮影会。他の顧客と会わないため、大型犬や猫も安心して撮影できます。ペットも「家族のRoots」として捉え、肉球スタンプや、飼い主との自然な触れ合いを撮影します。",
                      img: "f1",
                      tag: "Pet"
                    },
                    {
                      title: "毎年帰る「定点観測」",
                      desc: "結婚記念日、子供の誕生日など、毎年同じ時期に、同じ白い背景で、同じ構図で撮影するシンプルなプラン。装飾を削ぎ落とし、家族の表情や背丈の変化といった「歴史」そのものを記録します。継続することで、家族の成長が鮮明に浮かび上がります。",
                      img: "f2",
                      tag: "History"
                    },
                    {
                      title: "プロジェクター投影撮影",
                      desc: "スタジオの白い壁に、お二人の「幼少期の写真」や「亡くなった祖父母の写真」、あるいは「思い出の場所の風景」をプロジェクターで投影し、その映像の中で現在の二人が撮影するプランです。時空を超えた家族の共演を。",
                      img: "f3",
                      tag: "Projector"
                    },
                    {
                      title: "親子三代「同じ構図」プロジェクト",
                      desc: "親御さんの結婚当時の写真を持ってきてもらい、ポーズ、立ち位置、光の当たり方まで完全に再現して撮影する「オマージュ撮影」。世代を超えて受け継がれる愛と形を、一枚の写真に閉じ込めます。",
                      img: "f4",
                      tag: "Heritage"
                    },
                    {
                      title: "声を飾るフォトフレーム",
                      desc: "撮影時に「10年後の相手へのメッセージ」や「今の誓い」を録音します。納品される写真は、特殊なQRコード付きのアートフレーム。スマホをかざすと、その時の「声」が再生されます。記憶は「声」と強く結びついています。",
                      img: "f5",
                      tag: "Voice"
                    },
                    {
                      title: "成人式「タイムカプセル」開封撮影",
                      desc: "幼少期にRoots Studioで撮影した子供が成人した際に、当時親御さんが書いた手紙や撮った写真を見ながら撮影するプラン。または、成人式当日に「20歳の自分」から「未来の自分」へ手紙を書く、過去と未来を繋ぐ儀式です。",
                      img: "f6",
                      tag: "Future"
                    },
                    {
                      title: "届かない手紙（グリーフケア）",
                      desc: "亡くなったご家族、会えなくなった友人、ペットなど、「もういない大切な人」に向けた手紙を書き、思い出の品と共に撮影するプラン。悲しみを乗り越えるため、感謝を区切りとして残すための、心のケアを兼ねた撮影です。",
                      img: "f7",
                      tag: "Grief Care"
                    }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -10 }}
                      className="group bg-white rounded-[2rem] overflow-hidden border border-[#4E342E]/5 shadow-sm hover:shadow-xl transition-all cursor-pointer flex flex-col"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img 
                          src={`https://picsum.photos/seed/family-${item.img}/1000/750`} 
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                          alt={item.title}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-8 flex-grow flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-[9px] uppercase tracking-[0.3em] opacity-30 px-3 py-1 border border-[#4E342E]/10 rounded-full">{item.tag}</span>
                          <Users className="w-4 h-4 opacity-20 group-hover:opacity-100 transition-all" />
                        </div>
                        <h4 className="text-xl font-bold mb-4 leading-tight" style={{ color: logoColor }}>{item.title}</h4>
                        <p className="text-xs opacity-60 leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all">
                          {item.desc}
                        </p>
                        <div 
                          onClick={(e) => {
                            e.stopPropagation();
                            setCurrentPage('contact');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="mt-auto flex items-center gap-2 text-[9px] uppercase tracking-widest font-bold group-hover:gap-4 transition-all"
                        >
                          <span>Details</span>
                          <div className="w-6 h-px bg-current opacity-30" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* My Roots Collection - Detailed Sub-plans */}
              <div id="my-roots-collection" className="mb-32 scroll-mt-32">
                <div className="flex items-center gap-6 mb-16">
                  <div className="w-16 h-px bg-[#4E342E]/30" />
                  <h3 className="text-2xl md:text-4xl italic" style={{ color: logoColor }}>My Roots Collection.</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {[
                    {
                      title: "起業・独立の「0日目」",
                      desc: "会社設立、お店のオープン、フリーランス転向など、ビジネスの「出発点（Starting Point）」を祝うプラン。あえて「まだ何もない状態」や「不安と希望が入り混じった表情」を撮影し、初心（Roots）として残します。ロゴ入りの名刺を持ったり、商売道具と撮ったりします。",
                      img: "m1",
                      tag: "Start-up"
                    },
                    {
                      title: "起業パートナーとの「結成式」",
                      desc: "夫婦ではなく、共同創業者やビジネスパートナーと撮るプラン。会社のロゴを持って、創業の決意（ビジョン）を宣言し、握手や背中合わせの写真を撮ります。共に歩む決意を、一枚の肖像に。",
                      img: "m2",
                      tag: "Partnership"
                    },
                    {
                      title: "“私”を表現するポートレート",
                      desc: "起業家のプロフィール写真や、独身の方のソロウェディング、あるいは「今の自分」を残したい方のためのプラン。美容・照明に徹底的にこだわり、ファッション誌のようなクオリティで「個」の魅力を引き出します。再出発（離婚、転職、移住）の決意表明としても。",
                      img: "m3",
                      tag: "Portrait"
                    },
                    {
                      title: "あなただけの展覧会",
                      desc: "被写体を中心にするのではなく、「ルーツとなる物（趣味の道具、集めている本、楽器、思い出の服）」をスタジオ内にギャラリーのように美しく配置し、まるで雑誌の特集ページや、博物館の展示のような一枚を作ります。",
                      img: "m4",
                      tag: "Exhibition"
                    },
                    {
                      title: "傷跡という勲章",
                      desc: "手術の痕、帝王切開の傷、あるいは職人の手のマメやシワなど、身体に刻まれた「生きた証（Roots）」にクループアップする撮影。コンプレックスを美しく力強いアートとして表現し、人生の歴史を肯定します。",
                      img: "m5",
                      tag: "Art"
                    }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -10 }}
                      className="group bg-white rounded-[2.5rem] overflow-hidden border border-[#4E342E]/5 shadow-sm hover:shadow-xl transition-all cursor-pointer"
                    >
                      <div className="flex flex-col">
                        <div className="overflow-hidden aspect-[16/10]">
                          <img 
                            src={`https://picsum.photos/seed/myroots-${item.img}/1200/800`} 
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                            alt={item.title}
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                          <div className="flex justify-between items-start mb-6">
                            <span className="text-[10px] uppercase tracking-[0.4em] opacity-30 px-4 py-1.5 border border-[#4E342E]/10 rounded-full">{item.tag}</span>
                            <Star className="w-5 h-5 opacity-20 group-hover:opacity-100 group-hover:text-amber-500 transition-all" />
                          </div>
                          <h4 className="text-2xl md:text-3xl font-bold mb-6 leading-tight" style={{ color: logoColor }}>{item.title}</h4>
                          <p className="text-sm md:text-base opacity-60 leading-relaxed mb-10">
                            {item.desc}
                          </p>
                          <div 
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentPage('contact');
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="mt-auto flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] font-bold group-hover:gap-6 transition-all"
                          >
                            <span>Explore Plan</span>
                            <div className="w-12 h-px bg-current opacity-30" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* General Plan Details */}
              <div className="bg-white rounded-[3rem] p-12 md:p-20 mb-32 border border-[#4E342E]/5">
                <div className="text-center mb-16">
                  <h3 className="text-3xl italic mb-2" style={{ color: logoColor }}>Base Inclusion.</h3>
                  <div className="text-4xl md:text-5xl font-light mb-6 opacity-60">39,800円</div>
                  <p className="text-[10px] uppercase tracking-widest opacity-40">全てのプランに含まれる基本料金</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    "撮影カット数50カット",
                    "全データダウンロード可能",
                    "スタジオ貸切料",
                    "専属フォトプランナー"
                  ].map((f, i) => (
                    <div key={i} className="text-center">
                      <div className="w-12 h-12 rounded-full bg-[#F5F2ED] flex items-center justify-center mx-auto mb-4">
                        <Camera className="w-5 h-5 opacity-40" />
                      </div>
                      <p className="text-sm font-bold opacity-70">{f}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Seasonal Plan Section */}
              <div id="seasonal-plan" className="mb-32 scroll-mt-32">
                <div className="bg-[#FFF5F7] rounded-[3rem] p-12 md:p-20 border border-[#FFC1CC]/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFC1CC]/10 rounded-full -mr-32 -mt-32 blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFC1CC]/10 rounded-full -ml-32 -mb-32 blur-3xl" />
                  
                  <div className="relative z-10">
                    <div className="text-center mb-16">
                      <div className="inline-block px-4 py-1 rounded-full bg-[#FFC1CC]/20 text-[#D4818F] text-[10px] uppercase tracking-[0.3em] font-bold mb-6">Seasonal Limited</div>
                      <h3 className="text-3xl md:text-5xl italic mb-4" style={{ color: logoColor }}>SAKURA Bloom Session 2026</h3>
                      <p className="text-lg opacity-60 tracking-widest uppercase">記憶に残る、一番早いお花見を</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[
                        { 
                          title: "ライトプラン", 
                          subtitle: "まずはお試ししたい方に！", 
                          price: "16,500円", 
                          features: ["厳選データ3枚"] 
                        },
                        { 
                          title: <>スタンダード<br />プラン</>, 
                          subtitle: <>1番人気！<br />表情豊かに残せます</>, 
                          price: "19,800円", 
                          features: ["厳選データ15枚"] 
                        },
                        { 
                          title: <>プレミアム<br />プラン</>, 
                          subtitle: <>飾れる思い出に！<br />ギフトにも最適✨</>, 
                          price: "39,800円", 
                          features: ["データ30枚", "フォトフレーム付"] 
                        }
                      ].map((plan, i) => (
                        <div key={i} className="bg-white/40 backdrop-blur-md p-10 rounded-[2rem] border border-white/50 flex flex-col items-center text-center hover:shadow-xl transition-all duration-500">
                          <h4 className="text-xl font-bold mb-4 leading-tight h-[3.5rem] flex items-center justify-center" style={{ color: logoColor }}>{plan.title}</h4>
                          <div className="text-[11px] font-bold tracking-widest opacity-80 mb-6 text-[#D4818F] leading-relaxed h-[3rem] flex items-center justify-center">
                            {plan.subtitle}
                          </div>
                          <div className="text-3xl font-light mb-8 opacity-80">{plan.price}</div>
                          <ul className="space-y-3 mb-8">
                            {plan.features.map((f, j) => (
                              <li key={j} className="text-sm opacity-70 flex items-center justify-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-[#FFC1CC]" />
                                {f}
                              </li>
                            ))}
                          </ul>
                          <button 
                            onClick={() => {
                              setCurrentPage('contact');
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="mt-auto w-full py-3 rounded-full border border-[#FFC1CC] text-[#D4818F] hover:bg-[#FFC1CC] hover:text-white transition-all text-[10px] font-bold uppercase tracking-widest"
                          >
                            お問い合わせはこちら
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Options Section */}
              <div className="max-w-2xl mx-auto border-t border-[#4E342E]/10 pt-20">
                <div className="text-center mb-12">
                  <h3 className="text-3xl italic mb-4" style={{ color: logoColor }}>Options.</h3>
                  <p className="text-[10px] uppercase tracking-widest opacity-40">Customize your session</p>
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center border-b border-[#4E342E]/5 pb-4">
                    <span className="text-lg">ヘアセット＆メイク</span>
                    <span className="text-lg opacity-60">19,800円</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#4E342E]/5 pb-4">
                    <span className="text-lg">衣装</span>
                    <span className="text-lg opacity-60">19,800円〜</span>
                  </div>
                </div>

                <div className="mt-20 text-center">
                  <button 
                    onClick={() => {
                      setCurrentPage('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-16 py-6 rounded-full bg-[#4E342E] text-white hover:bg-[#5D4037] transition-all uppercase tracking-[0.4em] text-sm font-bold shadow-2xl hover:scale-105 active:scale-95"
                  >
                    お問い合わせはこちら
                  </button>
                  <p className="mt-6 text-[10px] uppercase tracking-widest opacity-30">Book your session today</p>
                </div>
              </div>
            </div>
          </motion.section>
        );
      case 'contact':
        return (
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-20 md:py-40 px-6 md:px-20 min-h-screen"
          >
            <div className="max-w-4xl mx-auto">
              <div className="mb-20 text-center">
                <h2 className="text-4xl md:text-7xl font-light italic mb-6">Contact Us.</h2>
                <p className="text-lg opacity-60 tracking-widest uppercase">Let's start your story</p>
              </div>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest opacity-40">Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-[#4E342E]/20 py-3 focus:border-[#4E342E] outline-none transition-colors" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest opacity-40">Email</label>
                    <input type="email" className="w-full bg-transparent border-b border-[#4E342E]/20 py-3 focus:border-[#4E342E] outline-none transition-colors" placeholder="hello@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-40">Subject</label>
                  <select className="w-full bg-transparent border-b border-[#4E342E]/20 py-3 focus:border-[#4E342E] outline-none transition-colors appearance-none">
                    <option>General Inquiry</option>
                    <option>Booking Request</option>
                    <option>Plan Consultation</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest opacity-40">Message</label>
                  <textarea rows={5} className="w-full bg-transparent border-b border-[#4E342E]/20 py-3 focus:border-[#4E342E] outline-none transition-colors resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <div className="pt-10">
                  <button className="w-full md:w-auto px-12 py-5 rounded-full bg-[#4E342E] text-white hover:bg-[#5D4037] transition-all uppercase tracking-[0.3em] text-xs font-bold shadow-xl">Send Message</button>
                </div>
              </form>
            </div>
          </motion.section>
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
                  src="https://picsum.photos/seed/roots-j-hero/1920/1080" 
                  className="w-full h-full object-cover scale-[1.05]"
                  alt="Hero"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              {/* Premium Gradual Lighting Overlay for Readability */}
              <div className="absolute inset-0 z-[1] bg-black/10" />
              <div 
                className="absolute inset-0 z-[2] mix-blend-screen pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(249,247,245,0.85) 0%, rgba(249,247,245,0.2) 40%, transparent 70%)'
                }} 
              />
              <div 
                className="absolute inset-0 z-[3] mix-blend-color-burn pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(93,64,55,0) 0%, rgba(93,64,55,0.1) 60%, rgba(0,0,0,0.4) 100%)'
                }} 
              />
              
              <div className="relative z-10 text-center flex flex-col items-center justify-center w-full mt-10">
                <motion.div
                  initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center"
                >
                  <h1 
                    className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[10vw] font-serif-playfair leading-[0.85] tracking-tighter mb-10 text-center flex flex-col items-center"
                    style={{ 
                      color: logoColor,
                      textShadow: '0 10px 40px rgba(255,255,255,0.8), 0 0 16px rgba(255,255,255,0.6)'
                    }}
                  >
                    Roots
                    <span className="italic font-light opacity-90 indent-[10vw]">Studio</span>
                  </h1>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p 
                    className="text-xs md:text-xl font-medium tracking-[0.4em] md:tracking-[0.6em] uppercase flex items-center gap-4"
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
            <section className="py-20 md:py-40 px-6 md:px-20 bg-[#F5F2ED]">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-4 md:gap-6 mb-10 md:mb-16">
                  <div className="w-12 md:w-16 h-px bg-[#4E342E]/30" />
                  <span className="text-[10px] md:text-xs uppercase tracking-widest opacity-40">The Narrative</span>
                </div>
                <h2 className="text-3xl md:text-7xl font-light italic leading-tight mb-10 md:mb-16">
                  あなたのROOTSを、あなたの色で、<br className="hidden md:block" />ここから残していきませんか。
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
                  <p className="text-lg md:text-xl font-light leading-loose opacity-80">
                    お誕生日、七五三、成人式、卒業、結婚、そして家族のアニバーサリー。
                    人生には沢山の「節目」＝ROOTSがあります。
                    「ROOTS STUDIO」は、あなたのROOTSを形に残す場所。
                  </p>
                  <p className="text-lg md:text-xl font-light leading-loose opacity-80">
                    丁寧な対話からあなたのROOTSを汲み取り、「らしさ」を活かした撮影を貸切空間で。
                    ここは、ただ写真を撮るだけの場所ではありません。
                    手紙を書いたり、語り合ったり。
                  </p>
                </div>
              </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 md:py-40 px-6 md:px-20 border-y border-[#4E342E]/10">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.4em] opacity-40 mb-6 md:mb-8">01 / THE PHILOSOPHY</div>
                  <h2 className="text-4xl md:text-7xl font-light leading-tight mb-8 md:italic">
                    想いと時間を、<br />カタチにする。
                  </h2>
                  <p className="text-lg md:text-xl font-light leading-loose opacity-70">
                    ここは、ただ写真を撮るだけの場所ではありません。手紙を書いたり、語り合ったり。
                    「写真」というカタチだけではなく、そこで過ごした「時間」と「想い」も残します。
                  </p>
                </div>
                <div className="space-y-10 md:space-y-16">
                  <div className="flex gap-6 md:gap-8 items-start">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#4E342E] text-white flex items-center justify-center shrink-0">
                      <Layout className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Private Space</h4>
                      <p className="text-base md:text-lg opacity-60 leading-relaxed">完全貸切のプライベート空間で、リラックスした撮影を。</p>
                    </div>
                  </div>
                  <div className="flex gap-6 md:gap-8 items-start">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#4E342E] text-white flex items-center justify-center shrink-0">
                      <Maximize className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Dialogue First</h4>
                      <p className="text-base md:text-lg opacity-60 leading-relaxed">撮影前の丁寧な対話を通じて、あなたの「Roots」を深く理解します。</p>
                    </div>
                  </div>
                  <div className="flex gap-6 md:gap-8 items-start">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#4E342E] text-white flex items-center justify-center shrink-0">
                      <Grid className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Life-long Partner</h4>
                      <p className="text-base md:text-lg opacity-60 leading-relaxed">一度きりではなく、人生の節目ごとに帰ってきたくなる場所へ。</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Plan Preview Section */}
            <section className="py-20 md:py-40 px-6 md:px-20 bg-[#F5F2ED]">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24">
                <div>
                  <h3 className="text-4xl md:text-6xl italic mb-4" style={{ color: logoColor }}>Our Chronicles.</h3>
                  <p className="text-[10px] md:text-sm uppercase tracking-widest opacity-40">Newborn to Kanreki</p>
                </div>
                <button 
                  onClick={() => setCurrentPage('plan')}
                  className="text-xs md:text-sm font-sans-inter opacity-60 hover:opacity-100 transition-opacity border-b border-current pb-1 mt-6 md:mt-0"
                >
                  View All Plans
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12">
                {[
                  { title: "Wedding", img: "k2", desc: "誓いの瞬間" },
                  { title: "Family", img: "k5", desc: "家族の絆" },
                  { title: "My Roots", img: "k6", desc: "自分らしさの探究" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -20 }}
                    onClick={() => setCurrentPage('plan')}
                    className="group cursor-pointer flex md:block items-center gap-4 md:gap-0"
                  >
                    <div className="w-2/3 md:w-full aspect-[3/2] md:aspect-[2/3] overflow-hidden rounded-2xl md:mb-6 border border-[#4E342E]/5 shadow-sm shrink-0">
                      <img 
                        src={`https://picsum.photos/seed/roots-${item.img}/600/900`} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                        alt={item.title}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="w-1/3 md:w-full md:text-center">
                      <h4 className="text-lg md:text-xl italic mb-1" style={{ color: logoColor }}>{item.title}</h4>
                      <p className="text-[9px] md:text-[10px] uppercase tracking-widest opacity-40">{item.desc}</p>
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
        <nav className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-1 md:gap-2 p-1.5 md:p-2 bg-[#F9F7F5]/85 backdrop-blur-2xl border border-white/40 rounded-full shadow-[0_20px_40px_rgba(78,52,46,0.08),0_1px_3px_rgba(78,52,46,0.05)] text-[9px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.2em] font-medium transition-all w-max max-w-[95vw] overflow-x-auto no-scrollbar">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => {
                setCurrentPage(link.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-4 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-500 whitespace-nowrap ${
                currentPage === link.id 
                  ? 'bg-white font-bold shadow-sm' 
                  : 'hover:bg-white/50 opacity-60 hover:opacity-100'
              }`}
              style={{ color: logoColor }}
            >
              {link.label}
            </button>
          ))}
          <div className="w-px h-6 bg-[#4E342E]/10 mx-2 md:mx-3 shrink-0" />
          <a 
            href="#" 
            className="group flex items-center gap-2 px-5 md:px-8 py-2.5 md:py-3 rounded-full text-white transition-all duration-500 whitespace-nowrap shadow-md hover:shadow-xl hover:-translate-y-0.5 shrink-0"
            style={{ backgroundColor: logoColor }}
          >
            <LineIcon className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="text-[10px] md:text-xs tracking-[0.2em] font-bold">LINE相談</span>
          </a>
        </nav>

        {/* Dynamic Content */}
        <div className="relative">
          {renderContent()}
        </div>

        {/* Footer */}
        <footer className="py-16 md:py-20 px-6 md:px-20 border-t border-[#4E342E]/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12 text-center md:text-left">
            <div className="text-2xl md:text-3xl font-serif-playfair" style={{ color: logoColor }}>Roots Studio</div>
            <div className="flex gap-8 md:gap-12 items-center opacity-40">
              <a href="#" className="hover:opacity-100 transition-opacity">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity">
                <LineIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-[10px] uppercase tracking-widest hover:opacity-100 transition-opacity">Contact</a>
            </div>
            <div className="text-[10px] opacity-20 uppercase tracking-widest">© 2026 Roots Studio.</div>
          </div>
        </footer>
      </main>
    </div>
  );
}
