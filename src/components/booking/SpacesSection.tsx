import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Diamond, X, ArrowRight, Sparkles } from 'lucide-react';
import { SiteImages } from '../../types';
import { Language, translations } from '../../translations';

interface SpaceTour {
  id: string;
  title: string;
  description: string;
  img: string;
  specs: { label: string; value: string }[];
  amenities: string[];
}

interface SpacesSectionProps {
  siteImages: SiteImages;
  language: Language;
}

export default function SpacesSection({ siteImages, language }: SpacesSectionProps) {
  const [activeTour, setActiveTour] = useState<SpaceTour | null>(null);
  const t = translations[language];

  // Map values dynamically according to language
  const spaces: SpaceTour[] = [
    {
      id: 'achall',
      title: t.titleAcHall,
      description: t.descAcHall,
      img: siteImages.achall,
      specs: [
        { label: t.seatingCapacity, value: language === 'en' ? '600+ Guests' : '600+ நபர்கள்' },
        { label: language === 'en' ? 'Hall Levels' : 'மண்டப தளம்', value: language === 'en' ? '1 Hall Level' : '1 தளம்' },
        { label: t.coolingSystem, value: language === 'en' ? 'Central air conditioning' : 'மையப்படுத்தப்பட்ட ஏசி' },
        { label: t.lightingArtistry, value: language === 'en' ? 'Modern LED Cove Lights' : 'நவீன எல்.இ.டி விளக்குகள்' }
      ],
      amenities: language === 'en' ? [
        'Luxury high-back cushioned seating',
        'Grand elevated wedding & reception stage',
        'Beautiful central floral walkway aisle',
        'Professional multi-angle stage spotlights'
      ] : [
        'சொகுசு குஷன் இருக்கைகள்',
        'பிரமாண்டமான உயர்ந்த மேடை',
        'பூக்களால் அலங்கரிக்கப்பட்ட அழகிய பாதை',
        'ஒளிரும் சிறப்பு வண்ண விளக்குகள்'
      ]
    },
    {
      id: 'dining',
      title: t.titleDining,
      description: t.descDining,
      img: siteImages.dining,
      specs: [
        { label: language === 'en' ? 'Dining Capacity' : 'சாப்பிடும் கொள்ளளவு', value: language === 'en' ? '300 Guests' : '300 நபர்கள்' },
        { label: language === 'en' ? 'Food Types' : 'உணவு வகைகள்', value: language === 'en' ? 'Veg & Non-Veg' : 'சைவம் & அசைவம்' },
        { label: language === 'en' ? 'Air Circulation' : 'காற்று சுழற்சி', value: language === 'en' ? 'Heavy exhaust systems' : 'நவீன எக்ஸாஸ்ட் அமைப்புகள்' },
        { label: language === 'en' ? 'Water details' : 'தண்ணீர் சுத்தம்', value: language === 'en' ? 'RO Purified water' : 'சுத்திகரிக்கப்பட்ட குடிநீர்' }
      ],
      amenities: language === 'en' ? [
        'Spacious, clean food prep zone',
        'Stainless steel kitchenware sinks',
        'Dedicated service pathways',
        'Ultra-clean washbasins'
      ] : [
        'விசாலமான, சுத்தமான சமையல் கூடம்',
        'துருப்பிடிக்காத எஃகு பாத்திர சிங்ஸ்',
        'உணவு பரிமாற தனி நடைபாதைகள்',
        'மிகவும் சுத்தமான கை கழுவும் இடம்'
      ]
    },
    {
      id: 'suites',
      title: t.titleSuites,
      description: t.descSuites,
      img: siteImages.suites,
      specs: [
        { label: t.suitesCount, value: language === 'en' ? '2 Autonomous Chambers' : '2 சொகுசு தனி அறைகள்' },
        { label: t.climateControl, value: language === 'en' ? 'Individually Split A/C' : 'தனித்தனி ஸ்பிலிட் ஏசி' },
        { label: language === 'en' ? 'Comfort Fit' : 'அறை வசதி', value: language === 'en' ? 'Velvet Lounge Cushions' : 'வெல்வெட் சோபா குஷன்கள்' },
        { label: language === 'en' ? 'Privacy safety' : 'பாதுகாப்பு', value: language === 'en' ? 'Secure locks' : 'நம்பகமான பூட்டு வசதி' }
      ],
      amenities: language === 'en' ? [
        'Premium full-bodied dressing mirror',
        'En-suite modern sanitary restrooms',
        'Wardrobes and valuable lock boxes',
        'Dedicated family wait lobby area'
      ] : [
        'அழகிய பெரிய நிலைக்கண்ணாடி',
        'நவீன சுத்தமான கழிவறை வசதி',
        'அலமாரி மற்றும் பாதுகாப்பு பெட்டகம்',
        'குடும்பத்தினர் அமரும் காத்திருப்பு பகுதி'
      ]
    },
    {
      id: 'parking',
      title: t.titleParking,
      description: t.descParking,
      img: siteImages.parking,
      specs: [
        { label: t.lotCapacity, value: language === 'en' ? '10 Car & 100 Bike Parking' : '10 கார்கள் & 100 பைக்குகள்' },
        { label: t.areaSecurity, value: language === 'en' ? 'Gated compound walls' : 'கேட் பொருத்தப்பட்ட சுற்றுச்சுவர்' },
        { label: language === 'en' ? 'Access Lanes' : 'நுழைவுப்பாதை', value: language === 'en' ? 'Broad entry & exit gates' : 'அகலமான கதவுகள்' },
        { label: language === 'en' ? 'Ground Finishes' : 'தரை அமைப்பு', value: language === 'en' ? 'Heavy paving stones' : 'பாவிங் கற்கள் தரை' }
      ],
      amenities: language === 'en' ? [
        'Dedicated VIP guest slots',
        'Highly bright halogen illumination',
        'Clear directional pathway signs',
        'On-duty surveillance personnel'
      ] : [
        'விஐபி சிறப்பு பார்க்கிங் இடங்கள்',
        'பிரகாசமான ஹாலஜன் விளக்குகள்',
        'வழி காட்டும் தெளிவான பலகைகள்',
        'பாதுகாப்பு கண்காணிப்பு ஊழியர்'
      ]
    },
    {
      id: 'cctv',
      title: t.titleCctv,
      description: t.descCctv,
      img: siteImages.cctv,
      specs: [
        { label: t.recordLifespan, value: language === 'en' ? 'Multi-day backup loop' : 'பல நாள் பதிவு காப்பகம்' },
        { label: t.activeCameraCount, value: language === 'en' ? 'Dense High-Res nodes' : 'உயர்தர எச்.டி கேமராக்கள்' },
        { label: language === 'en' ? 'Surveillance scope' : 'கண்காணிப்பு எல்லை', value: language === 'en' ? 'Dining, Parking, & corridors' : 'டைனிங், பார்க்கிங் & நடைபாதை' },
        { label: language === 'en' ? 'Alert Center' : 'கட்டுப்பாட்டு அறை', value: language === 'en' ? 'Live security monitoring desk' : 'நேரடி கண்காணிப்பு மேஜை' }
      ],
      amenities: language === 'en' ? [
        'Waterproof exterior camera nodes',
        'Night-vision infrared sensors',
        'Secure remote control system',
        'Professional on-site guards support'
      ] : [
        'நீர்காப்பு கொண்ட வெளிப்புற கேமராக்கள்',
        'இரவு நேர அகச்சிவப்பு சென்சார்கள்',
        'பாதுகாப்பான ரிமோட் கட்டுப்பாட்டு முறை',
        'பாதுகாப்பு ஊழியர்களின் உதவி'
      ]
    },
    {
      id: 'generator',
      title: t.titleGenerator,
      description: t.descGenerator,
      img: siteImages.generator,
      specs: [
        { label: t.generatorType, value: language === 'en' ? 'Heavy Duty Silent Diesel' : 'சைலண்ட் டீசல் மின் இயற்றி' },
        { label: t.activationSpeed, value: language === 'en' ? 'Instant auto-switchover' : 'உடனடி மின் மாற்றம்' },
        { label: language === 'en' ? 'Span Support' : 'இயங்கும் திறன்', value: language === 'en' ? 'Runs complete AC + Lighting' : 'முழு ஏசி மற்றும் விளக்குகளை இயக்கும்' },
        { label: language === 'en' ? 'Quality standard' : 'சரிபார்ப்பு தரம்', value: language === 'en' ? 'Weekly serviced & tested' : 'வாரம் ஒருமுறை சோதிக்கப்படுகிறது' }
      ],
      amenities: language === 'en' ? [
        'Sound-isolated engine shell',
        'Safety automatic trip circuit',
        'Consistent current levels',
        'Independent kitchen power lines'
      ] : [
        'ஒலிப்புகா பாதுகாப்பு கவச பெட்டி',
        'தானியங்கி மின் பாதுகாப்பு இணைப்பு',
        'சீரான லோட் மின்சாரம்',
        'சமையல் கூடத்திற்கான தனி மின் இணைப்பு'
      ]
    }
  ];

  return (
    <section className="bg-background text-on-background min-h-screen py-10 transition-colors duration-300">
      {/* Front Hero Space Intro */}
      <div className="relative w-full h-[650px] flex items-center justify-center overflow-hidden mb-24 pr-1 pl-1">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ opacity: 0.8, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8 }}
            className="w-full h-full bg-cover bg-center opacity-85"
            style={{
              backgroundImage: `url('${siteImages.gallery3}')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center max-w-4xl mx-auto glass-panel p-8 md:p-14 rounded-2xl bloom-shadow"
        >
          <span className="font-label-caps text-[#735c00] dark:text-[#ffe088] tracking-[0.2em] mb-4 block font-semibold text-[10px]">
            {t.facilitiesTitle}
          </span>
          <h1 className="font-serif text-3xl md:text-5xl text-[#735c00] dark:text-[#ffe088] mb-6">
            {t.designedEvents}
          </h1>
          <p className="font-sans text-xs md:text-sm text-[#4d4635] dark:text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-semibold">
            {t.descAcHall}
          </p>
          <div className="mt-8 flex justify-center text-[#d4af37] dark:text-[#ffe088]">
            <Diamond className="w-8 h-8 animate-pulse stroke-1" />
          </div>
        </motion.div>
      </div>

      {/* Grid of the dynamic Facilities */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 mb-20">
        <div className="text-center mb-16 text-left">
          <span className="font-label-caps text-[#d4af37] dark:text-[#ffe088] tracking-widest font-bold text-xs block mb-2">
            {t.facilitiesTitle}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[#735c00] dark:text-[#ffe088] mb-4">
            {t.facilitiesSubtitle}
          </h2>
          <div className="w-16 h-0.5 bg-[#d4af37] dark:bg-[#ffe088]" />
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spaces.map((space) => (
            <motion.div
              key={space.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group h-[480px] rounded-3xl overflow-hidden bloom-shadow border border-primary-fixed/15 dark:border-outline-variant/15"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-103"
                style={{ backgroundImage: `url('${space.img}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-5">
                <div className="glass-panel p-5 rounded-2xl border border-white/20 dark:border-white/10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 text-left">
                  <h3 className="font-serif text-base md:text-lg text-[#735c00] dark:text-[#ffe088] mb-2 font-semibold">
                    {space.title}
                  </h3>
                  <p className="font-sans text-[11px] text-[#4d4635] dark:text-on-surface-variant leading-relaxed mb-4 font-semibold line-clamp-3">
                    {space.description}
                  </p>
                  <button
                    onClick={() => setActiveTour(space)}
                    className="font-label-caps text-[#735c00] dark:text-[#ffe088] border-b border-[#d4af37] dark:border-[#ffe088] pb-1 hover:text-[#d4af37] dark:hover:text-[#d4af37] transition-colors inline-flex items-center gap-1.5 cursor-pointer font-bold text-xs focus-visible:ring-2 focus-visible:ring-primary-container"
                  >
                    <span>{t.viewDetails}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Virtual Space Tour Lightbox overlay */}
      <AnimatePresence>
        {activeTour && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-background max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl border border-outline-variant/50 flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setActiveTour(null)}
                className="absolute top-4 right-4 z-20 bg-black/30 text-white rounded-full p-2 hover:bg-black/50 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-primary-container"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Visual Room image (Optimized with loading="lazy") */}
              <div className="md:w-1/2 relative min-h-[200px] md:min-h-full overflow-hidden">
                <img
                  src={activeTour.img}
                  alt={activeTour.title}
                  className="absolute inset-0 w-full h-full object-cover mr-0.5 ml-0.5"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 text-white text-left pointer-events-none">
                  <span className="font-label-caps text-[10px] text-[#ffe088] font-bold block mb-1">
                    {t.facilityInsight}
                  </span>
                  <h4 className="font-serif text-lg md:text-xl font-bold">{activeTour.title}</h4>
                </div>
              </div>

              {/* Right Side: Specifications and details */}
              <div className="md:w-1/2 p-6 md:p-8 overflow-y-auto max-h-[450px] md:max-h-none">
                <div className="flex items-center gap-1.5 text-[#d4af37] dark:text-[#ffe088] mb-2 text-left">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-label-caps text-[9px] tracking-widest font-bold">MEENA MAHAL PREMIUM</span>
                </div>
                <h3 className="font-serif text-lg text-[#735c00] dark:text-[#ffe088] mb-4 text-left">{activeTour.title} {t.specifications}</h3>
                <p className="text-xs text-[#4d4635] dark:text-on-surface-variant leading-relaxed mb-6 font-semibold text-left">
                  {activeTour.description}
                </p>

                {/* Specs List */}
                <div className="grid grid-cols-2 gap-4 border-t border-b border-outline-variant/35 py-4 mb-6">
                  {activeTour.specs.map((spec, i) => (
                    <div key={i} className="flex flex-col text-left">
                      <span className="text-[10px] font-label-caps text-outline dark:text-on-surface-variant font-bold">
                        {spec.label}
                      </span>
                      <span className="font-serif text-xs md:text-sm text-[#735c00] dark:text-[#ffe088] font-semibold">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Amenities checklist */}
                <h4 className="font-label-caps text-[10px] text-[#716854] dark:text-[#ffe088] tracking-widest font-bold mb-3 uppercase text-left">
                  {t.extraStandards}
                </h4>
                <ul className="space-y-2.5">
                  {activeTour.amenities.map((amenity, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#4d4635] dark:text-on-surface-variant font-medium leading-relaxed text-left">
                      <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37] dark:bg-[#ffe088] mt-1.5 flex-shrink-0" />
                      <span>{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
