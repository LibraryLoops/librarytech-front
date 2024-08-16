import React from 'react'

const Button = ({children, color = 'bg-stone-700 hover:bg-stone-800'}) => {
  return (
    <button className={` ${color} text-sky-100 text-lg bg-stone-700 rounded-[40px] px-20 py-3 border-none outline-offset-0 hover:outline-gray-500 outline-none hover:duration-200`} >
    {children}
</button>
  )
}

export default Button