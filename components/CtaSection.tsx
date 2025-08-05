import { motion, useInView } from "motion/react";
import Image from "next/image"
import { useRef } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const CtaSection = () => {
  const router = useRouter();
  const internalRef = useRef<HTMLElement>(null);
  
  // Use the passed ref or our internal ref
  const sectionRef = internalRef;
  
  // Add useInView hook directly in this component
  const ctaInView = useInView(sectionRef, { 
    once: false, // Set to true if you want animation to happen only once
    amount: 0.3 // Trigger when 30% of the section is in view
  });
    
  return (
    <section
      ref={sectionRef}
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
      <div className="relative bg-[#104BC1] rounded-xl w-full max-w-5xl lg:mx-8 min-h-[400px]">
        {/* Content container - transparent and on top */}
        <div className="relative z-10 h-full">
          <div className="h-full w-full flex items-center justify-center sm:p-12 p-7">
            <div className="grid lg:grid-cols-2 lg:px-16 gap-8 items-center w-full lg:max-w-6xl">
              <div>
                <motion.h2
                  className="text-3xl sm:text-5xl lg:text-5xl lg:max-w-5xl font-bold text-white mb-4"
                  initial={{ opacity: 0, x: -50}}
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

              <div className="relative flex lg:justify-center items-center h-full">
                <motion.div
                  className="bg-white lg:w-[80%] w-full rounded-lg p-4 text-center"
                  initial={{ opacity: 0, x: 50 }}
                  animate={
                    ctaInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }
                  }
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <Image
                    src="/landing/progressive.png"
                    alt="Progress chart"
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
  )
};

CtaSection.displayName = 'CtaSection';

export default CtaSection;