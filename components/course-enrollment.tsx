import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const CourseEnrollment = () => {
  return (
    <>
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6 space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Complete Course Enrolment</h2>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button className="w-full bg-[#104BC1] hover:bg-[#0B3589] font-semibold cursor-pointer h-12 text-lg">
            Purchase (NGN 12,000.00)
          </Button>

          {/* Share button */}
          <div className="flex font-semibold text-[#0F44B0] cursor-pointer space-x-2 justify-center items-center">
            <span>Share</span>
            <Image
              width={320}
              height={110}
              src="/share.svg"
              alt="share button"
              className="w-6 h-6"
            />
          </div>
        </div>
        
        {/* Video Tutorial Section */}
        <div className="space-y-3 bg-white p-1 rounded-xl">
          <div className="relative overflow-hidden">
            <div className="aspect-video relative">
              <iframe
                className="absolute inset-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your real video URL
                title="Dashboard Tutorial Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Preview this course</h3>
          </div>
        </div>

        {/* Course Modules */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Module 1: Introduction to Azure Data Engineering</h3>
          <div className="space-y-2 pl-4">
            <p className="text-gray-700">• Overview of Azure Data Engineering</p>
            <p className="text-gray-700">• Introduction to Azure Cloud Services for Data</p>
            <p className="text-gray-700">• Understanding Azure Storage Options (Blob Storage, Data Lake)</p>
            <p className="text-gray-700">• Overview of ETL/ELT in Azure</p>
            <p className="text-gray-700">• Introduction to Azure Data Factory (ADF)</p>
            <p className="text-gray-700">• Data Ingestion Basics: Connecting to Various Data Sources</p>
            <p className="text-gray-700">• Fundamentals of Azure SQL Database & Synapse Analytics</p>
            <p className="text-gray-700">• Introduction to Azure Databricks and Apache Spark</p>
            <p className="text-gray-700">• Security and Compliance Basics in Azure</p>
            <p className="text-gray-700">• Hands-on Skill-Creating an Azure Account & Resource Groups</p>
          </div>

          <div className="pt-2">
            <Link href="#" className="text-blue-600 hover:underline font-medium">
              Assessments
            </Link>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">Module 2</h3>
            <h3 className="text-xl font-bold">Module 3</h3>
            <h3 className="text-xl font-bold">Module 4</h3>
          </div>
        </div>
      </div>

      {/* Invite Friends Section */}
      <div className="space-y-3 rounded-xl bg-white p-4 my-3 border rounded-xl shadow-md">
        <div className="flex justify-center">
          <div className="flex flex-col space-y-3">
            <h3 className="font-bold">Invite Friends</h3>
            <p className="text-sm mt-1">
              Invite <span className="text-[#0F44B0]">friends</span> and get access to free courses
            </p>
          </div>
          <Image
            src="/friends.png"
            alt="Invite friends illustration"
            width={150}
            height={100}
            className="object-cover w-24 h-full"
          />
        </div>
        <Button className="w-full bg-[#F7D394] hover:bg-primary cursor-pointer text-white">
          Invite Friends
        </Button>
      </div>
    </>
    
  );
};