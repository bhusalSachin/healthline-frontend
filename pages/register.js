import Router from "next/router";

import Header from "../components/Header";

const Register = () => {
  // redirect to login if they have user
  // obviously making only client side now lol

  const goToLoginPage = () => {
    Router.push("/login");
  };

  // lets put the css of input Headers
  // so i won't mess up later
  const inputCss =
    "font-serif w-full outline-none p-2 text-md placeholder:text-cyan-700 text-cyan-900 rounded border border-b-cyan-700 border-l-cyan-900";
  return (
    <div className="w-full h-screen flex items-center justify-center gap-4 relative bg-cyan-600">
      {/* Top part where the logo stuff goes */}
      {/* making this absolute, cause i am lazy */}
      {/* <div className="absolute top-0 left-0 w-full h-full -z-20">
        <img
          src="/images/signinBg.jpg"
          alt="you are unlucky!"
          className="object-cover w-full h-full"
        />
      </div> */}
      <div className="absolute top-0 left-0 w-full h-[4em]">
        <Header />
      </div>
      {/* left side */}
      {/* an illustration image simply pulsating */}
      <div className="w-[30%] h-auto">
        <img
          src="/images/register.svg"
          alt="sorry! couldn't load the image"
          className="w-full h-full object-contain"
        />
      </div>
      {/* right side  */}
      {/* real registration form shit */}
      <div className="w-1/4 border border-slate-400 bg-white p-6 rounded flex flex-col items-center justify-center gap-2 shadow-xl">
        <div className="w-full p-2 text-center mt-2">
          <span className="w-full font-serif text-2xl text-teal-800 ">
            Create an Account
          </span>
        </div>
        <div className="w-full mt-2">
          <input className={inputCss} type="text" placeholder="full name" />
        </div>
        <div className="w-full mt-2">
          <input
            className={inputCss}
            type="email"
            placeholder="youremail@gmail.com"
            required
          />
        </div>
        <div className="w-full mt-2">
          <input className={inputCss} type="text" placeholder="98********" />
        </div>
        <div className="w-full mt-2">
          <input className={inputCss} type="text" placeholder="password" />
        </div>
        <div className="w-full border p-2 rounded hover:cursor-pointer mt-4 text-white hover:text-teal-800 bg-cyan-900 hover:bg-cyan-50 transition">
          <button
            className="font-serif w-full text-white text-lg text-center hover:scale-105"
            type="submit">
            Register
          </button>
        </div>
        {/* Did i just mess up haha */}
        <div className="flex gap-1 items-center w-full justify-center p-1 mb-1">
          <span className="text-teal-800 text-md">
            Already Have an Account?
          </span>
          <span
            className="text-teal-800 text-md underline hover:cursor-pointer"
            onClick={goToLoginPage}>
            Login Instead?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
