import { HeroSection } from "@/components/landing/hero-section";
import ServicesSection from "@/components/landing/services-section";
import { WhyChooseUs } from "@/components/landing/why-choose-us";
import StatsTestimonialsCTA from "@/components/landing/stats-testimonial-cta";
import Footer from "@/components/landing/footer";
import Navigation from "@/components/landing/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Transform your career with Nigeria's leading data science and AI education platform. Learn from industry experts, build real projects, and join thousands of successful data professionals.",
  keywords: [
    "data science bootcamp Nigeria",
    "learn data science online",
    "AI certification",
    "machine learning courses",
    "data analyst training",
    "Python for data science",
    "career change to tech",
    "data science jobs Nigeria"
  ],
  openGraph: {
    title: "DataTechHub - Transform Your Career with Data Science & AI",
    description: "Join Nigeria's leading data science education platform. Learn from experts, build projects, advance your career.",
    url: "/",
    images: [
      {
        url: "/landing-hero-og.png",
        width: 1200,
        height: 630,
        alt: "DataTechHub Homepage - Data Science & AI Learning",
      },
    ],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
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
    <div className="gap-16 pt-2 sm:pt-8 font-[family-name:var(--font-geist-sans)]">
      {/* Navigation */}
      <Navigation navItems={navItems} />

      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <StatsTestimonialsCTA />
      <Footer />
    </div>
  );
}
