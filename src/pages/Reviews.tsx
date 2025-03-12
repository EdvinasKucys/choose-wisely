
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Reviews = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16 bg-gradient-to-tr from-[#333333] to-[#888888]">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold text-white mb-6">YouTube Reviews</h1>
          <p className="text-white/90 max-w-3xl mb-8">
            This page will feature YouTube reviews of products and services recommended by our platform.
            Coming soon...
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-none border border-white/20">
            <h2 className="text-xl font-semibold text-white mb-4">Page Under Construction</h2>
            <p className="text-white/80">
              We're currently developing this section to provide you with valuable video reviews
              to help you make even better decisions. Please check back soon!
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Reviews;
