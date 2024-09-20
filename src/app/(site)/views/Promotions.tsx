import React from "react";
import Image from "next/image";
import SummerSeason from "/public/Promotions/event1.webp";
import FlexSweatshirt from "/public/Promotions/event2.webp";
import Bomberjacket from "/public/Promotions/event3.webp";
import HeadingSection from "../components/HeadingSection";
import { Button } from "../components/ui/button";

const Promotions = () => {
  return (
    <section className="mb-2 sm:mb-12 flex-col ">
      <HeadingSection
        sectionName="PROMOTIONS"
        heading="Our Promotions Events"
        headingStyle="text-3xl"
      />

      {/* div event card */}
      {/* main div */}
      <div className=" flex flex-col mx-auto lg:flex-row gap-x-4 lg:ml-[0px] ">
        <div className="flex flex-col    lg:flex-1">
          <div className=" flex-1 relative  bg-gray-300 py-6 px-10  ">
            <span className="font-bold text-3xl">GET UP</span> <br />
            <p className="flex items-center font-bold text-3xl">
              <span className="mr-2">TO</span>
              <span className=" text-4xl">60%</span>
            </p>
            <span className="font-medium max-w-sm text-lg">
              For the
              <br /> summer <br /> season
            </span>
            <div className="bottom-0 -right-6 sm:right-4 lg:right-0 absolute">
              <Image src={SummerSeason} alt="Summer Season" className="" />
            </div>
          </div>

          <div className=" text-center text-white mt-4 bg-[#212121] ">
            <p className=" pt-10 font-bold text-4xl">GET 30% Off </p>
            <p className="py-4">USE PROMO CODE</p>
            <div className="pb-8">
              <Button className=" bg-gray-600 tracking-[0.30rem] font-semibold text-lg hover:bg-gray-600 w-72">
                DINEWEEKENDSALE
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col max-lg:mt-4 text-lg lg:flex-row gap-x-4 lg:flex-1">
          <div className=" bg-[#EFE1C7] h-52 lg:h-[434px] lg:flex-1 relative sm:max-w-xl md:max-w-2xl ">
            <h3 className="pt-10 ml-11">Flex Sweatshirt</h3>
            <div className="flex gap-x-2 font-semibold text-lg ml-11">
              <p className="line-through font-medium">$100.00</p>
              <p>$75.00</p>
            </div>

            <Image
              src={FlexSweatshirt}
              alt={"Flex Sweatshirt"}
              className="h-60 lg:h-72 w-auto absolute bottom-0   right-6 sm:right-12 md:right-24 lg:right-2"
            />
          </div>

          <div className=" bg-[#D7D7D9] h-52 lg:h-[434px] lg:flex-1 relative max-lg:mt-4 sm:max-w-xl md:max-w-2xl">
            <h3 className="pt-10 ml-11 ">Flex Push Bomber</h3>
            <div className="flex gap-x-2 font-semibold text-lg ml-11">
              <p className="line-through font-medium">$225.00</p>
              <p>$190.00</p>
            </div>

            <Image
              src={Bomberjacket}
              alt={"Flex Push Button Bomber"}
              className="absolute h-60 lg:h-72 w-auto bottom-0  right-6 sm:right-12 md:right-24  lg:right-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
