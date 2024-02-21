"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import vector from './Images/Vector.png'
import search from './Images/search.png'
import noti from './Images/noti.png'

function Header() {
    const [name,setName] = useState('Colter')
  return (
    <div className='flex items-center justify-between text-white px-5 mt-1'>
      <div className='flex flex-col'>
        <span className='text-2xl font-light'>Hello,</span>
        <span className='flex items-center justify-center font-medium text-2xl '>Dr. {name}! 
        <Image src={vector} height={20} width={20} className='ml-3'/></span>
      </div>
      <div className='flex items-center justify-between rounded-lg p-3 px-10 bg-[#2C3A58]'>
        <Image src={search} className='mr-4 cursor-pointer'/>
        <input type="text" placeholder='Search' className=' bg-transparent outline-none'/>
      </div>
      <div className='flex items-center justify-center p-3 rounded-lg bg-[#409BEE]'>
      <Image src={noti} width={20} height={20}/>
      </div>
    </div>
  )
}

export default Header
