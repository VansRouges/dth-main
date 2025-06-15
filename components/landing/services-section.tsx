import Link from "next/link";

type Service = {
  id: number;
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  textColor: string;
  linkColor: string;
  linkText: string;
};

type ServiceCardProps = {
  service: Service;
};

const services: Service[] = [
  {
    id: 1,
    title: "Bootcamp/Cohort-Based Learning",
    description: "Intensive immersive programs designed to build job-ready skills in data technologies.",
    icon: "/landing/books.svg",
    bgColor: "bg-[#104BC133]",
    textColor: "text-[#09296A]",
    linkColor: "text-blue-700 hover:text-blue-800",
    linkText: "Explore bootcamp"
  },
  {
    id: 2,
    title: "One-on-One Learning Sessions",
    description: "Tailored mentorship to meet your unique learning needs.",
    icon: "/landing/users.svg",
    bgColor: "bg-[#FF880033]",
    textColor: "text-[#8C4B00]",
    linkColor: "text-orange-700 hover:text-orange-800",
    linkText: "See Full Details"
  },
  {
    id: 3,
    title: "Guided Project Database",
    description: "Access real-world projects to practice your skills and build a portfolio.",
    icon: "/landing/projects.svg",
    bgColor: "bg-[#F7C2C6]",
    textColor: "text-[#7F1F27]",
    linkColor: "text-[#7F1F27] hover:text-pink-800",
    linkText: "See Full Details"
  },
  {
    id: 4,
    title: "Business Consulting Services",
    description: "Tailored solutions to empower your business with data-driven strategies.",
    icon: "/landing/handshake.svg",
    bgColor: "bg-[#EAF6EC]",
    textColor: "text-[#165C26]",
    linkColor: "text-[#165C26] hover:text-green-800",
    linkText: "See Full Details"
  }
];

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className={`${service.bgColor} rounded-2xl p-4 h-full`}>
      <div className="mb-6">
        <img
          src={service.icon}
          alt={service.title}
          width={70}
          height={70}
          className="object-contain"
        />
      </div>
      <h3 className={`text-xl font-bold ${service.textColor} mb-4`}>{service.title}</h3>
      <p className={`text-gray-700 leading-relaxed ${service.id === 2 ? 'mb-12' : 'mb-6'}`}>
        {service.description}
      </p>
      <Link href="#" className={`font-medium transition-colors ${service.linkColor}`}>
        {service.linkText}
      </Link>
    </div>
  );
};

export default function OurServices() {
  return (
    <section className="py-16 px-72 w-full mx-auto bg-[#F8F8F8]">
      <div className="text-center mb-12">
        <p className="text-blue-600 font-medium mb-2">Our Services</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Start your data journey and gain practical experience that gets you hired.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 px-24">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}