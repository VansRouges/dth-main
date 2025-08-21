import { getAllStudentsWithDetails, getStudentById } from "@/sanity/lib/student/getAllStudentsWithDetails";
import { getCourseProgress } from "@/sanity/lib/lessons/getCourseProgress";

interface StudentCourseProgress {
  courseId: string;
  courseTitle: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  instructor: string;
  amountPaid: number;
  enrolledAt: string;
}

export async function getStudentWithCourseProgress(studentId: string) {
  try {
    const student = await getStudentById(studentId);
    
    if (!student) {
      return null;
    }

    // Calculate progress for each enrolled course
    const courseProgressData: StudentCourseProgress[] = await Promise.all(
      student.enrollments
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .filter((enrollment: any) => enrollment.course) // Filter out null courses
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map(async (enrollment: any) => {
        try {
          if (!enrollment.course || !student.clerkId) {
            throw new Error('Missing course or student clerkId');
          }

          const progress = await getCourseProgress(student.clerkId, enrollment.course._id);
          
          // Calculate total lessons in the course
          // For now, we'll use a placeholder until we can fetch the full course data
          const totalLessons = 0; // Will be updated when we fetch course details

          return {
            courseId: enrollment.course._id,
            courseTitle: enrollment.course.title || 'Untitled Course',
            progress: progress.courseProgress,
            totalLessons,
            completedLessons: progress.completedLessons.length,
            instructor: enrollment.course.instructor?.name || 'Unknown',
            amountPaid: enrollment.amount || 0,
            enrolledAt: enrollment.enrolledAt || new Date().toISOString(),
          };
        } catch (error) {
          console.error(`Error getting progress for course ${enrollment.course?._id}:`, error);
          return {
            courseId: enrollment.course?._id || 'unknown',
            courseTitle: enrollment.course?.title || 'Untitled Course',
            progress: 0,
            totalLessons: 0,
            completedLessons: 0,
            instructor: enrollment.course?.instructor?.name || 'Unknown',
            amountPaid: enrollment.amount || 0,
            enrolledAt: enrollment.enrolledAt || new Date().toISOString(),
          };
        }
      })
    );

    // Calculate totalAmountPaid from course progress data
    const totalAmountPaid = courseProgressData.reduce((total, course) => total + course.amountPaid, 0);

    return {
      ...student,
      firstName: student.firstName || '',
      lastName: student.lastName || '',
      email: student.email || '',
      imageUrl: student.imageUrl ? student.imageUrl : undefined,
      totalAmountPaid,
      courseProgress: courseProgressData,
    };
  } catch (error) {
    console.error("Error getting student with course progress:", error);
    return null;
  }
}

export async function getAllStudentsWithBasicInfo() {
  try {
    const students = await getAllStudentsWithDetails();
    
    // Add basic calculated fields for the list view (no course progress here)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return students?.map((student: any) => ({
      ...student,
      fullName: `${student.firstName || ''} ${student.lastName || ''}`.trim(),
      joinedDate: new Date(student._createdAt).toLocaleDateString(),
      // Remove averageProgress - will only be shown in detail view
    })) || [];
  } catch (error) {
    console.error("Error getting students with basic info:", error);
    return [];
  }
}
