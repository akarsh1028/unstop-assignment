"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Sidebar from './Sidebar'

const Navbar = () => {

  const [openSidebar, setSidebar] = useState(false);

  return (
    <>
      <nav className='flex items-center px-[0.9375rem] py-[0.625rem] gap-[0.623rem]'>
        <div className='rounded-full placecenter bg-verylightblue w-10 h-10 cursor-pointer' onClick={() => setSidebar(true)}><Image src="/segment.svg" alt='segment' width={30} height={30}/></div>
        <div className='maintext'>Assessment</div>
      </nav>
      { openSidebar && <Sidebar setSidebar={setSidebar}/> }
    </>
  )
}

export default Navbar