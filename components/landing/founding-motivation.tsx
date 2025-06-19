"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

export default function FoundingMotivation() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

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
  ]

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    )
  }, [carouselImages.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, 5000)
      return () => clearInterval(interval)
    }
  }, [nextSlide, isPaused])

  return (
    <section className="py-32 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16 items-start">
          {/* Left Side - Heading */}
          <div className="">
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-14 mt-14">
              The founding motivation of DataTechHub
            </h2>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 lg:col-span-2">
            <p className="text-gray-700 text-lg leading-relaxed">
              DataTechHub was founded to address the critical gap between theoretical learning and practical application
              in the data industry. The journey began with a mission to create an educational platform where aspiring
              data professionals and businesses alike can thrive in a supportive and resource-rich environment.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed italic">
            &#34;Our story is rooted in a passion for data and a vision to empower learners and organizations to harness
              the true potential of their data. We believe that anyone, regardless of their background, should have
              access to high-quality learning resources, real-world projects, and industry mentorship to accelerate
              their growth and achieve success.&#34;
            </p>
          </div>
        </div>

        {/* Enhanced Carousel */}
        <div 
          className="mt-16 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden rounded-2xl h-96">
            {/* Slides */}
            <div className="flex h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {carouselImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 h-full">
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === currentIndex}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full shadow-md transition-all"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm p-2 rounded-full shadow-md transition-all"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}