"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
// import Quantity from "@/components/Quantity";
import { Divide, ShoppingCart } from "lucide-react";
import { Products } from "../../utils/mock";
import AddToCart from "../../components/AddToCart";


// interface Props{
//    products:product[]
// }

const getProductDetail = (id: number | string) => {
  return Products.filter((product) => product.id == id);
};

const Page = ({ params }: { params: { id: number } }) => {
  const result = getProductDetail(params.id);

  const sizes = ["xs", "s", "m", "l", "xl"];
  const [previewImage, setPreviewImage] = useState<StaticImageData | string>();

  function handleHoverPreview(img: StaticImageData) {
    setPreviewImage(img);
  }
  return (
    <>
      <section className=" flex flex-wrap  py-10 mt-16  ml-8">
        {result.map((product) => (
          <div
            key={product.id}
            className="flex flex-col md:flex-row  gap-12 md:gap-32  ">
            {/* Left Small Images */}
            <div className="grid grid-cols-2 sm:grid-cols-4  sm:gap-x-4 md:grid-cols-1  gap-y-2 md:gap-x-16 ">
              {product.image[0].url.map((img, index) => (
                <div key={index} className="w-32 h-32 mb-4 ">
                  <Image
                    src={img}
                    alt={product.name}
                    onMouseEnter={() => handleHoverPreview(img)}
                    className="border rounded-2xl"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col lg:flex-row lg:gap-x-12">
              {/* Preview Image */}
              <div className="h-24 w-auto lg:mt-12">
                <Image
                  src={previewImage ? previewImage : product.image[0].url[0]}
                  alt={product.name}
                  height={400}
                  className="border rounded-2xl h-96 lg:h-[470px] w-auto "
                />
              </div>
              {/* Right Content */}
              <div>
                <div className="">
                  <h1 className="text-2xl mt-80 lg:mt-40">{product.name}</h1>
                  <h2 className="text-base text-gray-400 font-semibold">
                    {product.tagline}
                  </h2>
                </div>
                <div>
                  <h3 className="text-xs mt-6 font-semibold">SELECT SIZE</h3>
                  {/* Sizes */}
                  <div className="flex gap-x-6">
                    {sizes.map((size, id) => (
                      <div
                        key={id}
                        className="h-8 w-8 rounded-full hover:shadow-2xl mt-2 center">
                        <span className=" font-bold text-sm text-gray-600">
                          {size.toUpperCase()}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center mt-6">
                    {/* Quantity */}
                    <h3 className="font-semibold text-sm mr-6">Quantity: </h3>
                    {/* <Quantity /> */}
                  </div>
                  {/* AddToCart Button */}
                  <div className="mt-6 flex items-center ">
                    <button className="flex items-center bg-black text-white pl-4">
                      <ShoppingCart />
                      <AddToCart />
                    </button>

                    <h2 className="mx-2 font-bold text-2xl">
                      ${product.price.toFixed(2)}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* {Product Information Section} */}
      </section>

      <div className="relative flex items-center mb-16 mt-16 mx-7 sm:mx-10 ">
        <div className="absolute   font-bold text-7xl sm:text-8xl md:text-9xl md:mx-20 text-gray-100 -z-10">
          Overview
        </div>
        <h3 className="font-semibold text-2xl ml-8 sm:text-3xl sm:ml-16 md:text-5xl md:ml-24 tracking-wider">
          Product Information
        </h3>
      </div>

      <hr className=" text-gray-950 mx-auto  font-extrabold " />
    </>
  );
};

export default Page;
