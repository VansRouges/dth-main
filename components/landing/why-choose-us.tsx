'use client'

import { useFramerAnimations } from "@/hooks/use-framer-animate";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image"

export function WhyChooseUs() {
  const {
    fadeInFromTop,
    scaleIn
  } = useFramerAnimations();

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef(null);

  // const sectionInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const headerInView = useInView(headerRef, { once: false, amount: 0.5 });
  const imageInView = useInView(imageRef, { once: false, amount: 0.3 });
  const featuresInView = useInView(featuresRef, { once: false, amount: 0.3 });

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

  const featureItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const features = [
    {
      title: "Learn from Industry-Recognized Instructors",
      description: "Learn from seasoned experts with years of experience in top data roles."
    },
    {
      title: "Real-World Experience",
      description: "Gain hands-on experience through projects and case studies modeled after real-world scenarios."
    },
    {
      title: "Flexible Learning Paths",
      description: "Choose from bootcamps, self-paced courses, or personalized learning sessions to suit your schedule."
    },
    {
      title: "Mentorship & Career Support",
      description: "Personalized career guidance, resume building, mock interviews, and job placement support."
    },
    {
      title: "Comprehensive Project Repository",
      description: "Access a rich database of projects and case studies to apply your skills and build a professional portfolio."
    },
    {
      title: "Business Consulting Expertise",
      description: "Leverage our expertise to solve complex business challenges and implement data-driven strategies."
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 px-4 w-full bg-white">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="text-center mb-12">
          <motion.p
            className="text-blue-600 font-medium mb-2"
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            {...fadeInFromTop({ transition: { delay: 0.1, duration: 0.2 } })}
          >
            How do we stand out?
          </motion.p>
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            {...fadeInFromTop({ transition: { delay: 0.1, duration: 0.2 } })}
          >
            Why Choose DataTechHub?
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            {...fadeInFromTop({ transition: { delay: 0.2, duration: 0.2 } })}
          >
            How DataTechHub leads in data education.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            ref={imageRef}
            className="bg-gray-transparent aspect-square md:aspect-auto md:h-[700px] relative"
            initial="hidden"
            animate={imageInView ? "visible" : "hidden"}
            {...scaleIn({ transition: { delay: 0.2, duration: 0.2 } })}
          >
            <Image
              src="/landing/hero-2.png"
              alt="Person reacting"
              width={500}
              height={600}
              className="w-full h-full object-contain"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
              <span className="sr-only">DataTechHub image</span>
            </div>
          </motion.div>

          <motion.div
            ref={featuresRef}
            className="space-y-6"
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            variants={containerStaggerVariants}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex gap-4"
                variants={featureItemVariants}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="mt-1 flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 mt-1">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
