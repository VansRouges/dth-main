import Link from "next/link"

export default function OurServices() {
  return (
    <section className="py-16 px-72 w-full mx-auto bg-[#F8F8F8]">
      <div className="text-center mb-12">
        <p className="text-blue-600 font-medium mb-2">Our Services</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Start your data journey and gain practical experience that gets you hired.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 px-24">
        {/* Bootcamp/Cohort-Based Learning */}
        <div className="bg-[#104BC133] rounded-2xl p-4 h-full">
          <div className="mb-6">
            <img
                src="/landing/wpf_books.svg"
                alt="logo"
                width={70}
                height={70}
                className="object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-[#09296A] mb-4">Bootcamp/Cohort-Based Learning</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Intensive immersive programs designed to build job-ready skills in data technologies.
          </p>
          <Link href="#" className="text-blue-700 font-medium hover:text-blue-800 transition-colors">
            Explore bootcamp
          </Link>
        </div>

        {/* One-on-One Learning Sessions */}
        <div className="bg-[#FF880033] rounded-2xl p-4 h-full">
          <div className="mb-6">
            <img
                src="/landing/users.svg"
                alt="logo"
                width={70}
                height={70}
                className="object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-[#8C4B00] mb-4">One-on-One Learning Sessions:</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">Tailored mentorship to meet your unique learning needs.</p>
          <Link href="#" className="text-orange-700 font-medium hover:text-orange-800 transition-colors">
            See Full Details
          </Link>
        </div>

        {/* Guided Project Database */}
        <div className="bg-[#F7C2C6] rounded-2xl p-4 h-full">
          <div className="mb-6">
            <img
                src="/landing/projects.svg"
                alt="logo"
                width={70}
                height={70}
                className="object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-[#7F1F27] mb-4">Guided Project Database:</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Access real-world projects to practice your skills and build a portfolio.
          </p>
          <Link href="#" className="text-[#7F1F27] font-medium hover:text-pink-800 transition-colors">
            See Full Details
          </Link>
        </div>

        {/* Business Consulting Services */}
        <div className="bg-[#EAF6EC] rounded-2xl p-4 h-full">
          <div className="mb-6">
            <img
                src="/landing/handshake.svg"
                alt="logo"
                width={70}
                height={70}
                className="object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-[#165C26] mb-4">Business Consulting Services</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Tailored solutions to empower your business with data-driven strategies.
          </p>
          <Link href="#" className="text-[#165C26] font-medium hover:text-green-800 transition-colors">
            See Full Details
          </Link>
        </div>
      </div>
    </section>
  )
}
