/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StorySection } from './components/StorySection';
import { CareSection } from './components/CareSection';
import { StandardsSection } from './components/StandardsSection';
import { LeadershipSection } from './components/LeadershipSection';
import { NetworkSection } from './components/NetworkSection';
import { ConsultationSection } from './components/ConsultationSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { LegalModal } from './components/LegalModal';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('KR');
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [legalModalTopic, setLegalModalTopic] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1A1C1A] flex flex-col selection:bg-[#E5D4BC] selection:text-[#0B192C]">
      {/* Navigation Header */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onOpenConsultationModal={() => setIsConsultModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection
          lang={lang}
          onOpenConsultationModal={() => setIsConsultModalOpen(true)}
        />
        <StorySection lang={lang} />
        <CareSection lang={lang} />
        <StandardsSection lang={lang} />
        <LeadershipSection lang={lang} />
        <NetworkSection lang={lang} />
        <ConsultationSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenLegalModal={(topic) => setLegalModalTopic(topic)}
      />

      {/* Floating Action Badge for Mobile & Desktop */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsConsultModalOpen(true)}
          className="flex items-center gap-2 px-4 py-3 rounded-full text-xs font-semibold tracking-wider text-white bg-[#0B192C] hover:bg-[#12253E] border border-[#C5A880]/50 shadow-[0_8px_24px_rgba(11,25,44,0.3)] hover:shadow-[0_10px_28px_rgba(11,25,44,0.4)] transition-all active:scale-95 group"
          aria-label="Online Consultation"
        >
          <MessageSquare className="w-4 h-4 text-[#C5A880]" />
          <span className="hidden sm:inline">
            {lang === 'KR' ? '1:1 비밀 보장 상담' : '1:1 Confidential Inquiry'}
          </span>
          <span className="sm:hidden">
            {lang === 'KR' ? '상담 예약' : 'Consult'}
          </span>
        </button>
      </div>

      {/* Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultModalOpen}
        onClose={() => setIsConsultModalOpen(false)}
        lang={lang}
      />

      {/* Legal & Compliance Modal */}
      <LegalModal
        topic={legalModalTopic}
        onClose={() => setLegalModalTopic(null)}
        lang={lang}
      />
    </div>
  );
}
