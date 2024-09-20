import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";



interface ProductTypes {
  productImage: StaticImageData;
  // productImage={item.image[0].url[0]]}
  alt: string;
  productName: string;
  productPrice: number;
  category:string;
  id:number;
  tagline:string
}




const ProductCart = (props:ProductTypes) => {
  return (
    <>
      <Link href={`/products/${props.id}`}>
        <div className=" font-bold text-lg ml-7 my-8">
          <div>
            <Image
              src={props.productImage}
              alt={props.alt}
              className="w-full h-full object-cover object-center lg:h-full lg:w-full"
            />
            <h3>{props.productName}</h3>
            <h4 className="text-base text-gray-400 mb-2 mt-1">
              {props.tagline}
            </h4>
            <p className="text-xl">${props.productPrice}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCart;