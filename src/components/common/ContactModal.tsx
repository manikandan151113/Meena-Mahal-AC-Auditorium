import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, X, CalendarCheck, MapPin, Sparkles } from 'lucide-react';
import { Language, translations } from '../../translations';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export default function ContactModal({ isOpen, onClose, language }: ContactModalProps) {
  const t = translations[language];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1c1b1b]/70 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg bg-background rounded-3xl p-6 sm:p-8 border border-[#d4af37]/40 dark:border-[#ffe088]/40 shadow-2xl z-10 text-left overflow-hidden select-none"
        >
          {/* Header decorative arch accent */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#735c00] via-[#d4af37] to-[#735c00]" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-[#7f7663] hover:text-[#735c00] dark:hover:text-[#ffe088] bg-surface-container rounded-full border border-outline-variant/30 transition-all cursor-pointer focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header Icon & Title */}
          <div className="flex items-center gap-3 mb-4 pr-8">
            <div className="bg-[#ffe088]/20 dark:bg-[#ffe088]/10 p-3 rounded-2xl border border-[#d4af37]/30 text-[#735c00] dark:text-[#ffe088]">
              <CalendarCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-label-caps text-[#735c00] dark:text-[#ffe088] font-bold tracking-widest uppercase flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {t.bookingModalHeaderTag || 'DIRECT BOOKING HELP'}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#735c00] dark:text-[#ffe088] font-bold leading-tight">
                {t.bookingModalTitle || 'Book Meena Mahal Auditorium'}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-[#4d4635] dark:text-on-surface-variant leading-relaxed font-sans font-medium mb-6">
            {t.bookingModalDesc || 'For bookings, date availability, and hall enquiries, please contact us directly by phone.'}
          </p>

          {/* Contact Numbers Box */}
          <div className="bg-surface-container-low rounded-2xl p-5 border border-outline-variant/30 space-y-4 mb-6">
            <div className="flex items-center justify-between border-b border-outline-variant/20 pb-3">
              <div className="flex items-center gap-3">
                <div className="bg-[#735c00]/10 dark:bg-[#ffe088]/10 p-2 rounded-full text-[#735c00] dark:text-[#ffe088]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#7f7663] dark:text-on-surface-variant font-bold uppercase block">
                    {language === 'en' ? 'Primary Hotline' : 'முக்கிய தொடர்பு எண்'}
                  </span>
                  <a
                    href="tel:+919789645113"
                    className="font-mono text-base font-bold text-[#735c00] dark:text-[#ffe088] hover:underline"
                  >
                    +91 97896 45113
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-[#735c00]/10 dark:bg-[#ffe088]/10 p-2 rounded-full text-[#735c00] dark:text-[#ffe088]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-[#7f7663] dark:text-on-surface-variant font-bold uppercase block">
                    {language === 'en' ? 'Secondary Helpline' : 'இரண்டாவது தொடர்பு எண்'}
                  </span>
                  <a
                    href="tel:+919443218990"
                    className="font-mono text-base font-bold text-[#735c00] dark:text-[#ffe088] hover:underline"
                  >
                    +91 94432 18990
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 text-[11px] text-[#7f7663] dark:text-on-surface-variant font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#735c00] dark:text-[#ffe088] flex-shrink-0" />
              <span>Weavers Colony, Lakshmiyapuram, Sankarankovil, TN</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href="tel:+919789645113"
              className="w-full sm:flex-1 font-label-caps bg-gradient-to-r from-[#735c00] to-[#8c7000] hover:from-[#5c4a00] hover:to-[#735c00] dark:from-[#ffe088] dark:to-[#d4af37] dark:hover:from-[#ffd460] dark:hover:to-[#c29f2e] text-white dark:text-[#09090b] text-center py-3.5 px-6 rounded-full transition-all duration-300 font-bold text-xs shadow-lg tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>{language === 'en' ? 'Call Now' : 'இப்போதே அழைக்கவும்'}</span>
            </a>

            <button
              onClick={onClose}
              className="w-full sm:w-auto font-label-caps border border-outline-variant/50 hover:border-[#735c00] dark:hover:border-[#ffe088] text-[#7f7663] dark:text-on-surface-variant hover:text-[#735c00] dark:hover:text-[#ffe088] py-3.5 px-6 rounded-full transition-all duration-300 font-bold text-xs tracking-wider cursor-pointer"
            >
              {language === 'en' ? 'Close' : 'மூடுக'}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
