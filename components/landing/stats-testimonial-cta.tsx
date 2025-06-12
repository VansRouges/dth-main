import { Button } from "@/components/ui/button"

export default function StatsTestimonialsCTA() {
  return (
    <div>
      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">7</div>
              <div className="text-gray-600">Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">20+</div>
              <div className="text-gray-600">Tutors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">2283</div>
              <div className="text-gray-600">Google Reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">5000+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gray-900 mb-2">1</div>
              <div className="text-gray-600">Common goals</div>
            </div>
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
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 relative overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
                <p className="text-blue-100 mb-8 text-lg">
                  Join thousands of learners transforming their careers with DataTechHub.
                </p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  Get Started Today
                </Button>
              </div>

              <div className="flex justify-center">
                <div className="bg-white rounded-lg p-8 text-center">
                  <div className="text-4xl font-bold text-gray-900 mb-2">97%</div>
                  <div className="text-gray-600">Project Completion Rate</div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
