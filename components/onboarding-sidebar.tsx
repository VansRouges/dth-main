import { Check, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function OnboardingSidebar() {
  return (
    <div className="hidden lg:block w-80 shrink-0 border rounded-2xl p-6">
      <div className="space-y-6">
        {/* Video Tutorial Section */}
        <div className="space-y-3">
          <div className="relative rounded-xl overflow-hidden">
            <div className="aspect-video bg-gray-200 relative">
              <Image
                src="/placeholder.svg?height=180&width=320"
                alt="Dashboard tutorial"
                width={320}
                height={100}
                className="object-cover w-full h-20"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-600 text-white rounded-full p-2">
                  <Play className="h-6 w-6 fill-current" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-medium">How to navigate Our Dashboard</h3>
            <p className="text-sm text-gray-500 mt-1">
              We&#39;re glad to have you onboard! Here are some quick tips to get you up and running.
            </p>
          </div>
        </div>

        {/* Complete Profile Section */}
        <div className="space-y-4">
          <div className="space-y-1">
            <h3 className="font-medium">Complete your Profile</h3>
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1/4 rounded-full bg-orange-500"></div>
              <div className="h-1.5 w-3/4 rounded-full bg-gray-200"></div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-200">
                  <Check className="h-3 w-3 text-gray-600" />
                </div>
                <span className="text-sm text-gray-600">Add Personal Information</span>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                  <span className="h-2 w-2 rounded-full bg-white"></span>
                </div>
                <span className="text-sm font-medium">Add Work Experience</span>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-200">
                  <span className="h-2 w-2 rounded-full bg-gray-400"></span>
                </div>
                <span className="text-sm text-gray-600">Add Educational Certificates</span>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-200">
                  <span className="h-2 w-2 rounded-full bg-gray-400"></span>
                </div>
                <span className="text-sm text-gray-600">Add Learning Preferences</span>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Invite Friends Section */}
        <div className="space-y-3 rounded-lg bg-orange-50 p-4">
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg?height=100&width=150"
              alt="Invite friends illustration"
              width={150}
              height={100}
              className="h-24 w-auto"
            />
          </div>
          <div className="text-center">
            <h3 className="font-medium">Invite Friends</h3>
            <p className="text-sm text-gray-600 mt-1">Invite friends and get access to special features</p>
          </div>
          <Button className="w-full bg-orange-400 hover:bg-orange-500 text-white">Invite Friends</Button>
        </div>
      </div>
    </div>
  )
}
