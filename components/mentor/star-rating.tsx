// components/mentor/StarRating.tsx
"use client";

import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

export const StarRating = ({ rating, maxRating = 5 }: StarRatingProps) => {
  return (
    <div className="flex">
      {[...Array(maxRating)].map((_, i) => (
        <Star 
          key={i} 
          className={`h-5 w-5 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
};