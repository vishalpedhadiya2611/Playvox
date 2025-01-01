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
      325: {
        items: 2,
        center: true,
      },
      768: {
        items: 3,
        center: false,
        dots: true,
      },
      993: {
        items: 4,
        center: false,
        dots: true,
      },
      1024: {
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
        <h2 className="text-center font-extrabold text-[36px] text-white sm:text-[40px] leading-[48px] sm:leading-[58px] mb-[19px] sm:mb-[11px] px-5">
          Play, Win, and{" "}
          <span className="text-[#AA5AFF]">Multiply Your Winnings!</span>
        </h2>
        <div className="font-normal text-sm px-4 sm:text-base leading-[24px] sm:leading-[29px] text-[#939393] text-center mx-auto mb-[34px] sm:mb-10 w-[90%] max-w-[709px]">
          Turn your gaming skills into real rewards with Plavox! Compete in
          exciting skill-based mobile games, win big, and multiply your
          earnings. With over 15 games to choose from, there’s something for
          everyone to enjoy!
        </div>
      </div>
      <div className="relative">
        <OwlCarousel className="owl-carousel owl-theme" {...options}>
          <div className="card h-[263px] sm:h-[303px] xl:h-[400px]">
            <div className="card-inner h-full">
              <div className="card-front">
                <Image
                  src="/assets/PlayWinAndMultiplyYourWinnings/Vertical-Banner.svg"
                  alt="Item 1"
                  width={100}
                  height={100}
                  className="h-[263px] rounded-[30px] object-cover sm:h-[303px] xl:h-[400px] !w-full"
                />
                <div className="absolute bottom-[51px] left-[32px]">
                  <Image
                    src="/assets/PlayWinAndMultiplyYourWinnings/sub-logo/Logo (3).png"
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
              <div className="card-back card-back-1 ">
                <div className="flex-col flex h-full w-full !items-start pt-5 ss:pt-[30px] lg:pt-[50px] bg-card-custom-gradient backdrop-blur-custom pl-[29px] !justify-start">
                  <Image
                    src="/assets/PlayWinAndMultiplyYourWinnings/sub-logo/Logo (3).png"
                    alt="Checkers"
                    width={30}
                    height={30}
                    className="!w-[40px] h-[40px]"
                  />
                  <h6 className="text-xl ss:text-[28px] leading-[29px] font-bold text-white mt-2 ss:mt-[17px]">
                    Chess
                  </h6>
                  <p className="text-xs leading-[18.5px] xl:text-lg mt-2 ss:mt-4 font-normal line-clamp-[7]">
                    A two-player game, where each player starts with 12 pieces.
                    The objective is to capture all opponent's pieces or block
                    their moves, with kings moving both forward and backward
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card h-[263px] sm:h-[303px] xl:h-[400px]">
            <div className="card-inner h-full">
              <div className="card-front">
                <div className="absolute bottom-[51px] left-[29px]">
                  <Image
                    src="/assets/PlayWinAndMultiplyYourWinnings/sub-logo/Logo (3).png"
                    alt="Checkers"
                    width={30}
                    height={30}
                    className="!w-[40px] h-[40px]"
                  />
                  <h6 className="text-[28px] leading-[29px] font-bold text-white mt-[17px]">
                    Checkers
                  </h6>
                </div>
                <Image
                  src="/assets/PlayWinAndMultiplyYourWinnings/Vertical-Banner-1.svg"
                  alt="Item 2"
                  width={100}
                  height={100}
                  className="h-[263px] rounded-[30px] object-cover sm:h-[303px] xl:h-[400px] !w-full"
                />
              </div>
              <div className="card-back card-back-2">
                <div className="flex-col flex h-full w-full !items-start pt-5 ss:pt-[30px] lg:pt-[50px] bg-card-custom-gradient backdrop-blur-custom pl-[29px] !justify-start">
                  <Image
                    src="/assets/PlayWinAndMultiplyYourWinnings/sub-logo/Logo (3).png"
                    alt="Checkers"
                    width={30}
                    height={30}
                    className="!w-[40px] h-[40px]"
                  />
                  <h6 className="text-xl ss:text-[28px] leading-[29px] font-bold text-white mt-2 ss:mt-[17px]">
                    Chess
                  </h6>
                  <p className="text-xs leading-[18.5px] xl:text-lg mt-2 ss:mt-4 font-normal line-clamp-[7]">
                    A two-player game, where each player starts with 12 pieces.
                    The objective is to capture all opponent's pieces or block
                    their moves, with kings moving both forward and backward
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card h-[263px] sm:h-[303px] xl:h-[400px]">
            <div className="card-inner h-full">
              <div className="card-front">
                <Image
                  src="/assets/PlayWinAndMultiplyYourWinnings/Banner.svg"
                  alt="Item 3"
                  width={100}
                  height={100}
                  className="h-[263px] rounded-[30px] object-cover sm:h-[303px] xl:h-[400px] !w-full"
                />
                <div className="absolute bottom-[51px] left-[32px]">
                  <Image
                    src="/assets/PlayWinAndMultiplyYourWinnings/sub-logo/Logo (4).png"
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
              <div className="card-back card-back-3">
                <div className="flex-col flex h-full w-full !items-start pt-5 ss:pt-[30px] lg:pt-[50px] bg-card-custom-gradient backdrop-blur-custom pl-[29px] !justify-start">
                  <Image
                    src="/assets/PlayWinAndMultiplyYourWinnings/sub-logo/Logo (3).png"
                    alt="Checkers"
                    width={30}
                    height={30}
                    className="!w-[40px] h-[40px]"
                  />
                  <h6 className="text-xl ss:text-[28px] leading-[29px] font-bold text-white mt-2 ss:mt-[17px]">
                    Chess
                  </h6>
                  <p className="text-xs leading-[18.5px] xl:text-lg mt-2 ss:mt-4 font-normal line-clamp-[7]">
                    A two-player game, where each player starts with 12 pieces.
                    The objective is to capture all opponent's pieces or block
                    their moves, with kings moving both forward and backward
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card h-[263px] sm:h-[303px] xl:h-[400px]">
            <div className="card-inner h-full">
              <div className="card-front">
                <Image
                  src="/assets/PlayWinAndMultiplyYourWinnings/Vertical-Banner-2.svg"
                  alt="Item 4"
                  width={100}
                  height={100}
                  className="h-[263px] rounded-[30px] object-cover sm:h-[303px] xl:h-[400px] !w-full"
                />
                <div className="absolute bottom-[51px] left-[32px]">
                  <Image
                    src="/assets/PlayWinAndMultiplyYourWinnings/sub-logo/Logo (5).png"
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
              <div className="card-back card-back-4">
                <div className="flex-col flex h-full w-full !items-start pt-5 ss:pt-[30px] lg:pt-[50px] bg-card-custom-gradient backdrop-blur-custom pl-[29px] !justify-start">
                  <Image
                    src="/assets/PlayWinAndMultiplyYourWinnings/sub-logo/Logo (3).png"
                    alt="Checkers"
                    width={30}
                    height={30}
                    className="!w-[40px] h-[40px]"
                  />
                  <h6 className="text-xl ss:text-[28px] leading-[29px] font-bold text-white mt-2 ss:mt-[17px]">
                    Chess
                  </h6>
                  <p className="text-xs leading-[18.5px] xl:text-lg mt-2 ss:mt-4 font-normal line-clamp-[7]">
                    A two-player game, where each player starts with 12 pieces.
                    The objective is to capture all opponent's pieces or block
                    their moves, with kings moving both forward and backward
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card h-[263px] sm:h-[303px] xl:h-[400px]">
            <div className="card-inner h-full">
              <div className="card-front">
                <Image
                  src="/assets/PlayWinAndMultiplyYourWinnings/Banner-1.svg"
                  alt="Item 5"
                  width={100}
                  height={100}
                  className="h-[263px] rounded-[30px] object-cover sm:h-[303px] xl:h-[400px] !w-full"
                />
                <div className="absolute bottom-[51px] left-[32px]">
                  <Image
                    src="/assets/PlayWinAndMultiplyYourWinnings/sub-logo/Logo (6).png"
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

              <div className="card-back card-back-5">
                <div className="flex-col flex h-full w-full !items-start pt-5 ss:pt-[30px] lg:pt-[50px] bg-card-custom-gradient backdrop-blur-custom pl-[29px] !justify-start">
                  <Image
                    src="/assets/PlayWinAndMultiplyYourWinnings/sub-logo/Logo (3).png"
                    alt="Checkers"
                    width={30}
                    height={30}
                    className="!w-[40px] h-[40px]"
                  />
                  <h6 className="text-xl ss:text-[28px] leading-[29px] font-bold text-white mt-2 ss:mt-[17px]">
                    Chess
                  </h6>
                  <p className="text-xs leading-[18.5px] xl:text-lg mt-2 ss:mt-4 font-normal line-clamp-[7]">
                    A two-player game, where each player starts with 12 pieces.
                    The objective is to capture all opponent's pieces or block
                    their moves, with kings moving both forward and backward
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card h-[263px] sm:h-[303px] xl:h-[400px]">
            <div className="card-inner h-full">
              <div className="card-front">
                <Image
                  src="/assets/PlayWinAndMultiplyYourWinnings/Banner.svg"
                  alt="Item 3"
                  width={100}
                  height={100}
                  className="h-[263px] rounded-[30px] object-cover sm:h-[303px] xl:h-[400px] !w-full"
                />
                <div className="absolute bottom-[51px] left-[32px]">
                  <Image
                    src="/assets/PlayWinAndMultiplyYourWinnings/sub-logo/Logo (4).png"
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

              <div className="card-back card-back-3">
                <div className="flex-col flex h-full w-full !items-start pt-5 ss:pt-[30px] lg:pt-[50px] bg-card-custom-gradient backdrop-blur-custom pl-[29px] !justify-start">
                  <Image
                    src="/assets/PlayWinAndMultiplyYourWinnings/sub-logo/Logo (3).png"
                    alt="Checkers"
                    width={30}
                    height={30}
                    className="!w-[40px] h-[40px]"
                  />
                  <h6 className="text-xl ss:text-[28px] leading-[29px] font-bold text-white mt-2 ss:mt-[17px]">
                    Chess
                  </h6>
                  <p className="text-xs leading-[18.5px] xl:text-lg mt-2 ss:mt-4 font-normal line-clamp-[7]">
                    A two-player game, where each player starts with 12 pieces.
                    The objective is to capture all opponent's pieces or block
                    their moves, with kings moving both forward and backward
                  </p>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
        <h2 className="text-center tracking-[3px] ts:tracking-[14px] text-[14px] ts:text-xl font-medium leading-[28px] text-[#656B7B] mb-[59px] mt-[29px]">
          And much more in development!
        </h2>
      </div>
    </div>
  );
};

export default Carousel;
