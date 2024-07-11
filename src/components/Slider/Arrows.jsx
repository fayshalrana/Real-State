import React from 'react';
import { IoArrowForwardSharp } from "react-icons/io5";
import { MdArrowBack } from "react-icons/md";
// Custom Previous Arrow Component with SVG icon
const PrevArrow = ({ className, style, onClick }) => (
    <div
        className={`custom-prev-arrow ${className}`}
        style={{ ...style, display: 'block', cursor: 'pointer' }}
        onClick={onClick}
    >
        <MdArrowBack className='text-white text-xl' />
    </div>
);

// Custom Next Arrow Component with SVG icon
const NextArrow = ({ className, style, onClick }) => (
    <div
        className={`custom-next-arrow ${className}`}
        style={{ ...style, display: 'block', cursor: 'pointer' }}
        onClick={onClick}
    >
        <IoArrowForwardSharp className='text-white text-xl' />
    </div>
);

export { PrevArrow, NextArrow };
