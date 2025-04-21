"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight, Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { updateUserMetadata } from "../actions/metadata"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import { cn } from "@/lib/utils"


export default function OnBoardingPage() {
  const { isLoaded, user } = useUser()
  const router = useRouter()
  
  const publicMetadata = user?.publicMetadata
  const role = publicMetadata?.role

  // Redirect logic
  useEffect(() => {
    if (isLoaded && publicMetadata && Object.keys(publicMetadata).length > 0) {
      // Role-based routing
      switch (role) {
        case 'admin':
          router.push('/admin')
          break
        case 'instructor':
          router.push('/instructor')
          break
        case 'user':
        default:
          router.push('/dashboard')
          break
      }
    }
  }, [isLoaded, publicMetadata, role, router])

  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    gender: "",
    about: "",
    currentJob: "",
    companyName: "",
    interestedProjects: "",
    skillLevel: "",
    country: "",
  })

  const [errors, setErrors] = useState({
    gender: false,
    about: false,
    currentJob: false,
    companyName: false,
    interestedProjects: false,
    skillLevel: false,
    country: false,
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))

    // Clear error for this field
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: false,
      }))
    }
  }

  const validateStep1 = () => {
    const newErrors = {
      gender: !formData.gender,
      about: !formData.about,
      currentJob: !formData.currentJob,
      companyName: !formData.companyName,
      interestedProjects: false,
      skillLevel: false,
      country: false,
    }

    setErrors(newErrors)

    return !Object.values(newErrors).some((error) => error)
  }

  const validateStep2 = () => {
    const newErrors = {
      gender: false,
      about: false,
      currentJob: false,
      companyName: false,
      interestedProjects: !formData.interestedProjects,
      skillLevel: !formData.skillLevel,
      country: !formData.country,
    }

    setErrors(newErrors)

    return !Object.values(newErrors).some((error) => error)
  }

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2)
    } else {
      toast.error("Please fill in all required fields")
    }
  }

  const handleComplete = async() => {
     // Enhanced validation function
      const validateForm = () => {
        if (!validateStep2()) {
          toast.error("Please fill in all required fields");
          return false;
        }

        // Add specific field validations
        if (formData.currentJob?.length > 100) {
          toast.error("Job title must be less than 100 characters");
          return false;
        }

        if (formData.about && formData.about.length > 500) {
          toast.error("About section must be less than 500 characters");
          return false;
        }

        // Add more validations as needed
        return true;
      };

      if (!validateForm()) return;

      setIsSubmitting(true);

      try {
        await updateUserMetadata({
          userId: user?.id ?? "", // Make sure you have this from your auth provider
          metadata: {
            role: "user",
            currentJob: formData.currentJob,
            about: formData.about,
            skill: formData.skillLevel,
            gender: formData.gender,
            country: formData.country,
            interested: formData.interestedProjects
          }
        });
    
        console.log("Form submission:", formData);
        toast.success("Registration complete!", {
          description: "Your information has been submitted successfully.",
        });
        
        // Redirect to dashboard after successful submission
        router.push('/dashboard');
      } catch (err) {
        console.error("Failed to update metadata:", err);
        toast.error("Registration failed", {
          description: err instanceof Error ? err.message : "There was an error saving your information.",
        });
      } finally {
        setIsSubmitting(false);
      }
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="text-blue-600 font-bold text-lg">
            DataTechHub
          </Link>
          <Button variant="outline" className="bg-blue-100 hover:bg-blue-200 text-blue-800">
            BACK
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold mb-2">Sign up</h1>
            <p className="mb-6 font-semibold">
              Have an account?{" "}
              <Link href="/sign-in" className="text-orange-500 font-semibold hover:underline">
                Login
              </Link>
            </p>

            {step === 1 ? (
            <div className="space-y-6">
              <div className="gap-y-8 space-y-3">
                <label htmlFor="gender" className="block text-sm font-semibold">
                  Gender
                </label>
                <Select value={formData.gender} onValueChange={(value) => handleChange("gender", value)} >
                  <SelectTrigger className={`w-full ${errors.gender ? "border-red-500" : ""}`}>
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
                {errors.gender && <p className="text-red-500 text-xs mt-1">Please select your gender</p>}
              </div>

              <div className="space-y-3 gap-y-8">
                <label htmlFor="about" className="block text-sm font-semibold">
                  Tell us about you
                </label>
                <Select value={formData.about} onValueChange={(value) => handleChange("about", value)}>
                  <SelectTrigger className={`w-full ${errors.about ? "border-red-500" : ""}`}>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">To Change Career</SelectItem>
                    <SelectItem value="professional">Gain experience working with new tools</SelectItem>
                    <SelectItem value="educator">Land a Job</SelectItem>
                    <SelectItem value="researcher">Land a new job</SelectItem>
                    <SelectItem value="other">Become 10X better professional</SelectItem>
                    <SelectItem value="other">Others</SelectItem>
                  </SelectContent>
                </Select>
                {errors.about && <p className="text-red-500 text-xs mt-1">Please tell us about yourself</p>}
              </div>

              <div className="space-y-3 gap-y-8">
                <label htmlFor="job-title" className="block text-sm font-semibold">
                  Current Job Title
                </label>
                <Select value={formData.currentJob} onValueChange={(value) => handleChange("currentJob", value)}>
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
                      "Others"
                    ].map((role, index) => {
                      const value = role.toLowerCase().replace(/\s+/g, '-').replace('/', '-');
                      return (
                        <SelectItem key={index} value={value}>
                          {role}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                {errors.currentJob && <p className="text-red-500 text-xs mt-1">Please select your job title</p>}
              </div>

              <div className="space-y-3 gap-y-8">
                <label htmlFor="company" className="block text-sm font-semibold">
                  Company Name
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Company Name"
                  className="w-full"
                  value={formData.companyName}
                  onChange={(e) => handleChange("companyName", e.target.value)}
                />
                {errors.companyName && <p className="text-red-500 text-xs mt-1">Please enter your company name</p>}
              </div>

              <Button onClick={handleNext} className="w-full py-6 bg-[#104BC1] hover:bg-blue-700 text-white flex items-center justify-center">
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
             ) : (
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
                    <p className="text-red-500 text-xs mt-1">Please select projects you&#39;re interested in</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="skill-level" className="block text-sm font-medium">
                    Skill Level
                  </label>
                  <Select value={formData.skillLevel} onValueChange={(value) => handleChange("skillLevel", value)}>
                    <SelectTrigger className={`w-full ${errors.skillLevel ? "border-red-500" : ""}`}>
                      <SelectValue placeholder="Select skill level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="expert">Expert</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.skillLevel && <p className="text-red-500 text-xs mt-1">Please select your skill level</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="country" className="block text-sm font-medium">
                    Country of Residence
                  </label>
                  <Select value={formData.country} onValueChange={(value) => handleChange("country", value)}>
                    <SelectTrigger className={`w-full ${errors.country ? "border-red-500" : ""}`}>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="uk">UK</SelectItem>
                      <SelectItem value="nigeria">Nigeria</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.country && <p className="text-red-500 text-xs mt-1">Please select your country</p>}
                </div>

                <div className="flex gap-4">
                  <Button 
                    className={cn("flex-1 py-6 bg-[#104BC1] hover:bg-blue-700 text-white", isSubmitting && "opacity-50 cursor-not-allowed")}
                    onClick={handleComplete}
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
            )}
          </div>

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
  )
}

