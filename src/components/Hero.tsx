import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-[50vh] md:h-[70vh] w-full rounded-md overflow-hidden my-2">
      <Image
        src="/hero.jpg"
        alt="Classic vintage car"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-32 space-y-3">
        <h1 className="text-2xl md:text-6xl font-extrabold text-[#FDF6F0] font-[notoSerif] leading-tight drop-shadow-md">
          Experience the Golden Age of Motoring
        </h1>
        <p className="text-sm md:text-lg text-[#fdf6f0] font-[notoSerif] max-w-3xl drop-shadow-sm">
          Step back in time and indulge in the elegance of our meticulously
          restored vintage car collection.{" "}
          <span className="hidden md:block">
            Perfect for special occasions, scenic drives, or simply reliving the
            past.
          </span>
        </p>
        <Link href="/cars">
          <Button className="text-lg bg-[#D47312] hover:bg-[#b85e0f] text-white px-8 py-4">
            Browse Cars
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
