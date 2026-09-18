import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
  onOpenConsultationModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  onOpenConsultationModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.story, href: '#story' },
    { label: t.care, href: '#care' },
    { label: t.standards, href: '#standards' },
    { label: t.medicalDirector, href: '#director' },
    { label: t.network, href: '#network' },
    { label: t.contact, href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#E7E2D8] shadow-[0_4px_20px_-2px_rgba(11,25,44,0.03)] py-3.5'
          : 'bg-[#FAF9F6]/85 backdrop-blur-sm border-b border-[#E7E2D8]/60 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group tracking-widest text-[#0B192C] font-semibold text-lg sm:text-xl font-serif"
          >
            <span className="tracking-[0.2em] font-semibold">STEMBLISS</span>
            <span className="text-[#C5A880] text-sm group-hover:rotate-45 transition-transform duration-300">✦</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs tracking-wider text-[#4A5568] hover:text-[#0B192C] transition-colors font-medium relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C5A880] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Language Toggle */}
            <div
              id="language-switcher"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#E7E2D8] bg-white text-xs text-[#4A5568]"
            >
              <Globe className="w-3.5 h-3.5 text-[#C5A880]" />
              <button
                type="button"
                id="btn-lang-kr"
                onClick={() => onLanguageChange('KR')}
                className={`px-1.5 py-0.5 rounded transition-colors font-medium ${
                  lang === 'KR'
                    ? 'bg-[#0B192C] text-white font-semibold'
                    : 'text-[#4A5568] hover:text-[#0B192C]'
                }`}
              >
                KR
              </button>
              <span className="text-[#C5C6CD] text-[10px]">/</span>
              <button
                type="button"
                id="btn-lang-en"
                onClick={() => onLanguageChange('EN')}
                className={`px-1.5 py-0.5 rounded transition-colors font-medium ${
                  lang === 'EN'
                    ? 'bg-[#0B192C] text-white font-semibold'
                    : 'text-[#4A5568] hover:text-[#0B192C]'
                }`}
              >
                EN
              </button>
            </div>

            {/* Primary Consultation Action */}
            <button
              type="button"
              id="btn-nav-consultation"
              onClick={onOpenConsultationModal}
              className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-white bg-[#0B192C] hover:bg-[#12253E] border border-[#0B192C] transition-all shadow-sm hover:shadow active:scale-[0.98]"
            >
              <span>{t.bookConsultation}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <div className="flex items-center border border-[#E7E2D8] rounded-full px-2 py-0.5 bg-white text-[11px]">
              <button
                type="button"
                onClick={() => onLanguageChange(lang === 'KR' ? 'EN' : 'KR')}
                className="font-medium text-[#0B192C]"
              >
                {lang === 'KR' ? 'KR' : 'EN'}
              </button>
            </div>
            <button
              type="button"
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#0B192C] hover:text-[#C5A880] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="sm:hidden bg-[#FAF9F6] border-b border-[#E7E2D8] px-5 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-2.5 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-[#1A1C1A] py-1.5 border-b border-[#E7E2D8]/40 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-[#C5A880] text-xs">→</span>
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultationModal();
              }}
              className="w-full py-2.5 rounded-full text-xs font-semibold text-white bg-[#0B192C] hover:bg-[#12253E] text-center"
            >
              {t.bookConsultation}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
