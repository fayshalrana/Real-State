import React from 'react'
import SectionHeader from '../../shared/SectionHeader/SectionHeader'
import LatestPropertiesCard from '../../LatestPropertieCard/LatestPropertiesCard'
import latestProperty from '../../../lib/LatestProperteData'
import Button from '../../Button/Button'

const LatestProperties = () => {
    return (
        <section className='py-[50px]'>
            <div className="container_fluid">
                <SectionHeader title={"Letest Properties of Rent"} subTitle={"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat."} />
                <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-[472px]:grid-cols-2 gap-8'>
                    {
                        latestProperty.slice(0, 6).map((item, index) => (
                            <LatestPropertiesCard item={item} key={index} />
                        ))
                    }
                </div>
                <div className="flex justify-center mt-10">
                    <Button children={"Load more listing"} />
                </div>
            </div>

        </section>
    )
}

export default LatestProperties
