import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import firebase from "../assets/firebase.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  return (
    <div className=" bg-sky-700 text-gray-100 w-full h-screen">
      <section className=" max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full xl:max-w-[1200px]">
        <div>
          <p className=" text-4xl font-bold inline border-b-4">Skills</p>
          <p className=" text-2xl py-4">My Tech Stack</p>
        </div>

        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-10">
          <div className=" shadow-md shadow-sky-900 hover:scale-125 duration-500">
            <img
              src={html}
              alt="html icon"
              className=" w-20 mx-auto pt-2"
            />
            <p className=" my-5">HTML</p>
          </div>
          <div className=" shadow-md shadow-sky-900 hover:scale-125 duration-500">
            <img src={css} alt="css icon" className=" w-20 mx-auto pt-2" />
            <p className=" my-5">css</p>
          </div>
          <div className=" shadow-md shadow-sky-900 hover:scale-125 duration-500">
            <img
              src={javascript}
              alt="javascript icon"
              className=" w-20 mx-auto pt-2"
            />
            <p className=" my-5">JavaScript</p>
          </div>
          <div className=" shadow-md shadow-sky-900 hover:scale-125 duration-500">
            <img
              src={firebase}
              alt="firebase icon"
              className=" w-20 mx-auto pt-2"
            />
            <p className=" my-5">Firebase</p>
          </div>
          <div className=" shadow-md shadow-sky-900 hover:scale-125 duration-500">
            <img
              src={react}
              alt="react icon"
              className=" w-20 mx-auto pt-2"
            />
            <p className=" my-5">React</p>
          </div>
          <div className=" shadow-md shadow-sky-900 hover:scale-125 duration-500">
            <img
              src={tailwind}
              alt="Html icon"
              className=" w-20 mx-auto pt-2"
            />
            <p className=" my-5">Tailwind</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
