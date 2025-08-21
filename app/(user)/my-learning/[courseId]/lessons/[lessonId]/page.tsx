import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";
import { getLessonById } from "@/sanity/lib/lessons/getLessonById";
import getCourseById  from "@/sanity/lib/courses/getCourseById";
import { PortableText } from "@portabletext/react";
import { LessonCompleteButton } from "@/components/my-learning/LessonCompleteButton";
import { VideoPlayerMain } from "@/components/video-player/VideoPlayerMain";

interface LessonPageProps {
  params: Promise<{
    courseId: string;
    lessonId: string;
  }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const user = await currentUser();
  const { courseId, lessonId } = await params;

  const [lesson, course] = await Promise.all([
    getLessonById(lessonId),
    getCourseById(courseId)
  ]);

  if (!lesson) {
    return redirect(`/my-learning/${courseId}`);
  }

  // Build lesson navigation data
  const allLessons: string[] = [];
  let currentLessonIndex = 0;
  
  if (course?.modules) {
    course.modules.forEach((module) => {
      if (module.lessons) {
        module.lessons.forEach((moduleLesson) => {
          allLessons.push(`/my-learning/${courseId}/lessons/${moduleLesson._id}`);
          if (moduleLesson._id === lessonId) {
            currentLessonIndex = allLessons.length - 1;
          }
        });
      }
    });
  }

  return (
    <div className="h-full flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto pt-12 pb-20 px-4">
          <h1 className="text-2xl font-bold mb-4">{lesson.title}</h1>

          {lesson.description && (
            <p className="prose prose-blue text-lg dark:prose-invert mb-8">{lesson.description}</p>
          )}

          <div className="space-y-12">
            {/* Video Section */}
            {lesson.videoUrl && (
              <div className="mb-16">
                <VideoPlayerMain 
                  subtitles={[]} 
                  url={lesson.videoUrl}
                  lessons={allLessons}
                  currentLessonIndex={currentLessonIndex}
                />
              </div>
            )}

            {/* Loom Embed Video if loomUrl is provided */}
            {/* {lesson.loomUrl && <LoomEmbed shareUrl={lesson.loomUrl} />} */}

            {/* Lesson Content */}
            {lesson.content && (
              <div className="mt-42">
                <h2 className="text-2xl font-semibold mb-4">Lesson Notes</h2>
                <div className="prose prose-blue text-lg dark:prose-invert max-w-none">
                  <PortableText value={lesson.content} />
                </div>
              </div>
            )}

            {/* Completion Button - Positioned at bottom right */}
            <div className="flex justify-end pt-8 mt-16">
              <LessonCompleteButton lessonId={lesson._id} clerkId={user!.id} courseId={courseId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}