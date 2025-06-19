import { Check, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function SubscriptionPlans() {
  const benefits = [
    "Benefit 1",
    "Benefit 2",
    "Benefit 3",
    "Benefit 4",
    "Benefit 5",
    "Benefit 6",
    "Benefit 7",
    "Benefit 8",
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Subscription and Plans</h2>
          <p className="text-gray-600 text-lg">Subscribe to access the full library.*</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Individual Plan */}
          <Card className="bg-[#104BC1] text-white border-0 rounded-3xl overflow-hidden">
            <CardHeader className="pb-4">
              <h3 className="text-2xl font-bold mb-3">Individual</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                Create an account for your Organization and start Lorem Ipsum Lorem Ipsum.
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Pricing */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">$1000.00</span>
                  <span className="text-blue-200">/month</span>
                </div>
                <p className="text-blue-200 text-sm">$1000 paid annually</p>
              </div>

              {/* Subscribe Button */}
              <Button
                className="w-full bg-white text-blue-600 hover:bg-gray-50 font-semibold py-3 rounded-xl"
                size="lg"
              >
                Subscribe Now!
              </Button>

              {/* Benefits List */}
              <div className="space-y-3 pt-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-[#377CFD] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#377CFD]" />
                    </div>
                    <span className="text-blue-100 text-sm flex items-center gap-2">
                      {benefit}
                      <Info className="w-3 h-3 text-blue-300" />
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Organization Plan */}
          <Card className="bg-white border border-gray-200 rounded-3xl overflow-hidden">
            <CardHeader className="pb-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Organization</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Create an account for your Organization and start Lorem Ipsum Lorem Ipsum.
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Pricing */}
              <div className="space-y-1">
                <div className="text-4xl font-bold text-[#104BC1] mb-1">Let&#39;s talk</div>
                <p className="text-gray-600 text-sm">Price is based on Number of seats</p>
              </div>

              {/* Subscribe Button */}
              <Button
                className="w-full bg-[#104BC1] hover:bg-blue-700 text-white font-semibold py-3 rounded-xl"
                size="lg"
              >
                Subscribe Now!
              </Button>

              {/* Benefits List */}
              <div className="space-y-3 pt-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-gray-700 text-sm flex items-center gap-2">
                      {benefit}
                      <Info className="w-3 h-3 text-gray-400" />
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
