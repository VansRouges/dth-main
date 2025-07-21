import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import LearningLayout from "@/components/layouts/learning-layout";
import Image from "next/image";
import { LearningCard } from "@/components/learning-cards";
import { getEnrolledCourses } from "@/sanity/lib/student/getEnrolledCourses";
import { getCourseProgress } from "@/sanity/lib/lessons/getCourseProgress";
import Link from "next/link";
import { AlarmClock, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const StatsCard = ({ 
  title, 
  value, 
  bgColor, 
  textColor, 
  iconPath 
}: {
  title: string;
  value: number;
  bgColor: string;
  textColor: string;
  iconPath: string;
}) => (
  <div className={`w-1/3 ${bgColor} ${textColor} p-3 h-32 rounded-xl relative overflow-hidden`}>
    <h2 className="font-semibold">{title}</h2>
    <Image
      src={iconPath}
      alt={title}
      width={32}
      height={32}
      className="object-cover w-32 h-32 absolute bottom-0 right-0"
    />
    <p className="text-6xl font-bold absolute top-1/2 mt-4 left-8 transform -translate-y-1/2">
      {value}
    </p>
  </div>
);

export default async function LearningPage() {
  const user = await currentUser();
  if (!user?.id) return redirect("/");

  const [enrolledCourses, coursesWithProgress] = await Promise.all([
    getEnrolledCourses(user.id),
    getEnrolledCourses(user.id).then(courses => 
      Promise.all(
        courses.map(async ({ course }) => {
          if (!course) return null;
          const progress = await getCourseProgress(user.id, course._id);
          return { course, progress: progress.courseProgress };
        })
      )
    )
  ]);

  return (
    <LearningLayout>
      <div className="space-y-6 min-h-screen">

        {/* Stats Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 mt-7 px-4">
          <div className="flex space-x-3 w-full col-span-3 px-4 py-2 flex-1">
            <StatsCard 
              title="Currently Enrolled" 
              value={3} 
              bgColor="bg-[#FFED8A]" 
              textColor="text-[#6B5A00]" 
              iconPath="/my-learning/book-open.svg" 
            />
            <StatsCard 
              title="Enrollment Completed" 
              value={1} 
              bgColor="bg-[#B5C7EC]" 
              textColor="text-[#081227]" 
              iconPath="/my-learning/pc-user.svg" 
            />
            <StatsCard 
              title="Certifications" 
              value={5} 
              bgColor="bg-[#9CD7A9]" 
              textColor="text-[#11461D]" 
              iconPath="/my-learning/cert.svg" 
            />
          </div>
          
          {/* Learning Management Button */}
          <div className="col-span-1 w-full py-2 px-4">
            <Link 
              href="/learning-management"
              className="bg-[#104BC1] w-full h-14 font-semibold hover:bg-[#0B3589] cursor-pointer tracking-widest flex items-center justify-center text-white rounded-md"
            >
              Learning Management
            </Link>
          </div>
        </div>

        {/* Meeting Banner */}
        <div className="relative overflow-hidden rounded-xl w- bg-white h-[40%] mx-5">
          <Image
            src="/my-learning/Shapes.png"
            alt="Meeting Banner"
            width={320}
            height={100}
            className="object-cover w-full h-full"
          />

          <div className="absolute inset-0 p-6 bg-red- flex justify-center">
            <div className="w-2/3 bg-green-">            
              <div className="font-bold flex space-x-1">
                <AlarmClock className="w-6 h-6" />
                <p>10:00AM - 12:00AM</p>
              </div>
              <div className="my-2">
                <h2 className="text-3xl font-bold">Azure Data Engineering Course with Certification</h2>
                <div className="flex space-x-1 my-2">
                  <GraduationCap className="h-6 w-6" />
                  <p>Agina Evans</p>
                </div>
                <p>
                  Unlock the power of data-driven decision-making with our Advanced Strategic Analysis Course. Designed for professionals and business leaders, this course delves into the frameworks, methodologies, and tools used to evaluate complex challenges, predict market trends, and craft winning strategies...    
                </p>
              </div>
              <Button className="bg-[#104BC1] w-[50%] h-14 my-3 font-semibold hover:bg-[#0B3589] cursor-pointer tracking-widest flex items-center justify-center text-white rounded-xl">Join Now</Button>
            </div>
            <div className="w-1/3 bg-blue- flex justify-center">
              <Image
                src="/my-learning/chats.svg"
                alt="Meeting Banner"
                width={320}
                height={100}
                className="object-cover w-[80%]"

              />
            </div>
          </div>
        </div>

        {/* Learning Cards Section */}
        <div className="p-4">
          {enrolledCourses.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 bg-white rounded-xl">
              <Image
                src="/no-courses.png"
                alt="No courses"
                width={384}
                height={384}
                className="mb-4"
                priority
              />
              <h2 className="text-2xl font-semibold mb-4">No courses yet</h2>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Browse Courses
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coursesWithProgress.map((item) => (
                item?.course && (
                  <LearningCard
                    key={item.course._id}
                    title={item.course.title}
                    course={item.course}
                    progress={item.progress}
                  />
                )
              ))}
            </div>
          )}
        </div>
      </div>
    </LearningLayout>
  );
}