"use client"
import { GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { GetCoursesQueryResult, GetEnrolledCoursesQueryResult } from "@/sanity.types"
import Link from "next/link"
import Image from "next/image"
import { urlFor } from "@/sanity/lib/image"
import { Loader } from "@/components/ui/loader";


interface LearningCardProps {
  title?: string
  course:
    | GetCoursesQueryResult[number]
    | NonNullable<
        NonNullable<GetEnrolledCoursesQueryResult>["enrolledCourses"][number]["course"]
      >;
  progress: number;
  href: string;
}

export function LearningCard({ title, course, progress, href }: LearningCardProps) {
  return (
    <Link
      href={href}
      prefetch={false}
      className="group hover:no-underline flex"
    >
      <div className="group w-full flex-shrink-0 rounded-lg p-5 cursor-pointer bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100">
        {/* Image/Preview Video Section */}
        <div className="h-[120px] bg-[#D9D9D9] relative flex items-center justify-center rounded-xl">
          {course?.image ? (
            <Image
              src={urlFor(course?.image).url() || ""}
              alt={course?.title || "Course Image"}
              fill
              className="object-cover rounded-xl"
            />
          )  : (
            <div className="h-full w-full flex items-center justify-center bg-muted">
              <Loader size="lg" />
            </div>
          )}
        </div>

        {/* Course Content */}
        <div className="p-4 space-y-3">
          {/* Title */}
          <h3 className="font-semibold text-base line-clamp-2">{title}</h3>

          {/* Instructor */}
          <div className="flex items-center space-x-1 text-gray-600 text-sm">
            <GraduationCap className="h-4 w-4" />
            <span className="truncate">{course?.instructor?.name}</span>
          </div>

          {/* Progress */}
          {progress !== undefined && progress > 0 && (
            <div className="space-y-1">
              <Progress value={progress} className="h-2" />
              <p className="text-primary text-xs font-medium">
                {progress}% Completed
              </p>
            </div>
          )}

          {/* Action Button */}
          <Button
            variant="ghost"
            className={`${progress === 0 ? "mt-9" : ""} w-full text-[#104BC1] font-semibold cursor-pointer hover:text-[#104BC1]/90 hover:bg-blue-300/10 `}
          >
            {/* <Play className="h-4 w-4 mr-2" /> */}
            {progress === 0 ? "Start Learning" : "Continue Learning"}
          </Button>
        </div>
      </div>
    </Link>
  )
}