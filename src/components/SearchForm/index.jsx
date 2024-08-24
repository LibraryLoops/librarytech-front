import React from 'react';

const SearchForm = ({ value, onChange }) => {
  return (
    <form className='p-5 flex-grow'>
      <input
        className='rounded-lg font-sans text-xl w-full sm:w-full md:w-full lg:w-full h-12 p-2 text-sky-100 bg-stone-700 px-4'
        type="text"
        placeholder='Procure por títulos, autor...'
        value={value}
        onChange={onChange}
      />
    </form>
  );
};

export default SearchForm;
