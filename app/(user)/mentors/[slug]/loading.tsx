import React from 'react';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Skeleton = ({ className = "", ...props }: SkeletonProps) => {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      {...props}
    />
  );
};

export default function MentorDetailsSkeleton() {
  return (
    <div className="w-full max-w-full overflow-hidden">
      <div className="space-y-6 px-4 sm:px-6">
        {/* Banner Skeleton - Fully responsive */}
        <div className="relative overflow-hidden rounded-xl rounded-bl-[60px] sm:rounded-bl-[80px] lg:rounded-bl-[100px] lg:rounded-tr-[100px] rounded-tr-[60px] sm:rounded-tr-[80px] mt-10 h-40 sm:h-44 md:h-48 lg:h-50 w-full">
          <Skeleton className="w-full h-full" />
          <div className="absolute inset-0 p-4 sm:p-6 lg:ml-5 flex flex-col justify-center">
            <Skeleton className="h-6 sm:h-7 md:h-8 lg:h-10 w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] mb-3 bg-white/30" />
            <Skeleton className="h-3 sm:h-4 w-full max-w-[150px] sm:max-w-[200px] bg-white/30" />
          </div>
        </div>

        {/* Mentor Profile Skeleton - Responsive container */}
        <div className="w-full max-w-full">
          <div className="flex flex-col md:flex-row items-start p-4 sm:p-6 rounded-xl bg-white shadow-sm gap-4 sm:gap-6">
            {/* Profile Image Skeleton */}
            <Skeleton className="rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0 mx-auto md:mx-0" />
            
            {/* Profile Info Skeleton */}
            <div className="w-full min-w-0 flex-1">
              <div className="flex flex-wrap flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                {/* Title - responsive with max width */}
                <Skeleton className="h-5 sm:h-6 lg:h-8 w-full max-w-[200px] sm:max-w-[250px]" />
                <div className="bg-gray-100 px-3 py-1 rounded-full inline-block">
                  <Skeleton className="h-3 sm:h-4 w-20 sm:w-32" />
                </div>
              </div>
              {/* Job title - responsive with max width */}
              <Skeleton className="h-4 lg:h-5 w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] mb-4" />
              
              {/* Bio Section Skeleton */}
              <div className="space-y-2">
                <Skeleton className="h-3 sm:h-4 w-full" />
                <Skeleton className="h-3 sm:h-4 w-full max-w-[90%]" />
                <Skeleton className="h-3 sm:h-4 w-full max-w-[85%]" />
                <Skeleton className="h-3 sm:h-4 w-full max-w-[75%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Profile Insights Skeleton - Responsive grid */}
        <div className="w-full max-w-full">
          <div className="p-4 sm:p-6 rounded-xl bg-white shadow-sm">
            {/* Title - responsive */}
            <Skeleton className="h-5 sm:h-6 lg:h-8 w-full max-w-[150px] sm:max-w-[200px] mb-4 sm:mb-6" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow">
                  {/* Insight title - responsive */}
                  <Skeleton className="h-4 lg:h-6 w-full max-w-[120px] sm:max-w-[150px] mb-2" />
                  <Skeleton className="h-3 sm:h-4 w-full mb-1" />
                  <Skeleton className="h-3 sm:h-4 w-3/4" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Professional Experience Skeleton - Responsive layout */}
        <div className="w-full max-w-full">
          <div className="p-4 sm:p-6 rounded-xl bg-white shadow-sm">
            {/* Title - responsive */}
            <Skeleton className="h-5 sm:h-6 lg:h-8 w-full max-w-[200px] sm:max-w-[250px] mb-4 sm:mb-6" />
            
            <div className="space-y-6 sm:space-y-8">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 sm:pb-8 last:border-b-0">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                    <div className="min-w-0 flex-1">
                      {/* Experience title - responsive with max width */}
                      <Skeleton className="h-4 lg:h-6 w-full max-w-[200px] sm:max-w-[250px] mb-1" />
                      <Skeleton className="h-4 sm:h-5 w-full max-w-[150px] sm:max-w-[200px]" />
                    </div>
                    <Skeleton className="h-3 sm:h-4 w-24 sm:w-32 flex-shrink-0" />
                  </div>
                  
                  {/* Key Responsibilities Skeleton */}
                  <div className="mt-4">
                    <Skeleton className="h-4 sm:h-5 w-full max-w-[200px] sm:max-w-[250px] mb-2" />
                    <div className="pl-3 sm:pl-5 space-y-2">
                      {[...Array(4)].map((_, bulletIndex) => (
                        <div key={bulletIndex} className="flex items-start gap-2 sm:gap-3">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-300 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                          <Skeleton className="h-3 sm:h-4 flex-1 min-w-0" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Book Session CTA Skeleton - Responsive layout */}
        <div className="w-full max-w-full">
          <div className="p-4 sm:p-6 rounded-xl bg-blue-50 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div className="min-w-0 flex-1">
                {/* CTA title - responsive */}
                <Skeleton className="h-5 sm:h-6 lg:h-7 w-full max-w-[250px] sm:max-w-[300px] mb-2" />
                <Skeleton className="h-3 sm:h-4 w-full max-w-[280px] sm:max-w-[350px]" />
              </div>
              <Skeleton className="h-10 sm:h-12 w-28 sm:w-32 rounded-lg flex-shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}