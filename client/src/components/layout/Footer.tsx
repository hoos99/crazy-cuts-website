import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { CONTACT_INFO, BUSINESS_HOURS } from "@/lib/constants";

const Footer = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I would like to book an appointment for a haircut.");
    const whatsappUrl = `https://wa.me/${CONTACT_INFO.social.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-[#1C1C1C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Social */}
          <div className="flex flex-col items-center md:items-start">
            <img 
              src="/crazy-cuts-logo.png" 
              alt="Crazy Cuts Studio" 
              className="h-16 mb-6 object-contain" 
            />
            <div className="flex space-x-4">
              <a
                href={CONTACT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8A448] hover:text-white transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href={CONTACT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C8A448] hover:text-white transition-colors"
              >
                <FaFacebookF size={24} />
              </a>
              <button
                onClick={handleWhatsApp}
                className="text-[#C8A448] hover:text-white transition-colors"
              >
                <FaWhatsapp size={24} />
              </button>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-[#C8A448] font-oswald text-xl mb-4 text-center md:text-left">
              Hours
            </h3>
            <div className="space-y-2">
              {BUSINESS_HOURS.map((schedule) => (
                <div
                  key={schedule.day}
                  className="flex justify-between text-sm text-gray-300"
                >
                  <span>{schedule.day}</span>
                  <span>{schedule.hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#C8A448] font-oswald text-xl mb-4 text-center md:text-left">
              Contact
            </h3>
            <div className="space-y-2 text-center md:text-left">
              <p className="text-gray-300">{CONTACT_INFO.address}</p>
              <p>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-[#C8A448] hover:text-white transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-[#C8A448] hover:text-white transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Crazy Cuts Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;