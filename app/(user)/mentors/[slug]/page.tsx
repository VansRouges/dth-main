// app/mentors/[id]/page.tsx
import CourseLayout from "@/components/layouts/course-layout";
import { currentUser } from "@clerk/nextjs/server";
// import { Briefcase } from "lucide-react";
import Image from "next/image";
import { StarRating } from "@/components/mentor/star-rating";
import { BioSection } from "@/components/mentor/biosection";

interface MentorDetailsPageProps {
  params: {
    id: string
  }
}

export default async function MentorDetailsPage({ params }: MentorDetailsPageProps) {
  const user = await currentUser();
  
  const mentor = {
    id: params.id,
    name: "Henry Osuji",
    title: "Senior Data Analyst, Google",
    starCount: 3,
    stats: {
      sessions: "1000 sessions",
      reviews: "256 Reviews",
      experience: "12 years"
    },
    bio: "Henry Osuji is a Data Analyst at Google, bringing over 12 years of rich experience in the ever-evolving landscape of data analytics. His career is characterized by a steadfast dedication to transforming complex datasets into actionable insights, driving strategic decisions at one of the world's leading technology companies. At Google, he has developed deep expertise in data mining, machine learning, advanced statistical analysis, and data visualization, contributing significantly to numerous key projects and initiatives. His technical skill set includes proficiency in SQL, Python, and cloud technologies", // full bio text
    profileInsights: {
      highlights: [
        {
          title: "Data Analysis & Strategy",
          description: "Proven ability to translate data into actionable business insights."
        },
        {
          title: "Machine Learning & Advanced Analytics",
          description: "Deep understanding of cloud-based data platforms and technologies (Azure)."
        }
      ],
      background: {
        expertise: ["Data Analysis", "Data Interpretation", "Azure Cloud Data Services", "SQL Database"],
        discipline: ["Data Science", "Business Intelligence", "Cloud Computing"],
        industries: ["Data-Driven Product Development", "Information Technology"],
        fluentIn: ["English", "Azure Cloud Platform", "Python (Advanced)", "SQL (Advanced)"]
      },
      technicalProficiency: {
        summary: "Expert in SQL, Python, Azure, and data visualization tools.",
        specialties: [
          "Cloud Data Solutions: Experience in developing and implementing sophisticated analytical models"
        ]
      }
    }
  };

  return (
    <CourseLayout>
      <div className="min-h-screen space-y-6">
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
        <div className="container mx-auto flex items-center p-6 rounded-xl bg-white shadow-sm">
          <div className="rounded-full bg-red-400 w-24 h-24 flex-shrink-0 overflow-hidden">
            <Image
              src="/dummy-mentor.png"
              alt="Mentor image"
              width={3200}
              height={1000}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className="w-full p-6 flex flex-col justify-center">
            <div className="flex space-x-2 items-center">
              <h1 className="text-3xl font-extrabold">{mentor.name}</h1>
              <StarRating rating={mentor.starCount} />
            </div>
            <p className="text-lg font-semibold text-primary mt-1">{mentor.title}</p>
            <div className="flex flex-wrap gap-4 mt-3 text-gray-600">
              <span className="flex items-center text-black">
                {mentor.stats.sessions}
              </span>
              <span className="text-primary">({mentor.stats.reviews})</span>
              <span className="font-bold text-black">Exp: {mentor.stats.experience}</span>
            </div>
          </div>
        </div>

        {/* About Mentor */}
        <div className="container mx-auto p-6 rounded-xl bg-white shadow-sm">
          <h2 className="text-3xl font-extrabold mb-4">About Mentor</h2>
          <BioSection bio={mentor.bio} />
        </div>

        {/* Profile Insights */}
        <div className="container mx-auto p-6 rounded-xl bg-white shadow-sm">
          <h2 className="text-3xl font-extrabold mb-6">Profile Insights</h2>
          
          {/* Highlights */}
          <div className="space-y-4 mb-8">
            {mentor.profileInsights.highlights.map((item, index) => (
              <div key={index} className="space-y-1">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Background */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Background</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse">
                <tbody>
                  <tr>
                    <td className="font-semibold py-2 pr-4 align-top">Expertise</td>
                    {mentor.profileInsights.background.expertise.map((item, i) => (
                      <td key={i} className="py-2 px-4 border-b border-gray-200">{item}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="font-semibold py-2 pr-4 align-top">Discipline</td>
                    {mentor.profileInsights.background.discipline.map((item, i) => (
                      <td key={i} className="py-2 px-4 border-b border-gray-200">{item}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="font-semibold py-2 pr-4 align-top">Industries</td>
                    {mentor.profileInsights.background.industries.map((item, i) => (
                      <td key={i} className="py-2 px-4 border-b border-gray-200">{item}</td>
                    ))}
                  </tr>
                  <tr>
                    <td className="font-semibold py-2 pr-4 align-top">Fluent In</td>
                    {mentor.profileInsights.background.fluentIn.map((item, i) => (
                      <td key={i} className="py-2 px-4">{item}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Technical Proficiency */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Technical Proficiency</h3>
            <p className="text-gray-700 mb-4">{mentor.profileInsights.technicalProficiency.summary}</p>
            <ul className="list-disc pl-5 space-y-2">
              {mentor.profileInsights.technicalProficiency.specialties.map((item, index) => {
                const [title, description] = item.split(': ');
                return (
                  <li key={index} className="text-gray-700">
                    <span className="font-semibold">{title}:</span> {description}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </CourseLayout>
  );
}