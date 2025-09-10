import { Button } from "./ui/button";
import { Car } from "lucide-react";

export function Header() {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Car className="h-6 w-6" />
          <span className="font-medium">AutoConcierge Elite</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="hover:text-primary transition-colors">
            Services
          </a>
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <Button>Get Started</Button>
      </div>
    </header>
  );
}