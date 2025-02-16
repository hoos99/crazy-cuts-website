import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Scissors } from "lucide-react";
import { FaFemale } from "react-icons/fa";
import { GiRazor, GiHealthNormal } from "react-icons/gi";

const Services = () => {
  const services = [
    {
      name: "HAIRDRESSING",
      description: "Discover the Legendary <span className="text-[#FF0000] animate-glow-pulse-red">JEENO FADE</span>, cover greys or refresh your color, or opt for a classic trim—perfect for men and children of all ages.",
      icon: Scissors
    },
    {
      name: "SHAVING & GROOMING",
      description: "From classic shaves and modern steam treatments to quick waxing solutions for a polished look—ideal for men who value impeccable style.",
      icon: GiRazor
    },
    {
      name: "SCRUBS & FACIALS",
      description: "From a quick scrub to a luxurious facial—or even a soothing head massage—treat yourself to the perfect rejuvenation for mind and skin.",
      icon: GiHealthNormal
    },
    {
      name: "LADIES' WAX & THREAD",
      description: "Perfectly shaped brows, a smooth upper lip—enhance your natural beauty with gentle, precise treatments.",
      icon: FaFemale
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#1C1C1C]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-oswald text-3xl md:text-4xl text-white mb-4 font-bold">
            The Legendary Fade Experience | Sharp Cuts & Grooming
          </h2>
          <p className="text-[#C8A448] text-sm uppercase tracking-wider mb-4 font-bold">
            WHY CHOOSE US
          </p>
          <div className="w-20 h-1 bg-[#C8A448] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card
              key={service.name}
              className="bg-transparent border-none hover:scale-105 transition-transform duration-300"
            >
              <CardHeader className="text-center pb-2">
                <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center">
                  <service.icon className="w-8 h-8 text-[#C8A448]" />
                </div>
                <h3 className="font-montserrat text-xl text-white font-bold">
                  {service.name}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-center text-sm font-medium">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;