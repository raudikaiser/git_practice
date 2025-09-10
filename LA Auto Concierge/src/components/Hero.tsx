import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-background to-muted overflow-hidden">
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl tracking-tight">
                Your Luxury Car
                <span className="block text-primary">Journey Starts Here</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Expert automotive concierge services for discerning buyers and professional driver training 
                to unlock your vehicle's full potential.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Explore Services
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Schedule Consultation
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Cars Sourced</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">$2M+</div>
                <div className="text-sm text-muted-foreground">Saved for Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1665491641262-53155eaac2b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTcwMjkxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Luxury car interior"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}