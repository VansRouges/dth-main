"use client"
import Image from "next/image"
import { User, Briefcase, MessageCircleMore } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GetInstructorsQueryResult } from "@/sanity.types"
import { urlFor } from "@/sanity/lib/image";

interface MentorCardProps {
  mentor: GetInstructorsQueryResult[number]; // Assuming mentor is an object from the GetInstructorsQueryResult array
}

export function MentorCard({ mentor }: MentorCardProps) {

  return (
    <>
    <div 
      className="group min-w-[280px] flex-shrink-0 rounded-lg bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="h-[120px] bg-[#D9D9D9] flex items-center justify-center">
        {mentor?.photo ? (
          <Image
            src={urlFor(mentor.photo).url() || ""}
            alt={mentor.name || "Mentor Image"}
            fill
            className="object-cover w-20 "
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-muted">
            <User className="h-8 w-8 text-gray-500" />
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-bold">{mentor?.name}</span>

          <div className="flex items-center gap-1">
            <span className="text-xs font-bold">Exp: {mentor?.yearsOfExperience} years</span>
          </div>
        </div>
        <h3 className="font-bold text-sm mb-2">{mentor?.currentlyWorksAt}</h3>
        <div className="flex items-center text-gray-900 mb-2 space-x-1">
          <Briefcase className="h-4 w-4" />
          {/* <span className="text-xs">{mentor?.title}</span> */}
        </div>
        <div className="relative h-8 cursor-pointer">
          <Button className="absolute inset-0 w-full tracking-wider font-semibold bg-blue-600 hover:bg-blue-700 text-white text-xs py-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {/* Book ({mentor?.price}/hr) */}
          </Button>
        <div className="flex items-center text-gray-900 mb-2 space-x-1">
            <MessageCircleMore className="h-4 w-4" />
            {/* <p className="font-light text-sm group-hover:opacity-0 transition-opacity">
                {sessionsCount} sessions <span className="text-primary">({reviewCount} Reviews)</span>
            </p> */}
        </div>
        </div>
      </div>
    </div>
    </>
  )
}