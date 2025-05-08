import { Check, MoveRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function OnboardingSidebar() {
  return (
    <div className="hidden lg:block w-full shrink-0 rounded-2xl p-6">
      <div className="space-y-6">
        {/* Video Tutorial Section */}
        <div className="space-y-3 border bg-white p-3 rounded-xl">
          <div className="relative rounded-xl overflow-hidden">
            <div className="aspect-video bg-gray-200 relative">
              <iframe
                className="absolute inset-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your real video URL
                title="Dashboard Tutorial Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">How to navigate Our Dashboard</h3>
            <p className="text-sm mt-1">
              We&#39;re glad to have you onboard! Here are some quick tips to get you up and running.
            </p>
          </div>
        </div>

        {/* Complete Profile Section */}
        <div className="space-y-4 border bg-white p-3 rounded-xl">
          <div className="space-y-1">
            <h3 className="font-semibold">Complete your Profile</h3>
            <div className="flex items-center gap-1">
              <div className="h-1.5 w-1/4 rounded-full bg-orange-500"></div>
              <div className="h-1.5 w-3/4 rounded-full bg-gray-200"></div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#999999]">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-600">Add Personal Information</span>
              </div>
              <MoveRight className="h-4 w-4 text-gray-400" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500">
                  <Check className="h-3 w-3 text-white font-bold" />
                </div>
                <span className="text-sm font-medium">Add Work Experience</span>
              </div>
              {/* <MoveRight className="h-4 w-4 text-gray-400" /> */}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#999999]">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-600">Add Educational Certificates</span>
              </div>
              <MoveRight className="h-4 w-4 text-gray-400" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#999999]">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm text-gray-600">Add Learning Preferences</span>
              </div>
              <MoveRight className="h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Invite Friends Section */}
        <div className="space-y-3 rounded-xl bg-white p-4 border">
          <div className="flex justify-center">
            <div className="flex flex-col space-y-3">
              <h3 className="font-bold">Invite Friends</h3>
              <p className="text-sm mt-1">
                Invite <span className="text-[#0F44B0]">friends</span> and get access to free courses
              </p>
            </div>
            <Image
              src="/friends.png"
              alt="Invite friends illustration"
              width={150}
              height={100}
              className="object-cover w-24 h-full"
            />
          </div>
          <Button className="w-full bg-[#F7D394] hover:bg-primary cursor-pointer text-white">
            Invite Friends
          </Button>
        </div>
      </div>
    </div>
  )
}
