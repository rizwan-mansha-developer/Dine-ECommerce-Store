import React from 'react'
import Image, { StaticImageData } from 'next/image'
import ProductCart from '../../components/ProductCart';
import { Products } from '../../utils/mock';

const Page = ({params}:{params:{slug:string}}) => {
    const getProductByCategory = Products.filter((item)=>item.category === params.slug);
 
    return(
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto mt-16 py-10 ">
    {
    getProductByCategory.length>0 ?
    getProductByCategory.map(item => (
      <div className="flex-1" key={item.id}>
      <ProductCart
      key={item.id}
      productImage={item.image[0].url[0]}
      alt={item.name}
      productName={item.name}
      productPrice={item.price}
      category={item.category}
      id={item.id}
      tagline={item.tagline}
    />
    
    </div>
    ))
    : <p>No Product Founded</p> }
    </div>
    )}

     
    
    
    
    
    
    //  return(
      
      //    <div className=" flex justify-evenly flex-wrap mt-16 py-10 ">
      //    { getProductByCategory.map(item => (
      //           <div className="flex-1">
      //           <ProductCart
      //           key={item.id}
      //           productImage={item.image as StaticImageData}
      //           alt={item.name}
      //           productName={item.name}
      //           productPrice={item.price}
      //           category={item.category}
      //         />
              
      //         </div>
      //         ))}
      //         </div>
      //           )
    
    // }
  


export default Page;
