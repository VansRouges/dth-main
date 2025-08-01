import Image from "next/image"
import Link from "next/link"
import { AlarmClock, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MentorshipCard } from "@/components/mentorship-card"
import { StatsCard } from "../my-learning/page"

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

export default async function LearningPage() {
  return (

    <>
      <div className="space-y-6 min-h-screen">

        {/* Stats Cards Section */}
        <div className="grid grid-cols-1 xl:grid-cols-4 mt-7 px-4">
          <div className="flex gap-4 sm:gap-0 sm:flex-row flex-col sm:space-x-3 w-full sm:col-span-3 sm:px-4 py-2 flex-1">
            <StatsCard 
              title="Active Mentorships" 
              value={3} 
              bgColor="bg-[#FFED8A]" 
              textColor="text-[#6B5A00]" 
              iconPath="/my-learning/book-open.svg" 
            />
            <StatsCard 
              title="Completed Mentorships" 
              value={1} 
              bgColor="bg-[#B5C7EC]" 
              textColor="text-[#081227]" 
              iconPath="/my-learning/pc-user.svg" 
            />
            <StatsCard 
              title="Certifications" 
              value={5} 
              bgColor="bg-[#9CD7A9]" 
              textColor="text-[#11461D]" 
              iconPath="/my-learning/cert.svg" 
            />
          </div>


       
          
          {/* Learning Management Button */}
          <div className="col-span-1 w-full py-2 sm:px-4 flex items-end">
            <Link 
              href="/learning-management"
              className="bg-[#104BC1] p-4 w-full h-14 font-semibold hover:bg-[#0B3589] cursor-pointer tracking-widest flex items-center justify-center text-white rounded-md"
            >
              Learning Management
            </Link>
          </div>
        </div>

        {/* meeting Banner */}
<div className="relative overflow-hidden rounded-xl bg-white mx-5 min-h-[360px]">
  {/* Background Images Layer */}
  <div className="absolute inset-0">
    <Image
      src="/my-learning/Shapes.png"
      alt="Meeting Banner Background"
      width={320}
      height={100}
      className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
    />
    <Image
      src="/my-learning/chats.svg"
      alt="Chat Illustration"
      width={320}
      height={100}
      className="absolute bottom-0 right-0 w-1/2 h-3/4 object-contain opacity-100"
    />
  </div>
  
  {/* Content Layer */}
  <div className="relative z-10 p-6 h-full flex flex-col justify-between min-h-[360px]">
    <div className="space-y-4">
      {/* Time Section */}
      <div className="font-bold flex items-center space-x-2">
        <AlarmClock className="w-6 h-6 text-[#104BC1]" />
        <p className="text-gray-700">10:00AM - 12:00PM</p>
      </div>
      
      {/* Main Content */}
      <div className="space-y-3">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
          Advanced Strategic Analysis
        </h2>
        
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-6 w-6 text-[#104BC1]" />
          <p className="text-gray-600 font-medium">Agina Evans</p>
        </div>
        
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          Unlock the power of data-driven decision-making with our Advanced Strategic Analysis Course. 
          Designed for professionals and business leaders, this course delves into the frameworks, 
          methodologies, and tools used to evaluate complex challenges, predict market trends, 
          and craft winning strategies...
        </p>
      </div>
    </div>
    
    {/* Button Section */}
    <div className="pt-4">
      <Button className="bg-[#104BC1] w-full md:w-1/2 h-12 md:h-14 font-semibold hover:bg-[#0B3589] cursor-pointer tracking-wide flex items-center justify-center text-white rounded-xl transition-colors duration-200">
        Join Now
      </Button>
    </div>
  </div>
</div>
        {/* Learning cards */}
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 p-4">
          {courses.map((course) => (
            <MentorshipCard
              key={course.id}
              title={course.title}
              instructor={course.instructor}
              progress={course.progress}
            />
          ))}
        </div>
      </div>
    </>
  )
}