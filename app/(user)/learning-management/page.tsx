import { type NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

interface ManagementCard {
  title: string;
  href: string;
  icon: string;
  bgColor: string;
  textColor: string;
  iconBgColor: string;
}

const LearningManagement: NextPage = async () => {
  const managementCards: ManagementCard[] = [
    {
      title: "Assessments",
      href: "/learning-management",
      icon: "/management/task.svg",
      bgColor: "bg-[#B5C7EC]",
      textColor: "text-[#081227]",
      iconBgColor: "bg-[#104BC133]"
    },
    {
      title: "Resources",
      href: "/learning-management",
      icon: "/management/note.svg",
      bgColor: "bg-[#FFF3B0]",
      textColor: "text-[#6B3900]",
      iconBgColor: "bg-[#FF880033]"
    },
    {
      title: "Certifications",
      href: "/learning-management",
      icon: "/management/award.svg",
      bgColor: "bg-[#9CD7A9]",
      textColor: "text-[#11461D]",
      iconBgColor: "bg-[#4CAF5033]"
    },
    {
      title: "Progress",
      href: "/learning-management",
      icon: "/management/project.svg",
      bgColor: "bg-[#FCD2C2]",
      textColor: "text-[#711E00]",
      iconBgColor: "bg-[#EB501733]"
    }
  ];
  

  return (
    <>
      {/* Banner */}
      <div className="relative overflow-hidden rounded-xl md:rounded-tr-[70px] rounded-tr-[50px] md:rounded-bl-[70px] rounded-bl-[50px] w-full mr-14 lg:w-[75%] h-40">
        <Image
          src="/management/management.svg"
          alt="Learning Management Dashboard"
          width={1200}
          height={200}
          className="object-cover w-full h-full"
          priority
        />

        <div className="absolute inset-0 text-[#081227] p-6 flex flex-col justify-center">
          <h1 className="text-3xl font-bold">Learning Management</h1>
          <p className="mt-2 text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              month: '2-digit', 
              day: '2-digit', 
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </p>
        </div>
      </div>

      {/* Management Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 w-full max-w-8xl">
        {managementCards.map((card) => (
          <Link 
            key={card.href}
            href={card.href}
            className={`${card.bgColor} ${card.textColor} h-48 rounded-xl flex flex-col justify-center items-start p-6 transition-all hover:scale-[1.02] hover:shadow-md`}
            aria-label={`Go to ${card.title}`}
          >
            <div className={`${card.iconBgColor} h-20 w-20 flex justify-center items-center rounded-full mb-4`}>
              <Image
                src={card.icon}
                alt={card.title}
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <h2 className="text-xl font-semibold">{card.title}</h2>
          </Link>
        ))}
      </div>
    </>
  );
};

export default LearningManagement;