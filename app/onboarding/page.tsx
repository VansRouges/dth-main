"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import { toast } from "sonner";
import { updateUserMetadata } from "../actions/metadata";
import { OnboardingHeader } from "@/components/onboarding/OnboardingHeader";
import { OnboardingForm } from "@/components/onboarding/OnboardingForm";

export default function OnBoardingPage() {
  const { isLoaded, user } = useUser();
  const router = useRouter();
  const publicMetadata = user?.publicMetadata;
  const role = publicMetadata?.role;

  useEffect(() => {
    if (isLoaded && publicMetadata && Object.keys(publicMetadata).length > 0) {
      switch (role) {
        case "admin":
          router.push("/admin");
          break;
        case "instructor":
          router.push("/instructor");
          break;
        case "user":
        default:
          router.push("/dashboard");
          break;
      }
    }
  }, [isLoaded, publicMetadata, role, router]);

  interface OnboardingFormData {
    currentJob: string;
    about: string;
    skillLevel: string;
    gender: string;
    country: string;
    interestedProjects: string;
  }

  interface UpdateUserMetadataParams {
    userId: string;
    metadata: {
      role: "user" | "admin" | "instructor";
      currentJob: string;
      about: string;
      skill: string;
      gender: string;
      country: string;
      interested: string;
    };
  }

  const handleSubmit = async (formData: OnboardingFormData): Promise<void> => {
    try {
      await updateUserMetadata({
        userId: user?.id ?? "",
        metadata: {
          role: "user",
          currentJob: formData.currentJob,
          about: formData.about,
          skill: formData.skillLevel,
          gender: formData.gender,
          country: formData.country,
          interested: formData.interestedProjects,
        },
      } as UpdateUserMetadataParams);

      toast.success("Registration complete!", {
        description: "Your information has been submitted successfully.",
      });
      router.push("/dashboard");
    } catch (err: unknown) {
      console.error("Failed to update metadata:", err);
      toast.error("Registration failed", {
        description: err instanceof Error ? err.message : "There was an error saving your information.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <OnboardingHeader />
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <OnboardingForm onSubmit={handleSubmit} isSubmitting={false} />
          
          <div className="hidden md:block max-h-[85vh] p overflow-hidden">
            <Image
              src="/auth.png"
              alt="Person working on computer"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}