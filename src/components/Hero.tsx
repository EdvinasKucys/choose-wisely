
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-gradient-overlay"></div>
      <div className="container py-32 sm:py-48 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          <div className="inline-block px-3 py-1 bg-primary-10 text-primary text-xs font-medium mb-6 animate-pulse-opacity">
            Making Decisions Simple
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-100">
            Choose Wisely, Live Efficiently
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Let our advanced platform help you make decisions based on your appearance, character, and needs. Find the perfect match for your lifestyle with personalized recommendations.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/get-recommendation">
              <button className="btn btn-primary btn-lg">
                Get Started <ArrowRight className="ml-2" style={{ width: '1.25rem', height: '1.25rem' }} />
              </button>
            </Link>
            <Link to="/browse">
              <button className="btn btn-outline-white btn-lg">
                Browse Listings
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hero-bottom-fade"></div>
    </section>
  );
};

export default Hero;
