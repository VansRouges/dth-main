"use client"
import { useRouter } from "next/navigation";
import { 
    Check
} from "lucide-react"
import { Button } from "@/components/ui/button";
import Footer from "@/components/landing/footer";
import Navigation from "@/components/landing/navigation";

export default function BusinessPage() {
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
        "Corporate training in data-driven technologies.",
        "Talent outsourcing for projects or roles.",
        "Data strategy consulting and execution.",
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
                    Empower Your Business with Data-Driven Insights
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                    From team training to talent outsourcing, we offer solutions tailored to your business.
                </p>
                </div>
                <div className="bg-gray-200 rounded-lg aspect-square md:aspect-auto md:h-[400px] relative">
                    <img
                        src="/landing/business-hero.jpg"
                        alt="Business Hero Illustration"
                        className="w-full h-full object-cover rounded-xl"
                    />
                </div>
            </div>
            </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                <p className="text-blue-600 font-medium mb-2">What can we do?</p>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Business consulting Services</h2>
                <p className="text-gray-600 text-lg">How DataTechHub leads in data education.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-gray-200 rounded-lg aspect-square md:aspect-auto md:h-[350px] relative">
                    <img
                        src="/landing/business-hero-2.png"
                        alt="Business Hero Illustration"
                        className="w-full h-full object-cover rounded-xl"
                    />
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

      {/* CTA Section */}
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
