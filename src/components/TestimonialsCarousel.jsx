"use client";
import React, { useEffect, useState } from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import "./TestimonialsCarousel.css";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    image: "/assets/What People Say/Ellipse 13.svg",
    name: "John Doe",
    text: "Plavox has transformed how I view gaming. Not only am I having fun, but I'm also sharpening my mind and earning rewards! It's a win-win for me.",
    stars: 5,
  },
  {
    id: 2,
    image: "/assets/What People Say/Ellipse 13 (1).svg",
    name: "Jane Smith",
    text: "Playing on Plavox has been an amazing experience! The games are engaging, and I've noticed real improvements in my problem-solving and decision-making skills.",
    stars: 5,
  },
  {
    id: 3,
    image: "/assets/What People Say/Ellipse 13 (2).svg",
    name: "Sarah Lee",
    text: "I love how Plavox combines entertainment with skill-building. The secure payments and friendly competition make it a platform I trust and use every day.",
    stars: 5,
  },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      moveItems();
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const moveItems = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;

    setCurrentIndex(nextIndex);
  };

  const handleItemClick = (index) => {
    setCurrentIndex(index);
  };

  const getCircularIndex = (index, length) => {
    return (index + length) % length;
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="testimonial-carousel bg-[#141924]">
      <div className="flex items-center justify-center p-5">
        <div className="flex flex-col items-center">
          <div className="flex items-center">
            {Array(3)
              .fill()
              .map((_, index) => {
                const imageItem =
                  testimonials[
                    getCircularIndex(
                      currentIndex + index - 1,
                      testimonials.length
                    )
                  ];

                return (
                  <div
                    key={imageItem.id}
                    className={`testimonial-card p-[18px] sm:p-[25px] opacity-[1] bg-[#222734] w-[260px] lg:w-[360px] text-white shadow-md text-center rounded-[23.88px] ${
                      index === 1
                        ? "scale-[1.2] shadow-card-shadow z-10"
                        : "!opacity-70 z-0"
                    } transition-transform duration-300 `}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleItemClick(
                        getCircularIndex(
                          currentIndex + index - 1,
                          testimonials.length
                        )
                      );
                    }}
                  >
                    <div className="flex justify-center items-center">
                      <Image
                        src={imageItem.image}
                        width={20}
                        height={20}
                        className="!w-[80px] h-[80px] mb-[9px] sm:mb-5"
                        alt={imageItem?.name}
                      />
                    </div>
                    <div className="stars flex justify-center mb-2">
                      {Array.from({ length: imageItem.stars }).map(
                        (_, index) => (
                          <span
                            key={index}
                            className="text-yellow-500 text-[26px]"
                          >
                            ★
                          </span>
                        )
                      )}
                    </div>
                    <p className="text-xs sm:text-sm">"{imageItem.text}"</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
