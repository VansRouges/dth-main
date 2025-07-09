import { type NextPage } from "next";
import { currentUser } from "@clerk/nextjs/server";
import UserLayout from "@/components/layouts/user-layout";
import { DashboardOverview } from "@/components/dashboard-overview";
import { TopPicks } from "@/components/top-picks"
import { OtherPicks } from "@/components/other-picks";
import { MentorPicks } from "@/components/mentor-picks";
import { getCourses } from "@/sanity/lib/courses/getCourses";

const UserDashboardPage: NextPage = async () => {
  const user = await currentUser();
  const courses = await getCourses();
  console.log("courses:", courses)
  console.log("user:", user)

  return (
    <UserLayout> 
        <DashboardOverview userName={user?.fullName} coursesCount={4} mentoringCount={3} projectsCount={3} />

        <TopPicks courses={courses} />
        <MentorPicks />
        <OtherPicks />
    </UserLayout>
  );
};

export default UserDashboardPage;