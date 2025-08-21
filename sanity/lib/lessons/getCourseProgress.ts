import { defineQuery } from "groq";
import { sanityFetch } from "../live";
import { getStudentByClerkId } from "../student/getStudentByClerkId";
import { calculateCourseProgress } from "@/lib/courseProgress";
import { Module } from "@/sanity.types";

export async function getCourseProgress(clerkId: string, courseId: string) {
  // First get the student's Sanity ID
  const student = await getStudentByClerkId(clerkId);

  if (!student?.data?._id) {
    throw new Error("Student not found");
  }

  console.log("Student ID:", student.data._id);
  console.log("Course ID:", courseId);

  const progressQuery = defineQuery(`{
    "completedLessons": *[_type == "lessonCompletion" && student._ref == $studentId && course._ref == $courseId] {
      ...,
      "lesson": lesson->{...},
      "module": module->{...}
    },
    "allCompletions": *[_type == "lessonCompletion" && student._ref == $studentId] {
      ...,
      "lesson": lesson->{...},
      "course": course->{_id, title}
    },
    "course": *[_type == "course" && _id == $courseId][0] {
      ...,
      "modules": modules[]-> {
        ...,
        "lessons": lessons[]-> {...}
      }
    }
  }`);

  const result = await sanityFetch({
    query: progressQuery,
    params: { studentId: student.data._id, courseId },
  });

  console.log("Raw result:", result.data);

  const { completedLessons = [], allCompletions = [], course } = result.data;

  console.log("All completions for student:", allCompletions);
  console.log("Course-specific completions:", completedLessons);

  // Use the course-specific completions directly since we're filtering in the query
  const courseCompletedLessons = completedLessons;

  console.log("Filtered completed lessons:", courseCompletedLessons);

  // Calculate overall course progress
  const courseProgress = calculateCourseProgress(
    (course?.modules as unknown as Module[]) || null,
    courseCompletedLessons.map(
      (completion) => ({
        ...completion,
        module: completion.module || null, // Transform undefined to null
      })
    )
  );

  return {
    completedLessons: courseCompletedLessons,
    courseProgress,
  };
}