import { defineQuery } from "groq";
import { sanityFetch } from "../live";
import { getTotalAmountPaidByStudent, getEnrollmentsByStudentId } from "@/lib/enrollments";

export async function getAllStudentsWithDetails() {
  const studentsQuery = defineQuery(`*[_type == "student"] {
    _id,
    firstName,
    lastName,
    email,
    clerkId,
    imageUrl,
    _createdAt
  } | order(_createdAt desc)`);

  const result = await sanityFetch({ query: studentsQuery });
  
  // Get enrollment data and calculate totals for each student
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const studentsWithTotals = await Promise.all(result.data?.map(async (student: any) => {
    const enrollments = await getEnrollmentsByStudentId(student._id);
    const totalAmountPaid = await getTotalAmountPaidByStudent(student._id);
    
    return {
      ...student,
      enrollments,
      totalEnrollments: enrollments.length,
      totalAmountPaid
    };
  }) || []);
  
  return studentsWithTotals;
}

export async function getStudentById(studentId: string) {
  const studentByIdQuery = defineQuery(`*[_type == "student" && _id == $studentId][0] {
    _id,
    firstName,
    lastName,
    email,
    clerkId,
    imageUrl,
    _createdAt,
    "completions": *[_type == "lessonCompletion" && student._ref == ^._id] {
      _id,
      completedAt,
      "lesson": lesson-> {
        _id,
        title
      },
      "course": course-> {
        _id,
        title
      }
    },
    "totalCompletions": count(*[_type == "lessonCompletion" && student._ref == ^._id])
  }`);

  const result = await sanityFetch({ 
    query: studentByIdQuery,
    params: { studentId }
  });
  
  if (result.data) {
    // Get enrollment data for this student
    const enrollments = await getEnrollmentsByStudentId(studentId);
    const totalAmountPaid = await getTotalAmountPaidByStudent(studentId);
    
    return {
      ...result.data,
      enrollments,
      totalEnrollments: enrollments.length,
      totalAmountPaid
    };
  }
  
  return result.data;
}
