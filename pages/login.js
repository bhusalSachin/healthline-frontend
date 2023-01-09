import Router from "next/router";

const Login = () => {
  //lets go back to the register page
  const goToRegisterPage = () => {
    Router.push("/register");
  };
  const inputCss =
    "font-serif w-full outline-none p-2 text-md placeholder:text-cyan-700 text-cyan-900 rounded-lg focus:border focus:border-b-indigo-500";
  return (
    <div className="w-full h-screen bg-cyan-200 flex items-center justify-evenly gap-4 relative">
      {/* Top part where the logo stuff goes */}
      {/* making this absolute, cause i am lazy */}
      <div
        className="absolute top-0 left-[10%] w-[18em] h-[6em] hover:cursor-pointer"
        onClick={() => {
          Router.push("/");
        }}>
        <img src="/images/logo.svg" alt="you are unlucky!" />
      </div>
      {/* left side */}
      {/* an illustration image simply pulsating */}
      <div className="w-1/3 h-auto animate-pulse">
        <img
          src="/images/register.svg"
          alt="sorry! couldn't load the image"
          className="w-full h-full object-contain"
        />
      </div>
      {/* right side  */}
      {/* real registration form shit */}
      <div className="w-1/3 h-1/2 border bg-cyan-700 border-cyan-500 p-2 rounded-lg flex flex-col items-center justify-center gap-2">
        <div className="w-full p-2 text-center">
          <span className="w-full font-serif text-2xl text-white">Login</span>
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
        <div className="w-full border p-2 rounded-md hover:cursor-pointer mt-4">
          <button
            className="font-serif w-full text-white text-lg text-center hover:scale-105"
            type="submit">
            Enter
          </button>
        </div>
        {/* Did i just messed up haha */}
        <div className="flex gap-1 items-center w-full justify-center p-1 mb-1">
          <span className="text-white text-md">
            Oops! Don't Have an Account?
          </span>
          <span
            className="text-white text-md hover:underline hover:cursor-pointer"
            onClick={goToRegisterPage}>
            Register Here.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
