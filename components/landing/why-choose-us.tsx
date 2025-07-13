import Image from "next/image"

export default function WhyChooseUs() {
    return (
      <section className="py-16 px-4 w-full bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
          <p className="text-blue-600 font-medium mb-2">How do we stand out?</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose DataTechHub?</h2>
          <p className="text-gray-600 text-lg">How DataTechHub leads in data education.</p>
          </div>
    
          <div className="grid md:grid-cols-2 gap-2 items-center">
            <div className="bg-gray-transparent aspect-square md:aspect-auto md:h-[700px] relative">
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
            </div>
    
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex gap-4">
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
                  <h3 className="font-bold text-lg text-gray-900">Learn from Industry-Recognized Instructors</h3>
                  <p className="text-gray-600 mt-1">
                    Learn from seasoned experts with years of experience in top data roles.
                  </p>
                </div>
              </div>
    
              {/* Feature 2 */}
              <div className="flex gap-4">
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
                  <h3 className="font-bold text-lg text-gray-900">Real-World Experience</h3>
                  <p className="text-gray-600 mt-1">
                    Gain hands-on experience through projects and case studies modeled after real-world scenarios.
                  </p>
                </div>
              </div>
    
              {/* Feature 3 */}
              <div className="flex gap-4">
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
                  <h3 className="font-bold text-lg text-gray-900">Flexible Learning Paths</h3>
                  <p className="text-gray-600 mt-1">
                    Choose from bootcamps, self-paced courses, or personalized learning sessions to suit your schedule.
                  </p>
                </div>
              </div>
    
              {/* Feature 4 */}
              <div className="flex gap-4">
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
                  <h3 className="font-bold text-lg text-gray-900">Mentorship & Career Support</h3>
                  <p className="text-gray-600 mt-1">
                    Personalized career guidance, resume building, mock interviews, and job placement support.
                  </p>
                </div>
              </div>
    
              {/* Feature 5 */}
              <div className="flex gap-4">
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
                  <h3 className="font-bold text-lg text-gray-900">Comprehensive Project Repository</h3>
                  <p className="text-gray-600 mt-1">
                    Access a rich database of projects and case studies to apply your skills and build a professional
                    portfolio.
                  </p>
                </div>
              </div>
    
              {/* Feature 6 */}
              <div className="flex gap-4">
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
                  <h3 className="font-bold text-lg text-gray-900">Business Consulting Expertise</h3>
                  <p className="text-gray-600 mt-1">
                    Leverage our expertise to solve complex business challenges and implement data-driven strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    )
  }
  