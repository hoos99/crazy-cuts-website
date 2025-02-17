import { TEAM_MEMBERS } from "@/lib/constants";
import { RotatingGallery } from "@/components/ui/rotating-gallery";

const About = () => {
  return (
    <section id="about" className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-oswald text-3xl md:text-4xl text-white mb-4 font-bold">
          About Us
        </h2>
        <div className="w-20 h-1 bg-[#C8A448] mx-auto mb-12"></div>

        {/* Mind map layout container */}
        <div className="relative">
          {/* Desktop layout */}
          <div className="hidden md:flex justify-between items-start gap-16">
            {/* Left side - Our Story */}
            <div className="w-5/12">
              <div className="bg-[#1C1C1C] p-8 rounded-lg border border-[#C8A448] relative">
                <h3 className="font-montserrat text-2xl text-[#C8A448] mb-6 font-bold">
                  Our Story
                </h3>
                <div className="font-lora text-gray-300 space-y-4">
                  <p>
                    Founded on the principles of excellence, precision, and style, Crazy Cuts Studio
                    has been the go-to barbershop in Mayfair, Johannesburg for expert fades,
                    sharp cuts, and premium grooming.
                  </p>
                  <p>
                    With a deep commitment to craftsmanship and attention to detail, we have
                    earned a reputation as the top choice for men's grooming, beard styling,
                    and classic haircuts. Whether you're after a signature fade, a clean shave,
                    or a full grooming experience, our skilled barbers deliver next-level results.
                  </p>
                </div>
                {/* SVG connector dots */}
                <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[#C8A448] rounded-full"></div>
              </div>
            </div>

            {/* Right side - Team Members */}
            <div className="w-6/12 space-y-8">
              {TEAM_MEMBERS.map((member, index) => (
                <div
                  key={member.name}
                  className="bg-[#1C1C1C] p-6 rounded-lg border border-[#C8A448] relative"
                >
                  {/* SVG connector line */}
                  <svg
                    className="absolute -left-16 top-1/2 transform -translate-y-1/2"
                    width="64"
                    height="2"
                  >
                    <line
                      x1="0"
                      y1="1"
                      x2="64"
                      y2="1"
                      stroke="#C8A448"
                      strokeWidth="2"
                    />
                  </svg>
                  {/* Connector dot */}
                  <div className="absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[#C8A448] rounded-full"></div>

                  <div className="mb-4">
                    <h4 className="font-oswald text-xl text-white font-bold">
                      {member.title}: {member.name}
                    </h4>
                    <p className="text-[#C8A448] mb-2 font-bold">{member.role}</p>
                  </div>
                  <p className="text-gray-300 leading-relaxed font-medium">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden space-y-8">
            {/* Our Story */}
            <div className="bg-[#1C1C1C] p-6 rounded-lg border border-[#C8A448]">
              <h3 className="font-montserrat text-2xl text-[#C8A448] mb-6 font-bold">
                Our Story
              </h3>
              <div className="font-lora text-gray-300 space-y-4">
                <p>
                  Founded on the principles of excellence, precision, and style, Crazy Cuts Studio
                  has been the go-to barbershop in Mayfair, Johannesburg for expert fades,
                  sharp cuts, and premium grooming.
                </p>
                <p>
                  With a deep commitment to craftsmanship and attention to detail, we have
                  earned a reputation as the top choice for men's grooming, beard styling,
                  and classic haircuts. Whether you're after a signature fade, a clean shave,
                  or a full grooming experience, our skilled barbers deliver next-level results.
                </p>
              </div>
            </div>

            {/* Team Members */}
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="bg-[#1C1C1C] p-6 rounded-lg border border-[#C8A448]"
              >
                <div className="mb-4">
                  <h4 className="font-oswald text-xl text-white font-bold">
                    {member.title}: {member.name}
                  </h4>
                  <p className="text-[#C8A448] mb-2 font-bold">{member.role}</p>
                </div>
                <p className="text-gray-300 leading-relaxed font-medium">
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