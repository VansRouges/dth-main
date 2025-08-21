import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getStudentWithCourseProgress } from '@/lib/studentProgress';
import { StudentDetailHeader } from '@/components/admin/StudentDetailHeader';
import { StudentCoursesList } from '@/components/admin/StudentCoursesList';
import { StudentStats } from '@/components/admin/StudentStats';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface StudentDetailPageProps {
  params: Promise<{
    studentId: string;
  }>;
}

export default async function StudentDetailPage({ params }: StudentDetailPageProps) {
  const { studentId } = await params;
  const student = await getStudentWithCourseProgress(studentId);
  console.log("student details:", student)

  if (!student) {
    notFound();
  }

  return (
    <div className="relative">
      {/* Header with Back Button */}
      <div className="relative overflow-hidden rounded-xl mr-96">
        <Image
          src="/admin/students.svg"
          alt="Student Details"
          width={320}
          height={100}
          className="object-cover w-full h-full"
        />
        
        <div className="absolute inset-0 w-fit p-12 flex items-center">
          <Link href="/admin/students">
            <Button variant="outline" size="sm" className="mr-4 bg-white/20 border-white/30 text-white hover:bg-white/30">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Students
            </Button>
          </Link>
          <div>
            <h2 className="text-5xl font-bold text-white">Student Details</h2>
            <p className="text-white/80 mt-2">View student progress and enrollment information</p>
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {/* Student Header */}
        <StudentDetailHeader student={student} />

        {/* Student Stats */}
        <StudentStats student={student} />

        {/* Courses List */}
        <StudentCoursesList student={student} />
      </div>
    </div>
  );
}
