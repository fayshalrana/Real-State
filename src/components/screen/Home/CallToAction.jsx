import React from 'react'
import bgImg from '../../../assets/images/properteImg1.jpeg'
import Button from '../../Button/Button'
const CallToAction = () => {
    return (
        <section className='py-[100px] mt-10 relative' style={{ background: `url(${bgImg})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <div className="absolute left-0 top-0 w-full h-full bg-primary/70 z-10"></div>
            <div className="container_fluid">
                <div className="w-full lg:w-[60%] xl:w-1/2 mx-auto flex flex-col gap-4 items-center z-40 relative">
                    <h2 className='text-white text-[22px] md:text-[40px] leading-6 tracking-[.4px] font-semibold'>Find Best Place For Living</h2>
                    <p className='text-white text-center'>Spend vacations in best hotels and resorts find the great place of your choice using different searching options.</p>
                    <div className="">
                        <Button isHover={true} children={"Contact Us"} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction
