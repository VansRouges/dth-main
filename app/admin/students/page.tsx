import { DashboardOverview } from '@/components/dashboard-overview'
import AdminLayout from '@/components/layouts/AdminLayout'
import React from 'react'

const Student = () => {
  return (
    <AdminLayout>
      <DashboardOverview userName={"femi"} coursesCount={4} mentoringCount={3} projectsCount={3} />
    </AdminLayout>
  )
}

export default Student
