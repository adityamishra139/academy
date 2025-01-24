import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import {jwtDecode} from "jwt-decode"; // Correct import for jwtDecode
import { userState } from "../atoms";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useSetRecoilState(userState);
  const alertShownRef = useRef(false);
  const fetchDetails=async(email)=>{
    try{
      const user=await axios.post("http://localhost:3000/api/user/aboutUser",{email:email});
      console.log(user);
      setUser({
        id: user.data.id,
        name: user.data.name,
        email: user.data.email,
        isAdmin: user.data.isAdmin,
      });
    }
    catch(e){
      console.error(e);
    }
  }
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/user/signin", {
        email: email,
        password: password,
      });

      const token = res.data.token;

      if (!token) {
        throw new Error("No token received.");
      }

      // Decode the token
      const decodedToken = jwtDecode(token);
      const expiryTime = decodedToken.exp * 1000; // Convert expiry to milliseconds

      // Store token and expiry time in localStorage
      localStorage.setItem("jwtToken", token);
      localStorage.setItem("jwtExpiry", expiryTime);
      fetchDetails(decodedToken.email);

      // Schedule token expiry
      scheduleTokenExpiry(expiryTime);

      navigate("/");
    } catch (error) {
      console.error("Sign-in failed:", error);
      alert("Failed to login, please check your credentials.");
    }
  };

  const scheduleTokenExpiry = (expiryTime) => {
    const currentTime = Date.now();
    const timeUntilExpiry = expiryTime - currentTime;

    if (timeUntilExpiry > 0) {
      setTimeout(() => {
        clearUserSession();
        if (!alertShownRef.current) {
          alert("Session expired. Please sign in again.");
          alertShownRef.current = true;
        }
      }, timeUntilExpiry);
    } else {
      clearUserSession();
      if (!alertShownRef.current) {
        alert("Session expired. i am here Please sign in again.");
        alertShownRef.current = true;
      }
    }
  };

  const clearUserSession = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("jwtExpiry");
    setUser({
      id: null,
      name: "",
      email: "",
      isAdmin: false,
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    const expiryTime = localStorage.getItem("jwtExpiry");

    if (token && expiryTime) {
      const currentTime = Date.now();
      if (currentTime > expiryTime) {
        clearUserSession();
        if (!alertShownRef.current) {
          alert("Session expired. Please sign in again.");
          alertShownRef.current = true;
        }
      } else {
        scheduleTokenExpiry(Number(expiryTime));
      }
    }
  }, [setUser]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <form className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
