import { TEAM_MEMBERS } from "@/lib/constants";
import { RotatingGallery } from "@/components/ui/rotating-gallery";

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-oswald text-3xl md:text-4xl text-white mb-4 font-bold">
          About Us
        </h2>
        <div className="w-20 h-1 bg-[#C8A448] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Story */}
          <div className="space-y-8">
            <div>
              <h3 className="font-montserrat text-2xl text-[#C8A448] mb-6 font-bold">
                Our Story
              </h3>
              <div className="font-lora text-gray-300 space-y-4 font-medium">
                <p>
                  Founded on the principles of excellence and precision, Crazy Cuts Studio
                  has been delivering exceptional grooming experiences since its inception.
                </p>
                <p>
                  Our commitment to craftsmanship and attention to detail has made us
                  the preferred choice for those who demand the very best in men's
                  grooming.
                </p>
              </div>
            </div>

            {/* Rotating Gallery */}
            <RotatingGallery className="mt-8" />
          </div>

          {/* Team */}
          <div>
            <h3 className="font-montserrat text-2xl text-[#C8A448] mb-6 font-bold">
              Meet Our Team
            </h3>
            <div className="space-y-8">
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
      </div>
    </section>
  );
};

export default About;