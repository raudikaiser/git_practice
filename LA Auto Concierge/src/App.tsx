import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/pages/HomePage';
import { ConsultationPage } from './components/pages/ConsultationPage';
import { PurchasingPage } from './components/pages/PurchasingPage';
import { CustomizationPage } from './components/pages/CustomizationPage';
import { TrainingPage } from './components/pages/TrainingPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'consultation':
        return <ConsultationPage onPageChange={setCurrentPage} />;
      case 'purchasing':
        return <PurchasingPage onPageChange={setCurrentPage} />;
      case 'customization':
        return <CustomizationPage onPageChange={setCurrentPage} />;
      case 'training':
        return <TrainingPage onPageChange={setCurrentPage} />;
      case 'about':
        return <AboutPage onPageChange={setCurrentPage} />;
      case 'contact':
        return <ContactPage onPageChange={setCurrentPage} />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderPage()}
      
      {/* Footer */}
      <footer className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div>
                <div className="text-xl tracking-wide mb-2">LA AUTO CONCIERGE</div>
                <div className="text-sm text-muted-foreground tracking-wider">
                  LUXURY AUTOMOTIVE SERVICES
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Expert automotive concierge services for discerning luxury vehicle buyers and owners across Los Angeles.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Services</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <button 
                  onClick={() => setCurrentPage('consultation')}
                  className="block hover:text-foreground transition-colors"
                >
                  Vehicle Consultation
                </button>
                <button 
                  onClick={() => setCurrentPage('purchasing')}
                  className="block hover:text-foreground transition-colors"
                >
                  Purchasing Assistance
                </button>
                <button 
                  onClick={() => setCurrentPage('customization')}
                  className="block hover:text-foreground transition-colors"
                >
                  Customization
                </button>
                <button 
                  onClick={() => setCurrentPage('training')}
                  className="block hover:text-foreground transition-colors"
                >
                  Driver Training
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Company</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <button 
                  onClick={() => setCurrentPage('about')}
                  className="block hover:text-foreground transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="block hover:text-foreground transition-colors"
                >
                  Contact
                </button>
                <div>Service Areas</div>
                <div>Privacy Policy</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>(310) 555-0123</div>
                <div>hello@laautoconcierge.com</div>
                <div>Greater Los Angeles Area</div>
                <div>Monday - Saturday</div>
                <div>9:00 AM - 7:00 PM PST</div>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div>© 2025 LA Auto Concierge. All rights reserved.</div>
            <div className="mt-4 md:mt-0">
              Licensed automotive professional serving luxury car buyers since 2003.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}