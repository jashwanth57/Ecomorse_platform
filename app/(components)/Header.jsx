"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown, ChevronDownIcon, Search ,User } from 'lucide-react'
import { categories } from '@/public/data'
import {Button} from "@/components/ui/button";

function Header() {
  const [selectedCategory,setSelectedCategory] = useState("")
  return (
   <header className='max-padd-container'>
    <div className='bg-secondary px-5 py-2 mt-2 w-full z-50 rounded-full'>
    <div className='flexBetween gap-4'>
      {/* LOGO */}
      <div className='flex-1 flex gap-3'>
        <Link href = {'/'}>
<span className="text-4xl font-extrabold tracking-wide bg-gradient-to-r from-red-500 via-orange-400 via-yellow-400 via-green-400 via-blue-500 via-indigo-500 to-pink-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
  Shoppzo
</span>
          </Link>
      </div>
     {/*SEARCHBAR*/}
     <div className='flex-2 lg:flex-1 relative hidden md:flex items-center'>
    <div className="flex transition-all duration-300 ease-in-out bg-white w-full max-w-[566px] p-4 ring-1 ring-slate-900/5 rounded-full overflow-hidden">
  <input
    type="text"
    placeholder="Type here..."
    className="w-full text-sm outline-none pr-10 placeholder-center"
  />
  <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button 
          className="flex items-center gap-1 px-3 py-1 border-x-2 border-slate-900/10 cursor-pointer font-semibold text-sm text-gray-600 hover:text-gray-900 outline-none bg-white"
        >
          {selectedCategory || "Categories"}
          <ChevronDownIcon strokeWidth={2.25} size={19} />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white shadow-lg rounded-md">
        <DropdownMenuLabel>Browse Categories</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {categories.map((cat, index) => (
          <DropdownMenuItem key={index}>
           <p>{cat}</p>
          </DropdownMenuItem>
              ))}

      </DropdownMenuContent>
    </DropdownMenu>
            <div>
              <Search strokeWidth={2.5} />
            </div>
        </div>
     </div>
      {/* Cart & User */}
      <div className='sm:flex-1 flex items-center sm:justify-end gap-x-4 sm:gap-x-8'>
        {/* Cart */}
        <div className='ring-1 ring-slate-900 px-3 text-lg font-bold  rounded-full relative'>
          Cart
          <span className='bg-primary text-white text-[12px] font-semibold absolute -top-3.5 -right-2 flexCenter w-4 h-4 rounded-full shadow-md'>0</span>
        </div>
        {/* User */}
        <div className="group">
          {/* LoginButton */}
          <Button size={'lg'}>
            <User />
            Login
          </Button>
        </div>
      </div>
    </div>
    </div>
   </header>
  )
}

export default Header