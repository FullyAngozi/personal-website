import React from "react";
import calmthought from "../assets/projects/calmthought.png";
import superhero from "../assets/projects/superhero.png";
import eat from "../assets/projects/eat.png";

const Work = () => {
  return (
    <div className=" w-full bg-sky-800 h-full overflow-auto">
      <section className=" max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className=" pb-8 text-gray-100">
          <p className=" text-4xl font-bold inline border-b-4 ">Experience</p>
          <p className=" py-6">Take a look at some of my projects</p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          <div
            style={{ backgroundImage: `url(${calmthought})` }}
            className="shadow-lg shadow-sky-900 group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100 text-center">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Funny Quotes server Application
              </span>
              <div className=" pt-8">
                <a href="https://calmthought.netlify.app/" target="_blank">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/FullyAngozi/advice-app" target="_blank">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${superhero})` }}
            className=" shadow-lg shadow-sky-900 group container rounded-md flex justify-center items-center mx-auto content-div "
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100 text-center">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Superhero profile  Application
              </span>
              <div className=" pt-8 text-center">
                <a href="https://superhero-db.netlify.app/" target="_blank">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/FullyAngozi/superheropro" target="_blank">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${eat})` }}
            className=" shadow-lg shadow-sky-900 group container rounded-md flex justify-center items-center mx-auto content-div object-cover "
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100 text-center">
              <span className=" text-2xl font-bold text-white tracking-wider">
                Food delivery UI
              </span>
              <div className=" pt-8 text-center">
                <a href="https://helpful-twilight-ce79ec.netlify.app/" target="_blank">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/FullyAngozi/besteat-delivery" target="_blank">
                  <button className=" text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
