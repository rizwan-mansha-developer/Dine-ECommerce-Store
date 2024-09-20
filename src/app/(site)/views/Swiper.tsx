'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Image from "next/image"
import Link from 'next/link';
import { product } from '../utils/types';





const Slider = ({slides}:{slides:product[]}) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={3}
      // onClick={""}
    >
     
      {slides.map((slide, index) =>(
        <SwiperSlide key={index}>{
          <div className='relative mt-12 h-[320px] sm:h-96'>
            <Link href={`products/${slide.id}`}>
            <div className='absolute cursor-pointer hover:scale-110 duration-500 '>

          <div>
            <Image src={slide.image[0].url[0]} alt={slide.name} className=' w-[420px] object-cover' />
          </div>

          <div className='font-semibold text-lg'>
          <h2 className='center'>{slide.name}</h2>
          <p className='center'>${slide.price}</p>
          </div>

          </div>
          </Link>
          </div>
          }
          </SwiperSlide>
      ))}

      
     
    </Swiper>
  )
}

export default Slider;
