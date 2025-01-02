import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import WhatPeopleSays from "../components/WhatPeopleSays";
import WhyPlavox from "../components/WhyPlavox";
import WinDouble from "../components/WinDouble";

export default function Home() {
  return (
    <div className="font-custom max-w-[2000px] mx-auto bg-[#141924]">
      <Navbar />
      <HeroBanner />
      <Carousel />
      <WinDouble />
      <WhyPlavox />
      <WhatPeopleSays />
      <Footer />
    </div>
  );
}
