import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ListingCard from "@/components/ListingCard";
import {
  User,
  Plus,
  Settings,
  LogOut,
  Heart,
  Clock,
  ShoppingBag,
  MessageSquare,
} from "lucide-react";
import { Listing } from "@/lib/constants";

const Dashboard = () => {
  // Mock data for demonstration
  const myListings: Listing[] = [
    {
      id: 1,
      title: "Modern apartment in city center",
      description:
        "A beautiful apartment with 2 bedrooms, fully furnished and renovated.",
      price: "150000",
      category: "Real Estate",
      images: ["/modernApartment2.jpg"],
      location: "Vilnius, Lithuania",
    },
    {
      id: 2,
      title: "2019 Toyota Camry Hybrid",
      description: "Low mileage, excellent condition, regularly serviced.",
      price: "25000",
      category: "Vehicles",
      images: ["ToyotaCamry.jpg"],
      location: "Kaunas, Lithuania",
    },
  ];

  const savedListings: Listing[] = [
    {
      id: 3,
      title: "Elegant house with garden",
      description:
        "Spacious 4-bedroom house with a beautiful garden and modern amenities.",
      price: "320000",
      category: "Real Estate",
      images: ["/GardenHouse.jpg"],
      location: "Vilnius, Lithuania",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-sun-down">
      <Navbar />

      <main className="flex-grow px-4 py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Sidebar */}
            <div className="md:col-span-3">
              <Card className="sticky top-24 bg-white">
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                      <User className="h-8 w-8 text-gray-500" />
                    </div>
                    <div>
                      <CardTitle>Mantas Nesvarbu</CardTitle>
                      <CardDescription>Mantas@EasyFlow.lt</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-2 bg-gray-100">
                        <p className="text-xl font-semibold">
                          {myListings.length}
                        </p>
                        <p className="text-sm text-gray-500">My Listings</p>
                      </div>
                      <div className="text-center p-2 bg-gray-100">
                        <p className="text-xl font-semibold">
                          {savedListings.length}
                        </p>
                        <p className="text-sm text-gray-500">Saved</p>
                      </div>
                    </div>

                    <div className="pt-4 space-y-2">
                      <Button
                        variant="outline"
                        className="w-full justify-start rounded-none"
                      >
                        <Settings className="h-4 w-4 mr-2" /> Account Settings
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full justify-start rounded-none"
                      >
                        <Clock className="h-4 w-4 mr-2" /> Purchase History
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start rounded-none"
                      >
                        <MessageSquare className="h-4 w-4 mr-2" /> Messages
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full justify-start rounded-none text-destructive"
                      >
                        <LogOut className="h-4 w-4 mr-2" /> Sign Out
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="md:col-span-9">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                <Button className="rounded-none">
                  <Plus className="h-4 w-4 mr-2" />{" "}
                  <Link to="/create-listing">New Listing</Link>
                </Button>
              </div>

              <Tabs defaultValue="listings">
                <TabsList className="grid grid-cols-3 mb-8">
                  <TabsTrigger
                    value="listings"
                    className="rounded-none border-solid border-2 border-gray-50 bg-white/20"
                  >
                    My Listings
                  </TabsTrigger>
                  <TabsTrigger
                    value="saved"
                    className="rounded-none border-solid border-2 border-gray-50 bg-white/20"
                  >
                    Saved Items
                  </TabsTrigger>
                  <TabsTrigger
                    value="recommendations"
                    className="rounded-none border-solid border-2 border-gray-50 bg-white/20"
                  >
                    Recommendations
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="listings" className="space-y-6">
                  {myListings.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {myListings.map((listing) => (
                        <ListingCard key={listing.id} listing={listing} />
                      ))}
                      <Link to="/create-listing">
                        <Card className="flex flex-col items-center justify-center h-full border-dashed border-2 border-gray-300 bg-gray-40 hover:bg-gray-50 transition-colors cursor-pointer">
                          <CardContent className="flex flex-col items-center justify-center py-12">
                            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                              <Plus className="h-6 w-6 text-gray-500" />
                            </div>
                            <p className="text-gray-600 font-medium">
                              Add New Listing
                            </p>
                          </CardContent>
                        </Card>
                      </Link>
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-gray-50">
                      <ShoppingBag className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900">
                        No listings yet
                      </h3>
                      <p className="mt-1 text-gray-500">
                        Get started by creating a new listing.
                      </p>
                      <div className="mt-6">
                        <Link to="/create-listing">
                          <Button>
                            <Plus className="h-4 w-4 mr-2" /> Add New Listing
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="saved" className="space-y-6">
                  {savedListings.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {savedListings.map((listing) => (
                        <ListingCard key={listing.id} listing={listing} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-gray-50">
                      <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900">
                        No saved items
                      </h3>
                      <p className="mt-1 text-gray-500">
                        Items you save will appear here.
                      </p>
                      <div className="mt-6">
                        <Button variant="outline">Browse Listings</Button>
                      </div>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="recommendations" className="space-y-6">
                  <div className="text-center py-12 bg-gray-50">
                    <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Settings className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Set up your preferences
                    </h3>
                    <p className="mt-1 text-gray-500 max-w-md mx-auto">
                      Complete your profile with your preferences to receive
                      personalized recommendations.
                    </p>
                    <div className="mt-6">
                      <Button>Complete Profile</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
