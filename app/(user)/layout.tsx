import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { ChevronDown } from "lucide-react";
import { getCourses } from "@/sanity/lib/courses/getCourses";
import React from "react";
import UserLayoutWrapper from "@/components/layouts/UserLayoutWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: 'Learning Platform',
    template: '%s | DataTechHub Learning'
  },
  description: 'Access your courses, track progress, and continue your data science journey on DataTechHub learning platform.',
};

const clerkRightNavBar = async () => {
  const user = await currentUser();

  return (
    <SignedIn>
      <div className="flex items-center space-x-2">
        <div className="bg-[#FF880033] flex justify-center items-center rounded-full w-8 h-8 p-2 cursor-pointer">
          <Image
            src="/bell.svg"
            alt="notifications"
            width={32}
            height={32}
            className="object-cover w-5 sm:w-5 h-5 sm:h-5 rounded-full"
          />
        </div>
        <div className="bg-[#FF880033] flex justify-center items-center rounded-full w-8 h-8 p-2 cursor-pointer">
          <Image
            src="/information.svg"
            alt="notifications"
            width={32}
            height={32}
            className="object-cover w-5 sm:w-5 h-5 sm:h-5 rounded-full"
          />
        </div>
      </div>
      <div className="flex space-x-2 cursor-pointer">
        <UserButton />
        <div className="hidden lg:flex items-center">
        <h1 className="font-semibold">{user?.fullName}</h1>
        <ChevronDown className="h-4 w-4 text-primary" />
        </div>
      </div>
    </SignedIn>
  );
};

export default async function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const courses = await getCourses();

  return (
    <UserLayoutWrapper
      courses={courses}
      signedInWrapper={await clerkRightNavBar()}
    >
      {children}
    </UserLayoutWrapper>
  );
}
