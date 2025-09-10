import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CheckCircle, Paintbrush, Shield, Zap, Star, Settings, ArrowRight } from "lucide-react";

interface CustomizationPageProps {
  onPageChange: (page: string) => void;
}

export function CustomizationPage({ onPageChange }: CustomizationPageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/20 to-background py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
                  VEHICLE CUSTOMIZATION
                </Badge>
                <h1 className="text-5xl lg:text-6xl tracking-tight leading-tight mb-6">
                  Make It
                  <span className="block text-primary">Uniquely Yours</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  Expert guidance for personalizing your luxury vehicle, from subtle aesthetic 
                  enhancements to comprehensive performance modifications.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6" onClick={() => onPageChange('contact')}>
                  Start Customization
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={() => onPageChange('training')}>
                  Next: Driver Training
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1712307198069-0adfbc0cf5ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBjdXN0b21pemF0aW9uJTIwc2hvcHxlbnwxfHx8fDE3NTcwMzE4MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Luxury car customization"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customization Categories */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6">Customization Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Three specialized areas of customization to transform your vehicle
            </p>
          </div>

          <Tabs defaultValue="appearance" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="appearance" className="text-lg py-4">Appearance</TabsTrigger>
              <TabsTrigger value="protection" className="text-lg py-4">Care & Protection</TabsTrigger>
              <TabsTrigger value="performance" className="text-lg py-4">Performance</TabsTrigger>
            </TabsList>
            
            <TabsContent value="appearance" className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <Paintbrush className="w-8 h-8 text-primary" />
                      <h3 className="text-3xl">Appearance Modifications</h3>
                    </div>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Transform your vehicle's aesthetic with carefully selected modifications 
                      that enhance its unique character while maintaining luxury appeal.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      {
                        title: "Exterior Styling",
                        description: "Custom wheels, body kits, spoilers, and aerodynamic enhancements"
                      },
                      {
                        title: "Interior Upgrades", 
                        description: "Premium leather, carbon fiber accents, custom stitching, and trim"
                      },
                      {
                        title: "Lighting Systems",
                        description: "LED upgrades, custom headlights, and ambient lighting packages"
                      },
                      {
                        title: "Paint & Wraps",
                        description: "Custom paint jobs, vinyl wraps, and specialty finishes"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-lg mb-1">{item.title}</h4>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Appearance Package</CardTitle>
                    <CardDescription className="text-lg">Complete aesthetic transformation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Settings className="w-5 h-5 text-primary" />
                        <span>Consultation and design planning</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star className="w-5 h-5 text-primary" />
                        <span>Vetted shop and installer network</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-primary" />
                        <span>Quality assurance and project management</span>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg">Consultation Fee:</span>
                        <div className="text-right">
                          <div className="text-2xl">$750</div>
                          <div className="text-sm text-muted-foreground">per project</div>
                        </div>
                      </div>
                      <Button className="w-full" size="lg" onClick={() => onPageChange('contact')}>
                        Plan Appearance Mods
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="protection" className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <Shield className="w-8 h-8 text-primary" />
                      <h3 className="text-3xl">Care & Protection</h3>
                    </div>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Preserve your investment with professional-grade protection solutions 
                      that maintain your vehicle's pristine condition for years to come.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      {
                        title: "Paint Protection Film",
                        description: "Clear bra installation to protect against rock chips and scratches"
                      },
                      {
                        title: "Ceramic Coating", 
                        description: "Long-lasting paint protection with enhanced gloss and easy maintenance"
                      },
                      {
                        title: "Interior Protection",
                        description: "Fabric and leather treatments, floor mat systems, and seat covers"
                      },
                      {
                        title: "Maintenance Programs",
                        description: "Regular detailing schedules and specialized care routines"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-lg mb-1">{item.title}</h4>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1606235994317-b517abfd89cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBwYWludCUyMHByb3RlY3Rpb24lMjBmaWxtfGVufDF8fHx8MTc1NzAzMTgyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Paint protection application"
                    className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="performance" className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <Zap className="w-8 h-8 text-primary" />
                      <h3 className="text-3xl">Performance Upgrades</h3>
                    </div>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Unlock your vehicle's potential with carefully selected performance modifications, 
                      from mild enhancements to full track-focused builds.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      {
                        title: "Engine Tuning",
                        description: "ECU optimization, cold air intakes, and exhaust systems"
                      },
                      {
                        title: "Suspension Systems", 
                        description: "Coilovers, sway bars, and handling packages for street or track"
                      },
                      {
                        title: "Brake Upgrades",
                        description: "High-performance pads, rotors, and big brake kits"
                      },
                      {
                        title: "Track Preparation",
                        description: "Roll cages, racing seats, and comprehensive track setups"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="text-lg mb-1">{item.title}</h4>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1732634122889-0ed26458d816?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBwZXJmb3JtYW5jZSUyMG1vZGlmaWNhdGlvbiUyMGV4aGF1c3R8ZW58MXx8fHwxNzU3MDMxODI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Performance exhaust system"
                    className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6">Our Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to planning and executing your customization project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Vision & Planning",
                description: "Define your goals, budget, and desired outcomes for the customization project"
              },
              {
                step: "02", 
                title: "Research & Design",
                description: "Identify compatible parts, trusted installers, and create detailed project timeline"
              },
              {
                step: "03",
                title: "Shop Selection", 
                description: "Connect with vetted specialists who excel in your specific modification requirements"
              },
              {
                step: "04",
                title: "Project Management",
                description: "Oversee installation quality, timeline adherence, and final inspection"
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

      {/* Pricing & Packages */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6">Service Packages</h2>
            <p className="text-xl text-muted-foreground">Customized consultation based on project scope</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Basic Consultation",
                price: "$500",
                description: "Single modification guidance",
                features: [
                  "1-2 hour consultation",
                  "Part selection and sourcing",
                  "Shop recommendations", 
                  "Installation oversight",
                  "Quality inspection"
                ]
              },
              {
                name: "Comprehensive Package", 
                price: "$1,250",
                description: "Multi-category project management",
                features: [
                  "Full project planning session",
                  "Detailed timeline and budget",
                  "Multiple shop coordination",
                  "Weekly progress updates",
                  "Complete project management"
                ],
                popular: true
              },
              {
                name: "Track Build Consultation",
                price: "$2,500",
                description: "Complete performance transformation",
                features: [
                  "Track-focused build planning",
                  "Performance part selection",
                  "Safety equipment guidance",
                  "Track day preparation",
                  "Post-build training session"
                ]
              }
            ].map((pkg, index) => (
              <Card key={index} className={`relative ${pkg.popular ? 'border-primary shadow-lg' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl mt-4">{pkg.price}</div>
                  <CardDescription className="text-lg">{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <Button 
                    className="w-full mt-6" 
                    variant={pkg.popular ? "default" : "outline"}
                    onClick={() => onPageChange('contact')}
                  >
                    Start Project
                  </Button>
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
            <h2 className="text-4xl lg:text-5xl">Ready to Customize?</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Whether you're looking for subtle enhancements or dramatic transformation, 
              let's create a customization plan that reflects your unique vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-6"
                onClick={() => onPageChange('contact')}
              >
                Start Your Project
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-primary-foreground/20 hover:bg-primary-foreground/10"
                onClick={() => onPageChange('purchasing')}
              >
                Need to Purchase First?
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}