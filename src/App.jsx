import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
      <div>
        <Navbar />
            <Home />
            <About />
            <Courses />
            <Reviews />
            <Contact />
        <Footer/>
      </div>
  );
};

export default App;
