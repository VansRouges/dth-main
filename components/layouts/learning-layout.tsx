// components/layouts/user-layout.tsx
import { ReactNode } from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { AppSidebar } from "../app-sidebar";
import { ChevronDown } from "lucide-react"
import { SidebarInset, SidebarProvider } from "../ui/sidebar";
// import { OnboardingSidebar } from "./onboarding-sidebar";
import Image from "next/image";
import { SearchBar } from "../SearchBar";

interface UserLayoutProps {
  children: ReactNode;
}

export default async function LearningLayout({ children }: UserLayoutProps) {
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
          {/* <SidebarTrigger className="ml-1 text-gray-700 hover:text-gray-700 cursor-pointer hover:bg-white" /> */}
          <SearchBar />
          <div className="ml-auto flex space-x-3">
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
        <div className="">
          <main className="">
            {children}
          </main>
          
          {/* Onboarding Sidebar (Right) - Hidden on mobile, visible on large screens */}
          {/* <div className="hidden lg:block mx-auto bg-green- col-span-1">
            <OnboardingSidebar />
          </div> */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}