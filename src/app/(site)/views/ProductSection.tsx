

import React from 'react'
import HeadingSection from '../components/HeadingSection'
import Slider from './Swiper'
import { Products } from '../utils/mock'

const ProductSection = () => {
    
  return (

  <div className="mt-32">
    <HeadingSection sectionName={"PRODUCTS"} heading={"Check What We Have"} />
  <Slider slides={Products} />
  </div>
  )
}

export default ProductSection


















// 'use client'

// import React from 'react';
// import HeadingSection from '@/components/HeadingSection';
// import {Swiper, SwiperSlide} from 'swiper/react'

// const ProductSection = () => {
//   return (
//     <div>
//       <div className="mt-32">
//         <HeadingSection sectionName="PRODUCTS" heading="Check What We Have" />
//       </div>
      
//       <div className='max-w-5xl h-500px m-auto mt-16 relative'>
//         <Swiper spaceBetween={0} slidesPerView={3}>
//           {Products.map((product, indexProduct) => (
//           <div className="flex flex-col jutify-center cursor-pointer items-center hover:scale-110 hover:max-w-2xl  transition-transform z-10 absolute top-0 left-0">
//             <SwiperSlide key={product.id}>
//                 <Image 
//                   src={product.image}
//                   alt={product.name} 
//                   className="w-[380px] h-[400px] object-cover"
//                 />
//                 <h2>{product.name}</h2>
//                 <p>{product.price}</p>
//             </SwiperSlide>
//               </div>
//           ))}
        
//       </div>
//     </div>
//   );
// }

// export default ProductSection;
