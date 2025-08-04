"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { useFramerAnimations } from '@/hooks/use-framer-animate'

export default function FoundingMotivation() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(4)

  const {
    fadeInFromLeft,
    fadeInFromBottom,
  } = useFramerAnimations();

  const sectionRef = useRef<HTMLElement | null>(null);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  
  const sectionInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const carouselInView = useInView(carouselRef, { once: false, amount: 0.3 });

  const carouselImages = [
    {
      src: "/landing/learning-1.png",
      alt: "Business professionals collaborating on documents",
    },
    {
      src: "/landing/learning-2.png",
      alt: "Modern open office workspace",
    },
    {
      src: "/landing/learning-3.png",
      alt: "Team meeting with sticky notes brainstorming",
    },
    {
      src: "/landing/learning-1.png",
      alt: "Collaborative work session in progress",
    },
    {
      src: "/landing/learning-3.png",
      alt: "Team meeting with sticky notes brainstorming",
    },
    {
      src: "/landing/learning-1.png",
      alt: "Collaborative work session in progress",
    },
    {
      src: "/landing/learning-3.png",
      alt: "Team meeting with sticky notes brainstorming",
    },
    {
      src: "/landing/learning-1.png",
      alt: "Collaborative work session in progress",
    },
  ]

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1)
      } else if (window.innerWidth < 768) {
        setSlidesPerView(2)
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(3)
      } else {
        setSlidesPerView(4)
      }
    }

    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)
    return () => window.removeEventListener('resize', updateSlidesPerView)
  }, [])

  const slideWidth = 100 / slidesPerView;
  const maxIndex = Math.max(0, carouselImages.length - slidesPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    )
  }, [maxIndex])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    )
  }, [maxIndex])

  const goToSlide = (index: number) => {
    if (index >= 0 && index <= maxIndex) {
      setCurrentIndex(index)
    }
  }

  // Swipe detection
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  const [mouseStart, setMouseStart] = useState(0)
  const [mouseEnd, setMouseEnd] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setMouseEnd(0)
    setMouseStart(e.clientX)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    setMouseEnd(e.clientX)
  }

  const onMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)
    
    if (!mouseStart || !mouseEnd) return
    
    const distance = mouseStart - mouseEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

  const onMouseLeave = () => {
    setIsDragging(false)
    setIsPaused(false)
  }

  useEffect(() => {
    if (!isPaused && !isDragging) {
      const interval = setInterval(nextSlide, 5000)
      return () => clearInterval(interval)
    }
  }, [nextSlide, isPaused, isDragging])

  const contentStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    },
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-12 md:py-16 lg:py-26 xl:py-30 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* Left Side - Heading */}
          <motion.div 
            className="lg:pr-4 xl:pr-8"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            {...fadeInFromLeft({ transition: { delay: 0.2, duration: 0.2 } })}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 leading-tight sm:leading-tight md:leading-tight lg:leading-tight mt-0 sm:mt-4 md:mt-8 lg:mt-12 xl:mt-14">
              The founding motivation of DataTechHub
            </h2>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            className="space-y-6 sm:space-y-8 lg:col-span-2 lg:pl-4 xl:pl-8"
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={contentStaggerVariants}
          >
            <motion.p 
              className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-relaxed lg:leading-loose"
              variants={paragraphVariants}
            >
              DataTechHub was founded to address the critical gap between theoretical learning and practical application
              in the data industry. The journey began with a mission to create an educational platform where aspiring
              data professionals and businesses alike can thrive in a supportive and resource-rich environment.
            </motion.p>

            <motion.p 
              className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-relaxed lg:leading-loose italic border-l-4 border-blue-500 pl-4 sm:pl-6 lg:pl-8 py-2 sm:py-4 bg-blue-50/50 rounded-r-lg"
              variants={paragraphVariants}
            >
              &quot;Our story is rooted in a passion for data and a vision to empower learners and organizations to harness
              the true potential of their data. We believe that anyone, regardless of their background, should have
              access to high-quality learning resources, real-world projects, and industry mentorship to accelerate
              their growth and achieve success.&quot;
            </motion.p>
          </motion.div>
        </div>

        {/* Carousel */}
        <motion.div 
          ref={carouselRef}
          className="mt-12 sm:mt-16 lg:mt-20 xl:mt-24 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={onMouseLeave}
          initial="hidden"
          animate={carouselInView ? "visible" : "hidden"}
          {...fadeInFromBottom({ transition: { delay: 0.4, duration: 0.2 } })}
        >
          <div 
            className="relative overflow-hidden w-full rounded-xl sm:rounded-2xl h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] cursor-grab active:cursor-grabbing"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            style={{ userSelect: 'none' }}
          >
            {/* Slides */}
            <div 
              className="flex gap-2 sm:gap-3 md:gap-4 h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
            >
              {carouselImages.map((image, index) => (
                <div key={index} className="flex-shrink-0 h-full" style={{ width: `${slideWidth}%` }}>
                  <div className="relative w-full h-full px-1 sm:px-2">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover rounded-md sm:rounded-lg pointer-events-none"
                      priority={index === currentIndex}
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Hidden on mobile */}
          <motion.button 
            onClick={prevSlide}
            className="hidden sm:block absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-md transition-all z-10"
            aria-label="Previous slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -20 }}
            animate={carouselInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button 
            onClick={nextSlide}
            className="hidden sm:block absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 sm:p-3 rounded-full shadow-md transition-all z-10"
            aria-label="Next slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={carouselInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.6, duration: 0.2 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Indicators */}
          <motion.div 
            className="flex justify-center mt-4 sm:mt-6 lg:mt-8 space-x-2 sm:space-x-3 px-4"
            initial="hidden"
            animate={carouselInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                },
              },
            }}
          >
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-blue-600 w-4 sm:w-6" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.2 }
                  },
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </motion.div>

          {/* Mobile swipe instruction */}
          <div className="block sm:hidden text-center mt-4">
            <p className="text-xs text-gray-500">Swipe left or right to navigate</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}