// app/(admin)/instructors/page.tsx
import { type NextPage } from "next";
import { currentUser } from "@clerk/nextjs/server";
import { checkAdminAccess } from "@/lib/utils";
import { redirect } from "next/navigation";
// import { Card, CardContent } from "@/components/ui/card";
// import { Calendar, Award } from "lucide-react";
import { getInstructors } from "@/sanity/lib/instructors/getInstructors";
import type { GetInstructorsQueryResult } from "@/sanity.types";
import { InstructorCard } from "@/components/admin/instructors/InstructorsCard";
import Image from "next/image";

const Instructors: NextPage = async () => {
  const user = await currentUser();
  const instructors: GetInstructorsQueryResult = await getInstructors();

  if (!checkAdminAccess(user)) {
    redirect("/");
  }

  

  return (
    <>
      {/* Banner */}
      <div className="relative overflow-hidden rounded-xl mr-14 w-[75%]">
        <Image
          src="/admin/instructor-banner.svg"
          alt="Admin Dashboard"
          width={1200}
          height={200}
          className="object-cover w-full h-full"
          priority
        />

        <div className="absolute inset-0 text-white p-6 flex flex-col justify-center">
          <h1 className="text-3xl font-extrabold">Instructor Management</h1>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-6 py-6">
        

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor._id} instructor={instructor} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Instructors;
