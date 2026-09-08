import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/booking/HeroSection';
import ExperienceSection from './components/booking/ExperienceSection';
import SpacesSection from './components/booking/SpacesSection';
import ContactSection from './components/booking/ContactSection';
import ContactModal from './components/common/ContactModal';
import MarqueeBanner from './components/common/MarqueeBanner';
import { TabId, SiteImages } from './types';
import { Language } from './translations';

const DEFAULT_IMAGES: SiteImages = {
  heroBg: '/meena-exterior.jpg',
  achall: '/meena-hall-interior.jpg',
  dining: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk2WS69-VbMh9JGIoOQuWGMfqT8pv00Z0E1Xsd38VBn5V7Jx-bbQOS09Q7IkPqHTMLLH5uU8aCLHuCPv7AtpvLzAaF5SRY5hJ6CHCUUd4JH-VXkx-EknCRiX1y1mF5LIREYxtE2NKEok0e7G5TjavRkkvKiIBTX5evx6ChnsMNXrU9qXz757oXp0OMy1I1-opspGJXTHeY7PRBecPn5gPghJzY2UFyNkBRuKjwj1PMvbA2hrQFJ2GHhAhlILgbAekmCxWj2aYTt2Le',
  suites: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATfgpKp7ojbPw8JWdtoVabu9rTxtl27tFsmgDhRzNfQ3AKPQaHnHMwHJ5ONh0xpfScH4JFUWD6aKwSVm4EIwUf3uNqUIvTupNaWnN4McaW-r4MWli32FY5Hl1qQcPPTkLLHOkco4sqUN6VKBOvcVzWXs-L6bj4zPEW1AgB_ZiCSwADbwxPE6uxbjtjCvz22w8d9gKTZVoG8_kvIasZidTE_bJ4eXvkaMJXCD0hDQFp3WBPZ3V98MvYozEuhYu5-fkD5ncg0TG-A_Om',
  parking: '/meena-banana-gate.jpg',
  cctv: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9rfd7M2Va1Q7bY5DFXDaxCx7nYHxZyOME3KP_noKqkCOnmxYz4mulc0omq513ciXkLQ7dmqPy7-MqPwvbNtdd0oM7vKZoj5QK52Nr8wzFW1zgrbPvcXB81j4QKJ8066XOvyyY_g87VdB0BBaWMRiBwId4ZwMfo9_6Lxcvew6CFD5aYeUkCqabqgbjsIbYMyOqG7waaFswkqJRt-SojiQiapQFRPRZVXa3XtHdxndWzyrXK76YU31e_40sINVSkQWigAM60mypdrzv',
  generator: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd9N7GNGnw04oAqEfWw51wvqs8jrMdMhiEG41wnL0zuxtxFozmkHmBgy02OtrpdNZlF5dBexDofKrLFNZPH0pt7Ym8JW0DaElUWx36deBSWDQVxlI5Sh1HwH_xmxi9-S4n1ENLbrv6oyZHb0xCHN_IqptdoTuBrxHHhbbe9A88KLupfRAagQzJPn4IdPcWL1MTy6NbULUvOW27r44VJOIIM65ijUtIUGVqdkYvJbYuVxsGffpMtlIUIkQhX43-mYjBNotpIhbaQHy',
  gallery1: '/meena-stage-close.jpg',
  gallery2: '/meena-stage-wide.jpg',
  gallery3: '/meena-hall-interior.jpg'
};

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('entrance');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('mm_lang') as Language) || 'en';
  });

  // Theme State
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('mm_theme') as 'light' | 'dark') || 'light';
  });

  // Sync theme class with HTML element
  useEffect(() => {
    localStorage.setItem('mm_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Switch to Tamil if URL search query or hash indicates 'translite'
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const isTranslite = params.has('translite') || params.get('lang') === 'ta' || window.location.hash.toLowerCase().includes('translite');
      if (isTranslite) {
        setLanguage('ta');
      }
    } catch (err) {
      console.warn('URL monitoring for language fallback bypassed:', err);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mm_lang', language);
  }, [language]);

  // Initialize site images
  const [siteImages] = useState<SiteImages>(() => {
    const saved = localStorage.getItem('mm_site_images_v2');
    if (saved) {
      try {
        return { ...DEFAULT_IMAGES, ...JSON.parse(saved) };
      } catch (err) {
        console.warn('Unable to load customized images:', err);
      }
    }
    return DEFAULT_IMAGES;
  });

  // Handle scroll trigger tracking to update activeTab highlight and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Use IntersectionObserver for high-performance active section menu highlighting
    const sections: TabId[] = ['entrance', 'spaces', 'experience', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -55% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id as TabId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((sec) => {
      const el = document.getElementById(sec);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Soft scroll to selected coordinate section
  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
    const target = document.getElementById(tabId);
    if (target) {
      const offsetPos = target.offsetTop - 75; // Subtract sticky nav height
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-background min-h-screen text-on-background font-sans antialiased flex flex-col selection:bg-[#735c00]/15 selection:text-[#735c00] transition-colors duration-300">
      {/* Sticky Top Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        onRequestInvitation={() => setShowContactModal(true)}
        language={language}
        setLanguage={setLanguage}
        theme={theme}
        setTheme={setTheme}
      />

      {/* Stacked Showcase of all 4 Screens seamlessly aligned */}
      <main className="flex-grow">
        
        {/* SCREEN 1: Front Cover Hero */}
        <section id="entrance" className="relative">
          <HeroSection 
            onScheduleTour={() => setShowContactModal(true)} 
            heroBg={siteImages.heroBg} 
            language={language}
          />
        </section>

        {/* Dynamic Infinite Scrolling Marquee Banner with Wedding Couple */}
        <MarqueeBanner language={language} />

        {/* SCREEN 4: The Entrance Introduction & The Spaces */}
        <section id="spaces" className="border-t border-outline-variant/15">
          <SpacesSection siteImages={siteImages} language={language} />
        </section>

        {/* SCREEN 2: The Ceremony Experience, Bento Details, Services */}
        <section id="experience" className="border-t border-outline-variant/15">
          <ExperienceSection 
            onExploreCurations={() => setShowContactModal(true)} 
            siteImages={siteImages} 
            language={language}
          />
        </section>

        {/* SCREEN 3: Contact & Direct Booking Section */}
        <section id="contact" className="border-t border-outline-variant/15">
          <ContactSection
            onOpenContactModal={() => setShowContactModal(true)}
            language={language}
          />
        </section>
      </main>

      {/* Global Footer */}
      <Footer language={language} />

      {/* Direct Phone Call Booking Modal */}
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        language={language}
      />

      {/* Elegant Scroll to Top Floating Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 bg-white hover:bg-[#735c00] text-[#735c00] hover:text-white border border-[#d0c5af]/50 p-3 rounded-full hover:shadow-lg transition-all cursor-pointer shadow-md"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
