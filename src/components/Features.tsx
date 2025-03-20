
import { 
  User, Home, Car, ShoppingBag, Briefcase, 
  Heart, Headphones, Send 
} from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="feature-card animate-fade-in">
    <div className="feature-icon">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <User style={{ width: '1.5rem', height: '1.5rem' }} />,
      title: "Personalized Recommendations",
      description: "Get tailored suggestions based on your personality, preferences and needs."
    },
    {
      icon: <Home style={{ width: '1.5rem', height: '1.5rem' }} />,
      title: "Real Estate Matchmaking",
      description: "Find your perfect home that matches your lifestyle and aesthetic preferences."
    },
    {
      icon: <Car style={{ width: '1.5rem', height: '1.5rem' }} />,
      title: "Vehicle Selection",
      description: "Discover the ideal car that fits your practical needs and personal style."
    },
    {
      icon: <ShoppingBag style={{ width: '1.5rem', height: '1.5rem' }} />,
      title: "Shopping Assistant",
      description: "Let us help you find products that truly match your personal taste."
    },
    {
      icon: <Briefcase style={{ width: '1.5rem', height: '1.5rem' }} />,
      title: "Career Guidance",
      description: "Get insights on job opportunities that align with your skills and personality."
    },
    {
      icon: <Heart style={{ width: '1.5rem', height: '1.5rem' }} />,
      title: "Relationship Advice",
      description: "Receive suggestions for compatible partners based on your character traits."
    },
    {
      icon: <Headphones style={{ width: '1.5rem', height: '1.5rem' }} />,
      title: "Music Recommendations",
      description: "Discover new music that resonates with your mood and preferences."
    },
    {
      icon: <Send style={{ width: '1.5rem', height: '1.5rem' }} />,
      title: "Travel Planning",
      description: "Find destinations and accommodations that match your travel style."
    },
  ];

  return (
    <section className="features-section">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Make Better Decisions, Effortlessly</h2>
          <p className="text-gray-200">
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
