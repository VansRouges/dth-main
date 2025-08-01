"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { OnboardingStepProps } from "@/types";
import { Loader2 } from "lucide-react";
import getCountries, { Country } from "@/lib/countries/getCountries";
import { useState, useEffect } from "react";
import Image from "next/image"

export function OnboardingStep2({
  formData,
  errors,
  handleChange,
}: OnboardingStepProps) {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const countriesData = await getCountries();
        setCountries(countriesData);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
        setCountries([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountries();
  }, []);

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
          <SelectTrigger
            className={`w-full ${errors.interestedProjects ? "border-red-500" : ""}`}
          >
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
          <SelectTrigger
            className={`w-full ${errors.skillLevel ? "border-red-500" : ""}`}
          >
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
          disabled={isLoading}
        >
          <SelectTrigger
            className={`w-full ${errors.country ? "border-red-500" : ""}`}
          >
            <SelectValue
              placeholder={
                isLoading ? "Loading countries..." : "Select country"
              }
            />
          </SelectTrigger>
          <SelectContent>
            {isLoading ? (
              <div className="flex items-center justify-center p-4">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="ml-2">Loading countries...</span>
              </div>
            ) : countries.length > 0 ? (
              countries.map((country: Country) => (
                <SelectItem
                  key={country?.name?.toLowerCase()}
                  value={country?.name?.toLowerCase()}
                >
                  <div className="flex gap-2 items-center">
                    <Image
                      src={country?.flag}
                      width={17}
                      height={15}
                      alt={`${country?.name} flag`}
                      className="rounded-sm object-cover w-auto h-auto flex-shrink-0"
                      loading="lazy"
                      onError={(e) => {
                        // Hide broken images
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="capitalize truncate">{country?.name}</div>
                  </div>
                </SelectItem>
              ))
            ) : (
              <>
                <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
                <SelectItem value="nigeria">🇳🇬 Nigeria</SelectItem>
                <SelectItem value="usa">🇺🇸 United States</SelectItem>
                <SelectItem value="canada">🇨🇦 Canada</SelectItem>
                <SelectItem value="germany">🇩🇪 Germany</SelectItem>
                <SelectItem value="other">🌍 Other</SelectItem>
              </>
            )}
          </SelectContent>
        </Select>
        {errors.country && (
          <p className="text-red-500 text-xs mt-1">
            Please select your country
          </p>
        )}
      </div>

      <div className="flex gap-4"></div>
    </div>
  );
}