import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SignupPage() {
  const navigation = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
    confirm_password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    if (data.confirm_password !== data.password)
      alert("Las contraseñas deben coincidir");
    try {
      const response = await axios.post(
        "http://localhost:3333/api/auth/signup",
        data
      );
      window.localStorage.setItem("auth", response.data.response.token);
      navigation("/home");
    } catch (error) {
      alert("Error in login");
    }
  }

  return (
    <div className="w-full flex justify-center bg-gradient-to-r from-blue-400 via-pink-900 to-yellow-500 h-screen">
      <div className="w-80 mt-32 text-center p-4 rounded-md">
        <h2 className="text-3xl ">Instagram</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-12">
          <input
            className="p-2 rounded-md outline-none border "
            type="text"
            name=""
            id=""
            placeholder="Username or email"
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
          <input
            className="p-2 rounded-md outline-none border "
            type="text"
            name=""
            id=""
            placeholder="Password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          <input
            className="p-2 rounded-md outline-none border "
            type="text"
            name=""
            id=""
            placeholder="Confirm Password"
            onChange={(e) =>
              setData({ ...data, confirm_password: e.target.value })
            }
          />
          <button className="py-1 w-full bg-sky-400 text-white rounded-md  mt-4">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
