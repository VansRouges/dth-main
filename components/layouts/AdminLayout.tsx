// components/layouts/admin-layout.tsx
import { ReactNode } from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { AdminAppSidebar } from "../admin-app-sidebar";
import { SidebarInset, SidebarProvider } from "../ui/sidebar";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
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
      <AdminAppSidebar />
      
      {/* Main Content Area */}
      <SidebarInset className="bg-inherit flex-1 flex flex-col min-h-screen">
        {/* Navigation */}
        <header className="flex h-16 bg-inherit shrink-0 items-center justify-between px-4">
          {/* <SidebarTrigger className="ml-1 text-gray-700 hover:text-gray-700 cursor-pointer hover:bg-white" /> */}
          <div className="ml-auto">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row w-full gap-4 px-4 pb-4">
          {/* Main Content Area - Takes full width on mobile, 3/4 on desktop */}
          <main className="w-full lg:w-3/4 flex-1">
            {children}
          </main>
          
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}