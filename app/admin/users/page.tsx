"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { fetchAllUsers } from '@/app/actions/users'
import UserCard from '@/components/admin/user-card'

type User = {
  id: string
  firstName: string
  lastName: string
  imageUrl?: string
  learningTime: number
  coursesEnrolled: number
  activeCourses: number
  avgAttendance: number
  avgScore: number
  studentId: string
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const getUsers = async () => {
      setLoading(true)
      setError(null) // Reset error state on new fetch
      try {
        const data = await fetchAllUsers()
        if (!data) {
          throw new Error('No data returned from server')
        }
        setUsers(data)
      } catch (err: unknown) {
        console.error('Error fetching users:', err)
        if (err instanceof Error) {
          setError(err.message || 'Failed to fetch users. Please try again later.')
        } else {
          setError('Failed to fetch users. Please try again later.')
        }
      } finally {
        setLoading(false)
      }
    }

  useEffect(() => {
    getUsers()
  }, [])

  const handleRetry = () => {
    setError(null)
    getUsers()
  }

  return (
    <>
      {/* Banner */}
      <div className="relative mb-8">
        <div className="relative overflow-hidden rounded-xl mr-96">
          <Image
            src="/admin/students.svg"
            alt="Dashboard tutorial"
            width={320}
            height={100}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 w-fit p-12">
            <h2 className="text-5xl font-bold text-white">Users</h2>
          </div>
        </div>
      </div>

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">
                {error}
                <button 
                  onClick={handleRetry}
                  className="ml-2 font-medium text-red-800 underline hover:text-red-600"
                >
                  Retry
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Loading Spinner */}
      {loading && !error && (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-blue-400 border-dashed rounded-full animate-spin"></div>
        </div>
      )}

      {/* No Users */}
      {!loading && !error && users.length === 0 && (
        <div className="flex items-center justify-center bg-white mt-8 rounded-xl">
          <div className="text-center">
            <Image
              src="/no-courses.png"
              alt="No users"
              width={3200}
              height={1000}
              className="mx-auto mb-4 w-96 h-96"
            />
            <h3 className="text-2xl font-semibold text-gray-700">No users yet.</h3>
          </div>
        </div>
      )}

      {/* User Cards */}
      {!loading && !error && users.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {users.map((user) => (
            <UserCard
              key={user.id}
              studentId={user.id}
              imageUrl={user.imageUrl || '/default-avatar.png'}
              name={`${user.firstName} ${user.lastName}`}
              learningTime={user.learningTime}
              coursesEnrolled={user.coursesEnrolled}
              activeCourses={user.activeCourses}
              avgAttendance={user.avgAttendance}
              avgScore={user.avgScore}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default Users