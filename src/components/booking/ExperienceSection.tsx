import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Diamond, ShieldCheck, Heart, ArrowRight, X, Sparkles, Sliders } from 'lucide-react';
import { SiteImages } from '../../types';
import { Language, translations } from '../../translations';

interface ExperienceSectionProps {
  onExploreCurations: () => void;
  siteImages: SiteImages;
  language: Language;
}

export default function ExperienceSection({ onExploreCurations, siteImages, language }: ExperienceSectionProps) {
  const [selectedCurator, setSelectedCurator] = useState<string | null>(null);
  const t = translations[language];

  const curations = [
    {
      id: 'decor',
      title: language === 'en' ? 'Stage & Hall Decoration' : 'மேடை மற்றும் அரங்கு அலங்காரம்',
      description: language === 'en' 
        ? 'You are welcome to bring in your preferred decorators to set up the stage and hall exactly as you envision.'
        : 'உங்கள் விருப்பப்படி மேடை மற்றும் அரங்கத்தை அலங்கரிக்க உங்கள் சொந்த அலங்கரிப்பாளர்களைக் கொண்டு வரலாம்.',
      metric: language === 'en' ? 'Fully Customizable' : 'உங்கள் விருப்பம்',
    },
    {
      id: 'catering',
      title: language === 'en' ? 'Catering Services' : 'உணவு மற்றும் உபசரிப்பு',
      description: language === 'en'
        ? 'Our spacious dining hall is ready for your chosen caterers to serve both vegetarian and non-vegetarian menus.'
        : 'உங்கள் விருப்பமான சமையல்காரர்களைக் கொண்டு சைவம் மற்றும் அசைவ உணவுகளை பரிமாறலாம்.',
      metric: language === 'en' ? 'Veg & Non-Veg' : 'சைவம் & அசைவம்',
    },
    {
      id: 'audio',
      title: language === 'en' ? 'Audio & Lighting' : 'ஒலி மற்றும் ஒளி அமைப்பு',
      description: language === 'en'
        ? 'Basic lighting and acoustic setups are provided. You may bring additional equipment for music and entertainment.'
        : 'அடிப்படை விளக்குகள் மற்றும் ஒலி அமைப்புகள் உள்ளன. நீங்கள் விரும்பினால் கூடுதல் அமைப்புகளைக் கொண்டு வரலாம்.',
      metric: language === 'en' ? 'External Setups Welcome' : 'கூடுதல் அமைப்புகள் ஏற்பு',
    },
  ];

  return (
    <section className="bg-background text-on-background min-h-screen py-12 transition-colors duration-300">
      {/* Sub-Hero visual banner */}
      <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden mb-20">
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ opacity: 0.8, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('${siteImages.generator}')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 mt-12 flex flex-col items-center">
          <span className="font-label-caps text-[#735c00] dark:text-[#ffe088] tracking-[0.25em] mb-4">
            {t.experienceHeading}
          </span>
          <h1 className="font-serif text-3xl md:text-5xl text-on-background mb-6 tracking-wide leading-tight">
            {language === 'en' ? 'About Meena Mahal Auditorium' : 'மீனா மஹால் மண்டபத் தகவல்கள்'}
          </h1>
          <p className="font-sans text-xs md:text-sm text-[#4d4635] dark:text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed font-semibold">
            {t.experienceIntro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl text-left bg-surface-container/70 dark:bg-surface-container/30 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-primary-fixed/20 dark:border-outline-variant/20 shadow-xl mb-8">
            <div className="border-r border-outline-variant/30 last:border-0 pr-4">
              <h3 className="font-serif text-sm md:text-base text-[#735c00] dark:text-[#ffe088] mb-2 font-bold">
                {language === 'en' ? 'Our Vision' : 'எங்கள் பார்வை'}
              </h3>
              <p className="text-xs text-[#4d4635] dark:text-on-surface-variant leading-relaxed font-semibold">
                {language === 'en' 
                  ? 'Providing a sophisticated environment where families can cherish lifelong memories. We blend cultural traditions with modern amenities to craft a truly seamless event hosting experience.'
                  : 'குடும்பங்கள் தங்கள் வாழ்நாள் நினைவுகளை அன்புடன் சேமிக்கும் அழகிய சூழலை வழங்குவது. மரபுச் சிறப்புகளும் நவீன வசதிகளும் இணையும் உன்னத தளம்.'}
              </p>
            </div>
            <div className="pl-0 md:pl-4">
              <h3 className="font-serif text-sm md:text-base text-[#735c00] dark:text-[#ffe088] mb-2 font-bold">
                {language === 'en' ? 'Our Mission' : 'எங்கள் நோக்கம்'}
              </h3>
              <p className="text-xs text-[#4d4635] dark:text-on-surface-variant leading-relaxed font-semibold">
                {language === 'en'
                  ? 'To offer world-class standards of execution, perfect comfort, and state-of-the-art facilities. We handle every detail, from safety to majestic decorations, with sheer hospitality.'
                  : 'உலகத்தரம் கொண்ட வசதிகள், சிறந்த சொகுசு மற்றும் சிறப்பான சேவையை வழங்குவது. பாதுகாப்பு, பளபளக்கும் விளக்குகள் மற்றும் வண்ண அலங்காரங்களை முழுமையாக கவனிப்போம்.'}
              </p>
            </div>
          </div>
          <button 
            onClick={() => setSelectedCurator('decor')}
            className="font-label-caps bg-[#d4af37] dark:bg-[#ffe088] text-[#554300] dark:text-on-primary-fixed px-8 py-3.5 rounded-full hover:opacity-90 active:scale-95 transition-all duration-300 shadow-lg shadow-[#d4af37]/20 flex items-center gap-2 cursor-pointer font-bold text-xs focus-visible:ring-2 focus-visible:ring-primary-container"
          >
            {language === 'en' ? 'Our Cultural Services' : 'எங்கள் கலாச்சாரச் சேவைகள்'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bento Grid layout with structural borders */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 mb-28">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-outline-variant/30 pb-8">
          <div className="max-w-xl text-left">
            <h2 className="font-serif text-3xl md:text-4xl text-[#735c00] dark:text-[#ffe088] mb-3">
              {t.galleryTagline === 'GALLERY LANDMARKS' ? 'Celebration Gallery' : 'சுப நிகழ்வுகள் கேலரி'}
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#4d4635] dark:text-on-surface-variant leading-relaxed font-semibold">
              {language === 'en'
                ? 'A glimpse into the stunning events hosted at Meena Mahal. From traditional weddings to elegant engagements and receptions, our venue renders each occasion unforgettable.'
                : 'மீனா மஹாலில் நடைபெற்ற உன்னத நிகழ்ச்சிகளின் புகைப்படத் தொகுப்பு. பாரம்பரிய திருமணங்கள், முகூர்த்தங்கள் மற்றும் வரவேற்பு விழாக்கள் ஜொலிக்கும் அழகுக் காட்சி.'}
            </p>
          </div>
        </div>

        {/* Bento Board */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[380px]">
          {/* Bento element 1 (Wide card - Dining) */}
          <div className="md:col-span-8 relative group overflow-hidden rounded-2xl bloom-shadow">
            <img 
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
              src={siteImages.gallery1} 
              alt="Grand Wedding Feast" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full flex items-end justify-between">
              <div className="glass-panel p-5 rounded-2xl border border-white/30 dark:border-white/10 inline-block max-w-sm text-left">
                <span className="font-label-caps text-[#735c00] dark:text-[#ffe088] block mb-1 font-bold text-[10px]">
                  {language === 'en' ? 'Exquisite Catering' : 'உயர்தர பாரம்பரிய சமையல்'}
                </span>
                <h3 className="font-serif text-lg md:text-xl text-on-background">
                  {t.galleryFeast}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedCurator('catering')}
                className="hidden sm:flex bg-white/70 dark:bg-zinc-950/70 hover:bg-white dark:hover:bg-zinc-900 text-[#735c00] dark:text-[#ffe088] p-3 rounded-full transition-colors items-center justify-center cursor-pointer focus-visible:ring-2 focus-visible:ring-primary-container"
                aria-label="Catering controls"
              >
                <Sliders className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Bento element 2 (Portrait card) */}
          <div className="md:col-span-4 relative group overflow-hidden rounded-2xl bloom-shadow">
            <img 
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src={siteImages.gallery2} 
              alt="The Stage Details" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 right-6 text-left pointer-events-none">
              <p className="font-serif text-white text-base md:text-lg leading-snug drop-shadow-sm">
                {t.galleryStage}
              </p>
            </div>
          </div>

          {/* Bento element 3 (Text card) */}
          <div className="md:col-span-4 relative group overflow-hidden rounded-2xl bloom-shadow bg-surface-container-low border border-outline-variant/15 flex flex-col justify-center p-8 md:p-10 transition-all hover:bg-surface-container text-left">
            <div className="w-12 h-12 rounded-full border border-primary-fixed/60 flex items-center justify-center mb-6 bg-background shadow-sm">
              <Diamond className="w-5 h-5 text-[#735c00] dark:text-[#ffe088]" />
            </div>
            <h3 className="font-serif text-lg text-[#735c00] dark:text-[#ffe088] mb-2 font-bold">
              {language === 'en' ? 'Traditional Engagements' : 'பாரம்பரி நிச்சயதார்த்தம்'}
            </h3>
            <p className="font-sans text-xs text-[#4d4635] dark:text-on-surface-variant leading-relaxed font-semibold">
              {language === 'en'
                ? 'We honor every ritual with visual elegance. Meticulous settings for standard cultural programs, corporate meetings, and joyful family events.'
                : 'ஒவ்வொரு தமிழ் பாரம்பரிய சடங்குகளையும் கண்ணியமாக கொண்டாடுகிறோம். நிச்சயதார்த்தம், கிரகப்பிரவேசம் மற்றும் குடும்ப விழாக்களுக்கான சிறந்த தளம்.'}
            </p>
          </div>

          {/* Bento element 4 (Landscape floor corridor image) */}
          <div className="md:col-span-8 relative group overflow-hidden rounded-2xl bloom-shadow">
            <img 
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-103" 
              src={siteImages.gallery3} 
              alt="Grand Stage Walkway" 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <div className="glass-panel p-4 md:p-5 rounded-2xl border border-white/30 dark:border-white/10 inline-block">
                <h3 className="font-serif text-base md:text-lg text-on-background">
                  {t.galleryWalkway}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Atmosphere (Discretion / Service) */}
      <div className="relative py-24 bg-surface-container-low transition-colors duration-300 overflow-hidden">
        {/* Glow decorative */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="font-label-caps text-[#735c00] dark:text-[#ffe088] tracking-[0.2em] mb-3 block">
              {language === 'en' ? 'Invisible Luxury' : 'மறைமுக சிறப்பு'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-on-background mb-4">
              {language === 'en' ? 'The Atmosphere' : 'வித்தியாசமான அரங்கம்'}
            </h2>
            <p className="font-sans text-xs md:text-sm text-[#4d4635] dark:text-on-surface-variant leading-relaxed font-semibold">
              {language === 'en'
                ? 'True luxury is felt, rarely seen. We operate with a philosophy of anticipatory service and absolute discretion, ensuring your experience remains uninterrupted and exclusively yours.'
                : 'உண்மையான சொகுசு என்பது மேலோட்டமாக அல்ல, உள்ளார்ந்த நிம்மதியில் இருக்கிறது. சிறந்த சேவையும், தடையற்ற மின்சாரமும் உங்கள் சுபகாரியங்களை இனிமையாக்குகிறது.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service Glass Card */}
            <div className="bg-surface-container-lowest/40 dark:bg-surface-container-lowest/20 backdrop-blur-xl border border-outline-variant/60 dark:border-outline-variant/20 rounded-3xl p-8 md:p-10 bloom-shadow hover:bloom-shadow-hover duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                <span className="font-serif text-8xl text-[#735c00] dark:text-[#ffe088] tracking-tighter">L</span>
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center mb-6 bg-background shadow-sm">
                  <Heart className="w-5 h-5 text-[#735c00] dark:text-[#ffe088]" />
                </div>
                <h3 className="font-serif text-lg md:text-xl text-[#735c00] dark:text-[#ffe088] mb-3 font-semibold text-left">
                  {language === 'en' ? 'Seamless Orchestration' : 'சீரான ஒழுங்கமைப்பு'}
                </h3>
                <p className="font-sans text-xs md:text-sm text-[#4d4635] dark:text-on-surface-variant leading-relaxed font-semibold mb-6 text-left">
                  {language === 'en'
                    ? 'Our service staff navigates the periphery, attending to needs before they are ever spoken aloud. The flow is completely silent, allowing your celebration to remain the singular focus.'
                    : 'எங்கள் ஊழியர்கள் உங்கள் தேவைகளை உடனுக்குடன் கவனித்துக் கொள்கிறார்கள். எந்த சத்தமும் இன்றி சீரான முறையில் விழா நடைபெற வழி செய்கிறோம்.'}
                </p>
                <ul className="space-y-3.5 border-t border-outline-variant/25 pt-4">
                  <li className="flex items-center gap-2.5 text-xs text-on-background font-semibold text-left">
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#735c00] dark:bg-[#ffe088]" />
                    <span>{language === 'en' ? 'Dedicated support team assigned per party' : 'ஒவ்வொரு குடும்பத்திற்கும் அர்ப்பணிக்கப்பட்ட தனிக்குழு'}</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-on-background font-semibold text-left">
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#735c00] dark:bg-[#ffe088]" />
                    <span>{language === 'en' ? 'Anticipatory real-time schedule alignment' : 'விழா நேர அட்டவணையை முன்கூட்டியே சீரமைத்தல்'}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Discretion Glass Card */}
            <div className="bg-surface-container-lowest/40 dark:bg-surface-container-lowest/20 backdrop-blur-xl border border-outline-variant/60 dark:border-outline-variant/20 rounded-3xl p-8 md:p-10 bloom-shadow hover:bloom-shadow-hover duration-500 relative overflow-hidden group">
              <div className="relative z-10 text-left">
                <div className="w-12 h-12 rounded-full border border-outline-variant/30 flex items-center justify-center mb-6 bg-background shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-[#735c00] dark:text-[#ffe088]" />
                </div>
                <h3 className="font-serif text-lg md:text-xl text-[#735c00] dark:text-[#ffe088] mb-3 font-semibold text-left">
                  {language === 'en' ? 'Absolute Discretion' : 'முழுமையான பாதுகாப்பு'}
                </h3>
                <p className="font-sans text-xs md:text-sm text-[#4d4635] dark:text-on-surface-variant leading-relaxed font-semibold mb-6 text-left">
                  {language === 'en'
                    ? 'The sanctuary of your event is protected by unobtrusive yet absolute security measures. We guarantee a completely pristine, safe, and exclusive environment.'
                    : 'உங்கள் சுப நிகழ்ச்சியின் அமைதி மற்றும் பாதுகாப்புக்கு 24 மணி நேரமும் கண்காணிப்பு கேமராக்கள் மற்றும் காவலாளிகள் இருக்கிறார்கள்.'}
                </p>
                <ul className="space-y-3.5 border-t border-outline-variant/25 pt-4">
                  <li className="flex items-center gap-2.5 text-xs text-on-background font-semibold">
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#735c00] dark:bg-[#ffe088]" />
                    <span>{language === 'en' ? 'Controlled private compound access' : 'கேட் பொருத்தப்பட்ட முழு பாதுகாப்பான வளாகம்'}</span>
                  </li>
                  <li className="flex items-center gap-2.5 text-xs text-on-background font-semibold">
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#735c00] dark:bg-[#ffe088]" />
                    <span>{language === 'en' ? '24/7 Smart CCTV surveillance backup logs' : '24/7 சிசிடிவி கண்காணிப்பு மற்றும் பாதுகாப்பு பலகை'}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curator Overlay Drawer */}
      <AnimatePresence>
        {selectedCurator && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60] flex justify-end">
            {/* Outside click closer */}
            <div className="absolute inset-0" onClick={() => setSelectedCurator(null)} />
            
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-md bg-background h-full shadow-2xl z-10 flex flex-col p-8 border-l border-outline-variant/40"
            >
              <button 
                onClick={() => setSelectedCurator(null)}
                className="absolute top-6 right-6 p-2 text-outline hover:text-[#735c00] dark:hover:text-[#ffe088] transition-colors focus-visible:ring-2 focus-visible:ring-primary-container rounded-full"
                aria-label="Close panel"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-[#d4af37] dark:text-[#ffe088] mb-4 mt-8">
                <Sparkles className="w-4 h-4" />
                <span className="font-label-caps text-[10px] tracking-widest block">MEENA MAHAL SERVICES</span>
              </div>

              <h3 className="font-serif text-2xl text-[#735c00] dark:text-[#ffe088] mb-6 font-semibold">
                {language === 'en' ? 'Special Services' : 'சுயவிவர சேவைகள்'}
              </h3>

              <div className="flex-grow space-y-6 overflow-y-auto pr-2 text-left scroll-smooth">
                {curations.map((cur) => (
                  <div 
                    key={cur.id}
                    className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                      selectedCurator === cur.id 
                        ? 'bg-primary-fixed/15 dark:bg-primary-fixed/5 border-[#d4af37] dark:border-[#ffe088]' 
                        : 'bg-surface-container-lowest border-outline-variant/20 hover:border-outline-variant/40'
                    }`}
                    onClick={() => setSelectedCurator(cur.id)}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-serif text-base text-[#735c00] dark:text-[#ffe088] font-semibold">{cur.title}</h4>
                      <span className="text-[10px] font-label-caps bg-surface border border-outline-variant/35 text-outline dark:text-on-surface-variant px-2 py-0.5 rounded-full font-bold">
                        {cur.metric}
                      </span>
                    </div>
                    <p className="text-xs text-[#4d4635] dark:text-on-surface-variant leading-relaxed font-sans font-medium">{cur.description}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-outline-variant/30 pt-6 mt-6">
                <p className="text-xs text-outline dark:text-on-surface-variant font-sans italic mb-4 font-semibold">
                  {language === 'en'
                    ? 'All services can be fully customized with local caterers and decorators of your choice.'
                    : 'மேலே உள்ள அனைத்து சேவைகளையும் நீங்கள் விரும்பும் உள்ளூர் அலங்கரிப்பாளர்கள் மற்றும் சமையல்காரர்களுடன் முழுமையாக அமைத்துக் கொள்ளலாம்.'}
                </p>
                <button 
                  onClick={() => {
                    setSelectedCurator(null);
                    onExploreCurations();
                  }}
                  className="w-full font-label-caps bg-[#735c00] dark:bg-[#ffe088] text-white dark:text-on-primary-fixed py-3.5 rounded-full hover:bg-[#d4af37] hover:text-[#554300] dark:hover:bg-[#ffe088] dark:hover:text-[#554300] transition-all cursor-pointer font-bold text-center text-xs focus-visible:ring-2 focus-visible:ring-primary-container"
                >
                  {language === 'en' ? 'Check Available Calendar Slots' : 'காலண்டர் முன்பதிவு விவரம்'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
