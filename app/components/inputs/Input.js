import React from 'react'

const Input = ({ type, label, value, onchange, placeholder}) => {
  return (
    <div className='flex flex-col gap-[0.62rem]'>
      <label className='paratext'>{label}</label>
      { type === "select" ?
        <select defaultValue="select" className='p-[0.94rem] placecenter paratext border border-solid border-bordergrey rounded-lg outline-none'>
          <option value="select" disabled>Select</option>
        </select>
      :
        <input className='p-[0.94rem] placecenter paratext border border-solid border-bordergrey rounded-lg placeholder:text-blurdate outline-none' type={type} placeholder={placeholder ? placeholder : 'Type Here'} value={value} onChange={(e) => onchange(e.target.value)}/>
      }
    </div>
  )
}

export default Input