"use client"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { CourseCard } from "@/components/course-card"
import { Button } from "@/components/ui/button"
// import { Course } from "@/types/course"
import { GetCoursesQueryResult } from "@/sanity.types"

interface TopPicksProps {
  courses: GetCoursesQueryResult;
}

export function TopPicks({ courses }: TopPicksProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: "smooth" })
  }

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: "smooth" })
  }

  // Filter top rated courses if needed
  const topRatedCourses = courses.filter(course => course.topRated)

  return (
    <div className="my-8 w-full overflow-hidden">
      <div className="flex items-center justify-between mb-4 px-4">
        <h2 className="text-xl font-bold">Top picks for you</h2>
        {topRatedCourses.length >= 4 && (
          <a href="#" className="text-orange-500 font-semibold text-sm">
            See more
          </a>
        )}
      </div>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto pb-4 px-4 scrollbar-hide"
          style={{ 
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
            scrollSnapType: "x mandatory"
          }}
        >
          {topRatedCourses.length > 0 ? (
            topRatedCourses.map((course) => (
              <div key={course._id} className="flex-shrink-0 w-[300px]">
                <CourseCard course={course} />
              </div>
            ))
          ) : (
            <div className="text-gray-500">No top picks available.</div>
          )}
        </div>

        {topRatedCourses.length >= 4 && (
          <>
            <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
              <Button 
                onClick={scrollLeft} 
                size="icon" 
                variant="ghost" 
                className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-gray-100"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Scroll left</span>
              </Button>
            </div>

            <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
              <Button 
                onClick={scrollRight} 
                size="icon" 
                variant="ghost" 
                className="h-8 w-8 rounded-full bg-white shadow-md hover:bg-gray-100"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Scroll right</span>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}