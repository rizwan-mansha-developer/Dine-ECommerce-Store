import React from 'react'
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';


const SubscribeNews = () => {
  return (
    <div className="relative my-40  max-w-7xl flex flex-col items-center mx-12">
      <div className="absolute  z-10  text-gray-300 opacity-40 font-bold hidden sm:block sm:mr-24 text-8xl ml-[10%] lg:text-9xl">
        <p className="">Newsletter</p>
      </div>
      <p className="font-bold text-3xl tracking-widest">
        Subscribe Our Newsletter
      </p>
      <p className="my-8 tracking-wide">
        Get the latest information and promo offers directly
      </p>
      <div className="flex flex-col sm:flex-row gap-x-2  gap-y-5 lg:justify-center lg:items-center w-full mx-auto md:w-1/2">
        <Input
          placeholder="Input email address"
          className="rounded-none h-10 w-2/1 sm:w-3/4 border-black "
        />
        <Button className=" border-[1.2px] border-gray-900 w-36 h-10 font-semibold">
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default SubscribeNews;
