import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";
import { CheckCircle, Clock, Users, Target, ArrowRight } from "lucide-react";

interface ConsultationPageProps {
  onPageChange: (page: string) => void;
}

export function ConsultationPage({ onPageChange }: ConsultationPageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/20 to-background py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
                  VEHICLE CONSULTATION
                </Badge>
                <h1 className="text-5xl lg:text-6xl tracking-tight leading-tight mb-6">
                  Find Your
                  <span className="block text-primary">Perfect Vehicle</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  Expert guidance to identify the luxury vehicle that perfectly matches 
                  your lifestyle, preferences, and driving aspirations.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6" onClick={() => onPageChange('contact')}>
                  Schedule Consultation
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={() => onPageChange('purchasing')}>
                  Next: Purchasing Assistance
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1571001437100-9d282569809b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBjb25zdWx0YXRpb24lMjBtZWV0aW5nfGVufDF8fHx8MTc1NzAzMDkyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional automotive consultation"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6">Our Consultation Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A systematic approach to understanding your needs and identifying the perfect vehicle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Discovery",
                description: "In-depth discussion about your driving habits, preferences, and budget parameters"
              },
              {
                step: "02", 
                title: "Lifestyle Analysis",
                description: "Evaluate how the vehicle fits into your daily life, travel needs, and long-term goals"
              },
              {
                step: "03",
                title: "Market Research", 
                description: "Comprehensive analysis of available options, including rare and exclusive models"
              },
              {
                step: "04",
                title: "Recommendations",
                description: "Curated selection of vehicles with detailed pros, cons, and ownership insights"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary">{item.step}</span>
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Analyze */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl mb-6">What We Analyze</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Every consultation covers these essential factors to ensure we find your ideal match
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: "Driving Profile",
                    description: "Daily commute, weekend adventures, track days, or long-distance touring"
                  },
                  {
                    icon: Users,
                    title: "Lifestyle Requirements", 
                    description: "Passenger needs, cargo space, weather conditions, and parking constraints"
                  },
                  {
                    icon: Clock,
                    title: "Ownership Timeline",
                    description: "How long you plan to keep the vehicle and future needs evolution"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl mb-2">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="text-2xl">Consultation Details</CardTitle>
                <CardDescription className="text-lg">What to expect from your session</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {[
                    "90-minute comprehensive consultation",
                    "Detailed questionnaire and lifestyle assessment", 
                    "Market analysis and availability review",
                    "3-5 vehicle recommendations with rationale",
                    "Pricing estimates and ownership cost analysis",
                    "Follow-up support for 30 days"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg">Consultation Fee:</span>
                    <span className="text-2xl">$500</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    Fully refundable when proceeding to purchasing assistance
                  </p>
                  <Button className="w-full" size="lg" onClick={() => onPageChange('contact')}>
                    Book Your Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl">Ready to Find Your Dream Car?</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Let's start with a conversation about your automotive goals and preferences. 
              Your perfect vehicle is waiting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-6"
                onClick={() => onPageChange('contact')}
              >
                Schedule Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-primary-foreground/20 hover:bg-primary-foreground/10"
                onClick={() => onPageChange('purchasing')}
              >
                Learn About Purchasing Assistance
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}