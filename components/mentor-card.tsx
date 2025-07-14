"use client";

import Image from "next/image";
import { User, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GetInstructorsQueryResult } from "@/sanity.types"
import { urlFor } from "@/sanity/lib/image";

interface MentorCardProps {
  mentor: GetInstructorsQueryResult[number];
  className?: string;
}

export function MentorCard({ mentor, className = "" }: MentorCardProps) {
  return (
    <div 
      className={`group relative flex flex-col rounded-xl bg-white shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${className}`}
    >
      {/* Mentor Image */}
      <div className="relative h-40 w-full bg-gradient-to-br from-blue-50 to-gray-100">
        {mentor?.photo ? (
          <Image
            src={urlFor(mentor.photo).url()}
            alt={mentor.name || "Mentor"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gray-100">
            <User className="h-12 w-12 text-gray-400" />
          </div>
        )}
        
        {/* Experience Badge */}
        {mentor?.yearsOfExperience && (
          <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center shadow-sm">
            <Calendar className="h-3 w-3 mr-1 text-blue-600" />
            <span className="text-xs font-medium">
              {mentor.yearsOfExperience}+ years
            </span>
          </div>
        )}
      </div>

      {/* Mentor Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
              {mentor?.name}
            </h3>
            {mentor?.currentlyWorksAt && (
              <p className="text-sm text-gray-600 line-clamp-1">
                {mentor.currentlyWorksAt}
              </p>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          variant="default" 
          size="sm" 
          className="w-full mt-2 transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          Connect
        </Button>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </div>
  );
}