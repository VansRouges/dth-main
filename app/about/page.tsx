"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Shield, Lightbulb, Users, Eye, Target } from "lucide-react"
import { useState } from "react"

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const images = [
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                The founding motivation of DataTechHub
              </h1>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                DataTechHub was founded to address the critical gap between theoretical learning and practical
                application in data science. The journey began with a simple yet profound realization where traditional
                education often falls short in preparing individuals for real-world challenges. We saw this as a
                supportive and impactful rich environment.
              </p>
              <p>
                Our story is rooted in a passion for data and a vision to empower learners and organizations to harness
                the full potential of their data. We believe that anyone, regardless of their background, should have
                access to high-quality learning resources, real-world projects, and industry mentorship to succeed in
                the data-driven economy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {images.map((src, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img
                      src={src || "/placeholder.svg"}
                      alt={`DataTechHub workspace ${index + 1}`}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Carousel Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-blue-100 border-0">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
                <p className="text-gray-700">Setting the standard for high-quality education</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-100 border-0">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-700">Continuously evolving with the latest technologies</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-100 border-0">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
                <p className="text-gray-700">Building an inclusive network of learners and businesses</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision Statement */}
            <div className="bg-white rounded-2xl p-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">VISION STATEMENT</h3>
              <p className="text-gray-700 leading-relaxed">
                {
                  "To be the leading global platform for data education and consulting, bridging the gap between theoretical data professional and practical application, empowering individuals and organizations to thrive in the data-driven world."
                }
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-white rounded-2xl p-8">
              <div className="mb-6">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">MISSION STATEMENT</h3>
              <p className="text-gray-700 leading-relaxed">
                {
                  "To provide accessible, high-quality education and consulting services that drive technologies. We foster a vibrant community of learners, professionals, and organizations united by a shared commitment to innovation, and collaboration thrive."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
