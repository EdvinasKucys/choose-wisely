
import { useState, useEffect } from "react";

interface LoadingIndicatorProps {
  progress?: number;
  showPercentage?: boolean;
  showScanLine?: boolean;
  message?: string;
}

const LoadingIndicator = ({ 
  progress, 
  showPercentage = true, 
  showScanLine = true,
  message = "Loading..."
}: LoadingIndicatorProps) => {
  const [currentProgress, setCurrentProgress] = useState(progress || 0);
  
  // If no progress is provided, simulate progress
  useEffect(() => {
    if (progress === undefined) {
      const interval = setInterval(() => {
        setCurrentProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return Math.min(prev + Math.random() * 5, 100);
        });
      }, 200);
      
      return () => clearInterval(interval);
    } else {
      setCurrentProgress(progress);
    }
  }, [progress]);
  
  return (
    <div className="w-full max-w-md mx-auto py-8">
      <div className="text-center mb-4">
        <p className="text-gray-600 font-medium">{message}</p>
        {showPercentage && (
          <p className="text-2xl font-bold text-primary mt-2">
            {Math.round(currentProgress)}%
          </p>
        )}
      </div>
      
      <div className="relative h-2 bg-gray-200 overflow-hidden">
        <div 
          className="absolute h-full bg-primary transition-all duration-300 ease-out"
          style={{ width: `${currentProgress}%` }}
        ></div>
        
        {showScanLine && currentProgress < 100 && (
          <div className="absolute inset-0">
            <div className="scan-line"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingIndicator;
