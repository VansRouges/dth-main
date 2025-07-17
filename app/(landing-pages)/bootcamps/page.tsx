"use client";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/landing/footer";
import Navigation from "@/components/landing/navigation";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useFramerAnimations } from '@/hooks/use-framer-animate';
import React, { useRef } from 'react';

export default function BootcampsPage() {
  const router = useRouter();
  const {
    fadeInFromLeft,
    fadeInFromRight,
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
  const ctaSectionRef = useRef(null);

  const heroInView = useInView(heroSectionRef, { once: false, amount: 0.3 });
  const benefitsInView = useInView(benefitsSectionRef, { once: false, amount: 0.3 });
  const servicesInView = useInView(servicesSectionRef, { once: false, amount: 0.3 });
  const ctaInView = useInView(ctaSectionRef, { once: false, amount: 0.3 });


  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navigation navItems={navItems} />

      {/* Hero Section */}
      <section ref={heroSectionRef} className="py-24 px-4 bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                className="text-6xl font-bold text-gray-900 mb-6 leading-tight"
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
            <motion.div
              className="aspect-square md:aspect-auto md:h-[400px] relative"
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              {...fadeInFromRight({ transition: { delay: 0.6, duration: 0.8 } })}
            >
              <Image
                src="/landing/hero-3.png"
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
      </section>

      {/* Benefits Section */}
      <section ref={benefitsSectionRef} className="py-16 px-4 bg-white">
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
            <motion.div
              className="aspect-square md:aspect-auto md:h-[350px] relative"
              initial="hidden"
              animate={benefitsInView ? "visible" : "hidden"}
              {...fadeInFromLeft({ transition: { delay: 0.5, duration: 0.8 } })}
            >
              <Image
                src="/landing/hero-4.png"
                alt="Person reacting"
                width={500}
                height={600}
                className="w-full h-full object-contain"
                priority
              />
              <span className="sr-only">Benefits illustration</span>
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

      {/* CTA Section */}
            <section ref={ctaSectionRef} className="relative py-32 px-4 bg-slate-900 flex justify-center items-center">
              {/* Shapes background - confined to the blue container */}
              <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl">
                <Image
                  src="/landing/shapes.png"
                  alt="Abstract shapes background"
                  fill
                  className="object-cover opacity-10"
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
                          animate={ctaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                          transition={{ delay: 0.2, duration: 0.8 }}
                        >
                          Ready to Start Your Journey?
                        </motion.h2>
                        <motion.p
                          className="text-blue-100 mb-8 text-lg"
                          initial={{ opacity: 0, x: -50 }}
                          animate={ctaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                          transition={{ delay: 0.4, duration: 0.8 }}
                        >
                          Join thousands of learners transforming their careers with
                          DataTechHub.
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={ctaInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
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
                          animate={ctaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
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