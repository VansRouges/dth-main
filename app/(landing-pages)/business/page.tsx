"use client";
import { Check } from "lucide-react";
import Footer from "@/components/landing/footer";
import Navigation from "@/components/landing/navigation";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useFramerAnimations } from '@/hooks/use-framer-animate';
import React, { useRef } from 'react';
import CtaSection from "@/components/CtaSection";

export default function BusinessPage() {
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
    "Corporate training in data-driven technologies.",
    "Talent outsourcing for projects or roles.",
    "Data strategy consulting and execution.",
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

  const benefitItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const heroSectionRef = useRef<HTMLElement | null>(null);
  const benefitsSectionRef = useRef<HTMLElement | null>(null);

  const heroInView = useInView(heroSectionRef, { once: false, amount: 0.3 });
  const benefitsInView = useInView(benefitsSectionRef, { once: false, amount: 0.3 });

  return (
    <main className="font-[family-name:var(--font-geist-sans)]">
      {/* Navigation */}
      <Navigation navItems={navItems} />

      {/* Hero Section */}
      <section ref={heroSectionRef} className="py-14 sm:py-24 px-4 bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                className="text-6xl font-bold mb-6 text-gray-900 leading-tight"
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                {...fadeInFromLeft({ transition: { delay: 0.2, duration: 0.8 } })}
              >
                Empower Your Business with Data-Driven Insights
              </motion.h1>
              <motion.p
                className="text-gray-600 text-lg leading-relaxed"
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                {...fadeInFromLeft({ transition: { delay: 0.4, duration: 0.8 } })}
              >
                From team training to talent outsourcing, we offer solutions
                tailored to your business.
              </motion.p>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-square md:aspect-auto md:h-[400px] relative overflow-hidden">
              <motion.div
                className="w-full h-full"
                initial={{ opacity: 0, x: 50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/landing/business-hero.jpg"
                  alt="Business Hero Illustration"
                  fill
                  sizes="100vw"
                  className="object-cover rounded-lg"
                  quality={90}
                />
              </motion.div>
            </div>
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
              What can we do?
            </motion.p>
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              initial="hidden"
              animate={benefitsInView ? "visible" : "hidden"}
              {...fadeInFromTop({ transition: { delay: 0.3, duration: 0.6 } })}
            >
              Our Business consulting Services
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
            <div className="bg-gray-200 rounded-lg aspect-square md:aspect-auto md:h-[350px] relative overflow-hidden">
              <motion.div
                className="w-full h-full"
                initial={{ opacity: 0, x: -50 }}
                animate={benefitsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src="/landing/business-hero-2.png"
                  alt="Business Hero Illustration"
                  className="w-full h-full object-cover rounded-xl"
                  sizes="100vw"
                  fill
                />
              </motion.div>
            </div>

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

      {/* CTA Section */}
      <CtaSection />

      <Footer />
    </main>
  );
}