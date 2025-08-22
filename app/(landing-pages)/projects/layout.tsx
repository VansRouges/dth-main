import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Science Projects",
  description: "Explore real-world data science projects and build your portfolio. Learn through hands-on experience with industry-relevant challenges.",
  keywords: [
    "data science projects",
    "portfolio building",
    "real-world projects",
    "hands-on learning",
    "project-based learning",
    "data science portfolio"
  ],
  openGraph: {
    title: "Data Science Projects - Build Your Portfolio",
    description: "Work on real-world data science projects and build an impressive portfolio that showcases your skills.",
    url: "/projects",
  },
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
