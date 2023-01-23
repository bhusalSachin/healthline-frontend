//component for every input field
import { useState, useRef, useEffect } from "react";
import Error from "./Error";

//need type and placeholder
const InputField = ({ name, type, placeholder, setFormData }) => {
  //for storing the input value
  const [userInput, setUserInput] = useState("");
  const inputCss =
    "font-serif w-full outline-none p-1 sm:p-2 text-sm sm:text-md placeholder:text-cyan-700 text-cyan-900 rounded border border-b-cyan-700 border-l-cyan-900";
  return (
    <div className="w-full mt-4">
      <input
        className={inputCss}
        type={type}
        placeholder={placeholder}
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
          setFormData((prevData) => {
            prevData[`${name}`] = e.target.value;
            return prevData;
          });
        }}
      />
    </div>
  );
};

export default InputField;
