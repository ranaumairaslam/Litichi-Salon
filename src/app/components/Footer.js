"use client";

import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
return ( <footer className="bg-[#0B0B0B] text-white border-t border-[#D4AF37]/20">

  {/* Top Section */}

  <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">


    {/* Logo & About */}


    <div>

      <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">

        Litichi Salon

      </h2>

      <p className="text-gray-400">

        Experience luxury beauty services with professional care. 
        We make you look and feel your best.

      </p>


      {/* Social Icons */}


      <div className="flex gap-4 mt-6">

        <Facebook className="cursor-pointer hover:text-[#D4AF37] transition duration-300" />

        <Instagram className="cursor-pointer hover:text-[#D4AF37] transition duration-300" />

        <Twitter className="cursor-pointer hover:text-[#D4AF37] transition duration-300" />

      </div>

    </div>



    {/* Services */}


    <div>

      <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">

        Our Services

      </h3>

      <ul className="space-y-2 text-gray-400">

        <li className="hover:text-[#D4AF37] cursor-pointer transition">Hair Styling</li>

        <li className="hover:text-[#D4AF37] cursor-pointer transition">Facial</li>

        <li className="hover:text-[#D4AF37] cursor-pointer transition">Makeup</li>

        <li className="hover:text-[#D4AF37] cursor-pointer transition">Manicure</li>

        <li className="hover:text-[#D4AF37] cursor-pointer transition">Pedicure</li>

      </ul>

    </div>



    {/* Quick Links */}


    <div>

      <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">

        Quick Links

      </h3>

      <ul className="space-y-2 text-gray-400">

        <li className="hover:text-[#D4AF37] cursor-pointer transition">Home</li>

        <li className="hover:text-[#D4AF37] cursor-pointer transition">Services</li>

        <li className="hover:text-[#D4AF37] cursor-pointer transition">Gallery</li>

        <li className="hover:text-[#D4AF37] cursor-pointer transition">Booking</li>

        <li className="hover:text-[#D4AF37] cursor-pointer transition">Contact</li>

      </ul>

    </div>



    {/* Contact Info */}


    <div>

      <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">

        Contact Us

      </h3>


      <div className="space-y-3 text-gray-400">


        <p className="flex items-center gap-2">

          <MapPin size={18} /> Bahawalnagar, Pakistan

        </p>


        <p className="flex items-center gap-2">

          <Phone size={18} /> +92 300 1234567

        </p>


        <p className="flex items-center gap-2">

          <Mail size={18} /> info@litichi.com

        </p>


      </div>

    </div>


  </div>



  {/* Bottom Section */}


  <div className="border-t border-[#D4AF37]/20 text-center py-6 text-gray-400">

    © 2026 Litichi Beauty Salon. All Rights Reserved.

  </div>


</footer>

);
}
