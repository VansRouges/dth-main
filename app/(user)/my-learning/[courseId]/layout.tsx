import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import getCourseById from "@/sanity/lib/courses/getCourseById";
import { Sidebar } from "@/components/my-learning/Sidebar";
import { getCourseProgress } from "@/sanity/lib/lessons/getCourseProgress";
import { checkCourseAccess } from "@/lib/auth";
import { SidebarProvider } from "@/hooks/use-sidebar";
import { LessonCompletionProvider } from "@/hooks/use-lesson-completion";
import { GetCompletionsQueryResult } from "@/sanity.types";
import type { Metadata } from "next";

interface CourseLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    courseId: string;
  }>;
}

export async function generateMetadata({
  params,
}: CourseLayoutProps): Promise<Metadata> {
  const { courseId } = await params;
  
  try {
    const course = await getCourseById(courseId);
    
    if (!course) {
      return {
        title: "Course Not Found",
        description: "The course you're looking for could not be found.",
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    const courseTitle = course.title || "Course";

    return {
      title: `Learning: ${courseTitle}`,
      description: `Continue learning ${courseTitle} - Access course materials, track progress, and complete lessons.`,
      robots: {
        index: false,
        follow: false,
      },
    };
  } catch (error) {
    console.error("Error generating course learning metadata:", error);
    return {
      title: "Learning",
      description: "Continue your learning journey with DataTechHub.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}

interface CourseLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    courseId: string;
  }>;
}

export default async function CourseLayout({
  children,
  params,
}: CourseLayoutProps) {
  const user = await currentUser();
  const { courseId } = await params;

  if (!user?.id) {
    return redirect("/");
  }

  const authResult = await checkCourseAccess(user?.id || null, courseId);
  if (!authResult.isAuthorized || !user?.id) {
    return redirect(authResult.redirect!);
  }

  const [course, progress] = await Promise.all([
    getCourseById(courseId),
    getCourseProgress(user.id, courseId),
  ]);

  console.log("Progress:", progress)

  if (!course) {
    return redirect("/my-courses");
  }

  // Transform completed lessons to match the expected type for Sidebar
  
  const transformedCompletedLessons: GetCompletionsQueryResult["completedLessons"] = progress.completedLessons.map((completion) => ({
    ...completion,
    module: completion.module || null, // Transform undefined to null
  })) as GetCompletionsQueryResult["completedLessons"];

  return (
    <SidebarProvider>
      <LessonCompletionProvider>
        <div className="h-full">
          <Sidebar course={course} completedLessons={transformedCompletedLessons} />
          <main className="h-full pr-20 lg:pr-96">{children}</main>
        </div>
      </LessonCompletionProvider>
    </SidebarProvider>
  );
}