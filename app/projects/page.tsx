import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Globe, Award } from "lucide-react"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">Practice with Real-World Projects</h1>
            </div>
            <div className="bg-gray-200 rounded-lg aspect-square md:aspect-auto md:h-[300px] relative">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span className="sr-only">Projects hero image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-blue-600 text-white border-0">
              <CardContent className="p-6">
                <p className="text-lg">Gain hands-on experience with curated projects and case studies.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-100 border-0">
              <CardContent className="p-6">
                <p className="text-lg text-gray-700">Build a portfolio that demonstrates your skills.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Features</h2>
            <p className="text-gray-600 text-lg">How DataTechHub leads in data education.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step-by-step guides */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">123</span>
                </div>
              </div>
              <p className="text-gray-700 font-medium">Step-by-step project guides.</p>
            </div>

            {/* Categorized projects */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <p className="text-gray-700 font-medium">Categorized projects by difficulty and domain.</p>
            </div>

            {/* Certifications */}
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
              </div>
              <p className="text-gray-700 font-medium">Certifications for completed projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription and Plans Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Subscription and Plans</h2>
            <p className="text-gray-600 text-lg">Subscribe to access the full library</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Individual Plan */}
            <Card className="bg-blue-600 text-white border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">Individual</h3>
                  <p className="text-blue-100 mb-6">
                    Perfect for individuals and freelancers looking to enhance their skills
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$1000.00</span>
                    <span className="text-blue-200 ml-2">/month</span>
                  </div>
                  <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3">
                    Subscribe Now
                  </Button>
                </div>

                <div className="space-y-3">
                  <p className="font-semibold mb-4">Subscription Benefit</p>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <div key={num} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-white" />
                      <span className="text-sm">Benefit {num}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Organization Plan */}
            <Card className="border-2 border-gray-200 overflow-hidden">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Organization</h3>
                  <p className="text-gray-600 mb-6">
                    Designed for teams and organizations seeking comprehensive training solutions
                  </p>
                  <div className="mb-6">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3">
                      {"Let's talk"}
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="font-semibold mb-4 text-gray-900">Subscription Benefit</p>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                    <div key={num} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      </div>
                      <span className="text-sm text-gray-700">Benefit {num}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
