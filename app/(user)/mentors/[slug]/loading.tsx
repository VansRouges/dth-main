import React from 'react';
import { ChevronDown } from "lucide-react";

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

export default function MentorDetailsSkeleton() {
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
          <div className="min-h-screen space-y-6 w-full">
            {/* Banner Skeleton */}
            <div className="relative overflow-hidden rounded-xl mr-14 w-[90%] h-48">
              <Skeleton className="w-full h-full rounded-xl" />
              <div className="absolute inset-0 p-6 flex flex-col justify-center">
                <Skeleton className="h-10 w-64 mb-3 bg-white/30" />
                <Skeleton className="h-4 w-48 bg-white/30" />
              </div>
            </div>

            {/* Mentor Profile Skeleton */}
            <div className="container mx-auto flex flex-col md:flex-row items-start p-6 rounded-xl bg-white shadow-sm gap-6">
              {/* Profile Image Skeleton */}
              <Skeleton className="rounded-full w-32 h-32 flex-shrink-0" />
              
              {/* Profile Info Skeleton */}
              <div className="w-full">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-2">
                  <Skeleton className="h-8 w-64" />
                  <div className="bg-gray-100 px-3 py-1 rounded-full">
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>
                <Skeleton className="h-5 w-80 mb-4" />
                
                {/* Bio Section Skeleton */}
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/5" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            </div>

            {/* Profile Insights Skeleton */}
            <div className="container mx-auto p-6 rounded-xl bg-white shadow-sm">
              <Skeleton className="h-8 w-48 mb-6" />
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <Skeleton className="h-6 w-32 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                ))}
              </div>
            </div>

            {/* Professional Experience Skeleton */}
            <div className="container mx-auto p-6 rounded-xl bg-white shadow-sm">
              <Skeleton className="h-8 w-64 mb-6" />
              
              <div className="space-y-8">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                      <div>
                        <Skeleton className="h-6 w-48 mb-1" />
                        <Skeleton className="h-5 w-40" />
                      </div>
                      <Skeleton className="h-4 w-32" />
                    </div>
                    
                    {/* Key Responsibilities Skeleton */}
                    <div className="mt-4">
                      <Skeleton className="h-5 w-64 mb-2" />
                      <div className="pl-5 space-y-2">
                        {[...Array(4)].map((_, bulletIndex) => (
                          <div key={bulletIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-gray-300 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <Skeleton className="h-4 flex-1" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Book Session CTA Skeleton */}
            <div className="container mx-auto p-6 rounded-xl bg-blue-50 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <Skeleton className="h-7 w-72 mb-2" />
                  <Skeleton className="h-4 w-80" />
                </div>
                <Skeleton className="h-12 w-32 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}