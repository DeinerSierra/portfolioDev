import { ThemeContext } from "../ThemeContex";
import React, { useContext } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import graphql from "../assets/graphql.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/node.png";
import mysql from "../assets/mysql.png";
import mongo from "../assets/mongo-removebg-preview.png";

const Experience = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const textColor = isDarkMode ? "text-white" : "text-gray-700";
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: nodejs,
      title: "Node.js",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      src: nextjs,
      title: "Next JS",
      style: "shadow-gray-700",
    },
    {
      id: 8,
      src: graphql,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 9,
      src: mysql,
      title: "MySql",
      style: "shadow-orange-400",
    },
    {
      id: 10,
      src: mongo,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 11,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div name="experience" className="container mx-auto max-w-screen-lg text-white">
      <div className={`${textColor} px-4 md:px-20 overflow-auto`}>
        <div className="mx-auto mt-1 flex justify-center flex-col items-center ">
          <h1 className="text-2xl md:text-4xl text-center mx-auto font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </h1>
          <p className="py-6 text-center">Hard Skills</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center p-5">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 h-24 flex flex-col justify-center items-center md:block md:h-40 w-24 md:w-40 py-14 px-2 mx-auto md:rounded-full overflow-hidden ${style}`}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full hidden md:block object-contain md:mx-auto md:mt-1"
              />
              <p className={`md:mt-2 md:mb-2 md:block sm:text-[${style}]`}>{title}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Experience;
