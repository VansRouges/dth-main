import React from 'react';
import { 
  Star, 
  Clock, 
  Calendar, 
  Sparkles, 
  Check, 
  Briefcase,
  ChevronDown
} from "lucide-react";

// Skeleton component for reusable shimmer effect
const Skeleton = ({ className = "", ...props }) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      {...props}
    />
  );
};

export default function CourseDetailsSkeleton() {
  return (
    <div className="flex h-full bg-gray-50">
      {/* Sidebar Skeleton */}
      <div className="w-72 bg-white border-r border-gray-200 flex-shrink-0">
        <div className="p-4 space-y-4">
          <Skeleton className="h-8 w-32" />
          <div className="space-y-3">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center space-x-3">
                <Skeleton className="h-4 w-4 rounded" />
                <Skeleton className="h-4 flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Header Navigation */}
        <header className="flex h-16 bg-white shrink-0 items-center justify-between px-4 border-b border-gray-200">
          <div className="ml-auto flex space-x-2 items-center">
            <div className="flex space-x-2">
              <Skeleton className="w-9 h-9 rounded-full" />
              <Skeleton className="w-9 h-9 rounded-full" />
            </div>
            <div className="flex space-x-2 items-center">
              <Skeleton className="w-8 h-8 rounded-full" />
              <Skeleton className="h-4 w-20" />
              <ChevronDown className="h-4 w-4 text-gray-300" />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row w-full gap-4 px-4 pb-4">
          {/* Main Content Area */}
          <main className="w-full lg:flex-1 min-w-0">
            <div className="min-h-screen space-y-6">
              {/* Banner Skeleton */}
              <div className="relative overflow-hidden rounded-bl-[80px] rounded-tr-[80px] rounded-tl-lg rounded-br-lg mr-20 h-40 w-full max-w-[100%]">
                <Skeleton className="w-full h-full rounded-bl-[80px] rounded-tr-[80px] rounded-tl-lg rounded-br-lg" />
                <div className="absolute inset-0 p-6 flex flex-col justify-center">
                  <Skeleton className="h-8 w-48 mb-3 bg-white/30" />
                  <Skeleton className="h-4 w-64 bg-white/30" />
                </div>
              </div>

              {/* Course Title Section */}
              <div className="container mx-auto p-4 rounded-xl bg-white">
                <Skeleton className="h-8 w-3/4 mb-4" />

                {/* Tags Skeleton */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                    <Star className="h-4 w-4 mr-1 text-gray-300" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                  <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>

                {/* Course Metadata Skeleton */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center">
                    <Sparkles className="h-4 w-4 mr-1 text-gray-300" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-gray-300" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <div className="flex items-center">
                    <Skeleton className="h-4 w-32" />
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-gray-300" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              </div>

              {/* Course Description Skeleton */}
              <div className="container mx-auto rounded-xl px-4 pb-12 bg-white">
                <div className="max-w-4xl">
                  <Skeleton className="h-8 w-64 mb-4" />
                  <div className="space-y-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-4/5" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </div>
              </div>
              
              {/* Who the Course is Designed For Skeleton */}
              <div className="container mx-auto px-4 py-8 rounded-xl bg-white">
                <div className="max-w-4xl">
                  <Skeleton className="h-8 w-80 mb-2" />
                  <Skeleton className="h-5 w-48 mb-4" />
                  <div className="space-y-3">
                    {[...Array(4)].map((_, index) => (
                      <div key={index} className="flex items-start">
                        <span className="w-6 h-6 rounded-full bg-gray-200 flex justify-center items-center mt-2 p-1 mr-2">
                          <Check className="h-5 w-5 text-gray-400" />
                        </span>
                        <Skeleton className="h-4 flex-1" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Skills Covered Skeleton */}
              <div className="container mx-auto px-4 py-8 rounded-xl bg-white">
                <div className="max-w-4xl">
                  <Skeleton className="h-8 w-72 mb-6" />
                  <div className="flex flex-wrap gap-3">
                    {[...Array(6)].map((_, index) => (
                      <div 
                        key={index} 
                        className="bg-gray-100 px-4 py-2 rounded-xl border border-gray-200 flex-shrink-0"
                      >
                        <Skeleton className="h-4 w-16" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Job Opportunities Skeleton */}
              <div className="container mx-auto px-4 py-8 rounded-xl bg-white">
                <div className="max-w-4xl">
                  <Skeleton className="h-8 w-52 mb-6" />
                  <Skeleton className="h-4 w-96 mb-6" />
                  
                  <div className="flex flex-wrap gap-3 mb-8">
                    {[...Array(5)].map((_, index) => (
                      <div 
                        key={index}
                        className="px-4 py-2 flex justify-center items-center"
                      >
                        <Briefcase className="w-6 h-6 mr-2 text-gray-300" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
          
          {/* Course Enrollment Sidebar Skeleton */}
          <aside className="w-full lg:w-75 lg:flex-shrink-0 lg:flex-grow-0">
            <div className="lg:sticky lg:top-4">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                {/* Video Preview Skeleton */}
                <div className="mb-6">
                  <Skeleton className="w-full h-48 rounded-lg" />
                </div>
                
                {/* Price Skeleton */}
                <div className="mb-4">
                  <Skeleton className="h-8 w-32 mb-2" />
                  <Skeleton className="h-4 w-24" />
                </div>
                
                {/* Buttons Skeleton */}
                <div className="space-y-3 mb-6">
                  <Skeleton className="h-12 w-full rounded-lg" />
                  <Skeleton className="h-12 w-full rounded-lg" />
                </div>
                
                {/* Additional Info Skeleton */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                  <div className="flex justify-between">
                    <Skeleton className="h-4 w-18" />
                    <Skeleton className="h-4 w-14" />
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