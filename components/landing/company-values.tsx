export default function CompanyValues() {
  const values = [
    {
      icon: "/landing/badge.svg",
      title: "Excellence",
      description: "Setting the standard for high-quality education",
    },
    {
      icon: "/landing/bulb.svg",
      title: "Innovation",
      description: "Continuously evolving with the latest technologies",
    },
    {
      icon: "/landing/community.svg",
      title: "Community",
      description: "Building an inclusive network of learners and businesses",
    },
  ]

  return (
    <section className="py-16 px-4 bg-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Values Section - positioned to overlap */}
        <div className="relative z-10 -mb-24">
          <div className="bg-[#DDE8FF] w-[80%] mx-auto rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {values.map((value, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img
                        src={value.icon}
                        alt={value.title}
                        className="w-20 h-20"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[#104BC1]">{value.title}</h3>
                  <p className="text-[#081227] leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision and Mission Section - with negative margin to pull up */}
        <div className="relative pt-24 pb-8 bg-[#F8F8F8] rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 p-8 md:p-12">
            {/* Vision Statement */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src="/landing/eye.svg"
                    alt="Vision Statement"
                    className="w-20 h-20"
                  />
                </div>
                <h3 className="text-2xl font-bold text-orange-600 uppercase tracking-wide">Vision Statement</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
              &#34;To be the leading global platform for data education and consulting, nurturing the next generation of
                data professionals and helping businesses harness the full potential of their data.&#34;
              </p>
            </div>

            {/* Mission Statement */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex items-center justify-center">
                    <img
                        src="/landing/goals.svg"
                        alt="Vision Statement"
                        className="w-20 h-20"
                    />
                </div>
                <h3 className="text-2xl font-bold text-orange-600 uppercase tracking-wide">Mission Statement</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
              &#34;To provide accessible, high-quality education and consulting services in data-driven technologies. We
                foster a vibrant community of learners and experts, creating an environment where knowledge, innovation,
                and collaboration thrive&#34;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}