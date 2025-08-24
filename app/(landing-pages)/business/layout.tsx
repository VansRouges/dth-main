import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Solutions",
  description: "Accelerate your business growth with our data science and AI solutions. Custom training programs and consulting services for enterprise clients.",
  keywords: [
    "business data solutions",
    "enterprise training",
    "corporate data science",
    "AI consulting",
    "business intelligence",
    "custom training programs"
  ],
  openGraph: {
    title: "Business Solutions - Enterprise Data Science Training",
    description: "Empower your team with custom data science training and AI solutions tailored for your business needs.",
    url: "/business",
  },
  alternates: {
    canonical: "/business",
  },
};

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
