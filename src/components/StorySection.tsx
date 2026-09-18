import React from 'react';
import { Shield, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface StorySectionProps {
  lang: Language;
}

export const StorySection: React.FC<StorySectionProps> = ({ lang }) => {
  const t = translations[lang].story;

  return (
    <section
      id="story"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E7E2D8]/60"
    >
      {/* Eyebrow & Title */}
      <div className="mb-12">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-[#725B38] uppercase mb-2">
          {t.eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#0B192C] tracking-[-0.015em]">
          {t.title}
        </h2>
      </div>

      {/* Two Column Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Left Column: Dark Navy Editorial Manifesto Card */}
        <div className="lg:col-span-5 bg-[#0B192C] text-white rounded-2xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-[0_12px_32px_-4px_rgba(11,25,44,0.18)] border border-[#1E3E62]">
          {/* Subtle gold ambient glow */}
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none" />

          <div>
            {/* Quotation Mark 99 */}
            <div className="font-serif text-[#C5A880] text-5xl leading-none mb-6 font-semibold select-none">
              ”
            </div>

            <blockquote className="font-serif text-xl sm:text-2xl text-[#FAF9F6] leading-[1.4] tracking-[-0.01em] font-normal mb-8">
              {t.mainQuote}
            </blockquote>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold tracking-widest text-[#E5D4BC]">
                {t.quoteBadge}
              </div>
              <div className="text-[11px] text-[#C5C6CD] tracking-wide mt-0.5">
                {t.quoteCharter}
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#C5A880]">
              <Shield className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Stats */}
        <div className="lg:col-span-7 flex flex-col justify-between py-1">
          <div className="space-y-6">
            <p className="text-base text-[#4A5568] leading-[1.8]">
              {t.p1}
            </p>

            {/* Emphasized Callout Box */}
            <div className="p-6 rounded-xl bg-[#F2EFE9]/80 border-l-2 border-[#C5A880] text-[#0B192C]">
              <p className="font-serif text-lg sm:text-xl font-normal leading-relaxed text-[#1A1C1A]">
                {t.callout}
              </p>
            </div>

            <p className="text-base text-[#4A5568] leading-[1.8]">
              {t.p2}
            </p>
          </div>

          {/* Stat Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
            <div className="bg-white rounded-xl p-5 border border-[#E7E2D8] shadow-sm">
              <div className="text-3xl font-serif font-normal text-[#0B192C] mb-1">
                {t.stat1Number}
              </div>
              <div className="text-xs font-medium text-[#7C8897] tracking-wide">
                {t.stat1Label}
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-[#E7E2D8] shadow-sm">
              <div className="text-3xl font-serif font-normal text-[#0B192C] mb-1">
                {t.stat2Number}
              </div>
              <div className="text-xs font-medium text-[#7C8897] tracking-wide">
                {t.stat2Label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
