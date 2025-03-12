
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-tr from-[#222222] to-[#888888]">
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-white/20 pointer-events-none"></div>
      <div className="container mx-auto px-4 py-32 sm:py-48 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-slide-up">
          <div className="inline-block px-3 py-1 rounded-none bg-primary/10 text-primary text-xs font-medium mb-6 animate-pulse-opacity">
            Making Decisions Simple
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-100">
            Choose Wisely, Live Efficiently
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Let our advanced platform help you make decisions based on your appearance, character, and needs. Find the perfect match for your lifestyle with personalized recommendations.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/login">
              <Button size="lg" className="rounded-none text-md px-8 py-6 shadow-lg">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/browse">
              <Button size="lg" variant="outline" className="rounded-none text-md px-8 py-6 border-white/50 bg-transparent text-white hover:bg-white/10">
                Browse Listings
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 left-0 right-0 h-32 bg-gradient-to-t from-[#222222] to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
