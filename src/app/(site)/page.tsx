import Image from "next/image";
// import Product1 from '../views/ProductList'
import Hero from "./views/Hero";
import Promotions from "./views/Promotions";
import ProductSection from "./views/ProductSection";
import UniqueAthentic from "./views/UniqueAthentic";
import SubscribeNews from "./views/SubscribeNews";
import FetchData from "./components/FetchData";

export default async function Home() {
  const result = await FetchData();
  console.log(result)
  return (
    <div>
      <Hero />
    
      <Promotions />
      <ProductSection />
      <UniqueAthentic />
      <SubscribeNews />
    </div>
  );
}
