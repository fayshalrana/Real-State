import React from 'react'
import Button from '../Button/Button'

const SelectSale = () => {
    return (
        <div className='absolute left-0 py-10 px-5 bg-white rounded-md grid grid-col-1 gap-5 md:grid-cols-4 w-full shadow-lg'>
            <div className="flex flex-col gap-3 lg:pl-10 lg:pr-16 md:border-r">
                <label htmlFor="" className='text-sm lg:text-lg text-black font-semibold'>Sale Location</label>
                <select name="" id="" className='text-secondary'>
                    <option value="">Select your city</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
            <div className="flex flex-col gap-3 lg:px-10 lg:border-r">
                <label htmlFor="" className='text-sm lg:text-lg text-black font-semibold'>Sale Type</label>
                <select name="" id="" className='text-secondary'>
                    <option value="">Select property type</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
            <div className="flex flex-col gap-3 lg:px-10 md:border-r">
                <label htmlFor="" className='text-sm lg:text-lg text-black font-semibold'>Sale Range</label>
                <select name="" id="" className='text-secondary'>
                    <option value="">Select sale range</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
            <div className="flex justify-center items-center">
                <Button children={"Search"} />
            </div>
        </div>
    )
}

export default SelectSale
