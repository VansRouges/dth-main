import Footer from "@/components/landing/footer";
import Navigation from "@/components/landing/navigation";
import FoundingMotivation from "@/components/landing/founding-motivation";
import CompanyValues from "@/components/landing/company-values";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about DataTechHub's mission to empower African data professionals. Discover our story, values, and commitment to transforming careers through quality education.",
  keywords: [
    "about DataTechHub",
    "data science education Africa",
    "company mission",
    "tech education Nigeria",
    "data professionals empowerment"
  ],
  openGraph: {
    title: "About DataTechHub - Empowering African Data Professionals",
    description: "Discover our mission to transform careers through quality data science education across Africa.",
    url: "/about",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  const navItems = [
    {
      name: "Services",
      link: "",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ];
  
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      {/* Navigation */}
      <Navigation navItems={navItems} />

      <FoundingMotivation />
      <CompanyValues />
      <Footer />
    </div>
  );
}