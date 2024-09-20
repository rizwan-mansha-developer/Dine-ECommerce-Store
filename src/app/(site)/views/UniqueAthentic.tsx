"use client";
import Image7 from "public/Product7.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Phrases from "../components/Phrases";
import { Button } from "../components/ui/button";

const UniqueAthentic = () => {
  return (
    <>
      <div className="flex justify-center flex-col  sm:justify-end mt-2 lg:mt-32 sm:mt-12 mb-4 ml-8 ">
        <span className="font-bold text-3xl sm:text-4xl lg:text-5xl  lg:ml-[55%]">
         
          Unique and <br />
          Authentic Vintage <br />
          Designer Jewellery
        </span>

      
          {/* Phrases Div */}

          <div className="relative ">
            <div className="absolute lg:max-w-md  sm:center mt-5 text-gray-300 opacity-40 hidden sm:block sm:text-9xl  font-bold -z-10 ">
              Different from others
            </div>
            <div className="lg:flex ">
            <div className="grid grid-cols-1 sm:grid-cols-2  ">
              <Phrases
                heading={"Using Good Quality Materials"}
                description={
                  "Experience premium quality products crafted with the finest materials for long-lasting durability."
                }
              />
              <Phrases
                heading={"100% Handmade Products"}
                description={
                  "Embrace the charm of uniqueness with our exclusive collection of 100% handmade products."
                }
              />

              <Phrases
                heading={"Modern Fashion Design"}
                description={
                  "Step into the world of contemporary style with our modern fashion designs, curated."
                }
              />
              <Phrases
                heading={"Discount for Bulk Orders"}
                description={
                  "Save big on bulk purchases! Avail incredible discounts when you order in large quantities."
                }
              />
            </div>
          

          {/* Image Div */}
          <div className="lg:ml-12">
          <div className="mr-8 center w-auto sm:h-48 md:h-56 py-8 ">
            <Image src={Image7} alt="Imperial Alpaca Hoodie" className="" />
          </div>

          {/* Paragraph */}
          <div className="space-x-12 relative sm:mt-40">
            <p className="max-w-sm sm:max-w-md ">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <div className=" px-5 py-10  shadow-transparent ">
              <Button
                className="absolute left-0 rounded-none bg-black text-white hover:bg-gray-900 h-16 w-28 text-sm font-semibold"
                onClick={() => <Link href={"/products/"}></Link>}>
                See All <br />
                Product{" "}
              </Button>
            </div>
            </div>
          </div>
          </div>
          </div>
        </div>
     
    </>
  );
};

export default UniqueAthentic;
