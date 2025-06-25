import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  text = "กำลังโหลด...",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <div
      className={`flex flex-col items-center justify-center p-8 min-h-screen ${className}`}
    >
      {/* Animated Battery Icon */}
      <div className="relative mb-4">
        <div className={`${sizeClasses[size]} relative`}>
          {/* Battery Body */}
          <div className="w-full h-full border-2 border-blue-600 rounded-lg relative overflow-hidden">
            {/* Battery Terminal */}
            <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-1/2 bg-blue-600 rounded-r"></div>

            {/* Animated Battery Level */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>

            {/* Battery Level Indicator */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-blue-600 animate-bounce"></div>
          </div>

          {/* Rotating Dots */}
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
          <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Loading Text */}
      <div className={`text-center ${textSizes[size]}`}>
        <p className="text-gray-600 font-medium animate-pulse">{text}</p>
        <div className="flex justify-center mt-2 space-x-1">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
          <div
            className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
