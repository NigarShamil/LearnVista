import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = () => {
    return (
        <div className='w-80 flex items-center px-4 rounded-md bh-slate-100'>
            <input
                type="text"
                placeholder='Search...'
                className='w-full text-xs bg-transparent py-[11px] outline-none '
            // value={value}
            // onChange={onChange}
            />

            {/* {
                value && (
                    <IoMdClose className='text=xl text-slate-500 cursor-pointer hover:text-black mr-3' />
                )
            } */}
            <IoMdClose className='text=xl text-slate-500 cursor-pointer hover:text-black mr-3' />
            <FaMagnifyingGlass className='text-slate-400 cursor-pointer hover:text-black' />
        </div>
    )
}

export default SearchBar