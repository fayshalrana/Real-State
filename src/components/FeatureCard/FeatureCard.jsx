import React from 'react'
import { Link } from 'react-router-dom'

const FeatureCard = ({ item }) => {
    return (
        <div className='p-4 flex flex-col gap-5 justify-start duration-300 hover:bg-white'>
            <a href="#">
                <div className="w-[78px] h-[74px]">
                    <img src={item.img} alt="feature image" />
                </div>
            </a>
           <a href="#"> <h3 className='text-dark font-semibold text-2xl'>{item.title}</h3></a>
            <p className='text-secondary font-normal text-[16px]'>{item.subTitle}</p>
            <Link to="/" className='text-[18px] text-[#4a60a1]'>Read more</Link>
        </div>
    )
}

export default FeatureCard
