import Router from "next/router";
import Header from "../components/Header";

const Login = () => {
  //lets go back to the register page
  const goToRegisterPage = () => {
    Router.push("/register");
  };
  const inputCss =
    "font-serif w-full outline-none p-2 text-md placeholder:text-cyan-700 text-cyan-900 rounded border border-b-cyan-700 border-l-cyan-800";
  return (
    <div className="w-full h-screen flex items-center justify-center gap-4 relative">
      {/* including header */}
      <div className="absolute top-0 left-0 w-full h-[4em]">
        <Header />
      </div>
      {/* left side */}
      {/* an illustration image simply pulsating */}
      <div className=" w-[30%] h-auto">
        <img
          src="/images/register.svg"
          alt="sorry! couldn't load the image"
          className="w-full h-full object-contain"
        />
      </div>
      {/* right side  */}
      {/* real registration form shit */}
      <div className="w-1/4 border border-slate-400 p-6 rounded-lg flex flex-col items-center justify-center gap-2">
        <div className="w-full p-2 text-center">
          <span className="w-full font-serif text-2xl text-cyan-800">
            Login
          </span>
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
          <input className={inputCss} type="text" placeholder="password" />
        </div>
        <div className="w-full border p-2 rounded hover:cursor-pointer text-white hover:text-teal-800 bg-cyan-900 hover:bg-cyan-50 transition-all mt-4">
          <button
            className="font-serif w-full text-lg text-center hover:scale-105"
            type="submit">
            Enter
          </button>
        </div>
        {/* Did i just mess up haha */}
        <div className="flex gap-1 items-center w-full justify-center p-1 mb-1 text-teal-800">
          <span className="text-md">Don't Have an Account?</span>
          <span
            className=" text-md underline hover:cursor-pointer"
            onClick={goToRegisterPage}>
            Register Here.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
