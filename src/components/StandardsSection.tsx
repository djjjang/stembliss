import React from 'react';
import { ShieldCheck, HeartPulse, Scale, Eye } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface StandardsSectionProps {
  lang: Language;
}

export const StandardsSection: React.FC<StandardsSectionProps> = ({ lang }) => {
  const t = translations[lang].standards;

  const standards = [
    {
      title: t.card1Title,
      desc: t.card1Desc,
      badge: t.card1Badge,
      icon: ShieldCheck,
    },
    {
      title: t.card2Title,
      desc: t.card2Desc,
      badge: t.card2Badge,
      icon: HeartPulse,
    },
    {
      title: t.card3Title,
      desc: t.card3Desc,
      badge: t.card3Badge,
      icon: Scale,
    },
    {
      title: t.card4Title,
      desc: t.card4Desc,
      badge: t.card4Badge,
      icon: Eye,
    },
  ];

  return (
    <section
      id="standards"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E7E2D8]/60"
    >
      {/* Eyebrow, Title & Core Axiom Quote */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-[#725B38] uppercase mb-2">
          {t.eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#0B192C] tracking-[-0.015em] mb-4">
          {t.title}
        </h2>
        <p className="font-serif italic text-base sm:text-lg text-[#4A5568]">
          {t.quote}
        </p>
      </div>

      {/* 4 Standard Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {standards.map((item, idx) => {
          const IconComp = item.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-[#E7E2D8] flex flex-col justify-between hover:border-[#DFD2BE] shadow-[0_4px_20px_-2px_rgba(11,25,44,0.03)] hover:shadow-[0_8px_24px_-4px_rgba(11,25,44,0.05)] transition-all duration-300"
            >
              <div>
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-lg bg-[#FAF9F6] border border-[#E7E2D8] flex items-center justify-center mb-5 text-[#725B38]">
                  <IconComp className="w-5 h-5 text-[#C5A880]" />
                </div>

                {/* Card Title */}
                <h3 className="text-base font-semibold text-[#0B192C] mb-3 leading-snug">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-xs text-[#4A5568] leading-[1.8] mb-8">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Tag / Badge */}
              <div className="pt-4 border-t border-[#E7E2D8]/60">
                <span className="text-[10px] font-semibold tracking-[0.15em] text-[#7C8897] uppercase">
                  {item.badge}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
