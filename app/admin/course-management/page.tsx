import { type NextPage } from "next";
import { redirect } from "next/navigation";
import { currentUser } from '@clerk/nextjs/server';
import { checkAdminAccess } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ManagementCard {
  title: string;
  href: string;
  icon: string;
  bgColor: string;
  textColor: string;
  iconBgColor: string;
}

const CourseManagement: NextPage = async () => {
  const user = await currentUser();

  if (!checkAdminAccess(user)) {
    redirect("/");
  }

  const managementCards: ManagementCard[] = [
    {
      title: "Courses(Cohort)",
      href: "/admin/course-management/courses",
      icon: "/admin/courses.svg",
      bgColor: "bg-[#B5C7EC]",
      textColor: "text-[#081227]",
      iconBgColor: "bg-[#104BC133]"
    },
    {
      title: "One-On-One",
      href: "#",
      icon: "/admin/teacher.svg",
      bgColor: "bg-[#FFF3B0]",
      textColor: "text-[#6B3900]",
      iconBgColor: "bg-[#FF880033]"
    },
    {
      title: "Projects",
      href: "#",
      icon: "/admin/projects.svg",
      bgColor: "bg-[#9CD7A9]",
      textColor: "text-[#11461D]",
      iconBgColor: "bg-[#4CAF5033]"
    },
  ];

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

      {/* Management Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 w-full max-w-8xl">
        {managementCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className={`${card.bgColor} ${card.textColor} h-48 rounded-xl flex flex-col justify-center items-start p-6 transition-all hover:scale-[1.02] hover:shadow-md`}
            aria-label={`Go to ${card.title}`}
          >
            <div className={`${card.iconBgColor} h-20 w-20 flex justify-center items-center rounded-full mb-4`}>
              <Image
                src={card.icon}
                alt={card.title}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-semibold">{card.title}</h2>
          </Link>
        ))}
      </div>


    </>
  );
};

export default CourseManagement;