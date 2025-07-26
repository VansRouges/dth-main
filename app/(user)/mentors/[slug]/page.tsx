// app/mentors/[id]/page.tsx
import { SignedIn, UserButton } from "@clerk/nextjs";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Suspense } from "react";
import { MentorData } from "../mentor-content";

interface MentorDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Loading skeleton components
const MentorProfileSkeleton = () => (
  <div className="container mx-auto flex flex-col md:flex-row items-start p-6 rounded-xl bg-white shadow-sm gap-6">
    <div className="rounded-full bg-gray-200 w-32 h-32 flex-shrink-0 animate-pulse" />
    <div className="w-full space-y-3">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="h-8 bg-gray-200 rounded w-48 animate-pulse" />
        <div className="h-6 bg-gray-200 rounded w-32 animate-pulse" />
      </div>
      <div className="h-6 bg-gray-200 rounded w-64 animate-pulse" />
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
      </div>
    </div>
  </div>
);

const ProfileInsightsSkeleton = () => (
  <div className="container mx-auto p-6 rounded-xl bg-white shadow-sm">
    <div className="h-8 bg-gray-200 rounded w-48 mb-6 animate-pulse" />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="border border-gray-200 rounded-lg p-4">
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2 animate-pulse" />
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ExperienceSkeleton = () => (
  <div className="container mx-auto p-6 rounded-xl bg-white shadow-sm">
    <div className="h-8 bg-gray-200 rounded w-56 mb-6 animate-pulse" />
    <div className="space-y-8">
      {[1, 2].map((i) => (
        <div key={i} className="border-b border-gray-200 pb-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
            <div className="space-y-2">
              <div className="h-6 bg-gray-200 rounded w-48 animate-pulse" />
              <div className="h-5 bg-gray-200 rounded w-32 animate-pulse" />
            </div>
            <div className="h-4 bg-gray-200 rounded w-24 animate-pulse" />
          </div>
          <div className="mt-4 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
            <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const BookSessionSkeleton = () => (
  <div className="container mx-auto p-6 rounded-xl bg-blue-50 shadow-sm">
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="space-y-2">
        <div className="h-6 bg-gray-200 rounded w-64 animate-pulse" />
        <div className="h-4 bg-gray-200 rounded w-80 animate-pulse" />
      </div>
      <div className="h-12 bg-gray-200 rounded w-32 animate-pulse" />
    </div>
  </div>
);

const MentorLoadingSkeleton = () => (
  <div className="space-y-6">
    <MentorProfileSkeleton />
    <ProfileInsightsSkeleton />
    <ExperienceSkeleton />
    <BookSessionSkeleton />
  </div>
);

export default async function MentorDetailsPage({ params }: MentorDetailsPageProps) {
  const { slug } = await params;
  const user = await currentUser();

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
          "--onboarding-sidebar-width": "22rem",
        } as React.CSSProperties
      }
      className="flex h-full"
    >
      {/* Main App Sidebar (Left) */}
      <AppSidebar />
      
      {/* Main Content Area */}
      <SidebarInset className="bg-inherit flex-1 flex flex-col min-h-screen">
        {/* Navigation */}
        <header className="flex h-16 bg-inherit shrink-0 items-center justify-between px-4">
          <div className="ml-auto flex space-x-2">
            <SignedIn>
              <div className="flex space-x-2 ">
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
                    alt="information"
                    width={32}
                    height={32}
                    className="object-cover w-5 h-5 rounded-full"
                  />
                </div>
              </div>
              {/* User Avatar and Name */}
              <div className="flex space-x-2 cursor-pointer">
                <UserButton />
                <h1 className="font-semibold">{user?.fullName}</h1>
                <ChevronDown className="h-4 w-4 text-primary" />
              </div>
            </SignedIn>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row w-full gap-4 px-4 pb-4">
          {/* Main Content Area - Takes full width on mobile, 3/4 on desktop */}
          <div className="min-h-screen space-y-6 w-full">
            {/* Banner - Shows immediately */}
            <div className="relative overflow-hidden rounded-xl mr-14 w-[90%]">
              <Image
                src="/course-banner.svg"
                alt="Learning Management Dashboard"
                width={1200}
                height={200}
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute inset-0 text-white p-6 flex flex-col justify-center">
                <h1 className="text-4xl font-bold">Book Session Now</h1>
                <p className="my-3">Hi {user?.fullName}, you&#39;re welcome</p>
              </div>
            </div>

            {/* Mentor Content with Suspense Loading */}
            <Suspense fallback={<MentorLoadingSkeleton />}>
              <MentorData slug={slug} />
            </Suspense>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}