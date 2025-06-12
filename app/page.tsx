"use client"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/landing/resizeable-navbar";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BookCopy, ChevronDown, Handshake, Kanban, UserRound, ChevronRight } from "lucide-react";
import HeroSection from "@/components/landing/hero-section";
import ServicesSection from "@/components/landing/services-section";
import WhyChooseUs from "@/components/landing/why-choose-us";
import StatsTestimonialsCTA from "@/components/landing/stats-testimonial-cta"
import Footer from "@/components/landing/footer";

export default function Home() {
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

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <div className="gap-16 sm:p- font-[family-name:var(--font-geist-sans)]">
      {/* Navigation */}
      <Navbar className="mx-auto">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary" onClick={() => router.push("/sign-in")}>Join as Instructor</NavbarButton>
            <NavbarButton variant="primary" className="bg-[#104BC1] text-white" onClick={() => router.push("/sign-up")}>Register</NavbarButton>
          </div>
        </NavBody>
 
        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
 
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <DropdownMenu>
              <DropdownMenuTrigger className="w-full text-left px-4 py-2 text-neutral-600 dark:text-neutral-300 flex items-center justify-between">
                <span>Services</span>
                <ChevronDown className="h-4 w-4 ml-2" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="mt-2 w-[400px]">
                  <DropdownMenuItem>
                    <BookCopy />
                    Bootcamp/Cohort-Based Learning
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <UserRound />
                    One-on-one Learning sessions
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Kanban />
                    Guided Project Database
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Handshake />
                    Business Consulting Services
                  </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            {navItems.slice(1).map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 px-4 py-2 block"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Join as Instructor
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Register
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <StatsTestimonialsCTA />
      <Footer />
    </div>
  );
}