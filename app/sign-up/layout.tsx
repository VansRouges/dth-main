import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Join DataTechHub today and start your journey in data science, machine learning, and AI. Create your free account now.",
  keywords: [
    "sign up DataTechHub",
    "create account",
    "join data science platform",
    "free registration",
    "learn data science"
  ],
  openGraph: {
    title: "Join DataTechHub - Start Your Data Science Journey",
    description: "Create your free account and access premium data science courses taught by industry experts.",
    url: "/sign-up",
  },
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
