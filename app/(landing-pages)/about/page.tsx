import Footer from "@/components/landing/footer";
import Navigation from "@/components/landing/navigation";
import FoundingMotivation from "@/components/landing/founding-motivation";
import CompanyValues from "@/components/landing/company-values";

export default function About() {
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

      <FoundingMotivation />
      <CompanyValues />
      <Footer />
    </div>
  );
}