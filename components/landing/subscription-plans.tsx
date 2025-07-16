"use client";
import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useFramerAnimations } from '@/hooks/use-framer-animate';
import React, { useRef } from 'react';

export default function SubscriptionPlans() {
  const {
    fadeInFromLeft,
    fadeInFromRight,
    fadeInFromTop,
    fadeInFromBottom,
    scaleIn,
  } = useFramerAnimations();

  const benefits = [
    "Benefit 1",
    "Benefit 2", 
    "Benefit 3",
    "Benefit 4",
    "Benefit 5",
    "Benefit 6",
    "Benefit 7",
    "Benefit 8",
  ];

  // Variants for staggered animations
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
      }
    },
  };

  // Refs for scroll observation
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  // const sectionInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const headerInView = useInView(headerRef, { once: false, amount: 0.5 });
  const cardsInView = useInView(cardsRef, { once: false, amount: 0.3 });

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            {...fadeInFromTop({ transition: { delay: 0.2, duration: 0.8 } })}
          >
            Subscription and Plans
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg"
            initial="hidden"
            animate={headerInView ? "visible" : "hidden"}
            {...fadeInFromTop({ transition: { delay: 0.4, duration: 0.8 } })}
          >
            Subscribe to access the full library.*
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Individual Plan */}
          <motion.div
            initial="hidden"
            animate={cardsInView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-[#104BC1] text-white border-0 rounded-3xl overflow-hidden h-full">
              <CardHeader className="pb-4">
                <motion.h3
                  className="text-2xl font-bold mb-3"
                  initial="hidden"
                  animate={cardsInView ? "visible" : "hidden"}
                  {...fadeInFromLeft({ transition: { delay: 0.4, duration: 0.6 } })}
                >
                  Individual
                </motion.h3>
                <motion.p
                  className="text-blue-100 text-sm leading-relaxed"
                  initial="hidden"
                  animate={cardsInView ? "visible" : "hidden"}
                  {...fadeInFromLeft({ transition: { delay: 0.5, duration: 0.6 } })}
                >
                  Create an account for your Organization and start Lorem Ipsum Lorem Ipsum.
                </motion.p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Pricing */}
                <motion.div
                  className="space-y-1"
                  initial="hidden"
                  animate={cardsInView ? "visible" : "hidden"}
                  {...scaleIn({ transition: { delay: 0.6, duration: 0.8 } })}
                >
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">$1000.00</span>
                    <span className="text-blue-200">/month</span>
                  </div>
                  <p className="text-blue-200 text-sm">$1000 paid annually</p>
                </motion.div>

                {/* Subscribe Button */}
                <motion.div
                  initial="hidden"
                  animate={cardsInView ? "visible" : "hidden"}
                  {...fadeInFromBottom({ transition: { delay: 0.7, duration: 0.6 } })}
                >
                  <Button
                    className="w-full bg-white text-blue-600 hover:bg-gray-50 font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105"
                    size="lg"
                  >
                    Subscribe Now!
                  </Button>
                </motion.div>

                {/* Benefits List */}
                <motion.div
                  className="space-y-3 pt-2"
                  initial="hidden"
                  animate={cardsInView ? "visible" : "hidden"}
                  variants={containerStaggerVariants}
                >
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      variants={benefitItemVariants}
                      transition={{ delay: 0.8 + index * 0.05 }}
                    >
                      <div className="w-5 h-5 rounded-full border-2 border-[#377CFD] flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#377CFD]" />
                      </div>
                      <span className="text-blue-100 text-sm flex items-center gap-2">
                        {benefit}
                        <Info className="w-3 h-3 text-blue-300" />
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Organization Plan */}
          <motion.div
            initial="hidden"
            animate={cardsInView ? "visible" : "hidden"}
            variants={cardVariants}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-white border border-gray-200 rounded-3xl overflow-hidden h-full">
              <CardHeader className="pb-4">
                <motion.h3
                  className="text-2xl font-bold text-gray-900 mb-3"
                  initial="hidden"
                  animate={cardsInView ? "visible" : "hidden"}
                  {...fadeInFromRight({ transition: { delay: 0.6, duration: 0.6 } })}
                >
                  Organization
                </motion.h3>
                <motion.p
                  className="text-gray-600 text-sm leading-relaxed"
                  initial="hidden"
                  animate={cardsInView ? "visible" : "hidden"}
                  {...fadeInFromRight({ transition: { delay: 0.7, duration: 0.6 } })}
                >
                  Create an account for your Organization and start Lorem Ipsum Lorem Ipsum.
                </motion.p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Pricing */}
                <motion.div
                  className="space-y-1"
                  initial="hidden"
                  animate={cardsInView ? "visible" : "hidden"}
                  {...scaleIn({ transition: { delay: 0.8, duration: 0.8 } })}
                >
                  <div className="text-4xl font-bold text-[#104BC1] mb-1">Let&apos;s talk</div>
                  <p className="text-gray-600 text-sm">Price is based on Number of seats</p>
                </motion.div>

                {/* Subscribe Button */}
                <motion.div
                  initial="hidden"
                  animate={cardsInView ? "visible" : "hidden"}
                  {...fadeInFromBottom({ transition: { delay: 0.9, duration: 0.6 } })}
                >
                  <Button
                    className="w-full bg-[#104BC1] hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105"
                    size="lg"
                  >
                    Subscribe Now!
                  </Button>
                </motion.div>

                {/* Benefits List */}
                <motion.div
                  className="space-y-3 pt-2"
                  initial="hidden"
                  animate={cardsInView ? "visible" : "hidden"}
                  variants={containerStaggerVariants}
                >
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3"
                      variants={benefitItemVariants}
                      transition={{ delay: 1.0 + index * 0.05 }}
                    >
                      <div className="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                      <span className="text-gray-700 text-sm flex items-center gap-2">
                        {benefit}
                        <Info className="w-3 h-3 text-gray-400" />
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}