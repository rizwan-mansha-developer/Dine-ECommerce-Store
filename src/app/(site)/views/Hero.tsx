import React from "react";

import { ShoppingCart } from "lucide-react";
import HeroImage from "../../../../public/hero-img.webp";
import Image from "next/image";
import { Button } from "../components/ui/button";
import brandLogo from "../utils/brandLogo";
import { Badge } from "../components/ui/badge";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-y-10 py-6 justify-center items-center">
      {/* content */}
      <div className="flex-1 mt-16 ml-8 md:mr-14 ">
        <Badge className="px-4 py-2 rounded-lg font-semibold text-md bg-blue-200 text-blue-700">
          Sale 70%
        </Badge>
        <h1 className="text-gray-800 max-w-sm scroll-m-20 text-3xl sm:text-4xl md:text-5xl font-extrabold -tracking-tighter  lg:text-5xl mt-10">
          An Industrial Take on Streetwear
        </h1>
        <p className="max-w-sm text-xl font-normal text-gray-600 pt-8 ">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <div className="flex  items-center py-2 px-2 mt-4 text-white font-bold">
          <div className="relative -left-2.5">
            <Button className=" bg-black hover:bg-gray-900 h-18 rounded-none font-semibold text-md p-3 md:p-4 ">
              <ShoppingCart className="mr-2 h-5 w-5" />
              <div className="flex flex-col justify-center ">
                <span className="mb-[-10px]">Start</span>
                <span>Shopping</span>
              </div>
            </Button>
          </div>
        </div>
        {/* Brand Logos */}
        <div className="mt-7 flex gap-x-4 lg:h-8">
          {brandLogo.map((logo, index) => (
            <Image key={index} src={logo.img} alt={logo.alt} />
          ))}
        </div>
      </div>

      {/* image */}
      <div className="flex-1">
        <div className="relative center mt-16 sm:mt-24 md:mt-10">
          <div className="w-96 h-96 sm:w-[450px] sm:h-[450px] md:h-[600px] md:w-[600px] bg-[#fdece3] rounded-full"></div>
          <div className="absolute   left-10 bottom-1">
            <Image
              src={HeroImage}
              alt={"Hero Image"}
              className=" mx-auto object-cover h-[450px] sm:h-[480px] md:h-[630px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
