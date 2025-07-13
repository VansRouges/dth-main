import { type NextPage } from "next";
import { currentUser } from "@clerk/nextjs/server";
import UserLayout from "@/components/layouts/user-layout";
import { DashboardOverview } from "@/components/dashboard-overview";
import { TopPicks } from "@/components/top-picks"
import { OtherPicks } from "@/components/other-picks";
import { Mentors } from "@/components/mentors"
import { getCourses } from "@/sanity/lib/courses/getCourses";
import { getInstructors } from "@/sanity/lib/instructors/getInstructors";
import { GetCoursesQueryResult } from "@/sanity.types";

const UserDashboardPage: NextPage = async () => {
  const user = await currentUser();
  const courses: GetCoursesQueryResult = await getCourses();
  const instructors = await getInstructors();
  console.log("courses:", courses)
  console.log("instructors:", instructors)
  console.log("user:", user)

  return (
    <UserLayout> 
        <DashboardOverview userName={user?.fullName} coursesCount={4} mentoringCount={3} projectsCount={3} />

        <TopPicks courses={courses} /> 
        <Mentors instructors={instructors} />
        <OtherPicks courses={courses} /> 
    </UserLayout>
  );
};

export default UserDashboardPage;