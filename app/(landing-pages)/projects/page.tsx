"use client"
import { Button } from "@/components/ui/button";
import Footer from "@/components/landing/footer";
import Navigation from "@/components/landing/navigation";
import { useRouter } from "next/navigation";
import SubscriptionPlans from "@/components/landing/subscription-plans";
import Image from "next/image";

export default function ProjectsPage() {
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


    const steps = [
        {
          icon: "/landing/steps-number.svg",
          title: "Step-by-step project guides.",
          description: "Schedule your learning session",
        },
        {
          icon: "/landing/domain.svg",
          title: "Categorized projects by difficulty and domain.",
          description: "Get paired with an expert",
        },
        {
          icon: "/landing/certificate.svg",
          title: "Certifications for completed projects.",
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
                  Practice with Real-World Projects
                </h1>
            </div>
            <div className="aspect-square md:aspect-auto md:h-[400px] relative">
                {/* Placeholder for hero image */}
                <Image
                  src="/landing/hero-7.png"
                  alt="Person reacting"
                  width={500}
                  height={600}
                  className="w-full h-full object-contain"
                  priority
                />
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span className="sr-only">Bootcamp hero image</span>
                </div>
            </div>
            </div>
        </div>

        {/* Matching Process Section - positioned absolutely over the divider */}
          <div className="absolute -bottom-20 left-0 right-0">
              <div className="max-w-6xl mx-auto px-4">
                <div className="bg-transparent p-8 rounded-xl">
                  <div className="max-w-6xl mx-auto flex space-x-3 items-center justify-center">
                    <div className="bg-[#104BC1] text-white h-fit w-96 rounded-xl flex flex-col p-5 space-y-2">
                      <h2 className="font-semibold text-xl">Gain hands-on experience with curated projects and case studies.</h2>
                    </div>
                    <div className="bg-[#DDE8FF] h-fit w-96 text-[#081227] rounded-xl flex flex-col p-5 space-y-2">
                      <h2 className="font-semibold text-xl">Build a portfolio that demonstrates your skills.</h2>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
              {/* Header */}
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Features</h2>
                <p className="text-gray-600 text-lg">How DataTech Hub leads in data education.</p>
              </div>

              {/* Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {steps.map((step, index) => {
                  return (
                  <div key={index} className="flex flex-col items-start rounded-xl bg-[#F8F8F8] p-2 px-5">
                      {/* Icon Circle */}
                      <div className="w-20 h-20 flex items-center justify-center mb-6">
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

        {/* Subscription Plans */}
        <SubscriptionPlans />

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
