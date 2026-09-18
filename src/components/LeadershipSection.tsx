import React, { useState } from 'react';
import {
  GraduationCap,
  Sparkles,
  Award,
  Globe2,
  Tv,
  Check,
  ZoomIn,
  Maximize2,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import doctorImg from '../assets/images/doctor_sanguk_park.jpg';
import { DoctorImageModal } from './DoctorImageModal';

interface LeadershipSectionProps {
  lang: Language;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ lang }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const t = translations[lang].leadership;

  return (
    <section
      id="director"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E7E2D8]/60"
    >
      {/* Eyebrow & Title */}
      <div className="mb-14">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-[#725B38] uppercase mb-2">
          {t.eyebrow}
        </p>
        <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#0B192C] tracking-[-0.015em]">
          {t.title}
        </h2>
      </div>

      {/* Two-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Doctor Profile Card */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#E7E2D8] shadow-[0_4px_24px_-2px_rgba(11,25,44,0.04)]">
          {/* Header Area with Portrait & Key Info */}
          <div className="flex flex-col sm:flex-row gap-6 items-start pb-7 border-b border-[#E7E2D8]">
            {/* Interactive Portrait with Click-to-Enlarge Modal */}
            <button
              type="button"
              onClick={() => setIsImageModalOpen(true)}
              className="w-28 h-36 sm:w-36 sm:h-44 shrink-0 rounded-xl overflow-hidden border border-[#DFD2BE] shadow-sm bg-[#FAF9F6] relative group cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-[#C5A880] transition-all hover:shadow-md hover:border-[#C5A880]"
              aria-label={lang === 'KR' ? '박상욱 대표원장 프로필 사진 크게 보기' : 'Click to view Dr. Sanguk Park full photo'}
              title={lang === 'KR' ? '클릭하여 사진 크게 보기' : 'Click to view full photo'}
            >
              <img
                src={doctorImg}
                alt="Dr. Sanguk Park, MD"
                className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/doctor_sanguk_park.jpg';
                }}
              />

              {/* Hover Dark Overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-[#0B192C]/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white backdrop-blur-[1px]">
                <ZoomIn className="w-5 h-5 mb-1 text-white drop-shadow" />
                <span className="text-[10px] font-medium tracking-wider drop-shadow">
                  {lang === 'KR' ? '확대 보기' : 'View Full'}
                </span>
              </div>

              {/* Corner Expand Indicator Badge */}
              <div className="absolute bottom-1.5 right-1.5 p-1 rounded-md bg-black/60 text-white/90 group-hover:bg-[#0B192C] transition-colors shadow-sm">
                <Maximize2 className="w-3 h-3" />
              </div>
            </button>

            <div className="flex-1 min-w-0">
              <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#F2EFE9] border border-[#DFD2BE] text-[10px] font-semibold tracking-widest text-[#725B38] mb-2.5">
                {t.directorBadge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#0B192C] tracking-tight mb-2">
                {t.doctorName}
              </h3>

              <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed mb-4">
                {t.doctorRole}
              </p>

              {/* Tag Pills */}
              <div className="flex flex-wrap gap-1.5">
                {t.doctorTags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-block px-2 py-0.5 rounded bg-[#FAF9F6] border border-[#E7E2D8] text-[11px] text-[#4A5568] leading-tight"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Structured Credential Groups */}
          <div className="pt-6 space-y-6">
            {/* Education & Career */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0B192C] uppercase mb-3">
                <GraduationCap className="w-4 h-4 text-[#C5A880]" />
                <span>{t.educationTitle}</span>
              </div>
              <ul className="space-y-1.5 pl-6 text-xs text-[#4A5568] leading-relaxed">
                {t.educationList.map((item, idx) => (
                  <li key={idx} className="relative before:content-['•'] before:absolute before:-left-3 before:text-[#C5A880]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialization */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0B192C] uppercase mb-3">
                <Sparkles className="w-4 h-4 text-[#C5A880]" />
                <span>{t.specializationTitle}</span>
              </div>
              <ul className="space-y-1.5 pl-6 text-xs text-[#4A5568] leading-relaxed">
                {t.specializationList.map((item, idx) => (
                  <li key={idx} className="relative before:content-['•'] before:absolute before:-left-3 before:text-[#C5A880]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Academic Memberships */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0B192C] uppercase mb-2">
                <Award className="w-4 h-4 text-[#C5A880]" />
                <span>{t.membershipTitle}</span>
              </div>
              <p className="text-xs text-[#4A5568] leading-relaxed pl-6">
                {t.membershipDesc}
              </p>
            </div>

            {/* Research & Global Network */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0B192C] uppercase mb-3">
                <Globe2 className="w-4 h-4 text-[#C5A880]" />
                <span>{t.networkTitle}</span>
              </div>
              <ul className="space-y-1.5 pl-6 text-xs text-[#4A5568] leading-relaxed">
                {t.networkList.map((item, idx) => (
                  <li key={idx} className="relative before:content-['•'] before:absolute before:-left-3 before:text-[#C5A880]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Media Appearances */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#0B192C] uppercase mb-3">
                <Tv className="w-4 h-4 text-[#C5A880]" />
                <span>{t.mediaTitle}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pl-6">
                {t.mediaItems.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-[#FAF9F6] border border-[#E7E2D8] text-xs"
                  >
                    <span className="font-semibold text-[#0B192C] block mb-0.5">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-[#7C8897] leading-tight block">
                      {item.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Executive Coordination Team */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <div className="mb-8">
            <div className="flex items-center justify-between text-[11px] font-semibold tracking-widest text-[#7C8897] uppercase mb-2">
              <span>{t.teamEyebrow}</span>
              <span className="text-[10px] text-[#C5A880]">{t.teamCategory}</span>
            </div>
            <h3 className="text-2xl font-serif font-normal text-[#0B192C] tracking-tight mb-3">
              {t.teamTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#4A5568] leading-relaxed">
              {t.teamDesc}
            </p>
          </div>

          {/* Member List Cards */}
          <div className="space-y-4">
            {t.teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 border border-[#E7E2D8] shadow-sm flex items-start gap-4 hover:border-[#DFD2BE] transition-colors"
              >
                {/* Initials Badge */}
                <div className="w-11 h-11 rounded-lg bg-[#F2EFE9] border border-[#DFD2BE] flex items-center justify-center text-[#725B38] font-serif text-sm font-semibold shrink-0">
                  {member.initial}
                </div>

                {/* Member Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-1 mb-1">
                    <h4 className="text-sm font-semibold text-[#0B192C]">
                      {member.name}
                    </h4>
                  </div>
                  <div className="text-[11px] font-medium text-[#7C8897] mb-2 tracking-wide">
                    {member.role}
                  </div>
                  <p className="text-xs text-[#4A5568] leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Doctor Photo Detail Popup Modal */}
      <DoctorImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        lang={lang}
      />
    </section>
  );
};
