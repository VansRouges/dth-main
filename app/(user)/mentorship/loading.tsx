const Skeleton = ({ className }: { className?: string }) => (
  <div 
    className={`bg-gray-200 animate-pulse relative overflow-hidden ${className}`}
  />
);

// Stats Card Skeleton Component
export const StatsCardSkeleton = () => (
  <div className="sm:w-1/3 bg-gray-100 p-3 h-32 rounded-xl relative overflow-hidden animate-pulse">
    {/* Title */}
    <Skeleton className="h-5 w-32 rounded-md mb-4" />
    
    {/* Icon placeholder */}
    <div className="absolute bottom-7 right-3 w-22 h-22 bg-gray-300 rounded-full opacity-20" />
    
    {/* Number placeholder */}
    <div className="absolute top-1/2 mt-4 left-8 transform -translate-y-1/2">
      <Skeleton className="h-16 w-12 rounded-md" />
    </div>
  </div>
);

// Meeting Banner Skeleton
export const MeetingBannerSkeleton = () => (
  <div className="relative overflow-hidden rounded-xl bg-gray-100 mx-5 min-h-[360px] animate-pulse">
    {/* Background placeholder */}
    <Skeleton className="absolute inset-0" />
    
    {/* Content Layer */}
    <div className="relative z-10 p-6 h-full flex flex-col justify-between min-h-[360px]">
      <div className="space-y-4">
        {/* Time Section */}
        <div className="flex items-center space-x-2">
          <Skeleton className="w-6 h-6 rounded" />
          <Skeleton className="h-5 w-32 rounded-md" />
        </div>
        
        {/* Main Content */}
        <div className="space-y-3">
          {/* Title */}
          <Skeleton className="h-8 w-3/4 rounded-md" />
          <Skeleton className="h-8 w-1/2 rounded-md" />
          
          {/* Instructor */}
          <div className="flex items-center space-x-2">
            <Skeleton className="h-6 w-6 rounded" />
            <Skeleton className="h-5 w-24 rounded-md" />
          </div>
          
          {/* Description */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-full rounded-md" />
            <Skeleton className="h-4 w-full rounded-md" />
            <Skeleton className="h-4 w-4/5 rounded-md" />
            <Skeleton className="h-4 w-3/4 rounded-md" />
          </div>
        </div>
      </div>
      
      {/* Button Section */}
      <div className="pt-4">
        <Skeleton className="h-12 md:h-14 w-full md:w-1/2 rounded-xl" />
      </div>
    </div>
  </div>
);

// Mentorship Card Skeleton
export const MentorshipCardSkeleton = () => (
  <div className="bg-white rounded-xl shadow-sm border overflow-hidden animate-pulse">
    {/* Course Image */}
    <Skeleton className="w-full h-48" />
    
    {/* Course Content */}
    <div className="p-4">
      {/* Title */}
      <Skeleton className="h-5 w-full mb-2" />
      <Skeleton className="h-5 w-3/4 mb-3" />
      
      {/* Instructor */}
      <Skeleton className="h-4 w-32 mb-4" />
      
      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-8" />
        </div>
        <Skeleton className="h-2 w-full rounded-full" />
      </div>
      
      {/* Button */}
      <Skeleton className="h-10 w-full rounded-lg" />
    </div>
  </div>
);

// Main Mentorship Page Skeleton
export default function MentorshipPageSkeleton() {
  return (
    <div className="space-y-6 min-h-screen">
      {/* Stats Cards Section */}
      <div className="grid grid-cols-1 xl:grid-cols-4 mt-7 px-4">
        <div className="flex gap-4 sm:gap-0 sm:flex-row flex-col sm:space-x-3 w-full sm:col-span-3 sm:px-4 py-2 flex-1">
          <StatsCardSkeleton />
          <StatsCardSkeleton />
          <StatsCardSkeleton />
        </div>

        {/* Learning Management Button Skeleton */}
        <div className="col-span-1 w-full py-2 sm:px-4 flex items-end">
          <Skeleton className="h-14 w-full rounded-md" />
        </div>
      </div>

      {/* Meeting Banner Skeleton */}
      <MeetingBannerSkeleton />

      {/* Mentorship Cards Section */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 p-4">
        {[1, 2, 3, 4].map((index) => (
          <MentorshipCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}