import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Scissors } from "lucide-react";
import { FaUserNinja, FaUserAlt } from "react-icons/fa";
import { GiRazor } from "react-icons/gi";

const Services = () => {
  const services = [
    {
      name: "HAIRDRESSING",
      description: "Clippers or scissors for men, women and children",
      icon: Scissors
    },
    {
      name: "SHAVING",
      description: "Full shave or traditional head shave",
      icon: GiRazor
    },
    {
      name: "BEARD",
      description: "Beard fade with clippers, beard outline or sculpted beard trimmed",
      icon: FaUserAlt
    },
    {
      name: "MUSTACHE",
      description: "Cutting and carving",
      icon: FaUserNinja
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#1C1C1C]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-oswald text-3xl md:text-4xl text-white mb-4">
            SERVICES
          </h2>
          <p className="text-[#C8A448] text-sm uppercase tracking-wider mb-4">
            LISTENING AND PRECISION
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
                <h3 className="font-montserrat text-xl text-white">
                  {service.name}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-center text-sm">
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