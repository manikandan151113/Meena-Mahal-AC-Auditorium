import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { Language } from '../../translations';

interface MarqueeBannerProps {
  language: Language;
}

export default function MarqueeBanner({ language }: MarqueeBannerProps) {
  // Array of items to show in the marquee
  const items = [
    { type: 'image', src: '/wedding-couple.png', alt: 'Wedding Couple' },
    { type: 'text', en: 'MEENA MAHAL', ta: 'மீனா மஹால்' },
    { type: 'icon', icon: '✨' },
    { type: 'text', en: 'CELEBRATING LOVE & TOGETHERNESS', ta: 'இனிய இல்லறத் தொடக்கம்' },
    { type: 'icon', icon: '🌸' },
    { type: 'image', src: '/wedding-couple.png', alt: 'Wedding Couple' },
    { type: 'text', en: 'A DEDICATED PLACE FOR YOUR MEMORIES', ta: 'மங்களகரமான திருமண மண்டபம்' },
    { type: 'icon', icon: '✨' },
    { type: 'text', en: 'PREMIUM BANQUET EXPERIENCE', ta: 'அதிநவீன சொகுசு வசதிகள்' },
    { type: 'icon', icon: '🌸' },
  ];

  // Duplicate items to ensure a seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#ffe088]/5 via-[#d4af37]/10 to-[#ffe088]/5 border-y border-[#d4af37]/25 py-5 backdrop-blur-md z-10 shadow-[0_4px_30px_rgba(212,175,55,0.05)]">
      {/* Decorative side fades to make the scrolling feel integrated */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#fcf9f8] to-transparent pointer-events-none z-20" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#fcf9f8] to-transparent pointer-events-none z-20" />

      {/* Ticker Container */}
      <div className="flex w-max animate-marquee">
        <div className="flex items-center gap-16 px-8 select-none">
          {duplicatedItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-6 flex-shrink-0">
              {item.type === 'image' && (
                <motion.div
                  className="relative cursor-pointer"
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: [0, -5, 5, -5, 0],
                    transition: { duration: 0.4 } 
                  }}
                  animate={{
                    y: [0, -6, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3 + (idx % 2),
                    ease: 'easeInOut'
                  }}
                >
                  {/* Subtle golden ring behind the sticker */}
                  <div className="absolute inset-0 bg-[#d4af37]/10 rounded-full blur-md -z-10 scale-90" />
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-16 md:h-20 w-auto object-contain drop-shadow-[0_8px_16px_rgba(115,92,0,0.15)] filter saturate-[1.05]"
                  />
                </motion.div>
              )}

              {item.type === 'text' && (
                <span className="font-serif text-sm md:text-lg font-semibold tracking-wider text-[#735c00] drop-shadow-sm flex items-center gap-2">
                  {language === 'en' ? item.en : item.ta}
                </span>
              )}

              {item.type === 'icon' && (
                <span className="text-xl md:text-2xl animate-pulse text-[#d4af37] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]">
                  {item.icon}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
