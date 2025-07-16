"use client";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/landing/footer";
import Navigation from "@/components/landing/navigation";
import Image from "next/image";
import { motion, useInView } from "framer-motion"; // Import motion and useInView for animations
import { useFramerAnimations } from '@/hooks/use-framer-animate'; // Adjust path to your hook
import React, { useRef } from 'react'; // Import useRef

export default function BusinessPage() {
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
    "Corporate training in data-driven technologies.",
    "Talent outsourcing for projects or roles.",
    "Data strategy consulting and execution.",
  ];

  // Variants for staggered animations (Benefits)
  const containerStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger children by 0.1 seconds
        delayChildren: 0.2,   // Delay start of children animations
      },
    },
  };

  const benefitItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  // Refs for each section to observe scroll
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const benefitsSectionRef = useRef<HTMLElement | null>(null);
  const ctaSectionRef = useRef<HTMLElement | null>(null);

  const heroInView = useInView(heroSectionRef, { once: false, amount: 0.3 });
  const benefitsInView = useInView(benefitsSectionRef, { once: false, amount: 0.3 });
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
                initial="hidden" // Start hidden
                animate={heroInView ? "visible" : "hidden"} // Animate when in view
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
            <motion.div
              className="bg-gray-200 rounded-lg aspect-square md:aspect-auto md:h-[400px] relative"
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              {...fadeInFromRight({ transition: { delay: 0.6, duration: 0.8 } })}
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
            <motion.div
              className="bg-gray-200 rounded-lg aspect-square md:aspect-auto md:h-[350px] relative"
              initial="hidden"
              animate={benefitsInView ? "visible" : "hidden"}
              {...fadeInFromLeft({ transition: { delay: 0.5, duration: 0.8 } })}
            >
              <Image
                src="/landing/business-hero-2.png"
                alt="Business Hero Illustration"
                className="w-full h-full object-cover rounded-xl"
                sizes="100vw"
                fill
              />
            </motion.div>

            <motion.div
              className="space-y-6"
              initial="hidden"
              animate={benefitsInView ? "visible" : "hidden"}
              variants={containerStaggerVariants} // Parent variant for stagger
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  variants={benefitItemVariants} // Child variant
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