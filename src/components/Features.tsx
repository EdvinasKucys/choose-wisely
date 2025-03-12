
import { 
  User, Home, Car, ShoppingBag, Briefcase, 
  Heart, Headphones, Bookmark, Send 
} from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="group p-6 bg-white border border-gray-100 rounded-none shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in">
    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-none mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <User className="h-6 w-6" />,
      title: "Personalized Recommendations",
      description: "Get tailored suggestions based on your personality, preferences and needs."
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Real Estate Matchmaking",
      description: "Find your perfect home that matches your lifestyle and aesthetic preferences."
    },
    {
      icon: <Car className="h-6 w-6" />,
      title: "Vehicle Selection",
      description: "Discover the ideal car that fits your practical needs and personal style."
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      title: "Shopping Assistant",
      description: "Let us help you find products that truly match your personal taste."
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Career Guidance",
      description: "Get insights on job opportunities that align with your skills and personality."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Relationship Advice",
      description: "Receive suggestions for compatible partners based on your character traits."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Music Recommendations",
      description: "Discover new music that resonates with your mood and preferences."
    },
    {
      icon: <Send className="h-6 w-6" />,
      title: "Travel Planning",
      description: "Find destinations and accommodations that match your travel style."
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Make Better Decisions, Effortlessly</h2>
          <p className="text-gray-600">
            Our platform helps you navigate choices across all aspects of life, 
            from major purchases to everyday decisions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
