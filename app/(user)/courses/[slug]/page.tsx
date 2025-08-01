import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { Suspense } from "react";
import { CourseData, CourseEnrollments } from "./course-data";
import getCourseBySlug from "@/sanity/lib/courses/getCourseBySlug";

interface CoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

const CourseTitleSkeleton = () => (
  <div className="container mx-auto p-4 rounded-xl bg-white">
    <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse" />

    {/* Tags skeleton */}
    <div className="flex flex-wrap gap-2 mb-4">
      <div className="h-6 bg-gray-200 rounded-full w-24 animate-pulse" />
      <div className="h-6 bg-gray-200 rounded-full w-20 animate-pulse" />
    </div>

    {/* Metadata skeleton */}
    <div className="flex flex-wrap gap-6 text-sm">
      <div className="h-4 bg-gray-200 rounded w-16 animate-pulse" />
      <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
      <div className="h-4 bg-gray-200 rounded w-32 animate-pulse" />
      <div className="h-4 bg-gray-200 rounded w-28 animate-pulse" />
    </div>
  </div>
);

const CourseDescriptionSkeleton = () => (
  <div className="container mx-auto rounded-xl px-4 pb-12 bg-white">
    <div className="max-w-4xl">
      <div className="h-8 bg-gray-200 rounded w-64 mb-4 animate-pulse" />
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
      </div>
    </div>
  </div>
);

const DesignedForSkeleton = () => (
  <div className="container mx-auto px-4 py-8 rounded-xl bg-white">
    <div className="max-w-4xl">
      <div className="h-8 bg-gray-200 rounded w-80 mb-2 animate-pulse" />
      <div className="h-5 bg-gray-200 rounded w-48 mb-4 animate-pulse" />
      <div className="space-y-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-start">
            <div className="w-6 h-6 rounded-full bg-gray-200 mr-2 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const SkillsCoveredSkeleton = () => (
  <div className="container mx-auto px-4 py-8 rounded-xl bg-white">
    <div className="max-w-4xl">
      <div className="h-8 bg-gray-200 rounded w-72 mb-6 animate-pulse" />
      <div className="flex flex-wrap gap-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="h-8 bg-gray-200 rounded-xl w-24 animate-pulse"
          />
        ))}
      </div>
    </div>
  </div>
);

const JobOpportunitiesSkeleton = () => (
  <div className="container mx-auto px-4 py-8 rounded-xl bg-white">
    <div className="max-w-4xl">
      <div className="h-8 bg-gray-200 rounded w-48 mb-6 animate-pulse" />
      <div className="h-4 bg-gray-200 rounded w-96 mb-6 animate-pulse" />

      <div className="flex flex-wrap gap-3 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center px-4 py-2">
            <div className="w-6 h-6 bg-gray-200 rounded mr-2 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-32 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CourseEnrollmentSkeleton = () => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="h-48 bg-gray-200 rounded-lg mb-4 animate-pulse" />
    <div className="h-8 bg-gray-200 rounded w-24 mb-4 animate-pulse" />
    <div className="h-12 bg-gray-200 rounded w-full mb-4 animate-pulse" />
    <div className="space-y-3">
      <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
      <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
      <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse" />
    </div>
  </div>
);

const CourseLoadingSkeleton = () => (
  <>
    {/* Centered Banner Skeleton */}
    <div className="flex justify-center mb-6">
      <div className="relative overflow-hidden rounded-xl w-full max-w-4xl">
        <div className="bg-gray-200 h-40 w-full animate-pulse" />
        <div className="absolute inset-0 p-6 flex flex-col justify-center">
          <div className="h-8 bg-gray-300 rounded w-48 mb-3 animate-pulse" />
          <div className="h-4 bg-gray-300 rounded w-64 animate-pulse" />
        </div>
      </div>
    </div>

    {/* Main Content Layout */}
    <div className="flex flex-col lg:flex-row w-full gap-6">
      {/* Main Content Area */}
      <main className="w-full lg:flex-1 min-w-0">
        <div className="space-y-6">
          <CourseTitleSkeleton />
          <CourseDescriptionSkeleton />
          <DesignedForSkeleton />
          <SkillsCoveredSkeleton />
          <JobOpportunitiesSkeleton />
        </div>
      </main>
    </div>
  </>
);

export default async function CourseDetailsPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const user = await currentUser();

  return (
    <>
      <main className="w-full lg:flex-1 min-w-0">
        <div className="min-h-screen space-y-6">
          {/* Banner */}
          <div className="relative overflow-hidden rounded-xl rounded-bl-[80px] lg:rounded-bl-[100px] lg:rounded-tr-[100px] rounded-tr-[80px] mt-10 h-50 md:h-40 w-[100%]">
            <Image
              src="/course-banner.svg"
              alt="Learning Management Dashboard"
              width={1200}
              height={200}
              className="object-cover w-full h-full"
              priority
            />

            <div className="absolute inset-0 text-white p-6 flex flex-col justify-center">
              <h1 className="text-3xl font-bold">My Learning</h1>
              <p className="my-3">Hi {user?.fullName}, you&#39;re welcome</p>
            </div>
          </div>

          <Suspense fallback={<CourseLoadingSkeleton />}>
            <CourseData course={await getCourseBySlug(slug)} />
          </Suspense>
        </div>
      </main>
      <aside className="w-full lg:w-75 lg:flex-shrink-0 lg:flex-grow-0">
        <div className="lg:sticky lg:top-4">
          <Suspense fallback={<CourseEnrollmentSkeleton />}>
            <CourseEnrollments
              course={await getCourseBySlug(slug)}
              user={user}
            />
          </Suspense>
        </div>
      </aside>
    </>
  );
}
