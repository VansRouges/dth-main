"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { toast } from "sonner" // or your preferred toast library

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Subscribed email:", email)
    toast.success("Subscribed successfully")
    setEmail("") // Clear the input after submission
  }

  return (
    <footer className="bg-white py-28 px-4 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Newsletter Section */}
          <div className="p-2 px-3">
            <p className="text-blue-600 font-medium mb-4">{"Don't miss important dates, news, and resources."}</p>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Subscribe for our newsletters</h3>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <Input 
                type="email" 
                placeholder="E-mail" 
                className="flex-1" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 px-6">
                Subscribe now
              </Button>
            </form>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-blue-600 font-medium mb-4">Contact us</h4>
            <div className="flex flex-col space-y-2 text-gray-700 justify-center items-center">
              <p>+447407209293</p>
              <p>+2349163946478</p>
              <div className="flex flex-col space-y-2 justify-center items-center">
                <Link href="mailto:info@datatechhub.io" className="hover:text-blue-600">
                  info@datatechhub.io
                </Link>
                <Link href="mailto:datatechhub.io@gmail.com" className="hover:text-blue-600">
                  datatechhub.io@gmail.com
                </Link>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4 mt-6">
              {/* LinkedIn */}
              <Link href="https://www.linkedin.com/company/datatechhubhq/" className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              
              {/* Instagram */}
              <Link href="https://www.instagram.com/datatechhub.io?igsh=MW9laDhmd3EwdGRuZQ%3D%3D&utm_source=qr" className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </Link>
              
              {/* Facebook */}
              <Link href="https://www.facebook.com/share/1AhLUQTbbP/?mibextid=wwXIfr" className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Logo and Links Section */}
          <div className="text-right">
            <Image
              src="/landing/footer-logo.png"
              alt="DataTechHub Logo"
              width={500}
              height={600}
              className="w-full h-full object-contain mb-6"
              priority
            />

            <div className="flex justify-end gap-4 text-sm text-gray-600">
              <Link href="#" className="hover:text-gray-900">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-gray-900">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}