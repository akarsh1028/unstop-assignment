"use client"

import React, { useState } from 'react'
import Filters from './Filters';
import AddAssesment from '../assesment/AddAssesment';
import BarDetails from './BarDetails';

const MyAssessment = () => {
  const [show, setShow] = useState();
  return (
    <section className={`py-5 px-[0.94rem] lg:p-5`}>
      {show && <BarDetails />}
      <section className={`flex flex-col gap-[0.62rem] relative bg-white ${show && 'mt-5 filterslidein'}`}>
        <Filters setShow={setShow} show={show}/>
        <AddAssesment/>
      </section>
    </section>
  )
}

export default MyAssessment;