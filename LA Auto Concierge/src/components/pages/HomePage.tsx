import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ArrowRight, CheckCircle } from "lucide-react";

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl tracking-tight leading-tight">
                  Your Luxury
                  <span className="block text-primary">Automotive</span>
                  <span className="block">Concierge</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                  Expert guidance from selection to mastery. We help discerning clients 
                  navigate the luxury automotive world with confidence and precision.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 group"
                  onClick={() => onPageChange('consultation')}
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={() => onPageChange('contact')}
                >
                  Schedule Consultation
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-12">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl mb-2">500+</div>
                  <div className="text-sm text-muted-foreground tracking-wide">VEHICLES SOURCED</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl mb-2">$5M+</div>
                  <div className="text-sm text-muted-foreground tracking-wide">CLIENT SAVINGS</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl mb-2">100%</div>
                  <div className="text-sm text-muted-foreground tracking-wide">SATISFACTION</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1665491641262-53155eaac2b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcG9ydHMlMjBjYXIlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTcwMjkxOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Luxury automotive interior"
                  className="w-full h-[500px] lg:h-[600px] object-cover rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-accent/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6">Our Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Four specialized services designed to elevate your luxury automotive experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div 
              className="group cursor-pointer bg-card border rounded-lg p-8 hover:shadow-lg transition-all duration-300"
              onClick={() => onPageChange('consultation')}
            >
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <div className="text-2xl">🎯</div>
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Vehicle Consultation</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Expert guidance to identify the perfect luxury vehicle that matches your lifestyle, 
                    preferences, and driving needs.
                  </p>
                  <Button variant="ghost" className="p-0 h-auto group">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div 
              className="group cursor-pointer bg-card border rounded-lg p-8 hover:shadow-lg transition-all duration-300"
              onClick={() => onPageChange('purchasing')}
            >
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <div className="text-2xl">🤝</div>
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Purchasing Assistance</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Navigate negotiations, paperwork, and logistics with professional support 
                    to secure the best possible deal.
                  </p>
                  <Button variant="ghost" className="p-0 h-auto group">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div 
              className="group cursor-pointer bg-card border rounded-lg p-8 hover:shadow-lg transition-all duration-300"
              onClick={() => onPageChange('customization')}
            >
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <div className="text-2xl">🎨</div>
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Customization</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Transform your vehicle with expert guidance on appearance, protection, 
                    and performance modifications to make it uniquely yours.
                  </p>
                  <Button variant="ghost" className="p-0 h-auto group">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div 
              className="group cursor-pointer bg-card border rounded-lg p-8 hover:shadow-lg transition-all duration-300"
              onClick={() => onPageChange('training')}
            >
              <div className="space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <div className="text-2xl">🏁</div>
                </div>
                <div>
                  <h3 className="text-2xl mb-3">Driver Training</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    One-on-one instruction to master urban driving or unlock your vehicle's 
                    high-performance potential on the track.
                  </p>
                  <Button variant="ghost" className="p-0 h-auto group">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Expertise */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1571001437100-9d282569809b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBjb25zdWx0YXRpb24lMjBtZWV0aW5nfGVufDF8fHx8MTc1NzAzMDkyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional consultation"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl mb-6">Why Choose LA Auto Concierge</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We bring decades of automotive expertise and industry connections 
                  to serve discerning clients across Los Angeles.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  'Exclusive access to dealer networks and private collections',
                  'Professional racing background and certified instruction',
                  'Transparent pricing with no hidden commissions',
                  'Comprehensive support from selection to ownership',
                  'Personalized service tailored to your unique needs'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                size="lg" 
                className="text-lg px-8 py-6"
                onClick={() => onPageChange('about')}
              >
                Learn About Our Founder
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}