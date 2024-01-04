import Image from 'next/image'
import React from 'react'

const OverviewTwo = ({ name, data }) => {
  return (
    <div className='flex p-[0.62rem] flex-col gap-[0.62rem] max-xl:border-t border-solid border-bordergrey xl:py-4 xl:px-5 xl:border-l'>
      <div className='text-[0.875rem] xl:font-semibold text-darkblue font-medium'>{name}</div>
      <div className='flex gap-[0.62rem] items-center'>
        <Image src="/profile.svg" alt='totalassessment' width={40} height={40} />
        {data.map((item, index) => (
          <div key={item.name} className={`flex flex-col ${data.length > index+1 && 'border-r border-solid border-bordergrey'} pr-[0.88rem] xl:pr-5`}>
            <p className='text-darkblue text-base font-semibold xl:text-xl xl:font-bold flex items-center gap-1'>{item.count} <span className='text-[0.625rem] xl:text-xs font-medium text-[#05C165]'>+89</span></p>
            <span className='text-[0.625rem] font-medium xl:text-xs text-darkblue'>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OverviewTwo