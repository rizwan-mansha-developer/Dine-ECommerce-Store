import React from 'react'
import {FC} from 'react'

interface PhrasesType{
  heading:string,
  description:string
}

const Phrases:FC<PhrasesType> = (props) => {
  return (
    <div className='mr-10 mt-10'>
      
      <div className='font-semibold text-lg max-w-[200px]'>
      {props.heading}
      </div>
      <div className='max-w-[250px] mt-2'>
      {props.description}
      </div>
      
    </div>
  )
}

export default Phrases;
