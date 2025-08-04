"use client";
import Footer from "@/components/landing/footer";
import Navigation from "@/components/landing/navigation";
import SubscriptionPlans from "@/components/landing/subscription-plans";
import Image from "next/image";
import { useFramerAnimations } from "@/hooks/use-framer-animate";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CtaSection from "@/components/CtaSection";

export default function ProjectsPage() {
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
      }
    },
  };

  // Refs for each section to observe scroll
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const featuresSectionRef = useRef<HTMLElement | null>(null);

  const heroInView = useInView(heroSectionRef, { once: false, amount: 0.1 });
  const featuresInView = useInView(featuresSectionRef, { once: false, amount: 0.1 });

  return (
    <main className="relative gap-16 pt-2 font-[family-name:var(--font-geist-sans)]">
      {/* Navigation */}
      <Navigation navItems={navItems} />

      {/* Hero Section */}
      <section ref={heroSectionRef} className="py-12 lg:py-14 lg:px-18 xl:px-4 px-4 !pb-30 bg-[#F8F8F8] relative">
        <div 
          className="w-full max-w-7xl sm:py-11 lg:py-20 mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-32">
            {/* Left content */}
            <div className="w-full lg:w-1/2 xl:w-2/5 flex flex-col gap-6 sm:gap-8 md:gap-10 items-start text-left">
              <motion.h1
                className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-bold text-gray-900 leading-tight"
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                {...fadeInFromLeft({ transition: { delay: 0.2, duration: 0.5 } })}
              >
                Practice with <br className="sm:hidden block md:block" />
                <span className="sm:hidden"> </span>Real-World Projects
              </motion.h1>
            </div>

            {/* Right content */}
            <motion.div
              className="w-full md:mt-10 lg:w-1/2 xl:w-3/5 flex justify-center lg:justify-end"
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              {...fadeInFromRight({ transition: { delay: 0.2, duration: 0.5 } })}
            >
              <div className="w-full lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl h-auto flex items-center justify-center rounded-xl">
                <Image
                  src="/landing/hero-7.png"
                  alt="Person reacting"
                  width={800}
                  height={960}
                  className="w-full h-auto object-contain rounded-xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Matching Process Section - positioned absolutely over the divider */}
        <div className="absolute -bottom-25 sm:-bottom-20 left-0 right-0">
          <div className="max-w-6xl mx-auto sm:px-4">
            <div className="bg-transparent px-4 sm:p-8 rounded-xl">
              <motion.div
                className="max-w-6xl mx-auto h-29 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 items-center justify-center"
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                variants={containerStaggerVariants}
              >
                <motion.div
                  className="bg-[#104BC1] h-full text-white w-full sm:w-96 rounded-xl flex flex-col p-5 space-y-2"
                  variants={cardStaggerVariants}
                >
                  <h2 className="font-semibold text-md sm:text-[18px] md:text-xl">
                    Gain hands-on experience with curated projects and case
                    studies.
                  </h2>
                </motion.div>
                <motion.div
                  className="bg-[#DDE8FF] h-full w-full sm:w-96 text-[#081227] rounded-xl flex flex-col p-5 space-y-2"
                  variants={cardStaggerVariants}
                >
                  <h2 className="font-semibold text-md sm:text-[18px] md:text-xl">
                    Build a portfolio that demonstrates your skills.
                  </h2>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresSectionRef} className="pt-48 sm:pt-34 pb-11 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: -30 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Features
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg"
              initial={{ opacity: 0, y: -30 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
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
      <CtaSection />

      <Footer />
    </main>
  );
}