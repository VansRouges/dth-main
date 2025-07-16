"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useFramerAnimations } from "@/hooks/use-framer-animate";
import { useRef } from "react";

export default function CompanyValues() {
  const { fadeInFromTop, fadeInFromBottom } = useFramerAnimations();

  const valuesSectionRef = useRef<HTMLDivElement | null>(null);
  const missionSectionRef = useRef<HTMLDivElement | null>(null);

  const valuesInView = useInView(valuesSectionRef, {
    once: false,
    amount: 0.3,
  });
  const missionInView = useInView(missionSectionRef, {
    once: false,
    amount: 0.3,
  });

  const values = [
    {
      icon: "/landing/badge.svg",
      title: "Excellence",
      description: "Setting the standard for high-quality education",
    },
    {
      icon: "/landing/bulb.svg",
      title: "Innovation",
      description: "Continuously evolving with the latest technologies",
    },
    {
      icon: "/landing/community.svg",
      title: "Community",
      description: "Building an inclusive network of learners and businesses",
    },
  ];

  // Variants for values staggering
  const valuesContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const valueItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const missionContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const missionItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="py-16 px-4 bg-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Values Section - positioned to overlap */}
        <motion.div
          ref={valuesSectionRef}
          className="relative z-10 -mb-24"
          initial="hidden"
          animate={valuesInView ? "visible" : "hidden"}
          {...fadeInFromTop({ transition: { delay: 0.2, duration: 0.8 } })}
        >
          <div className="bg-[#DDE8FF] w-[80%] mx-auto rounded-3xl p-8 md:p-12">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
              variants={valuesContainerVariants}
              initial="hidden"
              animate={valuesInView ? "visible" : "hidden"}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="text-center space-y-4"
                  variants={valueItemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                >
                  <div className="flex justify-center">
                    <motion.div
                      className="w-20 h-20 flex items-center justify-center relative"
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image src={value.icon} alt={value.title} fill />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#104BC1]">
                    {value.title}
                  </h3>
                  <p className="text-[#081227] leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Vision and Mission Section - with negative margin to pull up */}
        <motion.div
          ref={missionSectionRef}
          className="relative pt-24 pb-8 bg-[#F8F8F8] rounded-2xl"
          initial="hidden"
          animate={missionInView ? "visible" : "hidden"}
          {...fadeInFromBottom({ transition: { delay: 0.4, duration: 0.8 } })}
        >
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12"
            variants={missionContainerVariants}
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
          >
            {/* Vision Statement */}
            <motion.div className="space-y-6" variants={missionItemVariants}>
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-12 h-12 flex items-center justify-center relative"
                  whileHover={{
                    scale: 1.1,
                    rotate: 10,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Image
                    src="/landing/eye.svg"
                    alt="Vision Statement"
                    fill
                    className="w-20 h-20"
                  />
                </motion.div>
                <h3 className="text-2xl font-bold text-orange-600 uppercase tracking-wide">
                  Vision Statement
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                "To be the leading global platform for data education and
                consulting, nurturing the next generation of data professionals
                and helping businesses harness the full potential of their
                data."
              </p>
            </motion.div>

            {/* Mission Statement */}
            <motion.div className="space-y-6" variants={missionItemVariants}>
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-12 h-12 flex items-center justify-center relative"
                  whileHover={{
                    scale: 1.1,
                    rotate: -10,
                    transition: { duration: 0.2 },
                  }}
                >
                  <Image
                    src="/landing/goals.svg"
                    alt="Mission Statement"
                    fill
                    className="w-20 h-20"
                  />
                </motion.div>
                <h3 className="text-2xl font-bold text-orange-600 uppercase tracking-wide">
                  Mission Statement
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                "To provide accessible, high-quality education and consulting
                services in data-driven technologies. We foster a vibrant
                community of learners and experts, creating an environment where
                knowledge, innovation, and collaboration thrive"
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
