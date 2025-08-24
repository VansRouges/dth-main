import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "One-on-One Mentorship",
  description: "Get personalized mentorship from industry experts. Accelerate your data science career with tailored guidance and hands-on support.",
  keywords: [
    "one-on-one mentorship",
    "personal data science mentor",
    "career guidance",
    "expert mentoring",
    "personalized training",
    "data science coaching"
  ],
  openGraph: {
    title: "One-on-One Mentorship - Personalized Data Science Guidance",
    description: "Connect with industry experts for personalized mentorship and accelerate your data science career.",
    url: "/one-on-one",
  },
  alternates: {
    canonical: "/one-on-one",
  },
};

export default function OneOnOneLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
