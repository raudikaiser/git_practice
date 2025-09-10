import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";
import { CheckCircle, Award, Users, Target, ArrowRight } from "lucide-react";

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

export function AboutPage({ onPageChange }: AboutPageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/20 to-background py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
                  MEET YOUR CONCIERGE
                </Badge>
                <h1 className="text-5xl lg:text-6xl tracking-tight leading-tight mb-6">
                  Expertise Meets
                  <span className="block text-primary">Passion</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  With over two decades in luxury automotive sales, racing, and client service, 
                  I bring unmatched expertise to your automotive journey.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6" onClick={() => onPageChange('contact')}>
                  Work With Me
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={() => onPageChange('home')}>
                  View Services
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1742119971773-57e0131095b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NTcwMzA5MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional portrait"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Background & Experience */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6">My Background</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A unique combination of industry experience, racing credentials, and client-focused service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "20+ Years Automotive Industry",
                description: "Started at Beverly Hills luxury dealerships, progressed to sales management and client relations for ultra-high net worth individuals",
                years: "2003-Present"
              },
              {
                icon: Target,
                title: "Professional Racing Career",
                description: "Competed in SCCA, NASA, and club racing series. Multiple podium finishes in GT and production classes",
                years: "2008-2018"
              },
              {
                icon: Users,
                title: "Concierge Service Founded",
                description: "Launched LA Auto Concierge to provide personalized service that luxury car buyers deserve but rarely receive",
                years: "2020"
              }
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <Badge variant="outline" className="w-fit mb-2">{item.years}</Badge>
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

      {/* Philosophy & Approach */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl mb-6">My Philosophy</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Luxury car buying should be exciting, not stressful. My approach focuses on education, 
                  transparency, and building lasting relationships beyond the purchase.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    principle: "Client Education First",
                    description: "I believe informed clients make better decisions. Every recommendation comes with detailed reasoning and market context."
                  },
                  {
                    principle: "Transparent Communication",
                    description: "No hidden agendas or surprise fees. You'll understand every aspect of the process and associated costs upfront."
                  },
                  {
                    principle: "Long-term Relationships",
                    description: "My success is measured by client satisfaction years after the purchase, not just closing deals."
                  },
                  {
                    principle: "Continuous Learning", 
                    description: "The automotive world evolves rapidly. I stay current with new models, technologies, and market trends."
                  }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="text-xl text-primary">{item.principle}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Credentials & Certifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "California Department of Motor Vehicles Sales License",
                    "SCCA Competition Racing License",
                    "NASA High Performance Driving Instructor",
                    "Certified Automotive Appraiser (CAA)",
                    "Luxury Vehicle Specialist Certification",
                    "Advanced Negotiation Training Certificate"
                  ].map((credential, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span>{credential}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Personal Interests</CardTitle>
                  <CardDescription>Beyond automotive expertise</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground">
                    When not helping clients, you'll find me at the track testing the latest sports cars, 
                    exploring California's scenic driving roads, or working on classic car restoration projects.
                  </p>
                  <p className="text-muted-foreground">
                    I'm also passionate about automotive history and enjoy sharing stories about the engineering 
                    and craftsmanship behind each vehicle I recommend.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6">What Clients Say</h2>
            <p className="text-xl text-muted-foreground">Relationships built on trust and exceptional service</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Working with LA Auto Concierge transformed my car buying experience. Professional, knowledgeable, and genuinely cared about finding the right vehicle for my needs.",
                client: "Sarah Chen",
                title: "Tech Executive",
                vehicle: "Porsche Taycan Turbo S"
              },
              {
                quote: "The driving instruction was invaluable. I went from being intimidated by my new AMG to confidently enjoying its performance capabilities.",
                client: "Michael Rodriguez", 
                title: "Investment Banker",
                vehicle: "Mercedes-AMG GT 63 S"
              },
              {
                quote: "Saved me $25,000 on my dream car and made the entire process stress-free. The expertise and connections are worth every penny of the fee.",
                client: "David Kim",
                title: "Real Estate Developer", 
                vehicle: "Lamborghini Huracán EVO"
              }
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="text-4xl text-primary mb-4">"</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground italic leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="pt-4 border-t">
                    <div className="font-medium">{testimonial.client}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                    <div className="text-sm text-primary">{testimonial.vehicle}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl">Ready to Work Together?</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Let's discuss your automotive goals and how my experience can help you achieve them. 
              Every great journey starts with a conversation.
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
                onClick={() => onPageChange('consultation')}
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}