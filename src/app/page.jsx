import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import WhatPeopleSays from "./components/WhatPeopleSays";
import WhyPlavox from "./components/WhyPlavox";
import WinDouble from "./components/WinDouble";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
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
