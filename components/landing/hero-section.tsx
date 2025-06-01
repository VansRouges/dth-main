import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto">
      {/* Left content */}
      <div className="max-w-xl space-y-6">
        <p className="text-orange-500 text-sm font-semibold tracking-wider">
          We are The Best
          <span className="inline-block w-12 border-b border-orange-400 ml-4 align-middle"></span>
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-wider leading-snug">
          Empower Your Future <br /> With DataTechHub
        </h1>
        <p className="text-gray-600 text-base leading-relaxed">
          Transform your career or business with our expert-led bootcamps,
          personalized mentorship, and real-world project experience designed
          for maximum impact in the data landscape.
        </p>

        <div className="flex gap-4">
          <button className="bg-[#104BC1] text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Join DataTechHub today!
          </button>
          <button className="bg-[#E7EDF9] text-gray-800 px-6 py-3 rounded-md hover:bg-[#E9EDF9] transition">
            Explore our Courses
          </button>
        </div>

        {/* <div className="mt-6 flex items-center gap-3 bg-white shadow-md rounded-lg px-4 py-2">
          <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            📊
          </div>
          <p className="text-sm font-semibold">200+ Tutors Online</p>
          <div className="flex -space-x-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="w-8 h-8 rounded-full border-2 border-white bg-gray-300"
              />
            ))}
            <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-400 flex items-center justify-center text-xs font-semibold text-white">
              +3
            </div>
          </div>
        </div> */}
      </div>

      {/* Right content */}
        <div className="relative mt-12 lg:mt-0">
        {/* Big Image Container - Smoothed organic shape */}
        <div 
            className="w-[470px] h-[550px] bg-gradient-to-tr from-orange-300 to-orange-500 flex items-center justify-center overflow-hidden"
            style={{
            borderRadius: '60% 40% 50% 50% / 50% 40% 40% 50%',
            transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
        >
            <Image
            src="/landing/andrea.png"
            alt="Person reacting"
            width={500}
            height={600}
            className="w-full h-full object-contain"
            priority
            style={{
                transform: 'perspective(1000px) rotateY(5deg) rotateX(-5deg) scale(1.05)'
            }}
            />
        </div>

        {/* Floating circles */}
        <div
            className="absolute w-14 h-14 rounded-full bg-gray-300 border-2 border-white shadow-md"
            style={{ top: "10%", left: "-10%" }}
        />
        <div
            className="absolute w-14 h-14 rounded-full bg-gray-300 border-2 border-white shadow-md"
            style={{ top: "30%", right: "-12%" }}
        />
        <div
            className="absolute w-14 h-14 rounded-full bg-gray-300 border-2 border-white shadow-md"
            style={{ bottom: "10%", left: "5%" }}
        />
        <div
            className="absolute w-14 h-14 rounded-full bg-gray-300 border-2 border-white shadow-md"
            style={{ bottom: "5%", right: "0" }}
        />
        </div>
    </section>
  );
}