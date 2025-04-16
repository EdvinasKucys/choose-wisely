import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Upload,
  Camera,
  Smile,
  FileText,
  Check,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const GetRecommendation = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [preferences, setPreferences] = useState({
    personality: {
      extraversion: 50,
      conscientiousness: 50,
      openness: 50,
      agreeableness: 50,
      neuroticism: 50,
    },
    budget: "",
    category: "",
    requirements: "",
  });

  const handleSliderChange = (
    trait: keyof typeof preferences.personality,
    value: number[]
  ) => {
    setPreferences((prev) => ({
      ...prev,
      personality: {
        ...prev.personality,
        [trait]: value[0],
      },
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPreferences((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => {
    if (step < 4) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = () => {
    setLoading(true);

    // Simulating loading process with scan line and percentage
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setLoading(false);

          // Show success message
          toast({
            title: "Analysis Complete",
            description: "Your personal recommendation is ready!",
            variant: "default",
          });

          // Go to results
          setStep(4);
          return 0;
        }
        return prev + 5;
      });
    }, 200);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-24 pb-16 bg-gradient-to-tr from-[#254441] to-[#7FC8A9]">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Personalized Recommendations
          </h1>
          <p className="text-white/90 max-w-3xl mb-8">
            Let our system analyze your preferences, personality traits, and
            needs to find the perfect match for you.
          </p>

          {/* Progress Steps */}
          <div className="flex justify-between mb-12 max-w-3xl mx-auto">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-none border ${
                    step >= stepNumber
                      ? "bg-white text-primary border-white"
                      : "bg-transparent text-white/70 border-white/50"
                  }`}
                >
                  {step > stepNumber ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    stepNumber
                  )}
                </div>
                <span
                  className={`text-xs mt-2 ${
                    step >= stepNumber ? "text-white" : "text-white/70"
                  }`}
                >
                  {stepNumber === 1 && "Basic Info"}
                  {stepNumber === 2 && "Personality"}
                  {stepNumber === 3 && "Preferences"}
                  {stepNumber === 4 && "Results"}
                </span>
              </div>
            ))}
          </div>

          <Card className="max-w-3xl mx-auto bg-white/95 backdrop-blur shadow-lg rounded-none border-white/20 overflow-hidden">
            {/* Loading Overlay */}
            {loading && (
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                <div className="w-full h-full relative">
                  <div
                    className="scan-line"
                    style={{
                      top: `${progress}%`,
                      height: "8px",
                      background: "rgba(255, 255, 0, 0.7)",
                    }}
                  ></div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-white text-xl font-semibold">
                    Analyzing your profile...
                  </div>
                  <div className="mt-2 bg-white/20 w-64 h-2 rounded-none overflow-hidden">
                    <div
                      className="bg-white h-full"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="mt-2 text-white">{progress}%</div>
                </div>
              </div>
            )}

            <div className="p-6 md:p-8">
              {/* Step 1: Basic Info */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">Basic Information</h2>
                  <p className="text-gray-600">
                    Let's start with some basic information about what you're
                    looking for.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="category">
                        What category are you interested in?
                      </Label>
                      <Input
                        id="category"
                        name="category"
                        placeholder="e.g., Real Estate, Vehicles, Electronics"
                        className="rounded-none mt-1"
                        value={preferences.category}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div>
                      <Label htmlFor="budget">What's your budget?</Label>
                      <Input
                        id="budget"
                        name="budget"
                        placeholder="e.g., €50,000"
                        className="rounded-none mt-1"
                        value={preferences.budget}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="flex flex-col space-y-4">
                      <Label>Upload a photo of yourself (optional)</Label>
                      <Button variant="outline" className="rounded-none">
                        <Upload className="h-4 w-4 mr-2" /> Browse Files
                      </Button>
                      <p className="text-xs text-gray-500">
                        Your photo helps our AI understand your style
                        preferences better. We'll never share your photo with
                        others.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Personality Traits */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">
                    Your Personality Profile
                  </h2>
                  <p className="text-gray-600">
                    Adjust the sliders to reflect your personality traits. This
                    helps us make better recommendations.
                  </p>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label>Introversion</Label>
                        <Label>Extraversion</Label>
                      </div>
                      <Slider
                        value={[preferences.personality.extraversion]}
                        min={0}
                        max={100}
                        step={1}
                        onValueChange={(value) =>
                          handleSliderChange("extraversion", value)
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label>Practical</Label>
                        <Label>Imaginative</Label>
                      </div>
                      <Slider
                        value={[preferences.personality.openness]}
                        min={0}
                        max={100}
                        step={1}
                        onValueChange={(value) =>
                          handleSliderChange("openness", value)
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label>Spontaneous</Label>
                        <Label>Organized</Label>
                      </div>
                      <Slider
                        value={[preferences.personality.conscientiousness]}
                        min={0}
                        max={100}
                        step={1}
                        onValueChange={(value) =>
                          handleSliderChange("conscientiousness", value)
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label>Critical</Label>
                        <Label>Agreeable</Label>
                      </div>
                      <Slider
                        value={[preferences.personality.agreeableness]}
                        min={0}
                        max={100}
                        step={1}
                        onValueChange={(value) =>
                          handleSliderChange("agreeableness", value)
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label>Calm</Label>
                        <Label>Reactive</Label>
                      </div>
                      <Slider
                        value={[preferences.personality.neuroticism]}
                        min={0}
                        max={100}
                        step={1}
                        onValueChange={(value) =>
                          handleSliderChange("neuroticism", value)
                        }
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Specific Requirements */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold">
                    Specific Requirements
                  </h2>
                  <p className="text-gray-600">
                    Tell us more about your specific needs and preferences.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="requirements">
                        What specific features or requirements are important to
                        you?
                      </Label>
                      <Textarea
                        id="requirements"
                        name="requirements"
                        placeholder="e.g., For a car: fuel efficiency, safety features, space for family, etc."
                        className="rounded-none mt-1 h-32"
                        value={preferences.requirements}
                        onChange={handleInputChange}
                      />
                    </div>

                    <p className="text-sm text-gray-500">
                      The more details you provide, the better our
                      recommendations will be.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 4: Results */}
              {step === 4 && (
                <div className="space-y-6">
                  <div className="bg-primary/10 p-4 rounded-none border border-primary/20">
                    <h2 className="text-2xl font-semibold text-primary">
                      Your Personalized Recommendation
                    </h2>
                    <p className="text-gray-600 mt-2">
                      Based on your preferences, personality profile, and
                      requirements, we've found these perfect matches for you.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="rounded-none overflow-hidden border border-gray-200">
                      <div className="h-48 bg-gray-200 flex items-center justify-center">
                        <img
                          src="/bmw.jpg"
                          alt="Recommendation"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold">BMW X3 2020</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          This vehicle matches your practical yet stylish
                          personality, with excellent safety features and the
                          right size for your needs.
                        </p>
                        <p className="font-medium mt-2">€38,500</p>
                        <Button className="w-full mt-3 rounded-none">
                          View Details
                        </Button>
                      </div>
                    </Card>

                    <Card className="rounded-none overflow-hidden border border-gray-200">
                      <div className="h-48 bg-gray-200 flex items-center justify-center">
                        <img
                          src="/audi.jpg"
                          alt="Recommendation"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold">Audi Q5 2021</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Perfect balance of luxury and functionality, aligning
                          with your organized and detail-oriented nature.
                        </p>
                        <p className="font-medium mt-2">€42,800</p>
                        <Button className="w-full mt-3 rounded-none">
                          View Details
                        </Button>
                      </div>
                    </Card>
                  </div>

                  <p className="text-center text-sm text-gray-500 mt-4">
                    These recommendations are based on our analysis of your
                    profile and available listings.
                  </p>

                  <div className="flex justify-center mt-6">
                    <Link to="/browse">
                      <Button className="rounded-none">
                        Browse More Recommendations{" "}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-10">
                {step > 1 && (
                  <Button
                    variant="outline"
                    className="rounded-none"
                    onClick={prevStep}
                  >
                    Back
                  </Button>
                )}

                {step < 3 && (
                  <Button className="rounded-none ml-auto" onClick={nextStep}>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}

                {step === 3 && (
                  <Button
                    className="rounded-none ml-auto"
                    onClick={handleSubmit}
                  >
                    Get Recommendations <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}

                {step === 4 && (
                  <Button
                    className="rounded-none ml-auto"
                    onClick={() => setStep(1)}
                  >
                    Start New Search
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GetRecommendation;
