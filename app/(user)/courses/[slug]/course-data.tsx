import { CourseEnrollment } from "@/components/course-enrollment";
import {
  Star,
  Clock,
  Calendar,
  Sparkles,
  Check,
  Briefcase,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { NextPage } from "next";
import { User } from "@clerk/nextjs/server";
import { GetCourseBySlugQueryResult } from "@/sanity.types";

interface CourseDataProps {
  course: GetCourseBySlugQueryResult;
}

export async function CourseData({ course }: CourseDataProps) {
  let updatedAgo = "";
  if (course?._updatedAt) {
    updatedAgo = formatDistanceToNow(new Date(course._updatedAt), {
      addSuffix: true,
    });
  }

  if (!course) {
    return (
      <div className="flex flex-col lg:flex-row w-full gap-4 px-4 pb-4">
        <main className="w-full lg:flex-1 min-w-0">
          <div className="min-h-screen flex items-center justify-center p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Course Not Found
              </h2>
              <p className="text-gray-600">
                The course you&apos;re looking for doesn&apos;t exist.
              </p>
            </div>
          </div>
        </main>
        <aside className="w-full lg:w-80 lg:flex-shrink-0 lg:flex-grow-0">
          <div className="lg:sticky lg:top-4">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-gray-500">Course not available</p>
            </div>
          </div>
        </aside>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row w-full gap-4 px-4 pb-4">
      {/* Main Content Area - Takes full width on mobile, flexible on desktop */}
      <main className="w-full lg:flex-1 min-w-0">
        {/* Course Title */}
        <div className="container mx-auto p-4 rounded-xl bg-white">
          <h1 className="text-3xl font-bold mb-4">{course?.title}</h1>

          {/* Tags */}
          <div className="flex flex-wrap font-semibold gap-2 mb-4">
            {course?.topRated && (
              <div className="flex items-center bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                <Star className="h-4 w-4 mr-1 fill-orange-500 text-orange-500" />
                <span>Top Rated</span>
              </div>
            )}
            <div className="flex items-center bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
              <span>{course?.category?.name}</span>
            </div>
          </div>

          {/* Course Metadata */}
          <div className="flex flex-wrap font-semibold gap-6 text-sm">
            <div className="flex items-center text-[#28A745]">
              <Sparkles className="h-4 w-4 mr-1" />
              <span>{course?.level}</span>
            </div>
            <div className="flex items-center text-orange-600">
              <Clock className="h-4 w-4 mr-1" />
              <span>
                {course?.duration
                  ? `${course.duration.hour} hours ${course.duration.mins} mins`
                  : "--"}
              </span>
            </div>
            {course?.certification && (
              <div className="flex items-center">
                <span>
                  Certification:{" "}
                  <span className="text-orange-600">After Completion</span>
                </span>
              </div>
            )}
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>
                Updated: <span className="text-primary">{updatedAgo}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Course Description */}
        <div className="container mx-auto rounded-xl px-4 pb-12 bg-white">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-extrabold mb-4">Course Description</h2>
            <div className="space-y-4">
              <p className="text-gray-800 leading-relaxed">
                {course?.description}
              </p>
            </div>
          </div>
        </div>

        {/* Who the Course is Designed For */}
        <div className="container mx-auto px-4 py-8 rounded-xl bg-white">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-extrabold">
              Who the Course is Designed For
            </h2>
            <h3 className="text-md font-semibold mb-4 text-gray-800">
              This course is Ideal for:
            </h3>
            <div className="">
              <ul className="space-y-3">
                {course?.designedFor?.map((item: string) => (
                  <li key={item} className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-green-500 flex justify-center items-center mt-2 p-1 mr-2">
                      <Check className="h-5 w-5 text-white" />
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Covered */}
        <div className="container mx-auto px-4 py-8 rounded-xl bg-white">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-extrabold mb-6">
              Skills Covered in This Course
            </h2>
            <div className="flex flex-wrap gap-3">
              {course?.skillsCovered?.map((skill) => (
                <div
                  key={skill._id}
                  className="bg-[#FFDAB0] px-4 py-2 rounded-xl border border-[#E87C00] flex-shrink-0"
                >
                  <p className="text-[#E87C00] font-medium whitespace-nowrap">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Job Opportunities */}
        <div className="container mx-auto px-4 py-8 rounded-xl bg-white">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-extrabold mb-6">Job Opportunities</h2>
            <p className="text-gray-700 mb-6">
              Completing this course will equip you with skills for roles such
              as:
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {course?.jobOpportunities?.map((job, index) => (
                <div
                  key={job._id || index}
                  className="px-4 py-2 flex justify-center items-center"
                >
                  <Briefcase className="w-6 h-6 mr-2" />
                  <p className="text-black font-medium whitespace-nowrap">
                    {job.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Course Enrollment Sidebar */}
    </div>
  );
}

export const CourseEnrollments: NextPage<{
  course: GetCourseBySlugQueryResult
  user: User | null;
}> = ({ course, user }) => {


  return (
    <CourseEnrollment
      price={course?.price}
      previewVideo={course?.previewVideo}
      course={course}
      userId={user?.id}
      userEmail={user?.emailAddresses?.[0]?.emailAddress}
      firstName={user?.firstName || ""}
      lastName={user?.lastName || ""}
      imageUrl={user?.imageUrl || ""}
    />
  );
};
