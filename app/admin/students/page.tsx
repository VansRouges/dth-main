import Image from 'next/image';
import React from 'react';
import { getAllStudentsWithBasicInfo } from '@/lib/studentProgress';
import { getEnrollmentStats } from '@/lib/enrollments';
import { StudentsViewToggle } from '@/components/admin/StudentsViewToggle';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Students Management",
  description: "Manage student enrollments, track progress, and view payment information in DataTechHub admin dashboard.",
};

const StudentsPage = async () => {
  const students = await getAllStudentsWithBasicInfo();
  const enrollmentStats = await getEnrollmentStats();

  return (
    <>
      <div className="relative">
        {/* Banner */}
        <div className="relative overflow-hidden rounded-xl mr-96">
          <Image
            src="/admin/students.svg"
            alt="Students Dashboard"
            width={320}
            height={100}
            className="object-cover w-full h-full"
          />
          
          <div className="absolute inset-0 w-fit p-12">
            <h2 className="text-5xl font-bold text-white">Students</h2>
            <p className="text-white/80 mt-2">Manage and monitor student progress</p>
          </div>
        </div>

        {students.length === 0 ? (
          /* No students */
          <div className="flex items-center justify-center h-screen bg-white mt-8 rounded-xl">
            <div className="text-center">
              <Image
                src="/no-courses.png"
                alt="No students"
                width={320}
                height={320}
                className="mx-auto mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-700">No registered students yet.</h3>
              <p className="text-gray-500 mt-2">Students will appear here once they enroll in courses.</p>
            </div>
          </div>
        ) : (
          /* Students List */
          <div className="mt-8 space-y-6">
            {/* Header with Stats */}
            <div className="bg-white rounded-xl p-6">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold">All Students</h3>
                  <p className="text-gray-600">
                    {students.length} student{students.length !== 1 ? 's' : ''} registered
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-600 text-sm font-medium">Total Students</p>
                  <p className="text-2xl font-bold text-blue-700">{students.length}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-600 text-sm font-medium">Total Revenue</p>
                  <p className="text-2xl font-bold text-green-700">
                    ₦{enrollmentStats.totalRevenue.toLocaleString()}
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-600 text-sm font-medium">Total Enrollments</p>
                  <p className="text-2xl font-bold text-purple-700">
                    {enrollmentStats.totalEnrollments}
                  </p>
                </div>
              </div>
            </div>

            {/* Students Display with View Toggle */}
            <StudentsViewToggle students={students} />
          </div>
        )}
      </div>
    </>
  );
};

export default StudentsPage;
