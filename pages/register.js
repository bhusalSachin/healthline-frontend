import Router from "next/router";

const Register = () => {
  // redirect to login if they have user
  // obviously making only client side now lol
  const goToLoginPage = () => {
    Router.push("/login");
  };
  // lets put the css of input Headers
  // so i won't mess up later
  const inputCss =
    "font-serif w-full outline-none p-2 text-md placeholder:text-cyan-700 text-cyan-900 rounded focus:border focus:border-b-indigo-500";
  return (
    <div className="w-full h-screen bg-slate-500 flex items-center justify-evenly gap-4 relative">
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
      <div className="w-1/3 border bg-slate-600 border-slate-400 p-2 rounded flex flex-col items-center justify-center gap-2">
        <div className="w-full p-2 text-center mt-2">
          <span className="w-full font-serif text-2xl text-white">
            Fill This Form Out
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
        <div className="w-full border p-2 rounded hover:cursor-pointer mt-4 hover:bg-cyan-900 hover:border-none transition">
          <button
            className="font-serif w-full text-white text-lg text-center hover:scale-105"
            type="submit">
            Register
          </button>
        </div>
        {/* Did i just mess up haha */}
        <div className="flex gap-1 items-center w-full justify-center p-1 mb-1">
          <span className="text-white text-md">Already Have an Account?</span>
          <span
            className="text-white text-md hover:underline hover:cursor-pointer"
            onClick={goToLoginPage}>
            Login Instead?
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
