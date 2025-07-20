import { Button } from "@/components/ui/button";
import { NavbarDarkLogo } from "@/components/landing/resizeable-navbar";

export function OnboardingHeader() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="[&>a]:w-[200px]">
        <NavbarDarkLogo />
      </div>
      <Button
        variant="outline"
        className="bg-blue-100 hover:bg-blue-200 text-blue-800"
        onClick={() => window.location.href = "/sign-in"}
      >
        BACK
      </Button>
    </div>
  );
}