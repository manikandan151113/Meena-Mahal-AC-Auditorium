import { Phone, Mail, MapPin, Sparkles, CheckCircle2, Clock, CalendarCheck } from 'lucide-react';
import { Language, translations } from '../../translations';

interface ContactSectionProps {
  onOpenContactModal: () => void;
  language: Language;
}

export default function ContactSection({ onOpenContactModal, language }: ContactSectionProps) {
  const t = translations[language];

  const highlights = [
    {
      title: language === 'en' ? 'Grand AC Hall' : 'பிரமாண்ட ஏசி மண்டபம்',
      desc: language === 'en' ? '600+ Seating capacity with acoustic control' : '600+ நபர்கள் அமரக்கூடிய குளிரூட்டப்பட்ட அரங்கம்'
    },
    {
      title: language === 'en' ? 'Grand Banquet Dining' : 'பெரிய உணவுக்கூடம்',
      desc: language === 'en' ? 'Clean granite dining tables with handwash bays' : 'சுத்தமான உணவுக்கூடம் மற்றும் கை கழுவும் வசதிகள்'
    },
    {
      title: language === 'en' ? 'Silent Generator Power' : '100% ஜெனரேட்டர் வசதி',
      desc: language === 'en' ? '24/7 Uninterrupted backup power for hall & AC' : 'தடையற்ற மின்சாரத்திற்கு 100% ஜெனரேட்டர் வசதி'
    },
    {
      title: language === 'en' ? 'Secured Parking & CCTV' : 'பாதுகாப்பான பார்க்கிங் & சிசிடிவி',
      desc: language === 'en' ? 'Spacious compound for vehicles with 24/7 security' : 'விசாலமான பார்க்கிங் மற்றும் சிசிடிவி கண்காணிப்பு'
    }
  ];

  return (
    <section className="bg-background text-on-background min-h-screen py-16 px-6 md:px-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-[#735c00] dark:text-[#ffe088] mb-3">
            <Sparkles className="w-4 h-4" />
            <span className="font-label-caps text-xs tracking-[0.25em] font-bold">
              {language === 'en' ? 'DIRECT RESERVATIONS' : 'நேரடி முன்பதிவு மையம்'}
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-[#735c00] dark:text-[#ffe088] font-bold mb-4">
            {t.contactDeskTitle}
          </h2>
          <p className="font-sans text-xs md:text-sm text-[#4d4635] dark:text-on-surface-variant leading-relaxed font-semibold">
            {t.contactDeskDesc}
          </p>
        </div>

        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          {/* Main Booking Call Card */}
          <div className="lg:col-span-7 glass-card bloom-shadow rounded-3xl p-8 md:p-10 flex flex-col justify-between border border-[#d4af37]/30 dark:border-[#ffe088]/30">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-label-caps bg-[#735c00]/10 dark:bg-[#ffe088]/10 text-[#735c00] dark:text-[#ffe088] px-3.5 py-1 rounded-full border border-[#735c00]/20 font-bold uppercase">
                  {language === 'en' ? 'Official Management Desk' : 'அதிகாரப்பூர்வ மேலாண்மை'}
                </span>
                <span className="text-xs font-sans text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  {language === 'en' ? 'Bookings Open' : 'முன்பதிவு நடப்பில் உள்ளது'}
                </span>
              </div>

              <h3 className="font-serif text-2xl md:text-3xl text-[#735c00] dark:text-[#ffe088] font-bold mb-4">
                {language === 'en' ? 'Call Us Directly to Reserve Your Date' : 'தேதியை முன்பதிவு செய்ய எங்களை நேரடியாக அழைக்கவும்'}
              </h3>
              <p className="font-sans text-xs md:text-sm text-[#4d4635] dark:text-on-surface-variant leading-relaxed font-semibold mb-8">
                {language === 'en'
                  ? 'Our manager will assist you with hall slot availability, pricing details, catering specifications, and physical venue tours.'
                  : 'எங்கள் மேலாளர் உடனே காலண்டர் தேதிகள், மண்டபக் கட்டண விவரங்கள் மற்றும் சமையல் ஆலோசனைகளை உங்களுக்கு வழங்குவார்.'}
              </p>

              {/* Direct Phone Numbers List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <a
                  href="tel:+919789645113"
                  className="bg-surface-container-low hover:bg-[#735c00]/10 dark:hover:bg-[#ffe088]/10 p-5 rounded-2xl border border-outline-variant/30 transition-all flex items-center gap-4 group cursor-pointer"
                >
                  <div className="bg-[#735c00] dark:bg-[#ffe088] text-white dark:text-[#09090b] p-3 rounded-full group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#7f7663] dark:text-on-surface-variant font-bold uppercase block">
                      {language === 'en' ? 'Primary Line' : 'முதன்மை தொடர்பு'}
                    </span>
                    <span className="font-mono text-base font-bold text-[#735c00] dark:text-[#ffe088]">
                      +91 97896 45113
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+919443218990"
                  className="bg-surface-container-low hover:bg-[#735c00]/10 dark:hover:bg-[#ffe088]/10 p-5 rounded-2xl border border-outline-variant/30 transition-all flex items-center gap-4 group cursor-pointer"
                >
                  <div className="bg-[#735c00] dark:bg-[#ffe088] text-white dark:text-[#09090b] p-3 rounded-full group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#7f7663] dark:text-on-surface-variant font-bold uppercase block">
                      {language === 'en' ? 'Secondary Helpline' : 'இரண்டாவது தொடர்பு'}
                    </span>
                    <span className="font-mono text-base font-bold text-[#735c00] dark:text-[#ffe088]">
                      +91 94432 18990
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center gap-4 border-t border-outline-variant/20 pt-6">
              <button
                onClick={onOpenContactModal}
                className="w-full sm:flex-1 font-label-caps bg-gradient-to-r from-[#735c00] to-[#8c7000] hover:from-[#5c4a00] hover:to-[#735c00] dark:from-[#ffe088] dark:to-[#d4af37] text-white dark:text-[#09090b] py-4 px-8 rounded-full transition-all duration-300 font-bold text-xs shadow-lg tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>{language === 'en' ? 'Book Meena Mahal Auditorium' : 'மீனா மஹால் முன்பதிவு செய்க'}</span>
              </button>

              <a
                href="tel:+919789645113"
                className="w-full sm:w-auto font-label-caps border border-[#735c00] dark:border-[#ffe088] text-[#735c00] dark:text-[#ffe088] hover:bg-[#735c00] dark:hover:bg-[#ffe088] hover:text-white dark:hover:text-[#09090b] py-4 px-8 rounded-full transition-all duration-300 font-bold text-xs tracking-wider text-center cursor-pointer flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{language === 'en' ? 'Call Now' : 'அழைக்கவும்'}</span>
              </a>
            </div>
          </div>

          {/* Location & Key Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Location Address Details */}
            <div className="glass-card bloom-shadow rounded-3xl p-6 md:p-8 flex flex-col gap-5 text-left">
              <h3 className="font-serif text-lg text-[#735c00] dark:text-[#ffe088] font-bold">
                {language === 'en' ? 'Address & Operational Hours' : 'முகவரி மற்றும் நேரங்கள்'}
              </h3>

              <div className="space-y-4 text-xs font-sans text-on-background">
                <div className="flex items-start gap-3">
                  <div className="bg-surface-container p-2 border border-primary-fixed/30 rounded-full flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#735c00] dark:text-[#ffe088]" />
                  </div>
                  <div>
                    <span className="text-[#7f7663] dark:text-on-surface-variant text-[9px] font-label-caps font-bold block">
                      {t.venueAddressLabel}
                    </span>
                    <span className="font-bold text-xs leading-relaxed text-on-background">
                      {t.venueAddressText}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-surface-container p-2 border border-primary-fixed/30 rounded-full flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#735c00] dark:text-[#ffe088]" />
                  </div>
                  <div>
                    <span className="text-[#7f7663] dark:text-on-surface-variant text-[9px] font-label-caps font-bold block">
                      {language === 'en' ? 'OFFICE HOURS' : 'அலுவலக நேரம்'}
                    </span>
                    <span className="font-bold text-xs leading-relaxed text-on-background">
                      {language === 'en' ? 'Monday - Sunday: 8:00 AM - 9:00 PM' : 'திங்கள் - ஞாயிறு: காலை 8:00 - இரவு 9:00'}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-surface-container p-2 border border-primary-fixed/30 rounded-full flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#735c00] dark:text-[#ffe088]" />
                  </div>
                  <div>
                    <span className="text-[#7f7663] dark:text-on-surface-variant text-[9px] font-label-caps font-bold block">
                      {t.contactEmailLabel}
                    </span>
                    <span className="font-bold text-xs leading-relaxed text-on-background">
                      bookings@meenamahal.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="glass-card bloom-shadow rounded-3xl p-6 md:p-8 text-left">
              <h4 className="font-serif text-base text-[#735c00] dark:text-[#ffe088] font-bold mb-4">
                {language === 'en' ? 'Auditorium Highlights' : 'மண்டபத்தின் சிறப்பம்சங்கள்'}
              </h4>
              <div className="space-y-3">
                {highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#735c00] dark:text-[#ffe088] flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-serif text-xs font-bold text-on-background block">{h.title}</span>
                      <span className="text-[11px] text-[#7f7663] dark:text-on-surface-variant font-medium">{h.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
