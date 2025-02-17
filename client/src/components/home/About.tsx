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

        <div className="relative flex flex-col lg:flex-row gap-8 lg:gap-24 justify-center items-center">
          {/* Our Story - Left Side */}
          <div className="lg:w-1/3 relative z-10 lg:self-start">
            <div className="bg-[#1C1C1C] p-6 rounded-lg border border-[#C8A448] transform transition-transform hover:scale-105">
              <h3 className="text-[#C8A448] font-oswald text-xl mb-4">
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

            {/* SVG Connecting Lines - Desktop Only */}
            <div className="hidden lg:block absolute right-[-96px] top-0 w-24 h-full">
              <svg className="w-full h-full" preserveAspectRatio="none">
                {/* First connecting line */}
                <g>
                  <path
                    d="M0,0 C25,-10 75,33 100,33"
                    style={{
                      stroke: '#C8A448',
                      strokeWidth: '1px',
                      fill: 'none',
                      strokeDasharray: '1000',
                      strokeDashoffset: '1000',
                    }}
                    className="animate-flow-line"
                  />
                  {/* Start dot */}
                  <circle
                    cx="0"
                    cy="0"
                    r="3"
                    className="fill-[#C8A448] animate-glow-pulse"
                  />
                  {/* End dot */}
                  <circle
                    cx="100%"
                    cy="33%"
                    r="3"
                    className="fill-[#C8A448] animate-glow-pulse"
                  />
                </g>
                {TEAM_MEMBERS.slice(1).map((_, index) => {
                  // Calculate different starting points for each line
                  const y = (index +1) * 33.33 + 16.67;
                  const startY = index === 0 ? 50 : 90;

                  // Create S-shaped curve path using cubic Bezier curves
                  // Adjust control points to create smooth curves from different starting points
                  const pathD = index === 0 ?
                    `M0,50 C25,50 75,${y} 100,${y}` :
                    `M0,90 C25,95 75,${y - 10} 100,${y}`;

                  return (
                    <g key={`connector-${index + 1}`}>
                      <path
                        d={pathD}
                        style={{
                          stroke: '#C8A448',
                          strokeWidth: '1px',
                          fill: 'none',
                          strokeDasharray: '1000',
                          strokeDashoffset: '1000',
                        }}
                        className="animate-flow-line"
                      />
                      {/* Start dot */}
                      <circle
                        cx="0"
                        cy={startY}
                        r="3"
                        className="fill-[#C8A448] animate-glow-pulse"
                      />
                      {/* End dot */}
                      <circle
                        cx="100%"
                        cy={`${y}%`}
                        r="3"
                        className="fill-[#C8A448] animate-glow-pulse"
                      />
                    </g>
                  );
                })}
              </svg>
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