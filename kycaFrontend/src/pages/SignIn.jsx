import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useSetRecoilState } from "recoil";
import { userState } from "../atoms";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password , setPassword] = useState("")
  const setUser = useSetRecoilState(userState);
  const handleSignIn = async(e) => {
    e.preventDefault();
    try{
        const res = await axios.post('http://localhost:3000/api/user/signin',{email:email,password:password})
        const obj = res.data.user
        console.log(obj);
        console.log(obj.id,obj.name)
        //add different user fields here in recoil
        setUser({
            id:obj.id,
            name:obj.name,
            email:obj.email,
            isAdmin:obj.isAdmin
        })
        navigate('/')
    }
    catch(e)
    {
        console.error(e)
        alert('Failed to login , please check your credentials')
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
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
          onClick={handleSignIn}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Sign In
        </button>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-blue-500 hover:underline"
          >
            Sign Up
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
