"use client";
import { Button } from "@/components/ui/button";
import Footer from "@/components/landing/footer";
import Navigation from "@/components/landing/navigation";
import { useRouter } from "next/navigation";
import SubscriptionPlans from "@/components/landing/subscription-plans";
import Image from "next/image";
import { useFramerAnimations } from "@/hooks/use-framer-animate";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ProjectsPage() {
  const router = useRouter();

  const {
    fadeInFromLeft,
    fadeInFromRight,
  } = useFramerAnimations();

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

  const steps = [
    {
      icon: "/landing/steps-number.svg",
      title: "Step-by-step project guides.",
      description: "Schedule your learning session",
    },
    {
      icon: "/landing/domain.svg",
      title: "Categorized projects by difficulty and domain.",
      description: "Get paired with an expert",
    },
    {
      icon: "/landing/certificate.svg",
      title: "Certifications for completed projects.",
      description: "Begin your data journey",
    },
  ];

  // Animation variants
  const containerStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemStaggerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardStaggerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Refs for each section to observe scroll
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const featuresSectionRef = useRef<HTMLElement | null>(null);
  const ctaSectionRef = useRef<HTMLElement | null>(null);

  const heroInView = useInView(heroSectionRef, { once: false, amount: 0.3 });
  const featuresInView = useInView(featuresSectionRef, {
    once: false,
    amount: 0.3,
  });
  const ctaInView = useInView(ctaSectionRef, { once: false, amount: 0.3 });

  return (
    <main className="min-h-screen relative">
      {/* Navigation */}
      <Navigation navItems={navItems} />

      {/* Hero Section */}
      <section
        ref={heroSectionRef}
        className="py-24 pb-60 px-4 bg-[#F8F8F8] relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                className="text-6xl font-bold text-gray-900 mb-6 leading-tight"
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                {...fadeInFromLeft({
                  transition: { delay: 0.2, duration: 0.2 },
                })}
              >
                Practice with Real-World Projects
              </motion.h1>
            </div>
            <motion.div
              className="aspect-square md:aspect-auto md:h-[400px] relative"
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              {...fadeInFromRight({
                transition: { delay: 0.2, duration: 0.2 },
              })}
            >
              <Image
                src="/landing/hero-7.png"
                alt="Person reacting"
                width={500}
                height={600}
                className="w-full h-full object-contain"
                priority
              />
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span className="sr-only">Bootcamp hero image</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Matching Process Section - positioned absolutely over the divider */}
        <div className="absolute -bottom-20 left-0 right-0">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-transparent p-8 rounded-xl">
              <motion.div
                className="max-w-6xl mx-auto flex space-x-3 items-center justify-center"
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                variants={containerStaggerVariants}
              >
                <motion.div
                  className="bg-[#104BC1] text-white h-fit w-96 rounded-xl flex flex-col p-5 space-y-2"
                  variants={cardStaggerVariants}
                >
                  <h2 className="font-semibold text-xl">
                    Gain hands-on experience with curated projects and case
                    studies.
                  </h2>
                </motion.div>
                <motion.div
                  className="bg-[#DDE8FF] h-fit w-96 text-[#081227] rounded-xl flex flex-col p-5 space-y-2"
                  variants={cardStaggerVariants}
                >
                  <h2 className="font-semibold text-xl">
                    Build a portfolio that demonstrates your skills.
                  </h2>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresSectionRef} className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={
                featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
              }
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Features
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg"
              initial={{ opacity: 0, y: -30 }}
              animate={
                featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }
              }
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              How DataTech Hub leads in data education.
            </motion.p>
          </div>

          {/* Steps */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={containerStaggerVariants}
          >
            {steps.map((step, index) => {
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-start rounded-xl bg-[#F8F8F8] p-2 px-5"
                  variants={itemStaggerVariants}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  {/* Icon Circle */}
                  <div className="w-20 h-20 flex items-center justify-center mb-6">
                    <Image
                      src={step.icon}
                      alt={step.title}
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>

                  {/* Optional description for accessibility */}
                  <p className="text-gray-600 text-sm sr-only">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Subscription Plans */}
      <SubscriptionPlans />

      {/* CTA Section */}
      <section
        ref={ctaSectionRef}
        className="relative py-32 px-4 bg-[#081227] flex justify-center items-center"
      >
        {/* Shapes background - confined to the blue container */}
        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl">
          <Image
            src="/landing/shapes.png"
            alt="Abstract shapes background"
            fill
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative bg-[#104BC1] rounded-xl w-[70%] min-h-[400px]">
          {/* Content container - transparent and on top */}
          <div className="relative z-10 h-full">
            <div className="h-full flex items-center justify-center p-12">
              <div className="grid md:grid-cols-2 px-16 gap-8 items-center w-full max-w-6xl">
                <div>
                  <motion.h2
                    className="text-5xl font-bold text-white mb-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={
                      ctaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                    }
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    Ready to Start Your Journey?
                  </motion.h2>
                  <motion.p
                    className="text-blue-100 mb-8 text-lg"
                    initial={{ opacity: 0, x: -50 }}
                    animate={
                      ctaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
                    }
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    Join thousands of learners transforming their careers with
                    DataTechHub.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      ctaInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <Button
                      onClick={() => {
                        router.push("/sign-up");
                      }}
                      className="bg-white cursor-pointer text-blue-600 hover:bg-gray-100 p-6 text-lg font-semibold"
                    >
                      Get Started Today
                    </Button>
                  </motion.div>
                </div>

                <div className="relative flex justify-center h-full">
                  <motion.div
                    className="bg-white w-[80%] rounded-lg p-8 text-center"
                    initial={{ opacity: 0, x: 50 }}
                    animate={
                      ctaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                    }
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    <Image
                      src="/landing/progress.png"
                      alt="Abstract shapes background"
                      width={900}
                      height={900}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
