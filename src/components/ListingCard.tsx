import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Heart } from "lucide-react";
import { Listing } from "@/lib/constants";
import { useState } from "react";

interface ListingCardProps {
  listing: Listing;
  onView?: (listing: Listing) => void;
  onSave?: (listing: Listing) => void;
}

const ListingCard = ({ listing, onView, onSave }: ListingCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
    if (onSave) onSave(listing);
  };

  return (
    <Card
      className="overflow-hidden border-gray-200 transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={listing.images[0] || "/placeholder.svg"}
          alt={listing.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        <div className="absolute top-2 right-2">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white"
            onClick={handleSaveClick}
          >
            <Heart
              className={`h-4 w-4 ${
                isSaved ? "fill-red-500 text-red-500" : "text-gray-600"
              }`}
            />
          </Button>
        </div>
        <div className="absolute bottom-2 left-2">
          <Badge
            variant="secondary"
            className="bg-white/80 backdrop-blur-sm text-primary"
          >
            {listing.category}
          </Badge>
        </div>
      </div>

      <CardHeader className="p-4 pb-2">
        <CardTitle className="text-lg line-clamp-1">{listing.title}</CardTitle>
        <CardDescription className="flex items-center">
          <span className="font-medium text-primary">
            ${listing.price.toLocaleString()}
          </span>
        </CardDescription>
      </CardHeader>

      <CardContent className="p-4 pt-2">
        <p className="text-gray-600 text-sm line-clamp-2">
          {listing.description}
        </p>

        {/* <div className="mt-3 flex flex-wrap gap-1">
          {listing.features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="outline" className="bg-gray-50 text-xs">
              {feature}
            </Badge>
          ))}
          {listing.features.length > 3 && (
            <Badge variant="outline" className="bg-gray-50 text-xs">
              +{listing.features.length - 3} more
            </Badge>
          )}
        </div> */}
      </CardContent>

      <CardFooter className="p-4 pt-0 flex justify-between">
        <Button
          variant="outline"
          size="sm"
          className="w-full rounded-none"
          onClick={() => onView && onView(listing)}
        >
          <Eye className="h-4 w-4 mr-2" /> View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ListingCard;
