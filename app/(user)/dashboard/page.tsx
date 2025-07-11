import { type NextPage } from "next";
import { currentUser } from "@clerk/nextjs/server";
import UserLayout from "@/components/layouts/user-layout";
import { DashboardOverview } from "@/components/dashboard-overview";
import { TopPicks } from "@/components/top-picks"
import { OtherPicks } from "@/components/other-picks";
import { MentorPicks } from "@/components/mentor-picks";
import { getCourses } from "@/sanity/lib/courses/getCourses";
import { GetCoursesQueryResult } from "@/sanity.types";

const UserDashboardPage: NextPage = async () => {
  const user = await currentUser();
  const courses: GetCoursesQueryResult = await getCourses();
  // Map rawCourses to ensure all required fields are present and not undefined
  // const courses = rawCourses.map((course) => ({
  //   ...course,
  //   title: course.title ?? "",
  //   price: course.price ?? 0,
  //   slug: course.slug ?? "",
  //   instructor: {
  //     _id: course.instructor?._id ?? "",
  //     _type: "instructor",
  //     _createdAt: course.instructor?._createdAt ?? "",
  //     _updatedAt: course.instructor?._updatedAt ?? "",
  //     _rev: course.instructor?._rev ?? "",
  //     name: course.instructor?.name ?? "",
  //     bio: course.instructor?.bio ?? "",
  //     photo: course.instructor?.photo,
  //     yearsOfExperience: course.instructor?.yearsOfExperience,
  //     currentlyWorksAt: course.instructor?.currentlyWorksAt,
  //   },
  //   // Add other fields with defaults if needed
  // }));
  console.log("courses:", courses)
  console.log("user:", user)

  return (
    <UserLayout> 
        <DashboardOverview userName={user?.fullName} coursesCount={4} mentoringCount={3} projectsCount={3} />

        <TopPicks courses={courses} />
        <MentorPicks />
        <OtherPicks courses={courses} />
    </UserLayout>
  );
};

export default UserDashboardPage;