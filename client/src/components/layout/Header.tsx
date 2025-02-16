import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black bg-opacity-95 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="flex items-center">
              <img src="/crazy-cuts-logo.png" alt="Crazy Cuts Studio" className="h-10 md:h-12" />
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white hover:text-[#C8A448] transition-colors">
              Services
            </a>
            <a href="#about" className="text-white hover:text-[#C8A448] transition-colors">
              About
            </a>
            <a href="#gallery" className="text-white hover:text-[#C8A448] transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-white hover:text-[#C8A448] transition-colors">
              Contact
            </a>
            <Button 
              variant="outline" 
              className="border-[#C8A448] text-[#C8A448] hover:bg-[#C8A448] hover:text-white"
              onClick={() => window.location.href = `tel:${CONTACT_INFO.phone}`}
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
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#services"
                className="text-white hover:text-[#C8A448] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#about"
                className="text-white hover:text-[#C8A448] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#gallery"
                className="text-white hover:text-[#C8A448] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="text-white hover:text-[#C8A448] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                variant="outline" 
                className="border-[#C8A448] text-[#C8A448] hover:bg-[#C8A448] hover:text-white w-full"
                onClick={() => window.location.href = `tel:${CONTACT_INFO.phone}`}
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