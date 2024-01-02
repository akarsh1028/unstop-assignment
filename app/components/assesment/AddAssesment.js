import Image from 'next/image'
import React from 'react'
import List from './List'

const AddAssesment = () => {
  return (
    <div className='flex flex-col gap-[0.94rem]'>
      <div className='py-5 px-[1.875rem] border border-dashed rounded-xl border-bordergrey bg-whiteblue'>
        <div className='placecenter flex-col gap-3'>
          <div className='placecenter flex-col gap-[0.62rem]'>
            <div className='placecenter bg-white rounded-full w-[3.125rem] h-[3.125rem]'><Image src="/add.svg" alt='add' width={29} height={30}/></div>
            <div className='secondarytext'>New Assessment</div>
          </div>
          <p className='text-center paratext'>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>
        </div>
      </div>
      <List/>
    </div>
  )
}

export default AddAssesment