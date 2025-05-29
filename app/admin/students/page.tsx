// import AdminLayout from '@/components/layouts/AdminLayout'
import Image from 'next/image'
import React from 'react'

const Student = () => {
  return (
    <>
      <div className="relative">
            {/* Banner */}
            <div className="relative overflow-hidden rounded-xl mr-96">
              <Image
                src="/admin/students.svg"
                alt="Dashboard tutorial"
                width={320}
                height={100}
                className="object-cover w-full h-full"
              />
      
              <div className="absolute inset-0 w-fit p-12">
                <h2 className="text-5xl font-bold text-white">Students</h2>
              </div>
            </div>

            {/* No students */}
            <div className="flex items-center justify-center h-screen bg-white mt-8 rounded-xl">
              <div className="text-center">
                <Image
                  src="/no-courses.png"
                  alt="No students"
                  width={3200}
                  height={1000}
                  className="mx-auto mb-4 w-96 h-96"
                />
                <h3 className="text-2xl font-semibold text-gray-700">No registered students yet.</h3>
              </div>
            </div>
          </div>
    </>
  )
}

export default Student
