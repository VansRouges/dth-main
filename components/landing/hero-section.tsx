'use client'

import { useFramerAnimations } from "@/hooks/use-framer-animate";
import { motion, useInView } from "motion/react";
import Image from "next/image"
import {useRef} from "react"

export function HeroSection() {
  const {
    fadeInFromLeft,
  } = useFramerAnimations();

  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  const leftContentInView = useInView(leftContentRef, { once: false, amount: 0.1 });
  const rightContentInView = useInView(rightContentRef, { once: false, amount: 0.1 });

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

  const containerStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.7,
        duration: 1,
        delay: 0.2
      },
    },
  };

  return (
    <section 
      ref={sectionRef} 
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-14 sm:py-12 md:py-16 lg:py-20 xl:py-24"
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 2xl:gap-32">
        {/* Left content */}
        <div 
          ref={leftContentRef} 
          className="w-full lg:w-1/2 xl:w-2/5 flex flex-col gap-6 sm:gap-8 md:gap-10 items-start text-left"
        >
          <motion.h1
            className="text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-extrabold text-gray-900  leading-tight"
            initial="hidden"
            animate={leftContentInView ? "visible" : "hidden"}
            {...fadeInFromLeft({ transition: { delay: 0.2, duration: 1.0 } })}
          >
            Empowering <br className="sm:hidden block  lg:block" />
            <span className="sm:hidden"> </span> Through Data
          </motion.h1>
          
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg"
            initial="hidden"
            animate={leftContentInView ? "visible" : "hidden"}
            {...fadeInFromLeft({ transition: { delay: 0.2, duration: 0.4 } })}
          >
            Unlock your potential with expert mentorship, real-world projects, and industry-leading courses.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-3 sm:gap-4 w-full xs:w-auto"
            initial="hidden"
            animate={leftContentInView ? "visible" : "hidden"}
            variants={containerStaggerVariants}
          >
            <motion.button
              className="bg-[#104BC1] text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg rounded-md hover:bg-blue-700 transition-all duration-300 hover:scale-105 w-full md:w-60 whitespace-nowrap"
              variants={buttonVariants}
              whileTap={{ scale: 0.95 }}
            >
              Explore Bootcamps
            </motion.button>
            <motion.button
              className="bg-[#E7EDF9] text-gray-800 px-4 sm:px-6 md:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg rounded-md hover:bg-[#E9EDF9] transition-all duration-300 hover:scale-105 w-full md:w-60 whitespace-nowrap"
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
          className="w-full md:mt-10 lg:w-1/2 xl:w-3/5 flex justify-center lg:justify-end"
          initial="hidden" 
          animate={rightContentInView ? "visible" : "hidden"}
          variants={containerStaggerVariants}
        >
          <motion.div
            className="w-full max-w-sm sm:max-w-lg md:max-w-3xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl h-auto flex items-center justify-center"
            variants={buttonVariants}
          >
            <Image
              src="/landing/hero-1.png"
              alt="Person reacting"
              width={800}
              height={960}
              className="w-full h-auto object-contain"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 70vw, (max-width: 1280px) 60vw, 50vw"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}