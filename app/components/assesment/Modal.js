"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Input from '../inputs/Input'
import Button from '../inputs/Button'
import Skills from '../inputs/Skills'

const Modal = ({setShowModal, list, setList}) => {

  const [name, setName] = useState({ value:"", error: false });
  const [time, setTime] = useState({ value:"", error: false });
  const [animate, setAnimate] = useState(true);

  const closeModal = () => {
    setAnimate(false);
    setTimeout(() => {
      setShowModal(false)
    },500)
  }

  const addAssesment = () => {
    let obj = { name: name.value ? name.value : "Math Assesment" };
    const newList = list;
    newList.push(obj);
    setList(newList);
    closeModal();
  }

  return (
    <div className='fullscreen'>
      <div className={`bg-white xl:w-[36.94rem] absolute w-full h-[90%] xl:h-full rounded-tl-xl rounded-tr-xl xl:rounded-lg overflow-hidden ${animate ? 'modalin' : 'modalout'}`}>
        <div className='absolute top-0 bg-white w-full flex h-[3.75rem] justify-between items-center px-[0.94rem] border-b border-solid border-bordergrey'>
          <div className='secondarytext'>Create new assessment</div>
          <div className='bg-bgorange placecenter w-10 h-10 rounded-full cursor-pointer' onClick={() => closeModal()}><Image alt="close" src="/close.svg" width={30} height={30}/></div>
        </div>
        <div className='mt-[60px] py-4 px-[0.94rem] flex flex-col gap-5 overflow-auto h-[77%]'>
          <Input label="Name of assessment" type="text" onchange={setName}/>
          <Input label="Purpose of the test is" type="select"/>
          <Input label="Description" type="select"/>
          <Skills label="Skills"/>
          <Input label="Duration of assessment" type="text" placeholder="HH:MM:SS" onchange={setTime}/>
        </div>
        <div className='px-[1.88rem] py-5 absolute bottom-0 bg-white z-10 w-full placecenter shadow-btnshadow'>
          <Button text="Save" onclick={() => addAssesment()}/>
        </div>
      </div>
    </div>
  )
}

export default Modal