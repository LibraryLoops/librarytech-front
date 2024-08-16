import React from 'react'

const SearchForm = () => {
    const nameFiter = "{props}";
    return (
        <form className='m-5'>
            <input
                className='rounded-lg font-sans text-xl w-screen h-18 p-2 font-poppins text-sky-100 bg-stone-700 px-4 max-w-5xl outline-none'
                type="text"
                placeholder='Procure por títulos, autor...'
            />
        </form>
    )
}

export default SearchForm;