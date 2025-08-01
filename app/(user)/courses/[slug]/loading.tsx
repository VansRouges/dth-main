import React from "react";
import {
  Star,
  Clock,
  Calendar,
  Sparkles,
  Check,
  Briefcase,
} from "lucide-react";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

// Skeleton component for reusable shimmer effect
const Skeleton = ({ className = "", ...props }: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      {...props}
    />
  );
};

export default function CourseDetailsSkeleton() {
  return (
    <div className="w-full max-w-full overflow-hidden bg-gray-50 mt-10">
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row w-full gap-4 sm:gap-6 px-2 sm:px-4 pb-4">
          {/* Main Content Area */}
          <main className="w-full lg:flex-1 min-w-0">
            <div className="min-h-screen space-y-4 sm:space-y-6">
              {/* Banner Skeleton - Responsive */}
              <div className="relative overflow-hidden rounded-bl-[40px] sm:rounded-bl-[60px] lg:rounded-bl-[80px] rounded-tr-[40px] sm:rounded-tr-[60px] lg:rounded-tr-[80px] rounded-tl-lg rounded-br-lg h-32 sm:h-36 md:h-40 w-full">
                <Skeleton className="w-full h-full rounded-bl-[40px] sm:rounded-bl-[60px] lg:rounded-bl-[80px] rounded-tr-[40px] sm:rounded-tr-[60px] lg:rounded-tr-[80px] rounded-tl-lg rounded-br-lg" />
                <div className="absolute inset-0 p-3 sm:p-4 md:p-6 flex flex-col justify-center">
                  <Skeleton className="h-6 sm:h-7 md:h-8 w-full max-w-[150px] sm:max-w-[200px] md:max-w-[250px] mb-2 sm:mb-3 bg-white/30" />
                  <Skeleton className="h-3 sm:h-4 w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] bg-white/30" />
                </div>
              </div>

              {/* Course Title Section */}
              <div className="w-full max-w-full p-3 sm:p-4 md:p-6 rounded-xl bg-white">
                <Skeleton className="h-6 sm:h-7 md:h-8 w-full max-w-[250px] sm:max-w-[350px] md:max-w-[450px] mb-3 sm:mb-4" />

                {/* Tags Skeleton */}
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  <div className="flex items-center bg-gray-100 px-2 sm:px-3 py-1 rounded-full">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-gray-300" />
                    <Skeleton className="h-3 sm:h-4 w-12 sm:w-16 md:w-20" />
                  </div>
                  <div className="flex items-center bg-gray-100 px-2 sm:px-3 py-1 rounded-full">
                    <Skeleton className="h-3 sm:h-4 w-10 sm:w-12 md:w-16" />
                  </div>
                </div>

                {/* Course Metadata Skeleton */}
                <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm">
                  <div className="flex items-center min-w-0">
                    <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-gray-300 flex-shrink-0" />
                    <Skeleton className="h-3 sm:h-4 w-12 sm:w-16" />
                  </div>
                  <div className="flex items-center min-w-0">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-gray-300 flex-shrink-0" />
                    <Skeleton className="h-3 sm:h-4 w-16 sm:w-20 md:w-24" />
                  </div>
                  <div className="flex items-center min-w-0">
                    <Skeleton className="h-3 sm:h-4 w-20 sm:w-24 md:w-32" />
                  </div>
                  <div className="flex items-center min-w-0">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-gray-300 flex-shrink-0" />
                    <Skeleton className="h-3 sm:h-4 w-14 sm:w-16 md:w-20" />
                  </div>
                </div>
              </div>

              {/* Course Description Skeleton */}
              <div className="w-full max-w-full rounded-xl p-3 sm:p-4 md:p-6 pb-8 sm:pb-10 md:pb-12 bg-white">
                <div className="w-full max-w-4xl">
                  <Skeleton className="h-6 sm:h-7 md:h-8 w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] mb-3 sm:mb-4" />
                  <div className="space-y-3 sm:space-y-4">
                    <Skeleton className="h-3 sm:h-4 w-full" />
                    <Skeleton className="h-3 sm:h-4 w-full max-w-[90%]" />
                    <Skeleton className="h-3 sm:h-4 w-full max-w-[85%]" />
                    <Skeleton className="h-3 sm:h-4 w-full" />
                    <Skeleton className="h-3 sm:h-4 w-full max-w-[75%]" />
                  </div>
                </div>
              </div>

              {/* Who the Course is Designed For Skeleton */}
              <div className="w-full max-w-full p-3 sm:p-4 md:p-6 py-6 sm:py-8 rounded-xl bg-white">
                <div className="w-full max-w-4xl">
                  <Skeleton className="h-6 sm:h-7 md:h-8 w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] mb-2" />
                  <Skeleton className="h-4 sm:h-5 w-full max-w-[150px] sm:max-w-[200px] mb-3 sm:mb-4" />
                  <div className="space-y-2 sm:space-y-3">
                    {[...Array(4)].map((_, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gray-200 flex justify-center items-center mt-1 sm:mt-2 p-1 flex-shrink-0">
                          <Check className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-gray-400" />
                        </span>
                        <Skeleton className="h-3 sm:h-4 flex-1 min-w-0" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills Covered Skeleton */}
              <div className="w-full max-w-full p-3 sm:p-4 md:p-6 py-6 sm:py-8 rounded-xl bg-white">
                <div className="w-full max-w-4xl">
                  <Skeleton className="h-6 sm:h-7 md:h-8 w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] mb-4 sm:mb-6" />
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {[...Array(6)].map((_, index) => (
                      <div
                        key={index}
                        className="bg-gray-100 px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-xl border border-gray-200 flex-shrink-0"
                      >
                        <Skeleton className="h-3 sm:h-4 w-12 sm:w-14 md:w-16" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Job Opportunities Skeleton */}
              <div className="w-full max-w-full p-3 sm:p-4 md:p-6 py-6 sm:py-8 rounded-xl bg-white">
                <div className="w-full max-w-4xl">
                  <Skeleton className="h-6 sm:h-7 md:h-8 w-full max-w-[180px] sm:max-w-[220px] md:max-w-[260px] mb-4 sm:mb-6" />
                  <Skeleton className="h-3 sm:h-4 w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] mb-4 sm:mb-6" />

                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
                    {[...Array(5)].map((_, index) => (
                      <div
                        key={index}
                        className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 flex justify-center items-center border border-gray-200 rounded-lg"
                      >
                        <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-1 sm:mr-2 text-gray-300 flex-shrink-0" />
                        <Skeleton className="h-3 sm:h-4 w-16 sm:w-20 md:w-24" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Course Enrollment Sidebar Skeleton */}
          <aside className="w-full lg:w-80 xl:w-96 lg:flex-shrink-0">
            <div className="lg:sticky lg:top-4">
              <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-sm border border-gray-200">
                {/* Video Preview Skeleton */}
                <div className="mb-4 sm:mb-6">
                  <Skeleton className="w-full h-40 sm:h-44 md:h-48 rounded-lg" />
                </div>

                {/* Price Skeleton */}
                <div className="mb-3 sm:mb-4">
                  <Skeleton className="h-6 sm:h-7 md:h-8 w-24 sm:w-28 md:w-32 mb-2" />
                  <Skeleton className="h-3 sm:h-4 w-16 sm:w-20 md:w-24" />
                </div>

                {/* Buttons Skeleton */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  <Skeleton className="h-10 sm:h-11 md:h-12 w-full rounded-lg" />
                  <Skeleton className="h-10 sm:h-11 md:h-12 w-full rounded-lg" />
                </div>

                {/* Additional Info Skeleton */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-3 sm:h-4 w-12 sm:w-14 md:w-16" />
                    <Skeleton className="h-3 sm:h-4 w-14 sm:w-16 md:w-20" />
                  </div>
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-3 sm:h-4 w-16 sm:w-18 md:w-20" />
                    <Skeleton className="h-3 sm:h-4 w-12 sm:w-14 md:w-16" />
                  </div>
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-3 sm:h-4 w-14 sm:w-16 md:w-18" />
                    <Skeleton className="h-3 sm:h-4 w-10 sm:w-12 md:w-14" />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
