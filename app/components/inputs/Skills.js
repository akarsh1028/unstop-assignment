import { skills } from '@/app/context/values'
import Image from 'next/image'
import React from 'react'

const Skills = ({ label, value, onchange, placeholder }) => {
  return (
    <div className='flex flex-col gap-[0.62rem]'>
      <label className='paratext'>{label}</label>
      <div className='border border-solid border-bordergrey rounded-lg'>
        <div className='p-[0.94rem] flex gap-[0.625rem] flex-wrap'>
          {skills.map((item, index) => (
            <div key={index} className='flex items-center py-[0.38rem] px-2 paratext rounded-[1.375rem] bg-[#DDEDFF] w-fit'>
              {item} <span className='placecenter'><Image src="/cut.svg" alt='close' width={24} height={24} /></span>
            </div>
          ))}

        </div>
        <input className='p-[0.94rem] placecenter w-full paratext border-t border-solid border-bordergrey placeholder:text-blurdate outline-none' type="text" placeholder={placeholder ? placeholder : 'Type Here'} value={value} onChange={(e) => onchange(e.target.value)} />
      </div>
    </div>
  )
}

export default Skills