import React, { useState } from 'react'

const Input = ({ type, label, onchange, placeholder}) => {

  const [error, setError] = useState(false);
  
  const handleChange = (e) => {
    // validating input
    let value = e.target.value;
    if(value === "") {
      onchange({value: value, error: true});
      setError(true)
    } else {
      onchange({value: value, error: false})
    }
  }

  return (
    <div className='flex flex-col gap-[0.62rem]'>
      <label className='paratext'>{label}</label>
      {/* Select */}
      { type === "select" ?
        <select defaultValue="select" className='p-[0.94rem] placecenter paratext border border-solid border-bordergrey rounded-lg outline-none'>
          <option value="select" disabled>Select</option>
        </select>
      :
        <div>
          {/* Input */}
          <input className='p-[0.94rem] w-full placecenter paratext border border-solid border-bordergrey rounded-lg placeholder:text-blurdate outline-none' type={type} placeholder={placeholder ? placeholder : 'Type Here'} onChange={(e) => handleChange(e)}/>
          {error && <p className='text-xs text-red-500 pt-[1px] pl-2'>Input cannot be empty</p>}
        </div>
      }
    </div>
  )
}

export default Input