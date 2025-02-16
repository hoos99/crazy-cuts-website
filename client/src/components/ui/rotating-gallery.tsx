
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface RotatingGalleryProps {
  className?: string;
}

const images = [
  "/6e6102a2-2c66-4ae6-844b-766dc7abef7e.JPG",
  "/f5fc9757-1f9f-4179-afb4-33e46cddcc84.JPG",
  "/69b5290b-543b-4fa5-8db6-fd06a02cbe6d.JPG",
  "/a0c49655-1c3f-4a9c-805a-60e64b0b5080.JPG"
];

export const RotatingGallery = ({ className }: RotatingGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

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
      <div className="relative w-full h-full [perspective:1000px]">
        <div 
          className="relative w-full h-full [transform-style:preserve-3d] transition-transform duration-500"
          style={{
            transformOrigin: "50% 50% -125px",
            transform: `translate3d(0, 0, 0) rotateY(${-currentIndex * 90}deg)`
          }}
        >
          {images.map((image, index) => {
            const zTranslate = 125;
            const xTranslate = zTranslate * Math.sin(index * Math.PI / 2);
            const zOffset = zTranslate * Math.cos(index * Math.PI / 2);

            return (
              <div
                key={image}
                className="absolute w-full h-full backface-hidden"
                style={{
                  transform: `rotateY(${index * 90}deg) translate3d(${xTranslate}px, 0, ${zOffset}px)`,
                }}
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0 bg-black/20"
                  style={{
                    opacity: index === currentIndex ? 0 : 0.5
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={handlePrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
