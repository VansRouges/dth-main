"use client"
import { useRouter } from "next/navigation";
import { 
    Check,
} from "lucide-react"
import { Button } from "@/components/ui/button";
import Footer from "@/components/landing/footer";
import Navigation from "@/components/landing/navigation";

export default function OneOnOnePage() {
    const router = useRouter()
    const navItems = [
      {
        name: "Services",
        link: "",
      },
      {
        name: "About Us",
        link: "/about",
      },
      {
        name: "Contact Us",
        link: "/contact",
      },
    ];


    const benefits = [
        "Highly Flxible",
        "Experienced Instructors",
        "Job Market Guidance",
        "Project Portfolio Assistance",
        "Certification upon Completion"
    ];

    const services = [
        {
          title: "Project Portfolio Assistance",
          description: "Get support in building and showcasing a portfolio that highlights your skills.",
          icon: "/landing/bc-projects.svg",
          bgColor: "bg-orange-50"
        },
        {
          title: "Interview Guidance",
          description: "Practice interview techniques and receive feedback to improve",
          icon: "/landing/bc-chat.svg",
          bgColor: "bg-orange-50"
        },
        {
          title: "Career Mentorship",
          description: "Continuous guidance from experienced mentors to support your career transition",
          icon: "/landing/bc-mentoring.svg",
          bgColor: "bg-orange-50"
        },
        {
          title: "LinkedIn & CV Guidance",
          description: "Optimize your LinkedIn profile and resume to stand out to potential employers",
          icon: "/landing/bc-cv.svg",
          bgColor: "bg-orange-50"
        }
    ];

    const steps = [
        {
          icon: "/landing/schedule.svg",
          title: "Book a Session",
          description: "Schedule your learning session",
        },
        {
          icon: "/landing/video-call.svg",
          title: "Connect with a Mentor",
          description: "Get paired with an expert",
        },
        {
          icon: "/landing/learning-app.svg",
          title: "Start Learning",
          description: "Begin your data journey",
        },
      ];

  return (
    <main className="min-h-screen relative">
        {/* Navigation */}
        <Navigation navItems={navItems} />

        {/* Hero Section */}
        <section className="py-24 pb-60 px-4 bg-[#F8F8F8] relative">
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Personalized Learning Experience
                </h1>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-square md:aspect-auto md:h-[400px] relative">
                {/* Placeholder for hero image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span className="sr-only">Bootcamp hero image</span>
                </div>
            </div>
            </div>
        </div>

        {/* Matching Process Section - positioned absolutely over the divider */}
          <div className="absolute -bottom-32 left-0 right-0">
              <div className="max-w-6xl mx-auto px-4">
                <div className="bg-transparent p-8 rounded-xl">
                  <div className="max-w-6xl mx-auto flex space-x-3 items-center justify-center">
                    <div className="bg-[#104BC1] text-white h-54 w-96 rounded-xl flex flex-col p-5 space-y-2">
                      <h2 className="font-semibold text-xl">Flexible sessions tailored to your goals:</h2>
                      <p>
                        Our one-on-one learning sessions are tailored to your unique learning style and goals. Get direct access to experienced instructors who will work closely with you to tackle challenging
                        topics, provide feedback, and guide your growth.
                      </p>
                    </div>
                    <div className="bg-[#DDE8FF] h-54 w-96 text-[#081227] rounded-xl flex flex-col p-5 space-y-2">
                      <h2 className="font-semibold text-xl">Mentor Matching Process:</h2>
                      <p>
                        We carefully match learners with mentors based on experience, learning goals, and
                        professional background to ensure an optimal learning experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>

        {/* Benefits Section - with extra padding to accommodate the overlapping section */}
        <section className="pt-54 pb-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
              <p className="text-blue-600 font-medium mb-2">How do we stand out?</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of our One-on-One</h2>
              <p className="text-gray-600 text-lg">How DataTechHub leads in data education.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-200 rounded-lg aspect-square md:aspect-auto md:h-[350px] relative">
                  {/* Placeholder for benefits image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <span className="sr-only">Benefits illustration</span>
                  </div>
              </div>

              <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                      <div className="w-5 h-5 flex justify-center items-center rounded-full bg-orange-500 mt-2 flex-shrink-0">
                          <Check className="w-3 h-3 text-white font-extrabold" />
                      </div>
                      <div>
                      <h3 className="font-semibold text-[#104BC1] text-lg">{benefit}</h3>
                      </div>
                  </div>
                  ))}
              </div>
              </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
                <div key={index} className={`${service.bgColor} rounded-2xl p-8`}>
                <div className="mb-6">
                    <div className="w-16 h-16 bg- rounded-lg flex items-center justify-center">
                    <img
                      src={service.icon}
                      alt={service.title}
                      width={70}
                      height={70}
                      className="object-contain"
                    />
                    </div>
                </div>
                <h3 className="text-xl font-bold text-[#8C4B00] mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                    {service.description}
                </p>
                </div>
            ))}
            </div>
        </div>
        </section>

        {/* how it works */}
        <section className="py-24 px-4 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                {/* Header */}
                <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How it Works</h2>
                <p className="text-gray-600 text-lg">How DataTech Hub leads in data education.</p>
                </div>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {steps.map((step, index) => {
                    // const IconComponent = step.icon
                    return (
                    <div key={index} className="flex flex-col items-start rounded-xl bg-[#F8F8F8] p-2 px-5">
                        {/* Icon Circle */}
                        <div className="w-20 h-20  flex items-center justify-center mb-6">
                            <img
                                src={step.icon}
                                alt={step.title}
                                width={70}
                                height={70}
                                className="object-contain"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>

                        {/* Optional description for accessibility */}
                        <p className="text-gray-600 text-sm sr-only">{step.description}</p>
                    </div>
                    )
                })}
                </div>
            </div>
        </section>

      {/* CTA Section */}
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

      <Footer />
    </main>
  )
}
