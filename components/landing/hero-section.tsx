import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto">
      {/* Left content */}
      <div className="max-w-xl space-y-6">
        <h1 className="text-6xl sm:text-7xl font-extrabold text-gray-900 tracking-wider leading-snug">
          Empowering <br /> Through Data
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          Unlock your potential with expert mentorship, real-world projects, and industry-leading courses.
        </p>

        <div className="flex gap-4">
          <button className="bg-[#104BC1] text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Explore Bootcamps
          </button>
          <button  className="bg-[#E7EDF9] text-gray-800 px-6 py-3 rounded-md hover:bg-[#E9EDF9] transition">
            Join one-on-one
          </button>
        </div>
      </div>

      {/* Right content */}
        <div className="relative mt-12 lg:mt-0">
        {/* Big Image Container - Smoothed organic shape */}
          <div 
            className="w-[470px] h-[550px] flex items-center justify-center overflow-hidden"  
          >
              <Image
                src="/landing/placeholder.png"
                alt="Person reacting"
                width={500}
                height={600}
                className="w-full h-full object-contain"
                priority
              />
          </div>
        </div>
    </section>
  );
}