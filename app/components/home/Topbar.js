import React from 'react'

const Topbar = () => {
  return (
    <section className='flex h-[3.125rem] lg:h-[4.375rem] lg:px-5 lg:flex lg:items-center lg:border-b border-bordergrey'>
      <div className='text-xl text-darkblue font-semibold'>Assessment</div>
      <div className='m-5 border h-11 max-lg:hidden'/>
      <div className='barbuttons text-pureblue border-pureblue'>My Assessments</div>
      <div className='lg:hidden barbuttons text-greyblue border-whiteblue'>Unstop Assessments</div>
    </section>
  )
}

export default Topbar