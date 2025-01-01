import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonWithModal from "./ButtonWithModel";

const Footer = () => {
  return (
    <div className="bg-footer-gradient pt-[25px] ">
      <div>
        <div className="hidden ss:flex justify-center items-center gap-3 mb-[27px]">
          <Link href="#" className="text-white bg-transparent hover:text-white rounded-md px-3 py-2 text-sm font-medium leading-[28px]">Home</Link>
          <Link href="#" className="text-[#656B7B] bg-transparent hover:text-white rounded-md px-3 py-2 text-sm font-medium leading-[28px]">Our Games</Link>
          <Link href="#" className="text-[#656B7B] bg-transparent hover:text-white rounded-md px-3 py-2 text-sm font-medium leading-[28px]">How it works</Link>
          <Link href="#" className="text-[#656B7B] bg-transparent hover:text-white rounded-md px-3 py-2 text-sm font-medium leading-[28px]">Why Choose Us</Link>
          <Link href="#" className="text-[#656B7B] bg-transparent hover:text-white rounded-md px-3 py-2 text-sm font-medium leading-[28px]">What People Say</Link>
          <Link href="#" className="text-[#656B7B] bg-transparent hover:text-white rounded-md px-3 py-2 text-sm font-medium leading-[28px]">Our Partners</Link>
        </div>
        <div className="flex justify-center items-center">
          <Image alt="group" width={50} height={50} src="/assets/Group 1171275367.svg" className="w-[174px] h-[64px] object-contain"/>
        </div>
        <div className="w-full text-base ss:mx-auto text-center mt-[22px] leading-[28px] font-normal text-white mb-[55px] max-w-[639px] px-5">
          Join 1000s of active users and turn your gaming skills into rewards.
          Compete, win, and grow with Plavox!
        </div>
        <div className="w-full flex justify-center">

        <ButtonWithModal className="mb-[46px]"/>
        </div>
      </div>
      <div className="text-[14px] w-full py-2 text-center bg-[#141924] leading-[28px] font-normal">Plavox. All RightS Reserved</div>
    </div>
  );
};

export default Footer;
