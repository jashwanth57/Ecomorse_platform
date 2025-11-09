import React from 'react'
import Title from './Title'
import { Star } from 'lucide-react'
import Image from 'next/image'

function Testimonial() {
  return (
   <section className='max-padd-container py-16 x1:py-32'>
    <Title  
        title1={"People"} 
        title2={"Say About Us"} 
        titleStyle={"pb-10"} 
        paraStyle={"!block"} 
        />
    {/* Container */}
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {/* 1st user */}
        <div className="bg-secondary w-full  space-y-4 p-3 rounded-md  text-gray-500 text-sm">
            <div className="flex justify-between items-center">
                <div className="flex ">
                   <Star fill='black' stroke='black' height={17}/>
                   <Star fill='black' stroke='black' height={17}/>
                   <Star fill='black' stroke='black' height={17}/>
                   <Star fill='black' stroke='black' height={17}/>
                   <Star fill='black' stroke='black' height={17}/>
                   
                </div>
                <p>22 Jan 2025</p>
            </div>
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna”</p>
            <div className="flex items-center gap-2">
                <Image  src={'/user1.png'} alt = "userImg" height={47} width={47}    className="rounded-full"  />
                <p className="text-gray-500 font-medium">Donald Jackman</p>
            </div>
        </div>
            
        {/* 2ns user */}
            <div className="bg-secondary w-full  space-y-4 p-3 rounded-md  text-gray-500 text-sm">
            <div className="flex justify-between items-center">
                <div className="flex ">
                   <Star fill='black' stroke='black' height={17}/>
                   <Star fill='black' stroke='black' height={17}/>
                   <Star fill='black' stroke='black' height={17}/>
                   <Star fill='black' stroke='black' height={17}/>
                   <Star fill='black' stroke='black' height={17}/>
                  
                </div>
                <p>25 May 2025</p>
            </div>
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna”</p>
            <div className="flex items-center gap-2">
                <Image  src={'/user2.png'} alt = "userImg" height={47} width={47}    className="rounded-full"  />
                <p className="text-gray-500 font-medium">Donald Jackman</p>
            </div>
        </div>
        {/* User three */}
            <div className="bg-secondary w-full  space-y-4 p-3 rounded-md  text-gray-500 text-sm">
            <div className="flex justify-between items-center">
                <div className="flex ">
                   <Star fill='black' stroke='black' height={17}/>
                   <Star fill='black' stroke='black' height={17}/>
                   <Star fill='black' stroke='black' height={17}/>
                   <Star fill='black' stroke='black' height={17}/>
                </div>
                <p>29 April 2022</p>
            </div>
            <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna”</p>
            <div className="flex items-center gap-2">
                <Image  src={'/user3.png'} alt = "userImg" height={47} width={47}    className="rounded-full"  />
                <p className="text-gray-500 font-medium">Donald Jackman</p>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Testimonial