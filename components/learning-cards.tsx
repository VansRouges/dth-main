"use client"
import { Book, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { GetCoursesQueryResult, GetEnrolledCoursesQueryResult } from "@/sanity.types"


interface LearningCardProps {
  title?: string
  course:
    | GetCoursesQueryResult[number]
    | NonNullable<
        NonNullable<GetEnrolledCoursesQueryResult>["enrolledCourses"][number]["course"]
      >;
  progress: number;
}

export function LearningCard({ title, course, progress }: LearningCardProps) {
  return (
    <div className="group w-full flex-shrink-0 rounded-lg p-5 cursor-pointer bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100">
      {/* Course Thumbnail Placeholder */}
      <div className="h-[120px] bg-gray-100 flex items-center rounded-xl justify-center">
        <Book className="h-12 w-12 text-gray-400 group-hover:text-gray-600 transition-colors" />
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
  )
}