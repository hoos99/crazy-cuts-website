import { TEAM_MEMBERS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section id="about" className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-oswald text-3xl md:text-4xl text-white mb-4 font-bold">
          About Us
        </h2>
        <div className="w-20 h-1 bg-[#C8A448] mx-auto mb-12"></div>

        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-24 justify-center">
          {/* Our Story - Left Side */}
          <div className="lg:w-1/3 relative z-10">
            <div className="bg-[#1C1C1C] p-6 rounded-lg border border-[#C8A448] transform transition-transform hover:scale-105">
              <h3 className="font-montserrat text-xl text-[#C8A448] mb-4 font-bold">
                Our Story
              </h3>
              <div className="font-lora text-gray-300 text-sm space-y-3">
                <p>
                  Founded on the principles of excellence, precision, and style, Crazy Cuts Studio
                  has been the go-to barbershop in Mayfair, Johannesburg for expert fades,
                  sharp cuts, and premium grooming.
                </p>
                <p>
                  With a deep commitment to craftsmanship and attention to detail, we have
                  earned a reputation as the top choice for men's grooming, beard styling,
                  and classic haircuts.
                </p>
              </div>
            </div>

            {/* Connecting Lines - Desktop Only */}
            <div className="hidden lg:block absolute right-0 top-1/2 w-24 h-[200%] -translate-y-1/2">
              {TEAM_MEMBERS.map((_, index) => (
                <div
                  key={`line-${index}`}
                  className={cn(
                    "absolute left-0 w-full h-[1px] bg-[#C8A448] opacity-60",
                    "before:absolute before:right-0 before:top-1/2 before:-translate-y-1/2",
                    "before:w-1.5 before:h-1.5 before:bg-[#C8A448] before:rounded-full",
                    {
                      "top-[16.67%]": index === 0,
                      "top-[50%]": index === 1,
                      "top-[83.33%]": index === 2,
                    }
                  )}
                />
              ))}
            </div>
          </div>

          {/* Meet Our Team - Right Side */}
          <div className="lg:w-1/2 space-y-8">
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={member.name}
                className={cn(
                  "bg-[#1C1C1C] p-6 rounded-lg border border-[#C8A448]",
                  "transform transition-all duration-500",
                  "hover:scale-105 hover:z-10",
                  "animate-fade-in",
                  { "animation-delay-100": index === 0 },
                  { "animation-delay-200": index === 1 },
                  { "animation-delay-300": index === 2 }
                )}
              >
                <div className="mb-4">
                  <h4 className="font-oswald text-xl text-white font-bold">
                    {member.title}: {member.name}
                  </h4>
                  <p className="text-[#C8A448] mb-2 font-bold">{member.role}</p>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;