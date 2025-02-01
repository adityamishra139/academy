import React from "react";

// Card Component
export const Card = ({ children, className = "", onClick }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

// Card Content Component
export const CardContent = ({ children, className = "" }) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

// Card Image Component
export const CardImage = ({ src, alt, className = "" }) => {
  return (
    <div className="relative h-48 overflow-hidden">
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-300 hover:scale-110 ${className}`}
      />
    </div>
  );
};

// Card Title Component
export const CardTitle = ({ children, className = "" }) => {
  return <h3 className={`text-xl font-semibold mb-2 ${className}`}>{children}</h3>;
};

// Card Description Component
export const CardDescription = ({ children, className = "" }) => {
  return <p className={`text-sm text-gray-600 ${className}`}>{children}</p>;
};
