import Image from 'next/image'
import React from 'react'

const OverviewOne = ({ name, src, count, border }) => {
  return (
    <div className={`flex-1 flex p-[0.62rem] flex-col gap-[0.62rem] ${border && 'border-l border-solid border-bordergrey'} xl:py-4 xl:px-5 xl:w-[10.125rem]`}>
      <div className='text-[0.875rem] xl:font-semibold text-darkblue font-medium'>{name}</div>
      <div className='flex gap-[0.62rem] items-center'>
        <Image src={src} alt='totalassessment' width={40} height={40} />
        <span className='text-darkblue text-base font-semibold xl:text-xl xl:font-bold'>{count}</span>
      </div>
    </div>
  )
}

export default OverviewOne