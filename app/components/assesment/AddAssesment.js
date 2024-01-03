"use clinet"

import Image from 'next/image'
import React, { useState } from 'react'
import List from './List'
import Modal from './Modal'

const AddAssesment = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className='flex flex-col gap-[0.94rem] lg:gap-7 lg:flex-wrap lg:flex-row'>
        <div className='py-5 px-[1.875rem] placecenter flex-col gap-3 border border-dashed rounded-xl border-bordergrey bg-whiteblue lg:card lg:p-7 cursor-pointer' onClick={() => setShowModal(true)}>
          <div className='placecenter flex-col gap-[0.62rem]'>
            <div className='placecenter bg-white rounded-full w-[3.125rem] h-[3.125rem] lg:w-[4.375rem] lg:h-[4.375rem]'><Image src="/add.svg" alt='add' width={35} height={35} /></div>
            <div className='secondarytext'>New Assessment</div>
          </div>
          <p className='text-center paratext'>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>
        </div>
        <List />
      </div>
      {showModal && <Modal setShowModal={setShowModal}/>}
    </>
  )
}

export default AddAssesment