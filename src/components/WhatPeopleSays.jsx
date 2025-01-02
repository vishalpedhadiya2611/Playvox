"use client";
import Image from "next/image";
import TestimonialsCarousel from "./TestimonialsCarousel";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

const data = [
  "/assets/Our Partners/1.svg",
  "/assets/Our Partners/2.svg",
  "/assets/Our Partners/3.svg",
  "/assets/Our Partners/4.svg",
  "/assets/Our Partners/5.svg",
  "/assets/Our Partners/6.svg",
  "/assets/Our Partners/7.svg",
  "/assets/Our Partners/8.svg",
  "/assets/Our Partners/9.svg",
  "/assets/Our Partners/10.svg",
  "/assets/Our Partners/11.svg",
];

const WhatPeopleSays = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-[#141924]">
      <div className="overflow-hidden">
        <h1 className="text-[36px] sm:text-[40px] leading-[58px] font-extrabold text-center text-white mb-[39px]">
          What People Say
        </h1>
        <TestimonialsCarousel />
      </div>
      <div>
        <h2 className="text-center font-extrabold text-[36px] sm:text-[40px] mt-6 sm:mt-[59px] mb-[39px]">
          Our Partners
        </h2>
        <div className="max-w-[880px] mx-auto">
          <Marquee>
            <div className="flex gap-5 sm:gap-12 justify-center pb-[51px] our-img">
              {data.map((res, index) => (
                <Image
                  key={index}
                  src={res}
                  width={100}
                  height={50}
                  className="object-contain"
                  alt=""
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default WhatPeopleSays;
