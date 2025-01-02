import React from "react";
import ButtonWithModal from "./ButtonWithModel";
import Image from "next/image";

const WinDouble = () => {
  return (
    <div className="bg-[#141924] ">
      <div className="px-[24px]">
        {/* <h2 className="text-center tracking-[3px] sm:tracking-[14px] text-[14px] sm:text-xl font-medium leading-[28px] text-[#656B7B] mb-[59px]">
          And much more in development!
        </h2> */}
        <h2 className="text-center text-[36px] sm:text-[40px] font-extrabold leading-[48px] sm:leading-[58px] text-[#fff]">
          How will you win the double??
        </h2>
        <div className="text-center text-[14px]  sm:text-base leading-[24px] mt-[14px] sm:mt-0 sm:leading-[29px] font-normal text-[#939393] max-w-[571px] w-full mx-auto mb-[18px] sm:mb-8">
          Ready to double your winnings? Dive into thrilling matchups, test your
          skills, <br className="hidden lg:block"/> and claim victory to take it all!
        </div>
        <div className="flex justify-center w-full">
          <ButtonWithModal defaultOpen={true} />
        </div>
      </div>
      <div className="bg-double relative h-fit ls:h-[517px]">
        <div className="block ts:hidden">
          <div className="h-[229px] flex items-center overflow-hidden ">
            <Image
              src="/assets/How will you win the double/Group 1171275348.svg"
              alt="img1"
              width={100}
              height={100}
              className="h-[229px] object-contain !w-auto ml-[-30px]"
            />
            <div className="flex flex-col">
              <h2 className="leading-[28px] tracking-[1px] text-[19px] ls:text-[23px] font-extrabold ml-[] text-center w-[125px] ">
                You put a token money of say ₹10
              </h2>
              <Image
                src="/assets/How will you win the double/Vector 7.png"
                alt="img1"
                width={100}
                height={100}
                className="w-[62.69px] rotate-[-270deg]"
              />
            </div>
          </div>
          <div className="h-[269px] relative flex items-center overflow-hidden justify-end bg-[#141924]">
            <div className="flex flex-col absolute left-[40px]">
              <h2 className="leading-[28px] tracking-[1px] text-[19px] ls:text-[23px] font-extrabold ml-[-30px] text-center w-[125px]">
                You put a token money of say ₹10
              </h2>
              <Image
                src="/assets/How will you win the double/Vector 9.svg"
                alt="img1"
                width={100}
                height={100}
                className="w-[62.69px]"
              />
            </div>
            <Image
              src="/assets/How will you win the double/Mask group (1).svg"
              width={100}
              height={100}
              alt="img3"
              className="h-[269px] object-contain ml-[20px] !w-auto"
            />
          </div> 
          <div className="h-[290px] flex items-center overflow-hidden">
          <Image
              src="/assets/How will you win the double/Mask group.svg"
              width={100}
              height={100}
              alt="img3"
              className="h-[240px] object-contain mt-[50px] !w-auto"
            />
            <div className="flex flex-col">
              <h2 className="leading-[28px] text-[19px] ls:text-[23px] font-extrabold ml-[0px] text-center w-[125px] ">
              The winner takes the entire pot
              </h2>
              <Image
                src="/assets/How will you win the double/Vector 7.png"
                alt="img1"
                width={100}
                height={100}
                className="w-[62.69px] rotate-[-270deg]"
              />
            </div>
          
          </div>
        </div>
        <div className="!max-w-[1440px] overflow-x-clip relative hidden ts:flex items-end justify-center  mx-auto h-[518px]">
          <div className="absolute left-[40px] ls:left-[60px] lg:left-[130px] el:left-[220px] ll:left-[290px]">
            <div className="relative">
              <div className="flex ">
                <h2 className="leading-[28px] tracking-[1px] text-[23px] right-[160px] font-extrabold text-center w-[162PX] absolute top-[-80px] text-white rotate-[-17deg] ">
                  You put a token money of say ₹10
                </h2>
                <Image
                  src="/assets/How will you win the double/Vector 7.png"
                  alt="img1"
                  width={70}
                  height={100}
                  className="top-[-70px] right-[90px] el:right-[90px] absolute"
                />
              </div>
              <Image
                src="/assets/How will you win the double/Group 1171275348.svg"
                alt="img1"
                width={100}
                height={100}
                className="h-[300px] object-contain !w-auto"
              />
            </div>
          </div>
            <div className="relative h-full flex items-center ">
              <Image
                src="/assets/How will you win the double/iPhone 16 Pro mockup natural titanium bottom.svg"
                width={100}
                height={100}
                alt="img2"
                className="h-[297.46px] !w-auto absolute top-[-30px]"
              />
              <h2 className="leading-[28px] tracking-[1px] text-[23px] text-white mt-[150px] font-extrabold text-center w-[220px] ">
                Compete against another player with a ₹10 bet
              </h2>
            </div>
          <div className="absolute right-[-63px] ls:right-[-50px] lg:right-[20px] el:right-[110px] ll:right-[170px]">
            <div className="relative">
              <div className="flex">
                <h2 className="leading-[28px] tracking-[1px] text-[18px] left-[270px] font-extrabold text-center w-[162PX] absolute top-[-21px] text-white rotate-[15deg] ">
                  The winner takes the entire pot
                </h2>
                <Image
                  src="/assets/How will you win the double/Vector 8.png"
                  alt="img1"
                  width={50}
                  height={100}
                  className="top-[-10px] left-[210px] absolute"
                />  
              </div>
              <Image
                src="/assets/How will you win the double/Group 1171275349.svg"
                width={100}
                height={100}  
                alt="img3"
                className="h-[380px] object-contain !w-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinDouble;
