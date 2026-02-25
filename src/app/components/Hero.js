"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center md:justify-start overflow-hidden">

      {/* Background Image */}
      <Image
        src="/salon.jpg"   // place image in public/images/hero.jpg
        alt="Salon Background"
        fill
        priority
        className="object-cover"
      />


      {/* Black Gold Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C]/95 via-[#0B0B0C]/80 to-transparent"></div>



      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 max-w-2xl text-center md:text-left">


        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#E6C79C] leading-tight"
        >
          Litchi

          <span className="block text-[#C9A14A] mt-2">
            Beauty Salon
          </span>

        </motion.h1>



        {/* Text */}
        <motion.p
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="mt-6 text-[#F5E6C8] text-lg md:text-xl"
        >
          Where Elegance Meets Perfection. Transform your style with our premium salon services.
        </motion.p>



        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 md:justify-start justify-center"
        >


          <button className="bg-[#C9A14A] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#E6C79C] transition duration-300 shadow-lg hover:shadow-[#C9A14A]/40">
            Book Appointment
          </button>



          <button className="border border-[#C9A14A] text-[#C9A14A] px-8 py-3 rounded-full font-semibold hover:bg-[#C9A14A] hover:text-black transition duration-300">
            View Services
          </button>


        </motion.div>


      </div>



      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0B0B0C] to-transparent"></div>


    </section>
  );
}