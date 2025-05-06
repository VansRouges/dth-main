// import { BookOpen, MessageSquare, CheckSquare } from "lucide-react"
import Image from "next/image"

interface DashboardOverviewProps {
  userName: string | undefined | null
  coursesCount: number
  mentoringCount: number
  projectsCount: number
}

export function DashboardOverview({
  userName = "Henry Osuji",
  coursesCount = 0,
  mentoringCount = 0,
  projectsCount = 0,
}: DashboardOverviewProps) {
  return (
    <div className="relative">
      {/* Banner */}
      <div className="relative overflow-hidden rounded-xl mr-14">
        <Image
          src="/banner.png"
          alt="Dashboard tutorial"
          width={320}
          height={100}
          className="object-cover w-full h-full"
        />

        <div className="absolute inset-0 -mt-32 p-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-white">Dashboard Overview</h2>
          <p className="text-white/80 mt-2">
            Hi {userName}, you&apos;re welcome
          </p>
        </div>
      </div>

      {/* Cards positioned overlapping the banner */}
      <div className="relative z-20 -mt-32 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Courses Enrolled Card */}
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/courses.png"
              alt="Courses Enrolled"
              width={520}
              height={100}
              className="object-cover w-full h-32 md:h-40"
            />
            <p className="text-6xl font-bold text-[#6B5A00] absolute top-1/2 left-8 transform -translate-y-1/2">
              {coursesCount}
            </p>
          </div>

          {/* Mentoring Card */}
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/mentoring.png"
              alt="Mentoring"
              width={520}
              height={100}
              className="object-cover w-full h-32 md:h-40"
            />
            <p className="text-6xl font-bold text-[#081227] absolute top-1/2 left-8 transform -translate-y-1/2">
              {mentoringCount}
            </p>
          </div>

          {/* Projects Card */}
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/projects.png"
              alt="Projects In Progress"
              width={520}
              height={100}
              className="object-cover w-full h-32 md:h-40"
            />
            <p className="text-6xl font-bold text-[#11461D] absolute top-1/2 left-8 transform -translate-y-1/2">
              {projectsCount}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
