"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useFramerAnimations } from "@/hooks/use-framer-animate";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const stats = [
  {
    id: 1,
    value: "7",
    label: "Courses",
    image: "/landing/stat-head.svg",
    alt: "courses",
  },
  {
    id: 2,
    value: "20+",
    label: "Tutors",
    image: "/landing/tutorial.svg",
    alt: "tutors",
  },
  {
    id: 3,
    value: "2283",
    label: "Google Reviews",
    image: "/landing/stars.svg",
    alt: "reviews",
  },
  {
    id: 4,
    value: "5000+",
    label: "Students",
    image: "/landing/students.svg",
    alt: "students",
  },
  {
    id: 5,
    value: "1",
    label: "Common goals",
    image: "/landing/goal.svg",
    alt: "goals",
  },
];

export default function StatsTestimonialsCTA() {
  const router = useRouter();
  const { fadeInFromTop } = useFramerAnimations();

  const statsSectionRef = useRef<HTMLElement | null>(null);
  const testimonialsSectionRef = useRef<HTMLElement | null>(null);
  const ctaSectionRef = useRef<HTMLElement | null>(null);

  const statsInView = useInView(statsSectionRef, { once: false, amount: 0.3 });
  const testimonialsInView = useInView(testimonialsSectionRef, {
    once: false,
    amount: 0.3,
  });
  const ctaInView = useInView(ctaSectionRef, { once: false, amount: 0.3 });

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Variants for testimonials
  const testimonialsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4,
      },
    },
  };

  const testimonialItemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div>
      {/* Stats Section */}
      <section ref={statsSectionRef} className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center"
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={statsContainerVariants}
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="relative group"
                variants={statItemVariants}
              >
                {/* Background image positioned behind the content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={stat.image}
                    alt={stat.alt}
                    width={128}
                    height={128}
                    className="object-contain"
                  />
                </div>
                {/* Stat content */}
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsSectionRef} className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <motion.p
              className="text-blue-600 font-medium mb-2"
              initial="hidden"
              animate={testimonialsInView ? "visible" : "hidden"}
              {...fadeInFromTop({ transition: { delay: 0.2, duration: 0.6 } })}
            >
              Testimonials
            </motion.p>
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              initial="hidden"
              animate={testimonialsInView ? "visible" : "hidden"}
              {...fadeInFromTop({ transition: { delay: 0.3, duration: 0.6 } })}
            >
              What our Learners are saying
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg"
              initial="hidden"
              animate={testimonialsInView ? "visible" : "hidden"}
              {...fadeInFromTop({ transition: { delay: 0.4, duration: 0.6 } })}
            >
              Start your data journey and gain practical experience that gets
              you hired.
            </motion.p>
          </div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            animate={testimonialsInView ? "visible" : "hidden"}
            variants={testimonialsContainerVariants}
          >
            <motion.div
              className="bg-gray-100 rounded-lg p-8"
              variants={testimonialItemVariants}
            >
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {
                  "It's been an honor and a pleasure to be part of DataTechHub's journey. The platform cultivates brilliance, hard work, and prepares individuals for meaningful leadership. What stands out most to me..."
                }
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">— Evans Agina</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-100 rounded-lg p-8"
              variants={testimonialItemVariants}
            >
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {
                  "It's been an honor and a pleasure to be part of DataTechHub's journey. The platform cultivates brilliance, hard work, and prepares individuals for meaningful leadership. What stands out most to me..."
                }
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">— Evans Agina</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaSectionRef}
        className="relative py-32 px-4 bg-slate-900 flex justify-center items-center"
      >
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
    </div>
  );
}
