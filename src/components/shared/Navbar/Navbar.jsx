import { Link } from "react-router-dom";
import Topbar from "./Topbar";
import logo from '../../../assets/images/logo.png'
import logoDark from '../../../assets/images/logoDark.png'
import Button from "../../Button/Button";
import { motion, useScroll, useTransform } from 'framer-motion';
import menus from "../../../lib/Menus";
import { SlMenu } from "react-icons/sl";
import { useEffect, useState } from "react";
import { CgCloseO } from "react-icons/cg";
const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  scrollY.on("change", (y) => {
    if (y <= 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  });


  // if window innerWidth > 767 mobileMenu should be false 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setMobileMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  scrollY.on("change", (y) => {
    if (y <= 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  });

  // prevent scroll when mobile menu is active 
  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = ""; // Enable scrolling
    }
  }, [mobileMenu]);


  return (
    <>


      <div className="w-full fixed left-0 top-0  z-[999]">
        {
          mobileMenu &&
          <div className="w-full h-full fixed bg-black/30 pointer-events-none"></div>
        }
        <div className="max-w-[1920px] m-auto">
          <Topbar className={`hidden md:block ${isTop ? "bg-transparent" : "bg-primary"}`} />

          <motion.div className={`w-full p-5  flex justify-between items-center duration-300  ${isTop ? "bg-transparent" : "bg-white"}`}>
            {/* Logo  */}
            <div className="w-[4rem] md:w-[5rem] lg:w-[7rem]">
              {
                isTop ?
                  <img src={logo} alt="" /> :
                  <img src={logoDark} alt="" />
              }
            </div>
            <div className="hidden md:flex gap-5 items-center">
              {/* Menus  */}
              <ul className="flex md:gap-4 lg:gap-5 xl:gap-8">
                {
                  menus.map((menu, index) => (
                    <Link key={index} to={menu.pathName} className={`font-normal text-[12px] lg:text-[14px] uppercase relative before:absolute before:w-0 hover:before:w-full before:hover:duration-300 before:h-[2px]  before:bottom-0 before:left-0 ${isTop ? "text-white before:bg-white" : "text-black before:bg-black"}`}>{menu.name}</Link>
                  ))
                }
              </ul>
              <div className="lg:flex gap-4 hidden">
                <button className={`${isTop ? "text-white" : "text-black"} text-[14px] font-normal uppercase`}>Search</button>
                <Button isHover={isTop} isActive={false} children={"Add Listing"} />
              </div>
            </div>
            {
              !mobileMenu ?
                <button onClick={() => setMobileMenu(true)} className="md:hidden"><SlMenu className={`${isTop ? "text-white" : "text-black"}`} /></button> :
                <button onClick={() => setMobileMenu(false)}><CgCloseO className={`z-[9999] ${isTop ? "text-white" : "text-black"}`} /></button>
            }
          </motion.div>
        </div>
        <div className={`md:hidden fixed duration-300 top-0 rounded-e-xl p-4 w-[70%] min-[422px]:w-[50%] min-[500px]:w-[40%] shadow-lg h-screen bg-white z-[999] ${mobileMenu ? "left-0" : "-left-[100%]"}`}>
          <div className="flex justify-between">
            <div className="w-[4rem]">
              <img src={logoDark} className="w-full" alt="" />
            </div>

          </div>
          <div className="mt-10">
            <ul className="w-full flex flex-col items-start gap-2">
              <Link to="/" onClick={() => setMobileMenu(false)} className="text-secondary">HOME</Link>
              <Link to="/" onClick={() => setMobileMenu(false)} className="text-secondary">ABOUT US</Link>
              <Link to="/" onClick={() => setMobileMenu(false)} className="text-secondary">OUR AGENTS</Link>
              <Link to="/" onClick={() => setMobileMenu(false)} className="text-secondary">PROPERTIES</Link>
              <Link to="/" onClick={() => setMobileMenu(false)} className="text-secondary">GALLERY</Link>
              <Link to="/" onClick={() => setMobileMenu(false)} className="text-secondary">BLOG</Link>
              <Link to="/" onClick={() => setMobileMenu(false)} className="text-secondary">CONTACT US</Link>
            </ul>
          </div>
        </div >
      </div>



    </>
  )

};

export default Navbar;
