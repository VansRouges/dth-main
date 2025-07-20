"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { OnboardingStepProps } from "@/types";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function OnboardingStep2({ formData, errors, handleChange, isSubmitting }: OnboardingStepProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="projects" className="block text-sm font-medium">
          Which projects are you interested in?
        </label>
        <Select
          value={formData.interestedProjects}
          onValueChange={(value) => handleChange("interestedProjects", value)}
        >
          <SelectTrigger className={`w-full ${errors.interestedProjects ? "border-red-500" : ""}`}>
            <SelectValue placeholder="Select projects" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="web-development">Web Development</SelectItem>
            <SelectItem value="mobile-apps">Mobile Apps</SelectItem>
            <SelectItem value="data-science">Data Science</SelectItem>
            <SelectItem value="machine-learning">Machine Learning</SelectItem>
            <SelectItem value="blockchain">Blockchain</SelectItem>
            <SelectItem value="cloud-computing">Cloud Computing</SelectItem>
          </SelectContent>
        </Select>
        {errors.interestedProjects && (
          <p className="text-red-500 text-xs mt-1">
            Please select projects you&#39;re interested in
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="skill-level" className="block text-sm font-medium">
          Skill Level
        </label>
        <Select
          value={formData.skillLevel}
          onValueChange={(value) => handleChange("skillLevel", value)}
        >
          <SelectTrigger className={`w-full ${errors.skillLevel ? "border-red-500" : ""}`}>
            <SelectValue placeholder="Select skill level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="expert">Expert</SelectItem>
          </SelectContent>
        </Select>
        {errors.skillLevel && (
          <p className="text-red-500 text-xs mt-1">
            Please select your skill level
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="country" className="block text-sm font-medium">
          Country of Residence
        </label>
        <Select
          value={formData.country}
          onValueChange={(value) => handleChange("country", value)}
        >
          <SelectTrigger className={`w-full ${errors.country ? "border-red-500" : ""}`}>
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="uk">UK</SelectItem>
            <SelectItem value="nigeria">Nigeria</SelectItem>
            <SelectItem value="usa">United States</SelectItem>
            <SelectItem value="canada">Canada</SelectItem>
            <SelectItem value="germany">Germany</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.country && (
          <p className="text-red-500 text-xs mt-1">
            Please select your country
          </p>
        )}
      </div>

      <div className="flex gap-4">
        <Button
          type="submit"
          className={cn(
            "flex-1 py-6 bg-[#104BC1] hover:bg-blue-700 text-white",
            isSubmitting && "opacity-50 cursor-not-allowed"
          )}
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
      </div>
    </div>
  );
}