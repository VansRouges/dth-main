import { type NextPage } from "next";
import { currentUser } from "@clerk/nextjs/server";
import UserLayout from "@/components/layouts/user-layout";
import { DashboardOverview } from "@/components/dashboard-overview";
import { TopPicks } from "@/components/top-picks"
import { OtherPicks } from "@/components/other-picks";
import { Mentors } from "@/components/mentors"
import { getCourses } from "@/sanity/lib/courses/getCourses";
import { getInstructors } from "@/sanity/lib/instructors/getInstructors";
import { getEnrolledCourses } from "@/sanity/lib/student/getEnrolledCourses";
import { GetCoursesQueryResult } from "@/sanity.types";

const UserDashboardPage: NextPage = async () => {
  const user = await currentUser();
  const allCourses: GetCoursesQueryResult = await getCourses();
  const enrolledCourses = await getEnrolledCourses(user?.id || "");
  const instructors = await getInstructors();
  
  // Normalize category names and user interests for comparison
  const normalizeString = (str: string) => 
    str.toLowerCase().replace(/\s+/g, '-');

  // Get user interests from public metadata
  const userInterests = user?.publicMetadata?.interested;
  const normalizedUserInterests = Array.isArray(userInterests)
    ? userInterests.map(interest => normalizeString(interest))
    : userInterests
      ? [normalizeString(userInterests as string)]
      : [];

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

  console.log("Matched courses:", matchedCourses);
  console.log("Other courses:", otherCourses);
  console.log("Instructors:", instructors);
  console.log("User:", user);

  return (
    <UserLayout> 
      <DashboardOverview 
        userName={user?.fullName} 
        coursesEnrolled={enrolledCourses.length} 
        mentoringCount={0} 
        projectsCount={0} 
      />

      {matchedCourses.length > 0 && (
        <TopPicks 
          title={`Recommended for You (Based on your interests)`}
          courses={matchedCourses} 
        />
      )}
      
      <Mentors instructors={instructors} />
      
      <OtherPicks 
        courses={otherCourses} 
        title={matchedCourses.length > 0 ? "Other Courses You Might Like" : "Featured Courses"}
      />
    </UserLayout>
  );
};

export default UserDashboardPage;