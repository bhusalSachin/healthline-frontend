import Router from "next/router";
import Header from "../components/Header";
import Error from "../components/Error";
import { use, useState } from "react";
import axios from "axios";
import InputField from "../components/InputField";

const Login = () => {
  //for storing error
  const [error, setError] = useState(null);

  //for storing the input data from user form
  const initialFormData = { email: "", password: "" };
  const [formData, setFormData] = useState(initialFormData);
  //lets go back to the register page
  const goToRegisterPage = () => {
    Router.push("/register");
  };

  const logInUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/user/login",
        formData
      );
      if (!response.data.success) {
        setError(response.data.message);
      } else {
        window.alert("logged in successfully!");
        Router.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full h-screen flex items-center justify-center gap-4 relative bg-cyan-600">
      {/* including header */}
      <div className="absolute top-0 left-0 w-full h-[3em] sm:h-[4em]">
        <Header />
      </div>
      {/* left side */}
      {/* an illustration image simply pulsating */}
      <div className="hidden md:block w-[30%] h-auto">
        <img
          src="/images/register.svg"
          alt="sorry! couldn't load the image"
          className="w-full h-full object-contain"
        />
      </div>
      {/* right side  */}
      {/* real registration form shit */}
      <div className="w-[90%] sm:w-[70%] md:w-1/4 border border-slate-400 bg-white p-6 rounded-lg flex flex-col items-center justify-center gap-2 shadow-xl">
        <div className="w-full p-1 sm:p-2 text-center">
          <span className="w-full font-serif text-2xl text-teal-800">
            Login
          </span>
        </div>

        <InputField
          name={"email"}
          type={"email"}
          placeholder={"enter your email address"}
          setFormData={setFormData}
        />

        <InputField
          name={"password"}
          type="password"
          placeholder={"enter your password"}
          setFormData={setFormData}
        />
        <Error error={error} />
        <div className="w-full border p-1 sm:p-2 rounded hover:cursor-pointer text-white hover:text-teal-800 bg-cyan-900 hover:bg-cyan-50 transition-all mt-4">
          <button
            className="font-serif w-full text-md sm:text-lg text-center hover:scale-105"
            type="submit"
            onClick={(e) => logInUser(e)}>
            Enter
          </button>
        </div>
        {/* Did i just mess up haha */}
        <div className="flex gap-1 items-center w-full justify-center p-1 mb-1 text-teal-800">
          <span className="text-sm sm:text-md">Don't Have an Account?</span>
          <span
            className="text-sm sm:text-md underline hover:cursor-pointer"
            onClick={goToRegisterPage}>
            Register Here.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
