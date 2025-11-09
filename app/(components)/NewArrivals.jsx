"use client"
import React, { useEffect, useState } from 'react'
import Title from './Title'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { products } from '@/public/data'
import { useAppContext } from '../(context)/AppContext'
import Item from './Item'

const NewArrivals = () => {
    const {products} = useAppContext()
   const [newArrivals, setNewArrivals] = useState([])
//    it will run only once when component runs
//Each time these products as been changed then the usestate will runs again
   useEffect(()=>{
    const data = products.slice(0,7)
    setNewArrivals(data)
    console.log(data)
    
   },[products])
  return (
       <section className="max-padd-container pt-9 pb-1">
  <Title 
    title1="NEW" 
    title2="Arrivals"
    titleStyle="pb-2"        // reduced from pb-14 → pb-6 (1.5rem)
    paraStyle="!inline-block text-gray-500" // prevent extra block spacing
  />

  {/* Container */}
  <Carousel className="w-full">
    <CarouselContent className="-ml-2.5">
      {newArrivals.map((product) => (
        <CarouselItem 
          key={product.id} 
          className="pl-5 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
        >
          <div className="p-1">
            <Item product={product} />
          </div>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</section>

  )
}

export default NewArrivals