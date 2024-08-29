import { Bars3CenterLeftIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface Props {
  open: () => void;
}



const Nav = ({ open }: Props) => {
  const [navSticky, setNavSticky] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      }
      if (window.scrollY <= 90) {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
  },[]);
  const stickyStyle = navSticky?'bg-[#212428] shadow-gray-900 shadow-sm':''
  return (
    <div className={`fixed w-[100%] ${stickyStyle} transition-all duration-300 z-[1000] `}>
      <div className="flex items-center h-[12vh] justify-between mx-auto w-[80%] ">
        <div className="font-logo text-white text-[18px]">
          <span className="text-[30px] md:text-[40px] text-yellow-400">F</span>
          atihpowwer
        </div>
        <ul className="md:flex hidden items-center space-x-10">
          {/* <li>
            <a href="#" className="nav__link">
              Home
            </a>
            
          </li> */}
          <Link href="/#" passHref>
            <p className="nav__link">Home</p>
          </Link>
          {/* <li>
            <a href="#about" className="nav__link">
              About
            </a>
          </li> */}
          <Link href="/#about" passHref>
            <p className="nav__link">About</p>
          </Link>
          {/* <li>
            <a href="#service" className="nav__link">
              Service
            </a>
          </li> */}
          <Link href="/#service" passHref>
            <p className="nav__link">Service</p>
          </Link>
          {/* <li>
            <a href="#blog" className="nav__link">
              Blog
            </a>
          </li> */}
          <Link href="/#blog" passHref>
            <p className="nav__link">Blog</p>
          </Link>
          {/* <li>
            <a href="#contact" className="nav__link">
              Contact
            </a>
          </li> */}
          <Link href="/#contact" passHref>
            <p className="nav__link">Contact</p>
          </Link>
        </ul>
        <Bars3CenterLeftIcon
          onClick={open}
          className="w-[2.3rem] md:hidden h-[2.3rem] text-white rotate-180"
        ></Bars3CenterLeftIcon>
      </div>
    </div>
  );
};

export default Nav;
