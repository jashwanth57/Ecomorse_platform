"use client"
import React, { use } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import TrustedBrands from './TrustedBrands';
import { useAppContext } from '../(context)/AppContext';
const Hero = () => {
    const {router} = useAppContext();
    const slides = [
        {
            headline: "Your All in One Gadget Store",
            subheadline : "Everything in one Place",
            image : "/bg1.png",
        },
        {
            headline : "Gear Up for Adventure",
            subheadline : "Durable Gadgets built to last",
            image : "/bg2.png"
        },
     
        {
            headline : "Smart Solutions for Everyday Life",
            subheadline : "Making Life Easier, One Gadget at a Time",
            image : "/bg4.jpg"
        },
        {
            headline : "Experience the Future Today",
            subheadline : "Next-Gen Gadgets for a Smarter Tomorrow",
            image : "/bg5.png"
        },
        {
            headline : "Unleash Your Creativity",
            subheadline : "Gadgets that Inspire Innovation",
            image : "/bg6.jpg"
        }

    ];
  return (
    <div  className='max-padd-container pt-2'>
        <Carousel>
            <CarouselContent className={"gap-4 pl-5"}>
                {slides.map((slide,index)=>(
                    <CarouselItem key = {index} 
                        style = {{
                            backgroundImage :   `url(${slide.image})`,
                            backgroundSize :     "cover",
                            backgroundPosition : "center",

                        }}
                        className={"h-screen sm:h-[599px] x1:h-[633px] relative bg-no-repeat rounded-2xl"}
                        >
                                                            <div className="flex flex-col h-full justify-center sm:pl-16">
                                            {/* Headline */}
                                            <h2 className="font-knewave font-light text-destructive">
                                            {slide.headline}
                                            </h2>

                                            {/* Subheadline */}
                                            <h2 className="capitalize sm:tracking-[7px]">
                                            {slide.subheadline}
                                            </h2>

                                            {/* Offer Section */}
                                            <div className="relative flex items-center my-4">
                                            {/* Vertical "Up to" */}
                                            <h4 className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-left select-none uppercase text-[10px] sm:text-sm font-light tracking-[0.2em] text-gray-700">
                                            Up to
                                            </h4>

                                            {/* Main offer text */}
                                            <h1 className="ml-10 sm:ml-16 uppercase tracking-[0.22rem] text-4xl sm:text-7xl font-extrabold">
                                            40% Off
                                            </h1>
                                            </div>



                                <div className='flex gap-2 items-center'>
                                    <h3>Starting at</h3>
                                    <span className='text-5xl font-bold text-destructive'>
                                        <span className='text-2xl relative bottom-3'>$</span>99.
                                        <span  className='text-2xl'>99</span>
                                    </span>
                                </div>
                                <Button  onClick={()=> router.push('/collection')} className={"py-6 sm:py-8 w-44 sm:w-56 font-semibold sm:text-lg rounded-none mt-8 flexCenter gap-2 cursor-pointer"}>
                                    Shop Now
                                    <MoveRight style={{width:"26px",height:"26px"}} strokeWidth={3}></MoveRight>
                                   

                                </Button>

                                 {/* <TrustedBrands /> */}
                            </div>
                        </CarouselItem>
                        

                ))}
               
                <CarouselItem>...</CarouselItem>
                <CarouselItem>...</CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    </div>
  )
}

export default Hero