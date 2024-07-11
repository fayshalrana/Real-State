import React from 'react'
import { IoMailOpenOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { FaDribbble } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FaBehance } from "react-icons/fa";
import cn from '../../../utils/cn';
const Topbar = ({ className }) => {
    return (
        <div className={cn('w-full px-5 py-[14px] border-b border-white duration-300', className)}>
            <div className="flex gap-4 items-center justify-between">
                <div className="flex gap-3 items-center">
                    <IoMailOpenOutline className='text-white text-xl' />
                    <a href="mailTo:example@gmail.com" className='text-[14px] leading-5 tracking-normal text-white'><span className='font-semibold'>Email us at:</span> example@mail.com</a>
                </div>
                <div className="flex">
                    <div className="">
                        <ul className='flex gap-5'>
                            <li>
                                <a href='#' className='text-white text-lg'><FaFacebookF /></a>
                            </li>
                            <li>
                                <a href='#' className='text-white text-lg'><FaDribbble /></a>
                            </li>
                            <li>
                                <a href='#' className='text-white text-lg'><FaLinkedinIn /></a>
                            </li>
                            <li>
                                <a href='#' className='text-white text-lg'><IoLogoInstagram /></a>
                            </li>
                            <li>
                                <a href='#' className='text-white text-lg'><FaBehance /></a>
                            </li>

                        </ul>
                    </div>
                    <div className="flex gap-4 items-center ml-5 pl-4 border-l ">
                        <BsTelephone className='text-white' />
                        <a href="tel:123456789" className='text-[14px] leading-5 tracking-normal text-white'>123456789</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
