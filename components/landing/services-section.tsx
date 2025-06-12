import { Box, Users, Database, Handshake } from "lucide-react"
import Link from "next/link"

export default function OurServices() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto bg-red-400 [#F8F8F8]">
      <div className="text-center mb-12">
        <p className="text-blue-600 font-medium mb-2">Our Services</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Start your data journey and gain practical experience that gets you hired.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Bootcamp/Cohort-Based Learning */}
        <div className="bg-blue-200 rounded-2xl p-8 h-full">
          <div className="mb-6">
            <Box className="w-12 h-12 text-blue-700" strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Bootcamp/Cohort-Based Learning</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Intensive immersive programs designed to build job-ready skills in data technologies.
          </p>
          <Link href="#" className="text-blue-700 font-medium hover:text-blue-800 transition-colors">
            Explore bootcamp
          </Link>
        </div>

        {/* One-on-One Learning Sessions */}
        <div className="bg-orange-200 rounded-2xl p-8 h-full">
          <div className="mb-6">
            <Users className="w-12 h-12 text-orange-700" strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">One-on-One Learning Sessions:</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">Tailored mentorship to meet your unique learning needs.</p>
          <Link href="#" className="text-orange-700 font-medium hover:text-orange-800 transition-colors">
            See Full Details
          </Link>
        </div>

        {/* Guided Project Database */}
        <div className="bg-pink-200 rounded-2xl p-8 h-full">
          <div className="mb-6">
            <Database className="w-12 h-12 text-pink-700" strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Guided Project Database:</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Access real-world projects to practice your skills and build a portfolio.
          </p>
          <Link href="#" className="text-pink-700 font-medium hover:text-pink-800 transition-colors">
            See Full Details
          </Link>
        </div>

        {/* Business Consulting Services */}
        <div className="bg-green-200 rounded-2xl p-8 h-full">
          <div className="mb-6">
            <Handshake className="w-12 h-12 text-green-700" strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Business Consulting Services</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Tailored solutions to empower your business with data-driven strategies.
          </p>
          <Link href="#" className="text-green-700 font-medium hover:text-green-800 transition-colors">
            See Full Details
          </Link>
        </div>
      </div>
    </section>
  )
}
