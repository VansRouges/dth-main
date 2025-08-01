// app/dashboard/page.tsx
import { type NextPage } from "next";
import { currentUser } from "@clerk/nextjs/server";
import { DashboardOverview } from "@/components/dashboard-overview";
import { TopPicks } from "@/components/top-picks"
import { OtherPicks } from "@/components/other-picks";
import { Mentors } from "@/components/mentors"
import { getCourses } from "@/sanity/lib/courses/getCourses";
import { getInstructors } from "@/sanity/lib/instructors/getInstructors";
import { getEnrolledCourses } from "@/sanity/lib/student/getEnrolledCourses";

const normalizeString = (str: string) =>
  str.toLowerCase().replace(/\s+/g, '-');

const UserDashboardPage: NextPage = async () => {
  const user = await currentUser();
  
  const getUserInterests = () => {
    const userInterests = user?.publicMetadata?.interested;
    if (Array.isArray(userInterests)) return userInterests as string[];
    if (userInterests && typeof userInterests === 'string') return [userInterests];
    return [];
  };
  
  const getNormalizedUserInterests = () => {
    return getUserInterests().map(interest => normalizeString(interest));
  };

  // const userInterests = getNormalizedUserInterests();
  
  // Fetch all data in parallel
  const [allCourses, instructors, enrolledCourses] = await Promise.all([
    getCourses(),
    getInstructors(),
    getEnrolledCourses(user?.id || ""),
  ]);

  // Filter courses based on user interests (server-side)
  const normalizedUserInterests = getNormalizedUserInterests();
  
  // Filter courses based on user interests
  const matchedCourses = allCourses.filter(course => {
    const categoryName = course.category?.name;
    if (!categoryName) return false;
    
    const normalizedCategory = normalizeString(categoryName);
    return normalizedUserInterests.includes(normalizedCategory);
  });

  // Get remaining courses that didn't match
  const otherCourses = allCourses.filter(course => {
    const categoryName = course.category?.name;
    if (!categoryName) return false;
    
    const normalizedCategory = normalizeString(categoryName);
    return !normalizedUserInterests.includes(normalizedCategory);
  });

  return (
    <main>
      <DashboardOverview
        userName={user?.fullName}
        coursesEnrolled={enrolledCourses.length}
        mentoringCount={0}
        projectsCount={0}
      />
      
      {matchedCourses.length > 0 && (
        <div className="mt-28 sm:mt-0">
        <TopPicks
          title={`Recommended for You (Based on your interests)`}
          courses={matchedCourses}
          />
          </div>
      )}
      
      <Mentors instructors={instructors} />
      
      <OtherPicks
        courses={otherCourses}
        title={matchedCourses.length > 0 ? "Other Courses You Might Like" : "Featured Courses"}
      />
    </main>
  );
};

export default UserDashboardPage;