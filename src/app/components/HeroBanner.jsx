import Image from "next/image";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="bg-hero-pattern w-full bg-cover">
      <div className="flex flex-col md:flex-row mx-auto relative px-[24px] py-[21px] ts:py-0 ts:px-0 max-w-[1008px] ts:h-[461px] items-end overflow-hidden justify-start ls:justify-end">
        <div className="ts:py-[115px] ts:absolute ts:w-[487px] top-0 left-0 pl-0 ts:pl-[30px] lg:pl-0">
          <h3 className="font-extrabold	text-4xl mb-[21px] text-white">
            Earn cashback upto <br className="hidden sm:block"/> ₹300 on App download!{" "}
          </h3>
          <div className="font-normal text-base mb-[28px] max-w-[449px] text-white">
            Welcome to Plavox, where your skills meet opportunity! With over 15
            exciting games, there’s something for everyone to enjoy.
          </div>
          <div className="flex justify-start items-center gap-2 flex-wrap">
            <Image
              src="/assets/app-play-store/app-store.png"
              width={100}
              height={100}
              className="w-[130px] sm:w-[173px] h-[48px] sm:h-[58px]"
              alt="app-store"
            />
            <Image
              src="/assets/app-play-store/google-play.png"
              width={100}
              height={100}
              className="w-[130px] sm:w-[173px] h-[48px] sm:h-[58px]"
              alt="google-play"
            />
          </div>
        </div>
        <div className="flex justify-end items-end h-full">
          <Image
            src="/assets/Main-menu/mobile.svg"
            alt="mobile"
            width={794}
            height={519}
            className="mb-[-81px] ls:mb-[-48px] h-[278px] ts:h-[360px] lg:h-[480px] mr-[-20px] w-full "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
