import React from 'react'
import SectionHeader from '../../shared/SectionHeader/SectionHeader'
import ProperteAreaCard from '../../ProperteAreaCard/ProperteAreaCard'
import data from '../../../lib/properteListedData'

const PropertieArea = () => {

    return (
        <section className="pt-[300px] md:pt-[150px] pb-[50px]">
            <div className="container_fluid">
                {/* section header  */}
                <div>
                    <SectionHeader title={"Propertice by Area"} subTitle={"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat."} />
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 min-[553px]:grid-cols-2">
                    {
                        data.map((item, index) => (
                            <ProperteAreaCard key={index} item={item} className={index === 3 ? " md:col-span-2" : "" || index == 2 ? "min-[553px]:col-span-2 md:col-auto" : ""} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default PropertieArea
