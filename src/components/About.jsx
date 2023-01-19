import React from "react";

const About = () => {
  return (
    <main className=" w-full h-screen grid place-items-center bg-sky-800">
      <section
        className=" px-5 font-bold text-gray-100 max-w-[900px] xl:max-w-[1200px]
      "
      >
        <div className=" mb-10">
            <p className=" text-6xl inline border-b-4 mb-2 border-gray-100 sm:block">About</p>
        </div>
        <div className=" md:flex gap-8 text-gray-300">
          <p className=" text-3xl mb-10 md:w-[60%]">
          <span className=" text-white font-bold ">Hi. I'm Ochuko, </span>Thanks for visiting my website. Please make yourself
            at home
          </p>
          <p className=" text-2xl md:w-[80%]">
            I am <span className=" text-white font-bold ">a front-end developer with over four years experience
            building client-side websites and web applications using Vanilla
            JavaScript and React.</span> I do most of my work with React and Tailwind
            CSS; however, I'm always learning new tools & technologies. I have
            experience working with Next.js, Node.js, Express. <span className=" text-white font-bold">When i am not coding, i enjoy watching the Nba and football</span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
