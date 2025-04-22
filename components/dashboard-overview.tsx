import { BookOpen, MessageSquare, CheckSquare } from "lucide-react"

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
    <div className="relative overflow-hidden rounded-xl bg-[#0a2158] p-6 mb-8">
      {/* Abstract shapes */}
      <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#6c5ce7] opacity-50 blur-3xl -translate-y-1/4 translate-x-1/4"></div>
      <div className="absolute right-20 top-10 h-40 w-40 rounded-full bg-[#a29bfe] opacity-40 blur-2xl"></div>
      <div className="absolute right-10 bottom-10 h-32 w-32 rounded-full bg-[#81ecec] opacity-30 blur-xl"></div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h2>
        <p className="text-white/80 mb-8">Hi {userName}, you're welcome</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Courses Enrolled Card */}
          <div className="relative overflow-hidden rounded-lg bg-[#ffeaa7] p-4">
            <div className="absolute bottom-0 right-0 opacity-20">
              <BookOpen className="h-24 w-24 text-[#fdcb6e] rotate-12" strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <p className="text-[#b7941a] font-medium mb-2">Courses Enrolled</p>
              <p className="text-6xl font-bold text-[#8a6d00]">{coursesCount}</p>
            </div>
          </div>

          {/* Mentoring Card */}
          <div className="relative overflow-hidden rounded-lg bg-[#a7c5ff] p-4">
            <div className="absolute bottom-0 right-0 opacity-20">
              <MessageSquare className="h-24 w-24 text-[#4a69bd] rotate-12" strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <p className="text-[#3d5a94] font-medium mb-2">Mentoring</p>
              <p className="text-6xl font-bold text-[#2c3e50]">{mentoringCount}</p>
            </div>
          </div>

          {/* Projects Card */}
          <div className="relative overflow-hidden rounded-lg bg-[#a7ffbe] p-4">
            <div className="absolute bottom-0 right-0 opacity-20">
              <CheckSquare className="h-24 w-24 text-[#27ae60] rotate-12" strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <p className="text-[#219653] font-medium mb-2">Projects in Progress</p>
              <p className="text-6xl font-bold text-[#1e824c]">{projectsCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
