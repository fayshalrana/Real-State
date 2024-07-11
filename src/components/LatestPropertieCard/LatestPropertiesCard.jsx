import React from 'react'
import img from '../../assets/images/properteImg2.jpeg'
import user1 from '../../assets/images/user1.png'
import { LuShare2 } from "react-icons/lu";
import { IoCarOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { HiOutlinePlus } from "react-icons/hi";
import { PiBathtub } from "react-icons/pi";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { Link } from 'react-router-dom';
const LatestPropertiesCard = ({ item }) => {

    return (
        <div className='rounded-lg overflow-hidden border group'>
            <Link to="/">
                <div className="w-full h-[240px] overflow-hidden">
                    <img src={item.propertyImage} alt="latest properties image" className='w-full h-full duration-300 group-hover:scale-125' />
                </div>
            </Link>
            <div className="p-6 flex flex-col h-[16rem]">
                <div className="flex flex-col gap-2 xl:gap-4 pb-4">
                    <Link to="/">
                        <h3 className='md:text-[16px] xl:text-[22px] font-semibold text-black leading-6 text-[14px]'>{item.propertyName}</h3>
                    </Link>
                    <p className='text-[16px] md:text-[20px] font-bold text-primary'>{item.price}</p>
                    <ul className='flex gap-4 items-center flex-wrap'>
                        <li className='flex gap-2 items-center text-secondary text-lg xl:text-xl'><IoCarOutline />{item.garage}</li>
                        <li className='flex gap-2 items-center text-secondary text-lg xl:text-xl'><PiBathtub />{item.bath}</li>
                        <li className='flex gap-2 items-center text-secondary text-lg xl:text-xl'><MdOutlineZoomOutMap />{item.space} ft</li>
                    </ul>
                </div>
                <div className="flex justify-between pt-4 border-t mt-auto">
                    <div className="flex items-center gap-2">
                        <Link to="/">
                            <div className="w-[42px] h-[42px] rounded-complete overflow-hidden">
                                <img src={user1} alt="user image" className='w-full h-full object-cover' />
                            </div>
                        </Link>
                        <Link to="/">
                            <h3 className='text-[14px] md:text-[16px] xl:text-[20px] font-semibold text-dark'>{item.agent}</h3>
                        </Link>
                    </div>
                    <div className='flex gap-2 md:gap-3 items-center'>
                        <button type='button' className='p-1 bg-primary/20 rounded-md flex justify-center items-center w-[20px] h-[20px] md:w-[30px] md:h-[30px] xl:w-[40px] xl:h-[40px]  text-primary hover:text-white hover:bg-primary duration-300'><LuShare2 className='text-[30px]' /></button>
                        <button type='button' className='p-1 bg-primary/20 rounded-md flex justify-center items-center w-[20px] h-[20px] md:w-[30px] md:h-[30px] xl:w-[40px] xl:h-[40px]  text-primary hover:text-white hover:bg-primary duration-300'><GoHeart className='text-[30px]' /></button>
                        <button type='button' className='p-1 bg-primary/20 rounded-md flex justify-center items-center w-[20px] h-[20px] md:w-[30px] md:h-[30px] xl:w-[40px] xl:h-[40px]  text-primary hover:text-white hover:bg-primary duration-300'><HiOutlinePlus className='text-[30px]' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestPropertiesCard