import React from 'react'
import Button from '../Button/Button'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineZoomOutMap } from "react-icons/md";
const HotSaleCard = ({ card }) => {
    return (
        <div className='h-[425px] relative mx-2 rounded-md overflow-hidden group'>
            <div className="absolute top-0 left-0 h-full w-full bg-primary/40"></div>
            <div className="h-full w-full">
                <img className='w-full h-full object-cover' src={card.img} alt="slider image" />
            </div>
            <div className="absolute w-full h-full p-4 top-0 left-0 flex flex-col justify-between">
                <div className="">
                    <span className='px-3 py-2 bg-primary rounded-sm text-white capitalize'>hot Deal</span>
                </div>
                <div className="flex justify-center duration-300 invisible opacity-0 group-hover:visible group-hover:opacity-100">
                    <Button children={"view details"} isHover={true} />
                </div>
                <ul className='flex justify-between'>
                    <li className='text-white flex items-center gap-2 text-lg'><IoLocationOutline className='text-2xl' /> Washington</li>
                    <li className='text-white flex items-center gap-2 text-lg'><MdOutlineZoomOutMap className='text-2xl' />12000</li>
                </ul>
            </div>
        </div>
    )
}

export default HotSaleCard
