import {
  MdOutlineHealthAndSafety,
  MdMenu,
  MdOutlineHome,
  MdOutlinePeople,
  MdOutlineContactSupport,
} from "react-icons/md";
import Router from "next/router";

import { useState } from "react";

const Header = () => {
  const [isSlider, setIsSlider] = useState(false);
  //css for the span tag of each page i.e. home, aboutus and contact
  const headCss =
    "flex flex-col items-center justify-center hover:cursor-pointer hover:scale-105 hover:border-b-2 sm:text-[1.07rem]";
  //function to show the slider
  const showSlider = () => {
    setIsSlider(!isSlider);
  };
  return (
    //main header for home page
    <div className="w-full h-full flex items-center justify-between sm:justify-between bg-cyan-600">
      {/* here goes the logo */}
      <div
        className="flex items-center h-full w-auto relative p-2 ml-2 sm:ml-12 hover:cursor-pointer"
        onClick={() => Router.push("/")}>
        {/* icon */}
        <div className="absolute left-0 top-[50%] -translate-y-[50%] sm:text-2xl">
          <MdOutlineHealthAndSafety color="white" />
        </div>
        <div className="w-[5em] sm:w-[10em] h-[5em] flex items-center justify-center">
          <img
            src="/images/logo.svg"
            className="scale-150 w-full h-full object-cover"
          />
        </div>
      </div>
      {/* the main navigator */}
      <div
        className={`${
          !isSlider && "hidden"
        } sm:flex absolute sm:relative top-[4em] right-0 sm:top-0 flex flex-col sm:flex-row items-center justify-around rounded-sm w-[60%] sm:w-[40%] h-[91.7%] sm:h-full text-white text-sm bg-cyan-600 p-2`}>
        <div className={headCss}>
          <MdOutlineHome className="sm:hidden" size={28} color="white" />
          <span>Home</span>
        </div>
        <div className={headCss}>
          <MdOutlinePeople className="sm:hidden" size={28} color="white" />
          <span className={headCss}>About Us</span>
        </div>
        <div className={headCss}>
          <MdOutlineContactSupport
            className="sm:hidden"
            size={28}
            color="white"
          />
          <span className={headCss}>Contact</span>
        </div>
      </div>
      {/* clickable icon for the mobile */}
      {/* this icon will allow to open the slider */}
      <div className="block sm:hidden p-2" onClick={showSlider}>
        <MdMenu color="white" size={24} />
      </div>
    </div>
  );
};

export default Header;
