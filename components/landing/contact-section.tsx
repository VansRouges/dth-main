"use client";
import { Mail, MessageCircle, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useFramerAnimations } from "@/hooks/use-framer-animate";
import React, { useRef } from "react";

export default function ContactSection() {
  const { fadeInFromLeft, fadeInFromRight, fadeInFromTop } =
    useFramerAnimations();

  const contactSectionRef = useRef<HTMLElement | null>(null);
  const contactInView = useInView(contactSectionRef, {
    once: false,
    amount: 0.3,
  });

  const containerStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const contactItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const formFieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

  return (
    <section ref={contactSectionRef} className="py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <motion.span
                className="text-orange-500 font-medium text-sm uppercase tracking-wide"
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
                {...fadeInFromTop({
                  transition: { delay: 0.1, duration: 0.3 },
                })}
              >
                Contact us
              </motion.span>
              <motion.h2
                className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
                {...fadeInFromLeft({
                  transition: { delay: 0.2, duration: 0.5 },
                })}
              >
                Get in Touch
              </motion.h2>
              <motion.p
                className="text-gray-600 text-lg leading-relaxed"
                initial="hidden"
                animate={contactInView ? "visible" : "hidden"}
                {...fadeInFromLeft({
                  transition: { delay: 0.3, duration: 0.5 },
                })}
              >
                &quot;Have questions or need support? We&apos;re here to help. Fill out
                the form below, and we&apos;ll get back to you as soon as possible.&quot;
              </motion.p>
            </div>

            {/* Contact Details */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              variants={containerStaggerVariants}
            >
              {/* Email */}
              <motion.div
                className="flex items-start gap-4"
                variants={contactItemVariants}
              >
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-gray-700 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-700">info@datatechhub.io</p>
                </div>
              </motion.div>

              {/* Live Support Hours */}
              <motion.div
                className="flex items-start gap-4"
                variants={contactItemVariants}
              >
                <div className="flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-gray-700 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Live Support Hours
                  </h3>
                  <p className="text-gray-700">
                    Monday – Friday, 10AM – 5PM (WAT)
                  </p>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                className="flex items-start gap-4"
                variants={contactItemVariants}
              >
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gray-700 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Location / Virtual HQ
                  </h3>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                className="flex items-start gap-4"
                variants={contactItemVariants}
              >
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-gray-700 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-700">+44 74 0720 9293</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              className="flex gap-4 pt-4"
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              {...fadeInFromLeft({ transition: { delay: 0.3, duration: 0.3 } })}
            >
              <motion.a
                href="#"
                className="w-10 h-10 flex items-center justify-center transition-colors relative"
                aria-label="Twitter"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/landing/twitter.svg"
                  alt="Twitter"
                  fill
                  className="object-contain"
                />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/datatechhub.io?igsh=MW9laDhmd3EwdGRuZQ%3D%3D&utm_source=qr"
                className="w-10 h-10 flex items-center justify-center transition-colors relative"
                aria-label="Instagram"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/landing/instagram.svg"
                  alt="Instagram"
                  fill
                  className="object-contain"
                />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/share/1AhLUQTbbP/?mibextid=wwXIfr"
                className="w-10 h-10 flex items-center justify-center transition-colors relative"
                aria-label="Facebook"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/landing/facebook.svg"
                  alt="facebook"
                  fill
                  className="object-contain"
                />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="bg-[#F1F1F1] rounded-2xl p-8"
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            {...fadeInFromRight({ transition: { delay: 0.3, duration: 0.5 } })}
          >
            <motion.form
              className="space-y-6"
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              variants={formContainerVariants}
            >
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div className="space-y-2" variants={formFieldVariants}>
                  <Label
                    htmlFor="firstName"
                    className="text-sm font-medium text-gray-700"
                  >
                    First name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="First name"
                    className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </motion.div>
                <motion.div className="space-y-2" variants={formFieldVariants}>
                  <Label
                    htmlFor="lastName"
                    className="text-sm font-medium text-gray-700"
                  >
                    Last name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Last name"
                    className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </motion.div>
              </div>

              {/* Email Field */}
              <motion.div className="space-y-2" variants={formFieldVariants}>
                <Label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </motion.div>

              {/* Subject Field */}
              <motion.div className="space-y-2" variants={formFieldVariants}>
                <Label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-700"
                >
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="Subject of your message"
                  className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div className="space-y-2" variants={formFieldVariants}>
                <Label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={6}
                  className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={formFieldVariants}>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl"
                  size="lg"
                >
                  Submit message
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
