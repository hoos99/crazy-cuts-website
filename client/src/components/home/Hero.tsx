import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";

const Hero = () => {
  const handleBookNow = () => {
    const message = encodeURIComponent("Hi, I would like to book an appointment for a haircut.");
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image - Using local optimized version */}
      <div
        className="absolute inset-0 bg-black opacity-60 z-10"
        style={{
          backgroundImage: `url('/static/hero-bg-optimized.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <div className="mx-auto mb-8">
          <img 
            src="/static/Crazy_Cuts_Transparent_Refined.png" 
            alt="Crazy Cuts Studio" 
            className="mx-auto w-64 md:w-80"
            loading="eager"
          />
        </div>

        <h1 className="font-['Bebas_Neue'] text-5xl md:text-7xl text-white mb-6 tracking-wider">
          <span>PRECISION</span> <span>CUTS.</span> <span>TIMELESS</span> <span>STYLE</span>
        </h1>

        <p className="font-['Bebas_Neue'] text-2xl md:text-3xl text-[#C8A448] mb-8 max-w-2xl mx-auto tracking-wide">
          Step In for the Legendary <span className="text-[#C8A448]">JEENO FADE</span>—Where Mastery Meets Style
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#C8A448] hover:bg-[#B89338] text-white"
            onClick={handleBookNow}
          >
            Book Appointment
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#C8A448] text-[#C8A448] hover:bg-[#C8A448] hover:text-white"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;