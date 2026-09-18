import React, { useState } from 'react';
import { Lock, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { Language, ConsultationFormData } from '../types';
import { translations } from '../translations';

interface ConsultationSectionProps {
  lang: Language;
}

export const ConsultationSection: React.FC<ConsultationSectionProps> = ({ lang }) => {
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
    // Simulate real secure submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 750);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      message: '',
      agreedToTerms: false,
    });
    setIsSuccess(false);
    setErrorMessage('');
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#E7E2D8]/60"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Context & Guarantees */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#725B38] uppercase mb-2">
              {t.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#0B192C] tracking-[-0.015em] mb-4">
              {t.title}
            </h2>
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed mb-8">
              {t.subtitle}
            </p>

            {/* Protocol Steps Card */}
            <div className="bg-white rounded-xl p-6 border border-[#E7E2D8] mb-6 shadow-sm">
              <h3 className="text-xs font-semibold tracking-wider text-[#0B192C] uppercase mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
                <span>{t.protocolTitle}</span>
              </h3>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FAF9F6] border border-[#E7E2D8] text-[11px] font-semibold text-[#725B38] flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <p className="text-xs text-[#4A5568] leading-snug">
                    {t.step1}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FAF9F6] border border-[#E7E2D8] text-[11px] font-semibold text-[#725B38] flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <p className="text-xs text-[#4A5568] leading-snug">
                    {t.step2}
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FAF9F6] border border-[#E7E2D8] text-[11px] font-semibold text-[#725B38] flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <p className="text-xs text-[#4A5568] leading-snug">
                    {t.step3}
                  </p>
                </div>
              </div>
            </div>

            {/* Security Guarantee Box */}
            <div className="bg-[#FAF9F6] rounded-xl p-5 border border-[#E7E2D8] flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#DFD2BE] flex items-center justify-center text-[#725B38] shrink-0 mt-0.5">
                <Lock className="w-4 h-4 text-[#C5A880]" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-[#0B192C] mb-1">
                  {t.securityTitle}
                </h4>
                <p className="text-[11px] text-[#7C8897] leading-relaxed">
                  {t.securityDesc}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Confidential Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-2xl p-7 sm:p-9 border border-[#E7E2D8] shadow-[0_8px_30px_rgba(11,25,44,0.04)] relative overflow-hidden">
            {isSuccess ? (
              <div className="py-12 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#FAF9F6] border border-[#DFD2BE] flex items-center justify-center mx-auto mb-5 text-[#285A43]">
                  <CheckCircle2 className="w-8 h-8 text-[#1D6F42]" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-[#0B192C] mb-3">
                  {t.successTitle}
                </h3>
                <p className="text-sm text-[#4A5568] max-w-md mx-auto mb-8 leading-relaxed">
                  {t.successMessage}
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-[#0B192C] border border-[#E7E2D8] hover:border-[#C5A880] hover:bg-[#FAF9F6] transition-colors"
                >
                  {t.newSubmission}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-semibold text-[#0B192C] mb-2">
                    {t.formTitle}
                  </h3>
                  <p className="text-xs text-[#7C8897] leading-relaxed">
                    {t.formSubtitle}
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700">
                    {errorMessage}
                  </div>
                )}

                {/* Name & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#0B192C] uppercase tracking-wider mb-1.5">
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      placeholder={t.namePlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7E2D8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-xs sm:text-sm text-[#1A1C1A] placeholder-[#7C8897]/60 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#0B192C] uppercase tracking-wider mb-1.5">
                      {t.telLabel}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder={t.telPlaceholder}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7E2D8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-xs sm:text-sm text-[#1A1C1A] placeholder-[#7C8897]/60 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#0B192C] uppercase tracking-wider mb-1.5">
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder={t.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7E2D8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-xs sm:text-sm text-[#1A1C1A] placeholder-[#7C8897]/60 outline-none transition-all"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#0B192C] uppercase tracking-wider mb-1.5">
                    {t.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder={t.messagePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E7E2D8] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] text-xs sm:text-sm text-[#1A1C1A] placeholder-[#7C8897]/60 outline-none transition-all resize-none"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="checkbox-terms"
                    checked={formData.agreedToTerms}
                    onChange={(e) =>
                      setFormData({ ...formData, agreedToTerms: e.target.checked })
                    }
                    className="mt-1 w-4 h-4 rounded border-[#DFD2BE] text-[#0B192C] focus:ring-[#C5A880] cursor-pointer"
                  />
                  <label
                    htmlFor="checkbox-terms"
                    className="text-xs text-[#4A5568] leading-relaxed cursor-pointer select-none"
                  >
                    {t.agreementLabel}
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg text-xs sm:text-sm font-semibold tracking-wider text-white bg-[#0B192C] hover:bg-[#12253E] border border-[#0B192C] shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 group disabled:opacity-75 cursor-pointer"
                  >
                    <span>
                      {isSubmitting ? t.submittingButton : t.submitButton}
                    </span>
                    {!isSubmitting && (
                      <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
