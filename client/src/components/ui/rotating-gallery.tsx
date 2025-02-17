import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface RotatingGalleryProps {
  className?: string;
}

const images = [
  "/static/Screenshot 2025-02-16 211934.png",
  "/static/Screenshot 2025-02-16 212255.png",
  "/static/Screenshot 2025-02-16 212330.png",
  "/static/Screenshot 2025-02-16 212410.png"
];

export const RotatingGallery = ({ className }: RotatingGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Increased rotation interval

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
    <div className={`relative w-full max-w-[200px] mx-auto h-[300px] ${className}`}>
      <div className="absolute inset-0 [perspective:800px]">
        <div 
          className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateZ(-150px) rotateY(${-currentIndex * 90}deg)`
          }}
        >
          {images.map((image, index) => {
            const rotation = index * 90;
            const translateZ = 150;

            return (
              <div
                key={image}
                className="absolute w-full h-full backface-visible"
                style={{
                  transform: `rotateY(${rotation}deg) translateZ(${translateZ}px)`,
                }}
              >
                <img
                  src={image}
                  alt={`Professional barbershop image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
                <div className="absolute inset-0 shadow-[0_0_10px_rgba(0,0,0,0.2)]" />
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={handlePrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-1 bg-black/30 text-white rounded-full hover:bg-black/50 transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-black/30 text-white rounded-full hover:bg-black/50 transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};