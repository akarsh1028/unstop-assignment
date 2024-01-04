"use client"

import React, { useState } from 'react'
import Filters from './Filters';
import AddAssesment from '../assesment/AddAssesment';
import BarDetails from './BarDetails';

const MyAssessment = () => {
  const [show, setShow] = useState(false);
  return (
    <section className={`py-5 px-[0.94rem] xl:p-5`}>
      {show && <BarDetails />}
      <div className='max-xl:hidden'><BarDetails /></div>
      <section className={`flex flex-col gap-[0.62rem] relative bg-white xl:mt-6 ${show && 'mt-5 filterslidein'}`}>
        <Filters setShow={setShow} show={show}/>
        <AddAssesment/>
      </section>
    </section>
  )
}

export default MyAssessment;