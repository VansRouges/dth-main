import UserLayout from "@/components/user-layout"
import { Star, Clock, Award, Calendar } from "lucide-react"

interface CourseDetailsPageProps {
  params: {
    id: string
  }
}

export default function CourseDetailsPage({ params }: CourseDetailsPageProps) {
  // In a real app, you would fetch course data based on the ID
  // For this example, we'll use static data matching the image
  const course = {
    id: params.id,
    title: "Azure Data Engineering Course with Certification",
    tags: ["Top Rated", "Data Engineering"],
    level: "Beginner",
    duration: "33 hours 20 mins 26 secs",
    certification: "After Completion",
    updated: "5 days ago",
    description: [
      "Azure Data Engineering is one of the most powerful domains in cloud-based data management, widely used by organizations to process, store, and analyze vast amounts of data efficiently. This hands-on, project-based course is designed to equip you with the essential skills needed to build scalable data pipelines and optimize data workflows for effective decision-making.",
      "The course starts with Azure Data Fundamentals, covering core services such as Azure Data Factory, Azure Synapse Analytics, and Azure SQL Database. You will then dive into data ingestion and transformation, learning about data lakes, ETL processes, and real-time data streaming with tools like Azure Stream Analytics and Event Hubs.",
      "Next, you will explore big data processing and analytics, utilizing technologies like Apache Spark on Azure, Databricks, and Power BI for advanced reporting. The course also introduces security, governance, and monitoring, ensuring best practices for managing enterprise data securely and efficiently.",
      "Finally, you will learn best practices for data architecture and optimization, enabling you to design efficient, cost-effective, and scalable data solutions on Azure. By the end of the course, you will be able to build and manage robust data engineering workflows that drive business insights and innovation.",
    ],
  }

  return (
    <UserLayout>
        <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="relative overflow-hidden bg-[#0a2158] rounded-lg p-6 mb-8">
            {/* Abstract shapes */}
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#6c5ce7] opacity-50 blur-3xl -translate-y-1/4 translate-x-1/4"></div>
            <div className="absolute right-20 top-10 h-40 w-40 rounded-full bg-[#a29bfe] opacity-40 blur-2xl"></div>
            <div className="absolute right-10 bottom-10 h-32 w-32 rounded-full bg-[#81ecec] opacity-30 blur-xl"></div>

            <div className="relative z-10">
            <h1 className="text-2xl font-bold text-white mb-2">My Learning</h1>
            <p className="text-white/80">Hi Henry Osuji, you're welcome</p>
            </div>
        </div>

        <div className="container mx-auto px-4 pb-12">
            {/* Course Title */}
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
            <div className="flex items-center bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                <Star className="h-4 w-4 mr-1 fill-orange-500 text-orange-500" />
                <span>Top Rated</span>
            </div>
            <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                <span>Data Engineering</span>
            </div>
            </div>

            {/* Course Metadata */}
            <div className="flex flex-wrap gap-6 mb-8 text-sm">
            <div className="flex items-center text-green-600">
                <Award className="h-4 w-4 mr-1" />
                <span>Beginner</span>
            </div>
            <div className="flex items-center text-orange-600">
                <Clock className="h-4 w-4 mr-1" />
                <span>{course.duration}</span>
            </div>
            <div className="flex items-center">
                <span>
                Certification: <span className="text-orange-600">After Completion</span>
                </span>
            </div>
            <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>
                Updated: <span className="text-gray-600">{course.updated}</span>
                </span>
            </div>
            </div>

            {/* Course Description */}
            <div className="max-w-4xl">
            <h2 className="text-2xl font-bold mb-4">Course Description</h2>
            <div className="space-y-4">
                {course.description.map((paragraph, index) => (
                <p key={index} className="text-gray-800 leading-relaxed">
                    {paragraph}
                </p>
                ))}
            </div>
            </div>
        </div>
        </div>
    </UserLayout>
  )
}
