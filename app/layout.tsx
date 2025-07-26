import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { UserProvider } from "@/providers/UserProvider";
import { currentUser } from "@clerk/nextjs/server";
import { RouteGuard } from "@/components/routeGuard";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DataTechHub",
  description: "Empowering Data Professionals and Businesses",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await currentUser();

  // Serialize user data for client components
  const userForStore = user
    ? {
        id: user.id,
        fullName: user.fullName,
        firstName: user.firstName,
        lastName: user.lastName,
        emailAddresses: user.emailAddresses?.map((email) => ({
          id: email.id,
          emailAddress: email.emailAddress,
        })) || [],
        imageUrl: user.imageUrl,
        publicMetadata: user.publicMetadata
          ? JSON.parse(JSON.stringify(user.publicMetadata))
          : null,
      }
    : null;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>
          <UserProvider
            initialUser={userForStore}
          >
            <RouteGuard>
              {children}
            </RouteGuard>
            <Toaster />
          </UserProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}