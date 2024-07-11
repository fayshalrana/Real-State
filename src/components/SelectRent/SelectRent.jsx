import React from 'react'
import Button from '../Button/Button'
import Select from 'react-select'

// Define custom styles for react-select
const customStyles = {
    control: (provided, state) => ({
        ...provided,
        borderColor: state.isFocused ? '#4F46E5' : '#E5E7EB',
        boxShadow: state.isFocused ? '0 0 0 2px rgba(79, 70, 229, 0.2)' : 'none',
        border: 'none', // Remove border
        '&:hover': {
            borderColor: state.isFocused ? '#4F46E5' : '#E5E7EB'
        }
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? '#4F46E5' : 'transparent',
        color: state.isFocused ? 'white' : 'black',
        border: 'none', // Remove border
        '&:hover': {
            backgroundColor: '#4F46E5',
            color: 'white'
        }
    })
};



const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
const SelectRent = () => {
    return (
        <div className='absolute left-0 py-10 px-5 bg-white rounded-md grid grid-col-1 gap-5 md:grid-cols-4 w-full shadow-lg'>
            <div className="flex flex-col gap-3 lg:pr-12 md:border-r">
                <label htmlFor="" className='text-sm lg:text-lg text-black font-semibold'>Location</label>
                <Select className='focus:outline-none' options={options}
                    defaultValue={"Select your city"}
                    styles={customStyles} // Apply custom styles
                />
            </div>
            <div className="flex flex-col gap-3 lg:px-10 lg:border-r">
                <label htmlFor="" className='text-sm lg:text-lg text-black font-semibold'>Property Type</label>
                <Select className='focus:outline-none' options={options}
                    defaultValue={"Select your city"}
                    styles={customStyles} // Apply custom styles
                />
            </div>
            <div className="flex flex-col gap-3 lg:px-10 md:border-r">
                <label htmlFor="" className='text-sm lg:text-lg text-black font-semibold'>Rent Range</label>
                <Select className='focus:outline-none' options={options}
                    defaultValue={"Select your city"}
                    styles={customStyles} // Apply custom styles
                />
            </div>
            <div className="flex justify-center items-center">
                <Button children={"Search"} />
            </div>
        </div>
    )
}

export default SelectRent
