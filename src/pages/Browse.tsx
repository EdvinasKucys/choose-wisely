
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import { Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample listings data - in a real app this would come from an API
  const listings = [
    {
      id: 1,
      title: "Modern Apartment in City Center",
      description: "Spacious 2-bedroom apartment with modern amenities and great city views.",
      price: "€120,000",
      location: "Vilnius, Lithuania",
      category: "Real Estate",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 2,
      title: "BMW X5 2021 Model",
      description: "Excellent condition with low mileage. Full service history and premium package.",
      price: "€45,000",
      location: "Kaunas, Lithuania",
      category: "Vehicles",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Professional DSLR Camera",
      description: "High-end camera with multiple lenses, perfect for photography enthusiasts.",
      price: "€1,200",
      location: "Klaipėda, Lithuania",
      category: "Electronics",
      imageUrl: "/placeholder.svg",
    },
    {
      id: 4,
      title: "Vintage Wooden Desk",
      description: "Beautiful handcrafted wooden desk with three drawers, perfect for a home office.",
      price: "€350",
      location: "Šiauliai, Lithuania",
      category: "Furniture",
      imageUrl: "/placeholder.svg",
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
        <div className="w-full py-12 bg-gradient-to-tr from-[#1a472a] to-[#b8e0d2]">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-white mb-6">Browse Listings</h1>
            <p className="text-white/90 max-w-2xl mb-8">
              Explore our marketplace of items posted by users. Find the perfect match for your needs and preferences.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search for listings..."
                  className="pl-10 rounded-none w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="rounded-none bg-white/90 border-white text-gray-800 hover:bg-white">
                <Filter className="h-4 w-4 mr-2" /> Filters
              </Button>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredListings.map((listing) => (
                <ListingCard
                  key={listing.id}
                  listing={{
                    id: listing.id,
                    title: listing.title,
                    description: listing.description,
                    price: listing.price,
                    location: listing.location,
                    category: listing.category,
                    images: [listing.imageUrl]
                  }}
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
