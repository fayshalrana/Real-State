import React from 'react'
import user1 from '../../assets/images/user1.png'
import propertyImg from '../../assets/images/propertyimg444.jpeg'
import { LuShare2 } from 'react-icons/lu'
import { GoHeart } from 'react-icons/go'
import { HiOutlinePlus } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { IoCarOutline } from 'react-icons/io5'
import { PiBathtub } from 'react-icons/pi'
import { MdOutlineZoomOutMap } from 'react-icons/md'
const PropertieListStyleCard = ({ item, index }) => {
    const shouldReverseRow = index % 2 === 0;
    return (
        <div className={`flex gap-8 flex-col md:flex-row items-center ${shouldReverseRow ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex flex-col w-full md:w-[40%] gap-8">
                <div className="flex justify-between pt-4 mt-auto">
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
                        <button type='button' className='p-1 bg-primary/20 rounded-md flex justify-center items-center w-[20px] h-[20px] md:w-[30px] md:h-[30px] xl:w-[40px] xl:h-[40px]  text-primary'><LuShare2 className='text-[30px]' /></button>
                        <button type='button' className='p-1 bg-primary/20 rounded-md flex justify-center items-center w-[20px] h-[20px] md:w-[30px] md:h-[30px] xl:w-[40px] xl:h-[40px]  text-primary'><GoHeart className='text-[30px]' /></button>
                        <button type='button' className='p-1 bg-primary/20 rounded-md flex justify-center items-center w-[20px] h-[20px] md:w-[30px] md:h-[30px] xl:w-[40px] xl:h-[40px]  text-primary'><HiOutlinePlus className='text-[30px]' /></button>
                    </div>
                </div>
                <div className="">
                    <a href="#">
                        <h3 className='md:text-[16px] xl:text-[22px] font-semibold text-primary leading-6 text-[14px]'>92 ALLIUM PLACE, ORLANDO FL 32827</h3>
                    </a>
                    <p className='text-[16px] font-normal leading-6 text-secondary py-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem aliquam vitae maxime deserunt illo est quas recusandae! Quaerat magni excepturi non perferendis sint, id totam accusantium doloremque consectetur iste incidunt laboriosam numquam ad quo natus omnis delectus voluptas iure porro.</p>
                    <h2 className='text-[16px] md:text-[36px] font-bold text-primary'>$ 590,693</h2>
                </div>
            </div>
            <div className="w-full md:w-[55%] border h-[300px] md:h-[400px] relative">
                <img src={item.propertyImage} className='w-full rounded-lg h-full object-cover' alt="" />
                <div className={`py-4 px-3 rounded-md bg-white absolute bottom-6 md:w-[80%] lg:w-auto ${shouldReverseRow ? "left-1/2 lg:-left-10 -translate-x-1/2 lg:translate-x-0" : "translate-x-1/2 lg:translate-x-0 right-1/2 lg:-right-10"} shadow-md`}>
                    <ul className='flex gap-4 items-center flex-wrap'>
                        <li className='flex gap-2 items-center text-secondary text-sm md:text-lg xl:text-xl'><IoCarOutline />{item.garage}</li>
                        <li className='flex gap-2 items-center text-secondary text-sm md:text-lg xl:text-xl border-l-2 border-r-2 px-3'><PiBathtub />{item.bath}</li>
                        <li className='flex gap-2 items-center text-secondary text-sm md:text-lg xl:text-xl'><MdOutlineZoomOutMap />{item.space} ft</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PropertieListStyleCard
