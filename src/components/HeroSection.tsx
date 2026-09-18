import React from 'react';
import { ArrowRight, ShieldCheck, Award, UserCheck, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface HeroSectionProps {
  lang: Language;
  onOpenConsultationModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onOpenConsultationModal,
}) => {
  const t = translations[lang].hero;

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero-section"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Subtle warm ambient diffusion in background */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-gradient-to-b from-[#E5D4BC]/20 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="text-center max-w-4xl mx-auto">
        {/* Eyebrow Pill Tag */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F2EFE9] border border-[#DFD2BE] text-[11px] font-semibold tracking-[0.15em] text-[#725B38] mb-6 shadow-[0_2px_8px_rgba(197,168,128,0.12)]">
          <Sparkles className="w-3 h-3 text-[#C5A880]" />
          <span>{t.badge}</span>
        </div>

        {/* Hero Headline (EB Garamond font) */}
        <h1
          id="hero-title"
          className="text-4xl sm:text-5xl lg:text-[58px] font-serif font-normal text-[#0B192C] leading-[1.18] tracking-[-0.02em] mb-6 text-balance"
        >
          {t.title}
        </h1>

        {/* Subtitle */}
        <p
          id="hero-subtitle"
          className="text-base sm:text-lg text-[#4A5568] max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
        >
          {t.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-14 sm:mb-20">
          <button
            type="button"
            id="btn-hero-primary"
            onClick={onOpenConsultationModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-white bg-[#0B192C] hover:bg-[#12253E] border border-[#0B192C] shadow-[0_4px_16px_rgba(11,25,44,0.15)] hover:shadow-[0_6px_22px_rgba(11,25,44,0.22)] transition-all duration-200 group active:scale-[0.98]"
          >
            <span>{t.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            type="button"
            id="btn-hero-secondary"
            onClick={() => scrollToSection('#story')}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs sm:text-sm font-medium tracking-wide text-[#1A1C1A] bg-white hover:bg-[#FAF9F6] border border-[#E7E2D8] hover:border-[#C5A880] shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all duration-200"
          >
            <span>{t.ctaSecondary}</span>
          </button>
        </div>

        {/* 3 Summary Feature Cards */}
        <div
          id="hero-feature-cards"
          className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left"
        >
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-5 border border-[#E7E2D8] shadow-[0_4px_20px_-2px_rgba(11,25,44,0.03)] hover:border-[#DFD2BE] transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-[#FAF9F6] border border-[#E7E2D8] flex items-center justify-center mb-3 text-[#725B38]">
              <ShieldCheck className="w-5 h-5 text-[#C5A880]" />
            </div>
            <h3 className="text-sm font-semibold text-[#0B192C] mb-1.5 flex items-center gap-1.5">
              {t.card1Title}
            </h3>
            <p className="text-xs text-[#4A5568] leading-relaxed">
              {t.card1Desc}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl p-5 border border-[#E7E2D8] shadow-[0_4px_20px_-2px_rgba(11,25,44,0.03)] hover:border-[#DFD2BE] transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-[#FAF9F6] border border-[#E7E2D8] flex items-center justify-center mb-3 text-[#725B38]">
              <Award className="w-5 h-5 text-[#C5A880]" />
            </div>
            <h3 className="text-sm font-semibold text-[#0B192C] mb-1.5 flex items-center gap-1.5">
              {t.card2Title}
            </h3>
            <p className="text-xs text-[#4A5568] leading-relaxed">
              {t.card2Desc}
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl p-5 border border-[#E7E2D8] shadow-[0_4px_20px_-2px_rgba(11,25,44,0.03)] hover:border-[#DFD2BE] transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-[#FAF9F6] border border-[#E7E2D8] flex items-center justify-center mb-3 text-[#725B38]">
              <UserCheck className="w-5 h-5 text-[#C5A880]" />
            </div>
            <h3 className="text-sm font-semibold text-[#0B192C] mb-1.5 flex items-center gap-1.5">
              {t.card3Title}
            </h3>
            <p className="text-xs text-[#4A5568] leading-relaxed">
              {t.card3Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
