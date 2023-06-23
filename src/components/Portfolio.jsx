import React, { useContext } from "react";
import { Link } from "react-scroll";
import papeleria from "../assets/portfolio/books.jpg";
import RestApiBlog from "../assets/portfolio/blog.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import appcomida from "../assets/portfolio/appcomida.png";
import criptomonedas from "../assets/portfolio/critomonedas.png";
import nucleosapp from "../assets/portfolio/nucleosapp.png";
import controlgastos from "../assets/portfolio/controlgastos.png";
import potcast from "../assets/portfolio/potcast.png";
import airbn from "../assets/portfolio/airbn.png";
import bienes from "../assets/portfolio/bieneslandig.png";
import spa from "../assets/portfolio/carolinaspa.png";
import meetlanding from "../assets/portfolio/meetlanding.png";
import cooklanding from "../assets/portfolio/cooklanding.png";
import guitarestore from "../assets/portfolio/guitar.png";
import cafeteriastore from "../assets/portfolio/cafeterialanding.png";
import nationalpark from "../assets/portfolio/nationalpark.png";
import mueblestore from "../assets/portfolio/mueblestore.png";
import cursosstore from "../assets/portfolio/cursosstore.png";
import fincaraiz from "../assets/portfolio/9.jpg";
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
  const frontend = [
    {
      id:1, 
      src:appcomida,
      url:'https://gorgeous-kitten-9a46da.netlify.app/',
      code:'https://gorgeous-kitten-9a46da.netlify.app/'
    },
    {
      id:2, 
      src:controlgastos,
      url:'https://luxury-bienenstitch-f466c7.netlify.app/',
      code:'https://luxury-bienenstitch-f466c7.netlify.app/'
    },
    {
      id:3, 
      src:criptomonedas,
      url:'https://lustrous-gumption-94bfa6.netlify.app/',
      code:'https://lustrous-gumption-94bfa6.netlify.app/'
    },
    {
      id:4, 
      src:nucleosapp,
      url:'https://splendid-gumdrop-1bfb58.netlify.app/',
      code:'https://splendid-gumdrop-1bfb58.netlify.app/'
    },
    {
      id:5, 
      src:potcast,
      url:'https://lively-cheesecake-eb1ffa.netlify.app/',
      code:'https://lively-cheesecake-eb1ffa.netlify.app/'
    },
    {
      id:6, 
      src:airbn,
      url:'https://glistening-froyo-d2867c.netlify.app/',
      code:'https://glistening-froyo-d2867c.netlify.app/'
    },
    {
      id:7, 
      src:bienes,
      url:'https://neon-churros-1d6102.netlify.app/',
      code:'https://glistening-froyo-d2867c.netlify.app/'
    },
    {
      id:8, 
      src:spa,
      url:'https://phenomenal-arithmetic-d6c39e.netlify.app/',
      code:'https://phenomenal-arithmetic-d6c39e.netlify.app/'
    },
    {
      id:9, 
      src:meetlanding,
      url:'https://phenomenal-arithmetic-d6c39e.netlify.app/',
      code:'https://phenomenal-arithmetic-d6c39e.netlify.app/'
    },
    {
      id:10, 
      src:cooklanding,
      url:'https://serene-longma-5ca680.netlify.app/',
      code:'https://serene-longma-5ca680.netlify.app/'
    },
    {
      id:11, 
      src:guitarestore,
      url:'https://astounding-torte-cbd81f.netlify.app/index.html',
      code:'https://astounding-torte-cbd81f.netlify.app/index.html'
    },
    {
      id:12, 
      src:cafeteriastore,
      url:'https://inquisitive-sunshine-044bd6.netlify.app/',
      code:'https://inquisitive-sunshine-044bd6.netlify.app/'
    },
    {
      id:13, 
      src:nationalpark,
      url:'https://proyectobootstrap1.netlify.app/',
      code:'https://proyectobootstrap1.netlify.app/'
    },
    {
      id:14, 
      src:mueblestore,
      url:'https://dsfurniturestore.netlify.app/',
      code:'https://dsfurniturestore.netlify.app/'
    },
    {
      id:15, 
      src:cursosstore,
      url:'https://carritocomprasdeinersierrajs.netlify.app/',
      code:'https://carritocomprasdeinersierrajs.netlify.app/'
    }
  ]
  const portfolios = [
    {
      id: 1,
      src: papeleria,
      url: "https://papeleriagaitana.up.railway.app/",
      code: "https://github.com/DeinerSierra/proyecto_full_stack_mern"
    },
    {
      id: 2,
      src: fincaraiz,
      url: "https://fincaraiznodemvc-production.up.railway.app/",
      code: "https://github.com/DeinerSierra/fincaRaiz_node_mvc"
    },
    {
      id: 3,
      src: fincaraiz,
      url: "https://fincaraiznodemvc-production.up.railway.app/",
      code: "https://github.com/DeinerSierra/jobsiteITnodejs"
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
            Mis Proyectos FrontEnd
          </h1>
          <p className="py-6 text-center">
            Proyectos realizados durante mi carrera como desarrollador web
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 sm:px-0 p-5 ">
          {frontend.map(({ id, src, url, code }) => (
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
              </div>
            </div>
          ))}
        </div>


        <div className="mx-auto mt-1 flex justify-center flex-col">
          <h1 className="text-4xl mt-0 text-center mx-auto font-bold border-b-4 border-gray-500 p-2 inline">
            Mis Proyectos Backend-FontEnd
          </h1>
          <p className="py-6 text-center">
            Poyectos fullStack
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
