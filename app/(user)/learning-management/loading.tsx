import React from 'react';

const LearningManagementSkeleton = () => {
  // Create array for skeleton cards
  const skeletonCards = Array.from({ length: 4 }, (_, index) => index);

  return (
    <>
      {/* Banner Skeleton */}
      <div className="relative overflow-hidden rounded-xl md:rounded-tr-[70px] rounded-tr-[50px] md:rounded-bl-[70px] rounded-bl-[50px] w-full mr-14 lg:w-[75%] h-40 bg-gray-200 animate-pulse">
        <div className="absolute inset-0 p-6 flex flex-col justify-center">
          {/* Title skeleton */}
          <div className="h-8 bg-gray-300 rounded-md w-3/4 mb-3 animate-pulse"></div>
          {/* Subtitle skeleton */}
          <div className="h-5 bg-gray-300 rounded-md w-1/2 animate-pulse"></div>
        </div>
      </div>

      {/* Management Cards Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 w-full max-w-8xl">
        {skeletonCards.map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 h-48 rounded-xl flex flex-col justify-center items-start p-6 animate-pulse"
          >
            {/* Icon skeleton */}
            <div className="bg-gray-300 h-20 w-20 rounded-full mb-4 animate-pulse"></div>
            {/* Title skeleton */}
            <div className="h-6 bg-gray-300 rounded-md w-3/4 animate-pulse"></div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LearningManagementSkeleton;