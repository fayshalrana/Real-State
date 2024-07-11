import logo from '../../../assets/images/logoDark.png'
import { FaFacebookF } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <section className="pt-[50px] md:pt-[100px] pb-[50px]">
      <div className="container_fluid">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-8">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="flex justify-center md:justify-start">
              <img src={logo} alt="dark logo" className='w-[7rem]' />
            </div>
            <div className="mt-7 text-center md:text-left">
              <h3 className='text-xl font-semibold leading-6 -tracking-[.4] pb-4'>Contact Us</h3>
              <a href="tel:124456767" className='text-[16px] font-normal leading-5 text-secondary'>Call : +123 400 123</a>
              <p className='text-[16px] font-normal leading-5 text-secondary py-4'>Praesent nulla massa, hendrerit vestibulum gravida in, feugiat auctor felis.</p>
              <a href="mailTo:example@mail.com" className='text-[16px] font-normal leading-5 text-secondary'>Email: example@mail.com</a>
              <ul className='flex gap-2 md:gap-3 items-center mt-4 justify-center md:justify-start'>
                <a href='#' className='p-1 bg-primary/20 rounded-md flex justify-center items-center w-[20px] h-[20px] md:w-[30px] md:h-[30px] xl:w-[40px] xl:h-[40px]  text-primary hover:text-white hover:bg-primary duration-300'><FaFacebookF className='text-[20px]' /></a>
                <a href='#' className='p-1 bg-primary/20 rounded-md flex justify-center items-center w-[20px] h-[20px] md:w-[30px] md:h-[30px] xl:w-[40px] xl:h-[40px]  text-primary hover:text-white hover:bg-primary duration-300'><FaDribbble className='text-[20px]' /></a>
                <a href='#' className='p-1 bg-primary/20 rounded-md flex justify-center items-center w-[20px] h-[20px] md:w-[30px] md:h-[20px] xl:w-[40px] xl:h-[40px]  text-primary hover:text-white hover:bg-primary duration-300'><FaLinkedinIn className='text-[20px]' /></a>
                <a href='#' className='p-1 bg-primary/20 rounded-md flex justify-center items-center w-[20px] h-[20px] md:w-[30px] md:h-[30px] xl:w-[40px] xl:h-[40px]  text-primary hover:text-white hover:bg-primary duration-300'><FaInstagram className='text-[20px]' /></a>
                <a href='#' className='p-1 bg-primary/20 rounded-md flex justify-center items-center w-[20px] h-[20px] md:w-[30px] md:h-[30px] xl:w-[40px] xl:h-[40px]  text-primary hover:text-white hover:bg-primary duration-300'><FaBehance className='text-[20px]' /></a>
              </ul>
            </div>
          </div>
          <div className="pt-3">
            <h3 className='text-xl font-semibold leading-6 -tracking-[.4] pb-4 md:pb-8 text-center md:text-left'>Features</h3>
            <ul className='flex flex-col gap-2 md:gap-4 items-center md:items-start'>
              <Link to="/" className='text-[16px] font-normal leading-5 text-secondary hover:font-medium hover:text-black border-b border-transparent'>Home</Link>
              <Link to="/" className='text-[16px] font-normal leading-5 text-secondary hover:font-medium hover:text-black border-b border-transparent'>Become a Host</Link>
              <Link to="/" className='text-[16px] font-normal leading-5 text-secondary hover:font-medium hover:text-black border-b border-transparent'>Pricing</Link>
              <Link to="/" className='text-[16px] font-normal leading-5 text-secondary hover:font-medium hover:text-black border-b border-transparent'>Blog</Link>
              <Link to="/" className='text-[16px] font-normal leading-5 text-secondary hover:font-medium hover:text-black border-b border-transparent'>Contact</Link>
            </ul>
          </div>
          <div className="pt-3">
            <h3 className='text-xl font-semibold leading-6 -tracking-[.4] pb-4 md:pb-8 text-center md:text-left'>Company</h3>
            <ul className='flex flex-col gap-2 md:gap-4 items-center md:items-start '>
              <Link to="/" className='text-[16px] font-normal leading-5 text-secondary hover:font-medium hover:text-black border-b border-transparent'>About Us</Link>
              <Link to="/" className='text-[16px] font-normal leading-5 text-secondary hover:font-medium hover:text-black border-b border-transparent'>Press</Link>
              <Link to="/" className='text-[16px] font-normal leading-5 text-secondary hover:font-medium hover:text-black border-b border-transparent'>Contact</Link>
              <Link to="/" className='text-[16px] font-normal leading-5 text-secondary hover:font-medium hover:text-black border-b border-transparent'>Careers</Link>
              <Link to="/" className='text-[16px] font-normal leading-5 text-secondary hover:font-medium hover:text-black border-b border-transparent'>Blog</Link>
            </ul>
          </div>
          <div className="pt-3">
            <h3 className='text-xl font-semibold leading-6 -tracking-[.4] pb-4 md:pb-8 text-center md:text-left'>Team and policies</h3>
            <ul className='flex flex-col gap-2 md:gap-4 items-center md:items-start '>
              <Link to="/" className='text-[16px] font-normal leading-5 text-secondary hover:font-medium hover:text-black border-b border-transparent'>Terms of services</Link>
              <Link to="/" className='text-[16px] font-normal leading-5 text-secondary hover:font-medium hover:text-black border-b border-transparent'>Privacy policy</Link>
              <Link to="/" className='text-[16px] font-normal leading-5 text-secondary hover:font-medium hover:text-black border-b border-transparent'>Security</Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

