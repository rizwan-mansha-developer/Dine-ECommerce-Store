import {StaticImageData} from "next/image";
import bazaar from "/public/BrandLogo/bazaar.webp"
import bustle from '/public/BrandLogo/bustle.webp'
import instyle from '/public/BrandLogo/instyle.webp'
import varsace from '/public/BrandLogo/varsace.webp'

export interface BrandsType {
    id:number,
    img: StaticImageData,
    alt: string
}

const brandLogo:BrandsType[] = [
    {   id:1,
        img:bazaar,
        alt:"Bazaar Brand"
    },
    {   id:2,
        img:bustle,
        alt:"Bustle Brand"
    },
    {   id:3,
        img:varsace,
        alt:"Versace Brand"
    },
    {   id:4,
        img:instyle,
        alt:"Instyle Brand"
    },
   
]

export default brandLogo;