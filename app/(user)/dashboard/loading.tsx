const Skeleton = ({ className }: { className?: string }) => (
  <div 
    className={`bg-gray-200 animate-pulse relative overflow-hidden ${className}`}
  >
    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-pulse" />
  </div>
);

export function DashboardOverviewSkeletonSubtle() {
  return (
    <div className="relative mt-4">
      {/* Banner Skeleton */}
      <div className="relative mb-16">
        <div className="relative overflow-hidden rounded-bl-lg sm:rounded-bl-[100px] rounded-tr-[100px] rounded-tl-lg rounded-br-lg mr-20 h-40 sm:h-52 w-full bg-gray-200 animate-pulse">
          
          {/* Banner Content Skeleton */}
          <div className="absolute inset-0 sm:-mt-12 p-6 flex flex-col sm:justify-center">
            {/* Dashboard Overview Title */}
            <div className="h-6 sm:h-9 w-3/4 max-w-80 rounded-md bg-white/30 animate-pulse" />
            
            {/* Welcome Message */}
            <div className="mt-3">
              <div className="h-5 w-48 rounded-md bg-white/30 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Cards positioned overlapping the banner */}
      <div className="relative z-20 -mt-32 sm:-mt-32 sm:px-4 xl:px-8">
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:space-x-3 w-full col-span-3 px-4 py-2 flex-1">
          
          {/* Card skeletons */}
          {[1, 2, 3].map((index) => (
            <div key={index} className="sm:w-1/3 bg-gray-100 p-3 h-32 rounded-xl relative overflow-hidden animate-pulse">
              <div className="h-5 w-32 rounded-md bg-gray-300 mb-4" />
              
              {/* Icon placeholder */}
              <div className={`absolute bottom-7 right-0 ${index === 2 ? 'w-20' : 'w-16'} h-16 rounded-full bg-gray-300`} />
              
              {/* Number placeholder */}
              <div className="absolute top-1/2 mt-4 left-8 transform -translate-y-1/2">
                <div className="h-16 w-12 rounded-md bg-gray-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TopPicksSkeleton() {
  return (
    <div className="my-8 w-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-4">
        <Skeleton className="h-6 w-64 rounded-md" />
        <Skeleton className="h-4 w-16 rounded-md" />
      </div>

      {/* Scrollable content */}
      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto pb-4 px-4 scrollbar-hide">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-[300px]">
              {/* Course Card Skeleton */}
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                {/* Course Image */}
                <Skeleton className="w-full h-48" />
                
                {/* Course Content */}
                <div className="p-4">
                  {/* Category */}
                  <Skeleton className="h-4 w-20 rounded-full mb-2" />
                  
                  {/* Title */}
                  <Skeleton className="h-5 w-full mb-2" />
                  <Skeleton className="h-5 w-3/4 mb-3" />
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Skeleton key={star} className="w-4 h-4 rounded-sm" />
                      ))}
                    </div>
                    <Skeleton className="h-4 w-8" />
                    <Skeleton className="h-4 w-12" />
                  </div>
                  
                  {/* Price and Duration */}
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function MentorsSkeleton() {
  return (
    <div className="my-8 w-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-4">
        <Skeleton className="h-5 sm:h-6 w-32 sm:w-40 rounded-md" />
        <Skeleton className="h-3 sm:h-4 w-16 rounded-md" />
      </div>

      {/* Scrollable content */}
      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto pb-4 px-4 scrollbar-hide">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-[300px]">
              {/* Mentor Card Skeleton */}
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                {/* Profile Image */}
                <div className="flex flex-col items-center text-center">
                  <Skeleton className="w-20 h-20 rounded-full mb-4" />
                  
                  {/* Name */}
                  <Skeleton className="h-5 w-32 mb-2 rounded-md" />
                  
                  {/* Title */}
                  <Skeleton className="h-4 w-40 mb-3 rounded-md" />
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Skeleton key={star} className="w-4 h-4 rounded-sm" />
                      ))}
                    </div>
                    <Skeleton className="h-4 w-8" />
                  </div>
                  
                  {/* Description */}
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mb-4" />
                  
                  {/* Button */}
                  <Skeleton className="h-9 w-24 rounded-md" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export function OtherPicksSkeleton() {
  return (
    <div className="mb-8 w-full overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-4">
        <Skeleton className="h-5 sm:h-6 w-48 sm:w-56 rounded-md" />
        <Skeleton className="h-3 sm:h-4 w-16 rounded-md" />
      </div>

      {/* Scrollable content */}
      <div className="relative">
        <div className="flex space-x-4 overflow-x-auto pb-4 px-4 scrollbar-hide">
          {[1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="flex-shrink-0 w-full sm:w-[300px]">
              {/* Course Card Skeleton */}
              <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
                {/* Course Image */}
                <Skeleton className="w-full h-48" />
                
                {/* Course Content */}
                <div className="p-4">
                  {/* Category */}
                  <Skeleton className="h-4 w-20 rounded-full mb-2" />
                  
                  {/* Title */}
                  <Skeleton className="h-5 w-full mb-2" />
                  <Skeleton className="h-5 w-3/4 mb-3" />
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Skeleton key={star} className="w-4 h-4 rounded-sm" />
                      ))}
                    </div>
                    <Skeleton className="h-4 w-8" />
                    <Skeleton className="h-4 w-12" />
                  </div>
                  
                  {/* Price and Duration */}
                  <div className="flex justify-between items-center">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
      </div>
    </div>
  );
}

// app/dashboard/loading.tsx
export default function DashboardLoading() {
  return (
    <main>
      <DashboardOverviewSkeletonSubtle />
      
      {/* Top Picks Skeleton with conditional margin */}
      <div className="mt-28 sm:mt-0">
        <TopPicksSkeleton />
      </div>
      
      <MentorsSkeleton />
      <OtherPicksSkeleton />
    </main>
  );
}