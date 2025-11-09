'use client'
import React, { use, useEffect, useState } from 'react'
import { useAppContext } from '../(context)/AppContext'
import Title from './Title'
import Item from './Item'


function PopularProducts() {
    const {products} = useAppContext()
    const [popularProducts, setPopularProducts] = useState([])
    useEffect(()=>{
        const data = products.filter((item) => item.popular === true).slice(0,8)
        setPopularProducts(data)
    },[products])
     
  return (
      <section className='max-padd-container py-16 x1:py-28'>
        <Title  
        title1={"Popular"} 
        title2={"Products"} 
        titleStyle={"pb-2"} 
        paraStyle={"!block"} 
        />

        {/* Container */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cals-5 gap-8'>
            {popularProducts.map((product)=>
                (
                   
                      <Item   key={product.id} product={product}/>              
                ))}
        </div>    
    </section>
  )
}

export default PopularProducts