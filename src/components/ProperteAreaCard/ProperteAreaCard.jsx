import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import Button from '../Button/Button'
import cn from '../../utils/cn';
const ProperteAreaCard = ({ className, item }) => {

    return (
        <div className={cn("rounded-lg overflow-hidden border relative h-[250px]", className)}>
            <div className="absolute w-full h-full left-0 top-0 bg-primary/40"></div>
            <img src={item.image} className='w-full h-full object-cover' alt="" />
            <div className="p-6 w-full h-full z-10 absolute top-0 left-0 flex flex-col justify-between group">
                <div className="flex flex-col gap-2 lg:gap-4">
                    <h3 className='text-white font-semibold leading-6 text-2xl'>{item.location}</h3>
                    <p className='text-white font-normal'>{item.listings} listings</p>
                </div>
                <div className="flex justify-center w-full duration-300 invisible opacity-0 group-hover:visible group-hover:opacity-100">
                    <Button children={"View Detail"} isHover={true} />
                </div>
                <div className="">
                    <CiLocationOn className='text-2xl text-white' />
                </div>
            </div>
        </div>
    )
}

export default ProperteAreaCard
