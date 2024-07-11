import React from 'react';
import cn from '../../utils/cn';

const Button = ({ children, isHover, className, isActive }) => {
    return (
        <button
            className={cn(
                "p-1 px-3 xl:py-3 xl:px-6 text-white duration-300 bg-primary border rounded-md border-transparent hover:text-primary hover:border-primary hover:bg-transparent",
                isHover ? "border-white bg-transparent hover:bg-primary hover:text-white" : "",
                isActive ? "bg-white text-primary" : "",
                className
            )}
        >
            {children}
        </button>
    );
};

export default Button;
