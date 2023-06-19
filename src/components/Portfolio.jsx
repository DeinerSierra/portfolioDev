import React, { useContext } from "react";
import { Link } from "react-scroll";
import papeleria from "../assets/portfolio/books.jpg";
import RestApiBlog from "../assets/portfolio/blog.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import restApiSocialMedia from "../assets/portfolio/social-media.jpg";
import restApiEccomerce from "../assets/portfolio/sale.jpg";
import { ThemeContext } from "../ThemeContex";

const Portfolio = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const textColor = isDarkMode ? "text-white" : "text-gray-700";

  const resapi = [
    {
      id: 1,
      src: RestApiBlog,
      url: "https://github.com/DeinerSierra/ApiRestBlogNodejs",
      code: "https://github.com/DeinerSierra/ApiRestBlogNodejs"
    },
    {
      id: 2,
      src: restApiEccomerce,
      url: "https://github.com/DeinerSierra/RestApiEcommerce",
      code: "https://github.com/DeinerSierra/RestApiEcommerce"
    },
    {
      id: 3,
      src: restApiSocialMedia,
      url: "https://github.com/DeinerSierra/RestApi-Red-Social",
      code: "https://github.com/DeinerSierra/RestApi-Red-Social"
    }
  ];

  const portfolios = [
    {
      id: 1,
      src: papeleria,
      url: "https://papeleriagaitana.up.railway.app/",
      code: "https://github.com/DeinerSierra/proyecto_full_stack_mern"
    },
    
  ];

  return (
    <div
      name="portfolio"
      className={` container mx-auto max-w-screen-lg text-white ${textColor}`}
    >
      <div className={`${textColor} px-4  md:px-20 overflow-auto`}>
        <div className="mx-auto mt-1 flex justify-center flex-col">
          <h1 className="text-4xl mt-0 text-center mx-auto font-bold border-b-4 border-gray-500 p-2 inline">
            Mis Proyectos
          </h1>
          <p className="py-6 text-center">
            Presento los proyectos realizados durante mi carrera
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 sm:px-0 p-5 ">
          {portfolios.map(({ id, src, url, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-full px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={url}>Demo</a>
                </button>
                <button className="w-full px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code}>GitHub</a>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto flex justify-center flex-col ">
          <h1 className="text-4xl mt-5 text-center mx-auto font-bold border-b-4 border-gray-500 p-2 inline">
            Mis Proyectos RES API´s
          </h1>
          <p className="py-6 text-center">
            Proyectos API´s usando Node.js, MongoDB y ORM Mongoose
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 sm:px-0 p-5 ">
          {resapi.map(({ id, src, url, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-full px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code}>GitHub</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
