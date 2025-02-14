import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-[#1C1C1C]">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-oswald text-3xl md:text-4xl text-white mb-4">
          Our Services
        </h2>
        <div className="w-20 h-1 bg-[#C8A448] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <Card
              key={service.name}
              className="bg-black border-[#C8A448] hover:scale-105 transition-transform duration-300"
            >
              <CardHeader>
                <h3 className="font-montserrat text-xl text-[#C8A448]">
                  {service.name}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="font-lora text-gray-300 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-oswald text-white">
                    ${service.price}
                  </span>
                  <span className="text-sm text-gray-400">{service.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
