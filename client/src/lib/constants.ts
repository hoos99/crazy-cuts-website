import React from 'react';

export const SERVICES = [
  {
    name: "Classic Haircut",
    price: 35,
    description: "Traditional cut with modern precision",
    duration: "45 mins"
  },
  {
    name: "Beard Trim",
    price: 25,
    description: "Shape and style your facial hair",
    duration: "30 mins"
  },
  {
    name: "Hot Towel Shave",
    price: 40,
    description: "Luxurious straight razor shave",
    duration: "45 mins"
  },
  {
    name: "Hair & Beard Combo",
    price: 55,
    description: "Complete grooming package",
    duration: "75 mins"
  }
];

export const BUSINESS_HOURS = [
  { day: "Monday", hours: "Closed" },
  { day: "Tuesday", hours: "9:00 AM - 7:00 PM" },
  { day: "Wednesday", hours: "9:00 AM - 7:00 PM" },
  { day: "Thursday", hours: "9:00 AM - 8:00 PM" },
  { day: "Friday", hours: "9:00 AM - 7:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 7:00 PM" },
  { day: "Sunday", hours: "9:00 AM - 7:00 PM" }
];

export const TEAM_MEMBERS = [
  {
    name: "Jeeno",
    role: "Founder & Lead Stylist",
    title: "Master Barber",
    description: React.createElement(React.Fragment, null, [
      "Known for creating the Legendary ",
      React.createElement("span", { className: "text-yellow-600", key: "jeeno-fade" }, "JEENO FADE"),
      "—a style so sought-after, you might catch a queue just waiting for his magic. But if you see a line, fret not—his protégé has you covered."
    ])
  },
  {
    name: "Minhaz",
    role: "Style Expert & Jeeno's Protégé",
    title: "Senior Barber",
    description: React.createElement(React.Fragment, null, [
      "Trained directly by Jeeno, Minhaz delivers a variation of the iconic ",
      React.createElement("span", { className: "text-yellow-600", key: "jeeno-fade-2" }, "JEENO FADE"),
      " with his own modern twist. Whether you want a classic cut or the signature fade, Minhaz is ready to transform your look—no long wait required."
    ])
  },
  {
    name: "Madhvi",
    role: "Waxing & Threading Expert",
    title: "Ladies' Specialist",
    description: "Brows on point, skin silky smooth—Madhvi is the go-to for all ladies' services. Whether it's threading, waxing, or precision shaping, she makes sure every detail is flawless."
  }
];

export const CONTACT_INFO = {
  phone: "+27815683089",
  email: "jenish10491@icloud.com",
  address: "95, 6th Avenue Mayfair, JHB",
  social: {
    instagram: "https://instagram.com/crazycutstudio",
    facebook: "https://www.facebook.com/Crazycutsstudio",
    whatsapp: "+27815683089"
  }
};