"use client";
import { useState } from "react";
import { ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { OnboardingStep1 } from "./OnboardingStep1";
import { OnboardingStep2 } from "./OnboardingStep2";
import { OnboardingFormData, OnboardingFormErrors, OnboardingStepProps } from "@/types";
import Link from "next/link";

interface OnboardingFormProps {
  onSubmit: (formData: OnboardingFormData) => Promise<void>;
  isSubmitting: boolean;
}

export function OnboardingForm({ onSubmit, isSubmitting }: OnboardingFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<OnboardingFormData>({
    gender: "",
    about: "",
    currentJob: "",
    companyName: "",
    interestedProjects: "",
    skillLevel: "",
    country: "",
  });

  const [errors, setErrors] = useState<OnboardingFormErrors>({
    gender: false,
    about: false,
    currentJob: false,
    companyName: false,
    interestedProjects: false,
    skillLevel: false,
    country: false,
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: false,
      }));
    }
  };

  const validateStep1 = () => {
    const newErrors = {
      gender: !formData.gender,
      about: !formData.about,
      currentJob: !formData.currentJob,
      companyName: !formData.companyName,
      interestedProjects: false,
      skillLevel: false,
      country: false,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const validateStep2 = () => {
    const newErrors = {
      gender: false,
      about: false,
      currentJob: false,
      companyName: false,
      interestedProjects: !formData.interestedProjects,
      skillLevel: !formData.skillLevel,
      country: !formData.country,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleNext = () => {
    if (validateStep1()) setStep(2);
  };

  const handleSubmit = async () => {
    if (validateStep2()) {
      await onSubmit(formData);
    }
  };

  const commonProps: OnboardingStepProps = {
    formData,
    errors,
    handleChange,
    isSubmitting,
  };

  return (
    <div className="max-w-md">
      <h1 className="text-2xl font-bold mb-2">Sign up</h1>
      <p className="mb-6 font-semibold">
        Have an account? 
        <Link href="/sign-in" className="text-orange-500 font-semibold hover:underline ml-1">
          Login
        </Link>
      </p>

      {step === 1 ? (
        <>
          <OnboardingStep1 {...commonProps} />
          <Button
            onClick={handleNext}
            className="w-full py-6 bg-[#104BC1] hover:bg-blue-700 text-white flex items-center justify-center mt-8"
          >
            Next <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </>
      ) : (
        <>
          <OnboardingStep2 {...commonProps} />
          <Button
            onClick={handleSubmit}
            className="w-full py-6 bg-[#104BC1] hover:bg-blue-700 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Loader2 className="animate-spin" /> Processing...
            </span>
          ) : (
            "Complete Registration"
          )}
          </Button>
        </>
      )}
    </div>
  );
}
<Button/>