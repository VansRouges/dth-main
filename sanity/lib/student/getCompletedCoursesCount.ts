import { getStudentByClerkId } from "./getStudentByClerkId";
import { getEnrolledCourses } from "./getEnrolledCourses";
import { getCourseProgress } from "../lessons/getCourseProgress";

export async function getCompletedCoursesCount(clerkId: string): Promise<number> {
  try {
    // Get student and their enrolled courses
    const [student, enrolledCourses] = await Promise.all([
      getStudentByClerkId(clerkId),
      getEnrolledCourses(clerkId)
    ]);

    if (!student?.data?._id || !enrolledCourses || enrolledCourses.length === 0) {
      return 0;
    }

    // Get progress for each enrolled course and count completed ones
    const progressChecks = await Promise.allSettled(
      enrolledCourses
        .filter(({ course }) => course !== null)
        .map(async ({ course }) => {
          try {
            const progress = await getCourseProgress(clerkId, course!._id);
            return progress.courseProgress === 100;
          } catch (error) {
            console.error(`Error getting progress for course ${course!._id}:`, error);
            return false;
          }
        })
    );

    // Count how many courses are 100% completed
    return progressChecks
      .filter((result) => result.status === 'fulfilled' && result.value)
      .length;
  } catch (error) {
    console.error("Error getting completed courses count:", error);
    return 0;
  }
}

export async function getDetailedCompletionStats(clerkId: string) {
  try {
    console.log("Getting completion stats for clerkId:", clerkId);
    const enrolledCourses = await getEnrolledCourses(clerkId);
    console.log("Enrolled courses:", enrolledCourses?.length || 0);
    
    if (!enrolledCourses || enrolledCourses.length === 0) {
      return {
        totalEnrolled: 0,
        completed: 0,
        inProgress: 0,
        notStarted: 0
      };
    }

    const coursesWithProgress = await Promise.allSettled(
      enrolledCourses
        .filter(({ course }) => course !== null)
        .map(async ({ course }) => {
          try {
            const progress = await getCourseProgress(clerkId, course!._id);
            console.log(`Course ${course!.title}: ${progress.courseProgress}%`);
            return {
              courseId: course!._id,
              progress: progress.courseProgress
            };
          } catch (error) {
            console.error(`Error getting progress for course ${course!._id}:`, error);
            return {
              courseId: course!._id,
              progress: 0
            };
          }
        })
    );

    const successfulResults = coursesWithProgress
      .filter((result) => result.status === 'fulfilled')
      .map((result) => (result as PromiseFulfilledResult<{ courseId: string; progress: number }>).value);

    const completed = successfulResults.filter(c => c.progress === 100).length;
    const inProgress = successfulResults.filter(c => c.progress > 0 && c.progress < 100).length;
    const notStarted = successfulResults.filter(c => c.progress === 0).length;

    const stats = {
      totalEnrolled: enrolledCourses.length,
      completed,
      inProgress,
      notStarted
    };

    console.log("Completion stats:", stats);
    return stats;
  } catch (error) {
    console.error("Error getting detailed completion stats:", error);
    return {
      totalEnrolled: 0,
      completed: 0,
      inProgress: 0,
      notStarted: 0
    };
  }
}
