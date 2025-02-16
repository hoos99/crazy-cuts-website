import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface RotatingGalleryProps {
  className?: string;
}

const images = [
  "/69b5290b-543b-4fa5-8db6-fd06a02cbe6d.JPG",
  "/6e6102a2-2c66-4ae6-844b-766dc7abef7e.JPG",
  "/IMG_7674.JPG",
  "/a0c49655-1c3f-4a9c-805a-60e64b0b5080.JPG",
  "/e93e4c38-5381-4b77-af7a-f1c36f26794a.JPG",
  "/f9efee92-d17a-4a01-8231-325e002761c4.JPG"
];

export const RotatingGallery = ({ className }: RotatingGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

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
    <div className={`relative w-full max-w-sm mx-auto h-[400px] ${className}`}>
      <div className="absolute inset-0 [perspective:1000px]">
        <div 
          className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-500"
          style={{
            transform: `translateZ(-200px) rotateY(${-currentIndex * 90}deg)`
          }}
        >
          {images.map((image, index) => {
            const rotation = index * 90;
            const translateZ = 200;

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
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 rounded-lg" />
                <div className="absolute inset-0 shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-lg" />
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={handlePrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};