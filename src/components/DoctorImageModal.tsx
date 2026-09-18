import React, { useEffect } from 'react';
import { X, ZoomIn, ShieldCheck, Award, GraduationCap } from 'lucide-react';
import { Language } from '../types';
import doctorImg from '../assets/images/doctor_sanguk_park.jpg';

interface DoctorImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const DoctorImageModal: React.FC<DoctorImageModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  // ESC key listener to close modal
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={lang === 'KR' ? '박상욱 대표원장 프로필 상세' : 'Dr. Sanguk Park Profile Detail'}
    >
      <div
        className="relative bg-white rounded-2xl border border-[#DFD2BE] shadow-[0_25px_60px_rgba(0,0,0,0.4)] max-w-2xl w-full overflow-hidden flex flex-col max-h-[94vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 bg-[#FAF9F6] border-b border-[#E7E2D8]">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-[#C5A880]" />
            <div>
              <h3 className="text-sm sm:text-base font-serif font-semibold text-[#0B192C] leading-tight">
                {lang === 'KR'
                  ? '박상욱 대표원장 (Dr. Sanguk Park, MD)'
                  : 'Dr. Sanguk Park, MD — Medical Director'}
              </h3>
              <p className="text-[11px] text-[#7C8897] tracking-wider">
                {lang === 'KR'
                  ? '서래셀의원 대표원장 · 서울대학교 의학과 학·석사'
                  : 'Representative Medical Director · Seoul National University'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white text-[#7C8897] hover:text-[#0B192C] transition-colors border border-transparent hover:border-[#E7E2D8] cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Main Image Display */}
        <div className="flex-1 overflow-y-auto bg-[#1A1C1A] flex items-center justify-center p-4 sm:p-6 min-h-[340px] sm:min-h-[460px]">
          <div className="relative max-w-full max-h-[62vh] rounded-lg overflow-hidden shadow-2xl border border-white/10 flex items-center justify-center bg-[#2B2E33]">
            <img
              src={doctorImg}
              alt="Dr. Sanguk Park, MD - Original Portrait"
              className="w-auto h-auto max-h-[62vh] max-w-full object-contain select-none"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/doctor_sanguk_park.jpg';
              }}
            />
          </div>
        </div>

        {/* Modal Bottom Credentials Strip */}
        <div className="px-5 sm:px-6 py-4 bg-[#FAF9F6] border-t border-[#E7E2D8]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-[11px] text-[#4A5568]">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#C5A880] shrink-0" />
              <span>
                {lang === 'KR'
                  ? '서울대학교 의과대학 학·석사'
                  : 'Seoul Nat’l Univ. College of Medicine'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#C5A880] shrink-0" />
              <span>
                {lang === 'KR'
                  ? '20년 임상 경력 및 줄기세포 특허'
                  : '20+ Years Clinical & Stem Cell Patent'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C5A880] shrink-0" />
              <span>
                {lang === 'KR'
                  ? '보건복지부 규범 엄격 준수'
                  : 'Strict Ministry Standards Compliance'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
