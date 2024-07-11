import React from 'react'
import backgroundImage from '../../../assets/images/propertyBanner.jpeg'
import { Link } from 'react-router-dom'
const Banner = () => {
    return (
        <section style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            position: "relative",
        }}
            className=" w-full py-[80px]"
        >
            <div>

                {/* Gradient overlay */}
                <div
                    className="absolute inset-0 bg-primary/80"
                ></div>
                {/* Content */}
                <div className="flex items-center justify-center flex-col">
                    <div className='lg:w-[696px] w-full flex flex-col justify-between items-center gap-4 lg:gap-8 pt-36 z-50'>
                        <h1 className="text-[24px] lg:text-[52px] text-white max-w-[586px] font-semibold">Propertice</h1>
                        <ul className="flex gap-2">
                            <Link to='/' className='text-[16px] font-normal leading-5 -tracking-[.3px] text-white'>Home</Link>
                            <li className='text-[16px] font-normal leading-5 -tracking-[.3px] text-white'>/</li>
                            <li className='text-[16px] font-medium leading-5 -tracking-[.3px] text-white'>Properties</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Banner
