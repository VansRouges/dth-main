import Footer from "@/components/landing/footer";
import Navigation from "@/components/landing/navigation";
import ContactSection from "@/components/landing/contact-section";
import AnimatedFooter from "@/components/landing/Animated-footer";

export default function Contact() {
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
      <ContactSection />
      <AnimatedFooter />
    </div>
  );
}