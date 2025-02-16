import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

const Hero = () => {
  const handleBookNow = () => {
    const message = encodeURIComponent("Hi, I would like to book an appointment for a haircut.");
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-60 z-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'multiply'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <div className="mx-auto mb-8 animate-fade-in">
          <img 
            src="/crazy-cuts-logo.png" 
            alt="Crazy Cuts Studio" 
            className="hero-logo mx-auto animate-spin-y-slow"
          />
        </div>

        <h1 className="font-['Bebas_Neue'] text-5xl md:text-7xl text-white mb-6 tracking-wider">
          <span>Precision</span>{' '}
          <span>Cuts.</span>{' '}
          <span>Timeless</span>{' '}
          <span>Style.</span>
        </h1>

        <p className="font-['Bebas_Neue'] text-2xl md:text-3xl text-[#C8A448] mb-8 max-w-2xl mx-auto tracking-wide">
          Step In for the Legendary JEENO FADE—Where Mastery Meets Style
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-8 h-12 border-2 border-[#C8A448] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#C8A448] rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;