"use client";

import Link from "next/link";

export default function Mega({ isOpen }) {

if (!isOpen) return null;


return (


<div className="absolute left-0 top-full mt-4 w-[750px] bg-[#111111] border border-[#D4AF37]/20 p-8 rounded-xl shadow-xl">


  <div className="grid grid-cols-3 gap-8">


    {/* Hair */}


    <div>

      <h3 className="text-[#D4AF37] font-semibold mb-3">

        Hair Services

      </h3>

      <ul className="space-y-2 text-gray-400">

        <li><Link href="/services">Hair Cut</Link></li>

        <li><Link href="/services">Hair Styling</Link></li>

        <li><Link href="/services">Hair Color</Link></li>

      </ul>

    </div>



    {/* Skin */}


    <div>

      <h3 className="text-[#D4AF37] font-semibold mb-3">

        Skin Services

      </h3>

      <ul className="space-y-2 text-gray-400">

        <li><Link href="/services">Facial</Link></li>

        <li><Link href="/services">Cleanup</Link></li>

        <li><Link href="/services">Skin Care</Link></li>

      </ul>

    </div>



    {/* Beauty */}


    <div>

      <h3 className="text-[#D4AF37] font-semibold mb-3">

        Beauty Services

      </h3>

      <ul className="space-y-2 text-gray-400">

        <li><Link href="/services">Makeup</Link></li>

        <li><Link href="/services">Manicure</Link></li>

        <li><Link href="/services">Pedicure</Link></li>

      </ul>

    </div>


  </div>


</div>


);

}
