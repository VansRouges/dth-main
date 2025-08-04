"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
  NavbarDarkLogo,
} from "@/components/landing/resizeable-navbar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  BookCopy,
  UserRound,
  Kanban,
  Handshake,
} from "lucide-react";
import Link from "next/link";

interface NavigationProps {
  navItems: {
    name: string;
    link: string;
  }[];
}

export default function Navigation({ navItems }: NavigationProps) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar className="mx-auto">
        {/* Desktop Navigation */}
        <NavBody>
          {scrolled ? (
            <div className="w-auto flex-shrink-0">
              <NavbarDarkLogo />
            </div>
          ) : (
            <div className="w-auto flex-shrink-0">
              <NavbarLogo href="/" />
            </div>
          )}
          <NavItems items={navItems} />
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <NavbarButton
              variant="primary"
              onClick={() => router.push("/sign-in")}
              className="text-xs sm:text-sm px-3 sm:px-4 py-2"
            >
              Sign In
            </NavbarButton>
            <NavbarButton
              variant="primary"
              className="bg-[#104BC1] text-white text-xs sm:text-sm px-3 sm:px-4 py-2"
              onClick={() => router.push("/sign-up")}
            >
              Register
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
      </Navbar>
      <MobileNav visible={scrolled}>
        <MobileNavHeader>
          {scrolled ? (
            <div className="w-55 lg:w-auto sm:w-65">
              <NavbarDarkLogo />
            </div>
          ) : (
            <div className="w-55 lg:w-auto sm:w-65">
              <NavbarLogo href="/" />
            </div>
          )}
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
            <DropdownMenuContent className="mt-2 sm:w-[400px] w-full px-4 sm:px-0">
              <DropdownMenuItem>
                <Link href={"/bootcamps"}>
                  <div className="flex gap-2 items-center">
                    <BookCopy />
                    Bootcamp/Cohort-Based Learning
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/one-on-one"}>
                  <div className="flex gap-2 items-center">
                    <UserRound />
                    One-on-one Learning sessions
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/projects"}>
                  <div className="flex gap-2 items-center">
                    <Kanban />
                    Guided Project Database
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={"/business"}>
                  <div className="flex gap-2 items-center">
                    <Handshake />
                    Business Consulting Services
                  </div>
                </Link>
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
              href={"/sign-in"}
            >
              Sign In
            </NavbarButton>
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
              href={"/sign-up"}
            >
              Register
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </>
  );
}
