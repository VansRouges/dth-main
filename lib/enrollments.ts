import { defineQuery } from "groq";
import { sanityFetch } from "@/sanity/lib/live";

export interface Enrollment {
  _id: string;
  student: {
    _ref: string;
  };
  course: {
    _id: string;
    title: string;
    price: number;
    instructor?: {
      name: string;
    };
  } | null;
  amount: number;
  paymentId: string;
  enrolledAt: string;
}

/**
 * Fetch all enrollments with course and student details
 */
export async function getAllEnrollments() {
  const enrollmentsQuery = defineQuery(`*[_type == "enrollment"] {
    _id,
    student,
    "course": course-> {
      _id,
      title,
      price,
      "instructor": instructor-> {
        name
      }
    },
    amount,
    paymentId,
    enrolledAt
  } | order(enrolledAt desc)`);

  const result = await sanityFetch({ query: enrollmentsQuery });
  return result.data as Enrollment[];
}

/**
 * Get enrollments for a specific student by their Sanity document ID
 */
export async function getEnrollmentsByStudentId(studentId: string) {
  const enrollments = await getAllEnrollments();
  return enrollments.filter(enrollment => enrollment.student._ref === studentId);
}

/**
 * Calculate total amount paid by a student
 */
export async function getTotalAmountPaidByStudent(studentId: string): Promise<number> {
  const enrollments = await getEnrollmentsByStudentId(studentId);
  return enrollments.reduce((total, enrollment) => total + (enrollment.amount || 0), 0);
}

/**
 * Get enrollment statistics for all students
 */
export async function getEnrollmentStats() {
  const enrollments = await getAllEnrollments();
  
  // Group enrollments by student
  const studentEnrollments = enrollments.reduce((acc, enrollment) => {
    const studentId = enrollment.student._ref;
    if (!acc[studentId]) {
      acc[studentId] = [];
    }
    acc[studentId].push(enrollment);
    return acc;
  }, {} as Record<string, Enrollment[]>);

  // Calculate stats for each student
  const studentStats = Object.entries(studentEnrollments).map(([studentId, enrollments]) => ({
    studentId,
    totalEnrollments: enrollments.length,
    totalAmountPaid: enrollments.reduce((total, enrollment) => total + (enrollment.amount || 0), 0),
    enrollments
  }));

  return {
    studentStats,
    totalRevenue: enrollments.reduce((total, enrollment) => total + (enrollment.amount || 0), 0),
    totalEnrollments: enrollments.length
  };
}
