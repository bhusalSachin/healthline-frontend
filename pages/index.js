import Header from "../components/Header";
import Router from "next/router";
import Footer from "../components/Footer";

export default function Home() {
  //setting up router to move onto the register page
  //will invoke click on a button
  const goToRegisterPage = () => {
    Router.push("/register");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-between relative">
      <div className="w-full h-[3em] sm:h-[4em]">
        <Header />
      </div>
      {/* this is going to be the body part of the home page */}
      <div className="body flex flex-col w-full h-full mt-4 sm:mt-0">
        {/* First part */}
        {/* cotains text and image on the left and right side */}
        <div className="w-full flex flex-col sm:flex-row gap-1 items-center justify-between pt-2">
          {/* left side of the first part */}
          {/* intro and login signup button goes here */}
          <div className="h-full flex flex-col justify-center gap-2 sm:ml-16 relative">
            <span className="text-cyan-600 text-2xl sm:text-3xl md:text-4xl font-serif font-light">
              You Are
            </span>
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-cyan-700">
              Here
            </span>
            <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-cyan-800">
              At The Right Place
            </span>
            {/* login/signup button */}
            <div
              className="w-full border p-3 rounded-lg bg-cyan-300 hover:bg-cyan-500 hover:cursor-pointer"
              onClick={goToRegisterPage}>
              <button className="w-full font-serif text-lg text-center text-cyan-900 hover:scale-105 hover:text-white">
                Register Here
              </button>
            </div>
          </div>
          {/* right side */}
          {/* a picture of emergency, that's it */}
          <div className="w-full p-2 sm:p-0 sm:w-[40%] h-full mt-12">
            <img src="/images/emergency.svg" alt="sorry" />
          </div>
        </div>

        {/* moving to the second part */}
        {/* will put ambulance stuff here */}
        <div className="w-full h-full flex flex-col-reverse sm:flex-row items-center justify-between p-4">
          {/* left side */}
          {/* a picture of ambulance */}
          <div className="mt-12 w-full sm:w-[40%] h-full border-none">
            <img
              src="/images/ambulance.svg"
              className="w-full h-full object-contain border-none"
            />
          </div>
          {/* right side */}
          {/* text that suits the context */}
          <div className="mt-12 w-full sm:w-1/2 h-full flex flex-col justify-center gap-2 relative">
            <span className="text-cyan-600 text-2xl sm:text-3xl md:text-4xl font-serif font-light">
              Call The
            </span>
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-cyan-700">
              Ambulance
            </span>
            <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-cyan-800">
              At The Right Time
            </span>
            <div className="w-full mt-3">
              <p className="text-teal-700 text-lg sm:text-2xl">
                We know the value of the critical one second at the case of
                emergency, that's why we give the absolute fast response system
                for ambulance.
              </p>
            </div>
          </div>
        </div>

        {/* moving to the third part */}
        {/* will put -- stuff here */}
        <div className="w-full h-full flex flex-col sm:flex-row items-center justify-around p-4">
          {/* left side */}
          {/* text that suits the context */}
          <div className="mt-12 w-full sm:w-1/2 h-full flex flex-col justify-center gap-2 sm:ml-16 relative">
            <span className="text-cyan-600 text-2xl sm:text-3xl md:text-4xl font-serif font-light">
              Search For
            </span>
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-cyan-700">
              Blood
            </span>
            <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-cyan-800">
              In The Right Place
            </span>
            <div className="w-full mt-3">
              <p className="text-teal-700 text-lg sm:text-2xl">
                We know the value of the critical one second at the case of
                emergency, that's why we give the absolute fast response system
                for ambulance.
              </p>
            </div>
          </div>
          {/* right side */}
          {/* a picture of ambulance */}
          <div className="mt-12 w-full p-2 sm:p-0 sm:w-[40%] h-full">
            <img src="/images/doctors.svg" className=" border-none" />
          </div>
        </div>

        {/* moving to the fourth part */}
        {/* will put ambulance stuff here */}
        <div className=" w-full h-full flex flex-col-reverse sm:flex-row items-center justify-between p-4">
          {/* left side */}
          {/* a picture of ambulance */}
          <div className="mt-12 w-full sm:w-[40%] h-full sm:ml-16 p-2 sm:p-0">
            <img
              src="/images/animated.svg"
              className="w-full h-full object-contain"
            />
          </div>
          {/* right side */}
          {/* text that suits the context */}
          <div className="mt-12 w-full sm:w-1/2 h-full flex flex-col justify-center gap-2 relative">
            <span className="text-cyan-600 text-2xl sm:text-3xl md:text-4xl font-serif font-light">
              Take Doctos
            </span>
            <span className="font-serif text-3xl sm:text-4xl md:text-5xl text-cyan-700">
              Appointments
            </span>
            <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-cyan-800">
              In The Right Hospital
            </span>
            <div className="w-full mt-3">
              <p className="text-teal-800 text-lg sm:text-2xl">
                We know the value of the critical one second at the case of
                emergency, that's why we give the absolute fast response system
                for ambulance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* just random image */}
      {/* might remove later */}
      <div className="w-full h-screen absolute top-0 left-[50%] -translate-x-[50%] -translate-y-[50%] -z-20">
        <img src="/images/homebg.jpg" className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-full absolute top-[100%] left-[50%] -translate-x-[50%] -translate-y-[50%] -z-20">
        <img
          src="/images/homebg.jpg"
          className="w-full h-full object-cover rotate-180"
        />
      </div>
      <div className="w-full h-full absolute top-[200%] left-[50%] -translate-x-[50%] -translate-y-[50%] -z-20">
        <img src="/images/homebg.jpg" className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-full absolute top-[300%] left-[50%] -translate-x-[50%] -translate-y-[50%] -z-20">
        <img
          src="/images/homebg.jpg"
          className="w-full h-full object-cover rotate-180"
        />
      </div>
      {/* Footer part goes here */}
      <div className="w-full h-1/3 absolute top-[350%] left-0">
        <Footer />
      </div>
    </div>
  );
}
