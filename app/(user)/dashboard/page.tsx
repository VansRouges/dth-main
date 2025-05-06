import { type NextPage } from "next";
import { currentUser } from "@clerk/nextjs/server";
import UserLayout from "@/components/user-layout";
import { DashboardOverview } from "@/components/dashboard-overview";
import { TopPicks } from "@/components/top-picks"
import { OtherPicks } from "@/components/other-picks";
import { MentorPicks } from "@/components/mentor-picks";

const UserDashboardPage: NextPage = async () => {
  const user = await currentUser();
  console.log("user:", user)

  return (
    <UserLayout> 
        <DashboardOverview userName={user?.fullName} coursesCount={4} mentoringCount={3} projectsCount={3} />

        <TopPicks />
        <MentorPicks />
        <OtherPicks />
    </UserLayout>
  );
};

export default UserDashboardPage;