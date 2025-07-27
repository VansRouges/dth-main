"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Award, User } from "lucide-react";
import type { GetInstructorsQueryResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

interface InstructorCardProps {
  instructor: GetInstructorsQueryResult[number];
}

export function InstructorCard({ instructor }: InstructorCardProps) {
  


  return (
    <Card className="overflow-hidden shadow-card hover:shadow-hover transition-all duration-300 group">
      <CardHeader className="pb-4">
        <div className="flex items-start gap-4">
            {instructor?.photo ? (
            <Image
                src={urlFor(instructor.photo).url()}
                alt={instructor.name || "Mentor"}
                width={100}
                height={100}
                className="object-cover rounded-full w-32 h-32 p-2"
            />
            ) : (
            <div className="h-full w-full flex items-center justify-center bg-gray-100">
                <User className="h-12 w-12 text-gray-400" />
            </div>
            )}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg text-black group-hover:text-primary transition-colors">
              {instructor.name}
            </h3>
            <div className="flex items-center gap-1 text-black text-sm mt-1">
              <MapPin className="h-3 w-3" />
              <span className="truncate">{instructor.location || instructor.currentlyWorksAt}</span>
            </div>
            <div className="flex items-center gap-1 text-black text-sm mt-1">
              <Award className="h-3 w-3" />
              <span>{instructor.yearsOfExperience} years experience</span>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-black text-sm leading-relaxed mb-4 line-clamp-3">
          {instructor.bio}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="outline" className="text-xs text-black">
            ID: {instructor._id.split("-")[1]}
          </Badge>
          <Badge variant="outline" className="text-xs text-black">
            Updated: {new Date(instructor._updatedAt).toLocaleDateString()}
          </Badge>
        </div>

        <div className="flex gap-2">
          <Button variant="default" size="sm" className="flex-1 cursor-pointer">
            View Profile
          </Button>
          <a href={`mailto:${instructor.email}`} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              <Mail className="h-4 w-4" />
            </Button>
          </a>
          <a href={`tel:${instructor.phoneNumber}`} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              <Phone className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
