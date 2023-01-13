import { MdOutlineHealthAndSafety } from "react-icons/md";
import { Router } from "next/router";

const Footer = () => {
  return (
    <div className="w-full h-full bg-teal-800 flex flex-col">
      {/* logo stuff */}
      <div
        className="flex items-center h-full w-auto relative p-2 ml-2 sm:ml-12 hover:cursor-pointer"
        onClick={() => Router.push("/")}>
        <div className="absolute left-0 top-[50%] -translate-y-[50%] sm:text-2xl">
          <MdOutlineHealthAndSafety color="white" />
        </div>
        <div className="w-[5em] sm:w-[10em] h-[5em] flex items-center justify-center">
          <img
            src="/images/logo.svg"
            className="scale-150 w-full h-full object-cover"
          />
        </div>
        {/* cool slogan from chatgpt */}
        <div className="text-white">
          <span className="text-xl font-serif">
            A click away from life-saving care
          </span>
        </div>
      </div>

      {/* copyright stuffs */}
      <div className="w-full text-center p-2">
        <span className="text-white text-lg font-serif">
          &copy;2023 HealthLine, All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
