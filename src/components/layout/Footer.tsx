import { useState } from 'react';
import { X } from 'lucide-react';
import { Language, translations } from '../../translations';

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const [modalContent, setModalContent] = useState<{ title: string; text: string } | null>(null);
  const t = translations[language];

  const openModal = (title: string, text: string) => {
    setModalContent({ title, text });
  };

  return (
    <>
      <footer className="w-full py-16 px-6 md:px-20 bg-surface-container-low border-t border-outline-variant/30 mt-auto select-none text-left transition-colors duration-300">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-12">
          {/* Logo brand */}
          <div className="flex items-center gap-3 select-none">
            <img
              src="/tamil-logo.png"
              alt="Meena Mahal Tamil Logo"
              className="h-12 w-12 object-contain drop-shadow-[0_2px_8px_rgba(115,92,0,0.1)] filter saturate-[1.05]"
            />
            <div className="flex flex-col">
              <span className="font-serif text-[1.3rem] tracking-[0.12em] text-[#735c00] dark:text-[#ffe088] uppercase font-bold text-left">
                {t.brandName}
              </span>
              <p className="text-[10px] text-[#7f7663] dark:text-on-surface-variant font-sans text-left font-semibold tracking-wider uppercase">
                {t.brandSub} - {language === 'en' ? 'Sankarankovil' : 'சங்கரன்கோவில்'}
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 text-outline dark:text-on-surface-variant text-xs font-sans font-bold">
            <button
              onClick={() =>
                openModal(
                  language === 'en' ? 'Privacy Policy' : 'தனியுரிமைக் கொள்கை',
                  language === 'en' 
                    ? 'At Meena Mahal Auditorium, we prioritize customer discretion and data safety. Any client booking data or family reservation details are kept strictly secure and confidential. All records are managed with absolute transparency.'
                    : 'மீனா மஹால் மண்டபத்தில், வாடிக்கையாளர் தரவு பாதுகாப்புக்கு முன்னுரிமை அளிக்கிறோம். உங்களின் முன்பதிவு விவரங்கள் மிகவும் பாதுகாப்பாக வைக்கப்படும்.'
                )
              }
              className="hover:text-[#735c00] dark:hover:text-[#ffe088] hover:underline decoration-[#735c00]/30 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container rounded"
            >
              {language === 'en' ? 'Privacy Policy' : 'தனியுரிமைக் கொள்கை'}
            </button>
            <button
              onClick={() =>
                openModal(
                  language === 'en' ? 'Terms of Service' : 'சேவை விதிமுறைகள்',
                  language === 'en'
                    ? 'Bookings at Meena Mahal Auditorium are subject to slot availability and advance payment rules. An initial booking contract must be signed to secure dates.'
                    : 'மீனா மஹால் திருமண மண்டப முன்பதிவுகள் அட்வான்ஸ் தொகை மற்றும் கிடைக்கும் தேதிகளைப் பொறுத்தது.'
                )
              }
              className="hover:text-[#735c00] dark:hover:text-[#ffe088] hover:underline decoration-[#735c00]/30 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container rounded"
            >
              {language === 'en' ? 'Terms of Service' : 'சேவை விதிமுறைகள்'}
            </button>
            <button
              onClick={() =>
                openModal(
                  language === 'en' ? 'Press Kit' : 'ஊடகத் தொகுப்பு',
                  language === 'en'
                    ? 'Meena Mahal Auditorium is a well-known wedding landmark in Sankarankovil. For any public relations questions, contact media@meenamahal.com.'
                    : 'மீனா மஹால் மண்டபம் சங்கரன்கோவிலின் முக்கிய அடையாளமாகும். எங்களை தொடர்பு கொள்ள media@meenamahal.com என்கிற முகவரியை பயன்படுத்தவும்.'
                )
              }
              className="hover:text-[#735c00] dark:hover:text-[#ffe088] hover:underline decoration-[#735c00]/30 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container rounded"
            >
              {language === 'en' ? 'Press Kit' : 'ஊடகத் தொகுப்பு'}
            </button>
            <button
              onClick={() =>
                openModal(
                  language === 'en' ? 'Careers' : 'வேலைவாய்ப்பு',
                  language === 'en'
                    ? 'We are always looking for friendly hostesses, security coordinators, and supervisors. Apply by sending details to careers@meenamahal.com.'
                    : 'எங்கள் நிபுணர் குழுவில் இணைய விருப்பம் உள்ளவர்கள் careers@meenamahal.com என்ற முகவரிக்கு விண்ணப்பம் செய்யலாம்.'
                )
              }
              className="hover:text-[#735c00] dark:hover:text-[#ffe088] hover:underline decoration-[#735c00]/30 transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container rounded"
            >
              {language === 'en' ? 'Careers' : 'வேலைவாய்ப்பு'}
            </button>
          </div>

          {/* Copyright notice */}
          <div className="font-sans text-xs text-[#7f7663] dark:text-on-surface-variant text-center md:text-right font-semibold">
            © {new Date().getFullYear()} {t.brandName} {t.brandSub}. {language === 'en' ? 'All Rights Reserved.' : 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.'}
          </div>
        </div>
      </footer>

      {/* Info Modal */}
      {modalContent && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-md z-[100] flex items-center justify-center p-4">
          <div className="bg-background max-w-lg w-full rounded-2xl p-8 border border-outline-variant/50 shadow-2xl relative">
            <button
              onClick={() => setModalContent(null)}
              className="absolute top-4 right-4 text-outline hover:text-[#735c00] dark:hover:text-[#ffe088] transition-colors p-1 focus-visible:ring-2 focus-visible:ring-primary-container rounded-full"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif text-xl md:text-2xl text-[#735c00] dark:text-[#ffe088] mb-4 border-b border-primary-fixed/30 pb-2">
              {modalContent.title}
            </h3>
            <p className="text-xs md:text-sm text-[#4d4635] dark:text-on-surface-variant leading-relaxed font-sans font-medium text-left">
              {modalContent.text}
            </p>
            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setModalContent(null)}
                className="font-label-caps border border-[#735c00] dark:border-[#ffe088] text-[#735c00] dark:text-[#ffe088] hover:bg-[#735c00] dark:hover:bg-[#ffe088] hover:text-[#ffffff] dark:hover:text-[#09090b] px-6 py-2 rounded-full transition-all duration-300 font-bold text-xs focus-visible:ring-2 focus-visible:ring-primary-container"
              >
                {language === 'en' ? 'Close' : 'மூடுக'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
