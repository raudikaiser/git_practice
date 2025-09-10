import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";
import { CheckCircle, Shield, DollarSign, FileText, Handshake, ArrowRight } from "lucide-react";

interface PurchasingPageProps {
  onPageChange: (page: string) => void;
}

export function PurchasingPage({ onPageChange }: PurchasingPageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/20 to-background py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
                  PURCHASING ASSISTANCE
                </Badge>
                <h1 className="text-5xl lg:text-6xl tracking-tight leading-tight mb-6">
                  Secure The
                  <span className="block text-primary">Best Deal</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  Professional negotiation and purchase management to ensure you get 
                  exceptional value on your luxury vehicle acquisition.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6" onClick={() => onPageChange('contact')}>
                  Start Purchase Process
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={() => onPageChange('customization')}>
                  Next: Customization
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1652454606762-cf29c5bc8d8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZWFsZXJzaGlwJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU3MDMwOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Luxury car dealership"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Advantage */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6">Our Purchasing Advantage</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Leverage our industry relationships and expertise to secure better pricing and terms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Handshake,
                title: "Dealer Network Access",
                description: "Established relationships with luxury dealers across California providing preferential pricing and allocation priority",
                highlight: "Exclusive Access"
              },
              {
                icon: DollarSign,
                title: "Expert Negotiation",
                description: "Professional negotiation strategies that typically save clients 8-15% off MSRP on luxury vehicles",
                highlight: "Proven Savings"
              },
              {
                icon: Shield,
                title: "Purchase Protection", 
                description: "Comprehensive inspection protocols and documentation review to protect your investment",
                highlight: "Risk Mitigation"
              }
            ].map((item, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="text-xs">{item.highlight}</Badge>
                </div>
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
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

      {/* Service Details */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl lg:text-5xl mb-6">Complete Purchase Management</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  From initial contact to final delivery, we handle every aspect of your vehicle acquisition
                </p>
              </div>
              
              <div className="space-y-8">
                {[
                  {
                    phase: "Pre-Purchase",
                    items: [
                      "Market analysis and pricing research",
                      "Vehicle history and inspection coordination", 
                      "Financing options and rate negotiation",
                      "Trade-in value assessment and optimization"
                    ]
                  },
                  {
                    phase: "Negotiation",
                    items: [
                      "Professional dealer communication",
                      "Price and terms negotiation",
                      "Extended warranty evaluation", 
                      "Delivery and logistics coordination"
                    ]
                  },
                  {
                    phase: "Finalization", 
                    items: [
                      "Contract review and explanation",
                      "Final inspection and acceptance",
                      "Registration and title transfer",
                      "Insurance coordination and setup"
                    ]
                  }
                ].map((section, index) => (
                  <div key={index} className="space-y-4">
                    <h4 className="text-xl text-primary">{section.phase}</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Service Investment</CardTitle>
                  <CardDescription className="text-lg">Transparent pricing structure</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b">
                      <div>
                        <div className="font-medium">Purchase Assistance Fee</div>
                        <div className="text-sm text-muted-foreground">Vehicles up to $150,000</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl">$2,500</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b">
                      <div>
                        <div className="font-medium">Premium Vehicle Service</div>
                        <div className="text-sm text-muted-foreground">Vehicles $150,000+</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl">$5,000</div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      * Fee credited back if savings exceed service cost
                    </div>
                  </div>
                  
                  <Button className="w-full" size="lg" onClick={() => onPageChange('contact')}>
                    Discuss Your Purchase
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-6 h-6" />
                    <span>What's Included</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Unlimited dealer communication",
                      "Professional negotiation services",
                      "Complete paperwork management",
                      "Pre-delivery inspection coordination",
                      "Post-purchase support for 30 days",
                      "Referrals for insurance and services"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6">Client Success Stories</h2>
            <p className="text-xl text-muted-foreground">Real savings and experiences from recent purchases</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                vehicle: "Porsche 911 Turbo S",
                saving: "$18,500",
                client: "Tech Executive, Beverly Hills",
                note: "Secured allocation and negotiated significant discount on highly demanded model"
              },
              {
                vehicle: "Mercedes-AMG GT 63 S",
                saving: "$25,000", 
                client: "Real Estate Investor, Malibu",
                note: "Found better financing terms and negotiated extended warranty inclusion"
              },
              {
                vehicle: "Lamborghini Huracán",
                saving: "$35,000",
                client: "Entertainment Industry, West Hollywood", 
                note: "Located rare color combination and structured favorable lease terms"
              }
            ].map((story, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-3xl text-primary mb-2">{story.saving}</div>
                  <CardTitle className="text-lg">{story.vehicle}</CardTitle>
                  <CardDescription>{story.client}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground italic">"{story.note}"</p>
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
            <h2 className="text-4xl lg:text-5xl">Ready to Make Your Purchase?</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Let us handle the complexity while you focus on the excitement of your new luxury vehicle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-6"
                onClick={() => onPageChange('contact')}
              >
                Start Purchase Process
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-primary-foreground/20 hover:bg-primary-foreground/10"
                onClick={() => onPageChange('customization')}
              >
                Explore Customization
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}