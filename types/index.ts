export interface OnboardingFormData {
  gender: string;
  about: string;
  currentJob: string;
  companyName?: string;
  interestedProjects: string;
  skillLevel: string;
  country: string;
}

export interface OnboardingFormErrors {
  gender: boolean;
  about: boolean;
  currentJob: boolean;
  companyName?: boolean;
  interestedProjects: boolean;
  skillLevel: boolean;
  country: boolean;
}

export interface OnboardingStepProps {
  formData: OnboardingFormData;
  errors: OnboardingFormErrors;
  handleChange: (field: string, value: string) => void;
  isSubmitting?: boolean;
}