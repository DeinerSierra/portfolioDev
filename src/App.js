import React, { useContext } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import { ThemeContext } from "./ThemeContex";

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  const backgroundColor = isDarkMode
    ? "bg-gradient-to-b from-gray-800 to-black"
    : "bg-white-800";
  return (
    <div className={`md:container md:mx-auto ${backgroundColor}`}>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
