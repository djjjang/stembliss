import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface FooterProps {
  lang: Language;
  onOpenLegalModal: (topic: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenLegalModal }) => {
  const t = translations[lang].footer;

  const handleLegalClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string, href: string) => {
    if (href.startsWith('#medical') || href.startsWith('#privacy') || href.startsWith('#board') || href.startsWith('#patient')) {
      e.preventDefault();
      onOpenLegalModal(label);
    } else {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="main-footer" className="bg-[#0B192C] text-white pt-16 pb-12 border-t border-[#1E3E62]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tier: Wordmark & Links */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 pb-12 border-b border-white/10">
          {/* Wordmark & Description */}
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-serif tracking-[0.2em] font-semibold text-lg sm:text-xl text-white">
                STEMBLISS
              </span>
              <span className="text-[#C5A880] text-sm">✦</span>
            </div>
            <p className="text-xs text-[#C5C6CD] leading-relaxed">
              {t.brandDesc}
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-3">
            {t.links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => handleLegalClick(e, link.label, link.href)}
                className="text-xs text-[#C5C6CD] hover:text-[#E5D4BC] transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Tier: Legal Copyright & Verified Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#7C8897]">
          <div>
            <p>{t.copyright}</p>
          </div>

          <div className="flex items-center gap-3">
            <span>{t.location}</span>
            <span className="text-white/20">•</span>
            <span className="inline-flex items-center gap-1.5 text-[#C5A880]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t.verified}</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
