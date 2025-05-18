// components/layouts/user-layout.tsx
import { ReactNode } from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { AppSidebar } from "../app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { OnboardingSidebar } from "../onboarding-sidebar";

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
          <SidebarTrigger className="ml-1 text-gray-700 hover:text-gray-700 cursor-pointer hover:bg-white" />
          <div className="ml-auto">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-5 bg-blue-">
          <main className="bg-red- w-full col-span-5 lg:col-span-3 px-4 py-2 flex-1">
            {children}
          </main>
          
          {/* Onboarding Sidebar (Right) - Hidden on mobile, visible on large screens */}
          <div className="hidden lg:block mx-auto bg-green- col-span-2">
            <OnboardingSidebar />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}