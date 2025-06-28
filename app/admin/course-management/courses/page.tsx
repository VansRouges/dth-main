import { type NextPage } from "next";
import { redirect } from "next/navigation";
import { currentUser } from '@clerk/nextjs/server';
import { checkAdminAccess } from "@/lib/utils";
import Image from "next/image";
import CourseDashboard from "@/components/admin/course-dashboard";


const Courses: NextPage = async () => {
  const user = await currentUser();

  if (!checkAdminAccess(user)) {
    redirect("/");
  }


  return (
    <>
       {/* Banner */}
       <div className="relative overflow-hidden rounded-xl mr-14 w-[75%]">
        <Image
          src="/course-banner.svg"
          alt="Admin Dashboard"
          width={1200}
          height={200}
          className="object-cover w-full h-full"
          priority
        />

        <div className="absolute inset-0 text-white p-6 flex flex-col justify-center">
          <h1 className="text-3xl font-extrabold">Course Management</h1>
        </div>
      </div>


      <CourseDashboard />
    </>
  );
};

export default Courses;