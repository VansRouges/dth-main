import { type Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { ReactNode } from 'react'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { AdminAppSidebar } from '@/components/admin-app-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Admin Dashboard',
    template: '%s | Admin | DataTechHub'
  },
  description: 'DataTechHub Administrator Dashboard - Manage courses, students, instructors, and platform analytics.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider
          style={
            {
              '--sidebar-width': '19rem',
              '--onboarding-sidebar-width': '22rem',
            } as React.CSSProperties
          }
          className="flex h-full"
        >
          {/* Sidebar */}
          <AdminAppSidebar />

          {/* Main Content Area */}
          <SidebarInset className="bg-inherit flex-1 flex flex-col min-h-screen">
            {/* Header */}
            <header className="flex h-16 bg-inherit shrink-0 items-center justify-between px-4">
              <div className="ml-auto">
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </header>

            {/* Page Content */}
            <div className="flex flex-col lg:flex-row w-full gap-4 px-4 pb-4">
              <main className="w-full lg:w-3/4 flex-1">
                {children}
              </main>
            </div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  )
}
