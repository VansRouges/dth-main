import type { Metadata } from "next";
import { SanityLive } from "@/sanity/lib/live";
import { ClerkProvider } from "@clerk/nextjs";

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
          <div className="h-full">{children}</div>
      <SanityLive />
    </ClerkProvider>
  );
}