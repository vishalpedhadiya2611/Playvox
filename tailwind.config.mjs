/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "326px",
      sm: "425px",
      ss: "576px",
      md: "601px",
      ts: "769px",
      ls: "993px",
      lg: "1024px",
      el: "1280px",
      ll: "1300px",
      xl: "1440px",
      "2xl": "1500px",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backdropBlur: {
        custom: "12.470464706420898px", // Add your custom blur value
      },
      transform: {
        "rotate-y-180": "rotateY(180deg)",
      },
      backgroundImage: {
        "hero-pattern": "url('/assets/Main-menu/bg.png')",
        "back-image": "url('/assets/cashback/mask-group.svg')",
        "back-image-res": "url('/assets/cashback/mask-group1.svg')",
        "cashback-res":
          "linear-gradient(87.24deg, rgb(66 29 104 / 85%), rgb(137 28 252 / 84%))",
        "custom-gradient": "linear-gradient(90deg, #7D04FC 0%, #891CFC 100%)",
        "back-gradient":
          "linear-gradient(87.24deg, #421d6799 0.69%, #891dfcb3 99.64%)",
        "footer-gradient":
          "linear-gradient(87.24deg, #22293A 0.69%, #29344D 99.64%)",
        "bg-hover": "linear-gradient(90deg, #ffffff 0%, #ffffff 100%)",
        "card-shadow": "7.96px 11.14px 50.94px 30px #0101011A",
      },
      fontFamily: {
        custom: "var(--font-custom)",
      },
    },
  },
  plugins: [],
};
