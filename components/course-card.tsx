"use client"
import { useState } from "react"
import { AlarmClock, GraduationCap} from "lucide-react"
import { Loader } from "@/components/ui/loader";
import { Button } from "@/components/ui/button"
import { urlFor } from "@/sanity/lib/image";
import { CourseModal } from "./course-modal"
import Image from "next/image"
import { GetCoursesQueryResult } from "@/sanity.types"
import { formatPrice } from "@/lib/utils";

interface CourseCardProps {
  course: GetCoursesQueryResult[number]; // Assuming course is an object from the GetCoursesQueryResult array
}

export function CourseCard({ course }: CourseCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Format price as NGN currency
  const formattedPrice = formatPrice(course?.price);
  
  return (
     <>
      <div
        className="group sm:w-[100%] h-[400px] sm:h-[300px] flex-shrink-0 rounded-lg bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image/Preview Video Section */}
        <div className="sm:h-[120px] h-[200px] bg-[#D9D9D9] relative flex items-center justify-center">
          {course?.image ? (
            <Image
              src={urlFor(course?.image).url() || ""}
              alt={course?.title || "Course Image"}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center bg-muted">
              <Loader size={'lg'} className="text-gray-400" />
            </div>
          )}
        </div>

        <div className="p-4 h-[60%]">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-primary">Full course</span>
            <div className="flex items-center gap-1">
              <AlarmClock className="h-4 w-4 text-primary" />
              <span className="text-xs text-primary">
                {course?.duration ? `${course.duration.hour} hours ${course.duration.mins} mins` : '--'}
              </span>
            </div>
          </div>

          {/* This h3 will ensure content stays within 2 lines. */}
          <h3 className="font-bold text-sm mb-2 line-clamp-2">{course?.title}</h3>

          <div className="flex items-center text-gray-900 mb-2 space-x-1">
            <GraduationCap className="h-4 w-4" />
            <span className="text-xs line-clamp-1">{course?.instructor?.name}</span>
          </div>

          <div className="relative h-8 flex items-center justify-center"> 
            <Button
              className="absolute left-0 top-4 w-full tracking-wider font-semibold bg-blue-600 hover:bg-blue-700 text-white text-xs py-2 sm:opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Purchase ({formattedPrice})
            </Button>
            <p className="absolute inset-0 font-bold text-sm opacity-0 sm:opacity-100 group-hover:opacity-0 transition-opacity">
              {formattedPrice}
            </p>
          </div>
        </div>
      </div>

      {/* Course Modal */}
      <CourseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        course={course}
      />
    </>
  )
}