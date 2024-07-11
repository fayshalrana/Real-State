import React from 'react'
import SectionHeader from '../../shared/SectionHeader/SectionHeader'
import HotSlider from '../../Slider/HotSlider'

const HotProperty = () => {
 
    return (
        <section className='py-[50px]'>
            <div className="container_fluid">
                <SectionHeader title={"Letest Properties of Rent"} subTitle={"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat."} />
                <div className='mt-6'>
                   <HotSlider/>
                </div>
            </div>

        </section>
    )
}

export default HotProperty
