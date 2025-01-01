"use client";
import React, { useEffect, useRef, useState } from "react";
import "owl.carousel/dist/assets/owl.carousel.css"; // Import Owl Carousel CSS
import "owl.carousel/dist/assets/owl.theme.default.css"; // Import default theme CSS
import Image from "next/image";
import dynamic from "next/dynamic";
import "./TestimonialsCarousel.css"; // Import your custom CSS

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

  // const options = {
  //   loop: true,
  //   center: true,
  //   items: 3,
  //   margin: 0,
  //   autoplay: false,
  //   dots: false,
  //   autoplayTimeout: 8500,
  //   smartSpeed: 450,
  //   responsive: {
  //     0: { items: 1 },
  //     768: { items: 2 },
  //     1170: { items: 3 },
  //   },
  // };

  const carouselOptions = {
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: false, // Control autoplay state dynamically
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
      <div className="container mx-auto px-4">
        <div className="row">
          <div className="col-sm-12 widgets-img">
            {/* <OwlCarousel
              id="customers-testimonials"
              className="owl-carousel owl-theme"
              {...options}
              ref={carouselRef}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="item">
                  <div className="shadow-effect p-[18px] sm:p-[25px] opacity-[1] bg-[#222734] w-[360px] text-white shadow-md text-center rounded-[23.88px]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="!w-[80px] h-[80px] mb-[9px] sm:mb-5"
                    />
                    <div className="stars flex justify-center mb-2">
                      {Array.from({ length: testimonial.stars }).map(
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
                    <p className="text-gray-700 text-sm">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </OwlCarousel> */}

            <OwlCarousel
              {...carouselOptions}
              className="owl-carousel owl-theme"
            >
              {testimonials?.map((ele) => (
                <div className="item p-[18px] sm:p-[25px] opacity-[1] bg-[#222734] w-[360px] text-white shadow-md text-center rounded-[23.88px]">
                  <Image
                    className="!w-[80px] h-[80px] mb-[9px] sm:mb-5 !inline"
                    src={ele?.image}
                    alt="slider-1"
                    width={80}
                    height={80}
                  />
                  <div className="stars flex justify-center mb-2">
                    {Array.from({ length: ele.stars }).map((_, index) => (
                      <span key={index} className="text-yellow-500 text-[26px]">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm">{ele.text}</p>
                </div>
              ))}
              {/* <div class="item">
                <Image
                  class="img-fluid"
                  src="/assets/What People Say/Ellipse 13.svg"
                  alt="slider-2"
                  width={200}
                  height={200}
                />
              </div>
              <div class="item">
                <Image
                  class="img-fluid"
                  src="/assets/What People Say/Ellipse 13 (1).svg"
                  alt="slider-3"
                  width={200}
                  height={200}
                />
              </div>
              <div class="item">
                <Image
                  class="img-fluid"
                  src="/assets/What People Say/Ellipse 13.svg"
                  alt="slider-2"
                  width={200}
                  height={200}
                />
              </div>
              <div class="item">
                <Image
                  class="img-fluid"
                  src="/assets/What People Say/Ellipse 13 (2).svg"
                  alt="slider-4"
                  width={200}
                  height={200}
                />
              </div> */}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
