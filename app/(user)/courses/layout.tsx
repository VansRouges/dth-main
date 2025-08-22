import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Courses",
  description: "Explore our comprehensive catalog of data science, machine learning, and AI courses. Learn from industry experts and advance your career.",
  keywords: [
    "data science courses",
    "machine learning training",
    "AI certification",
    "Python courses",
    "data analytics",
    "online learning",
    "tech courses Nigeria"
  ],
  openGraph: {
    title: "Data Science & AI Courses | DataTechHub",
    description: "Explore comprehensive data science and AI courses taught by industry experts.",
    url: "/courses",
  },
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
