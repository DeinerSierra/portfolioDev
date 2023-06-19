import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContex";

const About = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const textColor = isDarkMode ? "text-white" : "text-gray-700";

  return (
    <div name="about" className="container mx-auto max-w-screen-lg text-white">
      <div className={`${textColor} px-4 md:px-20 overflow-auto`}>
        <div className="mx-auto mt-1 flex justify-center flex-col ">
          <h1 className="text-2xl md:text-4xl text-center mx-auto font-bold border-b-4 border-gray-500 p-2 inline">
            Sobre Mi
          </h1>
        </div>

        <p className={`text-xl text-center mt-5 ${textColor}`}>
          Soy Analista y Desarrollador de Sistemas de Información con conocimientos en HTML, CSS, JS, PHP y NodeJS.
          Me apasiona el desarrollo de software y estoy buscando una oportunidad para comenzar mi carrera como
          desarrollador. Tengo experiencia trabajando en proyectos individuales y en equipo, y estoy dispuesto a aprender y
          crecer en un ambiente de trabajo profesional.
        </p>
      </div>
    </div>
  );
};

export default About;
