"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Input from '../inputs/Input'
import Button from '../inputs/Button'
import Skills from '../inputs/Skills'

const Modal = ({setShowModal}) => {

  const [name, setName] = useState("");
  return (
    <div className='fullscreen'>
      <div className='bg-white max-lg:bottom-0 lg:w-[36.94rem] absolute w-full h-[90%] rounded-tl-xl rounded-tr-xl lg:rounded-lg overflow-hidden'>
        <div className='absolute top-0 bg-white w-full flex h-[3.75rem] justify-between items-center px-[0.94rem] border-b border-solid border-bordergrey'>
          <div className='secondarytext'>Create new assessment</div>
          <div className='bg-bgorange placecenter w-10 h-10 rounded-full' onClick={() => setShowModal(false)}><Image alt="close" src="/close.svg" width={30} height={30}/></div>
        </div>
        <div className='mt-[60px] py-4 px-[0.94rem] flex flex-col gap-5 overflow-auto h-[77%]'>
          <Input label="Name of assessment" type="text" value={name} onchange={setName}/>
          <Input label="Purpose of the test is" type="select"/>
          <Input label="Description" type="select"/>
          <Skills label="Skills"/>
          <Input label="Duration of assessment" type="text" placeholder="HH:MM:SS"/>
        </div>
        <div className='px-[1.88rem] py-5 absolute bottom-0 bg-white z-10 w-full placecenter shadow-btnshadow'>
          <Button text="Save" onclick={() => console.log("first")}/>
        </div>
      </div>
    </div>
  )
}

export default Modal