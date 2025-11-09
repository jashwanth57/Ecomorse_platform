import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
   <section className='max-padd-container'>
    <div className='flex flex-col sm:flex-row flex-wrap gap-4 x1:gap-13 gap-y-10'>
        <div className='flex-1'> 
          <Image src={"/banner-1.png"} alt='bannerImage' height={1200} width={700} className='w-full rounded-lg' />
        </div>
            <div className='flex-1'> 
          <Image src={"/banner-2.png"} alt='bannerImage' height={1200} width={700} className='w-full rounded-lg' />
        </div>
    </div>
   </section>
  )
}

export default Banner