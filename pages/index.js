import Header from "../components/Header";
import Router from "next/router";

export default function Home() {
  //setting up router to move onto the register page
  //will invoke click on a button
  const goToRegisterPage = () => {
    Router.push("/register");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-between">
      <div className="w-full h-[4em]">
        <Header />
      </div>
      {/* this is going to be the body part of the home page */}
      <div className="body flex flex-col w-full h-full ">
        {/* First part */}
        {/* cotains text and image on the left and right side */}
        <div className="w-full flex gap-1 items-center justify-between pt-2">
          {/* left side of the first part */}
          {/* intro and login signup button goes here */}
          <div className="h-full flex flex-col justify-center gap-2 sm:ml-16 relative">
            <span className="text-cyan-600 text-4xl font-serif font-light">
              You Are
            </span>
            <span className="font-serif text-5xl text-cyan-700">Here</span>
            <span className="font-serif text-6xl text-cyan-800">
              At The Right Place
            </span>
            {/* login/signup button */}
            <div
              className="absolute bottom-16 left-0 w-full border p-2 rounded-lg bg-cyan-300 hover:bg-cyan-500 hover:cursor-pointer animate-bounce"
              onClick={goToRegisterPage}>
              <button className="w-full font-serif text-lg text-center text-cyan-900 hover:scale-105 hover:text-white">
                Register Here
              </button>
            </div>
          </div>
          {/* right side */}
          {/* a picture of emergency, that's it */}
          <div className="w-[40%] h-full mt-12">
            <img src="/images/emergency.svg" alt="sorry" />
          </div>
        </div>

        {/* moving to the second part */}
        {/* will put ambulance stuff here */}
        <div className="w-full">
          {/* left side */}
          {/* a picture of ambulance */}
          <div className="mt-12 w-[40%] h-full border-none sm:ml-16">
            <img
              src="/images/ambulance.svg"
              className="w-full h-full object-contain border-none"
            />
          </div>
          {/* right side */}
          {/* text that suits the context */}
        </div>
      </div>
      {/* just random image */}
      {/* might remove later */}
      <div className="w-full h-screen absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] -z-20">
        <img src="/images/mesh.jpg" className="w-full h-full" />
      </div>
    </div>
  );
}
