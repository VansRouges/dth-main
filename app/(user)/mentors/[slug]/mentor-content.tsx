// components/mentor/mentor-data.tsx
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import getInstructorBySlug from "@/sanity/lib/instructors/getInstructorBySlug";
import { BioSection } from "@/components/mentor/biosection";

interface MentorDataProps {
  slug: string;
}

export async function MentorData({ slug }: MentorDataProps) {
  const mentor = await getInstructorBySlug(slug);

  if (!mentor) {
    return (
      <div className="container mx-auto p-6 rounded-xl bg-gray-50 shadow-sm">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Mentor Not Found</h2>
          <p className="text-gray-600">The mentor you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
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
          <div className="flex flex-wrap flex-col md:flex-row md:items-center gap-4">
            <h1 className="text-xl lg:text-3xl font-extrabold">{mentor?.name}</h1>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {mentor?.yearsOfExperience}+ years experience
              </span>
            </div>
          </div>
          <p className="text-base lg:text-xl font-semibold text-primary mt-2">
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
          <h2 className="text-xl lg:text-3xl font-extrabold mb-6">Profile Insights</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentor.profileInsights.map((insight, index) => {
              // Map index to one of the four colors
              const colors = ['#28A745', '#E63946', '#104BC1', '#E8C400'];
              const color = colors[index % colors.length];
              
              return (
                <div key={insight._id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 
                    className="text-base lg:text-xl font-semibold mb-2"
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
          <h2 className="text-xl lg:text-3xl font-extrabold mb-6">Professional Experience</h2>
          
          <div className="space-y-8">
            {mentor.experience.map((exp) => (
              <div key={exp._id} className="border-b border-gray-200 pb-8 last:border-b-0">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-base lg:text-xl font-semibold">{exp.title || 'Role not specified'}</h3>
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
        <div className="flex flex-col justify-start md:flex-row md:justify-between items-center gap-4">
          <div>
            <h2 className="text-xl lg:text-2xl font-bold">Ready to learn from {mentor?.name}?</h2>
            <p className="text-gray-700 mt-2">Book a 1:1 session to get personalized guidance</p>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors cursor-pointer">
            Book Session
          </button>
        </div>
      </div>
    </div>
  );
}