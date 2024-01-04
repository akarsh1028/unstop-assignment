import React from 'react'

const Topbar = () => {
  return (
    <section className='flex h-[3.125rem] xl:h-[4.375rem] xl:px-5 xl:flex xl:items-center xl:border-b border-bordergrey'>
      <div className='max-xl:hidden text-xl text-darkblue font-semibold'>Assessment</div>
      <div className='m-5 border h-11 max-xl:hidden'/>
      <div className='barbuttons text-pureblue border-pureblue'>My Assessments</div>
      <div className='xl:hidden barbuttons text-greyblue border-whiteblue'>Unstop Assessments</div>
    </section>
  )
}

export default Topbar