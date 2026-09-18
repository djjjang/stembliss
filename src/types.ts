export type Language = 'KR' | 'EN';

export interface ConsultationFormData {
  fullName: string;
  phone: string;
  email: string;
  message: string;
  agreedToTerms: boolean;
}

export interface ConsultationSubmission extends ConsultationFormData {
  id: string;
  createdAt: string;
}
