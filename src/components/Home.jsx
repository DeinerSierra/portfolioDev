import React from "react";
import HeroImage from "../assets/deinerimg-removebg-preview.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { ThemeContext } from "../ThemeContex";
import { useContext } from "react";
const Home = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const textColor = isDarkMode ? "text-white" : "text-gray-700";
  return (
    <div
      name="home"
      className="container mx-auto max-w-screen-lg text-white p-4"
    >
      <div className={`${textColor} px-4  md:px-20 overflow-auto flex justify-between items-center`}>
        <div className="flex flex-col justify-center">
          <h2 className={`text-4xl sm:text-7xl font-bold ${textColor}`}>
            Soy Analista y Programador de Software
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          Tengo mas de 1 año de experiencia en el diseño y programación de software basados en requerimientos. 
          Mi objetivo es diseñar y desarrollar soluciones efectivas, escalables y de alto rendimiento. 
         </p>

          <div className="">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="shadow-gray-700 hidden md:block">
          <img
            src={HeroImage}
            alt="my profile"
            className=" rounded-full overflow-hidden mx-auto my-auto w-2/3 md:w-full shadow-md hover:scale-105 duration-500 shadow-blue-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
