
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Upload, X, Plus, Save, ArrowLeft } from "lucide-react";
import { CATEGORIES } from "@/lib/constants";
import { Link } from "react-router-dom";

const CreateListing = () => {
  const [images, setImages] = useState<string[]>([]);
  const [features, setFeatures] = useState<string[]>(['']);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages = Array.from(e.target.files).map(file => URL.createObjectURL(file));
      setImages(prev => [...prev, ...newImages]);
    }
  };
  
  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };
  
  const addFeatureField = () => {
    setFeatures(prev => [...prev, '']);
  };
  
  const updateFeature = (index: number, value: string) => {
    setFeatures(prev => prev.map((feature, i) => i === index ? value : feature));
  };
  
  const removeFeature = (index: number) => {
    setFeatures(prev => prev.filter((_, i) => i !== index));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false);
      // Handle form submission logic here
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow px-4 py-24 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-6">
            <Link to="/dashboard" className="text-gray-600 hover:text-primary flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Dashboard
            </Link>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Create New Listing</CardTitle>
              <CardDescription>
                Fill in the details to create your listing. More complete information increases your chances of finding matches.
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input 
                    id="title" 
                    placeholder="Enter a descriptive title" 
                    required 
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select required>
                      <SelectTrigger id="category" className="rounded-none">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {CATEGORIES.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="price">Price (€)</Label>
                    <Input 
                      id="price" 
                      type="number" 
                      placeholder="Enter price" 
                      min="0" 
                      step="0.01" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe your listing in detail" 
                    className="h-32 resize-none"
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Images</Label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {images.map((img, index) => (
                      <div key={index} className="relative aspect-square">
                        <img 
                          src={img} 
                          alt={`Listing image ${index + 1}`} 
                          className="w-full h-full object-cover rounded-sm"
                        />
                        <button 
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute top-1 right-1 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                    <label className="aspect-square border-2 border-dashed border-gray-300 rounded-sm flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                      <div className="text-center">
                        <Upload className="h-6 w-6 mx-auto text-gray-400" />
                        <span className="text-xs text-gray-500 mt-1">Upload Image</span>
                      </div>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={handleImageUpload} 
                        multiple
                      />
                    </label>
                  </div>
                  <p className="text-xs text-gray-500">
                    You can upload up to 10 images. First image will be used as the cover.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label>Features</Label>
                  <div className="space-y-2">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <Input 
                          value={feature}
                          onChange={(e) => updateFeature(index, e.target.value)}
                          placeholder={`Feature ${index + 1}`}
                          className="flex-grow"
                        />
                        <Button 
                          type="button"
                          variant="outline" 
                          size="icon"
                          onClick={() => removeFeature(index)}
                          disabled={features.length === 1}
                          className="shrink-0"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button 
                      type="button"
                      variant="outline" 
                      onClick={addFeatureField}
                      className="w-full mt-2"
                    >
                      <Plus className="h-4 w-4 mr-2" /> Add Feature
                    </Button>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 flex justify-end space-x-4">
                  <Button type="button" variant="outline">
                    Save as Draft
                  </Button>
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating...
                      </div>
                    ) : (
                      <>
                        <Save className="h-4 w-4 mr-2" /> Publish Listing
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreateListing;
