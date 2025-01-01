"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Carousel = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const options = {
    loop: true,
    center: false,
    items: 5,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
        center: true,
      },
      768: {
        items: 5,
        center: false,
      },
    },
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="py-8  bg-[#141924]">
      <div>
        <h2 className="text-center font-extrabold text-[36px] sm:text-[40px] leading-[48px] sm:leading-[58px] mb-[19px] sm:mb-[11px]">
          Play, Win, and{" "}
          <span className="text-[#AA5AFF]">Multiply Your Winnings!</span>
        </h2>
        <div className="font-normal text-sm sm:text-base leading-[24px] sm:leading-[29px] text-[#939393] text-center mx-auto mb-[34px] sm:mb-10 w-[90%] max-w-[709px]">
          Turn your gaming skills into real rewards with Plavox! Compete in
          exciting skill-based mobile games, win big, and multiply your
          earnings. With over 15 games to choose from, there’s something for
          everyone to enjoy!
        </div>
      </div>
      <OwlCarousel className="owl-carousel owl-theme" {...options}>
        <div className="item rounded-[30px] overflow-hidden relative group ">
          <Image
            src="/assets/Play, Win, and Multiply Your Winnings/Vertical-Banner.png"
            alt="Item 1"
            width={100}
            height={100}
            className="h-[263px] sm:h-[303px] xl:h-[400px] !w-full"
          />
          <div className=" p-[14px] backdrop-blur-custom bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.7)] z-[2] hidden group-hover:flex justify-center items-start flex-col h-full w-full absolute top-0 left-0">
            <Image
              src="/assets/Play, Win, and Multiply Your Winnings/sub-logo/Logo (3).png"
              alt="Checkers"
              width={30}
              height={30}
              className="!w-[40px] h-[40px]"
            />
            <h6 className="text-[28px] leading-[29px] font-bold text-white mt-[17px]">
              Chess
            </h6>
            <p className="text-xs leading-[18.5px] xl:text-lg font-normal">
              A two-player game, where each player starts with 12 pieces. The
              objective is to capture all opponent's pieces or block their
              moves, with kings moving both forward and backward
            </p>
          </div>
          <div className="absolute bottom-[51px] left-[32px]">
            <Image
              src="/assets/Play, Win, and Multiply Your Winnings/sub-logo/Logo (3).png"
              alt="Checkers"
              width={30}
              height={30}
              className="!w-[40px] h-[40px]"
            />
            <h6 className="text-[28px] leading-[29px] font-bold text-white mt-[17px]">
              Chess
            </h6>
          </div>
        </div>
        <div className="item rounded-[30px] overflow-hidden relative group">
          <Image
            src="/assets/Play, Win, and Multiply Your Winnings/Vertical-Banner-1.png"
            alt="Item 2"
            width={100}
            height={100}
            className="h-[263px] sm:h-[303px] xl:h-[400px] !w-full"
          />
          <div className="p-[14px] backdrop-blur-custom bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.7)] z-[2] hidden group-hover:flex justify-center items-start flex-col h-full w-full absolute top-0 left-0">
            <Image
              src="/assets/Play, Win, and Multiply Your Winnings/sub-logo/Logo (3).png"
              alt="Checkers"
              width={30}
              height={30}
              className="!w-[40px] h-[40px]"
            />
            <h6 className="text-[28px] leading-[29px] font-bold text-white mt-[17px]">
              Chess
            </h6>
            <p className="text-xs leading-[18.5px] xl:text-lg mt-4 font-normal">
              A two-player game, where each player starts with 12 pieces. The
              objective is to capture all opponent's pieces or block their
              moves, with kings moving both forward and backward
            </p>
          </div>
          <div className="absolute bottom-[51px] left-[32px]">
            <Image
              src="/assets/Play, Win, and Multiply Your Winnings/sub-logo/Logo (3).png"
              alt="Checkers"
              width={30}
              height={30}
              className="!w-[40px] h-[40px]"
            />
            <h6 className="text-[28px] leading-[29px] font-bold text-white mt-[17px]">
              Checkers
            </h6>
          </div>
        </div>
        <div className="item rounded-[30px] overflow-hidden relative group">
          <Image
            src="/assets/Play, Win, and Multiply Your Winnings/Banner.png"
            alt="Item 3"
            width={100}
            height={100}
            className="h-[263px] sm:h-[303px] xl:h-[400px] !w-full"
          />
          <div className=" p-[14px] backdrop-blur-custom bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.7)] z-[2] hidden group-hover:flex justify-center items-start flex-col h-full w-full absolute top-0 left-0">
            <Image
              src="/assets/Play, Win, and Multiply Your Winnings/sub-logo/Logo (3).png"
              alt="Checkers"
              width={30}
              height={30}
              className="!w-[40px] h-[40px]"
            />
            <h6 className="text-[28px] leading-[29px] font-bold text-white mt-[17px]">
              Chess
            </h6>
            <p className="text-xs leading-[18.5px] xl:text-lg mt-4 font-normal">
              A two-player game, where each player starts with 12 pieces. The
              objective is to capture all opponent's pieces or block their
              moves, with kings moving both forward and backward
            </p>
          </div>
          <div className="absolute bottom-[51px] left-[32px]">
            <Image
              src="/assets/Play, Win, and Multiply Your Winnings/sub-logo/Logo (4).png"
              alt="Checkers"
              width={30}
              height={30}
              className="!w-[40px] h-[40px]"
            />
            <h6 className="text-[28px] leading-[29px] font-bold text-white mt-[17px]">
              Dance Arena
            </h6>
          </div>
        </div>
        <div className="item rounded-[30px] overflow-hidden relative group">
          <Image
            src="/assets/Play, Win, and Multiply Your Winnings/Vertical-Banner-2.png"
            alt="Item 4"
            width={100}
            height={100}
            className="h-[263px] sm:h-[303px] xl:h-[400px] !w-full"
          />
          <div className=" p-[14px] backdrop-blur-custom bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.7)] z-[2] hidden group-hover:flex justify-center items-start flex-col h-full w-full absolute top-0 left-0">
            <Image
              src="/assets/Play, Win, and Multiply Your Winnings/sub-logo/Logo (3).png"
              alt="Checkers"
              width={30}
              height={30}
              className="!w-[40px] h-[40px]"
            />
            <h6 className="text-[28px] leading-[29px] font-bold text-white mt-[17px]">
              Chess
            </h6>
            <p className="text-xs leading-[18.5px] xl:text-lg mt-4 font-normal">
              A two-player game, where each player starts with 12 pieces. The
              objective is to capture all opponent's pieces or block their
              moves, with kings moving both forward and backward
            </p>
          </div>
          <div className="absolute bottom-[51px] left-[32px]">
            <Image
              src="/assets/Play, Win, and Multiply Your Winnings/sub-logo/Logo (5).png"
              alt="Checkers"
              width={30}
              height={30}
              className="!w-[40px] h-[40px]"
            />
            <h6 className="text-[28px] leading-[29px] font-bold text-white mt-[17px]">
              Owl Adventure
            </h6>
          </div>
        </div>
        <div className="item rounded-[30px] overflow-hidden relative group">
          <Image
            src="/assets/Play, Win, and Multiply Your Winnings/Banner-1.png"
            alt="Item 5"
            width={100}
            height={100}
            className="h-[263px] sm:h-[303px] xl:h-[400px] !w-full"
          />
          <div className=" p-[14px] hidden backdrop-blur-custom bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.7)] z-[2] group-hover:flex justify-center items-start  flex-col h-full w-full absolute top-0 left-0">
            <Image
              src="/assets/Play, Win, and Multiply Your Winnings/sub-logo/Logo (3).png"
              alt="Checkers"
              width={30}
              height={30}
              className="!w-[40px] h-[40px]"
            />
            <h6 className="text-[28px] leading-[29px] font-bold text-white mt-[17px]">
              Chess
            </h6>
            <p className="text-xs leading-[18.5px] xl:text-lg mt-4 font-normal">
              A two-player game, where each player starts with 12 pieces. The
              objective is to capture all opponent's pieces or block their
              moves, with kings moving both forward and backward
            </p>
          </div>
          <div className="absolute bottom-[51px] left-[32px]">
            <Image
              src="/assets/Play, Win, and Multiply Your Winnings/sub-logo/Logo (6).png"
              alt="Checkers"
              width={30}
              height={30}
              className="!w-[40px] h-[40px]"
            />
            <h6 className="text-[28px] leading-[29px] font-bold text-white mt-[17px]">
              Tic Tac Toe
            </h6>
          </div>
        </div>
        <div className="item rounded-[30px] overflow-hidden relative group">
          <Image
            src="/assets/Play, Win, and Multiply Your Winnings/Banner.png"
            alt="Item 3"
            width={100}
            height={100}
            className="h-[263px] sm:h-[303px] xl:h-[400px] !w-full"
          />
          <div className=" p-[14px] backdrop-blur-custom bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.7)] z-[2] hidden group-hover:flex justify-center items-start flex-col h-full w-full absolute top-0 left-0">
            <Image
              src="/assets/Play, Win, and Multiply Your Winnings/sub-logo/Logo (3).png"
              alt="Checkers"
              width={30}
              height={30}
              className="!w-[40px] h-[40px]"
            />
            <h6 className="text-[28px] leading-[29px] font-bold text-white mt-[17px]">
              Chess
            </h6>
            <p className="text-xs leading-[18.5px] xl:text-lg mt-4 font-normal">
              A two-player game, where each player starts with 12 pieces. The
              objective is to capture all opponent's pieces or block their
              moves, with kings moving both forward and backward
            </p>
          </div>
          <div className="absolute bottom-[51px] left-[32px]">
            <Image
              src="/assets/Play, Win, and Multiply Your Winnings/sub-logo/Logo (4).png"
              alt="Checkers"
              width={30}
              height={30}
              className="!w-[40px] h-[40px]"
            />
            <h6 className="text-[28px] leading-[29px] font-bold text-white mt-[17px]">
              Dance Arena
            </h6>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Carousel;
