import Navigation from "@/components/landing/navigation";
import ContactSection from "@/components/landing/contact-section";
import AnimatedFooter from "@/components/landing/Animated-footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with DataTechHub. We're here to help with your data science journey. Reach out for course inquiries, partnerships, or support.",
  keywords: [
    "contact DataTechHub",
    "get in touch",
    "course inquiries",
    "data science support",
    "partnerships",
    "customer service"
  ],
  openGraph: {
    title: "Contact DataTechHub - Get In Touch",
    description: "Have questions about our courses or need support? Contact our team for personalized assistance.",
    url: "/contact",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
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
      <ContactSection />
      <AnimatedFooter />
    </div>
  );
}