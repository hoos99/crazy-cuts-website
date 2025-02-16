import { CONTACT_INFO } from "@/lib/constants";

const Gallery = () => {
  const images = [
    "/6e6102a2-2c66-4ae6-844b-766dc7abef7e.JPG",
    "/IMG_7674.JPG",
    "/69b5290b-543b-4fa5-8db6-fd06a02cbe6d.JPG",
    "/a0c49655-1c3f-4a9c-805a-60e64b0b5080.JPG",
    "/e93e4c38-5381-4b77-af7a-f1c36f26794a.JPG",
    "/f9efee92-d17a-4a01-8231-325e002761c4.JPG"
  ];

  return (
    <section id="gallery" className="py-20 bg-[#1C1C1C]">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-oswald text-3xl md:text-4xl text-white mb-4">
          Our Gallery
        </h2>
        <div className="w-20 h-1 bg-[#C8A448] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden group aspect-square"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  console.error(`Failed to load image: ${image}`);
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
            </div>
          ))}
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