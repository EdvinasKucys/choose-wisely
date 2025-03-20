
import { useEffect } from "react";
import { Link } from "react-router-dom";
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
        <section className="how-it-works-section">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 scroll-animation opacity-0">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-gray-300">
                Our intelligent platform simplifies decision-making through personalized analysis and recommendations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="relative p-6 border border-gray-700 bg-gray-800" style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.05)', opacity: 0 }} className="scroll-animation">
                <div className="absolute" style={{ top: '-1rem', left: '-1rem', width: '2rem', height: '2rem', backgroundColor: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  1
                </div>
                <h3 className="text-lg font-semibold mb-3 mt-2 text-white">Upload Your Information</h3>
                <p className="text-gray-300 text-sm">
                  Share details about your preferences, style, and needs to help our system understand you better.
                </p>
              </div>
              
              <div className="relative p-6 border border-gray-700 bg-gray-800" style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.05)', opacity: 0, transitionDelay: '0.1s' }} className="scroll-animation">
                <div className="absolute" style={{ top: '-1rem', left: '-1rem', width: '2rem', height: '2rem', backgroundColor: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  2
                </div>
                <h3 className="text-lg font-semibold mb-3 mt-2 text-white">Our AI Analyzes</h3>
                <p className="text-gray-300 text-sm">
                  Our advanced algorithm processes your information and compares it with thousands of options.
                </p>
              </div>
              
              <div className="relative p-6 border border-gray-700 bg-gray-800" style={{ boxShadow: '0 1px 2px rgba(0,0,0,0.05)', opacity: 0, transitionDelay: '0.2s' }} className="scroll-animation">
                <div className="absolute" style={{ top: '-1rem', left: '-1rem', width: '2rem', height: '2rem', backgroundColor: 'var(--primary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  3
                </div>
                <h3 className="text-lg font-semibold mb-3 mt-2 text-white">Get Personalized Results</h3>
                <p className="text-gray-300 text-sm">
                  Receive tailored recommendations that match your unique profile and preferences.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-12 scroll-animation opacity-0" style={{ transitionDelay: '0.3s' }}>
              <Link to="/get-recommendation">
                <button className="btn btn-primary">
                  Try It Now <ArrowRight style={{ width: '1rem', height: '1rem', marginLeft: '0.5rem' }} />
                </button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Pricing section */}
        <section className="pricing-section">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 scroll-animation opacity-0">
              <h2 className="text-3xl font-bold mb-4 text-white">Simple Pricing</h2>
              <p className="text-gray-200">
                Choose the plan that fits your needs and start making better decisions today.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="p-6 border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 scroll-animation opacity-0">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Basic</h3>
                <p className="text-gray-600 mb-6">For individuals starting out</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800">Free</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check style={{ width: '1.25rem', height: '1.25rem', color: '#10b981', marginRight: '0.5rem', flexShrink: 0 }} />
                    <span className="text-gray-700 text-sm">Basic recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <Check style={{ width: '1.25rem', height: '1.25rem', color: '#10b981', marginRight: '0.5rem', flexShrink: 0 }} />
                    <span className="text-gray-700 text-sm">3 decision categories</span>
                  </li>
                  <li className="flex items-start">
                    <Check style={{ width: '1.25rem', height: '1.25rem', color: '#10b981', marginRight: '0.5rem', flexShrink: 0 }} />
                    <span className="text-gray-700 text-sm">Community marketplace access</span>
                  </li>
                </ul>
                <button className="btn btn-outline w-full">Get Started</button>
              </div>
              
              <div className="p-6 border-2 border-primary bg-white relative shadow-lg scroll-animation opacity-0" style={{ transitionDelay: '0.1s' }}>
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-xs font-semibold">
                  POPULAR
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Premium</h3>
                <p className="text-gray-600 mb-6">For serious decision makers</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800">€9.99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check style={{ width: '1.25rem', height: '1.25rem', color: '#10b981', marginRight: '0.5rem', flexShrink: 0 }} />
                    <span className="text-gray-700 text-sm">Advanced personalized recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <Check style={{ width: '1.25rem', height: '1.25rem', color: '#10b981', marginRight: '0.5rem', flexShrink: 0 }} />
                    <span className="text-gray-700 text-sm">All decision categories</span>
                  </li>
                  <li className="flex items-start">
                    <Check style={{ width: '1.25rem', height: '1.25rem', color: '#10b981', marginRight: '0.5rem', flexShrink: 0 }} />
                    <span className="text-gray-700 text-sm">Priority matching with listings</span>
                  </li>
                  <li className="flex items-start">
                    <Check style={{ width: '1.25rem', height: '1.25rem', color: '#10b981', marginRight: '0.5rem', flexShrink: 0 }} />
                    <span className="text-gray-700 text-sm">No advertisements</span>
                  </li>
                </ul>
                <button className="btn btn-primary w-full">Subscribe Now</button>
              </div>
              
              <div className="p-6 border border-gray-200 bg-white hover:shadow-lg transition-all duration-300 scroll-animation opacity-0" style={{ transitionDelay: '0.2s' }}>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Business</h3>
                <p className="text-gray-600 mb-6">For companies and agencies</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800">€49.99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check style={{ width: '1.25rem', height: '1.25rem', color: '#10b981', marginRight: '0.5rem', flexShrink: 0 }} />
                    <span className="text-gray-700 text-sm">All Premium features</span>
                  </li>
                  <li className="flex items-start">
                    <Check style={{ width: '1.25rem', height: '1.25rem', color: '#10b981', marginRight: '0.5rem', flexShrink: 0 }} />
                    <span className="text-gray-700 text-sm">Multiple user accounts</span>
                  </li>
                  <li className="flex items-start">
                    <Check style={{ width: '1.25rem', height: '1.25rem', color: '#10b981', marginRight: '0.5rem', flexShrink: 0 }} />
                    <span className="text-gray-700 text-sm">Business analytics dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <Check style={{ width: '1.25rem', height: '1.25rem', color: '#10b981', marginRight: '0.5rem', flexShrink: 0 }} />
                    <span className="text-gray-700 text-sm">API access</span>
                  </li>
                </ul>
                <button className="btn btn-outline w-full">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sponsors section with YouTube video */}
        <section className="sponsors-section">
          <div className="container px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 scroll-animation opacity-0">
              <h2 className="text-3xl font-bold mb-4">Our Sponsors</h2>
              <p className="text-gray-300 mb-8">
                We are proud to partner with industry-leading organizations who share our vision.
              </p>
              
              <div className="max-w-3xl mx-auto" style={{ maxWidth: '100%', aspectRatio: '16/9' }}>
                <iframe 
                  className="w-full"
                  style={{ height: '480px', maxWidth: '100%' }}
                  src="https://www.youtube.com/embed/UvZfBz3zUlM" 
                  title="Sponsor Video"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
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
