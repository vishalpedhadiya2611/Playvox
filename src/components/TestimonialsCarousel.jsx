"use client";
import React, { useEffect, useRef, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css"; 
import "owl.carousel/dist/assets/owl.theme.default.css"; 
import Image from "next/image";
import dynamic from "next/dynamic";
import "./TestimonialsCarousel.css"; 

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

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
  const [mounted, setMounted] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);


  const carouselOptions = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: false,
    responsive: {
      0: { items: 3 },
      480: { items: 3 },
      769: { items: 3 },
    },
  };

  if (!mounted) {
    return null;
  }

  return (
    <section className="testimonials py-20 bg-[#141924]">
    <div className="container mx-auto px-4 people-main">
      <div className="widgets-img">
        <OwlCarousel
          {...carouselOptions}
          className="owl-carousel owl-theme custom-carousel"
        >
          {testimonials?.map((ele, index) => (
            <div key={index} className={`item carousel-item`}>
              <div className="card">
                <Image
                  className="card-image"
                  src={ele?.image}
                  alt="slider-1"
                  width={80}
                  height={80}
                />
                <div className="stars">
                  {Array.from({ length: ele.stars }).map((_, idx) => (
                    <span key={idx} className="star">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text line-clamp-5">{ele.text}</p>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  </section>
  );
};

export default TestimonialsCarousel;