import LearningLayout from "@/components/layouts/learning-layout"
import Image from "next/image"
import { LearningCard } from "@/components/learning-cards"
import Link from "next/link"
import { AlarmClock, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

const courses = [
  {
    id: 1,
    title: "Azure Data Engineering Course with Certification",
    instructor: "Agina Evans",
    progress: 30,
  },
  {
    id: 2,
    title: "Cloud Architecture Fundamentals",
    instructor: "Michael Johnson",
    progress: 0,
  },
  {
    id: 3,
    title: "Machine Learning for Beginners",
    instructor: "Sarah Williams",
    progress: 0,
  },
  {
    id: 4,
    title: "DevOps with Kubernetes",
    instructor: "David Chen",
    progress: 0,
  }
];

export default function LearningPage() {
  return (
    <LearningLayout>
      <div className="bg-blue- space-y-6 h-screen">

        {/* Cards */}
        <div className="grid grid-cols-4 mt-7">
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
                3
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
              <h2 className="font-semibold">Certifications</h2>
              <Image
                src="/my-learning/award.png"
                alt="book-open"
                width={32}
                height={32}
                className="object-cover w-32 h-32 absolute bottom-0 right-0"
              />
              <p className="text-6xl font-bold absolute top-1/2 mt-4 left-8 transform -translate-y-1/2">
                5
              </p>
            </div>
          </div>
          
          {/* Learning Management Button */}
          <div className="col-span-1 w-full bg-yellow- py-2 px-4">
            <div className="bg-green- h-32 flex items-end justify-start rounded-xl">
              <Link 
                href="/learning-management"
                className="bg-[#104BC1] w-full h-14 font-semibold hover:bg-[#0B3589] cursor-pointer tracking-widest flex items-center justify-center text-white rounded-md"
              >
                Learning Management
              </Link>
            </div>
          </div>
        </div>

        {/* meeting Banner */}
        <div className="relative overflow-hidden rounded-xl w- bg-white h-[40%] mx-5">
          <Image
            src="/my-learning/Shapes.png"
            alt="Meeting Banner"
            width={320}
            height={100}
            className="object-cover w-full h-full"
          />

          <div className="absolute inset-0 p-6 bg-red- flex justify-center">
            <div className="w-2/3 bg-green-">            
              <div className="font-bold flex space-x-1">
                <AlarmClock className="w-6 h-6" />
                <p>10:00AM - 12:00AM</p>
              </div>
              <div className="my-2">
                <h2 className="text-3xl font-bold">Azure Data Engineering Course with Certification</h2>
                <div className="flex space-x-1 my-2">
                  <GraduationCap className="h-6 w-6" />
                  <p>Agina Evans</p>
                </div>
                <p>
                  Unlock the power of data-driven decision-making with our Advanced Strategic Analysis Course. Designed for professionals and business leaders, this course delves into the frameworks, methodologies, and tools used to evaluate complex challenges, predict market trends, and craft winning strategies...    
                </p>
              </div>
              <Button className="bg-[#104BC1] w-[50%] h-14 my-3 font-semibold hover:bg-[#0B3589] cursor-pointer tracking-widest flex items-center justify-center text-white rounded-xl">Join Now</Button>
            </div>
            <div className="w-1/3 bg-blue- flex justify-center">
              <Image
                src="/my-learning/chats.png"
                alt="Meeting Banner"
                width={320}
                height={100}
                className="object-cover w-[80%]"
              />
            </div>
          </div>
        </div>

        {/* Learning cards */}
        <div className="grid grid-cols-3 mt-7 gap-7 p-4">
          {courses.map((course) => (
            <LearningCard
              key={course.id}
              title={course.title}
              instructor={course.instructor}
              progress={course.progress}
            />
          ))}
        </div>
      </div>
    </LearningLayout>
  )
}