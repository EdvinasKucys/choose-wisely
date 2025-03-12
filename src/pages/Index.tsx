
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { ArrowRight, Check, ArrowDownCircle } from "lucide-react";

const Index = () => {
  // Smooth scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animation');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        
        if (isVisible) {
          element.classList.add('animate-slide-up');
          element.classList.remove('opacity-0');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        <Features />
        
        {/* How it works section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 scroll-animation opacity-0">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-gray-600">
                Our intelligent platform simplifies decision-making through personalized analysis and recommendations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="relative p-6 border border-gray-100 bg-white shadow-sm scroll-animation opacity-0">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white flex items-center justify-center rounded-none">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-3 mt-2">Upload Your Information</h3>
                <p className="text-gray-600 text-sm">
                  Share details about your preferences, style, and needs to help our system understand you better.
                </p>
              </div>
              
              <div className="relative p-6 border border-gray-100 bg-white shadow-sm scroll-animation opacity-0" style={{ transitionDelay: '0.1s' }}>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white flex items-center justify-center rounded-none">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-3 mt-2">Our AI Analyzes</h3>
                <p className="text-gray-600 text-sm">
                  Our advanced algorithm processes your information and compares it with thousands of options.
                </p>
              </div>
              
              <div className="relative p-6 border border-gray-100 bg-white shadow-sm scroll-animation opacity-0" style={{ transitionDelay: '0.2s' }}>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white flex items-center justify-center rounded-none">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-3 mt-2">Get Personalized Results</h3>
                <p className="text-gray-600 text-sm">
                  Receive tailored recommendations that match your unique profile and preferences.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12 scroll-animation opacity-0" style={{ transitionDelay: '0.3s' }}>
              <Link to="/get-recommendation">
                <Button className="rounded-none">
                  Try It Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Pricing section */}
        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 scroll-animation opacity-0">
              <h2 className="text-3xl font-bold mb-4">Simple Pricing</h2>
              <p className="text-gray-600">
                Choose the plan that fits your needs and start making better decisions today.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 scroll-animation opacity-0">
                <h3 className="text-xl font-semibold mb-2">Basic</h3>
                <p className="text-gray-500 mb-6">For individuals starting out</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">Free</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-600 text-sm">Basic recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-600 text-sm">3 decision categories</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-600 text-sm">Community marketplace access</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full rounded-none">Get Started</Button>
              </div>
              
              <div className="p-6 border-2 border-primary bg-white relative shadow-lg scroll-animation opacity-0" style={{ transitionDelay: '0.1s' }}>
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-xs font-semibold transform translate-y-0 translate-x-0">
                  POPULAR
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium</h3>
                <p className="text-gray-500 mb-6">For serious decision makers</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">€9.99</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-600 text-sm">Advanced personalized recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-600 text-sm">All decision categories</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-600 text-sm">Priority matching with listings</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-600 text-sm">No advertisements</span>
                  </li>
                </ul>
                <Button className="w-full rounded-none">Subscribe Now</Button>
              </div>
              
              <div className="p-6 border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 scroll-animation opacity-0" style={{ transitionDelay: '0.2s' }}>
                <h3 className="text-xl font-semibold mb-2">Business</h3>
                <p className="text-gray-500 mb-6">For companies and agencies</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">€49.99</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-600 text-sm">All Premium features</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-600 text-sm">Multiple user accounts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-600 text-sm">Business analytics dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-600 text-sm">API access</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full rounded-none">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto scroll-animation opacity-0">
              <h2 className="text-3xl font-bold mb-6">Ready to Make Smarter Decisions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Join thousands of users who have simplified their decision-making process. 
                Register now and start receiving personalized recommendations today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/register">
                  <Button size="lg" variant="outline" className="rounded-none border-white text-white hover:bg-white hover:text-primary">
                    Create Account <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/browse">
                  <Button size="lg" className="rounded-none bg-white text-primary hover:bg-gray-100">
                    Explore Marketplace
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
