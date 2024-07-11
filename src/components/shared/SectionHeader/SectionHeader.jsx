import React from 'react'
import cn from '../../../utils/cn'

const SectionHeader = ({ titleClassName, title, subTitle, subTitleClassName }) => {
    return (
        <div className={cn("flex flex-col gap-4 md:gap-8 justify-center items-center w-full md:w-[600px] m-auto")}>
            <h2 className={cn("text-[28px] md:text-[40px] font-bold leading-6 tracking-normal text-black text-center", titleClassName)}>{title}</h2>
            <p className={cn('text-sm md:text-lg font-normal leading-6 -tracking-[.4px] text-secondary text-center', subTitleClassName)}>{subTitle}</p>
        </div>
    )
}

export default SectionHeader
