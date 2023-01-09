import { MdOutlineHealthAndSafety } from "react-icons/md";

const Header = () => {
  //css for the span tag of each page i.e. home, aboutus and contact
  const headCss = "hover:cursor-pointer hover:scale-105 hover:border-b-2";

  return (
    //main header for home page
    <div className="w-full h-full flex items-center justify-around bg-cyan-600">
      {/* here goes the logo */}
      <div className="flex items-center h-full w-auto relative p-2">
        {/* icon */}
        <div className="absolute left-0 top-[50%] -translate-y-[50%]">
          <MdOutlineHealthAndSafety color="white" size={28} />
        </div>
        <div className="w-[10em] h-[5em] flex items-center justify-center">
          <img
            src="/images/logo.svg"
            className="scale-150 w-full h-full object-cover"
          />
        </div>
      </div>
      {/* the main navigator */}
      <div className="flex items-center justify-around w-[40%] h-full text-white p-2">
        <span className={headCss}>Home</span>
        <span className={headCss}>About Us</span>
        <span className={headCss}>Contact</span>
      </div>
    </div>
  );
};

export default Header;
