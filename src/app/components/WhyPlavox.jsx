import Image from "next/image";
import React from "react";

const data = [
  {
    key: 1,
    imageURL: "/assets/Why Plavox/1.svg",
    title: "Secured payments",
    description:
      "Advanced safeguards guarantee seamless and secure transactions",
  },
  {
    key: 2,
    imageURL: "/assets/Why Plavox/2.svg",
    title: "Multilingual option available",
    description: "Connect and compete with players from across the globe",
  },
  {
    key: 3,
    imageURL: "/assets/Why Plavox/3.svg",
    title: "Skill enhancing games",
    description:
      "Gain an edge with games that put your skills to the ultimate test",
  },
  {
    key: 4,
    imageURL: "/assets/Why Plavox/4.svg",
    title: "Cognitive development",
    description:
      "Enhance your cognitive skills to tackle real-life challenges with ease",
  },
  {
    key: 5,
    imageURL: "/assets/Why Plavox/5.svg",
    title: "Strategic thinking",
    description:
      "Develop strategic thinking that empowers smarter decisions in everyday life",
  },
  {
    key: 6,
    imageURL: "/assets/Why Plavox/6.svg",
    title: "Earning opportunity",
    description:
      "Turn your passion for gaming into a rewarding opportunity to earn",
  },
];

const WhyPlavox = () => {
  return (
    <div className=" m-auto pt-[39px] pb-[51px] bg-[#141924]">
      <h2 className="text-center text-[36px] sm:text-[40px] leading-[58px] font-extrabold mb-[44px]">
        Why Plavox?
      </h2>
      <div className="max-w-[992px] grid grid-cols-2 md:grid-cols-3 gap-y-[50px] px-3 sm:px-0 mx-auto pb-[51px] ">
        {data.map((img) => (
          <div key={img.key} className="">
            <div className="bg-[#7D04FC] mx-auto mb-[23px] w-[68px] h-[68px] rounded-full flex justify-center items-center">
              <Image
                src={img.imageURL}
                width={100}
                height={100}
                className="w-[30px] h-[30px]"
                alt={img?.title}
              />
            </div>
            <div className="sm:w-[210px] mx-auto">
              <h2 className="text-[21px] text-center mb-[17px] leading-[26.46px] font-bold text-white">
                {img.title}
              </h2>
              <h3 className="text-[#939393] text-center text-sm leading-[21px] font-normal">
                {img.description}
              </h3>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-back-image bg-no-repeat bg-cover">
      <div className="bg-cashback pt-[52px] pb-[43px]">
          <h2 className="font-extrabold text-[36px] lg:py-4 px-[21px] sm:text-[40px] leading-[50px] text-center mb-[29px]">
            Earn cashback upto <br className="hidden sm:block" /> ₹300 on App
            download!
          </h2>
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <Image
              src="/assets/app-play-store/app-store.png"
              width={100}
              height={100}
              className="w-[130px] sm:w-[173px] h-auto"
              alt="app-store"
            />
            <Image
              src="/assets/app-play-store/google-play.png"
              width={100}
              height={100}
              className="w-[130px] sm:w-[173px] h-auto"
              alt="google-play"
            />
          </div>
      </div>
      </div>
    </div>
  );
};

export default WhyPlavox;
