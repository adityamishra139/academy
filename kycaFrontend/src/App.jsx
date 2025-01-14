import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "./pages/Contact";
import Gem from "./pages/Gem";
import AdminPanel from "./pages/AdminPanel";
function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gem" element={<Gem />} />
            <Route path="/adminpanel" element={<AdminPanel/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
