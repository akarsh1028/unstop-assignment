import Image from 'next/image'
import React from 'react'

const List = ({name}) => {
  return (
    <div className='p-[0.88rem] border border-solid border-bordergrey rounded-xl xl:p-4 xl:card'>
      <div className='flex justify-between'>
        <div className='flex max-xl:items-center gap-[0.62rem] xl:flex-col'>
          <Image src="/job.svg" alt='job' width={50} height={50} />
          <div className='flex flex-col'>
            <div className='secondarytext'>{name}</div>
            <div className="flex items-center">
              <div className="paratext">Job</div>
              <div className='border-r border-bordergrey h-full m-[0.31rem] xl:m-[0.62rem]' />
              <div className="flex items-center gap-[0.38rem]">
                <Image className='relative -top-[1px]' src="/calendar.svg" alt='schedule' width={13} height={13} />
                <div className="text-blurdate paratext">20 Apr 23</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image src="/dots.svg" width={24} height={24} alt='dots' />
        </div>
      </div>
      <div className='border border-dotted my-[0.62rem] xl:my-4' />
      <div className='flex justify-between items-center'>
        <div className='flex gap-[0.62rem]'>
          <div>
            <div className='paratext font-semibold'>00</div>
            <div className='text-[0.63rem] xl:text-xs font-medium text-darkblue'>Duration</div>
          </div>
          <div>
            <div className='paratext font-semibold'>00</div>
            <div className='text-[0.63rem] xl:text-xs font-medium text-darkblue'>Questions</div>
          </div>
        </div>
        <div className='flex gap-1'>
          <div className='flex gap-1 items-center rounded-[3.125rem] border border-solid text-darkblue h-[1.875rem] px-2'>
            <Image src="/link.svg" alt='link' width={20} height={20}/>
            <span className='paratext'>Share</span>
          </div>
          <div className='rounded-full border border-solid bg-logocolor placecenter text-white text-[0.75rem] font-bold w-[1.875rem] h-[1.875rem]'>LP</div>
        </div>
      </div>
    </div>
  )
}

export default List