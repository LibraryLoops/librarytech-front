import React from 'react'

const HomeButton = ({children}) => {
  return (
    <button className='text-white bg-stone-800 rounded-[40px] px-6 py-2 text-lg border-none outline-offset-0 hover:outline-gray-500 outline-none hover:duration-200 hover:bg-stone-700'>
        {children}
    </button>
  )
}

export default HomeButton