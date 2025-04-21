// components/layouts/user-layout.tsx
import { ReactNode } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

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
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navigation */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/dashboard" className="text-xl font-bold">
            LearnApp
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/dashboard" className="font-medium text-blue-600">
              Dashboard
            </Link>
            <Link href="/courses" className="font-medium hover:text-blue-600">
              My Courses
            </Link>
            <Link href="/progress" className="font-medium hover:text-blue-600">
              Progress
            </Link>
            <Link href="/resources" className="font-medium hover:text-blue-600">
              Resources
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <UserButton />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}