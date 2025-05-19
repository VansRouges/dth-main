import CourseLayout from "@/components/layouts/user-layout"
import { currentUser } from "@clerk/nextjs/server";
import { 
  Star, 
  Clock, 
  Calendar, 
  Sparkles, 
  Check, 
  Briefcase,
  ChevronRight
} from "lucide-react"
import Image from "next/image";

interface CourseDetailsPageProps {
  params: {
    id: string
  }
}

export default async function CourseDetailsPage({ params }: CourseDetailsPageProps) {
  const user = await currentUser();
  
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
    targetAudience: [
      "Aspiring Data Engineers looking to build expertise in cloud-based data processing",
      "Data Analysts and BI Professionals who want to enhance their skills in scalable data workflows",
      "Finance, Marketing, and Sales Professionals seeking to manage and analyze large datasets efficiently",
      "Students and Graduates who want to develop a strong Azure Data Engineering portfolio",
      "Entrepreneurs and Business Owners who need to build data pipelines and optimize business insights",
      "Anyone Interested in Data Engineering who wants to master Azure for end-to-end data solutions"
    ],
    skills: [
      "Azure Fundamentals",
      "Azure Storage",
      "Azure Resource Manager (ARM)",
      "Real-time data streaming (Azure Stream Analytics)",
      "NoSQL databases (Cosmos DB)",
      "Data security and encryption",
      "Automating workflows",
      "Resource scaling and cost management",
      "Data Ingestion",
      "Spark SQL & Delta Lake"
    ]
  }

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
            <h1 className="text-3xl font-bold">My Learning</h1>
            <p>Welcome back, {user?.fullName}</p>
            <p className="mt-2 text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { 
                month: '2-digit', 
                day: '2-digit', 
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>

        {/* Course Title */}
        <div className="container mx-auto p-4 rounded-xl bg-white">
            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>

            {/* Tags */}
            <div className="flex flex-wrap font-semibold gap-2 mb-4">
              <div className="flex items-center bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                  <Star className="h-4 w-4 mr-1 fill-orange-500 text-orange-500" />
                  <span>Top Rated</span>
              </div>
              <div className="flex items-center bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
                  <span>Data Engineering</span>
              </div>
            </div>

            {/* Course Metadata */}
            <div className="flex flex-wrap font-semibold gap-6 text-sm">
              <div className="flex items-center text-[#28A745]">
                  <Sparkles className="h-4 w-4 mr-1" />
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
                  Updated: <span className="text-primary">{course.updated}</span>
                  </span>
              </div>
            </div>
        </div>

        {/* Course Description */}
        <div className="container mx-auto rounded-xl px-4 pb-12 bg-white">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-extrabold mb-4">Course Description</h2>
            <div className="space-y-4">
                {course.description.map((paragraph, index) => (
                <p key={index} className="text-gray-800 leading-relaxed">
                  {paragraph} 
                </p>
                ))}
            </div>
          </div>
        </div>
        
        {/* Who the Course is Designed For */}
        <div className="container mx-auto px-4 py-8 rounded-xl bg-white">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-extrabold my-">Who the Course is Designed For</h2>
            <h3 className="text-md font-semibold mb-4 text-gray-800">This course is Ideal for:</h3>
            <div className="">
              <ul className="space-y-3">
                {course.targetAudience.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-6 h-6 rounded-full bg-green-500 flex justify-center items-center mt-2 p-1 mr-2">
                      <Check className="h-5 w-5 text-white" />
                    </span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Skills Covered */}
        <div className="container mx-auto px-4 py-8 rounded-xl bg-white">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-extrabold mb-6">Skills Covered in This Course</h2>
            <div className="flex flex-wrap gap-3">
              {course.skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-[#FFDAB0] px-4 py-2 rounded-xl border border-[#E87C00] flex-shrink-0"
                >
                  <p className="text-[#E87C00] font-medium whitespace-nowrap">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Job Opportunities */}
        <div className="container mx-auto px-4 py-8 rounded-xl bg-white">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-extrabold mb-6">Job Opportunities</h2>
            <p className="text-gray-700 mb-6">
              Completing this course will equip you with skills for roles such as:
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "Azure Data Engineer",
                "Data Engineer", 
                "Cloud Data Engineer",
                "Big Data Engineer",
                "ETL Developer",
                "Azure Solutions Architect",
                "Data Architect",
                "Machine Learning Engineer",
                "AI & Data Engineer"
              ].map((role, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 flex justify-center items-center"
                >
                  <Briefcase className="w-6 h-6 mr-2" />
                  <p className="text-black font-medium whitespace-nowrap">
                    {role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ratings and Reviews */}
        <div className="container mx-auto p-4 rounded-xl bg-white flex justify-between items-center">
          <h3 className="text-2xl font-bold mb-4">Ratings and Reviews</h3>
          <button className="text-primary font-semibold hover:underline cursor-pointer">
            See more
          </button>
        </div>
        
            
        {/* About the Publisher */}
        <div className="container mx-auto p-4 rounded-xl bg-white flex justify-between items-center">
          <h3 className="text-2xl font-bold mb-4">About the Publisher</h3>
          <ChevronRight className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </CourseLayout>
  )
}