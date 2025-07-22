import type { Metadata } from "next";
import { SanityLive } from "@/sanity/lib/live";
import { ClerkProvider } from "@clerk/nextjs";
import { SidebarProvider } from "@/hooks/use-sidebar";

export const metadata: Metadata = {
  title: "DataTechHub: Learning Management",
  description: "This is the learning management dashboard for DataTechHub.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
        <SidebarProvider>
          <div className="h-full">{children}</div>
        </SidebarProvider>
      <SanityLive />
    </ClerkProvider>
  );
}