import { Button } from "./ui/button";
import { Car, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'consultation', label: 'Vehicle Consultation' },
    { id: 'purchasing', label: 'Purchasing Assistance' },
    { id: 'customization', label: 'Customization' },
    { id: 'training', label: 'Driver Training' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
      <div className="container mx-auto px-4 flex h-20 items-center justify-between">
        <div 
          className="flex items-center space-x-3 cursor-pointer" 
          onClick={() => onPageChange('home')}
        >
          <Car className="h-8 w-8 text-primary" />
          <div>
            <div className="tracking-wide">LA AUTO CONCIERGE</div>
            <div className="text-xs text-muted-foreground tracking-wider">LUXURY AUTOMOTIVE SERVICES</div>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.slice(1, -2).map((item) => (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`hover:text-primary transition-colors ${
                currentPage === item.id ? 'text-primary' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => onPageChange('about')}
            className={`hover:text-primary transition-colors ${
              currentPage === 'about' ? 'text-primary' : ''
            }`}
          >
            About
          </button>
        </nav>

        <div className="flex items-center space-x-4">
          <Button onClick={() => onPageChange('contact')}>
            Get Started
          </Button>
          
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onPageChange(item.id)}
                    className={`text-left hover:text-primary transition-colors ${
                      currentPage === item.id ? 'text-primary' : ''
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}