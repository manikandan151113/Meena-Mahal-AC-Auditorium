import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef } from 'react';
import { Language, translations } from '../../translations';

interface HeroSectionProps {
  onScheduleTour: () => void;
  heroBg: string;
  language: Language;
}

export default function HeroSection({ onScheduleTour, heroBg, language }: HeroSectionProps) {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const t = translations[language];

  // Play an elegant sparkling high-end golden chime
  const playChime = () => {
    try {
      if (!soundEnabled) return;
      
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      // Golden frequency pairings for a pristine luxurious shimmer
      // 528Hz (Solfeggio Transformation) + 880Hz (Pure A5) + 1320Hz (Soprano Perfect Fifth)
      const freqs = [528, 880, 1320];
      const now = ctx.currentTime;

      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);
        
        // Stagger the frequencies slightly to create a physical spatial "strum"
        const delay = idx * 0.04;
        
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(0.12 / freqs.length, now + delay + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + delay + 2.5);
        
        osc.start(now + delay);
        osc.stop(now + delay + 2.5);
      });
    } catch (err) {
      console.warn('Audio synthesis restricted or unsupported:', err);
    }
  };

  const handleAction = () => {
    playChime();
    onScheduleTour();
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    // Initialize context on initial state toggle
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (AudioCtx && !audioContextRef.current) {
      audioContextRef.current = new AudioCtx();
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c1b1b]/35 via-transparent to-[#1c1b1b]/55 z-10"></div>
        <motion.div
          initial={{ scale: 1.05, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: 'easeOut' }}
          className="w-full h-full bg-cover bg-center select-none"
          style={{
            backgroundImage: `url('${heroBg}')`,
          }}
        />
      </div>

      {/* Tonal interactive sound trigger button */}
      <div className="absolute top-24 right-6 md:right-20 z-30">
        <button
          onClick={toggleSound}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-label-caps transition-all ${
            soundEnabled
              ? 'bg-[#ffe088]/20 border border-[#735c00]/30 text-[#ffe088] shadow-[0_0_15px_rgba(212,175,55,0.2)]'
              : 'bg-black/30 border border-white/10 text-white/60 hover:text-white hover:bg-black/40'
          }`}
          title={soundEnabled ? 'Mute ambient sound chime' : 'Enable ambient chime effect'}
        >
          {soundEnabled ? (
            <>
              <Volume2 className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="hidden sm:inline">{t.soundOn}</span>
            </>
          ) : (
            <>
              <VolumeX className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t.soundOff}</span>
            </>
          )}
        </button>
      </div>

      {/* Glassmorphic Central Card Overlay */}
      <div className="relative z-20 px-6 md:px-20 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="glass-panel p-8 md:p-16 rounded-3xl bloom-shadow max-w-3xl w-full flex flex-col items-center gap-6"
        >
          {/* Sparkle decorative */}
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 0.95, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            className="flex items-center gap-1 text-[#d4af37]"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-label-caps text-[9px] tracking-[0.3em] font-bold">PREMIUM A/C MANDAPAM</span>
          </motion.div>

          <h1 className="font-serif text-3xl md:text-5xl text-[#735c00] dark:text-[#ffe088] drop-shadow-md leading-tight">
            {t.heroTitle}
          </h1>

          <p className="font-sans text-xs md:text-sm text-[#4d4635] dark:text-on-surface-variant max-w-xl mx-auto font-medium leading-relaxed">
            {t.heroSub}
          </p>

          <div className="pt-4 w-full sm:w-auto">
            <button
              onClick={handleAction}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-label-caps border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#554300] dark:hover:text-[#09090b] bg-black/15 backdrop-blur-sm px-8 py-4 rounded-full transition-all duration-300 tracking-widest group cursor-pointer hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] active:scale-98 font-bold text-xs focus-visible:ring-2 focus-visible:ring-primary-container"
            >
              <span>{t.scheduleTourBtn}</span>
              <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Down Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="font-label-caps text-white tracking-[0.25em] text-[10px] drop-shadow-md">DISCOVER</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-1.5 h-6 bg-white/80 rounded-full"
        />
      </motion.div>
    </section>
  );
}
