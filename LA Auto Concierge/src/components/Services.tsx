import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  ShoppingCart, 
  GraduationCap, 
  Search, 
  DollarSign, 
  FileText, 
  Zap,
  MapPin,
  Trophy
} from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">Our Premium Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From finding your dream car to mastering its capabilities, we provide 
            comprehensive automotive expertise tailored to luxury vehicle enthusiasts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Buying Concierge Service */}
          <Card className="overflow-hidden">
            <div className="relative h-64">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1705747401901-28363172fe7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBzaG93cm9vbXxlbnwxfHx8fDE3NTY5NzMzNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Luxury car showroom"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-background/90">
                  <ShoppingCart className="w-4 h-4 mr-1" />
                  Buying Concierge
                </Badge>
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="text-2xl">Automotive Buying Concierge</CardTitle>
              <CardDescription className="text-lg">
                Expert guidance through every step of your luxury car acquisition journey
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start space-x-3">
                  <Search className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1">Vehicle Sourcing & Selection</h4>
                    <p className="text-sm text-muted-foreground">
                      Find the perfect vehicle based on your preferences, budget, and lifestyle needs
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1">Negotiation & Deal Structuring</h4>
                    <p className="text-sm text-muted-foreground">
                      Secure the best possible price and terms through expert negotiation
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1">Purchase Process Management</h4>
                    <p className="text-sm text-muted-foreground">
                      Handle all paperwork, inspections, and logistics for a seamless experience
                    </p>
                  </div>
                </div>
              </div>
              
              <Button className="w-full">Learn More About Concierge</Button>
            </CardContent>
          </Card>

          {/* Driver Training Service */}
          <Card className="overflow-hidden">
            <div className="relative h-64">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1649095380673-b0e737c45635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjB0cmFjayUyMGRyaXZpbmd8ZW58MXx8fHwxNzU3MDI5MjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Racing track driving"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="secondary" className="bg-background/90">
                  <GraduationCap className="w-4 h-4 mr-1" />
                  Driver Training
                </Badge>
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="text-2xl">Professional Driver Training</CardTitle>
              <CardDescription className="text-lg">
                Master your vehicle's capabilities with personalized, one-on-one instruction
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1">Urban Driving Skills</h4>
                    <p className="text-sm text-muted-foreground">
                      Navigate city traffic, parking, and daily driving scenarios with confidence
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1">High Performance Training</h4>
                    <p className="text-sm text-muted-foreground">
                      Unlock your sports car's potential on the track with professional techniques
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Trophy className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1">Personalized Instruction</h4>
                    <p className="text-sm text-muted-foreground">
                      Tailored lessons based on your experience level and specific goals
                    </p>
                  </div>
                </div>
              </div>
              
              <Button className="w-full">Learn More About Training</Button>
            </CardContent>
          </Card>
        </div>

        {/* Process Overview */}
        <div className="text-center">
          <h3 className="text-2xl mb-8">How We Work</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl">
                1
              </div>
              <h4 className="text-lg">Initial Consultation</h4>
              <p className="text-muted-foreground">
                We discuss your needs, preferences, and goals to create a personalized strategy
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl">
                2
              </div>
              <h4 className="text-lg">Tailored Solutions</h4>
              <p className="text-muted-foreground">
                Our experts execute the plan with precision and attention to detail
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto text-xl">
                3
              </div>
              <h4 className="text-lg">Ongoing Support</h4>
              <p className="text-muted-foreground">
                We provide continued assistance to ensure your complete satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}