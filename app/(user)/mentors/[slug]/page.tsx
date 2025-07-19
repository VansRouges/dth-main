// app/mentors/[id]/page.tsx
import { SignedIn, UserButton } from "@clerk/nextjs";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import getInstructorBySlug from "@/sanity/lib/instructors/getInstructorBySlug";
import { BioSection } from "@/components/mentor/biosection";

interface MentorDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function MentorDetailsPage({ params }: MentorDetailsPageProps) {
  const { slug } = await params;
  const mentor = await getInstructorBySlug(slug);
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
            {/* Banner */}
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

            {/* Mentor Profile */}
            <div className="container mx-auto flex flex-col md:flex-row items-start p-6 rounded-xl bg-white shadow-sm gap-6">
              <div className="rounded-full bg-gray-100 w-32 h-32 flex-shrink-0 overflow-hidden relative">
                {mentor?.photo ? (
                  <Image
                    src={urlFor(mentor.photo).url()}
                    alt={mentor?.name || "Mentor"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-500">
                      {mentor?.name?.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              <div className="w-full">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <h1 className="text-3xl font-extrabold">{mentor?.name}</h1>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {mentor?.yearsOfExperience}+ years experience
                    </span>
                  </div>
                </div>
                <p className="text-lg font-semibold text-primary mt-2">
                  {mentor?.jobTitle} at {mentor?.company}
                </p>
                
                {mentor?.bio && (
                  <div className="mt-4">
                    <BioSection bio={mentor?.bio} />
                  </div>
                )}
              </div>
            </div>

            {/* Profile Insights */}
            {mentor?.profileInsights && mentor.profileInsights.length > 0 && (
              <div className="container mx-auto p-6 rounded-xl bg-white shadow-sm">
                <h2 className="text-3xl font-extrabold mb-6">Profile Insights</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mentor.profileInsights.map((insight, index) => {
                    // Map index to one of the four colors
                    const colors = ['#28A745', '#E63946', '#104BC1', '#E8C400'];
                    const color = colors[index % colors.length];
                    
                    return (
                      <div key={insight._id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <h3 
                          className="text-xl font-semibold mb-2"
                          style={{ color }}
                        >
                          {insight.title}
                        </h3>
                        <p className="text-gray-700">{insight.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Experience */}
            {mentor?.experience && mentor.experience.length > 0 && (
              <div className="container mx-auto p-6 rounded-xl bg-white shadow-sm">
                <h2 className="text-3xl font-extrabold mb-6">Professional Experience</h2>
                
                <div className="space-y-8">
                  {mentor.experience.map((exp) => (
                    <div key={exp._id} className="border-b border-gray-200 pb-8 last:border-b-0">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                        <div>
                          <h3 className="text-xl font-semibold">{exp.title || 'Role not specified'}</h3>
                          <p className="text-primary font-bold">{exp.company}</p>
                        </div>
                        {(exp.startDate || exp.endDate) && (
                          <div className="text-gray-500">
                            {exp.startDate} {exp.startDate && exp.endDate ? ' - ' : ''} {exp.endDate}
                          </div>
                        )}
                      </div>
                      
                      {exp.highlights && exp.highlights.length > 0 && (
                        <div className="mt-4">
                          <h4 className="font-semibold mb-2">Key Responsibilities & Achievements:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {exp.highlights.map((highlight, index) => (
                              <li key={index} className="text-gray-700">
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Book Session CTA */}
            <div className="container mx-auto p-6 rounded-xl bg-blue-50 shadow-sm">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold">Ready to learn from {mentor?.name}?</h2>
                  <p className="text-gray-700 mt-2">Book a 1:1 session to get personalized guidance</p>
                </div>
                <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors cursor-pointer">
                  Book Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}