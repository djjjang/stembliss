import React, { useState } from 'react';
import { X, Lock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language, ConsultationFormData } from '../types';
import { translations } from '../translations';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const t = translations[lang].consultation;

  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    phone: '',
    email: '',
    message: '',
    agreedToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage(lang === 'KR' ? '성함을 입력해 주세요.' : 'Please enter your full name.');
      return;
    }
    if (!formData.phone.trim()) {
      setErrorMessage(lang === 'KR' ? '연락처를 입력해 주세요.' : 'Please enter your phone number.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage(lang === 'KR' ? '올바른 이메일 주소를 입력해 주세요.' : 'Please enter a valid email address.');
      return;
    }
    if (!formData.agreedToTerms) {
      setErrorMessage(
        lang === 'KR'
          ? '개인정보 수집 및 상담 목적 이용에 동의해 주세요.'
          : 'Please agree to the privacy policy.'
      );
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  const handleResetAndClose = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      message: '',
      agreedToTerms: false,
    });
    setIsSuccess(false);
    setErrorMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-lg rounded-2xl border border-[#DFD2BE] shadow-[0_20px_50px_rgba(11,25,44,0.25)] relative overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-[#E7E2D8] bg-[#FAF9F6]">
          <div>
            <div className="text-[10px] font-semibold tracking-widest text-[#725B38] uppercase">
              STEMBLISS CONCIERGE
            </div>
            <h3 className="text-lg font-serif font-semibold text-[#0B192C]">
              {t.formTitle}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white text-[#7C8897] hover:text-[#0B192C] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSuccess ? (
            <div className="py-8 text-center">
              <div className="w-14 h-14 rounded-full bg-[#FAF9F6] border border-[#DFD2BE] flex items-center justify-center mx-auto mb-4 text-[#1D6F42]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-serif font-semibold text-[#0B192C] mb-2">
                {t.successTitle}
              </h4>
              <p className="text-xs text-[#4A5568] max-w-sm mx-auto mb-6 leading-relaxed">
                {t.successMessage}
              </p>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#0B192C] hover:bg-[#12253E] transition-colors"
              >
                {lang === 'KR' ? '확인' : 'Close'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-[#7C8897] leading-relaxed">
                {t.formSubtitle}
              </p>

              {errorMessage && (
                <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
                  {errorMessage}
                </div>
              )}

              <div>
                <label className="block text-[11px] font-semibold text-[#0B192C] uppercase tracking-wider mb-1">
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  placeholder={t.namePlaceholder}
                  className="w-full px-3.5 py-2 rounded-lg border border-[#E7E2D8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-xs text-[#1A1C1A] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#0B192C] uppercase tracking-wider mb-1">
                    {t.telLabel}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder={t.telPlaceholder}
                    className="w-full px-3.5 py-2 rounded-lg border border-[#E7E2D8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-xs text-[#1A1C1A] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#0B192C] uppercase tracking-wider mb-1">
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder={t.emailPlaceholder}
                    className="w-full px-3.5 py-2 rounded-lg border border-[#E7E2D8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-xs text-[#1A1C1A] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#0B192C] uppercase tracking-wider mb-1">
                  {t.messageLabel}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder={t.messagePlaceholder}
                  className="w-full px-3.5 py-2 rounded-lg border border-[#E7E2D8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-xs text-[#1A1C1A] outline-none resize-none"
                />
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="modal-terms"
                  checked={formData.agreedToTerms}
                  onChange={(e) =>
                    setFormData({ ...formData, agreedToTerms: e.target.checked })
                  }
                  className="mt-0.5 w-3.5 h-3.5 rounded border-[#DFD2BE] text-[#0B192C] focus:ring-[#C5A880]"
                />
                <label
                  htmlFor="modal-terms"
                  className="text-[11px] text-[#4A5568] leading-tight cursor-pointer"
                >
                  {t.agreementLabel}
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-5 rounded-lg text-xs font-semibold tracking-wider text-white bg-[#0B192C] hover:bg-[#12253E] border border-[#0B192C] transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>
                    {isSubmitting ? t.submittingButton : t.submitButton}
                  </span>
                  {!isSubmitting && (
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A880] group-hover:translate-x-0.5 transition-transform" />
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-[#FAF9F6] border-t border-[#E7E2D8] flex items-center justify-center gap-2 text-[11px] text-[#7C8897]">
          <Lock className="w-3.5 h-3.5 text-[#C5A880]" />
          <span>{t.securityTitle}</span>
        </div>
      </div>
    </div>
  );
};
