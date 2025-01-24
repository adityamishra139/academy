import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import axios from "axios";
import {jwtDecode} from "jwt-decode"; // Correct import for jwt-decode
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./pages/Contact";
import Gem from "./pages/Gem";
import AdminPanel from "./pages/AdminPanel";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/Signup"; 
import Testimonial from "./pages/Testimonials";
import { userState } from "./atoms";
import { useSetRecoilState } from "recoil";

function App() {
  const resetUser = useSetRecoilState(userState);
  const setUser = useSetRecoilState(userState);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      offset: 100,
      duration: 800,
      delay: 100,
    });
    AOS.refresh();

    // Axios Interceptors for Authorization
    axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("jwtToken");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          console.error("Unauthorized access - clearing session.");
          clearUserSession();
        }
        return Promise.reject(error);
      }
    );

    const fetchDetails = async (email) => {
      try {
        const user = await axios.post("http://localhost:3000/api/user/aboutUser", { email });
        setUser({
          id: user.data.id,
          name: user.data.name,
          email: user.data.email,
          isAdmin: user.data.isAdmin,
        });
      } catch (e) {
        console.error(e);
      }
    };

    const checkTokenOnLoad = () => {
      const token = localStorage.getItem("jwtToken");
      if (token) {
        try {
          const decodedToken = jwtDecode(token);
          const currentTime = Date.now() / 1000;
          console.log(decodedToken);
          if (decodedToken.exp < currentTime) {
            alert("Token expired. Logging out.");
            clearUserSession();
          } else {
            fetchDetails(decodedToken.email);
            scheduleTokenExpiry(decodedToken.exp * 1000);
          }
        } catch (error) {
          console.error("Invalid token. Clearing session.");
          clearUserSession();
        }
      }
    };

    const scheduleTokenExpiry = (expiryTime) => {
      const currentTime = Date.now();
      const timeUntilExpiry = expiryTime - currentTime;

      if (timeUntilExpiry > 0) {
        setTimeout(() => {
          clearUserSession();
          alert("Session expired. Please sign in again.");
        }, timeUntilExpiry);
      }
    };

    const clearUserSession = async () => {
      localStorage.removeItem("jwtToken");
      localStorage.removeItem("jwtExpiry");
      await resetUser({
        id: null,
        name: "",
        email: "",
        isAdmin: false,
      });
      navigate("/");
    };

    checkTokenOnLoad();

    window.addEventListener("storage", (event) => {
      if (event.key === "jwtToken" && !event.newValue) {
        clearUserSession();
      }
    });

    return () => {
      window.removeEventListener("storage", () => {});
    };
  }, [setUser, navigate]);

  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gem" element={<Gem />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/testimonial" element={<Testimonial />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
