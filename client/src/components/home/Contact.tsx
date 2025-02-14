import { CONTACT_INFO, BUSINESS_HOURS } from "@/lib/constants";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-oswald text-3xl md:text-4xl text-white mb-4">
          Contact Us
        </h2>
        <div className="w-20 h-1 bg-[#C8A448] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="font-montserrat text-2xl text-[#C8A448] mb-6">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-oswald mb-2">Address</h4>
                <p className="text-gray-300">{CONTACT_INFO.address}</p>
              </div>
              <div>
                <h4 className="text-white font-oswald mb-2">Phone</h4>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-[#C8A448] hover:text-white transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div>
                <h4 className="text-white font-oswald mb-2">Email</h4>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-[#C8A448] hover:text-white transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-12">
              <h3 className="font-montserrat text-2xl text-[#C8A448] mb-6">
                Business Hours
              </h3>
              <div className="space-y-2">
                {BUSINESS_HOURS.map((schedule) => (
                  <div
                    key={schedule.day}
                    className="flex justify-between text-gray-300"
                  >
                    <span className="font-oswald">{schedule.day}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-[400px] md:h-full min-h-[400px] relative bg-[#1C1C1C] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d your_coordinates_here"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
