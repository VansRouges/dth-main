import { truncateText } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import ScoreRing from "./score-ring";
import { EllipsisVertical } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type UserCardProps = {
  studentId: string;
  name: string;
  imageUrl: string; 
  learningTime: number;
  coursesEnrolled: number;
  activeCourses: number;
  avgAttendance: number;
  avgScore: number;
  onMakeAdmin?: () => void;
  onViewProfile?: () => void;
};

export default function UserCard({
  studentId,
  imageUrl,
  name,
  learningTime,
  coursesEnrolled,
  activeCourses,
  avgAttendance,
  avgScore,
  onMakeAdmin,
  onViewProfile,
}: UserCardProps) {

  return (
    <div className="w-full rounded-xl shadow-md p-4 bg-white text-sm font-medium space-y-2 border relative">
      {/* Ellipsis Dropdown */}
      <div className="absolute top-2 right-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <EllipsisVertical className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-700" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 bg-white" align="end">
            <DropdownMenuItem onClick={onViewProfile}>
              View Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={onMakeAdmin}>
              Make an Admin
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Header */}
      <div className="flex items-center pt-2">
        {/* Avatar */}
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${name}'s avatar`}
            width={40}
            height={40}
            className="rounded-full object-cover w-20 h-20 mr-2"
          />
        ) : (
          <span className="text-gray-500">No Image</span>
        )}

        {/* User Info */}
        <div>
          <p className="text-md text-gray-900">Student ID: {truncateText(studentId, { length: 15 })}</p>
          <h2 className="font-bold text-lg">{name}</h2>
          <p className="text-md text-gray-900">
            Total Learning time (Hours):{" "}
            <span className="text-orange-500 font-bold">{learningTime}</span>
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-4 flex justify-between items-center">
        <div className="text-md space-y-4">
          <p>
            Courses Enrolled:{" "}
            <span className="text-orange-500 font-bold">{coursesEnrolled}</span>
          </p>
          <p>
            Active Courses:{" "}
            <span className="text-orange-500 font-bold">{activeCourses}</span>
          </p>
          <p>
            Avr. Attendance:{" "}
            <span className="text-orange-500 font-bold">{avgAttendance}%</span>
          </p>
        </div>

        {/* Score Ring */}
        <ScoreRing score={avgScore} />
      </div>
    </div>
  );
}