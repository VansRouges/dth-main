import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Science Bootcamps",
  description: "Join our intensive data science bootcamps designed for rapid skill development. Learn Python, machine learning, and data analysis with hands-on projects.",
  keywords: [
    "data science bootcamp",
    "intensive training",
    "Python bootcamp",
    "machine learning course",
    "data analysis training",
    "tech bootcamp Nigeria"
  ],
  openGraph: {
    title: "Data Science Bootcamps - Intensive Training Programs",
    description: "Transform your career with our comprehensive data science bootcamps. Hands-on learning with real projects.",
    url: "/bootcamps",
  },
  alternates: {
    canonical: "/bootcamps",
  },
};

export default function BootcampsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
