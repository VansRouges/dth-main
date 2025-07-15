"use client"
import { useRouter } from "next/navigation";
import { 
    Check
} from "lucide-react"
import { Button } from "@/components/ui/button";
import Footer from "@/components/landing/footer";
import Navigation from "@/components/landing/navigation";
import Image from "next/image";

export default function BootcampsPage() {
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
        "Intensive and immersive curriculum.",
        "Structured Learning Paths",
        "Peer collaboration and networking.",
        "Real-world project experience.",
        "Certification upon completion."
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

  return (
    <main className="min-h-screen">
        {/* Navigation */}
        <Navigation navItems={navItems} />

        {/* Hero Section */}
        <section className="py-24 px-4 bg-[#F8F8F8]">
            <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    Accelerate Your Career with Our Bootcamps
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Our immersive bootcamps are designed to accelerate your tech career by offering structured, hands-on
                    learning experiences led by industry professionals. Ideal for those looking to make a rapid transition
                    or build foundational skills quickly.
                </p>
                </div>
                <div className="aspect-square md:aspect-auto md:h-[400px] relative">
                {/* Placeholder for hero image */}
                  <Image
                    src="/landing/hero-3.png"
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
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                <p className="text-blue-600 font-medium mb-2">How do we stand out?</p>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Benefits of our Bootcamps</h2>
                <p className="text-gray-600 text-lg">How DataTechHub leads in data education.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="aspect-square md:aspect-auto md:h-[350px] relative">
                  <Image
                    src="/landing/hero-4.png"
                    alt="Person reacting"
                    width={500}
                    height={600}
                    className="w-full h-full object-contain"
                    priority
                  />
                  <span className="sr-only">Benefits illustration</span>
                </div>

                <div className="space-y-6">
                    {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <div className="w-5 h-5 flex justify-center items-center rounded-full bg-orange-500 mt-2 flex-shrink-0">
                            <Check className="w-3 h-3 text-white font-extrabold" />
                        </div>
                        <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{benefit}</h3>
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

      {/* CTA Section */}

      {/* Base layer - dark background */}
      <section className="relative py-32 px-4 bg-slate-900 flex justify-center items-center">
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
