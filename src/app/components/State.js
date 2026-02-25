"use client";

import Image from "next/image";

const images = [
  { id: 1, src: "/makup.jpg" },
  { id: 2, src: "/menicure.jpg" },
  { id: 3, src: "/hair.jpg" },
  { id: 4, src: "/facial.jpg" },
  { id: 5, src: "/pedicure.jpg" },
];

export default function ImageStrip() {

  const imageClass =
  "group relative flex-shrink-0 w-[200px] h-[130px] sm:w-[240px] sm:h-[150px] md:w-[280px] md:h-[180px] rounded-2xl overflow-hidden border border-[#C9A14A] transition-all duration-500 hover:scale-110";

  return (

    <section className="w-full py-10 bg-[#0B0B0B]">

      <div className="">

        <div className="flex gap-4 px-4">

          {images.map((image) => (

            <div key={image.id} className={imageClass}>

              <Image
                src={image.src}
                alt=""
                fill
                className="object-cover"
              />

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}