// components/layouts/user-layout.tsx
import { ReactNode } from "react";
// import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { AppSidebar } from "./app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./ui/sidebar";

interface UserLayoutProps {
  children: ReactNode;
}

export default async function UserLayout({ children }: UserLayoutProps) {
  const user = await currentUser();
  const publicMetadata = user?.publicMetadata
  const role = publicMetadata?.role

  // If no publicMetadata or it's empty, send to onboarding
  if (!publicMetadata) {
    redirect('/onboarding')
  }

  // Role-based routing
  switch (role) {
    case 'admin':
      redirect('/admin')
      break
    case 'instructor':
      redirect('/instructor')
      break
    case 'user':
    default:
      break
  }
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "19rem",
        } as React.CSSProperties
      }
      className="bg-red-"
    >
      <AppSidebar />
      <SidebarInset className="bg-inherit">
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
        <main className="container mx-auto px-4 py-2">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}