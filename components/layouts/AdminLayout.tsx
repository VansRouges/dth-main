// components/layouts/admin-layout.tsx
import { ReactNode } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
      {/* Sidebar + Main content container */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-white border-r">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
          </div>
          
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/admin/overview" 
                  className="block px-4 py-2 rounded-md hover:bg-gray-100 font-medium text-blue-600"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link 
                  href="/admin/users" 
                  className="block px-4 py-2 rounded-md hover:bg-gray-100"
                >
                  User Management
                </Link>
              </li>
              <li>
                <Link 
                  href="/admin/courses" 
                  className="block px-4 py-2 rounded-md hover:bg-gray-100"
                >
                  Course Management
                </Link>
              </li>
              <li>
                <Link 
                  href="/admin/settings" 
                  className="block px-4 py-2 rounded-md hover:bg-gray-100"
                >
                  Settings
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content area */}
        <main className="flex-1">
          {/* Top navigation */}
          <header className="bg-white border-b p-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Dashboard</h2>
            <div className="flex items-center space-x-4">
              <UserButton />
            </div>
          </header>
          
          {/* Page content */}
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}