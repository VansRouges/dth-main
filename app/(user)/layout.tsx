import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { ChevronDown } from "lucide-react";
import { getCourses } from "@/sanity/lib/courses/getCourses";
import React from "react";
import UserLayoutWrapper from "@/components/layouts/UserLayoutWrapper";

const clerkRightNavBar = async () => {
  const user = await currentUser();

  return (
    <SignedIn>
      <div className="flex space-x-2">
        <div className="bg-[#FF880033] rounded-full p-2 cursor-pointer">
          <Image
            src="/bell.svg"
            alt="notifications"
            width={32}
            height={32}
            className="object-cover w-5 h-5 rounded-full"
          />
        </div>
        <div className="bg-[#FF880033] rounded-full p-2 cursor-pointer">
          <Image
            src="/information.svg"
            alt="notifications"
            width={32}
            height={32}
            className="object-cover w-5 h-5 rounded-full"
          />
        </div>
      </div>
      <div className="flex space-x-2 cursor-pointer">
        <UserButton />
        <h1 className="font-semibold">{user?.fullName}</h1>
        <ChevronDown className="h-4 w-4 text-primary" />
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
