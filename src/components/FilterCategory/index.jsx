import React from 'react'

const FilterCategory = ({imageUrl, nameFilter}) => {
    return (
        <>
        <div className='flex flex-col gap-1 m-5'>
            <div className='bg-slate-300 text-center'>
                <img className=' w-28 h-28' src={imageUrl} alt="Todos" />
            </div>
            <p className='mt-1 text-slate-50 font-sans font-bold'>{nameFilter}</p>
        </div>
        </>
    )
}

export default FilterCategory;