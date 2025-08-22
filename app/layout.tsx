import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { UserProvider } from "@/providers/UserProvider";
import { currentUser } from "@clerk/nextjs/server";
import { RouteGuard } from "@/components/routeGuard";
import OrganizationSchema from "@/components/structured-data/organization-schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DataTechHub - Nigeria's Premier Data & AI Learning Platform",
    template: "%s | DataTechHub"
  },
  description: "Master data science, machine learning, and AI with DataTechHub. Nigeria's leading platform for data professionals offering hands-on courses, mentorship, and career advancement in tech.",
  keywords: [
    "data science courses Nigeria",
    "machine learning training",
    "AI courses",
    "data analytics",
    "Python programming",
    "data visualization",
    "business intelligence",
    "tech education Nigeria",
    "online learning",
    "career development"
  ],
  authors: [{ name: "DataTechHub Team" }],
  creator: "DataTechHub",
  publisher: "DataTechHub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://datatechhub.ng'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: '/',
    title: 'DataTechHub - Nigeria\'s Premier Data & AI Learning Platform',
    description: 'Master data science, machine learning, and AI with DataTechHub. Nigeria\'s leading platform for data professionals.',
    siteName: 'DataTechHub',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DataTechHub - Data Science & AI Learning Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DataTechHub - Nigeria\'s Premier Data & AI Learning Platform',
    description: 'Master data science, machine learning, and AI with DataTechHub.',
    images: ['/twitter-image.png'],
    creator: '@datatechhub',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
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
        <OrganizationSchema />
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