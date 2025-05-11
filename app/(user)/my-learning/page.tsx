import LearningLayout from "@/components/learning-layout"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LearningCard } from "@/components/learning-cards"



export default function LearningPage() {
  return (
    <LearningLayout>
      <div className="bg-blue- space-y-6 h-screen">

        <div className="grid grid-cols-4 mt-7">
          {/* Cards */}
          <div className="flex space-x-3 bg-red- w-full col-span-3 px-4 py-2 flex-1">
            <div className="w-1/3 bg-[#FFED8A] text-[#6B5A00] p-3 h-32 rounded-xl relative overflow-hidden">
              <h2 className="font-semibold">Currently Enrolled</h2>
              <Image
                src="/my-learning/book-open.png"
                alt="book-open"
                width={32}
                height={32}
                className="object-cover w-32 h-32 absolute bottom-0 right-0"
              />
              <p className="text-6xl font-bold absolute top-1/2 mt-4 left-8 transform -translate-y-1/2">
                1
              </p>
            </div>
            <div className="w-1/3 bg-[#B5C7EC] text-[#081227] p-3 h-32 rounded-xl relative overflow-hidden">
              <h2 className="font-semibold">Enrollment Completed</h2>
              <Image
                src="/my-learning/pc-user.png"
                alt="book-open"
                width={32}
                height={32}
                className="object-cover w-40 h-32 absolute bottom-0 right-0"
              />
              <p className="text-6xl font-bold absolute top-1/2 mt-4 left-8 transform -translate-y-1/2">
                1
              </p>
            </div>
            <div className="w-1/3 bg-[#9CD7A9] text-[#11461D] p-3 h-32 rounded-xl relative overflow-hidden">
              <h2 className="font-semibold">Certification</h2>
              <Image
                src="/my-learning/award.png"
                alt="book-open"
                width={32}
                height={32}
                className="object-cover w-32 h-32 absolute bottom-0 right-0"
              />
              <p className="text-6xl font-bold absolute top-1/2 mt-4 left-8 transform -translate-y-1/2">
                1
              </p>
            </div>
          </div>
          
          {/* Learning Manangement Button */}
          <div className="col-span-1 w-full bg-yellow- py-2 px-4">
            <div className="bg-green- h-32 flex items-end justify-start rounded-xl">
              <Button className="bg-[#104BC1] w-full h-14 font-semibold hover:bg-[#0B3589] cursor-pointer tracking-widest">
                Learning Management
              </Button>
            </div>
          </div>
        </div>

        {/* Learning cards */}
        <div className="grid grid-cols-4 mt-7 space-x-10 p-4">
          <LearningCard
            title="Azure Data Engineering Course with Certification"
            instructor="Agina Evans"
            progress={30}
          />
          <LearningCard
            title="Azure Data Engineering Course with Certification"
            instructor="Agina Evans"
            progress={0}
          />
          <LearningCard
            title="Azure Data Engineering Course with Certification"
            instructor="Agina Evans"
            progress={0}
          />
          <LearningCard
            title="Azure Data Engineering Course with Certification"
            instructor="Agina Evans"
            progress={0}
          />
        </div>
    
      </div>
    </LearningLayout>
  )
}
