// components/mentor/BioSection.tsx
"use client";

import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

interface BioSectionProps {
  bio: string | undefined | null;
  truncateLength?: number;
}

export const BioSection = ({ bio, truncateLength = 250 }: BioSectionProps) => {
  const [showFullBio, setShowFullBio] = useState(false);
  const needsTruncation = !!bio && bio.length > truncateLength;
  const displayBio = showFullBio ? bio : bio?.substring(0, truncateLength) + (needsTruncation ? "..." : "");

  return (
    <div>
      <p className="text-gray-700 mb-4">{displayBio}</p>
      {needsTruncation && (
        <button 
          onClick={() => setShowFullBio(!showFullBio)}
          className="text-primary font-semibold flex items-center cursor-pointer"
        >
          {showFullBio ? (
            <>
              See less <ChevronDown className="h-4 w-4 ml-1" />
            </>
          ) : (
            <>
              See full Details <ChevronRight className="h-4 w-4 ml-1" />
            </>
          )}
        </button>
      )}
    </div>
  );
};