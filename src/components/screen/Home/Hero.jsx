import { useState } from 'react';
import backgroundImage from '../../../assets/images/hero_bg.jpeg';
import Button from '../../Button/Button';
import SelectRent from '../../SelectRent/SelectRent';
import SelectSale from '../../SelectSale/SelectSale';

const Hero = () => {
  const [isRent, setIsRent] = useState(true);
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
          className="absolute inset-0 bg-primary/45"
        ></div>
        {/* Content */}
        <div className="container_fluid">
          <div className="flex items-center justify-center flex-col">
            <div className='lg:w-[696px] w-full flex flex-col justify-between min-[441px]:px-8 md:px-20 lg:px-0 items-center gap-4 lg:gap-8 pt-5 md:pt-16 lg:pt-36 z-50'>
              <h1 className="text-[24px] lg:text-[52px] text-white max-w-[586px] font-semibold">Find Your Dream Home</h1>
              <p className='text-sm md:text-lg text-center text-white'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 mt-10 lg:mt-36 relative w-[90%] lg:w-[1000px]">
              <div className="flex gap-3">
                <button onClick={() => setIsRent(true)} className={`relative before:absolute before:-bottom-2 before:left-1/2 before:w-4 before:h-4 before:bg-primary before:rotate-45 before:-translate-x-1/2 py-3 px-6 rounded-md text-primary ${isRent ? "bg-primary text-white" : "bg-white before:invisible"}`}>Rent</button>
                <button onClick={() => setIsRent(false)} className={`relative before:absolute before:-bottom-2 before:left-1/2 before:w-4 before:h-4 before:bg-primary before:rotate-45 before:-translate-x-1/2 py-3 px-6 duration-300border rounded-md border-transparent text-primary ${!isRent ? "bg-primary text-white" : "bg-white before:invisible"}`}>Sale</button>
              </div>
              <div className=''>
                {isRent ? <SelectRent /> : <SelectSale />}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
