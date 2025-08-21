import groq from "groq";
import { client } from "../adminClient";
import { getStudentByClerkId } from "../student/getStudentByClerkId";
import { sanityFetch } from "../live";

export async function completeLessonById({
  lessonId,
  clerkId,
  courseId,
}: {
  lessonId: string;
  clerkId: string;
  courseId?: string;
}) {
  try {
    // Get Sanity student ID from Clerk ID
    const student = await getStudentByClerkId(clerkId);

    if (!student?.data?._id) {
      throw new Error("Student not found");
    }

    const studentId = student.data._id;

    // Check if lesson is already completed
    const existingCompletion = await sanityFetch({
      query: groq`*[_type == "lessonCompletion" && student._ref == $studentId && lesson._ref == $lessonId][0]`,
      params: { studentId, lessonId },
    });

    if (existingCompletion.data) {
      return existingCompletion.data;
    }

    // If courseId is provided, find the module from the course context
    let moduleId;
    
    if (courseId) {
      // Find which module contains this lesson within the specified course
      const courseQuery = await sanityFetch({
        query: groq`*[_type == "course" && _id == $courseId][0]{
          "modules": modules[]->{
            _id,
            "hasLesson": count(lessons[_id == $lessonId]) > 0
          }
        }`,
        params: { courseId, lessonId },
      });

      const moduleWithLesson = courseQuery.data?.modules?.find((m: { _id: string; hasLesson: boolean }) => m.hasLesson);
      moduleId = moduleWithLesson?._id;
    }

    // If no moduleId found via course or no courseId provided, try the direct approach
    if (!moduleId) {
      const lesson = await sanityFetch({
        query: groq`*[_type == "lesson" && _id == $lessonId][0]{
          _id,
          "module": *[_type == "module" && references(^._id)][0]{
            _id
          }
        }`,
        params: { lessonId },
      });

      moduleId = lesson?.data?.module?._id;
    }

    if (!moduleId) {
      throw new Error("Could not find module for lesson");
    }

    // Use provided courseId or find it from module
    let finalCourseId = courseId;
    
    if (!finalCourseId) {
      const courseQuery = await sanityFetch({
        query: groq`*[_type == "course" && references($moduleId)][0]._id`,
        params: { moduleId },
      });
      finalCourseId = courseQuery.data;
    }

    if (!finalCourseId) {
      throw new Error("Could not determine course for lesson");
    }

    // Create new completion record
    const completion = await client.create({
      _type: "lessonCompletion",
      student: {
        _type: "reference",
        _ref: studentId,
      },
      lesson: {
        _type: "reference",
        _ref: lessonId,
      },
      module: {
        _type: "reference",
        _ref: moduleId,
      },
      course: {
        _type: "reference",
        _ref: finalCourseId,
      },
      completedAt: new Date().toISOString(),
    });

    return completion;
  } catch (error) {
    console.error("Error completing lesson:", error);
    throw error;
  }
}