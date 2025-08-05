"use client";
import { Check } from "lucide-react";
import Footer from "@/components/landing/footer";
import Navigation from "@/components/landing/navigation";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useFramerAnimations } from '@/hooks/use-framer-animate';
import React, { useRef } from 'react';
import CtaSection from "@/components/CtaSection";

export default function BootcampsPage() {
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
    "Intensive and immersive curriculum.",
    "Structured Learning Paths",
    "Peer collaboration and networking.",
    "Real-world project experience.",
    "Certification upon completion.",
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

  const benefitItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const heroSectionRef = useRef(null);
  const benefitsSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);

  const heroInView = useInView(heroSectionRef, { once: false, amount: 0.1 });
  const benefitsInView = useInView(benefitsSectionRef, { once: false, amount: 0.1 });
  const servicesInView = useInView(servicesSectionRef, { once: false, amount: 0.1 });


  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navigation navItems={navItems} />

      {/* Hero Section */}
      <section ref={heroSectionRef} className="py-14 sm:py-20 pb-20 px-4 bg-[#F8F8F8] relative">
        <div 
          className="w-full max-w-7xl mx-auto lg:px-12 xl:px-16 2xl:px-20"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-32">
            {/* Left content */}
            <div className="w-full lg:w-1/2 xl:w-2/5 flex flex-col gap-6 sm:gap-8 md:gap-10 items-start text-left">
              <motion.h1
                className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-bold text-gray-900 leading-tight"
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                {...fadeInFromLeft({ transition: { delay: 0.2, duration: 0.8 } })}
              >
                Accelerate Your Career with Our Bootcamps
              </motion.h1>
              <motion.p
                className="text-gray-600 text-lg leading-relaxed"
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                {...fadeInFromLeft({ transition: { delay: 0.4, duration: 0.8 } })}
              >
                Our immersive bootcamps are designed to accelerate your tech
                career by offering structured, hands-on learning experiences led
                by industry professionals. Ideal for those looking to make a
                rapid transition or build foundational skills quickly.
              </motion.p>
            </div>

            {/* Right content - Updated responsive image container */}
            <motion.div
              className="w-full md:mt-10 lg:w-1/2 xl:w-3/5 flex justify-center lg:justify-end"
            >
              <div className="w-full lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl flex items-center justify-center rounded-xl">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <Image
                    src="/landing/hero-3.png"
                    alt="Person reacting"
                    width={800}
                    height={960}
                    className="w-full h-auto object-cover rounded-xl"
                    priority
                 
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsSectionRef} className="pt-16 px-4 bg-white">
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
              Benefits of our Bootcamps
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

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Benefits Image - Now animated on scroll */}
            <motion.div
              className="w-full flex justify-center lg:justify-start"
            >
              <div className="w-full lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl h-auto flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={benefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <Image
                    src="/landing/hero-4.png"
                    alt="Benefits illustration"
                    width={500}
                    height={600}
                    className="w-full h-auto object-contain rounded-lg"
                    priority
                    
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial="hidden"
              animate={benefitsInView ? "visible" : "hidden"}
              variants={containerStaggerVariants}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  variants={benefitItemVariants}
                >
                  <div className="w-5 h-5 flex justify-center items-center rounded-full bg-orange-500 mt-2 flex-shrink-0">
                    <Check className="w-3 h-3 text-white font-extrabold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">
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
      <section ref={servicesSectionRef} className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={containerStaggerVariants}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`${service.bgColor} rounded-2xl p-8`}
                variants={itemStaggerVariants}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center">
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

      {/* CTA Section */}
      <CtaSection />

      <Footer />
    </main>
  );
}