import { auth, currentUser } from '@clerk/nextjs/server'
import { redirect } from "next/navigation"

export default async function Loading() {
  const { userId } = await auth()

  if (!userId) {
    redirect('/sign-in')
  }

  const user = await currentUser()

  const publicMetadata = user?.publicMetadata
  const role = publicMetadata?.role

  // If no publicMetadata or it's empty, send to onboarding
  if (!publicMetadata || Object.keys(publicMetadata).length === 0) {
    redirect('/onboarding')
  }

  // Role-based routing
  switch (role) {
    case 'admin':
      redirect('/admin')
      break
    case 'instructor':
      redirect('/instructor')
      break
    case 'user':
    default:
      redirect('/dashboard')
  }

  // Fallback UI (shouldn't render)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-12 h-12 border-4 border-gray-300 rounded-full animate-spin border-t-blue-600" />
    </div>
  )
}
