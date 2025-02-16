import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Tusshar Das",
    text: "Hands down the best cut I've ever had! The vibe is lekker, the service is top-notch, and the attention to detail is unreal. Whether it's a fade or a classic cut, these gents know their craft. Definitely my go-to spot!",
    rating: 5
  },
  {
    name: "Hoos",
    text: "Jeeno is a legend, but let me tell you, Minhaz is just as sharp! Gave me a fresh fade with his own spin, and now I know I can trust either of them. No more waiting in long lines—quality cuts all round!",
    rating: 5
  },
  {
    name: "Jamz Khan",
    text: "That hot towel shave? Yoh, next level! Left me feeling fresh and looking sharp. The service is worth every cent, and the team makes you feel right at home. Crazy Cuts is the only place I trust!",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-oswald text-3xl md:text-4xl text-white mb-4">
          Client Testimonials
        </h2>
        <div className="w-20 h-1 bg-[#C8A448] mx-auto mb-12"></div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <Quote className="w-12 h-12 text-[#C8A448]" />
          </div>

          <Card className="bg-[#1C1C1C] border-[#C8A448]">
            <CardContent className="pt-12 pb-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`text-center transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0 hidden"
                  }`}
                >
                  <p className="font-lora text-gray-300 text-lg mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#C8A448] mx-1">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-white font-montserrat">
                    {testimonial.name}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#C8A448]" : "bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;