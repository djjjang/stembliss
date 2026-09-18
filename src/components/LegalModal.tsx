import React from 'react';
import { X, ShieldCheck, Scale, FileText } from 'lucide-react';
import { Language } from '../types';

interface LegalModalProps {
  topic: string | null;
  onClose: () => void;
  lang: Language;
}

export const LegalModal: React.FC<LegalModalProps> = ({ topic, onClose, lang }) => {
  if (!topic) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-xl rounded-2xl border border-[#DFD2BE] shadow-2xl relative overflow-hidden max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4.5 border-b border-[#E7E2D8] bg-[#FAF9F6]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#C5A880]" />
            <h3 className="text-base font-serif font-semibold text-[#0B192C]">
              {topic}
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

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 text-xs sm:text-sm text-[#4A5568] space-y-4 leading-relaxed">
          {lang === 'KR' ? (
            <>
              <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E7E2D8]">
                <h4 className="font-semibold text-[#0B192C] mb-1 flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-[#C5A880]" />
                  대한민국 의료법 및 보건복지부 외국인 환자 유치 가이드라인 준수
                </h4>
                <p className="text-xs text-[#7C8897]">
                  STEMBLISS는 보건복지부 등록 외국인 환자 유치 등록 의료 기관 및 컨시어지 파트너십 규정을 엄격히 준수하며 일체의 불법 브로커 수수료 및 음성적 행위를 배제합니다.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-[#0B192C] mb-1">1. 의학적 고지 (Medical Disclaimer)</h5>
                <p className="text-xs">
                  본 플랫폼에서 제공하는 정보는 의학적 진단 또는 처방을 대신할 수 없습니다. 모든 치료 및 줄기세포 시술은 공식 협력 대학병원 및 인증 전문의와의 직접 대면 상담 및 정밀 사전 검사를 거쳐 적합성 여부가 최종 판정됩니다.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-[#0B192C] mb-1">2. 개인정보보호 및 HIPAA / GDPR 대응</h5>
                <p className="text-xs">
                  수집된 의료 정보 및 연락처는 암호화 저장되며, 환자 본인의 명시적 동의 없이 제3자에게 제공되지 않습니다. 귀국 후 요청 시 언제든지 영구 파기될 수 있습니다.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-[#0B192C] mb-1">3. 투명 공정 수수료 체계</h5>
                <p className="text-xs">
                  병원 공식 진료비 및 컨시어지 서비스 비용은 사전 투명 견적으로 환자에게 공개되며, 일체의 숨은 추가 비용을 청구하지 않습니다.
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E7E2D8]">
                <h4 className="font-semibold text-[#0B192C] mb-1 flex items-center gap-1.5">
                  <Scale className="w-4 h-4 text-[#C5A880]" />
                  Regulatory Compliance with Korean Medical Law
                </h4>
                <p className="text-xs text-[#7C8897]">
                  STEMBLISS operates strictly within the Ministry of Health and Welfare regulations for foreign patient facilitation. We forbid unverified medical brokering and non-transparent commission models.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-[#0B192C] mb-1">1. Medical Disclaimer</h5>
                <p className="text-xs">
                  Information provided on this platform does not constitute medical advice or substitute for in-person diagnosis. Final eligibility for regenerative or stem cell therapies is determined solely by certified attending specialists at partner institutions after thorough examination.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-[#0B192C] mb-1">2. Data Privacy & GDPR/HIPAA Security</h5>
                <p className="text-xs">
                  All shared clinical information is protected under end-to-end encryption protocols and never shared without your written authorization.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-[#0B192C] mb-1">3. Transparent Fee Guarantee</h5>
                <p className="text-xs">
                  All institution fees and concierge coordination expenses are presented with upfront itemized clarity without hidden surcharges.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#FAF9F6] border-t border-[#E7E2D8] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-full text-xs font-semibold text-white bg-[#0B192C] hover:bg-[#12253E] transition-colors"
          >
            {lang === 'KR' ? '닫기' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  );
};
