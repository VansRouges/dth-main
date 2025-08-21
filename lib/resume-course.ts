import { getCourseProgress } from "@/sanity/lib/lessons/getCourseProgress";
import getCourseById from "@/sanity/lib/courses/getCourseById";

export async function getNextUncompletedLesson(
  clerkId: string,
  courseId: string
): Promise<string | null> {
  try {
    // Get course data and progress
    const [course, progress] = await Promise.all([
      getCourseById(courseId),
      getCourseProgress(clerkId, courseId),
    ]);

    if (!course?.modules) {
      return null;
    }

    // Get list of completed lesson IDs
    const completedLessonIds = new Set(
      progress.completedLessons
        .map((completion) => completion.lesson?._id)
        .filter((id): id is string => Boolean(id))
    );

    // Find the first uncompleted lesson by going through modules in order
    for (const courseModule of course.modules) {
      if (courseModule.lessons) {
        for (const lesson of courseModule.lessons) {
          if (!completedLessonIds.has(lesson._id)) {
            return lesson._id;
          }
        }
      }
    }

    // If all lessons are completed, return the last lesson
    const lastModule = course.modules[course.modules.length - 1];
    const lastLesson = lastModule?.lessons?.[lastModule.lessons.length - 1];
    return lastLesson?._id || null;
  } catch (error) {
    console.error("Error finding next uncompleted lesson:", error);
    return null;
  }
}

export async function getResumeCoursePath(
  clerkId: string,
  courseId: string
): Promise<string> {
  const nextLessonId = await getNextUncompletedLesson(clerkId, courseId);
  
  if (nextLessonId) {
    return `/my-learning/${courseId}/lessons/${nextLessonId}`;
  }
  
  // Fallback to course overview if no lessons found
  return `/my-learning/${courseId}`;
}
