"use client"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const stats = [
  {
    id: 1,
    value: "7",
    label: "Courses",
    image: "/landing/stat-head.svg",
    alt: "courses"
  },
  {
    id: 2,
    value: "20+",
    label: "Tutors",
    image: "/landing/tutorial.svg",
    alt: "tutors"
  },
  {
    id: 3,
    value: "2283",
    label: "Google Reviews",
    image: "/landing/stars.svg",
    alt: "reviews"
  },
  {
    id: 4,
    value: "5000+",
    label: "Students",
    image: "/landing/students.svg",
    alt: "students"
  },
  {
    id: 5,
    value: "1",
    label: "Common goals",
    image: "/landing/goal.svg",
    alt: "goals"
  }
];


export default function StatsTestimonialsCTA() {
  const router = useRouter()

  return (
    <div>
      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.id} className="relative group">
                {/* Background image positioned behind the content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={stat.image}
                    alt={stat.alt}
                    className="w-32 h-32 object-contain"
                  />
                </div>
                {/* Stat content */}
                <div className="relative z-10">
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-medium mb-2">Testimonials</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What our Learners are saying</h2>
            <p className="text-gray-600 text-lg">
              Start your data journey and gain practical experience that gets you hired.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {
                  "It's been an honor and a pleasure to be part of DataTechHub's journey. The platform cultivates brilliance, hard work, and prepares individuals for meaningful leadership. What stands out most to me..."
                }
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">— Evans Agina</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-8">
              <div className="mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {
                  "It's been an honor and a pleasure to be part of DataTechHub's journey. The platform cultivates brilliance, hard work, and prepares individuals for meaningful leadership. What stands out most to me..."
                }
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold text-gray-900">— Evans Agina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      {/* Base layer - dark background */}
      <section className="relative py-32 px-4 bg-[#081227] flex justify-center items-center">
        {/* Shapes background - confined to the blue container */}
        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-xl">
            <img
              src="/landing/shapes.png"
              alt="Abstract shapes background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>
        <div className="relative bg-[#104BC1] rounded-xl w-[70%] min-h-[400px]">

          {/* Content container - transparent and on top */}
          <div className="relative z-10 h-full">
            <div className="h-full flex items-center justify-center p-12">
              <div className="grid md:grid-cols-2 px-16 gap-8 items-center w-full max-w-6xl">
                <div>
                  <h2 className="text-5xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
                  <p className="text-blue-100 mb-8 text-lg">
                    Join thousands of learners transforming their careers with DataTechHub.
                  </p>
                  <Button onClick={() => { router.push("/sign-up") }} className="bg-white cursor-pointer text-blue-600 hover:bg-gray-100 p-6 text-lg font-semibold">
                    Get Started Today
                  </Button>
                </div>

                <div className="relative flex justify-center h-full">
                  <div className="bg-white w-[80%] rounded-lg p-8 text-center">
                    <img
                      src="/landing/progress.png"
                      alt="Abstract shapes background"
                      className="w-full h-full object-cover h-fit "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
