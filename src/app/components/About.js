"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {

  return (

    <section className="bg-[#0B0B0B] text-white py-20 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">


        {/* Image Side */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >

          {/* Main Image */}

          <Image
            src="/makup.jpg"
            alt="About Salon"
            width={600}
            height={700}
            className="rounded-2xl object-cover shadow-lg group-hover:scale-105 transition duration-500"
          />


          {/* Experience Card */}

          <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] text-black px-6 py-4 rounded-xl shadow-xl">

            <h3 className="text-2xl font-bold">10+</h3>

            <p className="text-sm font-medium">
              Years Experience
            </p>

          </div>


        </motion.div>



        {/* Content Side */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

         

          <h2 className="text-4xl font-bold mb-6 leading-tight">

            We Provide The Best Beauty Services
            For Your Luxury Experience

          </h2>


          <p className="text-gray-400 mb-6">

            Our salon provides premium beauty services using modern techniques
            and high quality products. Our professional team ensures that every
            customer feels relaxed, confident and beautiful.

          </p>


          <p className="text-gray-400 mb-8">

            We specialize in hair styling, makeup, skin care, manicure and
            pedicure services. Our goal is to deliver luxury experience and
            customer satisfaction.

          </p>



          {/* Features */}

          <div className="grid grid-cols-2 gap-4 mb-8">

            <div className="flex items-center gap-3">

              <span className="text-[#D4AF37] text-xl">✔</span>

              <p>Premium Products</p>

            </div>


            <div className="flex items-center gap-3">

              <span className="text-[#D4AF37] text-xl">✔</span>

              <p>Professional Staff</p>

            </div>


            <div className="flex items-center gap-3">

              <span className="text-[#D4AF37] text-xl">✔</span>

              <p>Luxury Environment</p>

            </div>


            <div className="flex items-center gap-3">

              <span className="text-[#D4AF37] text-xl">✔</span>

              <p>Affordable Price</p>

            </div>


          </div>



          {/* Button */}

          <button className="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#E6C67A] transition duration-300">

            Learn More

          </button>


        </motion.div>


      </div>


    </section>

  );

}