import Image from 'next/image'
import React from 'react'

const BarDetails = () => {
  return (
    <div className='border border-solid border-bordergrey rounded-xl flex flex-col gap-[0.0625rem]'>
      {/* Total Assesment and Purspose Start */}
      <div className='flex'>
        <div className='flex-1 flex p-[0.62rem] flex-col gap-[0.62rem] '>
          <div className='secondarytext font-medium'>Total Assessment</div>
          <div className='flex gap-[0.62rem] items-center'>
            <Image src="/boxlayer.svg" alt='totalassessment' width={40} height={40} />
            <span className='maintext'>34</span>
          </div>
        </div>
        <div className='flex-1 flex p-[0.62rem] flex-col gap-[0.62rem] border-l border-solid border-bordergrey'>
          <div className='secondarytext font-medium'>Total Purpose</div>
          <div className='flex gap-[0.62rem] items-center'>
            <Image src="/link2.svg" alt='totalassessment' width={40} height={40} />
            <span className='maintext'>11</span>
          </div>
        </div>
      </div>
      {/* Total Assesment and Purspose End */}
      {/* Condidates Start */}
      <div className='flex p-[0.62rem] flex-col gap-[0.62rem] border-t border-solid border-bordergrey'>
        <div className='secondarytext font-medium'>Candidates</div>
        <div className='flex gap-[0.62rem] items-center'>
          <Image src="/profile.svg" alt='totalassessment' width={40} height={40} />
          <div className='flex flex-col border-r border-solid border-bordergrey pr-[0.88rem]'>
            <p className='maintext flex items-center gap-1'>11,145 <span className='text-[0.625rem] font-medium text-[#05C165]'>+89</span></p>
            <span className='text-[0.625rem] font-medium'>Total Candidate</span>
          </div>
          <div className='flex flex-col pl-[0.88rem]'>
            <p className='maintext flex items-center gap-1'>1,14 <span className='text-[0.625rem] font-medium text-[#05C165]'>+89</span></p>
            <span className='text-[0.625rem] font-medium'>Who Attamped</span>
          </div>
        </div>
      </div>
      {/* Condidates End */}
      {/* Candidates Source Start */}
      <div className='flex p-[0.62rem] flex-col gap-[0.62rem] border-t border-solid border-bordergrey'>
        <div className='secondarytext font-medium'>Candidates Source</div>
        <div className='flex gap-[0.62rem] items-center'>
          <Image src="/profile.svg" alt='totalassessment' width={40} height={40} />
          <div className='flex flex-col border-r border-solid border-bordergrey pr-[0.62rem]'>
            <p className='maintext flex items-center gap-1'>11,000<span className='text-[0.625rem] font-medium text-[#05C165]'>+89</span></p>
            <span className='text-[0.625rem] font-medium'>E-mail</span>
          </div>
          <div className='flex flex-col pr-[0.62rem] border-r border-solid border-bordergrey'>
            <p className='maintext flex items-center gap-1'>11,000<span className='text-[0.625rem] font-medium text-[#05C165]'>+89</span></p>
            <span className='text-[0.625rem] font-medium'>Social Share</span>
          </div>
          <div className='flex flex-col'>
            <p className='maintext flex items-center gap-1'>11,000<span className='text-[0.625rem] font-medium text-[#05C165]'>+89</span></p>
            <span className='text-[0.625rem] font-medium'>Unique Link</span>
          </div>
        </div>
      </div>
      {/* Candidates Source End */}
    </div>
  )
}

export default BarDetails