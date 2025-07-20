"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { VideoPlayer } from "@/components/video-player/VideoPlayer";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ChevronUp } from "lucide-react";
import { GetCourseBySlugQueryResult } from "@/sanity.types";

interface CourseEnrollmentProps {
  price?: number;
  previewVideo?: string;
  course: GetCourseBySlugQueryResult;
}

function truncate(text: string | undefined, maxLength: number) {
  return text && text.length > maxLength
    ? text.slice(0, maxLength - 1) + "…"
    : text;
}

export const CourseEnrollment = ({
  price,
  previewVideo,
  course,
}: CourseEnrollmentProps) => {
  const [openModuleIndex, setOpenModuleIndex] = useState(0);

  const handleToggle = (idx: number) => {
    setOpenModuleIndex(idx === openModuleIndex ? -1 : idx);
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-md p-4 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Complete Course Enrollment</h2>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button className="w-full bg-[#104BC1] hover:bg-[#0B3589] font-semibold cursor-pointer h-12 text-lg">
          Purchase (NGN {price ? price.toLocaleString() : "0"})
        </Button>

        {/* Share button */}
        <div className="flex font-semibold text-[#0F44B0] cursor-pointer space-x-2 justify-center items-center">
          <span>Share</span>
          <Image
            width={320}
            height={110}
            src="/share.svg"
            alt="share button"
            className="w-6 h-6"
          />
        </div>
      </div>

      {/* Separator */}
      <Separator className="my-4 text-gray-400" />

      {/* Video Tutorial Section */}
      {previewVideo && (
        <div className="space-y-3 bg-white p-1 rounded-xl">
          <div className="relative overflow-hidden">
            <div className="aspect-video relative">
              <VideoPlayer url={previewVideo} subtitles={[]} />
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Preview this course</h3>
          </div>
        </div>
      )}

      {/* Course Modules */}
      {course?.modules && course.modules.length > 0 && (
        <div className="space-y-4">
          {course.modules.map((module, idx) => (
            <div key={module._id} className="mb-2">
              <button
                type="button"
                className="flex items-center w-full text-left focus:outline-none"
                onClick={() => handleToggle(idx)}
              >
                <span className="font-semibold text-[#081227] truncate max-w-[290px]">
                  {truncate(module.title, 130)}
                </span>
                <span className="mr-2">
                  {openModuleIndex === idx ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </span>
              </button>
              {openModuleIndex === idx && (
                <div className="space-y-2 pl-2 mt-2">
                  {module.lessons && module.lessons.length > 0 ? (
                    module.lessons.map((lesson) => (
                      <p className="text-[#999999]" key={lesson._id}>
                        <Image
                          src="/video-play.svg"
                          alt="vide-play icon"
                          className="inline-block w-4 h-4 mr-2"
                          height={16}
                          width={16}
                          unoptimized
                        />
                        {lesson.title}
                      </p>
                    ))
                  ) : (
                    <p className="text-gray-500">No lessons available.</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Invite Friends Section */}
      <div className="space-y-3 rounded-xl bg-white p-4 my-3 border shadow-md">
        <div className="flex justify-center">
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold">Invite Friends</h3>
            <p className="text-sm mt-1">
              Invite <span className="text-[#0F44B0]">friends</span> and get
              access to free courses
            </p>
          </div>
          <Image
            src="/friends.png"
            alt="Invite friends illustration"
            width={150}
            height={100}
            className="object-cover w-24 h-full"
          />
        </div>
        <Button className="w-full bg-[#F7D394] hover:bg-primary cursor-pointer text-white">
          Invite Friends
        </Button>
      </div>
    </div>
  );
};
