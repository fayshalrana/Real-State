import React from 'react'
import SectionHeader from '../../shared/SectionHeader/SectionHeader'
import FeatureCard from '../../FeatureCard/FeatureCard'
import featureData from '../../../lib/FeatureData'

const Features = () => {
    return (
        <section className='py-[50px] bg-[#edeff6]'>
            <div className="container_fluid">
                <SectionHeader title={"Features"} subTitle={"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat."} />
                <div className="mt-5 grid grid-cols-1 lg:grid-cols-4 min-[550px]:grid-cols-2 gap-4">
                    {
                       featureData.map((item, index) => (
                            <FeatureCard item={item} key={index}/>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Features
