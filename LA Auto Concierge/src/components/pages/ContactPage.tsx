import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Badge } from "../ui/badge";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

interface ContactPageProps {
  onPageChange: (page: string) => void;
}

export function ContactPage({ onPageChange }: ContactPageProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit to a backend
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  if (formSubmitted) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center bg-muted/30">
        <Card className="max-w-md mx-auto text-center">
          <CardHeader>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-2xl">Message Sent Successfully!</CardTitle>
            <CardDescription className="text-lg">
              Thank you for your inquiry. I'll respond within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => onPageChange('home')} className="w-full">
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/20 to-background py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              GET IN TOUCH
            </Badge>
            <h1 className="text-5xl lg:text-6xl tracking-tight leading-tight mb-6">
              Start Your
              <span className="block text-primary">Automotive Journey</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Ready to find your perfect vehicle or enhance your driving skills? 
              Let's discuss how I can help you achieve your automotive goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl mb-6">Get In Touch</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm here to answer questions, provide consultations, and help you 
                  navigate your luxury automotive journey.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">Phone</h4>
                    <p className="text-muted-foreground">(310) 555-0123</p>
                    <p className="text-sm text-muted-foreground">Calls accepted 9 AM - 7 PM PST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">Email</h4>
                    <p className="text-muted-foreground">hello@laautoconcierge.com</p>
                    <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">Service Area</h4>
                    <p className="text-muted-foreground">Greater Los Angeles</p>
                    <p className="text-sm text-muted-foreground">Beverly Hills, West Hollywood, Santa Monica, Manhattan Beach</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">Hours</h4>
                    <p className="text-muted-foreground">Monday - Saturday</p>
                    <p className="text-sm text-muted-foreground">9:00 AM - 7:00 PM PST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send a Message</CardTitle>
                  <CardDescription className="text-lg">
                    Tell me about your automotive needs and I'll get back to you promptly
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input id="firstName" required placeholder="Your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input id="lastName" required placeholder="Your last name" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" required placeholder="your.email@example.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="(310) 555-0123" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest *</Label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="consultation">Vehicle Consultation</SelectItem>
                          <SelectItem value="purchasing">Purchasing Assistance</SelectItem>
                          <SelectItem value="customization">Vehicle Customization</SelectItem>
                          <SelectItem value="urban-training">Urban Driving Training</SelectItem>
                          <SelectItem value="track-training">Track Performance Training</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timeline">Timeline</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="When are you looking to proceed?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediately">Immediately</SelectItem>
                          <SelectItem value="1-2-weeks">Within 1-2 weeks</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="2-3-months">2-3 months</SelectItem>
                          <SelectItem value="researching">Just researching</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range (Optional)</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-100k">Under $100,000</SelectItem>
                          <SelectItem value="100k-200k">$100,000 - $200,000</SelectItem>
                          <SelectItem value="200k-300k">$200,000 - $300,000</SelectItem>
                          <SelectItem value="300k-500k">$300,000 - $500,000</SelectItem>
                          <SelectItem value="500k-plus">$500,000+</SelectItem>
                          <SelectItem value="training-only">Training Services Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        required
                        placeholder="Tell me about your automotive needs, current situation, and how I can help..."
                        className="min-h-[120px]"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button type="submit" size="lg" className="flex-1">
                        Send Message
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="lg"
                        onClick={() => onPageChange('home')}
                      >
                        View Services
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Common questions about working with LA Auto Concierge
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "How does your consultation process work?",
                answer: "We start with a detailed 90-minute consultation to understand your needs, preferences, and budget. This includes lifestyle analysis and market research to identify the perfect vehicles for your situation."
              },
              {
                question: "What are your fees for purchasing assistance?", 
                answer: "Our purchasing assistance fee ranges from $2,500-$5,000 depending on vehicle value. This fee is often offset by the savings we negotiate, and we provide full transparency upfront."
              },
              {
                question: "Do you work with all luxury brands?",
                answer: "Yes, we work with all luxury and exotic brands including Porsche, Mercedes-Benz, BMW, Audi, Ferrari, Lamborghini, McLaren, and many others. Our dealer network spans the entire California market."
              },
              {
                question: "Can you help if I already know what car I want?",
                answer: "Absolutely. Even if you've identified your target vehicle, we can help with dealer negotiations, paperwork management, inspection coordination, and ensuring you get the best possible deal and terms."
              },
              {
                question: "What makes your driving instruction unique?",
                answer: "Our instruction combines professional racing experience with real-world application. Whether urban driving or track performance, we focus on practical skills that enhance safety and enjoyment."
              },
              {
                question: "Do you offer services outside Los Angeles?",
                answer: "Our primary service area is Greater Los Angeles, but we can arrange services throughout California and occasionally beyond for the right client engagement. Contact us to discuss your specific needs."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}