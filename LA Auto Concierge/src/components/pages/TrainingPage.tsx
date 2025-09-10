import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { CheckCircle, MapPin, Zap, Clock, Users, Trophy, ArrowRight } from "lucide-react";

interface TrainingPageProps {
  onPageChange: (page: string) => void;
}

export function TrainingPage({ onPageChange }: TrainingPageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/20 to-background py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
                  DRIVER TRAINING
                </Badge>
                <h1 className="text-5xl lg:text-6xl tracking-tight leading-tight mb-6">
                  Master Your
                  <span className="block text-primary">Vehicle's Potential</span>
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  One-on-one professional instruction to develop confidence in urban environments 
                  and unlock high-performance capabilities on the track.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6" onClick={() => onPageChange('contact')}>
                  Book Training Session
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={() => onPageChange('about')}>
                  Meet Your Instructor
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1730564356785-60f8fd904c58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjByYWNlJTIwY2FyJTIwZHJpdmVyJTIwdHJhaW5pbmd8ZW58MXx8fHwxNzU3MDMwOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional driver training"
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6">Training Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Customized instruction programs designed for different driving scenarios and skill levels
            </p>
          </div>

          <Tabs defaultValue="urban" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12 h-auto min-h-[60px]">
              <TabsTrigger value="urban" className="text-lg py-4">Urban Driving Mastery</TabsTrigger>
              <TabsTrigger value="performance" className="text-lg py-4">High-Performance Track Training</TabsTrigger>
            </TabsList>
            
            <TabsContent value="urban" className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <MapPin className="w-8 h-8 text-primary" />
                      <h3 className="text-3xl">Urban Driving Mastery</h3>
                    </div>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Navigate Los Angeles traffic with confidence while protecting your luxury investment. 
                      Perfect for new owners or those wanting to improve city driving skills.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      {
                        title: "Parking Precision",
                        description: "Master tight spaces, valet situations, and premium parking scenarios"
                      },
                      {
                        title: "Traffic Navigation", 
                        description: "Efficient lane changes, merge techniques, and defensive positioning"
                      },
                      {
                        title: "Vehicle Protection",
                        description: "Avoid door dings, curb damage, and common urban hazards"
                      },
                      {
                        title: "Technology Integration",
                        description: "Optimize driver assistance systems and luxury features"
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
                    <CardTitle className="text-2xl">Program Details</CardTitle>
                    <CardDescription className="text-lg">Urban driving course structure</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>4 hours of one-on-one instruction</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-primary" />
                        <span>Individual or couple sessions available</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>Various LA locations and your neighborhood</span>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg">Program Investment:</span>
                        <div className="text-right">
                          <div className="text-2xl">$800</div>
                          <div className="text-sm text-muted-foreground">per person</div>
                        </div>
                      </div>
                      <Button className="w-full" size="lg" onClick={() => onPageChange('contact')}>
                        Schedule Urban Training
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="performance" className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <Zap className="w-8 h-8 text-primary" />
                      <h3 className="text-3xl">High-Performance Track Training</h3>
                    </div>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      Unlock your sports car's true potential with professional racing instruction. 
                      Safe, controlled environment to explore performance boundaries.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      {
                        title: "Racing Line Theory",
                        description: "Optimal track positioning and cornering techniques for maximum speed"
                      },
                      {
                        title: "Braking & Acceleration", 
                        description: "Threshold braking, trail braking, and power application timing"
                      },
                      {
                        title: "Vehicle Dynamics",
                        description: "Understanding weight transfer, traction limits, and control systems"
                      },
                      {
                        title: "Safety Protocols",
                        description: "Emergency procedures, flag signals, and track etiquette"
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
                    <CardTitle className="text-2xl">Track Program</CardTitle>
                    <CardDescription className="text-lg">Performance driving experience</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>Full day track experience (6 hours)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Trophy className="w-5 h-5 text-primary" />
                        <span>Professional racing instructor</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>Willow Springs or Buttonwillow Raceway</span>
                      </div>
                    </div>
                    
                    <div className="pt-6 border-t">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-lg">Program Investment:</span>
                        <div className="text-right">
                          <div className="text-2xl">$1,500</div>
                          <div className="text-sm text-muted-foreground">includes track fees</div>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground mb-6">
                        * Vehicle rental available for additional fee
                      </div>
                      <Button className="w-full" size="lg" onClick={() => onPageChange('contact')}>
                        Schedule Track Training
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Instructor Credentials */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6">Professional Instruction</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from certified instructors with professional racing and advanced driving backgrounds
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                credential: "SCCA Licensed Instructor",
                description: "Sports Car Club of America certified with 15+ years teaching experience"
              },
              {
                credential: "Professional Racing Background", 
                description: "Competed in IMSA, Pirelli World Challenge, and club racing series"
              },
              {
                credential: "Advanced Safety Training",
                description: "Certified in emergency response and high-performance vehicle dynamics"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.credential}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
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
            <h2 className="text-4xl lg:text-5xl">Ready to Elevate Your Driving?</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Whether you want to navigate LA traffic with confidence or explore your car's performance limits, 
              we'll help you become a better, safer driver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8 py-6"
                onClick={() => onPageChange('contact')}
              >
                Book Training Session
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-primary-foreground/20 hover:bg-primary-foreground/10"
                onClick={() => onPageChange('about')}
              >
                Meet Your Instructor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}