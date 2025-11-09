"use client"
import { useAppContext } from '@/app/(context)/AppContext';
import { categories } from "@/public/data";

import React from 'react';
import Item from '../../(components)/Item.jsx';




function Collection() {
  const { products } = useAppContext();

  return (
    <div className='max-padd-container px-0! mt-4'>
      <div className='flex flex-col sm:flex-row gap-6 mb-16'>
        {/* Filters Left Side */}
        <div className='min-w-64 bg-secondary p-4 pl-6 rounded-r-xl sm:h-screen rouded-xl'>
          <div className='px-4 py-3 mt-2 bg-white rounded-xl'>
            <h5 className='mb-4'>Sort By price</h5>
            <select className='border border-slate-900/10 outline-none text-sm text-gray-500 font-medium h-8 w-full px-2 rounded-md'>
              <option value="relevant">Relevant</option>
              <option value="low">Low to High</option>
              <option value="high">High to Low</option>
            </select>
          </div>

          <div className='pl-5 py-3 mt-4 bg-white rounded-xl'>
            <h5 className='mb-4'>Categories</h5>
              <div className='flex flex-col gap-2 text-sm font-light'>
               {categories?.map((cat, index) => (
            <label key={index} className='flex gap-2 font-semibold text-gray-500 cursor-pointer'>
            <input type="checkbox" className='w-3' />
            {cat}
            </label>
            ))}
            </div>

          </div>
        </div>

        {/* Filtered Products Right Side */}
        <div className='max-sm:px-10 pr-6'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6'>
            {products.length > 0 ? (
              products.map((product) => (
                <Item key={product.id} product={product} />
              ))
            ) : (
              <p className='capitalize'>No Products Found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
