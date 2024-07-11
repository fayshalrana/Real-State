import React from 'react'
import { AiOutlineUnorderedList } from "react-icons/ai";
import { LuLayoutGrid } from "react-icons/lu";
const PropertiesFilter = ({ handleShowGrid, handleShowList }) => {
    return (
        <div className='flex justify-between flex-col md:flex-row items-center gap-4'>
            <div className="flex items-center gap-3">
                <div className="flex gap-3 items-end">
                    <button onClick={handleShowList}><AiOutlineUnorderedList className='text-xl' /></button>
                    <button onClick={handleShowGrid}><LuLayoutGrid className='text-xl' /></button>
                </div>
                <div className="flex items-center gap-2">
                    <span className='text-[16px] font-medium text-black'>Sort by:</span>
                    <select name="" id="" className='text-[16px] text-secondary outline-none'>
                        <option value="">Default Order</option>
                        <option value="">Option 1</option>
                        <option value="">Option 2</option>
                        <option value="">Option 3</option>
                    </select>
                </div>

            </div>
            <div className="">
                <ul className='flex items-center gap-3 md:gap-8'>
                    <li className='text-[14px] md:text-[16px] font-medium hover:text-black cursor-pointer text-secondary leading-5 -tracking-normal'>All Properties</li>
                    <li className='text-[14px] md:text-[16px] font-medium hover:text-black cursor-pointer text-secondary leading-5 -tracking-normal'>For Buy</li>
                    <li className='text-[14px] md:text-[16px] font-medium hover:text-black cursor-pointer text-secondary leading-5 -tracking-normal'>For Sale</li>
                    <li className='text-[14px] md:text-[16px] font-medium hover:text-black cursor-pointer text-secondary leading-5 -tracking-normal'>For Rent</li>
                </ul>
            </div>
        </div>
    )
}

export default PropertiesFilter
