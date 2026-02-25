"use client";

export default function Video() {
return ( <section className="w-full h-screen overflow-hidden">

  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
  >
    <source src="/bridal.mp4" type="video/mp4" />
  </video>

</section>

);
}
