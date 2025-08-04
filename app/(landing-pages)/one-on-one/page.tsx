"use client";
import { Check } from "lucide-react";
import Footer from "@/components/landing/footer";
import Navigation from "@/components/landing/navigation";
import Image from "next/image";
import { motion, useInView } from "framer-motion"; 
import { useFramerAnimations } from '@/hooks/use-framer-animate';
import React, { useRef } from 'react';
import CtaSection from "@/components/CtaSection";

export default function OneOnOnePage() {
  const {
    fadeInFromLeft,
    fadeInFromTop,
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

  const benefits = [
    "Highly Flexible",
    "Experienced Instructors",
    "Job Market Guidance",
    "Project Portfolio Assistance",
    "Certification upon Completion",
  ];

  const services = [
    {
      title: "Project Portfolio Assistance",
      description:
        "Get support in building and showcasing a portfolio that highlights your skills.",
      icon: "/landing/bc-projects.svg",
      bgColor: "bg-orange-50",
    },
    {
      title: "Interview Guidance",
      description:
        "Practice interview techniques and receive feedback to improve",
      icon: "/landing/bc-chat.svg",
      bgColor: "bg-orange-50",
    },
    {
      title: "Career Mentorship",
      description:
        "Continuous guidance from experienced mentors to support your career transition",
      icon: "/landing/bc-mentoring.svg",
      bgColor: "bg-orange-50",
    },
    {
      title: "LinkedIn & CV Guidance",
      description:
        "Optimize your LinkedIn profile and resume to stand out to potential employers",
      icon: "/landing/bc-cv.svg",
      bgColor: "bg-orange-50",
    },
  ];

  const steps = [
    {
      icon: "/landing/schedule.svg",
      title: "Book a Session",
      description: "Schedule your learning session",
    },
    {
      icon: "/landing/video-call.svg",
      title: "Connect with a Mentor",
      description: "Get paired with an expert",
    },
    {
      icon: "/landing/learning-app.svg",
      title: "Start Learning",
      description: "Begin your data journey",
    },
  ];

  // Enhanced animation variants
  const containerStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemStaggerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,      }
    },
  };

  const benefitItemVariants = {
    hidden: { opacity: 0, x: -60, scale: 0.9 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: {
        duration: 0.7,      }
    },
  };

  const stepItemVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: {
        duration: 0.8,      }
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        duration: 1,
        delay: 0.2
      }, 
    },
  };

  // Enhanced card animation variants
  const flexibleSessionsVariants = {
    hidden: { 
      opacity: 0, 
      x: -100, 
      scale: 0.8,
      rotateY: -15
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.9,
        delay: 0.2
      }
    },
  };

  const mentorMatchingVariants = {
    hidden: { 
      opacity: 0, 
      x: 100, 
      scale: 0.8,
      rotateY: 15
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.9,
        delay: 0.4
      }
    },
  };

  // Enhanced image animation variants
  const benefitsImageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.7,
      y: 60,
      rotateX: 15
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 1.2,
        delay: 0.3
      }
    },
  };

  // Refs
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const matchingSectionRef = useRef<HTMLDivElement | null>(null);
  const benefitsSectionRef = useRef<HTMLElement | null>(null);
  const benefitsImageRef = useRef<HTMLDivElement | null>(null);
  const servicesSectionRef = useRef<HTMLElement | null>(null);
  const howItWorksSectionRef = useRef<HTMLElement | null>(null);

  // InView hooks
  const leftContentInView = useInView(leftContentRef, { once: false, amount: 0.1 });
  const rightContentInView = useInView(rightContentRef, { once: false, amount: 0.1 });
  const matchingInView = useInView(matchingSectionRef, { once: false, amount: 0.2 });
  const benefitsInView = useInView(benefitsSectionRef, { once: false, amount: 0.1 });
  const benefitsImageInView = useInView(benefitsImageRef, { once: false, amount: 0.3 });
  const servicesInView = useInView(servicesSectionRef, { once: false, amount: 0.1 });
  const howItWorksInView = useInView(howItWorksSectionRef, { once: false, amount: 0.1 });

  return (
    <main className="relative font-[family-name:var(--font-geist-sans)]">
      {/* Navigation */}
      <Navigation navItems={navItems} />

      {/* Hero Section - Updated to match HeroSection component */}
      <section 
        ref={heroSectionRef}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-14 sm:py-18 lg:py-20 xl:py-24 bg-[#F8F8F8] relative"
      >
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-32 md:pb-40 mb-15">
          {/* Left content */}
          <div 
            ref={leftContentRef} 
            className="w-full lg:w-1/2 xl:w-2/5 flex flex-col gap-6 sm:gap-8 md:gap-10 items-start text-left"
          >
            <motion.h1
              className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-extrabold text-gray-900 leading-tight"
              initial="hidden"
              animate={leftContentInView ? "visible" : "hidden"}
              {...fadeInFromLeft({ transition: { delay: 0.2, duration: 1.0 } })}
            >
              Your Personalized <br className="sm:hidden block lg:block" />
              <span className="sm:hidden"> </span>Learning Experience
            </motion.h1>
            
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg"
              initial="hidden"
              animate={leftContentInView ? "visible" : "hidden"}
              {...fadeInFromLeft({ transition: { delay: 0.2, duration: 0.4 } })}
            >
              Get direct access to experienced instructors who will work closely with you to tackle challenging topics, provide feedback, and guide your growth.
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row gap-3 sm:gap-4 w-full xs:w-auto"
              initial="hidden"
              animate={leftContentInView ? "visible" : "hidden"}
              variants={containerStaggerVariants}
            >
              <motion.button
                className="bg-[#104BC1] text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg rounded-md hover:bg-blue-700 transition-all duration-300 cursor-pointer w-full md:w-60 whitespace-nowrap"
                variants={buttonVariants}
                whileTap={{ scale: 0.95 }}
              >
                Book a Session
              </motion.button>
              <motion.button
                className="bg-[#E7EDF9] text-gray-800 px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg rounded-md hover:bg-slate-300 transition-all duration-300 cursor-pointer w-full md:w-60 whitespace-nowrap"
                variants={buttonVariants}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </div>

          {/* Right content */}
          <motion.div
            ref={rightContentRef}
            className="w-full md:mt-10 lg:w-1/2 xl:w-3/5 flex justify-center lg:justify-end"
            initial="hidden" 
            animate={rightContentInView ? "visible" : "hidden"}
            variants={containerStaggerVariants}
          >
            <motion.div
              className="w-full md:max-w-3xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl h-auto flex items-center justify-center"
              variants={buttonVariants}
            >
              <Image
                src="/landing/hero-5.png"
                alt="Person reacting"
                width={800}
                height={960}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* ENHANCED Matching Process Section - positioned absolutely over the divider */}
        <div ref={matchingSectionRef} className="md:absolute md:-bottom-32 left-0 right-0">
          <div className="max-w-6xl mx-auto md:px-4">
            <div className="bg-transparent md:p-8 rounded-xl">
              <div className="w-full mx-auto md:h-60 flex-col md:flex-row flex gap-7 md:gap-3 items-center justify-center">
                {/* ENHANCED - Flexible sessions card with improved animation */}
                <motion.div
                  className="bg-[#104BC1] h-full text-white md:w-96 rounded-xl flex flex-col p-5 space-y-2 shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                  initial="hidden"
                  animate={matchingInView ? "visible" : "hidden"}
                  variants={flexibleSessionsVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    rotateY: 2,
                    transition: { duration: 0.3 }
                  }}
                >
                  <h2 className="font-semibold text-xl">
                    Flexible sessions tailored to your goals:
                  </h2>
                  <p>
                    Our one-on-one learning sessions are tailored to your unique
                    learning style and goals. Get direct access to experienced
                    instructors who will work closely with you to tackle
                    challenging topics, provide feedback, and guide your growth.
                  </p>
                </motion.div>

                {/* ENHANCED - Mentor Matching card with improved animation */}
                <motion.div
                  className="bg-[#DDE8FF] h-full md:w-96 text-[#081227] rounded-xl flex flex-col p-5 space-y-2 shadow-2xl hover:shadow-3xl transition-shadow duration-300"
                  initial="hidden"
                  animate={matchingInView ? "visible" : "hidden"}
                  variants={mentorMatchingVariants}
                  whileHover={{ 
                    scale: 1.02, 
                    rotateY: -2,
                    transition: { duration: 0.3 }
                  }}
                >
                  <h2 className="font-semibold text-xl">
                    Mentor Matching Process:
                  </h2>
                  <p>
                    We carefully match learners with mentors based on
                    experience, learning goals, and professional background to
                    ensure an optimal learning experience.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENHANCED Benefits Section - with extra padding to accommodate the overlapping section */}
      <section ref={benefitsSectionRef} className="pt-11 md:pt-54 pb-4 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.p
              className="text-blue-600 font-medium mb-2"
              initial="hidden"
              animate={benefitsInView ? "visible" : "hidden"}
              {...fadeInFromTop({ transition: { delay: 0.2, duration: 0.6 } })}
            >
              How do we stand out?
            </motion.p>
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              initial="hidden"
              animate={benefitsInView ? "visible" : "hidden"}
              {...fadeInFromTop({ transition: { delay: 0.3, duration: 0.6 } })}
            >
              Benefits of our One-on-One
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg"
              initial="hidden"
              animate={benefitsInView ? "visible" : "hidden"}
              {...fadeInFromTop({ transition: { delay: 0.4, duration: 0.6 } })}
            >
              How DataTechHub leads in data education.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mx-auto">
            {/* ENHANCED - Benefits image with improved animation */}
            <motion.div
              ref={benefitsImageRef}
              initial="hidden"
              animate={benefitsImageInView ? "visible" : "hidden"}
              variants={benefitsImageVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.4 }
              }}
              className="perspective-1000"
            >
              <Image
                src="/landing/hero-6.png"
                alt="Person reacting"
                width={500}
                height={600}
                className="w-full h-full object-contain rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                priority
              />
              <div className="flex items-center justify-center text-gray-400">
                <span className="sr-only">Benefits illustration</span>
              </div>
            </motion.div>

            {/* ENHANCED - Benefits list with staggered animations */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate={benefitsInView ? "visible" : "hidden"}
              variants={containerStaggerVariants}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  variants={benefitItemVariants}
                  whileHover={{ 
                    x: 10,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className="w-5 h-5 flex justify-center items-center rounded-full bg-orange-500 mt-2 flex-shrink-0"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                  >
                    <Check className="w-3 h-3 text-white font-extrabold" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-[#104BC1] text-lg">
                      {benefit}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesSectionRef} className="pt-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={containerStaggerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`${service.bgColor} rounded-2xl p-8`}
                variants={itemStaggerVariants}
                whileHover={{ 
                  scale: 1.03,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg- rounded-lg flex items-center justify-center">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#8C4B00] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section ref={howItWorksSectionRef} className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial="hidden"
              animate={howItWorksInView ? "visible" : "hidden"}
              {...fadeInFromTop({ transition: { delay: 0.2, duration: 0.6 } })}
            >
              How it Works
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg"
              initial="hidden"
              animate={howItWorksInView ? "visible" : "hidden"}
              {...fadeInFromTop({ transition: { delay: 0.3, duration: 0.6 } })}
            >
              How DataTech Hub leads in data education.
            </motion.p>
          </div>

          {/* Steps */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
            initial="hidden"
            animate={howItWorksInView ? "visible" : "hidden"}
            variants={containerStaggerVariants}
          >
            {steps.map((step, index) => {
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-start rounded-xl bg-[#F8F8F8] p-2 px-5"
                  variants={stepItemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Icon Circle */}
                  <div className="w-20 h-20  flex items-center justify-center mb-6">
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

      {/* CTA Section */}
      <CtaSection />

      <Footer />
    </main>
  );
}