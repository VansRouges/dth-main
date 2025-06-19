import HeroSection from "@/components/landing/hero-section";
import ServicesSection from "@/components/landing/services-section";
import WhyChooseUs from "@/components/landing/why-choose-us";
import StatsTestimonialsCTA from "@/components/landing/stats-testimonial-cta"
import Footer from "@/components/landing/footer";
import Navigation from "@/components/landing/navigation";

export default function Home() {
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
  
  return (
    <div className="gap-16 sm:p- font-[family-name:var(--font-geist-sans)]">
      {/* Navigation */}
      <Navigation navItems={navItems} />

      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <StatsTestimonialsCTA />
      <Footer />
    </div>
  );
}