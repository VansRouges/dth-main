// components/layouts/user-layout.tsx
import { ReactNode } from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { AppSidebar } from "../app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { CourseEnrollment } from "../course-enrollment";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface UserLayoutProps {
  children: ReactNode;
}

export default async function CourseLayout({ children }: UserLayoutProps) {
  const user = await currentUser();
  const publicMetadata = user?.publicMetadata;
  const role = publicMetadata?.role;

  // If no publicMetadata or it's empty, send to onboarding
  if (!publicMetadata) {
    redirect('/onboarding');
  }

  // Role-based routing
  switch (role) {
    case 'admin':
      redirect('/admin');
    case 'instructor':
      redirect('/instructor');
    case 'user':
    default:
      break;
  }

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
          {/* <SidebarTrigger className="ml-1 text-gray-700 hover:text-gray-700 cursor-pointer hover:bg-white" /> */}
          <div className="ml-auto">
          <SignedIn>
              <div className="flex space-x-2 ">
                <div className="bg-[#FF880033] rounded-full p-2 cursor-pointer">
                  <Image
                    src="/bell.svg"
                    alt="notificatons"
                    width={32}
                    height={32}
                    className="object-cover w-5 h-5 rounded-full"
                  />
                </div>
                <div className="bg-[#FF880033] rounded-full p-2 cursor-pointer">
                  <Image
                    src="/information.svg"
                    alt="notificatons"
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
          <main className="w-full lg:w-3/4 flex-1">
            {children}
          </main>
          
          {/* Course Enrollment Sidebar - Hidden on mobile, visible on desktop (1/4 width) */}
          <aside className="w-full lg:w-1/4 max-w-md lg:max-w-full">
            <CourseEnrollment />
          </aside>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}