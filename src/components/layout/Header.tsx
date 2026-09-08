import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X, Languages, Sun, Moon, PhoneCall } from 'lucide-react';
import { TabId } from '../../types';
import { Language, translations } from '../../translations';

interface HeaderProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  onRequestInvitation: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export default function Header({
  activeTab,
  setActiveTab,
  onRequestInvitation,
  language,
  setLanguage,
  theme,
  setTheme,
}: HeaderProps) {
  const t = translations[language];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'entrance', label: t.home },
    { id: 'spaces', label: t.facilities },
    { id: 'experience', label: t.aboutGallery },
    { id: 'contact', label: t.bookings },
  ] as const;

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ta' : 'en');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/60 dark:bg-background/80 backdrop-blur-xl border-b border-primary-fixed/15 dark:border-primary-fixed/5 shadow-[0_10px_40px_-15px_rgba(212,175,55,0.08)] transition-all duration-300">
      <div className="flex justify-between items-center px-6 lg:px-12 xl:px-20 py-2 max-w-7xl mx-auto h-20">
        {/* Brand logo */}
        <button
          onClick={() => setActiveTab('entrance')}
          className="flex items-center gap-3 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container text-left transition-opacity hover:opacity-90 rounded-xl"
        >
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-[#d4af37]/10 rounded-full blur-sm scale-90" />
            <img
              src="/tamil-logo.png"
              alt="Meena Mahal Tamil Logo"
              className="h-11 w-11 object-contain drop-shadow-[0_2px_8px_rgba(115,92,0,0.15)] filter saturate-[1.05]"
            />
          </div>
          
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-[1.1rem] lg:text-[1.35rem] tracking-[0.12em] text-[#735c00] dark:text-[#ffe088] uppercase font-bold whitespace-nowrap">
              {t.brandName}
            </span>
            <span className="text-[9px] lg:text-[11px] tracking-[0.1em] font-sans uppercase font-semibold text-[#7f7663] dark:text-on-surface-variant whitespace-nowrap">
              {t.brandSub}
            </span>
          </div>
        </button>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`font-label-caps cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container rounded-md transition-all duration-300 relative py-2 ${
                activeTab === item.id
                  ? 'text-[#735c00] dark:text-[#ffe088] scale-102 font-semibold'
                  : 'text-on-surface-variant hover:text-[#735c00] dark:hover:text-[#ffe088]'
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#d4af37] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Action Button, Language & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-2.5 xl:gap-4">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-outline-variant hover:border-[#d4af37] bg-white dark:bg-zinc-900 text-[#735c00] dark:text-[#ffe088] transition-all hover:bg-[#ffe088]/10 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary-container"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5 text-[#d4af37]" />}
          </button>

          {/* Language Switch Button */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans border border-outline-variant hover:border-[#d4af37] bg-white dark:bg-zinc-900 text-[#735c00] dark:text-[#ffe088] transition-all hover:bg-[#ffe088]/10 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary-container"
            title={language === 'en' ? 'Translate to Tamil' : 'Translate to English'}
          >
            <Languages className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="font-semibold">{language === 'en' ? 'தமிழ்' : 'English'}</span>
          </button>

          {/* Book Now Button */}
          <button
            onClick={onRequestInvitation}
            className="font-label-caps border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#554300] dark:hover:text-[#09090b] px-6 py-3 rounded-full transition-all duration-300 tracking-widest cursor-pointer hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] font-bold focus-visible:ring-2 focus-visible:ring-primary-container flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>{t.bookNowBtn}</span>
          </button>
        </div>

        {/* Mobile menu, Language Switcher (Responsive) */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Mobile Theme Selector */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-outline-variant bg-white dark:bg-zinc-900 text-[#735c00] dark:text-[#ffe088] focus-visible:ring-2 focus-visible:ring-primary-container"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-[#d4af37]" />}
          </button>

          {/* Mobile Language Selector */}
          <button
            onClick={toggleLanguage}
            className="p-1 px-2.5 rounded-full text-[11px] border border-outline-variant bg-white dark:bg-zinc-900 text-[#735c00] dark:text-[#ffe088] font-sans flex items-center gap-1 font-semibold focus-visible:ring-2 focus-visible:ring-primary-container"
          >
            <Languages className="w-3 h-3 text-[#d4af37]" />
            <span>{language === 'en' ? 'தமிழ்' : 'En'}</span>
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-[#735c00] dark:text-[#ffe088] p-2 hover:bg-[#735c00]/5 rounded-lg transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-primary-container"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Slide-out Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-background border-l border-outline-variant/40 p-6 shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Header row in mobile drawer */}
                <div className="flex justify-between items-center mb-10">
                  <span className="font-serif text-sm tracking-[0.1em] text-[#735c00] dark:text-[#ffe088] uppercase font-bold">
                    {t.brandName}
                  </span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded-full hover:bg-surface-container-low text-outline focus-visible:ring-2 focus-visible:ring-primary-container"
                    aria-label="Close navigation menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Links */}
                <div className="flex flex-col gap-6 text-left">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`font-label-caps text-sm tracking-widest text-left py-2 border-b border-outline-variant/10 focus-visible:ring-2 focus-visible:ring-primary-container rounded-md ${
                        activeTab === item.id
                          ? 'text-[#735c00] dark:text-[#ffe088] font-bold'
                          : 'text-on-background/70'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Drawer Bottom Actions */}
              <div className="flex flex-col gap-5 border-t border-outline-variant/20 pt-6">
                <div className="flex items-center justify-between gap-4">
                  {/* Language Toggle in Mobile Drawer */}
                  <button
                    onClick={() => {
                      toggleLanguage();
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 rounded-full border border-outline-variant bg-surface text-[#735c00] dark:text-[#ffe088] text-xs font-semibold focus-visible:ring-2 focus-visible:ring-primary-container cursor-pointer"
                  >
                    <Languages className="w-4 h-4 text-[#d4af37]" />
                    <span>{language === 'en' ? 'தமிழ்' : 'English'}</span>
                  </button>

                  {/* Theme Toggle in Mobile Drawer */}
                  <button
                    onClick={() => {
                      toggleTheme();
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-4 py-3 rounded-full border border-outline-variant bg-surface text-[#735c00] dark:text-[#ffe088] text-xs font-semibold focus-visible:ring-2 focus-visible:ring-primary-container cursor-pointer"
                  >
                    {theme === 'light' ? (
                      <>
                        <Moon className="w-4 h-4 text-primary" />
                        <span>Dark</span>
                      </>
                    ) : (
                      <>
                        <Sun className="w-4 h-4 text-[#d4af37]" />
                        <span>Light</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Book CTA in Mobile Drawer */}
                <button
                  onClick={() => {
                    onRequestInvitation();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full bg-[#d4af37] hover:bg-[#735c00] text-[#554300] hover:text-white py-4 rounded-full text-xs font-label-caps font-bold transition-all shadow-md focus-visible:ring-2 focus-visible:ring-primary-container cursor-pointer flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{t.bookNowBtn}</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}
