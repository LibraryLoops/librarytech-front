import React from 'react'

const SearchForm = ({value, onChange}) => {
    const nameFiter = "{props}";
    return (
        <form className='p-5'>
            <input
                className='rounded-lg font-sans text-xl w-screen h-18 p-2 font-poppins text-sky-100 bg-stone-700 px-4 max-w-5xl outline-none'
                type="text"
                placeholder='Procure por títulos, autor...'
                value={value}
                onChange={onChange}
            />
        </form>
    )
}

export default SearchForm;