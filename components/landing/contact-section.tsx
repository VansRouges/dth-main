import { Mail, MessageCircle, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <span className="text-orange-500 font-medium text-sm uppercase tracking-wide">Contact us</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">Get in Touch</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
              &#34;Have questions or need support? We&#39;re here to help. Fill out the form below, and we&#39;ll get back to you
                as soon as possible.&#34;
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-gray-700 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-700">info@datatechhub.io</p>
                </div>
              </div>

              {/* Live Support Hours */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-gray-700 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Live Support Hours</h3>
                  <p className="text-gray-700">Monday – Friday, 10AM – 5PM (WAT)</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gray-700 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Location / Virtual HQ</h3>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-gray-700 mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-700">+44 74 0720 9293</p>
                  
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <img
                    src="/landing/twitter.svg"
                    alt="Twitter"
                    className="w-10 h-10"
                />
              </a>
              <a
                href="https://www.instagram.com/datatechhub.io?igsh=MW9laDhmd3EwdGRuZQ%3D%3D&utm_source=qr"
                className="w-10 h-10 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <img
                    src="/landing/instagram.svg"
                    alt="Instagram"
                    className="w-10 h-10"
                />
              </a>
              <a
                href="https://www.facebook.com/share/1AhLUQTbbP/?mibextid=wwXIfr"
                className="w-10 h-10 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <img
                    src="/landing/facebook.svg"
                    alt="facebook"
                    className="w-10 h-10"
                />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
        <div className="bg-[#F1F1F1] rounded-2xl p-8">
            <form className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    First name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="First name"
                    className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Last name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Last name"
                    className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-medium text-gray-700">
                  Subject
                </Label>
                <Input
                  id="subject"
                  placeholder="you@company.com"
                  className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={6}
                  className="bg-white border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl"
                size="lg"
              >
                Submit message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
