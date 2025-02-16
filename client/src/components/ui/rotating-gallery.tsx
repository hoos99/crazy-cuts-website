import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface RotatingGalleryProps {
  className?: string;
}

const images = [
  "/69b5290b-543b-4fa5-8db6-fd06a02cbe6d.JPG",
  "/6e6102a2-2c66-4ae6-844b-766dc7abef7e.JPG",
  "/a0c49655-1c3f-4a9c-805a-60e64b0b5080.JPG",
  "/e93e4c38-5381-4b77-af7a-f1c36f26794a.JPG"
];

export const RotatingGallery = ({ className }: RotatingGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={`relative w-full max-w-sm mx-auto h-[250px] ${className}`}>
      <div className="relative w-full h-full perspective-1000">
        <div className="relative w-full h-full transform-style-3d">
          {images.map((image, index) => {
            const rotation = (index - currentIndex) * 90;

            return (
              <div
                key={index}
                className="absolute inset-0 w-full h-full preserve-3d backface-hidden"
                style={{
                  transform: `rotateY(${rotation}deg) translateZ(300px)`,
                  transition: "transform 0.8s ease-out",
                  opacity: Math.abs(rotation % 360) === 0 ? 1 : 0.5
                }}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#C8A448] transition-colors z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#C8A448] transition-colors z-10"
        aria-label="Next image"
      >
        <ChevronRight size={40} />
      </button>
    </div>
  );
};