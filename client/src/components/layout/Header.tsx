import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBookNow = () => {
    const message = encodeURIComponent("Hi, I would like to book an appointment for a haircut.");
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.phone.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="fixed w-full bg-black bg-opacity-95 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/crazy-cuts-logo.png" alt="Crazy Cuts Studio" className="h-10 md:h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <a href="#services" className="text-[#C8A448] hover:text-white transition-colors" aria-label="Services section">
              Services
            </a>
            <a href="#about" className="text-white hover:text-[#C8A448] transition-colors" aria-label="About section">
              About
            </a>
            <a href="#gallery" className="text-[#C8A448] hover:text-white transition-colors" aria-label="Gallery section">
              Gallery
            </a>
            <a href="#contact" className="text-white hover:text-[#C8A448] transition-colors" aria-label="Contact section">
              Contact
            </a>
            <Button 
              variant="outline" 
              className="border-[#C8A448] text-[#C8A448] hover:bg-[#C8A448] hover:text-white"
              onClick={handleBookNow}
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4" role="navigation" aria-label="Main navigation">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-white hover:text-[#C8A448] transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Services section"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-white hover:text-[#C8A448] transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label="About section"
              >
                About
              </a>
              <a
                href="#gallery"
                className="text-white hover:text-[#C8A448] transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Gallery section"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="text-white hover:text-[#C8A448] transition-colors"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Contact section"
              >
                Contact
              </a>
              <Button 
                variant="outline" 
                className="border-[#C8A448] text-[#C8A448] hover:bg-[#C8A448] hover:text-white w-full"
                onClick={handleBookNow}
              >
                Book Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;