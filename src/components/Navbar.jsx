import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: "Showcase", href: "#showcase" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map(item => document.getElementById(item.href.replace('#', '')))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
    );

    sections.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setActiveSection(href);
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4"
      >
        <motion.nav
          animate={{ height: scrolled ? '52px' : '60px' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={`flex items-center justify-between w-full max-w-4xl px-2 rounded-full transition-all duration-300 ${scrolled ? 'pill-nav-scrolled' : 'pill-nav'}`}
        >
          <a
            href="#home"
            onClick={() => handleNavClick('#home')}
            className="flex items-center pl-1"
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent-orange to-accent-purple flex items-center justify-center shadow-lg shadow-accent-purple/20">
              <span className="text-white font-bold text-sm font-satoshi">SP</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 ${isActive ? 'text-white' : 'text-text-secondary hover:text-white'}`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-accent-orange/20 to-accent-purple/20 rounded-full border border-white/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2 pr-1">
            <a
              href="#contact"
              onClick={() => handleNavClick('#contact')}
              className="hidden md:flex items-center gap-2 px-5 py-1.5 bg-gradient-to-r from-accent-orange to-accent-purple text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-accent-orange/25 transition-all duration-300 hover:scale-105"
            >
              Contact
            </a>
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center text-white bg-white/5 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="fixed top-20 left-4 right-4 z-50 md:hidden"
            >
              <nav className="bg-dark-secondary/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-4 shadow-2xl shadow-purple-500/10">
                <div className="flex flex-col gap-1">
                  {navItems.map((item, i) => {
                    const isActive = activeSection === item.href;
                    return (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={() => handleNavClick(item.href)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${isActive ? 'text-white bg-gradient-to-r from-accent-orange/20 to-accent-purple/20' : 'text-text-secondary hover:text-white hover:bg-white/5'}`}
                      >
                        {item.label}
                      </motion.a>
                    );
                  })}
                </div>
                <div className="mt-3 pt-3 border-t border-white/5">
                  <a
                    href="#contact"
                    onClick={() => handleNavClick('#contact')}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-accent-orange to-accent-purple text-white text-sm font-semibold rounded-xl transition-all duration-300"
                  >
                    Contact
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
