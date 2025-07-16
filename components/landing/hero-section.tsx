'use client'

import { useFramerAnimations } from "@/hooks/use-framer-animate";
import { motion, useInView } from "motion/react";
import Image from "next/image"
import {useRef} from "react"

export function HeroSection() {
  const {
    fadeInFromLeft,
    fadeInFromRight,
    scaleIn
  } = useFramerAnimations();

  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  const sectionInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const leftContentInView = useInView(leftContentRef, { once: false, amount: 0.5 });
  const rightContentInView = useInView(rightContentRef, { once: false, amount: 0.3 });

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section ref={sectionRef} className="flex flex-col lg:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto">
      {/* Left content */}
      <div ref={leftContentRef} className="max-w-xl space-y-6">
        <motion.h1
          className="text-6xl sm:text-7xl font-extrabold text-gray-900 tracking-wider leading-snug"
          initial="hidden"
          animate={leftContentInView ? "visible" : "hidden"}
          {...fadeInFromLeft({ transition: { delay: 0.2, duration: 1.0 } })}
        >
          Empowering <br /> Through Data
        </motion.h1>
        
        <motion.p
          className="text-gray-600 text-base leading-relaxed"
          initial="hidden"
          animate={leftContentInView ? "visible" : "hidden"}
          {...fadeInFromLeft({ transition: { delay: 0.2, duration: 0.4 } })}
        >
          Unlock your potential with expert mentorship, real-world projects, and industry-leading courses.
        </motion.p>

        <motion.div
          className="flex gap-4"
          initial="hidden"
          animate={leftContentInView ? "visible" : "hidden"}
          variants={containerStaggerVariants}
        >
          <motion.button
            className="bg-[#104BC1] text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all duration-300 hover:scale-105"
            variants={buttonVariants}
            whileTap={{ scale: 0.95 }}
          >
            Explore Bootcamps
          </motion.button>
          <motion.button
            className="bg-[#E7EDF9] text-gray-800 px-6 py-3 rounded-md hover:bg-[#E9EDF9] transition-all duration-300 hover:scale-105"
            variants={buttonVariants}
            whileTap={{ scale: 0.95 }}
          >
            Join one-on-one
          </motion.button>
        </motion.div>
      </div>

      {/* Right content */}
      <motion.div
        ref={rightContentRef}
        className="relative mt-12 lg:mt-0"
        initial="hidden"
        animate={rightContentInView ? "visible" : "hidden"}
        {...fadeInFromRight({ transition: { delay: 0.5, duration: 0.4 } })}
      >
        {/* Big Image Container - Smoothed organic shape */}
        <motion.div
          className="w-[470px] h-[550px] flex items-center justify-center overflow-hidden"
          initial="hidden"
          animate={rightContentInView ? "visible" : "hidden"}
          {...scaleIn({ transition: { delay: 0.4, duration: 0.4 } })}
        >
          <Image
            src="/landing/hero-1.png"
            alt="Person reacting"
            width={500}
            height={600}
            className="w-full h-full object-contain"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
