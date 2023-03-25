import { useState, useRef } from "react";
import Router from "next/router";
import Header from "../components/Header";
import axios from "axios";
import InputField from "../components/InputField";
import Error from "../components/Error";

const Register = () => {
  //formData state is used to store the value of form that user input
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  //storing error in a state
  const [error, setError] = useState(null);

  //function that will take us to login page
  const goToLoginPage = () => {
    Router.push("/login");
  };

  //this is function will run after user clicking on the register button
  //will be sent request to /user/register api
  //will sent formData
  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/user/register",
        formData
      );
      console.log(response.data);
      if (!response.data.success) {
        setError(response.data.message);
      } else goToLoginPage();
    } catch (error) {
      console.error(error);
    }
  };
  // lets put the css of input Headers
  return (
    <div className="w-full h-screen flex items-center justify-center gap-4 relative bg-cyan-600">
      {/* making this absolute, cause i am lazy */}
      {/* including header */}
      <div className="absolute top-0 left-0 w-full h-[4em]">
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
      <div className="w-[90%] sm:w-[70%] md:w-1/4 border border-slate-400 bg-white p-6 rounded flex flex-col items-center justify-center gap-2 shadow-xl">
        <div className="w-full p-2 text-center mt-2 relative">
          <span className="w-full font-serif text-lg sm:text-2xl text-teal-800 ">
            Create an Account
          </span>
        </div>

        <InputField
          name={"name"}
          type={"text"}
          placeholder="Full name"
          setFormData={setFormData}
        />
        <InputField
          name={"email"}
          type={"email"}
          placeholder="example@gmail.com"
          setFormData={setFormData}
        />

        <InputField
          name={"phone"}
          type={"text"}
          placeholder="98********"
          setFormData={setFormData}
        />

        <InputField
          name={"password"}
          type={"password"}
          placeholder="password"
          setFormData={setFormData}
        />
        <Error error={error} />
        <div className="w-full border p-1 sm:p-2 rounded hover:cursor-pointer text-white hover:text-teal-800 bg-cyan-900 hover:bg-cyan-50 transition-all mt-4">
          <button
            className="font-serif w-full text-md sm:text-lg text-center hover:scale-105"
            onClick={(e) => registerUser(e)}
            type="submit">
            Register
          </button>
        </div>
        {/* Did i just mess up haha */}
        <div className="flex gap-1 items-center w-full justify-center p-1 mb-1">
          <span className="text-teal-800 text-sm sm:text-md">
            Already Have an Account?
          </span>
          <span
            className="text-teal-800 underline text-sm sm:text-md hover:underline hover:cursor-pointer"
            onClick={goToLoginPage}>
            Login Instead?
          </span>
        </div>
      </div>
    </div>
  );
};
export default Register;
