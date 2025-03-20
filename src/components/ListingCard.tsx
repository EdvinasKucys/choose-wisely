
import { Eye, Heart } from "lucide-react";
import { useState } from "react";

interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  features: string[];
  createdAt: Date;
  userId: string;
}

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
    <div 
      className="listing-card card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative" style={{ height: '12rem', overflow: 'hidden' }}>
        <img 
          src={listing.images[0] || "/placeholder.svg"} 
          alt={listing.title}
          className="listing-image"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
          <button 
            className="btn-sm"
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={handleSaveClick}
          >
            <Heart 
              style={{ 
                width: '1rem', 
                height: '1rem',
                color: isSaved ? '#ef4444' : '#4b5563',
                fill: isSaved ? '#ef4444' : 'none'
              }} 
            />
          </button>
        </div>
        <div style={{ position: 'absolute', bottom: '8px', left: '8px' }}>
          <span className="badge badge-secondary">
            {listing.category}
          </span>
        </div>
      </div>
      
      <div className="p-4 pb-2">
        <h3 className="text-lg font-semibold line-clamp-1">{listing.title}</h3>
        <div className="flex items-center">
          <span className="font-medium text-primary">${listing.price.toLocaleString()}</span>
        </div>
      </div>
      
      <div className="p-4 pt-2">
        <p className="text-gray-600 text-sm line-clamp-2">{listing.description}</p>
        
        <div className="mt-3 flex flex-wrap gap-1">
          {listing.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="badge badge-outline text-xs">
              {feature}
            </span>
          ))}
          {listing.features.length > 3 && (
            <span className="badge badge-outline text-xs">
              +{listing.features.length - 3} more
            </span>
          )}
        </div>
      </div>
      
      <div className="p-4 pt-0 flex justify-between">
        <button 
          className="btn btn-outline w-full"
          style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
          onClick={() => onView && onView(listing)}
        >
          <Eye style={{ width: '1rem', height: '1rem', marginRight: '0.5rem' }} /> View Details
        </button>
      </div>
    </div>
  );
};

export default ListingCard;
