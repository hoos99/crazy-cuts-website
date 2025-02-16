import { CONTACT_INFO } from "@/lib/constants";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const images = [
    {
      src: "/6e6102a2-2c66-4ae6-844b-766dc7abef7e.JPG",
      alt: "Gallery image 1"
    },
    {
      src: "/f5fc9757-1f9f-4179-afb4-33e46cddcc84.JPG",
      alt: "Gallery image 2"
    },
    {
      src: "/69b5290b-543b-4fa5-8db6-fd06a02cbe6d.JPG",
      alt: "Gallery image 3"
    },
    {
      src: "/a0c49655-1c3f-4a9c-805a-60e64b0b5080.JPG",
      alt: "Gallery image 4"
    }
  ];

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
    <section id="gallery" className="py-20 bg-[#1C1C1C]">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-oswald text-3xl md:text-4xl text-white mb-4 font-bold">
          Our Gallery
        </h2>
        <div className="w-20 h-1 bg-[#C8A448] mx-auto mb-12"></div>

        <div className="relative max-w-4xl mx-auto h-[500px] perspective-1000">
          <div className="relative w-full h-full transform-style-3d">
            {images.map((image, index) => {
              const rotation = (index - currentIndex) * 90;
              const imageUrl = `/api/static${image.src}`;

              return (
                <div
                  key={index}
                  className="absolute inset-0 w-full h-full preserve-3d backface-hidden"
                  style={{
                    transform: `rotateY(${rotation}deg) translateZ(400px)`,
                    transition: "transform 0.8s ease-out",
                    opacity: Math.abs(rotation % 360) === 0 ? 1 : 0.5
                  }}
                >
                  <img
                    src={imageUrl}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded-lg shadow-2xl"
                  />
                </div>
              );
            })}
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
        {/* Instagram Feed Link */}
        <div className="text-center mt-12">
          <a
            href={CONTACT_INFO.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#C8A448] hover:text-white transition-colors"
          >
            <span className="mr-2">Follow us on Instagram</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;