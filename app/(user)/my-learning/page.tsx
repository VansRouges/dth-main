import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";
import { LearningCard } from "@/components/learning-cards";
import { getEnrolledCourses } from "@/sanity/lib/student/getEnrolledCourses";
import { getCourseProgress } from "@/sanity/lib/lessons/getCourseProgress";
import Link from "next/link";
import { AlarmClock, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getLiveClassesByCourseId } from "@/sanity/lib/liveClasses/getLiveClassesByCourseId";

export const StatsCard = ({
  title,
  value,
  bgColor,
  textColor,
  iconPath,
}: {
  title: string;
  value: number;
  bgColor: string;
  textColor: string;
  iconPath: string;
}) => (
  <div
    className={`sm:w-1/3 ${bgColor} ${textColor} p-3 h-32 rounded-xl relative overflow-hidden`}
  >
    <h2 className="font-semibold">{title}</h2>
    <Image
      src={iconPath}
      alt={title}
      width={32}
      height={32}
      className="object-cover w-32 h-32 absolute bottom-0 right-0"
    />
    <p className="text-6xl font-bold absolute top-1/2 mt-4 left-8 transform -translate-y-1/2">
      {value}
    </p>
  </div>
);

export default async function LearningPage() {
  const user = await currentUser();
  if (!user?.id) return redirect("/");
  const enrolledCourses = await getEnrolledCourses(user.id);
  console.log("Enrolled Courses:", enrolledCourses);

  const currentlyEnrolled = enrolledCourses?.length;

  // Fetch live classes for each enrolled course
  const liveClassesData = await Promise.all(
    enrolledCourses
      .filter((enrollment) => enrollment.course !== null)
      .map(async (enrollment) => {
        const liveClasses = await getLiveClassesByCourseId(
          enrollment.course!._id
        );
        return {
          course: enrollment.course!,
          liveClasses,
        };
      })
  );

  console.log("Live Classes:", liveClassesData);

  // Get progress for each enrolled course
  const coursesWithProgress = await Promise.all(
    enrolledCourses
      .filter(({ course }) => course !== null) // Add this filter
      .map(async ({ course }) => {
        const progress = await getCourseProgress(user.id, course!._id);
        return {
          course: course!,
          progress: progress.courseProgress,
        };
      })
  );
  console.log("Courses with Progress:", coursesWithProgress);

  // Check for live classes scheduled for the upcoming weekend (Saturday or Sunday)
  const upcomingWeekendClasses = liveClassesData.flatMap(({ liveClasses }) =>
    liveClasses.filter((liveClass) => {
      // Skip if date is null
      if (!liveClass.date) return false;

      const liveDate = new Date(liveClass.date);
      const today = new Date();

      // Check if the live class is scheduled for Saturday or Sunday
      const isSaturday = liveDate.getDay() === 6; // Saturday
      const isSunday = liveDate.getDay() === 0; // Sunday

      // Check if the liveDate is this upcoming weekend
      const isUpcomingWeekend = isSaturday || isSunday;

      // Check if the live class is in the future (not past weekend)
      const liveClassDate = liveDate.getTime();
      const currentDate = today.getTime();

      return isUpcomingWeekend && liveClassDate > currentDate;
    })
  );

  // Get the closest weekend class
  const closestWeekendClass = upcomingWeekendClasses
    .filter(
      (liveClass): liveClass is typeof liveClass & { date: string } =>
        liveClass.date !== null
    )
    .sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    })[0];

  const showMeetingBanner = !!closestWeekendClass;
  console.log("Closest Weekend Class: ", closestWeekendClass);

  return (
    <>
      <div className="space-y-6 min-h-screen">
        {/* Stats Cards Section */}
        <div className="grid grid-cols-1 xl:grid-cols-4 mt-7 px-4">
          <div className="flex gap-4 sm:gap-0 sm:flex-row flex-col sm:space-x-3 w-full sm:col-span-3 sm:px-4 py-2 flex-1">
            <StatsCard
              title="Currently Enrolled"
              value={currentlyEnrolled}
              bgColor="bg-[#FFED8A]"
              textColor="text-[#6B5A00]"
              iconPath="/my-learning/book-open.svg"
            />
            <StatsCard
              title="Enrollment Completed"
              value={1}
              bgColor="bg-[#B5C7EC]"
              textColor="text-[#081227]"
              iconPath="/my-learning/pc-user.svg"
            />
            <StatsCard
              title="Certifications"
              value={0}
              bgColor="bg-[#9CD7A9]"
              textColor="text-[#11461D]"
              iconPath="/my-learning/cert.svg"
            />
          </div>

          {/* Learning Management Button */}
          <div className="col-span-1 w-full py-2 sm:px-4 flex items-end">
            <Link
              href="/learning-management"
              className="bg-[#104BC1] p-4 w-full h-14 font-semibold hover:bg-[#0B3589] cursor-pointer tracking-widest flex items-center justify-center text-white rounded-md"
            >
              Learning Management
            </Link>
          </div>
        </div>

        {/* Meeting Banner (Show Only If Upcoming Weekend Class Exists) */}
        {showMeetingBanner &&
          closestWeekendClass &&
          closestWeekendClass.meetingLink &&
          typeof closestWeekendClass.meetingLink === "string" && (
            <div className="relative overflow-hidden rounded-xl w- bg-white h-[40%] mx-5">
              <Image
                src="/my-learning/Shapes.png"
                alt="Meeting Banner"
                width={320}
                height={100}
                className="object-cover w-full h-full"
              />

              <div className="absolute inset-0 p-6 flex justify-center bg-red-">
                <div className="w-2/3 bg-green- space-y-5">
                  <div className="font-bold flex space-x-1">
                    <AlarmClock className="w-6 h-6" />
                    <p>{closestWeekendClass.time}</p>
                  </div>
                  <div className="my-4">
                    <h2 className="text-3xl font-bold">
                      {closestWeekendClass.title}
                    </h2>
                    <div className="flex space-x-1 my-2">
                      <GraduationCap className="h-6 w-6" />
                      <p>{closestWeekendClass.facilitator?.name}</p>
                    </div>
                    <p>{closestWeekendClass.description}</p>
                    <p className="my-3">
                      <strong>Duration: </strong>
                      {closestWeekendClass.duration} hours
                    </p>
                  </div>
                  <Link
                    href={closestWeekendClass.meetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-[#104BC1] w-[50%] h-14 my-3 font-semibold hover:bg-[#0B3589] cursor-pointer tracking-widest flex items-center justify-center text-white rounded-xl">
                      Join Now
                    </Button>
                  </Link>
                </div>
                <div className="w-1/3 bg-blue- flex justify-center">
                  <Image
                    src="/my-learning/chats.svg"
                    alt="Meeting Banner"
                    width={320}
                    height={100}
                    className="object-cover w-[80%]"
                  />
                </div>
              </div>
            </div>
          )}

        {/* Learning Cards Section */}
        <div className="p-4">
          {enrolledCourses.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 bg-white rounded-xl">
              <Image
                src="/no-courses.png"
                alt="No courses"
                width={384}
                height={384}
                className="mb-4"
                priority
              />
              <h2 className="text-2xl font-semibold mb-4">No courses yet</h2>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Browse Courses
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coursesWithProgress.map(
                (item) =>
                  item?.course && (
                    <LearningCard
                      key={item.course._id}
                      title={item.course.title}
                      course={item.course}
                      progress={item.progress}
                      href={`/my-learning/${item.course._id}`}
                    />
                  )
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
