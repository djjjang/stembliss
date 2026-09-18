import React from 'react';
import { SlidersHorizontal, ShieldCheck, RefreshCw, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface CareSectionProps {
  lang: Language;
}

export const CareSection: React.FC<CareSectionProps> = ({ lang }) => {
  const t = translations[lang].care;

  const stages = [
    {
      tag: t.stage1Tag,
      title: t.stage1Title,
      desc: t.stage1Desc,
      badge: t.stage1Badge,
      icon: SlidersHorizontal,
    },
    {
      tag: t.stage2Tag,
      title: t.stage2Title,
      desc: t.stage2Desc,
      badge: t.stage2Badge,
      icon: ShieldCheck,
    },
    {
      tag: t.stage3Tag,
      title: t.stage3Title,
      desc: t.stage3Desc,
      badge: t.stage3Badge,
      icon: RefreshCw,
    },
  ];

  return (
    <section
      id="care"
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

      {/* 3 Stage Process Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stages.map((stage, idx) => {
          const IconComp = stage.icon;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl p-7 border border-[#E7E2D8] flex flex-col justify-between hover:border-[#DFD2BE] shadow-[0_4px_20px_-2px_rgba(11,25,44,0.03)] hover:shadow-[0_8px_24px_-4px_rgba(11,25,44,0.06)] transition-all duration-300 group"
            >
              <div>
                {/* Stage Header Tag & Icon */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E7E2D8]/70">
                  <span className="text-[11px] font-semibold tracking-[0.15em] text-[#7C8897] uppercase">
                    {stage.tag}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#FAF9F6] border border-[#E7E2D8] flex items-center justify-center text-[#725B38] group-hover:text-[#0B192C] group-hover:border-[#C5A880] transition-colors">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>

                {/* Stage Title */}
                <h3 className="text-xl font-serif font-semibold text-[#0B192C] mb-3">
                  {stage.title}
                </h3>

                {/* Stage Description */}
                <p className="text-xs sm:text-sm text-[#4A5568] leading-[1.8] mb-8">
                  {stage.desc}
                </p>
              </div>

              {/* Bottom Verified Badge */}
              <div className="pt-4 border-t border-[#E7E2D8]/60 flex items-start gap-2 text-[11px] text-[#285A43] font-medium leading-tight">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1D6F42] shrink-0 mt-0.5" />
                <span>{stage.badge}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
