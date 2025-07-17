import Image from "next/image";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { NavbarDarkLogo } from "@/components/landing/resizeable-navbar";

export default function SignUpPage() {
  return (
    <div className="bg-white min-h-screen md:h-screen md:overflow-hidden">
      <div className="container mx-auto px-4 py-8 h-full flex flex-col">
        <div className="flex justify-between items-center mb-8">
          <div className="[&>a]:w-[200px]">
            <NavbarDarkLogo />
          </div>
          <Link href="/">
            <Button
              variant="outline"
              className="bg-blue-100 hover:bg-blue-200 text-blue-800"
            >
              BACK
            </Button>
          </Link>
        </div>

        <div className="flex-grow grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-md w-full mx-auto">
            <SignIn />
          </div>

          <div className="hidden md:block max-h-[80vh] overflow-hidden">
            <Image
              src="/auth.png"
              alt="Person working on computer"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
