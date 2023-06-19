import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContex";

const Contact = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const textColor = isDarkMode ? "text-white" : "text-gray-700";

  return (
    <div name="contact" className="container mx-auto max-w-screen-lg text-white">
      <div className={`${textColor} px-4 md:px-20 overflow-auto`}>
        <div className="mx-auto mt-1 flex justify-center flex-col ">
          <h1 className="text-2xl md:text-4xl text-center mx-auto font-bold border-b-4 border-gray-500 p-2 inline">
            Contactame
          </h1>
          <p className="py-6 text-center">Llena el siguiente formulario</p>
        </div>

        <div className="flex justify-center items-center px-5 mb-0">
          <form
            action="https://getform.io/f/61c99527-2b15-42cf-9b55-ad37d2f7daa6"
            method="POST"
            className="w-full flex flex-col  md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Ingresa tu nombre"
              className="p-2 bg-transparent rounded-md border-2 border-gray-500 text-gray-600 focus:outline-none mb-4"
            />
            <input
              type="text"
              name="email"
              placeholder="Ingresa tu email"
              className="p-2 bg-transparent rounded-md border-2 border-gray-500 text-gray-600 focus:outline-none mb-4"
            />
            <textarea
              name="message"
              placeholder="Ingresa tu mensaje"
              rows="5"
              className="p-2 bg-transparent rounded-md border-2 border-gray-500 text-gray-600 focus:outline-none mb-4"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

