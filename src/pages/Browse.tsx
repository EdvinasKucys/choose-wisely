
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import { Filter, Search } from "lucide-react";

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample listings data - in a real app this would come from an API
  const listings = [
    {
      id: "1",
      title: "Modern Apartment in City Center",
      description: "Spacious 2-bedroom apartment with modern amenities and great city views.",
      price: 120000,
      location: "Vilnius, Lithuania",
      category: "Real Estate",
      images: ["/placeholder.svg"],
      features: ["Modern", "City Center", "2 Bedrooms"],
      createdAt: new Date(),
      userId: "user123",
    },
    {
      id: "2",
      title: "BMW X5 2021 Model",
      description: "Excellent condition with low mileage. Full service history and premium package.",
      price: 45000,
      location: "Kaunas, Lithuania",
      category: "Vehicles",
      images: ["/placeholder.svg"],
      features: ["2021", "Low Mileage", "Premium Package"],
      createdAt: new Date(),
      userId: "user456",
    },
    {
      id: "3",
      title: "Professional DSLR Camera",
      description: "High-end camera with multiple lenses, perfect for photography enthusiasts.",
      price: 1200,
      location: "Klaipėda, Lithuania",
      category: "Electronics",
      images: ["/placeholder.svg"],
      features: ["DSLR", "Multiple Lenses", "High-end"],
      createdAt: new Date(),
      userId: "user789",
    },
    {
      id: "4",
      title: "Vintage Wooden Desk",
      description: "Beautiful handcrafted wooden desk with three drawers, perfect for a home office.",
      price: 350,
      location: "Šiauliai, Lithuania",
      category: "Furniture",
      images: ["/placeholder.svg"],
      features: ["Vintage", "Wooden", "3 Drawers"],
      createdAt: new Date(),
      userId: "user101",
    },
  ];
  
  const filteredListings = listings.filter(listing => 
    listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    listing.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    listing.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    listing.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="w-full py-12 bg-gradient-green">
          <div className="container">
            <h1 className="text-3xl font-bold text-white mb-6">Browse Listings</h1>
            <p className="text-white max-w-2xl mb-8" style={{ opacity: 0.9 }}>
              Explore our marketplace of items posted by users. Find the perfect match for your needs and preferences.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af', width: '16px', height: '16px' }} />
                <input
                  type="text"
                  placeholder="Search for listings..."
                  className="w-full h-10 pl-10 border border-gray-300 rounded-none"
                  style={{ padding: '8px 12px 8px 36px' }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="btn btn-outline h-10 bg-white bg-opacity-90 border-white text-gray-800 hover:bg-white">
                <Filter style={{ width: '16px', height: '16px', marginRight: '8px' }} /> Filters
              </button>
            </div>
          </div>
        </div>
        
        <div className="container py-12">
          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredListings.map((listing) => (
                <ListingCard
                  key={listing.id}
                  listing={listing}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No listings found</h3>
              <p className="text-gray-500">Try adjusting your search criteria or check back later for new listings.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Browse;
