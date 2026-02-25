"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Academy() {

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

          <Image
            src="/student.jpg"
            alt="Beauty Academy"
            width={600}
            height={700}
            className="rounded-2xl object-cover shadow-lg group-hover:scale-105 transition duration-500"
          />


          {/* Floating Badge */}

          <div className="absolute top-6 left-6 bg-[#D4AF37] text-black px-5 py-3 rounded-xl shadow-xl">

            <h3 className="font-bold text-lg">
              Certified Training
            </h3>

          </div>


        </motion.div>



        {/* Content Side */}

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-[#D4AF37] font-semibold mb-3">
            OUR ACADEMY
          </p>


          <h2 className="text-4xl font-bold mb-6 leading-tight">

            Professional Beauty Courses
            To Build Your Career

          </h2>


          <p className="text-gray-400 mb-6">

            Our Beauty Academy provides professional training in hair styling,
            makeup, skin care, and salon management. Learn from industry experts
            with practical experience.

          </p>


          <p className="text-gray-400 mb-8">

            We help students develop skills and confidence to start their own
            salon or work professionally in the beauty industry.

          </p>



          {/* Features */}

          <div className="space-y-4 mb-8">


            <div className="flex items-center gap-3">

              <span className="text-[#D4AF37] text-xl">✔</span>

              <p>Professional Certification</p>

            </div>


            <div className="flex items-center gap-3">

              <span className="text-[#D4AF37] text-xl">✔</span>

              <p>Expert Trainers</p>

            </div>


            <div className="flex items-center gap-3">

              <span className="text-[#D4AF37] text-xl">✔</span>

              <p>Hands-on Practical Training</p>

            </div>


            <div className="flex items-center gap-3">

              <span className="text-[#D4AF37] text-xl">✔</span>

              <p>Job Opportunities Support</p>

            </div>


          </div>



          {/* Button */}

          <button className="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-semibold hover:bg-[#E6C67A] hover:scale-105 transition duration-300">

            Enroll Now

          </button>


        </motion.div>



      </div>


    </section>

  );

}