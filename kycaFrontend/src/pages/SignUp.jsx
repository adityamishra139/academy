import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useSetRecoilState } from "recoil";
import { userState } from "../atoms";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [name,setName] = useState("")
  const [password,setPassword] = useState("")

    const setUser = useSetRecoilState(userState);

  const handleSignUp = async(e) => {
    e.preventDefault();
    
    try{
        const res = await axios.post('http://localhost:3000/api/user/signup',{name:name, email:email, password:password})

        const obj = res.data.user;

        setUser({
            name:obj.name,
            email:obj.email,
            isAdmin:obj.isAdmin,
            id:obj.id
        })

        navigate('/');
        console.log("Sign Up clicked");
    }
    catch(e)
    {
        console.error(e);
    }
  };

  return (
    <>
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          className="w-full p-2 mb-4 border rounded"
        />
        <button
          onClick={handleSignUp}
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Sign Up
        </button>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/signin")}
            className="text-blue-500 hover:underline"
          >
            Sign In
          </button>
        </p>
      </form>
    </div>
    </>
  );
};

export default SignUp;
