import React from "react";

const About = () => {
  return (
    <main className=" w-full h-full grid place-items-center bg-sky-800">
      <section
        className=" px-5 font-bold text-white max-w-[900px] xl:max-w-[1200px]
      "
      >
        <div className=" mb-10">
            <p className=" text-6xl inline border-b-4 mb-2 border-gray-100 sm:block">About</p>
        </div>
        <div className=" md:flex gap-6 text-white">
          <p className=" text-3xl mb-10 md:w-[60%]">
          <span className=" text-white font-bold">Hi. I'm Ochuko, </span>Thanks for visiting my website. Please make yourself
            at home
          </p>
          <p className=" text-xl md:text-2xl md:w-[80%] mb-5">
          As a frontend developer, I have a strong understanding of user-centered design principles and have honed my skills in creating visually appealing and intuitive websites. My experience with React, Next.js, and Tailwind CSS has allowed me to develop high-performance websites that are both fast and responsive. I am always looking for ways to optimize the user experience, whether that be through streamlining navigation or improving page load times.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
