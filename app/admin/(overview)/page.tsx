import { type NextPage } from "next";
import { redirect } from "next/navigation";
import { currentUser } from '@clerk/nextjs/server';

import { checkAdminAccess } from "@/lib/utils";
import AdminLayout from "@/components/layouts/AdminLayout";

const AdminOverviewPage: NextPage = async () => {
  const user = await currentUser();

  if (!checkAdminAccess(user)) {
    redirect("/");
  }

  return (
    <AdminLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold tracking-tight">Admin Overview</h1>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stats Cards */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm font-medium">Total Users</h3>
            <p className="mt-2 text-3xl font-semibold">1,234</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm font-medium">Active Sessions</h3>
            <p className="mt-2 text-3xl font-semibold">567</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm font-medium">Revenue</h3>
            <p className="mt-2 text-3xl font-semibold">$12,345</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-500 text-sm font-medium">Pending Actions</h3>
            <p className="mt-2 text-3xl font-semibold">23</p>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold">Recent Activity</h2>
          <div className="mt-4 space-y-4">
            <div className="border-b pb-4 last:border-0 last:pb-0">
              <p className="text-sm">New user registered: jane_doe</p>
              <p className="text-xs text-gray-500 mt-1">30 minutes ago</p>
            </div>
            <div className="border-b pb-4 last:border-0 last:pb-0">
              <p className="text-sm">Course &#34;Advanced React&#34; was updated</p>
              <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminOverviewPage;