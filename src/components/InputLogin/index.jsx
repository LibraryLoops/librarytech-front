import React from 'react'

const InputLogin = ({ placeholder = "", value, onChange, type }) => {
  return (
    <input type={type} value={value} onChange={onChange} className="bg-gray-900 text-center border-b-2 border-stone-500 px-4 py-2 flex m-4" placeholder={placeholder} />
  )
}

export default InputLogin
