import Image from "next/image";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="bg-hero-pattern w-full">
      <div className="flex flex-col sm:flex-row mx-auto relative px-[24px] py-[21px] sm:py-0 sm:px-0 max-w-[1008px] sm:h-[461px] items-end overflow-hidden justify-end">
        <div className="sm:py-[115px] sm:absolute sm:w-[487px] top-0 left-0">
          <h3 className="font-extrabold	text-4xl mb-[21px]">
            Earn cashback upto <br className="hidden sm:block"/> ₹300 on App download!{" "}
          </h3>
          <p className="font-normal text-base mb-[28px]">
            Welcome to Plavox, where your skills meet opportunity! With over 15
            exciting games, there’s something for everyone to enjoy.
          </p>
          <div className="flex justify-start items-center gap-2">
            <Image
              src="/assets/app-play-store/app-store.png"
              width={100}
              height={100}
              className="w-[130px] sm:w-[173px] h-[48px] sm:h-[58px]"
            />
            <Image
              src="/assets/app-play-store/google-play.png"
              width={100}
              height={100}
              className="w-[130px] sm:w-[173px] h-[48px] sm:h-[58px]"
            />
          </div>
        </div>
        <div className="flex justify-end items-end h-full">
          <Image
            src="/assets/Main-menu/mobile.svg"
            alt="mobile"
            width={794}
            height={519}
            className="mb-[-81px] sm:mb-[-31px] h-[278px] sm:h-[400px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
