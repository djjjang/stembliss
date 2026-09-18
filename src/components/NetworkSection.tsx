import React from 'react';
import { Building2, Cross, GraduationCap, FlaskConical, Sparkles, Globe } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface NetworkSectionProps {
  lang: Language;
}

export const NetworkSection: React.FC<NetworkSectionProps> = ({ lang }) => {
  const t = translations[lang].network;

  const renderIcon = (type: string) => {
    switch (type) {
      case 'hospital':
        return <Building2 className="w-5 h-5 text-[#C5A880]" />;
      case 'cross':
        return <Cross className="w-5 h-5 text-[#C5A880]" />;
      case 'academic':
        return <GraduationCap className="w-5 h-5 text-[#C5A880]" />;
      case 'flask':
        return <FlaskConical className="w-5 h-5 text-[#C5A880]" />;
      case 'star':
        return <Sparkles className="w-5 h-5 text-[#C5A880]" />;
      case 'globe':
      default:
        return <Globe className="w-5 h-5 text-[#C5A880]" />;
    }
  };

  return (
    <section
      id="network"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E7E2D8]/60"
    >
      {/* Eyebrow, Title & Subtitle */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-[#725B38] uppercase mb-2">
          {t.eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#0B192C] tracking-[-0.015em] mb-4">
          {t.title}
        </h2>
        <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* 6 Institutional Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {t.partners.map((partner, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 border border-[#E7E2D8] flex flex-col items-center text-center justify-center min-h-[140px] hover:border-[#DFD2BE] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_20px_-2px_rgba(11,25,44,0.05)] transition-all duration-300 group"
          >
            {/* Institution Icon */}
            <div className="w-10 h-10 rounded-full bg-[#FAF9F6] border border-[#E7E2D8] flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
              {renderIcon(partner.iconType)}
            </div>

            {/* Institution Title */}
            <h4 className="text-xs sm:text-[13px] font-semibold text-[#0B192C] leading-snug mb-1.5">
              {partner.title}
            </h4>

            {/* Sub-description */}
            <p className="text-[10px] sm:text-[11px] text-[#7C8897] leading-tight">
              {partner.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
