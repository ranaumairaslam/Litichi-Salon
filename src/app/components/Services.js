"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Hair Styling",
    description:
      "Get modern and stylish haircut from our professional stylists using premium tools.",
    price: "Rs. 1500",
    image: "/hair.jpg",
  },
  {
    title: "Facial Treatment",
    description:
      "Luxury facial treatment for glowing, healthy and fresh skin using branded products.",
    price: "Rs. 2500",
    image: "/facial.jpg",
  },
  {
    title: "Makeup Service",
    description:
      "Professional bridal and party makeup to enhance your beauty and confidence.",
    price: "Rs. 5000",
    image: "/makup.jpg",
  },
  {
    title: "Manicure",
    description:
      "Premium manicure service to clean, shape and beautify your hands and nails.",
    price: "Rs. 1800",
    image: "/menicure.jpg",
  },
  {
    title: "Pedicure",
    description:
      "Relaxing pedicure treatment to refresh, clean and soften your feet.",
    price: "Rs. 2000",
    image: "/pedicure.jpg",
  },
];

export default function ServicesShowcase() {
  return (
    <section className="bg-[#0B0B0B] py-20 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <h2 className="text-center text-4xl font-bold text-[#D4AF37] mb-16">
          Our Luxury Services
        </h2>


        {/* Cards Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">


          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group bg-[#111111] rounded-2xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37] transition duration-500 shadow-lg hover:shadow-[#D4AF37]/20"
            >


              {/* Image */}

              <div className="overflow-hidden relative">

                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Price Badge */}

                <span className="absolute top-4 right-4 bg-[#D4AF37] text-black text-sm font-bold px-4 py-1 rounded-full">
                  {service.price}
                </span>

              </div>


              {/* Content */}

              <div className="p-6">

                <h3 className="text-xl font-bold text-[#D4AF37] mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {service.description}
                </p>


                <button className="w-full bg-[#D4AF37] text-black py-3 rounded-full font-semibold hover:bg-[#E6C67A] transition duration-300">
                  Book Appointment
                </button>


              </div>


            </motion.div>

          ))}


        </div>


      </div>

    </section>
  );
}