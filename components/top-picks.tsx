"use client"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { CourseCard } from "@/components/course-card"
import { Button } from "@/components/ui/button"

export function TopPicks() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  const courses = [
    {
      title: "Azure Data Engineering Course with Certification",
      instructor: "Agnis Evans",
      price: "NGN 12,000.00",
      duration: "12h20m",
      showPurchaseButton: false,
    },
    {
      title: "Azure Data Engineering Course with Certification",
      instructor: "Agnis Evans",
      price: "NGN 12,000.00",
      duration: "10h30m",
      showPurchaseButton: true,
    },
    {
      title: "Azure Data Engineering Course with Certification",
      instructor: "Agnis Evans",
      price: "NGN 12,000.00",
      duration: "11h45m",
      showPurchaseButton: false,
    },
    {
      title: "Python for Data Science and Machine Learning",
      instructor: "Michael Chen",
      price: "NGN 15,000.00",
      duration: "14h30m",
      showPurchaseButton: false,
    },
    {
      title: "Web Development Bootcamp 2023",
      instructor: "Sarah Johnson",
      price: "NGN 18,000.00",
      duration: "20h15m",
      showPurchaseButton: false,
    },
  ]

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Top picks for you</h2>
        <a href="#" className="text-orange-500 text-sm">
          See more
        </a>
      </div>

      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <Button onClick={scrollLeft} size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-white shadow-md">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Scroll left</span>
          </Button>
        </div>

        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <Button onClick={scrollRight} size="icon" variant="ghost" className="h-8 w-8 rounded-full bg-white shadow-md">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Scroll right</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
