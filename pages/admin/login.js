import React, { useState } from "react";
import { useCookies } from "react-cookie";
import Router, { useRouter } from "next/router";
import axios from "axios";
// import "tailwindcss/dist/base.css";

const Login = (props) => {
  const [username, setUsername] = useState(
    props.username ? props.username : ""
  );
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cookie, setCookie] = useCookies(["hospital"]);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/hospital/login",
        { username, password }
      );
      if (response.data.success) {
        // localStorage.setItem("token", response.data.message.token);
        setCookie("hospital", response.data.message.token, {
          path: "/",
          maxAge: 3600,
          sameSite: true,
        });

        router.push({
          pathname: "/admin",
        });
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <form
        className="bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}>
        <h2 className="text-lg font-medium mb-4 text-center text-cyan-600">
          Admin Login
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Username
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button className="bg-cyan-600 text-white p-2 rounded-lg hover:bg-cyan-700">
          Login
        </button>
      </form>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { user } = context.query;
  // console.log("login context query = ", context.query);
  if (user) return { props: { username: user } };
  return { props: {} };
};

export default Login;
