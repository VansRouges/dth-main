import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronRight } from "lucide-react"

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-white">
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
            <p className="mb-6">
              Have an account?{" "}
              <Link href="/login" className="text-orange-500 hover:underline">
                Login
              </Link>
            </p>

            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="gender" className="block text-sm font-medium">
                  Gender
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="non-binary">Non-binary</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                    <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="about" className="block text-sm font-medium">
                  Tell us about you
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="educator">Educator</SelectItem>
                    <SelectItem value="researcher">Researcher</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="job-title" className="block text-sm font-medium">
                  Current Job Title
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select job title" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="software-engineer">Software Engineer</SelectItem>
                    <SelectItem value="data-scientist">Data Scientist</SelectItem>
                    <SelectItem value="product-manager">Product Manager</SelectItem>
                    <SelectItem value="designer">Designer</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-medium">
                  Company Name
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select or enter company" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="google">Google</SelectItem>
                    <SelectItem value="microsoft">Microsoft</SelectItem>
                    <SelectItem value="amazon">Amazon</SelectItem>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="meta">Meta</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center">
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-[#f8f0e5] px-8 py-3 rounded-full">
                <span className="text-2xl">***</span>
              </div>
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Person working on computer"
                width={500}
                height={500}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

