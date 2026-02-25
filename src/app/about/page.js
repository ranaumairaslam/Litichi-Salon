"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
        <Header />
        

      <div className="bg-white">

        <section className="relative h-[400px] flex items-center justify-center bg-black">

          <div className="absolute inset-0 bg-gradient-to-r from-[#C9A14A] to-[#D4AF37] opacity-40" />

          <div className="relative text-center text-white">
            <h1 className="text-4xl font-bold">
              About Litichi Beauty Salon
            </h1>
          </div>

        </section>

      </div>

      <Footer />
    
    </>
  );
}
