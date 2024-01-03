"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { menuItems } from '../context/values'

const Sidebar = ({ setSidebar }) => {

  const [animate, setAnimate] = useState(true);

  const closeSidebar = () => {
    setAnimate(false);
    setTimeout(() => {
      setSidebar(false)
    },700)
  }
  return (
    <section className='max-lg:fullscreen '>
      <div className={`flex flex-col lg:items-center lg:bg-white bg-verylightblue px-5 py-10 lg:px-7 lg:py-4 w-4/5 lg:w-full h-full ${animate ? 'side-in' : 'side-out'}`}>
        {/* Sidebar heading */}
        <div className='flex align-top justify-between w-full h-10 lg:hidden'>
          <div className='menutext'>Menu</div>
          <div onClick={closeSidebar}><Image src="/cut.svg" alt='close' width={24} height={24} /></div>
        </div>
        {/* Mapping sidebar menu items */}
        {menuItems.map((item) => (
          <div key={item.name} className={`${item.name === "Assessment" && 'activemenu'} sidebar-items`}>
            <Image src={item.icon} width={20} height={20} alt='dashboard' />
            <span className={`menutext ${item.name === "Assessment" && 'text-pureblue'}`}>{item.name}</span>
          </div>
        ))}
        <div className='break'/>
        <div className='flex items-center justify-between w-full lg:flex-col-reverse lg:gap-5'>
          <div className='flex justify-center items-center gap-[0.625rem] lg:flex-col'>
            <Image src="/sidebar/admin_meds.svg" width={20} height={20} alt='roundstatus' />
            <span className='menutext'>Round Status</span>
          </div>
          <div className='placecenter rounded-[1.375rem] border border-solid border-admin px-2 font-medium text-[0.63rem] bg-bgorange text-admin h-[1.125rem]'>
            Admin
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sidebar