import Image from "next/image"

interface DashboardOverviewProps {
  userName: string | undefined | null
  coursesEnrolled: number
  mentoringCount: number
  projectsCount: number
}

export function DashboardOverview({
  userName,
  coursesEnrolled,
  mentoringCount,
  projectsCount,
}: DashboardOverviewProps) {
  return (
    <div className="relative mt-4">
      {/* Banner */}
      <div className="relative mb-16">
        <div className="relative overflow-hidden rounded-bl-lg sm:rounded-bl-[100px] rounded-tr-[100px] rounded-tl-lg rounded-br-lg mr-20 bg-green- h-156 sm:h-52 w-full">
          <Image
            src="/banner.svg"
            alt="Dashboard tutorial"
            width={320}
            height={500}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 sm:-mt-12 p-6 flex flex-col sm:justify-center">
            <h2 className="max-[304px]:text-[18px] max-[369px]:text-[22px] text-[26px] sm:text-3xl font-bold pr-3 text-white w-fit">Dashboard Overview</h2>
            <p className="text-white/80 mt-2 w-fit">
              Hi {userName}, you&apos;re welcome
            </p>
          </div>
        </div>
      </div>

      {/* Cards positioned overlapping the banner */}
      <div className="relative z-20 -mt-140 sm:-mt-32 sm:px-4 xl:px-8">
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:space-x-3 bg-red- w-full col-span-3 px-4 py-2 flex-1">
          {/* Courses Enrolled Card */}
          <div className="sm:w-1/3 bg-[#FFED8A] text-[#6B5A00] p-3 h-32 rounded-xl relative overflow-hidden">
            <h2 className="font-semibold">Courses Enrolled</h2>
            <Image
              src="/my-learning/book-open.svg"
              alt="book-open"
              width={32}
              height={32}
              className="object-cover w-32 h-32 absolute bottom-0 right-0"
            />
            <p className="text-6xl font-bold absolute top-1/2 mt-4 left-8 transform -translate-y-1/2">
            {coursesEnrolled}
            </p>
          </div>
          {/* Mentoring */}
          <div className="sm:w-1/3 bg-[#B5C7EC] text-[#081227] p-3 h-32 rounded-xl relative overflow-hidden">
            <h2 className="font-semibold">Mentoring</h2>
            <Image
              src="/my-learning/pc-user.svg"
              alt="book-open"
              width={32}
              height={32}
              className="object-cover w-40 h-32 absolute bottom-0 right-0"
            />
            <p className="text-6xl font-bold absolute top-1/2 mt-4 left-8 transform -translate-y-1/2">
            {mentoringCount}
            </p>
          </div>
          {/* Projects in Progress */}
          <div className="sm:not-even:w-1/3 bg-[#9CD7A9] text-[#11461D] p-3 h-32 rounded-xl relative overflow-hidden">
            <h2 className="font-semibold">Projects in Progress</h2>
            <Image
              src="/my-learning/award.svg"
              alt="book-open"
              width={32}
              height={32}
              className="object-cover w-32 h-32 absolute bottom-0 right-0"
            />
            <p className="text-6xl font-bold absolute top-1/2 mt-4 left-8 transform -translate-y-1/2">
            {projectsCount}
            </p>
          </div>
        </div>
          
      </div>
    </div>
  )
}
