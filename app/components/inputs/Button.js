import React from 'react'

const Button = ({text, onclick}) => {
  return (
    <button className='px-[1.88rem] py-[0.62rem] rounded-lg placecenter bg-pureblue text-white w-full h-10' onClick={onclick}>{text}</button>
  )
}

export default Button