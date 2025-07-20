"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { OnboardingStepProps } from "@/types";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function OnboardingStep1({ formData, errors, handleChange }: OnboardingStepProps) {
  return (
    <div className="space-y-6">
      <div className="gap-y-8 space-y-3">
        <label htmlFor="gender" className="block text-sm font-semibold">
          Gender
        </label>
        <Select
          value={formData.gender}
          onValueChange={(value) => handleChange("gender", value)}
        >
          <SelectTrigger className={`w-full ${errors.gender ? "border-red-500" : ""}`}>
            <SelectValue placeholder="Select Gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
          </SelectContent>
        </Select>
        {errors.gender && (
          <p className="text-red-500 text-xs mt-1">Please select your gender</p>
        )}
      </div>

      <div className="space-y-3 gap-y-8">
        <label htmlFor="about" className="block text-sm font-semibold">
          Tell us about you
        </label>
        <Select
          value={formData.about}
          onValueChange={(value) => handleChange("about", value)}
        >
          <SelectTrigger className={`w-full ${errors.about ? "border-red-500" : ""}`}>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="student">To Change Career</SelectItem>
            <SelectItem value="professional">
              Gain experience working with new tools
            </SelectItem>
            <SelectItem value="educator">Land a Job</SelectItem>
            <SelectItem value="researcher">Land a new job</SelectItem>
            <SelectItem value="other">
              Become 10X better professional
            </SelectItem>
            <SelectItem value="other">Others</SelectItem>
          </SelectContent>
        </Select>
        {errors.about && (
          <p className="text-red-500 text-xs mt-1">
            Please tell us about yourself
          </p>
        )}
      </div>

      <div className="space-y-3 gap-y-8">
        <label htmlFor="job-title" className="block text-sm font-semibold">
          Current Job Title
        </label>
        <Select
          value={formData.currentJob}
          onValueChange={(value) => handleChange("currentJob", value)}
        >
          <SelectTrigger className={`w-full ${errors.currentJob ? "border-red-500" : ""}`}>
            <SelectValue placeholder="Select job title" />
          </SelectTrigger>
          <SelectContent>
            {[
              "Software Engineer / Developer",
              "Product Analyst",
              "Business Analyst",
              "Data Analyst",
              "Data Scientist",
              "Statistician",
              "Data Engineer",
              "ML Ops Engineer",
              "Students",
              "Others",
            ].map((role, index) => {
              const value = role
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace("/", "-");
              return (
                <SelectItem key={index} value={value}>
                  {role}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
        {errors.currentJob && (
          <p className="text-red-500 text-xs mt-1">
            Please select your job title
          </p>
        )}
      </div>

      <div className="space-y-3 gap-y-8">
        <label htmlFor="company" className="block text-sm font-semibold">
          Company Name
        </label>
        <Input
          id="company"
          type="text"
          placeholder="Company Name"
          className={`w-full ${errors.companyName ? "border-red-500" : ""}`}
          value={formData.companyName}
          onChange={(e) => handleChange("companyName", e.target.value)}
        />
        {errors.companyName && (
          <p className="text-red-500 text-xs mt-1">
            Please enter your company name
          </p>
        )}
      </div>

      <Button
        type="button"
        className="w-full py-6 bg-[#104BC1] hover:bg-blue-700 text-white flex items-center justify-center"
      >
        Next <ChevronRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}