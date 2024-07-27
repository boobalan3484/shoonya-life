import React, { useRef } from 'react'
import { useAppContext } from '../Context';

const Search = () => {

  const { searchInput, setSearchInput, handleSearch } = useAppContext();
  const inputRef = useRef()

  return (
    <form onSubmit={handleSearch} className='flex items-center justify-between gap-x-4'>
      <div className="mt-6 sm:mt-0" data-aos="fade-down" data-aos-delay="1200">
        <div className="relative ">
          <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
          </svg>
          <input
            type="text"
            name='search-box'
            placeholder="Search retreats by title"
            className="w-full pl-12 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 rounded-lg sm:max-w-xs"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            ref={inputRef}
          />
        </div >
      </div >
      <button
        type='submit'
        onClick={() => inputRef.current.focus()}
        aria-label='Find-item'
        className="inline-block py-2 px-4 mt-6 sm:mt-0 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
        data-aos="fade-down" data-aos-delay="1400"
      >
        Find
      </button>
    </form >
  )
}

export default Search